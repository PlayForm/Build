import type { BuildOptions } from "esbuild";
export default _default;
/**
 * @module Entry
 *
 * Function that filters entry points from build options based on exclusion patterns.
 *
 * This function removes entry points that match patterns in the `From` array.
 * It supports various entry point formats: strings, objects with `in` property, and records.
 *
 * @param Current - The current ESBuild build options containing entryPoints.
 *
 * @param From - An array of file patterns to exclude from entry points.
 *
 * @returns The filtered array of entry points.
 *
 * @example
 * Filtering common test files:
 * ```typescript
 * import Entry from "./Function/Entry.js";
 * import { Exclude } from "./Function/Exclude.js";
 *
 * const options: BuildOptions = {
 *   entryPoints: ["src/index.ts", "src/test.ts", "src/util.ts"],
 * };
 *
 * const filtered = Entry(options, ["**\/*.test.ts"]);
 * // Result: ["src/index.ts", "src/util.ts"]
 * ```
 *
 * @example
 * With object entry points:
 * ```typescript
 * const options: BuildOptions = {
 *   entryPoints: [
 *     { in: "src/main/index.ts", out: "main" },
 *     { in: "src/test/index.ts", out: "test" },
 *   ],
 * };
 *
 * const filtered = Entry(options, ["**\/test\/**"]);
 * // Result: [{ in: "src/main/index.ts", out: "main" }]
 * ```
 */
declare function _default(Current: BuildOptions, From: string[]): any[];
export declare const Exclude: (Path: string, From: string[]) => boolean;
