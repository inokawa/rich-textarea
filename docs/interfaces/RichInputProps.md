[**API**](../API.md)

***

# Interface: RichInputProps

Defined in: [input.tsx:104](https://github.com/inokawa/rich-textarea/blob/a6c7e9412d20f1c5126a66cabda131f3c6106c15/src/input.tsx#L104)

Props of [RichInput](../variables/experimental_RichInput.md).

For other props not mentioned below will be passed to [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).
`defaultValue` is omitted for simplicity of logic.

## Extends

- `Omit`\<`React.ComponentProps`\<`"input"`\>, `"children"`\>

## Properties

### children?

> `optional` **children?**: [`Renderer`](../type-aliases/Renderer.md)

Defined in: [input.tsx:120](https://github.com/inokawa/rich-textarea/blob/a6c7e9412d20f1c5126a66cabda131f3c6106c15/src/input.tsx#L120)

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

Defined in: [input.tsx:125](https://github.com/inokawa/rich-textarea/blob/a6c7e9412d20f1c5126a66cabda131f3c6106c15/src/input.tsx#L125)

If true, textarea height is automatically resized and height of style prop does not work. Set `maxHeight` to style prop if you need limit.

#### Default Value

```ts
undefined
```

***

### onSelectionChange?

> `optional` **onSelectionChange?**: (`pos`) => `void`

Defined in: [input.tsx:130](https://github.com/inokawa/rich-textarea/blob/a6c7e9412d20f1c5126a66cabda131f3c6106c15/src/input.tsx#L130)

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
