/**
 * @module Merge
 *
 * Deep merge function that merges objects without overwriting arrays.
 *
 * This function is a configured instance of `deepmergeIntoCustom` from the
 * `deepmerge-ts` package. It performs a deep merge of objects where arrays
 * are not merged (the target array is replaced rather than extended).
 *
 * @param target - The object to merge values into.
 * @param source - The object to merge values from.
 *
 * @returns void (merges in place)
 *
 * @example
 * Merging configuration objects:
 * ```typescript
 * import Merge from "./Function/Merge.js";
 *
 * const baseConfig = {
 *   plugins: [plugin1],
 *   options: { minify: false },
 * };
 *
 * const userConfig = {
 *   plugins: [plugin2, plugin3],
 *   options: { sourcemap: true },
 * };
 *
 * Merge(baseConfig, userConfig);
 *
 * // Result:
 * // {
 * //   plugins: [plugin2, plugin3], // Replaced, not merged
 * //   options: { minify: false, sourcemap: true }, // Merged
 * // }
 * ```
 *
 * @example
 * Merging with nested objects:
 * ```typescript
 * const config = { build: { outdir: "dist" } };
 * const override = { build: { minify: true } };
 *
 * Merge(config, override);
 *
 * // Result: { build: { outdir: "dist", minify: true } }
 * ```
 */
export default (await import("deepmerge-ts")).deepmergeIntoCustom({
	mergeArrays: false,
});
