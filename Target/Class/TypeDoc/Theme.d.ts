/**
 * @module TypeDoc
 *
 */
declare const default_base: typeof import("typedoc").DefaultTheme;
export default class extends default_base implements Type {
    getRenderContext: (Event: import("typedoc").PageEvent<import("typedoc").Reflection>) => Context;
}
import type Context from "../../Interface/TypeDoc/Context.js";
import type Type from "../../Interface/TypeDoc/Theme.js";
export declare const _Context: typeof import("./Context.js").default;
export {};
