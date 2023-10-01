declare const _Class_base: typeof import("typedoc").DefaultThemeRenderContext;
/**
 * @module TypeDoc
 *
 */
export default class _Class extends _Class_base implements Type {
    constructor(Theme: DefaultTheme, Page: PageEvent<Reflection>, Option: Options);
    init(): void;
}
import type Type from "../../Interface/TypeDoc/Context.js";
import type { DefaultTheme, Options, PageEvent, Reflection } from "typedoc";
export declare const Bind: <F, L extends [], R>(fn: (f: F, ...a: L) => R, first: F) => (...r: L) => R;
export declare const Layout: import("../../Interface/TypeDoc/Layout.js").default;
export {};
