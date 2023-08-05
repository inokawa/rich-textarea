import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  forwardRef,
  useImperativeHandle,
  memo,
  RefObject,
} from "react";
// @ts-expect-error no type definition
import rangeAtIndex from "range-at-index";
import {
  hasPercentageUnit,
  isSafari,
  stopPropagation,
  syncBackdropStyle,
} from "./dom";
import { SelectionRange, initSelectionStore } from "./selection";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import type { CaretPosition, Renderer } from "./types";
import { CARET_DETECTOR, refKey } from "./utils";
import { useStatic } from "./useStatic";
import { TextareaRect, createTextareaObserver } from "./observer";

type BackdropHandle = (value: string) => void;

const Backdrop = memo(
  ({
    _ref: backdropRef,
    _handle: handle,
    _render: render,
    _height: height,
  }: {
    _ref: RefObject<HTMLDivElement>;
    _handle: RefObject<BackdropHandle>;
    _render: Renderer | undefined;
    _height: number;
  }) => {
    const [value, setValue] = useState("");

    useImperativeHandle(handle, () => setValue, []);

    return (
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
        <div style={{ height }}>
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
            {useMemo(() => (render ? render(value) : value), [value, render])}
            {CARET_DETECTOR}
          </div>
        </div>
      </div>
    );
  }
);

/**
 * Methods of {@link RichInput}.
 *
 * All the others not mentioned are proxied to ref of [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).
 *
 * | Name              | Type     | Description                                                            |
 * | ----------------- | -------- | ---------------------------------------------------------------------- |
 * | selectionStart    | `number` | Same as original but has handling of composition event                    |
 * | selectionEnd      | `number` | Same as original but has handling of composition event                    |
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
  extends Omit<JSX.IntrinsicElements["input"], "children"> {
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
  onSelectionChange?: (pos: CaretPosition) => void;
}

/**
 * Input component with some extra props. See {@link RichInputProps} and {@link RichInputHandle}.
 *
 * **NOTE: This component is experimental one so it may have some bugs.**
 * @category Component
 */
export const RichInput = forwardRef<RichInputHandle, RichInputProps>(
  (
    {
      children: render,
      autoHeight,
      style,
      onChange,
      onKeyDown,
      onSelectionChange,
      ...props
    },
    ref
  ): React.ReactElement => {
    const textAreaRef = useRef<HTMLInputElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const backdropHandle = useRef<BackdropHandle>(null);
    const [[width, height, hPadding, vPadding], setRect] =
      useState<TextareaRect>([0, 0, 0, 0]);
    const [focused, setFocused] = useState<boolean>(false);

    const caretColorRef = useRef("");

    const [[selectionStart, selectionEnd], setSelection] =
      useState<SelectionRange>([null, null]);
    const selectionStore = useStatic(() => {
      const safari = isSafari();

      return initSelectionStore(textAreaRef, (range) => {
        setSelection(range);

        if (safari) {
          // FIXME: Safari does not fire scroll event on input so substitute with pseudo selection change event
          if (!textAreaRef[refKey] || !backdropRef[refKey]) return;
          const { scrollTop, scrollLeft } = textAreaRef[refKey];
          backdropRef[
            refKey
          ].style.transform = `translate(${-scrollLeft}px, ${-scrollTop}px)`;
        }
      });
    });

    const totalWidth = width + hPadding;
    const totalHeight = height + vPadding;

    const isSizeCalculated = !!(totalWidth + totalHeight);

    useImperativeHandle(
      ref,
      () => {
        const el = textAreaRef[refKey]!;
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
          set(target, prop, value) {
            (target as any)[prop] = value;
            return true;
          },
        }) as HTMLInputElement;
      },
      []
    );

    useIsomorphicLayoutEffect(() => {
      const textarea = textAreaRef[refKey];
      const backdrop = backdropRef[refKey];
      if (!textarea || !backdrop) return;

      return createTextareaObserver(
        textarea,
        backdrop,
        selectionStore,
        setRect,
        setFocused
      );
    }, []);

    useIsomorphicLayoutEffect(() => {
      const textarea = textAreaRef[refKey];
      if (!textarea) return;
      // Sync value on init and change
      backdropHandle[refKey]!(textarea.value);
    }, [props.value]);

    useIsomorphicLayoutEffect(() => {
      // Sync backdrop style
      const textarea = textAreaRef[refKey];
      const backdrop = backdropRef[refKey];
      if (!backdrop || !textarea) return;
      syncBackdropStyle(textarea, backdrop, caretColorRef, style);
    }, [style]);

    useEffect(() => {
      if (selectionStart == null || selectionEnd == null || !onSelectionChange)
        return;
      if (!focused) {
        onSelectionChange({
          focused: false,
          selectionStart: selectionStart,
          selectionEnd: selectionEnd,
        });
      } else {
        const range = rangeAtIndex(
          backdropRef[refKey],
          selectionStart,
          selectionStart + 1
        ) as Range;
        const rect = range.getBoundingClientRect();
        onSelectionChange({
          focused: true,
          top: rect.top,
          left: rect.left,
          height: rect.height,
          selectionStart: selectionStart,
          selectionEnd: selectionEnd,
        });
      }
    }, [focused, selectionStart, selectionEnd]);

    useEffect(() => {
      const textarea = textAreaRef[refKey];
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
          <Backdrop
            _ref={backdropRef}
            _handle={backdropHandle}
            _render={render}
            _height={height}
          />
        </div>
        <input
          {...props}
          ref={textAreaRef}
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
          onChange={useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
              backdropHandle[refKey]?.(e.target.value);
              onChange?.(e);
            },
            [onChange]
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
        />
      </div>
    );
  }
);
