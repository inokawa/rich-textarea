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
  const [[selectionStart, selectionEnd], setSelection] = useState<
    [number, number] | []
  >([]);
  const disabled =
    selectionStart == null ||
    selectionEnd == null ||
    selectionStart === selectionEnd;

  return (
    <div>
      <div>
        <button
          disabled={disabled}
          onClick={() => {
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
          onClick={() => {
            const start = ref.current.selectionStart;
            const end = ref.current.selectionEnd;
            ref.current.setRangeText(`*${text.slice(start, end)}*`, start, end);
          }}
        >
          <i>I</i>
        </button>
        <button
          disabled={disabled}
          onClick={() => {
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
      </div>
      <RichTextarea
        ref={ref}
        style={style}
        onChange={(e) => setText(e.target.value)}
        onSelectionChange={(p) => {
          setSelection([p.selectionStart, p.selectionEnd]);
        }}
        value={text}
      />
      {/* {pos &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
              fontSize: "16px",
              border: "solid 1px gray",
              borderRadius: "3px",
              background: "white",
              cursor: "pointer",
            }}
          >
            {chars.map((c, i) => (
              <div
                key={c.key}
                style={{
                  padding: "4px",
                  ...(index === i && {
                    color: "white",
                    background: "#2A6AD3",
                  }),
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  complete(i);
                }}
              >
                {`${c.emoji} ${c.key}`}
              </div>
            ))}
          </div>,
          document.body
        )} */}
    </div>
  );
};
