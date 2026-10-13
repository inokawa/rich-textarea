[**API**](../API.md)

***

# Interface: RichInputHandle

Defined in: [input.tsx:96](https://github.com/inokawa/rich-textarea/blob/a6c7e9412d20f1c5126a66cabda131f3c6106c15/src/input.tsx#L96)

Methods of [RichInput](../variables/experimental_RichInput.md).

All the others not mentioned are proxied to ref of [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).

| Name              | Type     | Description                                                            |
| ----------------- | -------- | ---------------------------------------------------------------------- |
| selectionStart    | `number` | Same as original but has handling of composition event                    |
| selectionEnd      | `number` | Same as original but has handling of composition event                    |
| setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |

## Extends

- `HTMLInputElement`
