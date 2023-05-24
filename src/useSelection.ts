import { RefObject } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { refKey } from "./utils";
import { SelectionStore } from "./selection";

export const useSelection = (
  selectionStore: SelectionStore,
  textAreaRef: RefObject<HTMLElement>,
  backdropRef: RefObject<HTMLElement>
) => {
  useIsomorphicLayoutEffect(() => {
    const textarea = textAreaRef[refKey];
    const backdrop = backdropRef[refKey];
    if (!textarea || !backdrop) return;

    const onMouseDown = () => {
      selectionStore._updateSeletion();
      const mouseup = () => {
        selectionStore._updateSeletion();
        document.removeEventListener("mouseup", mouseup);
      };
      document.addEventListener("mouseup", mouseup);
    };

    textarea.addEventListener("mousedown", onMouseDown);
    return () => {
      textarea.removeEventListener("mousedown", onMouseDown);
    };
  }, []);
};
