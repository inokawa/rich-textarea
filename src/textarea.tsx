import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
// @ts-expect-error no type definition
import rangeAtIndex from "range-at-index";
import { Renderer } from "./renderers";

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

const setRangeText = (
  el: HTMLTextAreaElement,
  text: string,
  start: number,
  end: number,
  preserve?: SelectionMode
) => {
  if (typeof el.setRangeText === "function") {
    el.setRangeText(text, start, end, preserve);
  } else {
    el.focus();
    el.selectionStart = start;
    el.selectionEnd = end;
    document.execCommand("insertText", false, text);
  }
  // Invoke onChange to lift state up
  el.dispatchEvent(new Event("input", { bubbles: true }));
};

const caretDetectorStyle = { color: "transparent" };

export type CaretPosition = {
  top: number;
  left: number;
  height: number;
  selectionStart: number;
};

export type RichTextareaHandle = {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  setRangeText: (
    text: string,
    start: number,
    end: number,
    preserve?: SelectionMode
  ) => void;
};

export type RichTextareaProps = Omit<
  JSX.IntrinsicElements["textarea"],
  "value" | "children"
> & {
  value: string;
  children?: Renderer;
  onCaretPositionChange?: (pos: CaretPosition | null, value: string) => void;
};

export const RichTextarea = forwardRef<RichTextareaHandle, RichTextareaProps>(
  (
    {
      children: render,
      value,
      style,
      onScroll,
      onInput,
      onKeyDown,
      onMouseDown,
      onFocus,
      onBlur,
      onCaretPositionChange,
      ...props
    },
    propRef
  ): React.ReactElement => {
    const ref = useRef<HTMLTextAreaElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const [[left, top], setPos] = useState<[left: number, top: number]>([0, 0]);
    const [[width, height, hPadding, vPadding], setRect] = useState<
      [width: number, height: number, hPadding: number, vPadding: number]
    >([0, 0, 0, 0]);
    const [selectionStart, setSelectionStart] = useState<number | null>(null);
    const caretColorRef = useRef("");

    useImperativeHandle(
      propRef,
      () => ({
        textareaRef: ref,
        setRangeText: (text, start, end, preserve) => {
          if (!ref.current) return;
          setRangeText(ref.current, text, start, end, preserve);
        },
      }),
      [ref]
    );

    useEffect(() => {
      if (!ref.current) return;
      const observer = new ResizeObserver((entries) => {
        if (!ref.current) return;
        const style = getComputedStyle(ref.current);
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
      const s = getComputedStyle(ref.current);
      if (!caretColorRef.current) {
        caretColorRef.current = s.getPropertyValue("color");
      }
      copyStyle(STYLE_KEYS, backdropRef.current.style, s);

      ref.current.style.color = "transparent";
      ref.current.style.caretColor = style?.caretColor ?? caretColorRef.current;
      backdropRef.current.style.borderColor = "transparent";
    }, [style]);

    useEffect(() => {
      if (!onCaretPositionChange) return;
      if (selectionStart == null) {
        onCaretPositionChange(null, value);
      } else {
        const range = rangeAtIndex(
          backdropRef.current,
          selectionStart,
          selectionStart + 1
        ) as Range;
        const rect = range.getBoundingClientRect();
        onCaretPositionChange(
          {
            top: rect.top,
            left: rect.left,
            height: rect.height,
            selectionStart: selectionStart,
          },
          value
        );
      }
    }, [selectionStart]);

    const setCaretPosition = useCallback(() => {
      if (!onCaretPositionChange) return;
      setTimeout(() => {
        if (!ref.current) return;
        setSelectionStart(ref.current.selectionStart);
      });
    }, [onCaretPositionChange]);

    const totalWidth = width + hPadding;
    const totalHeight = height + vPadding;

    return (
      <div
        style={useMemo(
          (): React.CSSProperties => ({
            display: "inline-block",
            position: "relative",
            width: totalWidth,
            height: totalHeight,
          }),
          [totalWidth, totalHeight]
        )}
      >
        <div
          style={useMemo((): React.CSSProperties => {
            const s: React.CSSProperties = {
              position: "absolute",
              overflow: "hidden",
              top: 0,
              left: 0,
              zIndex: -1,
              width: totalWidth,
              height: totalHeight,
            };
            if (!style) return s;
            if (style.background) s.background = style.background;
            if (style.backgroundColor)
              s.backgroundColor = style.backgroundColor;
            return s;
          }, [totalWidth, totalHeight, style])}
        >
          <div
            ref={backdropRef}
            aria-hidden
            style={useMemo(
              (): React.CSSProperties => ({
                width,
                transform: `translate(${-left}px, ${-top}px)`,
                pointerEvents: "none",
                userSelect: "none",
                msUserSelect: "none",
                WebkitUserSelect: "none",
                // https://stackoverflow.com/questions/2545542/font-size-rendering-inconsistencies-on-an-iphone
                textSizeAdjust: "100%",
                WebkitTextSizeAdjust: "100%",
              }),
              [left, top, width]
            )}
          >
            {useMemo(() => (render ? render(value) : value), [value, render])}
            {/* for caret position detection */}
            <span style={caretDetectorStyle}> </span>
          </div>
        </div>
        <textarea
          {...props}
          ref={ref}
          value={value}
          style={useMemo(
            () => ({
              ...style,
              background: "transparent",
              margin: 0,
              // Fixed bug that sometimes texts disappear in Chrome for unknown reason
              position: "absolute",
            }),
            [style]
          )}
          onScroll={useCallback(
            (e: React.UIEvent<HTMLTextAreaElement>) => {
              setPos([e.currentTarget.scrollLeft, e.currentTarget.scrollTop]);
              onScroll?.(e);
            },
            [onScroll]
          )}
          onInput={useCallback(
            (e: React.FormEvent<HTMLTextAreaElement>) => {
              onInput?.(e);
              setCaretPosition();
            },
            [onInput, setCaretPosition]
          )}
          onKeyDown={useCallback(
            (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
              onKeyDown?.(e);
              setCaretPosition();
            },
            [onKeyDown, setCaretPosition]
          )}
          onMouseDown={useCallback(
            (e: React.MouseEvent<HTMLTextAreaElement>) => {
              onMouseDown?.(e);
              setCaretPosition();
            },
            [onMouseDown, setCaretPosition]
          )}
          onFocus={useCallback(
            (e: React.FocusEvent<HTMLTextAreaElement>) => {
              onFocus?.(e);
              setCaretPosition();
            },
            [onFocus, setCaretPosition]
          )}
          onBlur={useCallback(
            (e: React.FocusEvent<HTMLTextAreaElement>) => {
              onBlur?.(e);
                setSelectionStart(null);
            },
            [onBlur]
          )}
        />
      </div>
    );
  }
);
