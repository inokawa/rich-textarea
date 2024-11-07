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

[src/renderers/regex/index.tsx:19](https://github.com/inokawa/rich-textarea/blob/d85a9d37692a634c883a1362722567fa1003e79e/src/renderers/regex/index.tsx#L19)
