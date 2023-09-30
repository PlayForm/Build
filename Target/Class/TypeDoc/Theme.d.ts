declare const default_base: typeof DefaultTheme;
/**
 * @module TypeDoc
 *
 */
export default class extends default_base implements Type {
    getRenderContext: (Event: PageEvent<import("typedoc").Reflection>) => Context;
    buildUrls(Reflection: DeclarationReflection, URLs: UrlMapping<any>[]): UrlMapping<any>[];
    _getMapping: (Reflection: DeclarationReflection) => Mapping | undefined;
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
    kind: ReflectionKind[];
    /**
     * The name of the directory the output files should be written to.
     */
    directory: string;
    /**
     * The name of the template that should be used to render the reflection.
     */
    template: RenderTemplate<PageEvent<any>>;
}
export {};
