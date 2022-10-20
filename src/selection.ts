const NOOP = () => {};

export const initSelectionStore = (
  ref: React.RefObject<HTMLTextAreaElement>
) => {
  let listener = NOOP;
  let cache: [number | null, number | null] = [null, null];
  let compositionEvent: CompositionEvent | null = null;
  const handle = {
    _subscribe(callback: () => void) {
      listener = callback;
      return () => {
        listener = NOOP;
      };
    },
    _update() {
      setTimeout(listener);
    },
    _setComposition(comp: CompositionEvent | null) {
      compositionEvent = comp;
    },
    _getSelectionStart(): number | null {
      const el = ref.current;
      if (!el) return null;
      let pos = el.selectionStart;
      if (compositionEvent) {
        pos = Math.min(pos, el.selectionEnd - compositionEvent.data.length);
      }
      return pos;
    },
    _getSelectionEnd(): number | null {
      const el = ref.current;
      if (!el) return null;
      let pos = el.selectionEnd;
      if (compositionEvent) {
        pos = Math.min(pos, el.selectionStart + compositionEvent.data.length);
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
