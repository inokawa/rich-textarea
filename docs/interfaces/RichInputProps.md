# Interface: RichInputProps

Props of [RichInput](../API.md#richinput).

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

[src/input.tsx:60](https://github.com/inokawa/rich-textarea/blob/67f6b60/src/input.tsx#L60)

___

### children

• `Optional` **children**: [`Renderer`](../API.md#renderer)

This function should return ReactNodes which texts are positioned the same as input (see examples for detailed usage). Currently limited event handlers will work for the nodes (`onClick`, `onMouseOver`, `onMouseOut`, `onMouseMove`, `onMouseDown` and `onMouseUp`)

#### Defined in

[src/input.tsx:64](https://github.com/inokawa/rich-textarea/blob/67f6b60/src/input.tsx#L64)

___

### autoHeight

• `Optional` **autoHeight**: `boolean`

`undefined` | If true, input height is automatically resized and height of style prop does not work. Set `maxHeight` to style prop if you need limit.

#### Defined in

[src/input.tsx:68](https://github.com/inokawa/rich-textarea/blob/67f6b60/src/input.tsx#L68)

___

### onSelectionChange

• `Optional` **onSelectionChange**: (`pos`: [`CaretPosition`](../API.md#caretposition), `value`: `string`) => `void`

#### Type declaration

▸ (`pos`, `value`): `void`

Called when selection in input changes. It gives position of caret at the time, which is useful to position menu.

##### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`CaretPosition`](../API.md#caretposition) |
| `value` | `string` |

##### Returns

`void`

#### Defined in

[src/input.tsx:72](https://github.com/inokawa/rich-textarea/blob/67f6b60/src/input.tsx#L72)
