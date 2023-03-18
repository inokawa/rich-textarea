export type RangeChunk<T> = [start: number, end: number, id: T];

type MergedRangeChunk<T> = [start: number, end: number, ids: Set<T>];

export const mergeRanges = <T>(
  ranges: RangeChunk<T>[]
): MergedRangeChunk<T>[] => {
  if (!ranges.length) return [];

  ranges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const results: MergedRangeChunk<T>[] = [];
  let prev: MergedRangeChunk<T> | undefined;

  ranges.forEach(([start, end, id]) => {
    if (!prev) {
      results.push((prev = [start, end, new Set([id])]));
      return;
    }
    const [prevStart, prevEnd] = prev;
    if (start >= prevEnd) {
      // ex. [0,1]-[1,2] [0,1]-[2,3]
      results.push((prev = [start, end, new Set([id])]));
    } else if (end > prevEnd) {
      // ex. [0,2]-[1,3]
      prev[2].add(id);
      results.push((prev = [prevEnd, end, new Set([id])]));
    } else if (end <= prevEnd) {
      // ex. [0,2]-[1,2] [0,3]-[1,2]
      const ids1 = new Set([...prev[2], id]);
      const id2s = new Set(prev[2]);
      if (prevStart !== start) {
        prev[1] = start;
      } else {
        results.pop();
      }
      results.push((prev = [start, end, ids1]));
      if (end !== prevEnd) {
        results.push((prev = [end, prevEnd, id2s]));
      }
    }
  });

  return results;
};
