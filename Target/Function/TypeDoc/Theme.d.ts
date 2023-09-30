declare const default_base: typeof import("typedoc").DefaultTheme;
/**
 * @module TypeDoc
 *
 */
export default class extends default_base implements Type {
    getRenderContext(...[Event]: Parameters<Type["getRenderContext"]>): Context;
}
import type Context from "../../Interface/TypeDoc/Context.js";
import type Type from "../../Interface/TypeDoc/Theme.js";
export declare const Context: typeof import("./Context.js").default;
export {};
