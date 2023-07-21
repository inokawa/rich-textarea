# Interface: RichTextareaProps

Props of [RichTextarea](../API.md#richtextarea).

For other props not mentioned below will be passed to [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).
`defaultValue` is omitted for simplicity of logic.

## Hierarchy

- `Omit`<`JSX.IntrinsicElements`[``"textarea"``], ``"value"`` \| ``"defaultValue"`` \| ``"children"``\>

  ↳ **`RichTextareaProps`**

## Table of contents

### Properties

- [value](RichTextareaProps.md#value)
- [children](RichTextareaProps.md#children)
- [autoHeight](RichTextareaProps.md#autoheight)
- [onSelectionChange](RichTextareaProps.md#onselectionchange)

## Properties

### value

• **value**: `string`

Same as original but only string

#### Defined in

[src/textarea.tsx:59](https://github.com/inokawa/rich-textarea/blob/01f7de5/src/textarea.tsx#L59)

___

### children

• `Optional` **children**: [`Renderer`](../API.md#renderer)

Render function to create customized view from value.

This function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).

On the rendered nodes, currently limited event handlers will work.
- `onClick`
- `onMouseOver`
- `onMouseOut`
- `onMouseMove`
- `onMouseDown`
- `onMouseUp`

**`Default Value`**

undefined

#### Defined in

[src/textarea.tsx:75](https://github.com/inokawa/rich-textarea/blob/01f7de5/src/textarea.tsx#L75)

___

### autoHeight

• `Optional` **autoHeight**: `boolean`

If true, textarea height is automatically resized and height of style prop does not work.
Set `maxHeight` to style prop if you need limit.
Set `rows` prop to 1 if you need single-line textarea.

**`Default Value`**

undefined

#### Defined in

[src/textarea.tsx:82](https://github.com/inokawa/rich-textarea/blob/01f7de5/src/textarea.tsx#L82)

___

### onSelectionChange

• `Optional` **onSelectionChange**: (`pos`: [`CaretPosition`](../API.md#caretposition)) => `void`

#### Type declaration

▸ (`pos`): `void`

Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.

**`Default Value`**

undefined

##### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`CaretPosition`](../API.md#caretposition) |

##### Returns

`void`

#### Defined in

[src/textarea.tsx:87](https://github.com/inokawa/rich-textarea/blob/01f7de5/src/textarea.tsx#L87)
