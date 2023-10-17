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
export declare const DeclarationReflection: typeof import("typedoc").DeclarationReflection, URL_PREFIX: RegExp, getUrl: typeof import("typedoc").DefaultTheme.getUrl, applyAnchorUrl: typeof import("typedoc").DefaultTheme.applyAnchorUrl, Interface: import("typedoc").ReflectionKind, Class: import("typedoc").ReflectionKind, Enum: import("typedoc").ReflectionKind, Namespace: import("typedoc").ReflectionKind, Module: import("typedoc").ReflectionKind, TypeAlias: import("typedoc").ReflectionKind, _Function: import("typedoc").ReflectionKind, Variable: import("typedoc").ReflectionKind, UrlMapping: typeof import("typedoc").UrlMapping;
export {};
