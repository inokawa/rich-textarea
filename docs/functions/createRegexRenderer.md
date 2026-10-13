[**API**](../API.md)

***

# Function: createRegexRenderer()

> **createRegexRenderer**(`matchers`): [`Renderer`](../type-aliases/Renderer.md)

Defined in: [renderers/regex/index.tsx:19](https://github.com/inokawa/rich-textarea/blob/a6c7e9412d20f1c5126a66cabda131f3c6106c15/src/renderers/regex/index.tsx#L19)

An utility to create renderer function with regex.

The priority is descending order.

## Parameters

### matchers

(\[`RegExp`, [`StyleOrRender`](../type-aliases/StyleOrRender.md)\] \| \[`RegExp`, [`StyleOrRender`](../type-aliases/StyleOrRender.md), (`matchedText`, `matchResult`) => `boolean`\])[]

## Returns

[`Renderer`](../type-aliases/Renderer.md)
