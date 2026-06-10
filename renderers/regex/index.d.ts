import { Renderer } from '../../types.js';
export type StyleOrRender = React.CSSProperties | ((props: {
    children: React.ReactNode;
    value: string;
    key?: string | undefined;
}) => React.ReactNode);
/**
 * An utility to create renderer function with regex.
 *
 * The priority is descending order.
 */
export declare const createRegexRenderer: (matchers: ([regex: RegExp, style: StyleOrRender] | [regex: RegExp, style: StyleOrRender, shouldRender?: (matchedText: string, matchResult: RegExpExecArray) => boolean])[]) => Renderer;
/**
 * {@link createRegexRenderer} but rendered with [CSS Custom Highlight API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API).
 * @experimental
 */
export declare const createCSSCustomHighlightRenderer: (matchers: [regex: RegExp, style: string][]) => Renderer;
