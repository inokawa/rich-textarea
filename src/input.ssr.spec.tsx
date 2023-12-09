/**
 * @jest-environment node
 */
import { it, describe, expect } from "@jest/globals";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { experimental_RichInput as RichInput } from ".";

const NOP = () => {};

describe("SSR", () => {
  it("should succeed with renderToString", () => {
    expect(
      renderToString(
        <RichInput
          value={"Lorem ipsum dolor sit amet"}
          style={{ width: "123px", height: "456px" }}
          onChange={NOP}
        >
          {(v) => v}
        </RichInput>
      )
    ).toMatchSnapshot();
  });

  it("should succeed with renderToStaticMarkup", () => {
    expect(
      renderToStaticMarkup(
        <RichInput
          value={"Lorem ipsum dolor sit amet"}
          style={{ width: "123px", height: "456px" }}
          onChange={NOP}
        >
          {(v) => v}
        </RichInput>
      )
    ).toMatchSnapshot();
  });
});
