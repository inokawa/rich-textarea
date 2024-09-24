import { StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { RichTextarea } from "../../src";

export default {
  component: RichTextarea,
};

const style: React.CSSProperties = {
  width: "300px",
  height: "200px",
};

export const Segmenter: StoryObj = {
  render: () => {
    const [text, setText] = useState(
      "すもももももももものうち。\n\n吾輩 （ わがはい ） は猫である。名前はまだ無い。"
    );
    const [locale, setLocale] = useState("ja");
    const [granularity, setGranularity] = useState<string>("word");

    const hasSegmenter = !!(Intl as any)?.Segmenter;
    return (
      <div>
        {!hasSegmenter && (
          <div>{"Intl.Segmenter is not supported in this browser."}</div>
        )}
        <div>
          <input value={locale} onChange={(e) => setLocale(e.target.value)} />
          <select
            value={granularity}
            onChange={(e) => setGranularity(e.target.value)}
          >
            <option value={"grapheme"}>grapheme</option>
            <option value={"word"}>word</option>
            <option value={"sentence"}>sentence</option>
          </select>
        </div>
        <RichTextarea
          style={style}
          onChange={(e) => setText(e.target.value)}
          value={text}
        >
          {(v) => {
            if (!hasSegmenter) return v;

            try {
              const segmenter = new (Intl as any).Segmenter(locale, {
                granularity,
              });
              const tokens = segmenter.segment(v);
              const nodes: React.ReactElement[] = [];
              for (const { segment, index, isWordLike } of tokens) {
                nodes.push(
                  <span
                    key={index}
                    style={{
                      background: isWordLike ? "palegreen" : undefined,
                      outline: "solid 1px green",
                    }}
                  >
                    {segment}
                  </span>
                );
              }
              return nodes;
            } catch (e) {
              return v;
            }
          }}
        </RichTextarea>
      </div>
    );
  },
};
