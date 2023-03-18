import { execReg } from "./regex";
import type { Renderer } from "./types";

export type StyleOrRender =
  | React.CSSProperties
  | ((props: {
      children: React.ReactNode;
      value: string;
      key?: string | undefined;
    }) => React.ReactNode);

type RangeChunk = [start: number, end: number];

/**
 * An utility to create renderer function with regex.
 *
 * The priority is descending order.
 */
export const createRegexRenderer = (
  matchers: [RegExp, StyleOrRender][]
): Renderer => {
  const allStyles = matchers.map(([, style]) => style);

  return (value) => {
    const [indexSet, startToStyleMap, endToStyleMap] = matchers.reduce(
      (acc, [matcher, style]) => {
        const ranges = execReg(matcher, value).map((m): RangeChunk => {
          return [m.index, m.index + m[0]!.length];
        });
        ranges.forEach(([start, end]) => {
          acc[0].add(start).add(end);
          let startStyles = acc[1].get(start);
          let endStyles = acc[2].get(end);
          if (!startStyles) {
            acc[1].set(start, (startStyles = []));
          }
          if (!endStyles) {
            acc[2].set(end, (endStyles = []));
          }
          startStyles.push(style);
          endStyles.push(style);
        });
        return acc;
      },
      [
        new Set<number>(),
        new Map<number, StyleOrRender[]>(),
        new Map<number, StyleOrRender[]>(),
      ] as const
    );
    const indexes = Array.from(indexSet);
    indexes.sort((a, b) => {
      return a - b;
    });

    let prevEnd = 0;
    const activeStyles: StyleOrRender[] = [];
    const res: React.ReactNode[] = [];
    for (let i = 0; i < indexes.length; i++) {
      const start = indexes[i]!;
      const end = indexes[i + 1] ?? value.length;
      if (start === end) continue;
      const headValue = value.slice(prevEnd, start);
      if (headValue) {
        res.push(headValue);
      }
      const startStyles = startToStyleMap.get(start);
      const endStyles = endToStyleMap.get(end);
      if (startStyles) {
        startStyles.forEach((s) => {
          activeStyles.push(s);
        });
        activeStyles.sort((a, b) => {
          return allStyles.indexOf(b) - allStyles.indexOf(a);
        });
      }

      const v = value.slice(start, end);
      res.push(
        activeStyles.reduceRight((acc, styleOrRender, j) => {
          const key = j === 0 ? String(start) : undefined;
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

      if (endStyles) {
        endStyles.forEach((s) => {
          activeStyles.splice(activeStyles.indexOf(s), 1);
        });
      }

      prevEnd = end;
    }

    const tailValue = value.slice(prevEnd);
    if (tailValue) {
      res.push(tailValue);
    }

    return res;
  };
};
