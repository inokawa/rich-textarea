import { execReg } from "./regex";
import type { Renderer } from "./types";
import { RangeChunk, mergeRanges } from "./utils";

export type StyleOrRender =
  | React.CSSProperties
  | ((props: {
      children: React.ReactNode;
      value: string;
      key?: string | undefined;
    }) => React.ReactNode);

/**
 * An utility to create renderer function with regex.
 */
export const createRegexRenderer = (
  matchers: [RegExp, StyleOrRender][]
): Renderer => {
  return (value) => {
    const styles: StyleOrRender[] = [];
    const ranges: RangeChunk<number>[] = [];
    matchers.forEach(([matcher, style], i) => {
      ranges.push(
        ...execReg(matcher, value).map((m): RangeChunk<number> => {
          const start = m.index;
          const end = m.index + m[0]!.length;
          return [start, end, i];
        })
      );
      styles.push(style);
    });

    const chunks = mergeRanges(ranges);
    const res: React.ReactNode[] = [];
    let prevEnd = 0;
    for (let i = 0; i < chunks.length; i++) {
      const [start, end, styleIds] = chunks[i]!;
      res.push(value.slice(prevEnd, start));

      const v = value.slice(start, end);
      res.push(
        Array.from(styleIds).reduceRight((acc, si, index) => {
          const styleOrRender = styles[si];
          const key = index === 0 ? String(start) : undefined;
          if (typeof styleOrRender === "function") {
            return styleOrRender({ children: acc, value: v, key });
          } else {
            return (
              <span key={key} style={styleOrRender}>
                {acc}
              </span>
            );
          }
        }, v as React.ReactNode)
      );
      prevEnd = end;
    }
    res.push(value.slice(prevEnd));
    return res;
  };
};
