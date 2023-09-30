declare const default_base: typeof DefaultTheme;
/**
 * @module TypeDoc
 *
 */
export default class extends default_base implements Type {
    getRenderContext: (Event: PageEvent<import("typedoc").Reflection>) => Context;
    buildUrls(...[Reflection, URLs]: Parameters<Type["buildUrls"]>): UrlMapping<any>[];
    _Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
    Mapping: Mapping[];
}
import type Context from "../../Interface/TypeDoc/Context.js";
import type Type from "../../Interface/TypeDoc/Theme.js";
import { DeclarationReflection, DefaultTheme, PageEvent, ReflectionKind, UrlMapping, type RenderTemplate } from "typedoc";
export declare const _Context: typeof import("./Context.js").default;
/**
 * Defines a mapping of a {@link Models.Kind} to a template file.
 *
 * Used by {@link DefaultTheme} to map reflections to output files.
 */
interface Mapping {
    /**
     * {@link DeclarationReflection.kind} this rule applies to.
     */
    Kind: ReflectionKind[];
    /**
     * The name of the directory the output files should be written to.
     */
    Directory: string;
    /**
     * The name of the template that should be used to render the reflection.
     */
    Template: RenderTemplate<PageEvent<any>>;
}
export {};
