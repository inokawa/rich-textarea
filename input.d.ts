import { default as React } from '../node_modules/react';
import { CaretPosition, Renderer } from './types.js';
/**
 * Methods of {@link RichInput}.
 *
 * All the others not mentioned are proxied to ref of [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).
 *
 * | Name              | Type     | Description                                                            |
 * | ----------------- | -------- | ---------------------------------------------------------------------- |
 * | selectionStart    | `number` | Same as original but has handling of composition event                    |
 * | selectionEnd      | `number` | Same as original but has handling of composition event                    |
 * | setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |
 */
export interface RichInputHandle extends HTMLInputElement {
}
/**
 * Props of {@link RichInput}.
 *
 * For other props not mentioned below will be passed to [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).
 * `defaultValue` is omitted for simplicity of logic.
 */
export interface RichInputProps extends Omit<React.ComponentProps<"input">, "children"> {
    /**
     * Render function to create customized view from value.
     *
     * This function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).
     *
     * On the rendered nodes, currently limited event handlers will work.
     * - `onClick`
     * - `onMouseOver`
     * - `onMouseOut`
     * - `onMouseMove`
     * - `onMouseDown`
     * - `onMouseUp`
     * @defaultValue undefined
     */
    children?: Renderer;
    /**
     * If true, textarea height is automatically resized and height of style prop does not work. Set `maxHeight` to style prop if you need limit.
     * @defaultValue undefined
     */
    autoHeight?: boolean;
    /**
     * Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.
     * @defaultValue undefined
     */
    onSelectionChange?: (pos: CaretPosition) => void;
}
/**
 * Input component with some extra props. See {@link RichInputProps} and {@link RichInputHandle}.
 *
 * **NOTE: This component is experimental one so it may have some bugs.**
 */
export declare const RichInput: React.ForwardRefExoticComponent<Omit<RichInputProps, "ref"> & React.RefAttributes<RichInputHandle>>;
