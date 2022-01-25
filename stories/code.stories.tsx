import React, { useCallback, useState } from "react";
import { Renderer, Textarea } from "../src";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";

export default {
  title: "code",
};

const style: React.CSSProperties = {
  width: "600px",
  height: "400px",
  caretColor: "white",
  backgroundColor: "rgb(40, 42, 54)",
};

const renderer: Renderer = (value) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={value} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div
          className={className}
          style={{
            ...style,
            margin: 0, // necessary to fit pre to textarea
          }}
        >
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

export const Basic = () => {
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
    <Textarea
      style={style}
      onChange={useCallback((e) => setText(e.target.value), [])}
      value={text}
    >
      {renderer}
    </Textarea>
  );
};
