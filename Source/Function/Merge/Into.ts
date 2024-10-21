import type Interface from "../../Interface/Merge/Into.js";

/**
 * @module Merge
 *
 */
export default (await import("deepmerge-ts")).deepmergeIntoCustom({
	// mergeOthers(m_target, values, utils, meta) {
	// 	// don't merge arrays only keep entryPoints
	// },
}) satisfies Interface as Interface;
