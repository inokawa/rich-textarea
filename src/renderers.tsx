import { execReg } from "./regex";
import { RangeChunk, merge } from "./utils";

export type Renderer = (value: string) => React.ReactNode;

export const createRegexRenderer = (
  matchers: [RegExp, React.CSSProperties][]
): Renderer => {
  return (value) => {
    const styles: { [key: string]: React.CSSProperties } = {};
    const ranges: RangeChunk[] = [];
    matchers.forEach(([matcher, style], i) => {
      ranges.push(
        ...execReg(matcher, value).map((m): RangeChunk => {
          const start = m.index;
          const end = m.index + m[0].length;
          return [start, end, i];
        })
      );
      styles[String(i)] = style;
    });

    const chunks = merge(ranges);
    const res: (string | React.ReactElement)[] = [];
    let prevEnd = 0;
    let prevStart = 0;
    for (let i = 0; i < chunks.length; i++) {
      const [start, end, styleIds] = chunks[i];
      res.push(value.slice(prevEnd, start));

      const style = Object.keys(styleIds).reduce((acc, i) => {
        const s = styles[i];
        Object.keys(s).forEach((k) => {
          (acc as any)[k] = (s as any)[k];
        });
        return acc;
      }, {} as React.CSSProperties);
      res.push(
        <span key={i} style={style}>
          {value.slice(start, end)}
        </span>
      );
      prevEnd = end;
      prevStart = start;
    }
    res.push(value.slice(prevEnd));
    return res;
  };
};
