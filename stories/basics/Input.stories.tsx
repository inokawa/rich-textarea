import { StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { experimental_RichInput as RichInput } from "../../src";

export default {
  component: RichInput,
};

const style = { paddingLeft: 10, paddingRight: 10 };

export const Basic: StoryObj = {
  render: () => {
    const [text, setText] = useState("Lorem ipsum");
    return (
      <RichInput
        style={style}
        onChange={(e) => setText(e.target.value)}
        value={text}
      >
        {(v) => {
          return v.split("").map((t, i) => (
            <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>
              {t}
            </span>
          ));
        }}
      </RichInput>
    );
  },
};

export const WidthMax: StoryObj = {
  render: () => {
    const [text, setText] = useState("Lorem ipsum");
    return (
      <RichInput
        style={{ width: "100%" }}
        onChange={(e) => setText(e.target.value)}
        value={text}
      >
        {(v) => {
          return v.split("").map((t, i) => (
            <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>
              {t}
            </span>
          ));
        }}
      </RichInput>
    );
  },
  name: "Width 100%",
};
