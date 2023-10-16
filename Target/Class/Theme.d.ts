declare const default_base: typeof import("typedoc").DefaultTheme;
/**
 * @module Theme
 *
 */
export default class extends default_base implements Type {
    buildUrls(...[Reflection, URLs]: Parameters<Type["buildUrls"]>): import("typedoc").UrlMapping<any>[];
    _Mapping: (Reflection: import("typedoc").DeclarationReflection) => Mapping | undefined;
    Mapping: Mapping[];
}
import type Mapping from "../Interface/Mapping.js";
import type Type from "../Interface/Theme.js";
export declare const DeclarationReflection: typeof import("typedoc").DeclarationReflection, DefaultTheme: typeof import("typedoc").DefaultTheme, ReflectionKind: typeof import("typedoc").ReflectionKind, UrlMapping: typeof import("typedoc").UrlMapping;
export {};
