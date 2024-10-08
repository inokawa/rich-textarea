import type { StoryObj } from "@storybook/react";
import React, { useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  RichTextarea,
  createRegexRenderer,
  type RichTextareaHandle,
} from "../../src";
import { CHARACTERS } from "../mocks";

export default {
  component: RichTextarea,
};

const style = { width: "400px", height: "300px" };

const MAX_LIST_LENGTH = 8;
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

const Menu = ({
  chars,
  index,
  top,
  left,
  complete,
}: {
  chars: string[];
  index: number;
  top: number;
  left: number;
  complete: (index: number) => void;
}) => {
  return (
    <div
      style={{
        position: "fixed",
        top: top,
        left: left,
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
    </div>
  );
};

export const Mention: StoryObj = {
  render: () => {
    const ref = useRef<RichTextareaHandle>(null);
    const [text, setText] = useState(
      `Hi, @Captain Gregor and @Jaxxon . Please enter @ to show suggestions.\n\n`
    );
    const [pos, setPos] = useState<{
      top: number;
      left: number;
      caret: number;
    } | null>(null);
    const [index, setIndex] = useState<number>(0);

    const targetText = pos ? text.slice(0, pos.caret) : text;
    const match = pos && targetText.match(MENTION_REG);
    const name = match?.[1] ?? "";
    const filtered = useMemo(
      () =>
        CHARACTERS.filter((c) =>
          c.toLowerCase().startsWith(name.toLowerCase())
        ).slice(0, MAX_LIST_LENGTH),
      [name]
    );
    const complete = (i: number) => {
      if (!ref.current || !pos) return;
      const selected = filtered[i];
      ref.current.setRangeText(
        `@${selected} `,
        pos.caret - name.length - 1,
        pos.caret,
        "end"
      );
      setPos(null);
      setIndex(0);
    };

    return (
      <div>
        <RichTextarea
          ref={ref}
          style={style}
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyDown={(e) => {
            if (!pos || !filtered.length) return;
            switch (e.code) {
              case "ArrowUp":
                e.preventDefault();
                const nextIndex = index <= 0 ? filtered.length - 1 : index - 1;
                setIndex(nextIndex);
                break;
              case "ArrowDown":
                e.preventDefault();
                const prevIndex = index >= filtered.length - 1 ? 0 : index + 1;
                setIndex(prevIndex);
                break;
              case "Enter":
                e.preventDefault();
                complete(index);
                break;
              case "Escape":
                e.preventDefault();
                setPos(null);
                setIndex(0);
                break;
              default:
                break;
            }
          }}
          onSelectionChange={(r) => {
            if (
              r.focused &&
              MENTION_REG.test(text.slice(0, r.selectionStart))
            ) {
              setPos({
                top: r.top + r.height,
                left: r.left,
                caret: r.selectionStart,
              });
              setIndex(0);
            } else {
              setPos(null);
              setIndex(0);
            }
          }}
        >
          {mentionRenderer}
        </RichTextarea>
        {pos &&
          createPortal(
            <Menu
              top={pos.top}
              left={pos.left}
              chars={filtered}
              index={index}
              complete={complete}
            />,
            document.body
          )}
      </div>
    );
  },
};
