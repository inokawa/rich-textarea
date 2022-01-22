export type MatchChunk = [start: number, end: number, matcherIndex: number];

export const merge = (
  ranges: MatchChunk[]
): [number, number, { [key: number]: true | undefined }][] => {
  ranges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const results: [number, number, { [key in number]: true | undefined }][] = [];
  let last: [number, number, { [key in number]: true | undefined }];

  ranges.forEach(([start, end, styleIndex]) => {
    if (!last || start >= last[1]) {
      results.push((last = [start, end, { [styleIndex]: true }]));
    } else if (end > last[1]) {
      last[2][styleIndex] = true;
      results.push((last = [last[1], end, { [styleIndex]: true }]));
    } else if (end <= last[1]) {
      const lastEnd = last[1];
      const lastStyle = { ...last[2] };
      const lastStyle2 = { ...last[2] };
      if (last[0] !== start) {
        last[1] = start;
      } else {
        results.pop();
      }
      lastStyle[styleIndex] = true;
      results.push((last = [start, end, lastStyle]));
      if (end !== lastEnd) {
        results.push((last = [end, lastEnd, lastStyle2]));
      }
    }
  });

  return results;
};

export const execReg = (reg: RegExp, text: string): RegExpExecArray[] => {
  const results: RegExpExecArray[] = [];
  let match = reg.exec(text);
  while (!!match) {
    results.push(match);
    match = reg.exec(text);
  }
  return results;
};
