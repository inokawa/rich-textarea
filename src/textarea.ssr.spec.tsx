/**
 * @jest-environment node
 */
import { it, describe, expect } from "vitest";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { RichTextarea } from ".";

const NOP = () => {};

describe("SSR", () => {
  it("should succeed with renderToString", () => {
    expect(
      renderToString(
        <RichTextarea
          value={"Lorem ipsum dolor sit amet"}
          style={{ width: "123px", height: "456px" }}
          onChange={NOP}
        >
          {(v) => v}
        </RichTextarea>
      )
    ).toMatchSnapshot();
  });

  it("should succeed with renderToStaticMarkup", () => {
    expect(
      renderToStaticMarkup(
        <RichTextarea
          value={"Lorem ipsum dolor sit amet"}
          style={{ width: "123px", height: "456px" }}
          onChange={NOP}
        >
          {(v) => v}
        </RichTextarea>
      )
    ).toMatchSnapshot();
  });
});
