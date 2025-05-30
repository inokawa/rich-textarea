import type { StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { RichTextarea } from "../../src";
import { LOREM } from "../mocks";
import Highlighter from "react-highlight-words";

export default {
  component: RichTextarea,
};

const style = { width: "600px", height: "400px" };

export const Highlight: StoryObj = {
  render: () => {
    const [text, setText] = useState(LOREM);
    const [searchText, setSearchText] = useState("dolor");
    return (
      <div>
        <div>
          <label htmlFor="search">input search word: </label>
          <input
            name="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <RichTextarea
          style={style}
          onChange={(e) => setText(e.target.value)}
          value={text}
        >
          {(v) => (
            <Highlighter
              searchWords={searchText.split(" ")}
              autoEscape={true}
              textToHighlight={v}
            />
          )}
        </RichTextarea>
      </div>
    );
  },
};
