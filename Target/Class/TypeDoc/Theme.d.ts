declare const default_base: typeof import("typedoc").DefaultTheme;
/**
 * @module TypeDoc
 *
 */
export default class extends default_base implements Type {
    getRenderContext: (Event: PageEvent<import("typedoc").Reflection>) => Context;
    /**
     * Mappings of reflections kinds to templates used by this theme.
     */
    mappings: TemplateMapping[];
}
import type Context from "../../Interface/TypeDoc/Context.js";
import type Type from "../../Interface/TypeDoc/Theme.js";
import { PageEvent, ReflectionKind, type RenderTemplate } from "typedoc";
export declare const _Context: typeof import("./Context.js").default;
/**
 * Defines a mapping of a {@link Models.Kind} to a template file.
 *
 * Used by {@link DefaultTheme} to map reflections to output files.
 */
interface TemplateMapping {
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
