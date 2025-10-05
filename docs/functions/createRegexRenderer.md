[**API**](../API.md)

***

# Function: createRegexRenderer()

> **createRegexRenderer**(`matchers`): [`Renderer`](../type-aliases/Renderer.md)

Defined in: [src/renderers/regex/index.tsx:19](https://github.com/inokawa/rich-textarea/blob/014fce22747814ddccd7d4075d76e5778c804d3c/src/renderers/regex/index.tsx#L19)

An utility to create renderer function with regex.

The priority is descending order.

## Parameters

### matchers

(\[`RegExp`, [`StyleOrRender`](../type-aliases/StyleOrRender.md)\] \| \[`RegExp`, [`StyleOrRender`](../type-aliases/StyleOrRender.md), (`matchedText`, `matchResult`) => `boolean`\])[]

## Returns

[`Renderer`](../type-aliases/Renderer.md)
