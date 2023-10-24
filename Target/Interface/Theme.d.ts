/**
 * @module Theme
 *
 * Represents an interface for defining a theme with various methods and properties.
 */
export default interface Type extends DefaultTheme {
    /**
     * A function that builds URLs for a given DeclarationReflection and an array of URLs mappings.
     *
     * @param Reflection - The DeclarationReflection for which URLs are being built.
     *
     * @param URLs - An array of URLs mappings with any data type.
     *
     */
    buildUrls: (Reflection: DeclarationReflection, URLs: UrlMapping<any>[]) => UrlMapping<any>[];
    /**
     * A function that maps a DeclarationReflection to a Mapping or returns undefined.
     *
     * @param Reflection - The DeclarationReflection to map to a Mapping.
     *
     */
    _Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
    /**
     * An array of Mappings representing the theme's mapping configuration.
     */
    Mapping: Mapping[];
}
import type Mapping from "./Mapping.js";
import type { DeclarationReflection, DefaultTheme, UrlMapping } from "typedoc";
