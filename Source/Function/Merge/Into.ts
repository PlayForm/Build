import type Interface from "../../Interface/Merge/Into.js";

/**
 * @module Merge
 *
 */
export default (await import("deepmerge-ts")).deepmergeIntoCustom({
	mergeArrays(...[_Target, Value, Util, Meta]) {
		if (Meta?.key !== "entryPoints") {
			_Target.value = Value.flatMap((Value) => Value);
		}

		return Util.actions.defaultMerge;
	},
}) satisfies Interface as Interface;
