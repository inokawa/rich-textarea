# API

## Table of contents

### Functions

- [RichTextarea](API.md#richtextarea)
- [experimental\_RichInput](API.md#experimental_richinput)
- [createRegexRenderer](API.md#createregexrenderer)
- [createCSSCustomHighlightRenderer](API.md#createcsscustomhighlightrenderer)

### Interfaces

- [RichTextareaProps](interfaces/RichTextareaProps.md)
- [RichTextareaHandle](interfaces/RichTextareaHandle.md)
- [RichInputProps](interfaces/RichInputProps.md)
- [RichInputHandle](interfaces/RichInputHandle.md)

### Type Aliases

- [StyleOrRender](API.md#styleorrender)
- [Renderer](API.md#renderer)
- [CaretPosition](API.md#caretposition)

## Functions

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

[src/textarea.tsx:128](https://github.com/inokawa/rich-textarea/blob/cf673fcee2721486efeabd299f561e218415000b/src/textarea.tsx#L128)

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

[src/input.tsx:138](https://github.com/inokawa/rich-textarea/blob/cf673fcee2721486efeabd299f561e218415000b/src/input.tsx#L138)

___

### createRegexRenderer

▸ **createRegexRenderer**(`matchers`): [`Renderer`](API.md#renderer)

An utility to create renderer function with regex.

The priority is descending order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `matchers` | [regex: RegExp, style: StyleOrRender][] |

#### Returns

[`Renderer`](API.md#renderer)

#### Defined in

[src/renderers/regex/index.tsx:19](https://github.com/inokawa/rich-textarea/blob/cf673fcee2721486efeabd299f561e218415000b/src/renderers/regex/index.tsx#L19)

___

### createCSSCustomHighlightRenderer

▸ **createCSSCustomHighlightRenderer**(`matchers`): [`Renderer`](API.md#renderer)

[createRegexRenderer](API.md#createregexrenderer) but rendered with [CSS Custom Highlight API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API).

#### Parameters

| Name | Type |
| :------ | :------ |
| `matchers` | [regex: RegExp, style: string][] |

#### Returns

[`Renderer`](API.md#renderer)

#### Defined in

[src/renderers/regex/index.tsx:159](https://github.com/inokawa/rich-textarea/blob/cf673fcee2721486efeabd299f561e218415000b/src/renderers/regex/index.tsx#L159)

## Type Aliases

### StyleOrRender

Ƭ **StyleOrRender**: `React.CSSProperties` \| (`props`: { `children`: `React.ReactNode` ; `value`: `string` ; `key?`: `string`  }) => `React.ReactNode`

#### Defined in

[src/renderers/regex/index.tsx:6](https://github.com/inokawa/rich-textarea/blob/cf673fcee2721486efeabd299f561e218415000b/src/renderers/regex/index.tsx#L6)

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

[src/types.ts:1](https://github.com/inokawa/rich-textarea/blob/cf673fcee2721486efeabd299f561e218415000b/src/types.ts#L1)

___

### CaretPosition

Ƭ **CaretPosition**: { `focused`: ``false`` ; `selectionStart`: `number` ; `selectionEnd`: `number`  } \| { `focused`: ``true`` ; `selectionStart`: `number` ; `selectionEnd`: `number` ; `top`: `number` ; `left`: `number` ; `height`: `number`  }

#### Defined in

[src/types.ts:3](https://github.com/inokawa/rich-textarea/blob/cf673fcee2721486efeabd299f561e218415000b/src/types.ts#L3)
