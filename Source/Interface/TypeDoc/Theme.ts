/**
 * @module TypeDoc
 *
 */
export default interface Type {
	getRenderContext: (Event: PageEvent<Reflection>) => Context;
}

import type Context from "./Context.js";

import type { PageEvent, Reflection } from "typedoc";
