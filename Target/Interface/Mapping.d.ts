/**
 * @module Mapping
 *
 * Defines a mapping of a {@link Models.Kind} to a template file.
 *
 * Used by {@link DefaultTheme} to map reflections to output files.
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
}
import type { ReflectionKind } from "typedoc";
