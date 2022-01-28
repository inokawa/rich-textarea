import { execReg, MatchChunk, merge } from "./regex";

export type Renderer = (value: string) => React.ReactNode;

export const createRegexRenderer = (
  matchers: [RegExp, React.CSSProperties][]
): Renderer => {
  return (value) => {
    const styles: { [key: string]: React.CSSProperties } = {};
    const matches: MatchChunk[] = [];
    matchers.forEach(([matcher, style], i) => {
      matches.push(
        ...execReg(matcher, value).map((m): MatchChunk => {
          const start = m.index;
          const end = m.index + m[0].length;
          return [start, end, i];
        })
      );
      styles[String(i)] = style;
    });

    const chunks = merge(matches);
    const res: (string | React.ReactElement)[] = [];
    let prevEnd = 0;
    let prevStart = 0;
    for (let i = 0; i < chunks.length; i++) {
      const [start, end, styleIndexes] = chunks[i];
      res.push(value.slice(prevEnd, start));

      const style = Object.keys(styleIndexes).reduce((acc, i) => {
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
