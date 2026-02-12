import type { Pattern } from "fast-glob";

/**
 * @module Build
 *
 * Interface representing a function that processes file patterns for building.
 *
 * @param File - An array of file patterns to be processed. Each pattern can include wildcards (*) to match multiple files.
 * @param Option - An optional object that can contain configuration properties.
 * @param Option.ESBuild - A string representing the path to an ESBuild configuration file.
 * @param Option.TypeScript - A string representing the path to a TypeScript configuration file.
 * @param Option.Watch - A boolean flag indicating whether to watch files for changes.
 * @param Option.Exclude - An array of file patterns to exclude from processing.
 *
 * @returns Promise<void>
 *
 * @example
 * Basic usage:
 * ```typescript
 * import BuildInterface from "./Interface/Build.js";
 *
 * const build: BuildInterface = async (File, Option) => {
 *   // Process files with given options
 * };
 * ```
 */
export default interface Interface {
	/**
	 * Represents a function that processes file patterns.
	 *
	 * @param File - An array of file patterns to be processed. Each pattern can include wildcards (*) to match multiple files.
	 *
	 * @param Option - An optional object that can contain two properties.
	 *
	 * @param Option.ESBuild - A string representing the ESBuild option.
	 *
	 * @param Option.TypeScript - A string representing the TypeScript option.
	 *
	 */
	(
		File: Pattern[],
		Option?: {
			ESBuild?: string;
			TypeScript?: string;
			Watch?: boolean;
			Exclude?: Pattern[];
		},
	): Promise<void>;
}
