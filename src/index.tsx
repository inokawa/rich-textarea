import React, { useEffect, useRef, useState, useMemo } from "react";
// @ts-expect-error
import rangeAtIndex from "range-at-index";

export type Token = { start: number; end: number; style: React.CSSProperties };

export type Tokenizer = (text: string) => Token[][];

export type HighlightProps = {
  children: React.ReactNode;
  tokenizer: Tokenizer;
  style?: React.CSSProperties;
};

const wrapperStyle: React.CSSProperties = { position: "relative" };

const toHighlight = (
  root: HTMLDivElement,
  tokens: Token[][]
): React.ReactNode[] => {
  const rootRect = root.getBoundingClientRect();
  const top = rootRect.top;
  const left = rootRect.left;

  const nodes: React.ReactNode[] = [];
  tokens.forEach((rows, rowIndex) => {
    if (!rows) return;
    const node = root.children[rowIndex];
    if (!node) return;
    rows.forEach((r, colIndex) => {
      const range = rangeAtIndex(node, r.start, r.end + 1) as Range;
      const rects = range.getClientRects();
      Array.from(rects).forEach((rect, rectIndex) => {
        nodes.push(
          <div
            key={`hl-${rowIndex}-${colIndex}-${rectIndex}`}
            style={{
              position: "absolute",
              top: rect.top - top,
              left: rect.left - left,
              width: rect.width,
              height: rect.height,
              ...r.style,
            }}
          />
        );
      });
    });
  });

  return nodes;
};

export const Highlight = ({
  children,
  tokenizer,
  style: overrideStyle,
}: HighlightProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [highlights, setOverlays] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    if (!ref.current) return;
    const text = ref.current.textContent || "";
    const observer = new ResizeObserver(() => {
      if (!ref.current) return;
      const tokens = tokenizer(text);
      const nodes = toHighlight(ref.current, tokens);
      setOverlays(nodes);
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [children]);

  const style = useMemo(() => ({ ...overrideStyle, ...wrapperStyle }), [
    overrideStyle,
  ]);

  return (
    <div ref={ref} style={style}>
      {children}
      {highlights}
    </div>
  );
};
