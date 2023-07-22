import { refKey } from "./utils";

export type SelectionRange = [number | null, number | null];

export const initSelectionStore = (
  ref: React.RefObject<HTMLTextAreaElement | HTMLInputElement>,
  onSelectionUpdate: (range: SelectionRange) => void
) => {
  let cache: [number | null, number | null] = [null, null];
  let compositionEvent: CompositionEvent | void;
  const _getSelection = (): [number | null, number | null] => {
    const selectionStart = handle._getSelectionStart();
    const selectionEnd = handle._getSelectionEnd();
    if (cache[0] === selectionStart && cache[1] === selectionEnd) {
      return cache;
    }
    cache = [selectionStart, selectionEnd];
    return cache;
  };
  const handle = {
    _updateSeletion() {
      setTimeout(() => {
        onSelectionUpdate(_getSelection());
      });
    },
    _setComposition(event: CompositionEvent | void) {
      compositionEvent = event;
    },
    _getSelectionStart(): number | null {
      const el = ref[refKey];
      if (!el) return null;
      let pos = el.selectionStart!;
      // compensate selection range during compositioning
      if (compositionEvent) {
        pos = Math.min(pos, el.selectionEnd! - compositionEvent.data.length);
      }
      return pos;
    },
    _getSelectionEnd(): number | null {
      const el = ref[refKey];
      if (!el) return null;
      let pos = el.selectionEnd!;
      // compensate selection range during compositioning
      if (compositionEvent) {
        pos = Math.min(pos, el.selectionStart! + compositionEvent.data.length);
      }
      return pos;
    },
  };
  return handle;
};

export type SelectionStore = ReturnType<typeof initSelectionStore>;
