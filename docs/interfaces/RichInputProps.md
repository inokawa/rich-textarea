# Interface: RichInputProps

Props of [experimental_RichInput](../API.md#experimental_richinput).

For other props not mentioned below will be passed to [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).
`defaultValue` is omitted for simplicity of logic.

## Hierarchy

- `Omit`<`JSX.IntrinsicElements`[``"input"``], ``"value"`` \| ``"defaultValue"`` \| ``"children"``\>

  ↳ **`RichInputProps`**

## Table of contents

### Properties

- [value](RichInputProps.md#value)
- [children](RichInputProps.md#children)
- [autoHeight](RichInputProps.md#autoheight)
- [onSelectionChange](RichInputProps.md#onselectionchange)

## Properties

### value

• **value**: `string`

Same as original but only string

#### Defined in

[src/input.tsx:62](https://github.com/inokawa/rich-textarea/blob/8d705f9/src/input.tsx#L62)

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

[src/input.tsx:77](https://github.com/inokawa/rich-textarea/blob/8d705f9/src/input.tsx#L77)

___

### autoHeight

• `Optional` **autoHeight**: `boolean`

If true, textarea height is automatically resized and height of style prop does not work. Set `maxHeight` to style prop if you need limit.

**`Default Value`**

undefined

#### Defined in

[src/input.tsx:82](https://github.com/inokawa/rich-textarea/blob/8d705f9/src/input.tsx#L82)

___

### onSelectionChange

• `Optional` **onSelectionChange**: (`pos`: [`CaretPosition`](../API.md#caretposition), `value`: `string`) => `void`

#### Type declaration

▸ (`pos`, `value`): `void`

Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.

**`Default Value`**

undefined

##### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`CaretPosition`](../API.md#caretposition) |
| `value` | `string` |

##### Returns

`void`

#### Defined in

[src/input.tsx:87](https://github.com/inokawa/rich-textarea/blob/8d705f9/src/input.tsx#L87)
