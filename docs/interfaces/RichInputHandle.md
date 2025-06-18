[**API**](../API.md)

***

# Interface: RichInputHandle

Defined in: [src/input.tsx:97](https://github.com/inokawa/rich-textarea/blob/7eb748f42b59f753b6ba4e33c0a5f82e934d33c9/src/input.tsx#L97)

Methods of [RichInput](../functions/experimental_RichInput.md).

All the others not mentioned are proxied to ref of [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).

| Name              | Type     | Description                                                            |
| ----------------- | -------- | ---------------------------------------------------------------------- |
| selectionStart    | `number` | Same as original but has handling of composition event                    |
| selectionEnd      | `number` | Same as original but has handling of composition event                    |
| setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |

## Extends

- `HTMLInputElement`
