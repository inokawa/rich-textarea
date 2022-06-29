import { useState, useMemo } from "react";
import { Renderer, RichTextarea } from "../src";
import diff from "monaco-diff";
import type { ILineChange } from "monaco-diff";

export default {
  title: "examples",
};

const style: React.CSSProperties = {
  width: "300px",
  height: "400px",
};

const createDiffRenderer =
  (tokens: ILineChange[], type: "base" | "target"): Renderer =>
  (value) => {
    const orgLines: ({ start?: number; end?: number }[] | undefined)[] =
      Array.from({ length: value.length });
    const modLines: ({ start?: number; end?: number }[] | undefined)[] =
      Array.from({ length: value.length });
    for (const token of tokens) {
      for (
        let i = token.originalStartLineNumber;
        i <= token.originalEndLineNumber;
        i++
      ) {
        orgLines[i - 1] || (orgLines[i - 1] = []);
        if (token.modifiedEndLineNumber === 0) {
          orgLines[i - 1].push({ start: undefined, end: undefined });
        }
      }
      for (
        let i = token.modifiedStartLineNumber;
        i <= token.modifiedEndLineNumber;
        i++
      ) {
        modLines[i - 1] || (modLines[i - 1] = []);
        if (token.originalEndLineNumber === 0) {
          modLines[i - 1].push({ start: undefined, end: undefined });
        }
      }

      token.charChanges?.forEach((c) => {
        for (
          let i = c.originalStartLineNumber;
          i <= c.originalEndLineNumber;
          i++
        ) {
          if (i === c.originalStartLineNumber) {
            if (c.originalStartLineNumber === c.originalEndLineNumber) {
              (orgLines[i - 1] || (orgLines[i - 1] = [])).push({
                start: c.originalStartColumn,
                end: c.originalEndColumn,
              });
            } else {
              (orgLines[i - 1] || (orgLines[i - 1] = [])).push({
                start: c.originalStartColumn,
                end: undefined,
              });
            }
          } else if (i === c.originalEndLineNumber) {
            (orgLines[i - 1] || (orgLines[i - 1] = [])).push({
              start: undefined,
              end: c.originalEndColumn,
            });
          } else {
            (orgLines[i - 1] || (orgLines[i - 1] = [])).push({
              start: undefined,
              end: undefined,
            });
          }
        }
        for (
          let i = c.modifiedStartLineNumber;
          i <= c.modifiedEndLineNumber;
          i++
        ) {
          if (i === c.modifiedStartLineNumber) {
            if (c.modifiedStartLineNumber === c.modifiedEndLineNumber) {
              (modLines[i - 1] || (modLines[i - 1] = [])).push({
                start: c.modifiedStartColumn,
                end: c.modifiedEndColumn,
              });
            } else {
              (modLines[i - 1] || (modLines[i - 1] = [])).push({
                start: c.modifiedStartColumn,
                end: undefined,
              });
            }
          } else if (i === c.modifiedEndLineNumber) {
            (modLines[i - 1] || (modLines[i - 1] = [])).push({
              start: undefined,
              end: c.modifiedEndColumn,
            });
          } else {
            (modLines[i - 1] || (modLines[i - 1] = [])).push({
              start: undefined,
              end: undefined,
            });
          }
        }
      });
    }
    const bgStyle =
      type === "base"
        ? { background: "rgba(255, 0, 0, 0.2)" }
        : { background: "rgba(155, 185, 85, 0.2)" };
    return value.split("\n").map((s, i) => {
      const diff =
        (type === "base" && orgLines[i]) ||
        (type === "target" && modLines[i]) ||
        undefined;
      let node: (React.ReactElement | string)[] = [s];
      if (diff && diff.length) {
        let prevEnd = 0;
        let prevStart = 0;
        const res: (React.ReactElement | string)[] = [];
        for (let di = 0; di < diff.length; di++) {
          const d = diff[di];

          const start = d.start ? d.start - 1 : 0;
          const end = d.end ? d.end - 1 : s.length;
          res.push(s.slice(prevEnd, start));
          res.push(
            <span key={`${i}-${di}`} style={bgStyle}>
              {s.slice(start, end)}
            </span>
          );
          prevStart = start;
          prevEnd = end;
        }
        res.push(s.slice(prevEnd));

        node = res;
      }
      node.push(" ");
      return (
        <div key={i} style={diff && bgStyle}>
          {node}
        </div>
      );
    });
  };

export const Diff = () => {
  const [baseText, setBaseText] = useState(
    "This line is removed on the right.\njust some text\nabcd\nefgh\nSome more text\nSome more text\nSome more text"
  );
  const [targetText, setTargetText] = useState(
    "just some text\nabcz\nzzzzefgh\nSome more text.\nThis line is removed on the left."
  );
  const tokens = useMemo(
    () => diff(baseText.split("\n"), targetText.split("\n")),
    [baseText, targetText]
  );

  return (
    <div>
      <RichTextarea
        style={style}
        onChange={(e) => setBaseText(e.target.value)}
        value={baseText}
      >
        {createDiffRenderer(tokens, "base")}
      </RichTextarea>
      <RichTextarea
        style={style}
        onChange={(e) => setTargetText(e.target.value)}
        value={targetText}
      >
        {createDiffRenderer(tokens, "target")}
      </RichTextarea>
    </div>
  );
};
