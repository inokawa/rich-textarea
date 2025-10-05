[**API**](../API.md)

***

# Interface: RichInputProps

Defined in: [src/input.tsx:105](https://github.com/inokawa/rich-textarea/blob/014fce22747814ddccd7d4075d76e5778c804d3c/src/input.tsx#L105)

Props of [RichInput](../functions/experimental_RichInput.md).

For other props not mentioned below will be passed to [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).
`defaultValue` is omitted for simplicity of logic.

## Extends

- `Omit`\<`React.ComponentProps`\<`"input"`\>, `"children"`\>

## Properties

### children?

> `optional` **children**: [`Renderer`](../type-aliases/Renderer.md)

Defined in: [src/input.tsx:121](https://github.com/inokawa/rich-textarea/blob/014fce22747814ddccd7d4075d76e5778c804d3c/src/input.tsx#L121)

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

> `optional` **autoHeight**: `boolean`

Defined in: [src/input.tsx:126](https://github.com/inokawa/rich-textarea/blob/014fce22747814ddccd7d4075d76e5778c804d3c/src/input.tsx#L126)

If true, textarea height is automatically resized and height of style prop does not work. Set `maxHeight` to style prop if you need limit.

#### Default Value

```ts
undefined
```

***

### onSelectionChange()?

> `optional` **onSelectionChange**: (`pos`) => `void`

Defined in: [src/input.tsx:131](https://github.com/inokawa/rich-textarea/blob/014fce22747814ddccd7d4075d76e5778c804d3c/src/input.tsx#L131)

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
