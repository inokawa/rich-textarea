[**API**](../API.md) • **Docs**

***

# Interface: RichTextareaProps

Props of [RichTextarea](../functions/RichTextarea.md).

For other props not mentioned below will be passed to [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).

## Extends

- `Omit`\<`JSX.IntrinsicElements`\[`"textarea"`\], `"children"`\>

## Properties

### children?

> `optional` **children**: [`Renderer`](../type-aliases/Renderer.md)

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

#### Defined in

[src/textarea.tsx:110](https://github.com/inokawa/rich-textarea/blob/f68d9e7ccb43f4a3c1bc208fe5bee1c78fa77f0e/src/textarea.tsx#L110)

***

### autoHeight?

> `optional` **autoHeight**: `boolean`

If true, textarea height is automatically resized and height of style prop does not work.
Set `maxHeight` to style prop if you need limit.
Set `rows` prop to 1 if you need single-line textarea.

#### Default Value

```ts
undefined
```

#### Defined in

[src/textarea.tsx:117](https://github.com/inokawa/rich-textarea/blob/f68d9e7ccb43f4a3c1bc208fe5bee1c78fa77f0e/src/textarea.tsx#L117)

***

### onSelectionChange()?

> `optional` **onSelectionChange**: (`pos`) => `void`

Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.

#### Parameters

• **pos**: [`CaretPosition`](../type-aliases/CaretPosition.md)

#### Returns

`void`

#### Default Value

```ts
undefined
```

#### Defined in

[src/textarea.tsx:122](https://github.com/inokawa/rich-textarea/blob/f68d9e7ccb43f4a3c1bc208fe5bee1c78fa77f0e/src/textarea.tsx#L122)
