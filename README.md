# rich-textarea

![npm](https://img.shields.io/npm/v/rich-textarea) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/rich-textarea)
![check](https://github.com/inokawa/rich-textarea/workflows/check/badge.svg) ![demo](https://github.com/inokawa/rich-textarea/workflows/demo/badge.svg)

A small customizable textarea for [React](https://github.com/facebook/react) to colorize, highlight, decorate texts and offer autocomplete.

<img src="./images/sample.gif" width="400px" />

<img src="./images/sample-mention.gif" width="400px" /><img src="./images/sample-diff.gif" width="400px" />

<img src="./images/sample-prism.gif" width="400px" /><img src="./images/sample-kuromoji.gif" width="400px" />

## Demo

https://inokawa.github.io/rich-textarea/

## Overview

Sometimes we need rich text editor in web. However creating it with [raw contenteditable is so hard](https://github.com/grammarly/contenteditable) and editor frameworks are usually too heavy... Maybe all you really need is just a textarea with highlighting?

This library is a simple native [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) but has a function to style texts with regex or other tokenizers.
Not just highlighting texts like similar libraries, this library also supports colorizing, decorating and much more.

## Install

```sh
npm install rich-textarea
```

### Requirements

- react >= 16.14

## Usage

```jsx
import * as React from "react";
import { RichTextarea, createRegexRenderer } from "rich-textarea";

const renderer = createRegexRenderer([
  [/[A-Z][a-z]+/g, { borderRadius: "3px", backgroundColor: "#d0bfff" }],
]);

export const App = () => {
  const [text, setText] = React.useState("Lorem ipsum");

  return (
    <RichTextarea
      value={text}
      style={{ width: "600px", height: "400px" }}
      onChange={(e) => setText(e.target.value)}
    >
      {renderer}
    </RichTextarea>
  );
};
```

And see [examples](./stories) for more usages.

## Props

For other props not mentioned below will be passed to textarea. If not worked properly, please report it in an [issue](https://github.com/inokawa/rich-textarea/issues) or [PR](https://github.com/inokawa/rich-textarea/pulls).

| Name              | Type                                          | Description                                                                                                                                                                                                                                                    |
| ----------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value             | `string`                                      | Same as textarea but only string                                                                                                                                                                                                                               |
| defaultValue      | -                                             | Omitted for simplicity of logic                                                                                                                                                                                                                                |
| children          | `(value: string) => React.ReactNode`          | This function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage). Currently limited event handlers will work for the nodes (`onMouseOver`, `onMouseOut`, `onMouseMove`, `onMouseDown` and `onMouseUp`) |
| onSelectionChange | `(pos: CaretPosition, value: string) => void` | Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.                                                                                                                                           |

## Methods

| Name              | Type                                   | Description                                                                                                                                       |
| ----------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| ref               | `React.RefObject<HTMLTextAreaElement>` | Ref of textarea                                                                                                                                   |
| selectionStart    |                                        | Same as [textarea](https://developer.mozilla.org/en-US/docs/Web/API/)                                                                             |
| selectionEnd      |                                        | Same as [textarea](https://developer.mozilla.org/en-US/docs/Web/API/)                                                                             |
| focus             |                                        | Same as [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)                                                          |
| blur              |                                        | Same as [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)                                                          |
| select            |                                        | Same as [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)                                                          |
| setSelectionRange |                                        | Same as [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)                                                          |
| setRangeText      |                                        | Same as [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement) but has fallback to `document.execCommand("insertText")` |
