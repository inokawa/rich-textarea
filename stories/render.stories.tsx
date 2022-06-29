import { useState } from "react";
import { RichTextarea } from "../src";

export default {
  title: "render",
};

const style = { width: "600px", height: "400px" };

export const Basic = () => {
  const [text, setText] = useState("Lorem ipsum");
  return (
    <RichTextarea
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
    </RichTextarea>
  );
};
