import React, { useMemo, useRef, useState } from "react";
import { RichTextarea } from "../src";
import { RichTextareaHandle } from "../src";

export default {
  title: "examples",
};

const style = { width: "400px", height: "300px" };

export const Toolbar = () => {
  const ref = useRef<RichTextareaHandle>(null);
  const [text, setText] = useState(`Select text and click any button.\n\n`);

  return (
    <div>
      <div>
        <button
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
          onClick={() => {
            const start = ref.current.selectionStart;
            const end = ref.current.selectionEnd;
            ref.current.setRangeText(`*${text.slice(start, end)}*`, start, end);
          }}
        >
          <i>I</i>
        </button>
        <button
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
        value={text}
      />
    </div>
  );
};
