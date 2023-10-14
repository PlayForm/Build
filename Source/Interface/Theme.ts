/**
 * @module Theme
 *
 * Represents an interface for defining a theme with various methods and properties.
 */
export default interface Type {
	/**
	 * A function that builds URLs for a given DeclarationReflection and an array of URL mappings.
	 *
	 * @param Reflection - The DeclarationReflection for which URLs are being built.
	 *
	 * @param URLs - An array of URL mappings with any data type.
	 *
	 * @returns An array of URL mappings with any data type.
	 */
	buildUrls: (
		Reflection: DeclarationReflection,
		// biome-ignore lint/suspicious/noExplicitAny:
		URLs: UrlMapping<any>[]
		// biome-ignore lint/suspicious/noExplicitAny:
	) => UrlMapping<any>[];

	/**
	 * A function that maps a DeclarationReflection to a Mapping or returns undefined.
	 *
	 * @param Reflection - The DeclarationReflection to map to a Mapping.
	 * @returns The Mapping associated with the DeclarationReflection or undefined.
	 */
	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;

	/**
	 * An array of Mappings representing the theme's mapping configuration.
	 */
	Mapping: Mapping[];
}

import type Mapping from "./Mapping.js";

import type { DeclarationReflection, UrlMapping } from "typedoc";
