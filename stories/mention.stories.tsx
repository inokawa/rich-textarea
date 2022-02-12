import React, { useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { RichTextarea, createRegexRenderer, RichTextareaHandle } from "../src";
import { CHARACTERS } from "./mocks";

export default {
  title: "examples",
};

const style = { width: "400px", height: "300px" };

const MAX_CHARS = 8;
const MENTION_REG = /\B@([\-+\w]*)$/;
const MENTION_HIGHLIGHT_REG = new RegExp(
  `(${CHARACTERS.map((c) => `@${c}`).join("|")})`,
  "g"
);
const mentionRenderer = createRegexRenderer([
  [
    MENTION_HIGHLIGHT_REG,
    { background: "#EAF5F9", color: "#4276AA", borderRadius: "3px" },
  ],
]);

export const Mention = () => {
  const ref = useRef<RichTextareaHandle>(null);
  const [text, setText] = useState(
    `Hi, @Captain Gregor and @Jaxxon . Please enter @ to show suggestions.\n\n`
  );
  const [pos, setPos] =
    useState<{ top: number; left: number; caret: number } | null>(null);
  const [index, setIndex] = useState<number>(0);

  const targetText = pos ? text.slice(0, pos.caret) : text;
  const match = pos && targetText.match(MENTION_REG);
  const name = match?.[1] ?? "";
  const chars = useMemo(
    () =>
      CHARACTERS.filter((c) =>
        c.toLowerCase().startsWith(name.toLowerCase())
      ).slice(0, MAX_CHARS),
    [name]
  );
  const complete = (i: number) => {
    const selected = chars[i];
    ref.current.setRangeText(
      `@${selected} `,
      pos.caret - name.length - 1,
      pos.caret,
      "end"
    );
    setPos(null);
    setIndex(null);
  };

  return (
    <div>
      <RichTextarea
        ref={ref}
        style={style}
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={(e) => {
          if (!pos || !chars.length) return;
          switch (e.code) {
            case "ArrowUp":
              e.preventDefault();
              const nextIndex = index <= 0 ? chars.length - 1 : index - 1;
              setIndex(nextIndex);
              break;
            case "ArrowDown":
              e.preventDefault();
              const prevIndex = index >= chars.length - 1 ? 0 : index + 1;
              setIndex(prevIndex);
              break;
            case "Enter":
              e.preventDefault();
              complete(index);
              break;
            case "Escape":
              e.preventDefault();
              setPos(null);
              setIndex(null);
              break;
            default:
              break;
          }
        }}
        onSelectionChange={(r) => {
          if (r.focused && MENTION_REG.test(text.slice(0, r.selectionStart))) {
            setPos({
              top: r.top + r.height,
              left: r.left,
              caret: r.selectionStart,
            });
            setIndex(0);
          } else {
            setPos(null);
            setIndex(null);
          }
        }}
      >
        {mentionRenderer}
      </RichTextarea>
      {pos &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
              fontSize: "12px",
              border: "solid 1px gray",
              borderRadius: "3px",
              background: "white",
              cursor: "pointer",
            }}
          >
            {chars.map((c, i) => (
              <div
                key={c}
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
                {c}
              </div>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
};
