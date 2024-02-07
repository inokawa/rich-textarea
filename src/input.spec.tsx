import { it, describe, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { experimental_RichInput as RichInput } from ".";

global.ResizeObserver = class mockResizeObjerver {
  instanceResize: ResizeObserver | null = null;
  callbackResize: ResizeObserverCallback | null = null;
  constructor(callback: ResizeObserverCallback) {
    this.instanceResize = this;
    this.callbackResize = callback;
  }
  disconnect() {}
  observe(_target: Element, _options?: ResizeObserverOptions) {}
  unobserve(_target: Element) {}
};

const NOP = () => {};

afterEach(cleanup);

describe("smoke", () => {
  it("controlled", () => {
    const { asFragment } = render(
      <RichInput value={"Lorem ipsum dolor sit amet"} onChange={NOP}>
        {(v) => {
          return v.split("").map((t, i) => (
            <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>
              {t}
            </span>
          ));
        }}
      </RichInput>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("uncontrolled", () => {
    const { asFragment } = render(
      <RichInput defaultValue={"Lorem ipsum dolor sit amet"}>
        {(v) => {
          return v.split("").map((t, i) => (
            <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>
              {t}
            </span>
          ));
        }}
      </RichInput>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
