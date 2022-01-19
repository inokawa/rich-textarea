import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  createElement,
} from "react";

const STYLE_KEYS: (keyof React.CSSProperties)[] = [
  "padding",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "margin",
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "border",
  "borderWidth",
  "borderTopWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderStyle",
  "borderTopStyle",
  "borderBottomStyle",
  "borderLeftStyle",
  "borderRightStyle",
  "fontSize",
  "fontFamily",
  "whiteSpace",
  "wordBreak",
  "overflowWrap",
];

export type RegExpMatcher = [RegExp, React.CSSProperties];

export type Matcher = RegExpMatcher;

const getValueFromStyle = (style: CSSStyleDeclaration, key: string): number => {
  const value = style.getPropertyValue(key);
  if (!value) {
    return 0;
  } else {
    return parseInt(value, 10);
  }
};

const copyStyle = (
  keys: string[],
  style: CSSStyleDeclaration,
  baseStyle: CSSStyleDeclaration
) => {
  keys.forEach((k) => {
    style[k as any] = baseStyle[k as any];
  });
};

const getVerticalPadding = (style: CSSStyleDeclaration): number => {
  return (
    getValueFromStyle(style, "padding-top") +
    getValueFromStyle(style, "padding-bottom") +
    getValueFromStyle(style, "border-top") +
    getValueFromStyle(style, "border-bottom")
  );
};

const getHorizontalPadding = (style: CSSStyleDeclaration): number => {
  return (
    getValueFromStyle(style, "padding-left") +
    getValueFromStyle(style, "padding-right") +
    getValueFromStyle(style, "border-left") +
    getValueFromStyle(style, "border-right")
  );
};

const execReg = (reg: RegExp, text: string): RegExpExecArray[] => {
  const results: RegExpExecArray[] = [];
  let match = reg.exec(text);
  while (!!match) {
    results.push(match);
    match = reg.exec(text);
  }
  return results;
};

const tokenize = (value: string, matchers: Matcher[]): React.ReactNode => {
  const styles: { [key: number]: React.CSSProperties } = {};
  const matches: { s: number; e: number; i: number[] }[] = [];
  matchers.forEach(([matcher, style], i) => {
    matches.push(
      ...execReg(matcher, value).map((m) => {
        const start = m.index;
        const end = m.index + m[0].length;
        return { s: start, e: end, i: [i] };
      })
    );
    styles[String(i)] = style;
  });
  matches.sort((a, b) => {
    const sd = a.s - b.s;
    if (sd === 0) {
      const ed = a.e - b.e;
      if (ed === 0) {
        return 0;
      } else if (ed < 0) {
        return -1;
      } else {
        return 1;
      }
    } else if (sd < 0) {
      return -1;
    } else {
      return 1;
    }
  });

  const res: (string | React.ReactElement)[] = [];
  let prevEnd = 0;
  let prevStart = 0;
  for (let i = 0; i < matches.length; i++) {
    const { s: start, e: end, i: styleIndexes } = matches[i];
    res.push(value.slice(prevEnd, start));
    res.push(
      createElement(
        "span",
        {
          key: i,
          style: styleIndexes.reduce((acc, i) => {
            const s = styles[i];
            Object.keys(s).forEach((k) => {
              (acc as any)[k] = (s as any)[k];
            });
            return acc;
          }, {} as React.CSSProperties),
        },
        value.slice(start, end)
      )
    );
    prevEnd = end;
    prevStart = start;
  }
  res.push(value.slice(prevEnd));
  return res;
};

export type TextareaProps = JSX.IntrinsicElements["textarea"] & {
  matchers: Matcher[];
};

export const Textarea = ({
  matchers,
  style,
  onScroll,
  ...props
}: TextareaProps): React.ReactElement => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [[left, top], setPos] = useState<[left: number, top: number]>([0, 0]);
  const [[width, height, hPadding, vPadding], setRect] = useState<
    [width: number, height: number, hPadding: number, vPadding: number]
  >([0, 0, 0, 0]);
  const caretColorRef = useRef("");

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      if (!ref.current) return;
      const style = window.getComputedStyle(ref.current);
      setRect([
        entries[0].contentRect.width,
        entries[0].contentRect.height,
        getHorizontalPadding(style),
        getVerticalPadding(style),
      ]);
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!backdropRef.current || !ref.current) return;
    const s = window.getComputedStyle(ref.current);
    if (!caretColorRef.current) {
      caretColorRef.current = s.getPropertyValue("color");
    }
    copyStyle(STYLE_KEYS, backdropRef.current.style, s);

    ref.current.style.color = "transparent";
    ref.current.style.caretColor = caretColorRef.current;
    backdropRef.current.style.borderColor = "transparent";
  }, [style, width, height]);

  return createElement(
    "div",
    {
      style: useMemo(
        (): React.CSSProperties => ({
          position: "relative",
          overflow: "hidden",
          width: width + hPadding,
          height: height + vPadding,
        }),
        [width, height, hPadding, vPadding]
      ),
    },
    createElement(
      "div",
      {
        ref: backdropRef,
        "aria-hidden": true,
        style: useMemo((): React.CSSProperties => {
          const s: React.CSSProperties = {
            position: "absolute",
            top: 0,
            left: 0,
            width,
            zIndex: -1,
            transform: `translate(${-left}px, ${-top}px)`,
            pointerEvents: "none",
          };
          if (!style) return s;
          if (style.background) s.background = style.background;
          if (style.backgroundColor) s.backgroundColor = style.backgroundColor;
          return s;
        }, [left, top, width, style]),
      },
      useMemo(
        () => valueToReact(String(props.value), matchers),
        [props.value, matchers]
      )
    ),
    createElement("textarea", {
      ...props,
      ref,
      style: useMemo(() => ({ ...style, background: "transparent" }), [style]),
      onScroll: useCallback(
        (e: React.UIEvent<HTMLTextAreaElement>) => {
          setPos([e.currentTarget.scrollLeft, e.currentTarget.scrollTop]);
          onScroll?.(e);
        },
        [onScroll]
      ),
    })
  );
};
