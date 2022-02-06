import React, { useCallback, useEffect, useMemo, useState } from "react";
import { RichTextarea } from "../src";
import { getTokenizer, Tokenizer } from "kuromojin";

export default {
  title: "examples",
};

const style: React.CSSProperties = {
  width: "400px",
  height: "400px",
};

const Mark = ({
  pos,
  children,
  onMouseMove,
}: {
  pos: string;
  children: string;
  onMouseMove: () => void;
}) => {
  const color =
    pos === "名詞"
      ? "rgba(255, 0, 0, 0.2)"
      : pos === "動詞"
      ? "rgba(0, 255, 0, 0.2)"
      : pos === "形容詞"
      ? "rgba(0, 0, 255, 0.2)"
      : pos === "副詞"
      ? "rgba(255, 0, 255, 0.2)"
      : pos === "助詞"
      ? "rgba(0, 255, 255, 0.2)"
      : pos === "助動詞"
      ? "rgba(255, 255, 0, 0.2)"
      : undefined;

  return (
    <span
      style={{
        position: "relative",
        background: color,
        outline: "solid 1px lightgray",
      }}
      onMouseMove={onMouseMove}
    >
      {children}
    </span>
  );
};

export const Kuromoji = () => {
  const [text, setText] = useState(
    "すもももももももものうち。\n\n吾輩 （ わがはい ） は猫である。名前はまだ無い。\n\nあのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\n\n山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。"
  );
  const [tokenizer, setTokenizer] = useState<Tokenizer | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const tokenizer = await getTokenizer({
        dicPath: process.env.STORYBOOK_DEPLOY ? "/rich-textarea/dict" : "/dict",
      });
      setTokenizer(tokenizer);
    })();
  }, []);

  return (
    <div>
      {!tokenizer && <div>{"Loading dictionaries"}</div>}
      <div>{description}</div>
      <RichTextarea
        style={style}
        onChange={useCallback((e) => setText(e.target.value), [])}
        value={text}
      >
        {(v) => {
          if (!tokenizer) return v;
          const tokens = tokenizer.tokenize(text);
          const nodes: React.ReactElement[] = [];
          for (const {
            pos,
            pos_detail_1,
            pos_detail_2,
            pos_detail_3,
            surface_form,
            word_position,
          } of tokens) {
            nodes.push(
              <Mark
                key={word_position}
                pos={pos}
                onMouseMove={() =>
                  setDescription(
                    `${surface_form}: ${pos} | ${pos_detail_1} | ${pos_detail_2} | ${pos_detail_3}`
                  )
                }
              >
                {surface_form}
              </Mark>
            );
          }
          return nodes;
        }}
      </RichTextarea>
    </div>
  );
};
