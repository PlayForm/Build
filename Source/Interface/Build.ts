/**
 * @module Build
 *
 * @param {Pattern[]} Files - An array of file patterns to be processed. Each pattern can include
 * wildcards (*) to match multiple files.
 *
 * @param [Option] - The `Option` parameter is an optional object that can contain two properties:
 *
 */
export default interface Type {
	(
		Files: Pattern[],
		Option?: {
			ESBuild?: string;
			TypeScript?: string;
		}
	): Promise<void>;
}

import type { Pattern } from "fast-glob";
