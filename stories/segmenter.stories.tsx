import React, { useCallback, useMemo, useState } from "react";
import { Renderer, Textarea } from "../src";

export default {
  title: "examples",
};

const style: React.CSSProperties = {
  width: "300px",
  height: "200px",
};

export const Segmenter = () => {
  const [text, setText] = useState(
    "すもももももももものうち。\n\n吾輩 （ わがはい ） は猫である。名前はまだ無い。"
  );
  const [granularity, setGranularity] = useState<string>("word");

  const hasSegmenter = !!(Intl as any)?.Segmenter;
  return (
    <div>
      {!hasSegmenter && (
        <div>{"Intl.Segmenter is not supported in this browser."}</div>
      )}
      <div>
        <select
          value={granularity}
          onChange={(e) => setGranularity(e.target.value)}
        >
          <option value={"grapheme"}>grapheme</option>
          <option value={"word"}>word</option>
          <option value={"sentence"}>sentence</option>
        </select>
      </div>
      <Textarea
        style={style}
        onChange={useCallback((e) => setText(e.target.value), [])}
        value={text}
      >
        {(v) => {
          if (!hasSegmenter) return v;

          const segmenter = new (Intl as any).Segmenter("ja", {
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
        }}
      </Textarea>
    </div>
  );
};
