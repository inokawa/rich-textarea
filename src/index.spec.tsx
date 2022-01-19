import * as React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Textarea } from ".";

global.ResizeObserver = class mockResizeObjerver {
  instanceResize: ResizeObserver | null = null;
  callbackResize: ResizeObserverCallback | null = null;
  constructor(callback: ResizeObserverCallback) {
    this.instanceResize = this;
    this.callbackResize = callback;
  }
  disconnect() {}
  observe(target: Element, options?: ResizeObserverOptions) {}
  unobserve(target: Element) {}
};

const NOP = () => {};

afterEach(cleanup);

describe("style", () => {
  it("color", () => {
    const { asFragment } = render(
      <Textarea
        matchers={[[/ore/g, { color: "red" }]]}
        value={"Lorem ipsum dolor sit amet"}
        onChange={NOP}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("decoration", () => {
    const { asFragment } = render(
      <Textarea
        matchers={[[/ore/g, { textDecoration: "undeline" }]]}
        value={"Lorem ipsum dolor sit amet"}
        onChange={NOP}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("background", () => {
    const { asFragment } = render(
      <Textarea
        matchers={[[/ore/g, { background: "red" }]]}
        value={"Lorem ipsum dolor sit amet"}
        onChange={NOP}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("border", () => {
    const { asFragment } = render(
      <Textarea
        matchers={[[/ore/g, { border: "solid 1px red" }]]}
        value={"Lorem ipsum dolor sit amet"}
        onChange={NOP}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("match", () => {
  it("match one", () => {
    const { asFragment } = render(
      <Textarea
        matchers={[[/ipsum/g, { color: "red" }]]}
        value={"Lorem ipsum dolor sit amet"}
        onChange={NOP}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("match many", () => {
    const { asFragment } = render(
      <Textarea
        matchers={[[/[or]/g, { color: "red" }]]}
        value={"Lorem ipsum dolor sit amet"}
        onChange={NOP}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("multiple matchers", () => {
    const { asFragment } = render(
      <Textarea
        matchers={[
          [/[or]/g, { color: "red", background: "red" }],
          [/[oe]/g, { color: "blue", border: "solid 1px blue" }],
        ]}
        value={"Lorem ipsum dolor sit amet"}
        onChange={NOP}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("japanese", () => {
    const { asFragment } = render(
      <Textarea
        matchers={[[/[あ-ん]/g, { background: "yellow" }]]}
        value={
          "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
        }
        onChange={NOP}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("emoji", () => {
    const { asFragment } = render(
      <Textarea
        matchers={[
          [
            /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu,
            { background: "yellow" },
          ],
        ]}
        value={
          "Lorem😇 ipsum dolor sit amet👨‍👩‍👧‍👦 Lorem ipsum dolor👍🏽 sit amet Lorem👩‍💻 ipsum dolor sit amet"
        }
        onChange={NOP}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
