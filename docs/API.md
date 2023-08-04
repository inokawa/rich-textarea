# API

## Table of contents

### Component Functions

- [RichTextarea](API.md#richtextarea)
- [experimental\_RichInput](API.md#experimental_richinput)

### Other Functions

- [createRegexRenderer](API.md#createregexrenderer)

### Interfaces

- [RichTextareaProps](interfaces/RichTextareaProps.md)
- [RichTextareaHandle](interfaces/RichTextareaHandle.md)
- [RichInputProps](interfaces/RichInputProps.md)
- [RichInputHandle](interfaces/RichInputHandle.md)

### Type Aliases

- [StyleOrRender](API.md#styleorrender)
- [Renderer](API.md#renderer)
- [CaretPosition](API.md#caretposition)

## Component Functions

### RichTextarea

▸ **RichTextarea**(`props`): `ReactNode`

Textarea component with some extra props. See [RichTextareaProps](interfaces/RichTextareaProps.md) and [RichTextareaHandle](interfaces/RichTextareaHandle.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Omit`<[`RichTextareaProps`](interfaces/RichTextareaProps.md), ``"ref"``\> & `RefAttributes`<[`RichTextareaHandle`](interfaces/RichTextareaHandle.md)\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/@types/react/index.d.ts:386

___

### experimental\_RichInput

▸ **experimental_RichInput**(`props`): `ReactNode`

Input component with some extra props. See [RichInputProps](interfaces/RichInputProps.md) and [RichInputHandle](interfaces/RichInputHandle.md).

**NOTE: This component is experimental one so it may have some bugs.**

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Omit`<[`RichInputProps`](interfaces/RichInputProps.md), ``"ref"``\> & `RefAttributes`<[`RichInputHandle`](interfaces/RichInputHandle.md)\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/@types/react/index.d.ts:386

___

## Other Functions

### createRegexRenderer

▸ **createRegexRenderer**(`matchers`): [`Renderer`](API.md#renderer)

An utility to create renderer function with regex.

The priority is descending order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `matchers` | [`RegExp`, [`StyleOrRender`](API.md#styleorrender)][] |

#### Returns

[`Renderer`](API.md#renderer)

#### Defined in

[src/renderers.tsx:17](https://github.com/inokawa/rich-textarea/blob/965af5a/src/renderers.tsx#L17)

## Type Aliases

### StyleOrRender

Ƭ **StyleOrRender**: `React.CSSProperties` \| (`props`: { `children`: `React.ReactNode` ; `value`: `string` ; `key?`: `string`  }) => `React.ReactNode`

#### Defined in

[src/renderers.tsx:4](https://github.com/inokawa/rich-textarea/blob/965af5a/src/renderers.tsx#L4)

___

### Renderer

Ƭ **Renderer**: (`value`: `string`) => `React.ReactNode`

#### Type declaration

▸ (`value`): `React.ReactNode`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

##### Returns

`React.ReactNode`

#### Defined in

[src/types.ts:1](https://github.com/inokawa/rich-textarea/blob/965af5a/src/types.ts#L1)

___

### CaretPosition

Ƭ **CaretPosition**: { `focused`: ``false`` ; `selectionStart`: `number` ; `selectionEnd`: `number`  } \| { `focused`: ``true`` ; `selectionStart`: `number` ; `selectionEnd`: `number` ; `top`: `number` ; `left`: `number` ; `height`: `number`  }

#### Defined in

[src/types.ts:3](https://github.com/inokawa/rich-textarea/blob/965af5a/src/types.ts#L3)
