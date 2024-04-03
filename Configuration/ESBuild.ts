/**
 * @module ESBuild
 *
 */
export default {
	plugins: [
		await (await import("@playform/copy")).default({
			Resolve: "out",
			Asset: [
				{
					from: "./Source/Notation/TypeScript.json",
					to: "./Notation/",
				},
			],
		}),
	],
} satisfies BuildOptions as BuildOptions;

import type { BuildOptions } from "esbuild";
