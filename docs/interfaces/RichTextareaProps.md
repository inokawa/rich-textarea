# Interface: RichTextareaProps

Props of [RichTextarea](../API.md#richtextarea).

For other props not mentioned below will be passed to [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).

## Hierarchy

- `Omit`<`JSX.IntrinsicElements`[``"textarea"``], ``"children"``\>

  ↳ **`RichTextareaProps`**

## Table of contents

### Properties

- [children](RichTextareaProps.md#children)
- [autoHeight](RichTextareaProps.md#autoheight)
- [onSelectionChange](RichTextareaProps.md#onselectionchange)

## Properties

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

[src/textarea.tsx:109](https://github.com/inokawa/rich-textarea/blob/4cd0f24/src/textarea.tsx#L109)

___

### autoHeight

• `Optional` **autoHeight**: `boolean`

If true, textarea height is automatically resized and height of style prop does not work.
Set `maxHeight` to style prop if you need limit.
Set `rows` prop to 1 if you need single-line textarea.

**`Default Value`**

undefined

#### Defined in

[src/textarea.tsx:116](https://github.com/inokawa/rich-textarea/blob/4cd0f24/src/textarea.tsx#L116)

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

[src/textarea.tsx:121](https://github.com/inokawa/rich-textarea/blob/4cd0f24/src/textarea.tsx#L121)
