/**
 * @module TypeDoc
 *
 */
export default interface Type {
	getRenderContext: (Event: PageEvent<Reflection>) => Context;

	buildURLs: (
		Reflection: DeclarationReflection,
		// rome-ignore lint/suspicious/noExplicitAny:
		URLs: UrlMapping<any>[]
		// rome-ignore lint/suspicious/noExplicitAny:
	) => UrlMapping<any>[];
}

import type Context from "./Context.js";

import type {
	DeclarationReflection,
	PageEvent,
	Reflection,
	UrlMapping,
} from "typedoc";
