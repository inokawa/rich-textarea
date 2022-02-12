import React, { useRef, useState } from "react";
import { RichTextarea, RichTextareaHandle } from "../src";

export default {
  title: "examples",
};

const style: React.CSSProperties = {
  width: "400px",
  whiteSpace: "pre",
  overflowWrap: "normal",
  overflowX: "auto",
  overflowY: "hidden",
};

const SPACER = " ";

const Tag = ({
  children,
  selected,
}: {
  children: string;
  selected: boolean;
}) => {
  return (
    <span
      style={{
        background: selected ? "lightgray" : "whitesmoke",
        color: "dimgray",
        borderRadius: "4px",
        outline: "solid 1px dimgray",
      }}
    >
      {children}
    </span>
  );
};

export const Tagging = () => {
  const ref = useRef<RichTextareaHandle>(null);
  const [tags, setTags] = useState<string[]>(["Apple", "Orange", "Banana"]);
  const [text, setText] = useState("");
  const [pos, setPos] = useState<number | null>(null);

  const tagsText = tags.join(SPACER) + (tags.length ? SPACER : "");
  const textStart = tagsText.length;
  const tagIndex =
    pos == null
      ? -1
      : tags.reduce(
          (acc, t, i) => {
            if (acc[0] !== -1) return acc;
            const prev = acc[1];
            acc[1] += t.length + SPACER.length;
            if (prev <= pos && pos < acc[1]) {
              acc[0] = i;
            }
            return acc;
          },
          [-1, 0] as [number, number]
        )[0];

  return (
    <div>
      <RichTextarea
        ref={ref}
        rows={1}
        style={style}
        onChange={(e) => setText(e.target.value.slice(textStart))}
        value={tagsText + text}
        onKeyDown={(e) => {
          if (!pos) return;
          switch (e.code) {
            case "Enter":
              e.preventDefault();
              if (!pos) return;
              if (!text || tags.includes(text)) return;
              setTags((prev) => [...prev, text]);
              setText("");
              break;
            case "Backspace":
              if (textStart < pos) return;
              e.preventDefault();
              setTags((prev) => {
                const next = [...prev];
                next.splice(tagIndex === -1 ? prev.length - 1 : tagIndex, 1);
                return next;
              });
              break;
            case "Delete":
              if (textStart < pos) return;
              e.preventDefault();
              break;
            default:
              break;
          }
        }}
        onSelectionChange={(r) => {
          if (r.focused) {
            setPos(r.selectionStart);
          } else {
            setPos(null);
          }
        }}
      >
        {() => {
          return [
            ...tags.flatMap((t, i) => [
              <Tag key={t} selected={i == tagIndex}>
                {t}
              </Tag>,
              SPACER,
            ]),
            text
              ? text
              : pos === textStart && (
                  <span key={"last"} style={{ color: "darkgray" }}>
                    Type anything and press Enter key...
                  </span>
                ),
          ];
        }}
      </RichTextarea>
    </div>
  );
};
