[**API**](../API.md)

***

# Function: createRegexRenderer()

> **createRegexRenderer**(`matchers`): [`Renderer`](../type-aliases/Renderer.md)

Defined in: [src/renderers/regex/index.tsx:19](https://github.com/inokawa/rich-textarea/blob/7eb748f42b59f753b6ba4e33c0a5f82e934d33c9/src/renderers/regex/index.tsx#L19)

An utility to create renderer function with regex.

The priority is descending order.

## Parameters

### matchers

(\[`RegExp`, [`StyleOrRender`](../type-aliases/StyleOrRender.md)\] \| \[`RegExp`, [`StyleOrRender`](../type-aliases/StyleOrRender.md), (`matchedText`, `matchResult`) => `boolean`\])[]

## Returns

[`Renderer`](../type-aliases/Renderer.md)
