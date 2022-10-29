import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
} from "react";
import { useSyncExternalStore } from "use-sync-external-store/shim";
// @ts-expect-error no type definition
import rangeAtIndex from "range-at-index";
import type { Renderer } from "./renderers";
import {
  dispatchClonedMouseEvent,
  dispatchMouseMoveEvent,
  dispatchMouseOutEvent,
  getHorizontalPadding,
  getPointedElement,
  getStyle,
  getVerticalPadding,
  stopPropagation,
  syncBackdropStyle,
} from "./dom";
import { initSelectionStore } from "./selection";

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

export type RichTextareaHandle = HTMLTextAreaElement;

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
      () => {
        const el = textAreaRef.current!;
        const overrides = {
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
          setSelectionRange(
            ...args: Parameters<HTMLTextAreaElement["setSelectionRange"]>
          ) {
            el.focus();
            el.setSelectionRange(...args);
          },
          setRangeText(
            text: string,
            start: number,
            end: number,
            preserve?: SelectionMode
          ) {
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
        };

        return new Proxy(el, {
          get(target, prop: keyof HTMLTextAreaElement) {
            if ((overrides as any)[prop]) {
              return (overrides as any)[prop];
            }
            const value = target[prop];
            return typeof value === "function" ? value.bind(target) : value;
          },
        }) as HTMLTextAreaElement;
      },
      [textAreaRef]
    );

    useLayoutEffect(() => {
      const textarea = textAreaRef.current;
      if (!textarea) return;
      const observer = new ResizeObserver(([entry]) => {
        const { contentRect, borderBoxSize } = entry!;
        if (borderBoxSize && borderBoxSize[0]) {
          setRect([
            contentRect.width,
            contentRect.height,
            borderBoxSize[0].inlineSize - contentRect.width,
            borderBoxSize[0].blockSize - contentRect.height,
          ]);
          return;
        }
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

    useLayoutEffect(() => {
      // Sync backdrop style
      const textarea = textAreaRef.current;
      const backdrop = backdropRef.current;
      if (!backdrop || !textarea) return;
      syncBackdropStyle(textarea, backdrop, caretColorRef, style);
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
        style={useMemo((): React.CSSProperties => {
          let w: string | number = totalWidth;
          let h: string | number = totalHeight;
          // Prefer prop to avoid miscalculation https://github.com/inokawa/rich-textarea/issues/39
          if (style) {
            if (typeof style.width === "string" && style.width.endsWith("%")) {
              w = style.width;
            }
            if (
              typeof style.height === "string" &&
              style.height.endsWith("%")
            ) {
              h = style.height;
            }
          }
          return {
            display: "inline-block",
            position: "relative",
            width: w,
            height: h,
          };
        }, [totalWidth, totalHeight, style])}
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
