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

const useForceRefresh = () => {
  const setState = useState(0)[1];
  return useCallback(() => setState((p) => p + 1), []);
};

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

export type CaretPosition =
  | {
      focused: false;
      selectionStart: number;
      selectionEnd: number;
    }
  | {
      focused: true;
      selectionStart: number;
      selectionEnd: number;
      top: number;
      left: number;
      height: number;
    };

export type RichTextareaHandle = {
  ref: React.RefObject<HTMLTextAreaElement>;
  selectionStart: number;
  selectionEnd: number;
  focus: () => void;
  blur: () => void;
  select: () => void;
  setSelectionRange: (
    start: number,
    end: number,
    direction?: "forward" | "backward" | "none"
  ) => void;
  setRangeText: (
    text: string,
    start: number,
    end: number,
    preserve?: SelectionMode
  ) => void;
};

export type RichTextareaProps = Omit<
  JSX.IntrinsicElements["textarea"],
  "value" | "defaultValue" | "children"
> & {
  value: string;
  children?: Renderer;
  onSelectionChange?: (pos: CaretPosition, value: string) => void;
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
      onMouseUp,
      onFocus,
      onBlur,
      onSelectionChange,
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
    const refresh = useForceRefresh();
    const [focused, setFocused] = useState<boolean>(false);

    const caretColorRef = useRef("");

    useImperativeHandle(
      propRef,
      () => ({
        ref: ref,
        get selectionStart() {
          return ref.current?.selectionStart ?? 0;
        },
        get selectionEnd() {
          return ref.current?.selectionEnd ?? 0;
        },
        focus: () => {
          ref.current?.focus();
        },
        blur: () => {
          ref.current?.blur();
        },
        select: () => {
          ref.current?.select();
        },
        setSelectionRange: (...args) => {
          if (!ref.current) return;
          ref.current.focus();
          ref.current.setSelectionRange(...args);
        },
        setRangeText: (...args) => {
          if (!ref.current) return;
          setRangeText(ref.current, ...args);
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

    const selectionStart = ref.current?.selectionStart;
    const selectionEnd = ref.current?.selectionEnd;

    useEffect(() => {
      if (selectionStart == null || selectionEnd == null || !onSelectionChange)
        return;
      if (!focused) {
        onSelectionChange(
          {
            focused: false,
            selectionStart: selectionStart,
            selectionEnd: selectionEnd,
          },
          value
        );
      } else {
        const range = rangeAtIndex(
          backdropRef.current,
          selectionStart,
          selectionStart + 1
        ) as Range;
        const rect = range.getBoundingClientRect();
        onSelectionChange(
          {
            focused: true,
            top: rect.top,
            left: rect.left,
            height: rect.height,
            selectionStart: selectionStart,
            selectionEnd: selectionEnd,
          },
          value
        );
      }
    }, [focused, selectionStart, selectionEnd]);

    const setCaretPosition = useCallback(() => {
      if (!onSelectionChange) return;
      setTimeout(() => {
        refresh();
      });
    }, [onSelectionChange]);

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
            <span style={caretDetectorStyle}>{"\u200b"}</span>
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
          onMouseUp={useCallback(
            (e: React.MouseEvent<HTMLTextAreaElement>) => {
              onMouseUp?.(e);
              setCaretPosition();
            },
            [onMouseUp, setCaretPosition]
          )}
          onFocus={useCallback(
            (e: React.FocusEvent<HTMLTextAreaElement>) => {
              onFocus?.(e);
              setFocused(true);
            },
            [onFocus]
          )}
          onBlur={useCallback(
            (e: React.FocusEvent<HTMLTextAreaElement>) => {
              onBlur?.(e);
              setFocused(false);
            },
            [onBlur]
          )}
        />
      </div>
    );
  }
);
