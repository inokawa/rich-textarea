import { execReg } from "./regex";
import { RangeChunk, merge } from "./utils";

export type Renderer = (value: string) => React.ReactNode;

export type StyleOrRender =
  | React.CSSProperties
  | ((props: {
      children: React.ReactNode;
      value: string;
      key?: string | undefined;
    }) => React.ReactNode);

export const createRegexRenderer = (
  matchers: [RegExp, StyleOrRender][]
): Renderer => {
  return (value) => {
    const styles: { [key: string]: StyleOrRender } = {};
    const ranges: RangeChunk[] = [];
    matchers.forEach(([matcher, style], i) => {
      ranges.push(
        ...execReg(matcher, value).map((m): RangeChunk => {
          const start = m.index;
          const end = m.index + m[0]!.length;
          return [start, end, i];
        })
      );
      styles[String(i)] = style;
    });

    const chunks = merge(ranges);
    const res: React.ReactNode[] = [];
    let prevEnd = 0;
    // let prevStart = 0;
    for (let i = 0; i < chunks.length; i++) {
      const [start, end, styleIds] = chunks[i]!;
      res.push(value.slice(prevEnd, start));

      const v = value.slice(start, end);
      res.push(
        Object.keys(styleIds).reduceRight((acc, si, index) => {
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
      // prevStart = start;
    }
    res.push(value.slice(prevEnd));
    return res;
  };
};
