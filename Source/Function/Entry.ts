import type { BuildOptions } from "esbuild";

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
export default (Current: BuildOptions, From: string[]) => {
	let _Filtered = [];

	if (Current.entryPoints) {
		const Original = Current.entryPoints;

		if (
			Array.isArray(Original) &&
			(Original.length === 0 || typeof Original[0] === "string")
		) {
			// @ts-expect-error
			_Filtered = Original.filter((Entry) => !Exclude(Entry, From));
		} else if (
			Array.isArray(Original) &&
			Original.length > 0 &&
			typeof Original[0] === "object" &&
			Original[0] !== null &&
			"in" in Original[0]
		) {
			// @ts-expect-error
			_Filtered = Original.filter((Entry) => !Exclude(Entry.in, From));
		} else if (
			!Array.isArray(Original) &&
			typeof Original === "object" &&
			Original !== null
		) {
			const Record = Original;

			const Filtered = {};

			for (const Key in Record) {
				if (Object.prototype.hasOwnProperty.call(Record, Key)) {
					const Input = Record[Key];

					if (Input !== undefined) {
						if (!Exclude(Input, From)) {
							// @ts-expect-error
							Filtered[Key] = Input;
						}
					}
				}
			}

			// @ts-expect-error
			_Filtered = Filtered;
		} else if (Array.isArray(Original) && Original.length === 0) {
			_Filtered = [];
		} else {
			_Filtered = Original;
		}
	} else {
		_Filtered = [];
	}

	return _Filtered;
};

export const { default: Exclude } = await import("./Exclude.js");
