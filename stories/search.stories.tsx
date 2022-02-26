import React, { useCallback, useState } from "react";
import { createRegexRenderer, RichTextarea } from "../src";
import { LOREM } from "./mocks";

export default {
  title: "examples",
};

const style = { width: "600px", height: "400px" };

export const Search = () => {
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
        onChange={useCallback((e) => setText(e.target.value), [])}
        value={text}
      >
        {searchText
          ? createRegexRenderer([
              [
                new RegExp(
                  searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                  "ig"
                ),
                { borderRadius: "3px", backgroundColor: "yellow" },
              ],
            ])
          : undefined}
      </RichTextarea>
    </div>
  );
};
