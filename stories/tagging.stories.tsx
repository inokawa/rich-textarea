import React, { useRef, useState } from "react";
import { RichTextarea, RichTextareaHandle } from "../src";

export default {
  title: "examples",
};

const style: React.CSSProperties = {
  width: "600px",
  whiteSpace: "pre",
  overflowWrap: "normal",
  overflowX: "auto",
  overflowY: "hidden",
};

const SPACER = " ";

const Tag = ({ children }: { children: string }) => {
  return (
    <span
      style={{
        background: "whitesmoke",
        color: "slategray",
        borderRadius: "4px",
        outline: "solid 1px slategray",
      }}
    >
      {children}
    </span>
  );
};

export const Tagging = () => {
  const ref = useRef<RichTextareaHandle>(null);
  const [tags, setTags] = useState<string[]>(["Apple", "Orange"]);
  const [text, setText] = useState("Banana");
  const [pos, setPos] = useState<number | null>(null);

  const tagsText = tags.join(SPACER) + SPACER;
  const textStart = tagsText.length;

  return (
    <div>
      <div>Type anything and press Enter key.</div>
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
              setTags((prev) => prev.slice(0, prev.length - 1));
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
            ...tags.flatMap((t, i) => [<Tag key={t}>{t}</Tag>, SPACER]),
            text,
          ];
        }}
      </RichTextarea>
    </div>
  );
};
