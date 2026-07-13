[**API**](../API.md)

***

# Interface: RichTextareaHandle

Defined in: [textarea.tsx:91](https://github.com/inokawa/rich-textarea/blob/f35e066bd168167e8832c503e91b15544962f879/src/textarea.tsx#L91)

Methods of [RichTextarea](../variables/RichTextarea.md).

All the others not mentioned are proxied to ref of [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).

| Name              | Type     | Description                                                               |
| ----------------- | -------- | ------------------------------------------------------------------------- |
| selectionStart    | `number` | Same as original but has handling of composition event                    |
| selectionEnd      | `number` | Same as original but has handling of composition event                    |
| setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |

## Extends

- `HTMLTextAreaElement`
