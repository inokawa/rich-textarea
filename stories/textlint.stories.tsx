import React, { useCallback, useEffect, useMemo, useState } from "react";
import { RichTextarea } from "../src";
import { TextlintKernel, TextlintMessage } from "@textlint/kernel";
import { TextlintKernelOptions } from "@textlint/kernel/lib/src/textlint-kernel-interface";

const kernel = new TextlintKernel();
const options: TextlintKernelOptions = {
  ext: ".txt",
  plugins: [
    {
      pluginId: "text",
      plugin: require("@textlint/textlint-plugin-text").default,
    },
  ],
  rules: [
    {
      ruleId: "sentence-length",
      rule: require("textlint-rule-sentence-length").default,
    },
    {
      ruleId: "no-nfd",
      rule: require("textlint-rule-no-nfd"),
    },
    {
      ruleId: "no-invalid-control-character",
      rule: require("@textlint-rule/textlint-rule-no-invalid-control-character"),
    },
    {
      ruleId: "no-zero-width-spaces",
      rule: require("textlint-rule-no-zero-width-spaces").default,
    },
    {
      ruleId: "no-kangxi-radicals",
      rule: require("textlint-rule-no-kangxi-radicals").default,
    },
  ],
};

export default {
  title: "examples",
};

const style: React.CSSProperties = {
  width: "300px",
  height: "200px",
};

export const Textlint = () => {
  const [text, setText] = useState(
    "⾼齢者の活躍と地域における⽀えあいの推進。\nホ゜ケット エンシ゛ン"
  );

  const [tokens, setTokens] = useState<TextlintMessage[]>([]);
  useEffect(() => {
    (async () => {
      const res = await kernel.lintText(text, options);
      setTokens(res.messages);
    })();
  }, [text]);
  return (
    <div>
      <RichTextarea
        style={style}
        onChange={useCallback((e) => setText(e.target.value), [])}
        value={text}
      >
        {(v) => {
          if (!tokens.length) return v;
          const nodes: (React.ReactElement | string)[] = [];
          const tokensByLine = tokens.reduce((acc, t) => {
            if (!acc[t.line]) acc[t.line] = [];
            acc[t.line].push(t);
            return acc;
          }, {} as { [key: number]: TextlintMessage[] });
          v.split("\n").forEach((l, i) => {
            let res: (React.ReactElement | string)[] = [l];
            if (tokensByLine[i + 1]) {
              const texts: (React.ReactElement | string)[] = [];
              let prevEnd = 0;
              let prevStart = 0;
              for (const { column, message, fix } of tokensByLine[i + 1]) {
                const start = column - 1;
                const end = start + 1;
                texts.push(l.slice(prevEnd, start));
                texts.push(
                  <span
                    key={start}
                    style={{
                      textDecoration: "underline dashed red",
                    }}
                  >
                    {l.slice(start, end)}
                  </span>
                );
                prevEnd = end;
                prevStart = start;
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
};
