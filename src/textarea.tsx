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

const getPropertyValue = (style: CSSStyleDeclaration, key: string): string => {
  return style.getPropertyValue(key);
};
const setProperty = (
  style: CSSStyleDeclaration,
  key: string,
  value: string
) => {
  style.setProperty(key, value);
};

const getValueFromStyle = (style: CSSStyleDeclaration, key: string): number => {
  const value = getPropertyValue(style, key);
  if (!value) {
    return 0;
  } else {
    return parseInt(value, 10);
  }
};

const getStyle = getComputedStyle;

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
  if (el.setRangeText) {
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

const getPointedElement = (
  textarea: HTMLTextAreaElement,
  backdrop: HTMLDivElement,
  e: React.MouseEvent
): HTMLElement | null => {
  const POINTER_EVENTS = "pointer-events";

  const textareaStyle = textarea.style;
  const backdropStyle = backdrop.style;
  const prev = getPropertyValue(textareaStyle, POINTER_EVENTS);
  const backPrev = getPropertyValue(backdropStyle, POINTER_EVENTS);
  setProperty(textareaStyle, POINTER_EVENTS, "none");
  setProperty(backdropStyle, POINTER_EVENTS, "auto");

  const pointed = document.elementFromPoint(
    e.clientX,
    e.clientY
  ) as HTMLElement | null;

  setProperty(textareaStyle, POINTER_EVENTS, prev);
  setProperty(backdropStyle, POINTER_EVENTS, backPrev);

  if (isInsideBackdrop(pointed, backdrop)) {
    return pointed;
  } else {
    return null;
  }
};

const isInsideBackdrop = (
  pointed: HTMLElement | null,
  backdrop: HTMLDivElement
): boolean => !!pointed && backdrop !== pointed && backdrop.contains(pointed);

const dispatchMouseEvent = (
  target: HTMLElement,
  type: string,
  init: MouseEventInit
) => {
  target.dispatchEvent(new MouseEvent(type, init));
};

const dispatchClonedMouseEvent = (pointed: HTMLElement, e: MouseEvent) => {
  dispatchMouseEvent(pointed, e.type, e);
};

const dispatchMouseMoveEvent = (
  pointed: HTMLElement | null,
  prevPointed: React.MutableRefObject<HTMLElement | null>,
  e: MouseEvent
) => {
  if (pointed) {
    dispatchClonedMouseEvent(pointed, e);
  }

  if (prevPointed.current !== pointed) {
    dispatchMouseOutEvent(prevPointed, e, pointed);
    if (pointed) {
      dispatchMouseEvent(pointed, "mouseover", e);
    }
  }
};

const dispatchMouseOutEvent = (
  prevPointed: React.MutableRefObject<HTMLElement | null>,
  e: MouseEvent,
  pointed: HTMLElement | null
) => {
  if (prevPointed.current) {
    dispatchMouseEvent(prevPointed.current, "mouseout", e);
  }
  prevPointed.current = pointed;
};

const getSelectionStart = (
  el: HTMLTextAreaElement,
  compositionEvent: CompositionEvent | null
): number => {
  let pos = el.selectionStart;
  if (compositionEvent) {
    pos = Math.min(pos, el.selectionEnd - compositionEvent.data.length);
  }
  return pos;
};

const getSelectionEnd = (
  el: HTMLTextAreaElement,
  compositionEvent: CompositionEvent | null
): number => {
  let pos = el.selectionEnd;
  if (compositionEvent) {
    pos = Math.min(pos, el.selectionStart + compositionEvent.data.length);
  }
  return pos;
};

const stopPropagation = (event: React.MouseEvent) => {
  event.stopPropagation();
};

// for caret position detection
const CARET_DETECTOR = <span style={{ color: "transparent" }}>{"\u200b"}</span>;

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
  autoHeight?: boolean;
  onSelectionChange?: (pos: CaretPosition, value: string) => void;
};

export const RichTextarea = forwardRef<RichTextareaHandle, RichTextareaProps>(
  (
    {
      children: render,
      value,
      autoHeight,
      style,
      onScroll,
      onInput,
      onCompositionStart,
      onCompositionUpdate,
      onCompositionEnd,
      onKeyDown,
      onClick,
      onMouseDown,
      onMouseUp,
      onMouseMove,
      onMouseLeave,
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

    const compositionRef = useRef<CompositionEvent | null>(null);
    const caretColorRef = useRef("");
    const pointedRef = useRef<HTMLElement | null>(null);

    const selectionStart =
      ref.current && getSelectionStart(ref.current, compositionRef.current);
    const selectionEnd =
      ref.current && getSelectionEnd(ref.current, compositionRef.current);

    const totalWidth = width + hPadding;
    const totalHeight = height + vPadding;

    const setCaretPosition = useCallback(() => {
      if (!onSelectionChange) return;
      setTimeout(() => {
        refresh();
      });
    }, [onSelectionChange]);

    useImperativeHandle(
      propRef,
      () => ({
        ref: ref,
        get selectionStart() {
          if (!ref.current) return 0;
          return getSelectionStart(ref.current, compositionRef.current);
        },
        get selectionEnd() {
          if (!ref.current) return 0;
          return getSelectionEnd(ref.current, compositionRef.current);
        },
        focus: () => {
          if (!ref.current) return;
          ref.current.focus();
        },
        blur: () => {
          if (!ref.current) return;
          ref.current.blur();
        },
        select: () => {
          if (!ref.current) return;
          ref.current.select();
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
      const observer = new ResizeObserver(([{ contentRect }]) => {
        if (!ref.current) return;
        const style = getStyle(ref.current);
        setRect([
          contentRect.width,
          contentRect.height,
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
      const textarea = ref.current;
      const backdrop = backdropRef.current;
      if (!backdrop || !textarea) return;
      const s = getStyle(textarea);
      const textareaStyle = textarea.style;
      const backdropStyle = backdrop.style;
      if (!caretColorRef.current) {
        caretColorRef.current = getPropertyValue(s, "color");
      }

      STYLE_KEYS.forEach((k) => {
        backdropStyle[k as any] = s[k as any];
      });
      textareaStyle.color = backdropStyle.borderColor = "transparent";
      textareaStyle.caretColor = style?.caretColor || caretColorRef.current;
    }, [style]);

    useEffect(() => {
      if (selectionStart == null || selectionEnd == null || !onSelectionChange)
        return;
      if (!focused && !compositionRef.current) {
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

    useEffect(() => {
      const textarea = ref.current;
      if (!autoHeight || !textarea) return;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });

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
            // Stop propagation of events dispatched on backdrop
            onClick={stopPropagation}
            onMouseDown={stopPropagation}
            onMouseUp={stopPropagation}
            onMouseOver={stopPropagation}
            onMouseOut={stopPropagation}
            onMouseMove={stopPropagation}
          >
            {useMemo(() => (render ? render(value) : value), [value, render])}
            {CARET_DETECTOR}
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
          onCompositionStart={useCallback(
            (e: React.CompositionEvent<HTMLTextAreaElement>) => {
              compositionRef.current = e.nativeEvent;
              onCompositionStart?.(e);
            },
            [onCompositionStart]
          )}
          onCompositionUpdate={useCallback(
            (e: React.CompositionEvent<HTMLTextAreaElement>) => {
              compositionRef.current = e.nativeEvent;
              onCompositionUpdate?.(e);
            },
            [onCompositionUpdate]
          )}
          onCompositionEnd={useCallback(
            (e: React.CompositionEvent<HTMLTextAreaElement>) => {
              compositionRef.current = null;
              onCompositionEnd?.(e);
            },
            [onCompositionEnd]
          )}
          onKeyDown={useCallback(
            (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
              // Ignore keydown events during IME composition.
              // Safari sometimes fires keydown event after compositionend so also ignore it.
              // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
              if (e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229) {
                return;
              }

              onKeyDown?.(e);
              setCaretPosition();
            },
            [onKeyDown, setCaretPosition]
          )}
          onClick={useCallback(
            (e: React.MouseEvent<HTMLTextAreaElement>) => {
              onClick?.(e);
              const textarea = ref.current;
              const backdrop = backdropRef.current;
              if (!textarea || !backdrop) return;
              const pointed = getPointedElement(textarea, backdrop, e);
              if (pointed) {
                dispatchClonedMouseEvent(pointed, e.nativeEvent);
              }
            },
            [onClick]
          )}
          onMouseDown={useCallback(
            (e: React.MouseEvent<HTMLTextAreaElement>) => {
              onMouseDown?.(e);
              setCaretPosition();
              const textarea = ref.current;
              const backdrop = backdropRef.current;
              if (!textarea || !backdrop) return;
              const pointed = getPointedElement(textarea, backdrop, e);
              if (pointed) {
                dispatchClonedMouseEvent(pointed, e.nativeEvent);
              }
            },
            [onMouseDown, setCaretPosition]
          )}
          onMouseUp={useCallback(
            (e: React.MouseEvent<HTMLTextAreaElement>) => {
              onMouseUp?.(e);
              setCaretPosition();
              const textarea = ref.current;
              const backdrop = backdropRef.current;
              if (!textarea || !backdrop) return;
              const pointed = getPointedElement(textarea, backdrop, e);
              if (pointed) {
                dispatchClonedMouseEvent(pointed, e.nativeEvent);
              }
            },
            [onMouseUp, setCaretPosition]
          )}
          onMouseMove={useCallback(
            (e: React.MouseEvent<HTMLTextAreaElement>) => {
              onMouseMove?.(e);
              const textarea = ref.current;
              const backdrop = backdropRef.current;
              if (!textarea || !backdrop) return;
              const pointed = getPointedElement(textarea, backdrop, e);
              dispatchMouseMoveEvent(pointed, pointedRef, e.nativeEvent);
            },
            [onMouseMove]
          )}
          onMouseLeave={useCallback(
            (e: React.MouseEvent<HTMLTextAreaElement>) => {
              onMouseLeave?.(e);
              dispatchMouseOutEvent(pointedRef, e.nativeEvent, null);
            },
            [onMouseLeave]
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
