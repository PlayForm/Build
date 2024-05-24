/**
 * @module Merge
 *
 */
export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
	mergeArrays: false,
});

import type Generic from "../Interface/Generic.js";
