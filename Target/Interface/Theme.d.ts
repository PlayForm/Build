/**
 * @module Theme
 *
 */
export default interface Type {
    buildUrls: (Reflection: DeclarationReflection, URLs: UrlMapping<any>[]) => UrlMapping<any>[];
    _Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
    Mapping: Mapping[];
}
import type Mapping from "./Mapping.js";
import type { DeclarationReflection, UrlMapping } from "typedoc";
