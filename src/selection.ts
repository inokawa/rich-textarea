import { refKey } from "./utils";

export const initSelectionStore = (
  ref: React.RefObject<HTMLTextAreaElement | HTMLInputElement>
) => {
  const subscribers = new Set<() => void>();
  let cache: [number | null, number | null] = [null, null];
  let compositionEvent: CompositionEvent | void;
  const handle = {
    _subscribe(cb: () => void) {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },
    _updateSeletion() {
      setTimeout(() => {
        subscribers.forEach((cb) => {
          cb();
        });
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
    _getSelection(): [number | null, number | null] {
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
