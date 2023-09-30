/**
 * Defines a mapping of a {@link Models.Kind} to a template file.
 *
 * Used by {@link DefaultTheme} to map reflections to output files.
 *
 * @module TypeDoc
 *
 */
export default interface Type {
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
import type { PageEvent, ReflectionKind, RenderTemplate } from "typedoc";
