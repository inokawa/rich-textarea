[**API**](../API.md)

***

# Interface: RichTextareaHandle

Defined in: [src/textarea.tsx:87](https://github.com/inokawa/rich-textarea/blob/7eb748f42b59f753b6ba4e33c0a5f82e934d33c9/src/textarea.tsx#L87)

Methods of [RichTextarea](../functions/RichTextarea.md).

All the others not mentioned are proxied to ref of [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).

| Name              | Type     | Description                                                               |
| ----------------- | -------- | ------------------------------------------------------------------------- |
| selectionStart    | `number` | Same as original but has handling of composition event                    |
| selectionEnd      | `number` | Same as original but has handling of composition event                    |
| setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |

## Extends

- `HTMLTextAreaElement`
