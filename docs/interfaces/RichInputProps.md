[**API**](../API.md) • **Docs**

***

# Interface: RichInputProps

Props of [RichInput](../functions/experimental_RichInput.md).

For other props not mentioned below will be passed to [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).
`defaultValue` is omitted for simplicity of logic.

## Extends

- `Omit`\<`JSX.IntrinsicElements`\[`"input"`\], `"children"`\>

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

[src/input.tsx:120](https://github.com/inokawa/rich-textarea/blob/d85a9d37692a634c883a1362722567fa1003e79e/src/input.tsx#L120)

***

### autoHeight?

> `optional` **autoHeight**: `boolean`

If true, textarea height is automatically resized and height of style prop does not work. Set `maxHeight` to style prop if you need limit.

#### Default Value

```ts
undefined
```

#### Defined in

[src/input.tsx:125](https://github.com/inokawa/rich-textarea/blob/d85a9d37692a634c883a1362722567fa1003e79e/src/input.tsx#L125)

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

[src/input.tsx:130](https://github.com/inokawa/rich-textarea/blob/d85a9d37692a634c883a1362722567fa1003e79e/src/input.tsx#L130)
