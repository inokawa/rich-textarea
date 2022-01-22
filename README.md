# rich-textarea

![npm](https://img.shields.io/npm/v/rich-textarea) ![check](https://github.com/inokawa/rich-textarea/workflows/check/badge.svg) ![demo](https://github.com/inokawa/rich-textarea/workflows/demo/badge.svg)

A small [React](https://github.com/facebook/react) component to colorize, highlight and decorate your textarea.

## Demo

https://inokawa.github.io/rich-textarea/

## Overview

Sometimes we need rich text editor in web but creating it with [contenteditable is so hard](https://github.com/grammarly/contenteditables)... Maybe all you really need is just a textarea with highlighting?

This library is a simple native [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) but has a function to style texts matched with regex.
Not just highlighting them like similar libraries, this library also supports colorizing, decorating and more.
And also suports combination of multiple matchers (experimental).

## Install

```sh
npm install rich-textarea
```

### Requirements

- react 16.8+

## Usage

```jsx
import * as React from "react";
import { Textarea } from "rich-textarea";

export const App = () => {
  const [text, setText] = React.useState("Lorem ipsum");

  return (
    <Textarea
      matchers={[
        [/[A-Z][a-z]+/g, { borderRadius: "3px", backgroundColor: "#d0bfff" }],
      ]}
      value={text}
      style={{ width: "600px", height: "400px" }}
      onChange={(e) => setText(e.target.value)}
    />
  );
};
```
