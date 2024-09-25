import { StoryObj } from "@storybook/react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { RichTextarea } from "../../src";
import { TextlintKernel, TextlintMessage } from "@textlint/kernel";
import { TextlintKernelOptions } from "@textlint/kernel/lib/src/textlint-kernel-interface";

import pluginText from "@textlint/textlint-plugin-text";
import ruleSentenceLength from "textlint-rule-sentence-length";
import ruleNoNfd from "textlint-rule-no-nfd";
import ruleNoInvalidControlCharacter from "@textlint-rule/textlint-rule-no-invalid-control-character";
import ruleNoZeroWidthSpaces from "textlint-rule-no-zero-width-spaces";
import noKangxiRadicals from "textlint-rule-no-kangxi-radicals";

const kernel = new TextlintKernel();
const options: TextlintKernelOptions = {
  ext: ".txt",
  plugins: [
    {
      pluginId: "text",
      plugin: pluginText,
    },
  ],
  rules: [
    {
      ruleId: "sentence-length",
      rule: ruleSentenceLength,
    },
    {
      ruleId: "no-nfd",
      rule: ruleNoNfd,
    },
    {
      ruleId: "no-invalid-control-character",
      rule: ruleNoInvalidControlCharacter,
    },
    {
      ruleId: "no-zero-width-spaces",
      rule: ruleNoZeroWidthSpaces,
    },
    {
      ruleId: "no-kangxi-radicals",
      rule: noKangxiRadicals,
    },
  ],
};

export default {
  component: RichTextarea,
};

const style: React.CSSProperties = {
  width: "300px",
  height: "200px",
};

const Mark = ({
  token,
  children,
}: {
  token: TextlintMessage[];
  children: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [tooltip, setTooltip] = useState<{
    top: number;
    left: number;
  } | null>(null);

  return (
    <span
      ref={ref}
      style={{
        textDecoration: "underline dashed red",
      }}
      onMouseOver={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setTooltip({
          top: rect.top - rect.height * 2 /* FIXME */,
          left: rect.left,
        });
      }}
      onMouseOut={() => setTooltip(null)}
    >
      {children}
      {tooltip &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: tooltip.top,
              left: tooltip.left,
              background: "white",
              fontSize: 16,
              padding: 2,
              border: "solid 1px gray",
            }}
          >
            {token.map((t, i) => (
              <div key={i}>
                {i}: {t.message}
              </div>
            ))}
          </div>,
          document.body
        )}
    </span>
  );
};

export const Textlint: StoryObj = {
  render: () => {
    const [text, setText] = useState(
      "⾼齢者の活躍と地域における⽀えあいの\u0019推進\u0010。\nホ゜ケット エンシ゛ン\nテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト"
    );

    const [tokens, setTokens] = useState<TextlintMessage[]>([]);
    useEffect(() => {
      (async () => {
        const res = await kernel.lintText(text, options);
        setTokens(res.messages);
      })();
    }, [text]);
    return (
      <div style={{ marginTop: 16 }}>
        <RichTextarea
          style={style}
          onChange={(e) => setText(e.target.value)}
          value={text}
        >
          {(v) => {
            if (!tokens.length) return v;
            const nodes: (React.ReactElement | string)[] = [];
            const tokensByLine = tokens.reduce(
              (acc, t) => {
                if (!acc[t.line]) acc[t.line] = {};
                if (!acc[t.line][t.column]) acc[t.line][t.column] = [];
                acc[t.line][t.column].push(t);
                return acc;
              },
              {} as { [key: number]: { [column: number]: TextlintMessage[] } }
            );
            v.split("\n").forEach((l, i) => {
              let res: (React.ReactElement | string)[] = [l];
              if (tokensByLine[i + 1]) {
                const texts: (React.ReactElement | string)[] = [];
                const tokensMap = tokensByLine[i + 1] || {};
                let prevEnd = 0;
                for (const token of Object.values(tokensMap)) {
                  const start = token[0].column - 1;
                  const end = start + 1;
                  texts.push(l.slice(prevEnd, start));
                  texts.push(
                    <Mark key={start} token={token}>
                      {l.slice(start, end)}
                    </Mark>
                  );
                  prevEnd = end;
                }
                texts.push(l.slice(prevEnd));
                res = texts;
              }
              res.push(" ");
              nodes.push(<div key={i}>{res}</div>);
            });

            return nodes;
          }}
        </RichTextarea>
      </div>
    );
  },
};
