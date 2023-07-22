import {
  dispatchClonedMouseEvent,
  dispatchMouseMoveEvent,
  dispatchMouseOutEvent,
  getHorizontalPadding,
  getPointedElement,
  getStyle,
  getVerticalPadding,
  setEventListener,
} from "./dom";
import { SelectionStore } from "./selection";

export type TextareaRect = [
  width: number,
  height: number,
  hPadding: number,
  vPadding: number
];

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
    const style = getStyle(textarea);
    onResize([
      width,
      height,
      getHorizontalPadding(style),
      getVerticalPadding(style),
    ]);
  });

  const cleanUpOnFocus = setEventListener(textarea, "focus", () => {
    onFocus(true);
  });
  const cleanUpOnBlur = setEventListener(textarea, "blur", () => {
    onFocus(false);
  });
  const cleanUpOnScroll = setEventListener(textarea, "scroll", () => {
    const { scrollTop, scrollLeft } = textarea;
    backdrop.style.transform = `translate(${-scrollLeft}px, ${-scrollTop}px)`;
  });
  const cleanUpOnMouseDown = setEventListener(textarea, "mousedown", (e) => {
    selectionStore._updateSeletion();
    const mouseup = () => {
      selectionStore._updateSeletion();
      document.removeEventListener("mouseup", mouseup);
    };
    document.addEventListener("mouseup", mouseup);
    const pointed = getPointedElement(textarea, backdrop, e);
    if (pointed) {
      dispatchClonedMouseEvent(pointed, e);
    }
  });
  const cleanUpOnMouseMove = setEventListener(textarea, "mouseup", (e) => {
    const pointed = getPointedElement(textarea, backdrop, e);
    if (pointed) {
      dispatchClonedMouseEvent(pointed, e);
    }
  });
  const cleanUpMouseMove = setEventListener(textarea, "mousemove", (e) => {
    const p = getPointedElement(textarea, backdrop, e);
    dispatchMouseMoveEvent(p, prevPointed, e);
    prevPointed = p;
  });
  const cleanUpOnMouseLeave = setEventListener(textarea, "mouseleave", (e) => {
    dispatchMouseOutEvent(prevPointed, e);
    prevPointed = null;
  });
  const cleanUpOnClick = setEventListener(textarea, "click", (e) => {
    const pointed = getPointedElement(textarea, backdrop, e);
    if (pointed) {
      dispatchClonedMouseEvent(pointed, e);
    }
  });
  const cleanUpOnInput = setEventListener(textarea, "input", () => {
    selectionStore._updateSeletion();
  });
  const cleanUpOnCompositionStart = setEventListener(
    textarea,
    "compositionstart",
    (e) => {
      selectionStore._setComposition(e);
    }
  );
  const cleanUpOnCompositionUpdate = setEventListener(
    textarea,
    "compositionupdate",
    (e) => {
      selectionStore._setComposition(e);
    }
  );
  const cleanUpOnCompositionEnd = setEventListener(
    textarea,
    "compositionend",
    () => {
      selectionStore._setComposition();
    }
  );
  observer.observe(textarea);
  return () => {
    cleanUpOnFocus();
    cleanUpOnBlur();
    cleanUpOnScroll();
    cleanUpOnMouseDown();
    cleanUpOnMouseMove();
    cleanUpMouseMove();
    cleanUpOnMouseLeave();
    cleanUpOnClick();
    cleanUpOnInput();
    cleanUpOnCompositionStart();
    cleanUpOnCompositionUpdate();
    cleanUpOnCompositionEnd();
    observer.disconnect();
  };
};
