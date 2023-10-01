/**
 * @module TypeDoc
 *
 */
export default interface Type {
	(Reflection: Reflection): string;
}

import type { Reflection } from "typedoc";
