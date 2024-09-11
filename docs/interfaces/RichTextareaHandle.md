[**API**](../API.md) • **Docs**

***

# Interface: RichTextareaHandle

Methods of [RichTextarea](../functions/RichTextarea.md).

All the others not mentioned are proxied to ref of [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).

| Name              | Type     | Description                                                               |
| ----------------- | -------- | ------------------------------------------------------------------------- |
| selectionStart    | `number` | Same as original but has handling of composition event                    |
| selectionEnd      | `number` | Same as original but has handling of composition event                    |
| setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |

## Extends

- `HTMLTextAreaElement`
