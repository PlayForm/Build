declare const default_base: typeof import("typedoc").DefaultThemeRenderContext;
/**
 * @module TypeDoc
 *
 */
export default class extends default_base implements Type {
    constructor(Theme: DefaultTheme, Page: PageEvent<Reflection>, Option: Options);
    init(): void;
}
import type { DefaultTheme, Options, PageEvent, Reflection } from "typedoc";
import type Type from "../../Interface/TypeDoc/Context.js";
export {};
