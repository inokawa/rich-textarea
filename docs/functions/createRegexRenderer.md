[**API**](../API.md)

***

# Function: createRegexRenderer()

> **createRegexRenderer**(`matchers`): [`Renderer`](../type-aliases/Renderer.md)

Defined in: [renderers/regex/index.tsx:19](https://github.com/inokawa/rich-textarea/blob/f35e066bd168167e8832c503e91b15544962f879/src/renderers/regex/index.tsx#L19)

An utility to create renderer function with regex.

The priority is descending order.

## Parameters

### matchers

(\[`RegExp`, [`StyleOrRender`](../type-aliases/StyleOrRender.md)\] \| \[`RegExp`, [`StyleOrRender`](../type-aliases/StyleOrRender.md), (`matchedText`, `matchResult`) => `boolean`\])[]

## Returns

[`Renderer`](../type-aliases/Renderer.md)
