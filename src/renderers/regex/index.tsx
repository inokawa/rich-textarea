import { execReg } from "./utils";
import type { Renderer } from "../../types";
import { useIsomorphicLayoutEffect } from "../../useIsomorphicLayoutEffect";
import { memo, useRef } from "react";

export type StyleOrRender =
  | React.CSSProperties
  | ((props: {
      children: React.ReactNode;
      value: string;
      key?: string | undefined;
    }) => React.ReactNode);

/**
 * An utility to create renderer function with regex.
 *
 * The priority is descending order.
 */
export const createRegexRenderer = (
  matchers: [regex: RegExp, style: StyleOrRender][]
): Renderer => {
  const allStyles = matchers.map(([, style]) => style);

  return (value) => {
    const [indexSet, startToStyleMap, endToStyleMap] = matchers.reduce(
      (acc, [matcher, style]) => {
        execReg(matcher, value).forEach((m) => {
          const start = m.index;
          const end = m.index + m[0]!.length;

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

const createCSSHighlightID = (i: number): string => `rich-textarea-${i}`;

const CSSHighlighter = memo(
  ({
    _value: value,
    _regexes: regexes,
  }: {
    _value: string;
    _regexes: RegExp[];
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    useIsomorphicLayoutEffect(() => {
      const el = ref.current!.firstChild!;

      const highlights = regexes.flatMap((r) => {
        return new Highlight(
          ...execReg(r, value).map((m) => {
            const start = m.index;
            const end = m.index + m[0]!.length;

            const range = new Range();
            range.setStart(el, start);
            range.setEnd(el, end);
            return range;
          })
        );
      });

      highlights.forEach((h, i) => {
        CSS.highlights.set(createCSSHighlightID(i), h);
      });

      return () => {
        highlights.forEach((h, i) => {
          CSS.highlights.delete(createCSSHighlightID(i));
          h.clear();
        });
      };
    }, [value]);
    return <div ref={ref}>{value}</div>;
  }
);

/**
 * {@link createRegexRenderer} but rendered with [CSS Custom Highlight API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API).
 * @experimental
 */
export const createCSSCustomHighlightRenderer = (
  matchers: [regex: RegExp, style: string][]
): Renderer => {
  const styleStr = matchers.reduce((acc, [, style], i) => {
    return acc + `::highlight(${createCSSHighlightID(i)}){${style}}`;
  }, "");
  const regexes = matchers.map(([r]) => r);

  return (value) => {
    return (
      <>
        <CSSHighlighter _value={value} _regexes={regexes} />
        <style>{styleStr}</style>
      </>
    );
  };
};
