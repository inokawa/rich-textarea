import { StoryObj } from "@storybook/react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { RichTextarea, RichTextareaHandle } from "../../src";
import { CHARACTERS } from "../mocks";

export default {
  component: RichTextarea,
};

const INPUT_HEIGHT = 20;
const INPUT_WIDTH = 400;

const style: React.CSSProperties = {
  height: INPUT_HEIGHT,
  width: INPUT_WIDTH,
  whiteSpace: "pre",
  overflowWrap: "normal",
  resize: "none",
};

const Menu = ({
  index,
  items,
  onSelect,
}: {
  index: number;
  items: string[];
  onSelect: (index: number) => void;
}) => {
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.children[index]?.scrollIntoView();
  }, [index]);

  return (
    <div
      style={{
        position: "absolute",
        overflowY: "auto",
        maxHeight: 200,
        top: INPUT_HEIGHT + 4,
        left: 0,
        width: INPUT_WIDTH,
        fontSize: "12px",
        border: "solid 1px gray",
        borderRadius: "3px",
      }}
    >
      <ul
        ref={ref}
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          cursor: "pointer",
          background: "white",
        }}
      >
        {items.map((item, i) => (
          <li
            key={item}
            style={{
              ...(index === i && {
                color: "white",
                background: "#2A6AD3",
              }),
            }}
            onMouseDown={() => onSelect(i)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Combobox: StoryObj = {
  render: () => {
    const ref = useRef<RichTextareaHandle>(null);

    const [text, setText] = useState("");

    const [index, setIndex] = useState<number>(-1);

    const [focused, setFocused] = useState(false);

    const filtered = useMemo(
      () =>
        CHARACTERS.filter((c) =>
          c.toLowerCase().startsWith(text.toLowerCase())
        ),
      [text]
    );

    const complete = (i: number) => {
      setText(filtered[i]);
      setIndex(-1);
      ref.current?.blur();
    };

    return (
      <div style={{ position: "relative", padding: 0 }}>
        <RichTextarea
          ref={ref}
          rows={1}
          style={style}
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Please select..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => {
            if (!filtered.length) return;
            switch (e.code) {
              case "ArrowUp":
                e.preventDefault();
                const nextIndex =
                  index === -1 ? filtered.length - 1 : index - 1;
                setIndex(nextIndex);
                break;
              case "ArrowDown":
                e.preventDefault();
                const prevIndex = index >= filtered.length - 1 ? -1 : index + 1;
                setIndex(prevIndex);
                break;
              case "Enter":
                e.preventDefault();
              case "Space":
                if (index === -1) break;
                complete(index);
                break;
              case "Escape":
                e.preventDefault();
                setIndex(-1);
                break;
              default:
                break;
            }
          }}
        />
        {focused && !!filtered.length && (
          <Menu index={index} items={filtered} onSelect={complete} />
        )}
      </div>
    );
  },
};
