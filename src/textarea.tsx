import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useSyncExternalStore } from "use-sync-external-store/shim";
// @ts-expect-error no type definition
import rangeAtIndex from "range-at-index";
import type { Renderer } from "./renderers";

const NOOP = () => {};

const TEXT_STYLE_KEYS: (keyof React.CSSProperties)[] = [
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

const stopPropagation = (event: React.MouseEvent) => {
  event.stopPropagation();
};

// for caret position detection
const CARET_DETECTOR = <span style={{ color: "transparent" }}>{"\u200b"}</span>;

const initSelectionStore = (ref: React.RefObject<HTMLTextAreaElement>) => {
  let listener = NOOP;
  let cache: [number | null, number | null] = [null, null];
  let compositionEvent: CompositionEvent | null = null;
  const handle = {
    _subscribe: (callback: () => void) => {
      listener = callback;
      return () => {
        listener = NOOP;
      };
    },
    _update: () => {
      setTimeout(listener);
    },
    _setComposition: (comp: CompositionEvent | null) => {
      compositionEvent = comp;
    },
    _getSelectionStart: (): number | null => {
      const el = ref.current;
      if (!el) return null;
      let pos = el.selectionStart;
      if (compositionEvent) {
        pos = Math.min(pos, el.selectionEnd - compositionEvent.data.length);
      }
      return pos;
    },
    _getSelectionEnd: (): number | null => {
      const el = ref.current;
      if (!el) return null;
      let pos = el.selectionEnd;
      if (compositionEvent) {
        pos = Math.min(pos, el.selectionStart + compositionEvent.data.length);
      }
      return pos;
    },
    _getSelection: (): [number | null, number | null] => {
      const selectionStart = handle._getSelectionStart();
      const selectionEnd = handle._getSelectionEnd();
      if (cache[0] === selectionStart && cache[1] === selectionEnd) {
        return cache;
      }
      cache = [selectionStart, selectionEnd];
      return cache;
    },
  };
  return handle;
};

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
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const [[left, top], setPos] = useState<[left: number, top: number]>([0, 0]);
    const [[width, height, hPadding, vPadding], setRect] = useState<
      [width: number, height: number, hPadding: number, vPadding: number]
    >([0, 0, 0, 0]);
    const [focused, setFocused] = useState<boolean>(false);

    const caretColorRef = useRef("");
    const pointedRef = useRef<HTMLElement | null>(null);

    const selectionStore = useState(() => initSelectionStore(textAreaRef))[0];
    const [selectionStart, selectionEnd] = useSyncExternalStore(
      selectionStore._subscribe,
      selectionStore._getSelection
    );

    const totalWidth = width + hPadding;
    const totalHeight = height + vPadding;

    useImperativeHandle(
      propRef,
      () => ({
        ref: textAreaRef,
        get selectionStart() {
          const sel = selectionStore._getSelectionStart();
          if (sel == null) {
            return 0;
          } else {
            return sel;
          }
        },
        get selectionEnd() {
          const sel = selectionStore._getSelectionEnd();
          if (sel == null) {
            return 0;
          } else {
            return sel;
          }
        },
        focus: () => {
          if (!textAreaRef.current) return;
          textAreaRef.current.focus();
        },
        blur: () => {
          if (!textAreaRef.current) return;
          textAreaRef.current.blur();
        },
        select: () => {
          if (!textAreaRef.current) return;
          textAreaRef.current.select();
        },
        setSelectionRange: (...args) => {
          if (!textAreaRef.current) return;
          textAreaRef.current.focus();
          textAreaRef.current.setSelectionRange(...args);
        },
        setRangeText: (
          text: string,
          start: number,
          end: number,
          preserve?: SelectionMode
        ) => {
          const el = textAreaRef.current;
          if (!el) return;
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
        },
      }),
      [textAreaRef]
    );

    useEffect(() => {
      const textarea = textAreaRef.current;
      if (!textarea) return;
      const observer = new ResizeObserver(([entry]) => {
        const contentRect = entry!.contentRect;
        const style = getStyle(textarea);
        setRect([
          contentRect.width,
          contentRect.height,
          getHorizontalPadding(style),
          getVerticalPadding(style),
        ]);
      });
      observer.observe(textarea);
      return () => {
        observer.disconnect();
      };
    }, []);

    useEffect(() => {
      const textarea = textAreaRef.current;
      const backdrop = backdropRef.current;
      if (!backdrop || !textarea) return;
      const computedTextAreaStyle = getStyle(textarea);
      const textareaStyle = textarea.style;
      const backdropStyle = backdrop.style;
      if (!caretColorRef.current) {
        caretColorRef.current = getPropertyValue(
          computedTextAreaStyle,
          "color"
        );
      }

      TEXT_STYLE_KEYS.forEach((k) => {
        backdropStyle[k as any] = computedTextAreaStyle[k as any]!;
      });
      textareaStyle.color = backdropStyle.borderColor = "transparent";
      textareaStyle.caretColor = style?.caretColor || caretColorRef.current;
    }, [style]);

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

    useEffect(() => {
      const textarea = textAreaRef.current;
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
            (["background", "backgroundColor"] as const).forEach((k) => {
              if (style[k]) s[k] = style[k] as any;
            });
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
          ref={textAreaRef}
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
              selectionStore._update();
            },
            [onInput]
          )}
          onCompositionStart={useCallback(
            (e: React.CompositionEvent<HTMLTextAreaElement>) => {
              selectionStore._setComposition(e.nativeEvent);
              onCompositionStart?.(e);
            },
            [onCompositionStart]
          )}
          onCompositionUpdate={useCallback(
            (e: React.CompositionEvent<HTMLTextAreaElement>) => {
              selectionStore._setComposition(e.nativeEvent);
              onCompositionUpdate?.(e);
            },
            [onCompositionUpdate]
          )}
          onCompositionEnd={useCallback(
            (e: React.CompositionEvent<HTMLTextAreaElement>) => {
              selectionStore._setComposition(null);
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
              selectionStore._update();
            },
            [onKeyDown]
          )}
          onClick={useCallback(
            (e: React.MouseEvent<HTMLTextAreaElement>) => {
              onClick?.(e);
              const textarea = textAreaRef.current;
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
              selectionStore._update();
              const MOUSE_UP = "mouseup";
              const mouseup = () => {
                selectionStore._update();
                document.removeEventListener(MOUSE_UP, mouseup);
              };
              document.addEventListener(MOUSE_UP, mouseup);
              const textarea = textAreaRef.current;
              const backdrop = backdropRef.current;
              if (!textarea || !backdrop) return;
              const pointed = getPointedElement(textarea, backdrop, e);
              if (pointed) {
                dispatchClonedMouseEvent(pointed, e.nativeEvent);
              }
            },
            [onMouseDown]
          )}
          onMouseUp={useCallback(
            (e: React.MouseEvent<HTMLTextAreaElement>) => {
              onMouseUp?.(e);
              const textarea = textAreaRef.current;
              const backdrop = backdropRef.current;
              if (!textarea || !backdrop) return;
              const pointed = getPointedElement(textarea, backdrop, e);
              if (pointed) {
                dispatchClonedMouseEvent(pointed, e.nativeEvent);
              }
            },
            [onMouseUp]
          )}
          onMouseMove={useCallback(
            (e: React.MouseEvent<HTMLTextAreaElement>) => {
              onMouseMove?.(e);
              const textarea = textAreaRef.current;
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
