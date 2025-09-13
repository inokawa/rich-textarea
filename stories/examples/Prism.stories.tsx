import type { StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { type Renderer, RichTextarea } from "../../src";
import { Highlight, themes } from "prism-react-renderer";
import prettier from "prettier/standalone";
import * as estree from "prettier/plugins/estree";
import * as typescript from "prettier/plugins/typescript";

export default {
  component: RichTextarea,
};

const style: React.CSSProperties = {
  width: "600px",
  caretColor: "white",
  backgroundColor: "rgb(40, 42, 54)", // FIXME
  maxHeight: "500px",
};

const renderer: Renderer = (value) => {
  return (
    <Highlight theme={themes.dracula} code={value} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </div>
      )}
    </Highlight>
  );
};

export const Prism: StoryObj = {
  render: () => {
    const [text, setText] = useState(
      `import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`
    );
    return (
      <div>
        <div>
          <button
            onClick={async () =>
              setText(
                await prettier.format(text, {
                  parser: "typescript",
                  plugins: [typescript, estree],
                })
              )
            }
          >
            format
          </button>
        </div>
        <div>
          <RichTextarea
            style={style}
            onChange={(e) => setText(e.target.value)}
            value={text}
            autoHeight
          >
            {renderer}
          </RichTextarea>
        </div>
      </div>
    );
  },
};
