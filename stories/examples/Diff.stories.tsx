import type { StoryObj } from "@storybook/react-vite";
import React, {
  ChangeEvent,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { RichTextarea } from "../../src";
import { diffLines, diffChars, type Change } from "diff";

export default {
  component: RichTextarea,
};

const style: React.CSSProperties = {
  width: "300px",
  height: "400px",
};

type DiffResult = { [line: number]: boolean | Change[] | undefined };

const REMOVED_COLOR = "rgba(255, 0, 0, 0.2)";
const ADDED_COLOR = "rgba(155, 185, 85, 0.2)";

const Span = ({
  type,
  children,
}: {
  type: "base" | "target";
  children: ReactNode;
}) => {
  return (
    <span
      style={{
        background: type === "base" ? REMOVED_COLOR : ADDED_COLOR,
      }}
    >
      {children}
    </span>
  );
};

const Editor = ({
  result,
  type,
  text,
  onChange,
}: {
  result: DiffResult;
  type: "base" | "target";
  text: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <RichTextarea value={text} onChange={onChange} style={style}>
      {(value) =>
        value.split("\n").map((l, i) => {
          const rowResult = result[i];

          return (
            <div
              key={i}
              style={
                rowResult
                  ? {
                      background: type === "base" ? REMOVED_COLOR : ADDED_COLOR,
                    }
                  : undefined
              }
            >
              {l ? (
                Array.isArray(rowResult) ? (
                  rowResult.map((t, j) => {
                    if (!t.added && !t.removed) {
                      return t.value;
                    }
                    if (
                      (type === "base" && t.added) ||
                      (type === "target" && t.removed)
                    ) {
                      return null;
                    }
                    return (
                      <Span key={j} type={type}>
                        {t.value}
                      </Span>
                    );
                  })
                ) : rowResult ? (
                  <Span type={type}>{l}</Span>
                ) : (
                  l
                )
              ) : (
                <br />
              )}
            </div>
          );
        })
      }
    </RichTextarea>
  );
};

export const Diff: StoryObj = {
  render: () => {
    const [baseText, setBaseText] = useState(
      "This line is removed on the right.\njust some text\nabcd\nefgh\nSome more text\nSome more text\nSome more text",
    );
    const [targetText, setTargetText] = useState(
      "just some text\nabcz\nzzzzefgh\nSome more text.\nThis line is removed on the left.",
    );

    const result = useMemo(() => {
      const getLines = (v: string) => {
        const trimmedValue = v.endsWith("\n") ? v.slice(0, -1) : v;
        return trimmedValue.split("\n");
      };

      const diff = diffLines(baseText, targetText);

      let baseCount = 0;
      let targetCount = 0;
      const base: DiffResult = {};
      const target: DiffResult = {};
      for (let diffIndex = 0; diffIndex < diff.length; diffIndex++) {
        const { removed, added, value } = diff[diffIndex]!;
        const lines = getLines(value);
        if (!removed && !added) {
          baseCount += lines.length;
          targetCount += lines.length;
        }
        if (removed) {
          const next = diff[diffIndex + 1];
          if (next && next.added) {
            const nextLines = getLines(next.value);

            const maxLength = Math.max(lines.length, nextLines.length);
            for (let i = 0; i < maxLength; i++) {
              const b = lines[i];
              const t = nextLines[i];
              if (b != null && t != null) {
                const charDiff = diffChars(b, t);
                base[baseCount] = charDiff;
                target[targetCount] = charDiff;
              }
              if (b != null) {
                if (!base[baseCount]) {
                  base[baseCount] = true;
                }
                baseCount++;
              }
              if (t != null) {
                if (!target[targetCount]) {
                  target[targetCount] = true;
                }
                targetCount++;
              }
            }
            diffIndex++;
            continue;
          }
          for (const l of lines) {
            base[baseCount] = true;
            baseCount++;
          }
        }
        if (added) {
          for (const l of lines) {
            target[targetCount] = true;
            targetCount++;
          }
        }
      }
      return { base, target };
    }, [baseText, targetText]);

    return (
      <div>
        <Editor
          type="base"
          result={result.base}
          text={baseText}
          onChange={useCallback((e) => {
            setBaseText(e.target.value);
          }, [])}
        />
        <Editor
          type="target"
          result={result.target}
          text={targetText}
          onChange={useCallback((e) => {
            setTargetText(e.target.value);
          }, [])}
        />
      </div>
    );
  },
};
