/**
 * @module Theme
 *
 */
export default interface Type {
	buildUrls: (
		Reflection: DeclarationReflection,
		// rome-ignore lint/suspicious/noExplicitAny:
		URLs: UrlMapping<any>[]
		// rome-ignore lint/suspicious/noExplicitAny:
	) => UrlMapping<any>[];

	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;

	Mapping: Mapping[];
}

import type Mapping from "./Mapping.js";

import type { DeclarationReflection, UrlMapping } from "typedoc";
