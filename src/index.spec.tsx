import { it, describe, expect, afterEach } from "@jest/globals";
import { cleanup, render } from "@testing-library/react";
import { RichTextarea, createRegexRenderer } from ".";

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

describe("style value", () => {
  it("color", () => {
    const { asFragment } = render(
      <RichTextarea value={"Lorem ipsum dolor sit amet"} onChange={NOP}>
        {createRegexRenderer([[/ore/g, { color: "red" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("decoration", () => {
    const { asFragment } = render(
      <RichTextarea value={"Lorem ipsum dolor sit amet"} onChange={NOP}>
        {createRegexRenderer([[/ore/g, { textDecoration: "undeline" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("background", () => {
    const { asFragment } = render(
      <RichTextarea value={"Lorem ipsum dolor sit amet"} onChange={NOP}>
        {createRegexRenderer([[/ore/g, { background: "red" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("border", () => {
    const { asFragment } = render(
      <RichTextarea value={"Lorem ipsum dolor sit amet"} onChange={NOP}>
        {createRegexRenderer([[/ore/g, { border: "solid 1px red" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("style textarea", () => {
  it("width & height", () => {
    const { asFragment } = render(
      <RichTextarea
        value={"Lorem ipsum dolor sit amet"}
        style={{ width: "123px", height: "456px" }}
        onChange={NOP}
      >
        {createRegexRenderer([[/ore/g, { color: "red" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("color", () => {
    const { asFragment } = render(
      <RichTextarea
        value={"Lorem ipsum dolor sit amet"}
        style={{ color: "blue" }}
        onChange={NOP}
      >
        {createRegexRenderer([[/ore/g, { color: "red" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("caret-color", () => {
    const { asFragment } = render(
      <RichTextarea
        value={"Lorem ipsum dolor sit amet"}
        style={{ caretColor: "blue" }}
        onChange={NOP}
      >
        {createRegexRenderer([[/ore/g, { color: "red" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("background", () => {
    const { asFragment } = render(
      <RichTextarea
        value={"Lorem ipsum dolor sit amet"}
        style={{ background: "blue" }}
        onChange={NOP}
      >
        {createRegexRenderer([[/ore/g, { color: "red" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("background-color", () => {
    const { asFragment } = render(
      <RichTextarea
        value={"Lorem ipsum dolor sit amet"}
        style={{ backgroundColor: "blue" }}
        onChange={NOP}
      >
        {createRegexRenderer([[/ore/g, { color: "red" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("border", () => {
    const { asFragment } = render(
      <RichTextarea
        value={"Lorem ipsum dolor sit amet"}
        style={{ border: "solid 1px blue" }}
        onChange={NOP}
      >
        {createRegexRenderer([[/ore/g, { color: "red" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("border-color", () => {
    const { asFragment } = render(
      <RichTextarea
        value={"Lorem ipsum dolor sit amet"}
        style={{ borderColor: "blue" }}
        onChange={NOP}
      >
        {createRegexRenderer([[/ore/g, { color: "red" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("match", () => {
  it("match one", () => {
    const { asFragment } = render(
      <RichTextarea value={"Lorem ipsum dolor sit amet"} onChange={NOP}>
        {createRegexRenderer([[/ipsum/g, { color: "red" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("match many", () => {
    const { asFragment } = render(
      <RichTextarea value={"Lorem ipsum dolor sit amet"} onChange={NOP}>
        {createRegexRenderer([[/[or]/g, { color: "red" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("multiple matchers", () => {
    const { asFragment } = render(
      <RichTextarea value={"Lorem ipsum dolor sit amet"} onChange={NOP}>
        {createRegexRenderer([
          [/[or]/g, { color: "red", background: "red" }],
          [/[oe]/g, { color: "blue", border: "solid 1px blue" }],
        ])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("japanese", () => {
    const { asFragment } = render(
      <RichTextarea
        value={
          "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
        }
        onChange={NOP}
      >
        {createRegexRenderer([[/[あ-ん]/g, { background: "yellow" }]])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("emoji", () => {
    const { asFragment } = render(
      <RichTextarea
        value={
          "Lorem😇 ipsum dolor sit amet👨‍👩‍👧‍👦 Lorem ipsum dolor👍🏽 sit amet Lorem👩‍💻 ipsum dolor sit amet"
        }
        onChange={NOP}
      >
        {createRegexRenderer([
          [
            /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu,
            { background: "yellow" },
          ],
        ])}
      </RichTextarea>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
