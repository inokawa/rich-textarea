import { useState } from "react";
import { RichTextarea } from "../src";

export default {
  title: "examples",
};

const INPUT_HEIGHT = 20;
const INPUT_WIDTH = 400;

const style: React.CSSProperties = {
  height: INPUT_HEIGHT,
  width: INPUT_WIDTH,
  whiteSpace: "pre",
  overflowWrap: "normal",
  overflowX: "auto",
  overflowY: "hidden",
  resize: "none",
};

const SPACER = " ";

const Menu = ({
  items,
  onSelect,
}: {
  items: string[];
  onSelect: (name: string) => void;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: INPUT_HEIGHT + 4,
        left: 0,
        width: INPUT_WIDTH,
        fontSize: "12px",
        border: "solid 1px gray",
        borderRadius: "3px",
      }}
    >
      <div
        style={{
          borderBottom: "solid 1px gray",
        }}
      >
        Current tags
      </div>
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          cursor: "pointer",
          background: "white",
        }}
      >
        {items.map((item) => (
          <li key={item} onMouseDown={() => onSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

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
  const [tags, setTags] = useState<string[]>(["Apple", "Orange", "Banana"]);
  const [text, setText] = useState("");
  const [pos, setPos] = useState<number | null>(null);

  const [focused, setFocused] = useState(false);

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
    <div style={{ position: "relative", padding: 0 }}>
      <RichTextarea
        rows={1}
        style={style}
        onChange={(e) => setText(e.target.value.slice(textStart))}
        value={tagsText + text}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
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
                  <span key={"__placeholder"} style={{ color: "darkgray" }}>
                    Type anything and press Enter key...
                  </span>
                ),
          ];
        }}
      </RichTextarea>
      {focused && !!tags.length && (
        <Menu
          items={tags}
          onSelect={(text) => {
            setTags((prev) => prev.filter((p) => p !== text));
          }}
        />
      )}
    </div>
  );
};
