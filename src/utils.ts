export type RangeChunk = [start: number, end: number, styleId: number];

export const merge = (
  ranges: RangeChunk[]
): [number, number, { [key: number]: true | undefined }][] => {
  ranges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const results: [number, number, { [key in number]: true | undefined }][] = [];
  let last: [number, number, { [key in number]: true | undefined }];

  ranges.forEach(([start, end, styleId]) => {
    if (!last || start >= last[1]) {
      results.push((last = [start, end, { [styleId]: true }]));
    } else if (end > last[1]) {
      last[2][styleId] = true;
      results.push((last = [last[1], end, { [styleId]: true }]));
    } else if (end <= last[1]) {
      const lastEnd = last[1];
      const lastStyle = { ...last[2] };
      const lastStyle2 = { ...last[2] };
      if (last[0] !== start) {
        last[1] = start;
      } else {
        results.pop();
      }
      lastStyle[styleId] = true;
      results.push((last = [start, end, lastStyle]));
      if (end !== lastEnd) {
        results.push((last = [end, lastEnd, lastStyle2]));
      }
    }
  });

  return results;
};
