/**
 * @module TypeDoc
 *
 */
export default interface Type {
	getRenderContext: (Event: PageEvent<Reflection>) => Context;

	buildUrls: (
		Reflection: DeclarationReflection,
		// rome-ignore lint/suspicious/noExplicitAny:
		URLs: UrlMapping<any>[]
		// rome-ignore lint/suspicious/noExplicitAny:
	) => UrlMapping<any>[];

	_Mapping: (Reflection: DeclarationReflection) => Mapping;

	Mapping: Mapping[];
}

import type Mapping from "../Mapping.js";
import type Context from "./Context.js";

import type {
	DeclarationReflection,
	PageEvent,
	Reflection,
	UrlMapping,
} from "typedoc";
