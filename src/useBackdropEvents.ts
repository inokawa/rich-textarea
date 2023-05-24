import { RefObject, useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { refKey } from "./utils";
import {
  dispatchClonedMouseEvent,
  dispatchMouseMoveEvent,
  dispatchMouseOutEvent,
  getPointedElement,
} from "./dom";

export const useBackdropEvents = (
  textAreaRef: RefObject<HTMLElement>,
  backdropRef: RefObject<HTMLElement>
) => {
  const pointedRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const textarea = textAreaRef[refKey];
    const backdrop = backdropRef[refKey];
    if (!textarea || !backdrop) return;

    const onMouseDown = (e: MouseEvent) => {
      const pointed = getPointedElement(textarea, backdrop, e);
      if (pointed) {
        dispatchClonedMouseEvent(pointed, e);
      }
    };
    const onMouseUp = (e: MouseEvent) => {
      const pointed = getPointedElement(textarea, backdrop, e);
      if (pointed) {
        dispatchClonedMouseEvent(pointed, e);
      }
    };
    const onMouseMove = (e: MouseEvent) => {
      const pointed = getPointedElement(textarea, backdrop, e);
      dispatchMouseMoveEvent(pointed, pointedRef, e);
    };
    const onMouseLeave = (e: MouseEvent) => {
      dispatchMouseOutEvent(pointedRef, e, null);
    };
    const onClick = (e: MouseEvent) => {
      const pointed = getPointedElement(textarea, backdrop, e);
      if (pointed) {
        dispatchClonedMouseEvent(pointed, e);
      }
    };

    textarea.addEventListener("mousedown", onMouseDown);
    textarea.addEventListener("mouseup", onMouseUp);
    textarea.addEventListener("mousemove", onMouseMove);
    textarea.addEventListener("mouseleave", onMouseLeave);
    textarea.addEventListener("click", onClick);
    return () => {
      textarea.removeEventListener("mousedown", onMouseDown);
      textarea.removeEventListener("mouseup", onMouseUp);
      textarea.removeEventListener("mousemove", onMouseMove);
      textarea.removeEventListener("mouseleave", onMouseLeave);
      textarea.removeEventListener("click", onClick);
    };
  }, []);
};
