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

```ts
undefined
```

#### Defined in

[src/textarea.tsx:110](https://github.com/inokawa/rich-textarea/blob/cf673fcee2721486efeabd299f561e218415000b/src/textarea.tsx#L110)

___

### autoHeight

• `Optional` **autoHeight**: `boolean`

If true, textarea height is automatically resized and height of style prop does not work.
Set `maxHeight` to style prop if you need limit.
Set `rows` prop to 1 if you need single-line textarea.

**`Default Value`**

```ts
undefined
```

#### Defined in

[src/textarea.tsx:117](https://github.com/inokawa/rich-textarea/blob/cf673fcee2721486efeabd299f561e218415000b/src/textarea.tsx#L117)

___

### onSelectionChange

• `Optional` **onSelectionChange**: (`pos`: [`CaretPosition`](../API.md#caretposition)) => `void`

Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.

**`Default Value`**

```ts
undefined
```

#### Type declaration

▸ (`pos`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`CaretPosition`](../API.md#caretposition) |

##### Returns

`void`

#### Defined in

[src/textarea.tsx:122](https://github.com/inokawa/rich-textarea/blob/cf673fcee2721486efeabd299f561e218415000b/src/textarea.tsx#L122)
