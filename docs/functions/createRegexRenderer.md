[**API**](../API.md) • **Docs**

***

# Function: createRegexRenderer()

> **createRegexRenderer**(`matchers`): [`Renderer`](../type-aliases/Renderer.md)

An utility to create renderer function with regex.

The priority is descending order.

## Parameters

• **matchers**: ([`RegExp`, [`StyleOrRender`](../type-aliases/StyleOrRender.md)] \| [`RegExp`, [`StyleOrRender`](../type-aliases/StyleOrRender.md), (`matchedText`, `matchResult`) => `boolean`])[]

## Returns

[`Renderer`](../type-aliases/Renderer.md)

## Defined in

[src/renderers/regex/index.tsx:19](https://github.com/inokawa/rich-textarea/blob/f68d9e7ccb43f4a3c1bc208fe5bee1c78fa77f0e/src/renderers/regex/index.tsx#L19)
