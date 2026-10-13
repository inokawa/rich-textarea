[**API**](../API.md)

***

# Interface: RichTextareaProps

Defined in: [textarea.tsx:97](https://github.com/inokawa/rich-textarea/blob/a6c7e9412d20f1c5126a66cabda131f3c6106c15/src/textarea.tsx#L97)

Props of [RichTextarea](../variables/RichTextarea.md).

For other props not mentioned below will be passed to [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).

## Extends

- `Omit`\<`React.ComponentProps`\<`"textarea"`\>, `"children"`\>

## Properties

### children?

> `optional` **children?**: [`Renderer`](../type-aliases/Renderer.md)

Defined in: [textarea.tsx:114](https://github.com/inokawa/rich-textarea/blob/a6c7e9412d20f1c5126a66cabda131f3c6106c15/src/textarea.tsx#L114)

Render function to create customized view from value.

This function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).

On the rendered nodes, currently limited event handlers will work.
- `onClick`
- `onMouseOver`
- `onMouseOut`
- `onMouseMove`
- `onMouseDown`
- `onMouseUp`

#### Default Value

```ts
undefined
```

***

### autoHeight?

> `optional` **autoHeight?**: `boolean`

Defined in: [textarea.tsx:121](https://github.com/inokawa/rich-textarea/blob/a6c7e9412d20f1c5126a66cabda131f3c6106c15/src/textarea.tsx#L121)

If true, textarea height is automatically resized and height of style prop does not work.
Set `maxHeight` to style prop if you need limit.
Set `rows` prop to 1 if you need single-line textarea.

#### Default Value

```ts
undefined
```

***

### onSelectionChange?

> `optional` **onSelectionChange?**: (`pos`) => `void`

Defined in: [textarea.tsx:126](https://github.com/inokawa/rich-textarea/blob/a6c7e9412d20f1c5126a66cabda131f3c6106c15/src/textarea.tsx#L126)

Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.

#### Parameters

##### pos

[`CaretPosition`](../type-aliases/CaretPosition.md)

#### Returns

`void`

#### Default Value

```ts
undefined
```
