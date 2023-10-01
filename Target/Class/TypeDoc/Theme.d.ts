declare const default_base: typeof DefaultTheme;
/**
 * @module TypeDoc
 *
 */
export default class extends default_base implements Type {
    getRenderContext: (Event: import("typedoc").PageEvent<import("typedoc").Reflection>) => Context;
    buildUrls(...[Reflection, URLs]: Parameters<Type["buildUrls"]>): UrlMapping<any>[];
    _Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
    Mapping: Mapping[];
}
import type Context from "../../Interface/TypeDoc/Context.js";
import type Mapping from "../../Interface/TypeDoc/Mapping.js";
import type Type from "../../Interface/TypeDoc/Theme.js";
import { DeclarationReflection, DefaultTheme, UrlMapping } from "typedoc";
export declare const _Context: typeof import("./Context.js").default;
export {};
