[**API**](../API.md)

***

# Interface: RichTextareaHandle

Defined in: [textarea.tsx:90](https://github.com/inokawa/rich-textarea/blob/a6c7e9412d20f1c5126a66cabda131f3c6106c15/src/textarea.tsx#L90)

Methods of [RichTextarea](../variables/RichTextarea.md).

All the others not mentioned are proxied to ref of [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).

| Name              | Type     | Description                                                               |
| ----------------- | -------- | ------------------------------------------------------------------------- |
| selectionStart    | `number` | Same as original but has handling of composition event                    |
| selectionEnd      | `number` | Same as original but has handling of composition event                    |
| setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |

## Extends

- `HTMLTextAreaElement`
