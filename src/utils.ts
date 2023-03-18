export type RangeChunk = [start: number, end: number, styleId: number];

type MergedRangeChunk = [start: number, end: number, styleIds: Set<number>];

export const mergeRanges = (ranges: RangeChunk[]): MergedRangeChunk[] => {
  ranges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const results: MergedRangeChunk[] = [];
  let last: MergedRangeChunk;

  ranges.forEach(([start, end, styleId]) => {
    if (!last || start >= last[1]) {
      results.push((last = [start, end, new Set([styleId])]));
    } else if (end > last[1]) {
      last[2].add(styleId);
      results.push((last = [last[1], end, new Set([styleId])]));
    } else if (end <= last[1]) {
      const lastEnd = last[1];
      const lastStyle = new Set(last[2]);
      const lastStyle2 = new Set(last[2]);
      if (last[0] !== start) {
        last[1] = start;
      } else {
        results.pop();
      }
      lastStyle.add(styleId);
      results.push((last = [start, end, lastStyle]));
      if (end !== lastEnd) {
        results.push((last = [end, lastEnd, lastStyle2]));
      }
    }
  });

  return results;
};
