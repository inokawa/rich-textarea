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
import {
  dispatchClonedMouseEvent,
  dispatchMouseMoveEvent,
  dispatchMouseOutEvent,
  getHorizontalPadding,
  getPointedElement,
  getStyle,
  getVerticalPadding,
  hasPercentageUnit,
  isSafari,
  stopPropagation,
  syncBackdropStyle,
} from "./dom";
import { useStore } from "./selection";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import type { CaretPosition, Renderer } from "./types";

// for caret position detection
const CARET_DETECTOR = <span style={{ color: "transparent" }}>{"\u200b"}</span>;

/**
 * Methods of {@link RichInput}.
 *
 * All the others not mentioned are proxied to ref of [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).
 *
 * | Name              | Type     | Description                                                            |
 * | ----------------- | -------- | ---------------------------------------------------------------------- |
 * | selectionStart    | `number` | Same as original but has handling of composition event                    |
 * | selectionEnd      | `number` | Same as original but has handling of composition event                    |
 * | setSelectionRange |          | Same as original but with focus                                           |
 * | setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |
 */
export interface RichInputHandle extends HTMLInputElement {}

/**
 * Props of {@link RichInput}.
 *
 * For other props not mentioned below will be passed to [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).
 * `defaultValue` is omitted for simplicity of logic.
 */
export interface RichInputProps
  extends Omit<
    JSX.IntrinsicElements["input"],
    "value" | "defaultValue" | "children"
  > {
  /**
   * Same as original but only string
   */
  value: string;
  /**
   * Render function to create customized view from value.
   *
   * This function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).
   *
   * On the rendered nodes, currently limited event handlers will work.
   * - `onClick`
   * - `onMouseOver`
   * - `onMouseOut`
   * - `onMouseMove`
   * - `onMouseDown`
   * - `onMouseUp`
   * @defaultValue undefined
   */
  children?: Renderer;
  /**
   * If true, textarea height is automatically resized and height of style prop does not work. Set `maxHeight` to style prop if you need limit.
   * @defaultValue undefined
   */
  autoHeight?: boolean;
  /**
   * Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.
   * @defaultValue undefined
   */
  onSelectionChange?: (pos: CaretPosition, value: string) => void;
}

/**
 * Input component with some extra props. See {@link RichInputProps} and {@link RichInputHandle}.
 * @category Component
 */
export const RichInput = forwardRef<RichInputHandle, RichInputProps>(
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
    const textAreaRef = useRef<HTMLInputElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const [[width, height, hPadding, vPadding], setRect] = useState<
      [width: number, height: number, hPadding: number, vPadding: number]
    >([0, 0, 0, 0]);
    const [focused, setFocused] = useState<boolean>(false);

    const caretColorRef = useRef("");
    const pointedRef = useRef<HTMLElement | null>(null);

    const selectionStore = useStore(textAreaRef);
    const [selectionStart, selectionEnd] = useSyncExternalStore(
      selectionStore._subscribe,
      selectionStore._getSelection,
      selectionStore._getSelection
    );

    const totalWidth = width + hPadding;
    const totalHeight = height + vPadding;

    const isSizeCalculated = !!(totalWidth + totalHeight);

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
            ...args: Parameters<HTMLInputElement["setSelectionRange"]>
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
          get(target, prop: keyof HTMLInputElement) {
            if ((overrides as any)[prop]) {
              return (overrides as any)[prop];
            }
            const value = target[prop];
            return typeof value === "function" ? value.bind(target) : value;
          },
        }) as HTMLInputElement;
      },
      [textAreaRef]
    );

    useIsomorphicLayoutEffect(() => {
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

    useIsomorphicLayoutEffect(() => {
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
      if (!isSafari()) return;

      // FIXME: Safari does not fire scroll event on input so substitute with pseudo selection change event
      return selectionStore._subscribe(() => {
        if (!textAreaRef.current || !backdropRef.current) return;
        const { scrollTop, scrollLeft } = textAreaRef.current;
        backdropRef.current.style.transform = `translate(${-scrollLeft}px, ${-scrollTop}px)`;
      });
    }, []);

    useEffect(() => {
      const textarea = textAreaRef.current;
      if (!autoHeight || !textarea) return;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });

    return (
      <div
        style={useMemo((): React.CSSProperties => {
          let w: React.CSSProperties["width"] = totalWidth;
          let h: React.CSSProperties["height"] = totalHeight;
          // Prefer prop style to avoid miscalculation https://github.com/inokawa/rich-textarea/issues/39
          if (style) {
            if (hasPercentageUnit(style.width)) {
              w = style.width;
            }
            if (hasPercentageUnit(style.height)) {
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
            // Stop propagation of events dispatched on backdrop
            onClick={stopPropagation}
            onMouseDown={stopPropagation}
            onMouseUp={stopPropagation}
            onMouseOver={stopPropagation}
            onMouseOut={stopPropagation}
            onMouseMove={stopPropagation}
          >
            <div style={{ width, height, overflow: "hidden" }}>
              <div
                style={useMemo(
                  (): React.CSSProperties => ({
                    transform: "translate(0px, 0px)",
                    pointerEvents: "none",
                    userSelect: "none",
                    msUserSelect: "none",
                    WebkitUserSelect: "none",
                    // https://github.com/inokawa/rich-textarea/issues/56
                    boxSizing: "content-box",
                    // https://stackoverflow.com/questions/2545542/font-size-rendering-inconsistencies-on-an-iphone
                    textSizeAdjust: "100%",
                    WebkitTextSizeAdjust: "100%",
                    whiteSpace: "pre",
                  }),
                  []
                )}
              >
                {useMemo(
                  () => (render ? render(value) : value),
                  [value, render]
                )}
                {CARET_DETECTOR}
              </div>
            </div>
          </div>
        </div>
        <input
          {...props}
          ref={textAreaRef}
          value={value}
          style={useMemo(
            () => ({
              ...style,
              background: "transparent",
              margin: 0,
              // Set `position: absolute` to fix bug that sometimes texts disappear in Chrome for unknown reason
              position: "absolute",
              // And remove it until element size is calculated to avoid layout shift on mount
              // https://github.com/inokawa/rich-textarea/issues/21
              ...(!isSizeCalculated && {
                position: undefined,
                verticalAlign: "top",
              }),
            }),
            [style, isSizeCalculated]
          )}
          onScroll={useCallback(
            (e: React.UIEvent<HTMLInputElement>) => {
              if (backdropRef.current) {
                const { scrollTop, scrollLeft } = e.currentTarget;
                backdropRef.current.style.transform = `translate(${-scrollLeft}px, ${-scrollTop}px)`;
              }
              onScroll?.(e);
            },
            [onScroll]
          )}
          onInput={useCallback(
            (e: React.FormEvent<HTMLInputElement>) => {
              onInput?.(e);
              selectionStore._updateSeletion();
            },
            [onInput]
          )}
          onCompositionStart={useCallback(
            (e: React.CompositionEvent<HTMLInputElement>) => {
              selectionStore._setComposition(e.nativeEvent);
              onCompositionStart?.(e);
            },
            [onCompositionStart]
          )}
          onCompositionUpdate={useCallback(
            (e: React.CompositionEvent<HTMLInputElement>) => {
              selectionStore._setComposition(e.nativeEvent);
              onCompositionUpdate?.(e);
            },
            [onCompositionUpdate]
          )}
          onCompositionEnd={useCallback(
            (e: React.CompositionEvent<HTMLInputElement>) => {
              selectionStore._setComposition();
              onCompositionEnd?.(e);
            },
            [onCompositionEnd]
          )}
          onKeyDown={useCallback(
            (e: React.KeyboardEvent<HTMLInputElement>) => {
              // Ignore keydown events during IME composition.
              // Safari sometimes fires keydown event after compositionend so also ignore it.
              // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
              if (e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229) {
                return;
              }

              onKeyDown?.(e);
              selectionStore._updateSeletion();
            },
            [onKeyDown]
          )}
          onClick={useCallback(
            (e: React.MouseEvent<HTMLInputElement>) => {
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
            (e: React.MouseEvent<HTMLInputElement>) => {
              onMouseDown?.(e);
              selectionStore._updateSeletion();
              const mouseup = () => {
                selectionStore._updateSeletion();
                document.removeEventListener("mouseup", mouseup);
              };
              document.addEventListener("mouseup", mouseup);
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
            (e: React.MouseEvent<HTMLInputElement>) => {
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
            (e: React.MouseEvent<HTMLInputElement>) => {
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
            (e: React.MouseEvent<HTMLInputElement>) => {
              onMouseLeave?.(e);
              dispatchMouseOutEvent(pointedRef, e.nativeEvent, null);
            },
            [onMouseLeave]
          )}
          onFocus={useCallback(
            (e: React.FocusEvent<HTMLInputElement>) => {
              onFocus?.(e);
              setFocused(true);
            },
            [onFocus]
          )}
          onBlur={useCallback(
            (e: React.FocusEvent<HTMLInputElement>) => {
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
