[**API**](../API.md)

***

# Interface: RichInputHandle

Defined in: [input.tsx:97](https://github.com/inokawa/rich-textarea/blob/f35e066bd168167e8832c503e91b15544962f879/src/input.tsx#L97)

Methods of [RichInput](../variables/experimental_RichInput.md).

All the others not mentioned are proxied to ref of [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).

| Name              | Type     | Description                                                            |
| ----------------- | -------- | ---------------------------------------------------------------------- |
| selectionStart    | `number` | Same as original but has handling of composition event                    |
| selectionEnd      | `number` | Same as original but has handling of composition event                    |
| setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |

## Extends

- `HTMLInputElement`
