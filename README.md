# rich-textarea

![npm](https://img.shields.io/npm/v/rich-textarea) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/rich-textarea) ![npm](https://img.shields.io/npm/dw/rich-textarea) ![check](https://github.com/inokawa/rich-textarea/workflows/check/badge.svg) ![demo](https://github.com/inokawa/rich-textarea/workflows/demo/badge.svg)

A small customizable textarea for [React](https://github.com/facebook/react) to colorize, highlight, decorate texts, offer autocomplete and much more.

<img src="./images/sample-mention.gif" width="350px" /><img src="./images/sample-diff.gif" width="350px" />

<img src="./images/sample-tagging.gif" width="350px" /><img src="./images/sample-url.gif" width="350px" />

<img src="./images/sample-prism.gif" width="350px" /><img src="./images/sample-kuromoji.gif" width="350px" />

## Demo

https://inokawa.github.io/rich-textarea/

## Features

- **Styleable texts:** Not just highlighting texts like similar libraries, this library also supports colorizing, decorating and more. Regex or any tokenizers can be used.
- **Easy to interact with events:** You can get caret position and can catch some mouse events on texts, which are useful to display something reflects user actions.
- **Compatible with textarea:** Except added features, this library is designed to behave as native [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) as much as possible. Supports [formik](https://github.com/jaredpalmer/formik) and [react-hook-form](https://github.com/react-hook-form/react-hook-form). If not worked properly, please report it in an [issue](https://github.com/inokawa/rich-textarea/issues) or [PR](https://github.com/inokawa/rich-textarea/pulls).
- **IME composition handling:** IME related events have some cross browser problems. This library handles them for easy to use.
- **Lightweight:** Trying to support many usecases but also keep bundle size small. Currently [about 3kB (gzipped)](https://bundlephobia.com/package/rich-textarea).

## Motivation

Sometimes we need customized text editor in web. However creating it with [raw contenteditable is so hard to do properly](https://github.com/grammarly/contenteditable) and editor frameworks are usually too heavy... Maybe you really need is just a textarea with highlighting and some hovered menus, but native textarea and many of textarea libraries are far from it because of the limited customizability. This library is aiming to solve the problem.

## Install

```sh
npm install rich-textarea
```

### Requirements

- react >= 16.14

If you use ESM and webpack 5, use react >= 18 to avoid [Can't resolve `react/jsx-runtime` error](https://github.com/facebook/react/issues/20235).

## Usage

You can create your own render function

```jsx
import { useState } from "react";
import { RichTextarea } from "rich-textarea";

export const App = () => {
  const [text, setText] = useState("Lorem ipsum");

  return (
    <RichTextarea
      value={text}
      style={{ width: "600px", height: "400px" }}
      onChange={(e) => setText(e.target.value)}
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
```

or you can use helper for regex.

```jsx
import { useState } from "react";
import { RichTextarea, createRegexRenderer } from "rich-textarea";

const renderer = createRegexRenderer([
  [/[A-Z][a-z]+/g, { borderRadius: "3px", backgroundColor: "#d0bfff" }],
]);

export const App = () => {
  const [text, setText] = useState("Lorem ipsum");

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

For other props not mentioned below will be passed to textarea.

| Name              | Type                                          | Default     | Description                                                                                                                                                                                                                                                               |
| ----------------- | --------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value             | `string`                                      | required    | Same as textarea but only string                                                                                                                                                                                                                                          |
| defaultValue      | -                                             | -           | Omitted for simplicity of logic                                                                                                                                                                                                                                           |
| children          | `(value: string) => React.ReactNode`          | `undefined` | This function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage). Currently limited event handlers will work for the nodes (`onClick`, `onMouseOver`, `onMouseOut`, `onMouseMove`, `onMouseDown` and `onMouseUp`) |
| autoHeight        | `boolean`                                     | `undefined` | If true, textarea height is automatically resized and height of style prop does not work. Set `maxHeight` to style prop if you need limit.                                                                                                                                |
| onSelectionChange | `(pos: CaretPosition, value: string) => void` | `undefined` | Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.                                                                                                                                                      |

## Methods

All the others not mentioned are proxied to ref of [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).

| Name              | Type     | Description                                                                                                                                       |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| selectionStart    | `number` | Same as [textarea](https://developer.mozilla.org/en-US/docs/Web/API/) but has handling of composition event                                       |
| selectionEnd      | `number` | Same as [textarea](https://developer.mozilla.org/en-US/docs/Web/API/) but has handling of composition event                                       |
| setSelectionRange |          | Same as [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement) but with focus                                           |
| setRangeText      |          | Same as [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement) but has fallback to `document.execCommand("insertText")` |

## Contribute

All contributions are welcome.
If you find a problem, feel free to create an [issue](https://github.com/inokawa/rich-textarea/issues) or a [PR](https://github.com/inokawa/rich-textarea/pulls).

### Making a Pull Request

1. Clone this repo.
2. Run `npm install`.
3. Commit your fix.
4. Make a PR and confirm all the CI checks passed.
