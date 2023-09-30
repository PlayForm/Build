declare const default_base: typeof import("typedoc").DefaultThemeRenderContext;
/**
 * @module TypeDoc
 *
 */
export default class extends default_base implements Type {
    constructor(...[Theme, Page, Option]: Parameters<Type["constructor"]>);
    init(): void;
}
import type Type from "../../Interface/TypeDoc/Context.js";
export declare const DefaultTheme: typeof import("typedoc").DefaultTheme;
export {};
