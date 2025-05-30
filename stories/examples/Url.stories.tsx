import type { StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { RichTextarea, createRegexRenderer } from "../../src";

export default {
  component: RichTextarea,
};

const style = { width: "400px", height: "300px" };

const regexRenderer = createRegexRenderer([
  [
    /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g,
    ({ children, key, value }) => (
      <a key={key} href={value} target="_blank">
        {children}
      </a>
    ),
  ],
]);

export const Url: StoryObj = {
  render: () => {
    const [text, setText] = useState(
      `Click this url https://github.com/inokawa/rich-textarea !\n\n`
    );

    return (
      <div>
        <RichTextarea
          style={style}
          onChange={(e) => setText(e.target.value)}
          value={text}
        >
          {regexRenderer}
        </RichTextarea>
      </div>
    );
  },
};
