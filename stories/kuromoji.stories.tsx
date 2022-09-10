import { StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { RichTextarea } from "../src";
import { getTokenizer, Tokenizer, KuromojiToken } from "kuromojin";

export default {
  title: "examples",
};

const style: React.CSSProperties = {
  width: "400px",
  height: "400px",
};

const Mark = ({
  token: { pos, pos_detail_1, pos_detail_2, pos_detail_3, surface_form },
  children,
}: {
  token: KuromojiToken;
  children: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [tooltip, setTooltip] = useState<{
    top: number;
    left: number;
    description: string;
  } | null>(null);

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
      ref={ref}
      style={{
        position: "relative",
        background: color,
        outline: "solid 1px lightgray",
      }}
      onMouseOver={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setTooltip({
          top: rect.top - rect.height * 2 /* FIXME */,
          left: rect.left,
          description: `${surface_form}: ${pos} | ${pos_detail_1} | ${pos_detail_2} | ${pos_detail_3}`,
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
            {tooltip.description}
          </div>,
          document.body
        )}
    </span>
  );
};

export const Kuromoji: StoryObj = {
  render: () => {
    const [text, setText] = useState(
      "すもももももももものうち。\n\n吾輩 （ わがはい ） は猫である。名前はまだ無い。\n\nあのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\n\n山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。"
    );
    const [tokenizer, setTokenizer] = useState<Tokenizer | null>(null);

    useEffect(() => {
      (async () => {
        const tokenizer = await getTokenizer({
          dicPath: process.env.STORYBOOK_DEPLOY
            ? "/rich-textarea/dict"
            : "/dict",
        });
        setTokenizer(tokenizer);
      })();
    }, []);

    return (
      <div style={{ marginTop: 16 }}>
        {!tokenizer && <div>{"Loading dictionaries"}</div>}
        <RichTextarea
          style={style}
          onChange={(e) => setText(e.target.value)}
          value={text}
        >
          {(v) => {
            if (!tokenizer) return v;
            const tokens = tokenizer.tokenize(text);
            const nodes: React.ReactElement[] = [];
            for (const token of tokens) {
              nodes.push(
                <Mark key={token.word_position} token={token}>
                  {token.surface_form}
                </Mark>
              );
            }
            return nodes;
          }}
        </RichTextarea>
      </div>
    );
  },
};
