# Interface: RichInputHandle

Methods of [experimental_RichInput](../API.md#experimental_richinput).

All the others not mentioned are proxied to ref of [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).

| Name              | Type     | Description                                                            |
| ----------------- | -------- | ---------------------------------------------------------------------- |
| selectionStart    | `number` | Same as original but has handling of composition event                    |
| selectionEnd      | `number` | Same as original but has handling of composition event                    |
| setSelectionRange |          | Same as original but with focus                                           |
| setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |

## Hierarchy

- `HTMLInputElement`

  ↳ **`RichInputHandle`**
