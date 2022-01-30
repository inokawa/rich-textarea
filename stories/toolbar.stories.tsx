import React, { useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { RichTextarea } from "../src";
import { RichTextareaHandle } from "../src";

export default {
  title: "examples",
};

const style = { width: "400px", height: "300px" };

export const Toolbar = () => {
  const ref = useRef<RichTextareaHandle>(null);
  const [text, setText] = useState(`Select text and click any button.\n\n`);
  const [[selectionStart, selectionEnd, pos], setSelection] = useState<
    [number, number, { top: number; left: number }] | []
  >([]);
  const disabled =
    selectionStart == null ||
    selectionEnd == null ||
    selectionStart === selectionEnd;

  return (
    <div style={{ position: "relative", paddingTop: 16 }}>
      <RichTextarea
        ref={ref}
        value={text}
        style={style}
        onChange={(e) => setText(e.target.value)}
        onBlur={() => {
          ref.current.setSelectionRange(0, 0);
          ref.current.blur();
        }}
        onSelectionChange={(p) => {
          setSelection([
            p.selectionStart,
            p.selectionEnd,
            p.focused
              ? {
                  top: p.top - p.height * 1.5 /* FIXME */,
                  left: p.left,
                }
              : undefined,
          ]);
        }}
      />
      {pos &&
        !disabled &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
            }}
          >
            <button
              disabled={disabled}
              onMouseDown={() => {
                const start = ref.current.selectionStart;
                const end = ref.current.selectionEnd;
                ref.current.setRangeText(
                  `**${text.slice(start, end)}**`,
                  start,
                  end
                );
              }}
            >
              <b>B</b>
            </button>
            <button
              disabled={disabled}
              onMouseDown={() => {
                const start = ref.current.selectionStart;
                const end = ref.current.selectionEnd;
                ref.current.setRangeText(
                  `*${text.slice(start, end)}*`,
                  start,
                  end
                );
              }}
            >
              <i>I</i>
            </button>
            <button
              disabled={disabled}
              onMouseDown={() => {
                const start = ref.current.selectionStart;
                const end = ref.current.selectionEnd;
                ref.current.setRangeText(
                  `~~${text.slice(start, end)}~~`,
                  start,
                  end
                );
              }}
            >
              <s>S</s>
            </button>
          </div>,
          document.body
        )}
    </div>
  );
};
