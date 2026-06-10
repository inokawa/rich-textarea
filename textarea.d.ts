import { default as React } from '../node_modules/react';
import { CaretPosition, Renderer } from './types.js';
/**
 * Methods of {@link RichTextarea}.
 *
 * All the others not mentioned are proxied to ref of [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).
 *
 * | Name              | Type     | Description                                                               |
 * | ----------------- | -------- | ------------------------------------------------------------------------- |
 * | selectionStart    | `number` | Same as original but has handling of composition event                    |
 * | selectionEnd      | `number` | Same as original but has handling of composition event                    |
 * | setRangeText      |          | Same as original but has fallback to `document.execCommand("insertText")` |
 */
export interface RichTextareaHandle extends HTMLTextAreaElement {
}
/**
 * Props of {@link RichTextarea}.
 *
 * For other props not mentioned below will be passed to [textarea](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement).
 */
export interface RichTextareaProps extends Omit<React.ComponentProps<"textarea">, "children"> {
    /**
     *
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
     * If true, textarea height is automatically resized and height of style prop does not work.
     * Set `maxHeight` to style prop if you need limit.
     * Set `rows` prop to 1 if you need single-line textarea.
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
 * Textarea component with some extra props. See {@link RichTextareaProps} and {@link RichTextareaHandle}.
 */
export declare const RichTextarea: React.ForwardRefExoticComponent<Omit<RichTextareaProps, "ref"> & React.RefAttributes<RichTextareaHandle>>;
