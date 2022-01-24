import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  createElement,
} from "react";
import { Renderer } from ".";

const STYLE_KEYS: (keyof React.CSSProperties)[] = [
  "direction",
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
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSizeAdjust",
  "textAlign",
  "textTransform",
  "textIndent",
  "letterSpacing",
  "wordSpacing",
  "lineHeight",
  "whiteSpace",
  "wordBreak",
  "overflowWrap",
  "tabSize",
  "MozTabSize",
];

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

export type TextareaProps = JSX.IntrinsicElements["textarea"] & {
  renderer: Renderer;
};

export const Textarea = ({
  renderer,
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
  }, [style]);

  const totalWidth = width + hPadding;
  const totalHeight = height + vPadding;

  return createElement(
    "div",
    {
      style: useMemo(
        (): React.CSSProperties => ({
          display: "inline-block",
          position: "relative",
          width: totalWidth,
          height: totalHeight,
        }),
        [totalWidth, totalHeight]
      ),
    },
    createElement(
      "div",
      {
        style: useMemo(
          (): React.CSSProperties => ({
            position: "absolute",
            overflow: "hidden",
            top: 0,
            left: 0,
            zIndex: -1,
            width: totalWidth,
            height: totalHeight,
          }),
          [totalWidth, totalHeight]
        ),
      },
      createElement(
        "div",
        {
          ref: backdropRef,
          "aria-hidden": true,
          style: useMemo((): React.CSSProperties => {
            const s: React.CSSProperties = {
              width,
              transform: `translate(${-left}px, ${-top}px)`,
              pointerEvents: "none",
              userSelect: "none",
              msUserSelect: "none",
              WebkitUserSelect: "none",
              // https://stackoverflow.com/questions/2545542/font-size-rendering-inconsistencies-on-an-iphone
              textSizeAdjust: "100%",
              WebkitTextSizeAdjust: "100%",
            };
            if (!style) return s;
            if (style.background) s.background = style.background;
            if (style.backgroundColor)
              s.backgroundColor = style.backgroundColor;
            return s;
          }, [left, top, width, style]),
        },
        useMemo(() => renderer(String(props.value)), [props.value, renderer])
      )
    ),
    createElement("textarea", {
      ...props,
      ref,
      style: useMemo(
        () => ({ ...style, background: "transparent", margin: 0 }),
        [style]
      ),
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
