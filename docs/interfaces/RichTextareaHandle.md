# Interface: RichTextareaHandle

Methods of [RichTextarea](../API.md#richtextarea).

All the others not mentioned are proxied to ref of [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).

| Name              | Type     | Description                                                               |
| ----------------- | -------- | ------------------------------------------------------------------------- |
| selectionStart    | `number` | Same as original but has handling of composition event                    |
| selectionEnd      | `number` | Same as original but has handling of composition event                    |
| setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |

## Hierarchy

- `HTMLTextAreaElement`

  ↳ **`RichTextareaHandle`**
