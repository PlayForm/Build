/**
 * @module TypeDoc
 *
 */
export default interface Type {
    getRenderContext: (Event: PageEvent<Reflection>) => Context;
    buildURLs: (Reflection: DeclarationReflection, URLs: UrlMapping<any>[]) => UrlMapping<any>[];
}
import type Context from "./Context.js";
import type { DeclarationReflection, PageEvent, Reflection, UrlMapping } from "typedoc";
