import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { RichTextarea } from "../src";
import { RichTextareaHandle } from "../src";

export default {
  title: "examples",
};

const style = { width: "400px", height: "300px" };

const Menu = ({
  top,
  left,
  onSelectBold,
  onSelectItalic,
  onSelectStrike,
}: {
  top: number;
  left: number;
  onSelectBold: () => void;
  onSelectItalic: () => void;
  onSelectStrike: () => void;
}) => {
  return (
    <div
      style={{
        position: "fixed",
        top: top,
        left: left,
      }}
    >
      <button onMouseDown={onSelectBold}>
        <b>B</b>
      </button>
      <button onMouseDown={onSelectItalic}>
        <i>I</i>
      </button>
      <button onMouseDown={onSelectStrike}>
        <s>S</s>
      </button>
    </div>
  );
};

export const Toolbar = () => {
  const ref = useRef<RichTextareaHandle>(null);
  const [text, setText] = useState(`Select text and click any button.\n\n`);
  const [[selectionStart, selectionEnd, pos], setSelection] = useState<
    [number, number, { top: number; left: number } | undefined] | []
  >([]);
  const hideMenu =
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
        !hideMenu &&
        createPortal(
          <Menu
            top={pos.top}
            left={pos.left}
            onSelectBold={() => {
              if (!ref.current) return;
              const start = ref.current.selectionStart;
              const end = ref.current.selectionEnd;
              ref.current.setRangeText(
                `**${text.slice(start, end)}**`,
                start,
                end
              );
            }}
            onSelectItalic={() => {
              if (!ref.current) return;
              const start = ref.current.selectionStart;
              const end = ref.current.selectionEnd;
              ref.current.setRangeText(
                `*${text.slice(start, end)}*`,
                start,
                end
              );
            }}
            onSelectStrike={() => {
              if (!ref.current) return;
              const start = ref.current.selectionStart;
              const end = ref.current.selectionEnd;
              ref.current.setRangeText(
                `~~${text.slice(start, end)}~~`,
                start,
                end
              );
            }}
          />,
          document.body
        )}
    </div>
  );
};
