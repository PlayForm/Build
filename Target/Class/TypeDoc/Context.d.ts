declare const default_base: typeof import("typedoc").DefaultThemeRenderContext;
/**
 * @module Context
 * @group TypeDoc
 *
 */
export default class extends default_base implements Type {
    constructor(Theme: DefaultTheme, Page: PageEvent<Reflection>, Option: Options);
    init(): void;
}
import type Type from "../../Interface/TypeDoc/Context.js";
import type { DefaultTheme, Options, PageEvent, Reflection } from "typedoc";
export {};
