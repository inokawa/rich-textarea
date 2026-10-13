import {
  dispatchClonedMouseEvent,
  dispatchMouseMoveEvent,
  dispatchMouseOutEvent,
  getHorizontalPadding,
  getPointedElement,
  getVerticalPadding,
  listenEvent,
} from "./dom.js";
import { type SelectionStore } from "./selection.js";

/**
 * @internal
 */
export type TextareaRect = [
  width: number,
  height: number,
  hPadding: number,
  vPadding: number,
];

/**
 * @internal
 */
export const createTextareaObserver = (
  textarea: HTMLTextAreaElement | HTMLInputElement,
  backdrop: HTMLDivElement,
  selectionStore: SelectionStore,
  onResize: (size: TextareaRect) => void,
  onFocus: (value: boolean) => void
) => {
  let prevPointed: HTMLElement | null = null;

  const observer = new ResizeObserver(([entry]) => {
    const {
      contentRect: { width, height },
      borderBoxSize,
    } = entry!;
    if (borderBoxSize && borderBoxSize[0]) {
      onResize([
        width,
        height,
        borderBoxSize[0].inlineSize - width,
        borderBoxSize[0].blockSize - height,
      ]);
      return;
    }
    const style = getComputedStyle(textarea);
    onResize([
      width,
      height,
      getHorizontalPadding(style),
      getVerticalPadding(style),
    ]);
  });

  const dispatchToPointed = (e: MouseEvent) => {
    const pointed = getPointedElement(textarea, backdrop, e);
    if (pointed) {
      dispatchClonedMouseEvent(pointed, e);
    }
  };
  const updateSelection = () => {
    selectionStore._updateSeletion();
  };
  const setComposition = (e: CompositionEvent) => {
    selectionStore._setComposition(e);
  };

  const cleanups = [
    listenEvent(textarea, "focus", () => {
      onFocus(true);
    }),
    listenEvent(textarea, "blur", () => {
      onFocus(false);
    }),
    listenEvent(textarea, "scroll", () => {
      const { scrollTop, scrollLeft } = textarea;
      backdrop.style.transform = `translate(${-scrollLeft}px, ${-scrollTop}px)`;
    }),
    listenEvent(textarea, "mousedown", (e) => {
      updateSelection();
      const cleanup = listenEvent(document, "mouseup", () => {
        updateSelection();
        cleanup();
      });
      dispatchToPointed(e);
    }),
    listenEvent(textarea, "mouseup", dispatchToPointed),
    listenEvent(textarea, "mousemove", (e) => {
      const p = getPointedElement(textarea, backdrop, e);
      dispatchMouseMoveEvent(p, prevPointed, e);
      prevPointed = p;
    }),
    listenEvent(textarea, "mouseleave", (e) => {
      dispatchMouseOutEvent(prevPointed, e);
      prevPointed = null;
    }),
    listenEvent(textarea, "click", dispatchToPointed),
    listenEvent(textarea, "input", updateSelection),
    listenEvent(textarea, "compositionstart", setComposition),
    listenEvent(textarea, "compositionupdate", setComposition),
    listenEvent(textarea, "compositionend", () => {
      selectionStore._setComposition();
    }),
  ];
  observer.observe(textarea);
  return () => {
    cleanups.forEach((cleanup) => cleanup());
    observer.disconnect();
  };
};
