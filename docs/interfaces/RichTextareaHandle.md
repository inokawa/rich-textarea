[**API**](../API.md)

***

# Interface: RichTextareaHandle

Defined in: [src/textarea.tsx:87](https://github.com/inokawa/rich-textarea/blob/014fce22747814ddccd7d4075d76e5778c804d3c/src/textarea.tsx#L87)

Methods of [RichTextarea](../functions/RichTextarea.md).

All the others not mentioned are proxied to ref of [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).

| Name              | Type     | Description                                                               |
| ----------------- | -------- | ------------------------------------------------------------------------- |
| selectionStart    | `number` | Same as original but has handling of composition event                    |
| selectionEnd      | `number` | Same as original but has handling of composition event                    |
| setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |

## Extends

- `HTMLTextAreaElement`
