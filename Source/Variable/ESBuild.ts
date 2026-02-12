import type { BuildOptions, Plugin } from "esbuild";

export const On = process.env["NODE_ENV"] === "development";

/**
 * @module ESBuild
 *
 * Default ESBuild configuration options for the build system.
 *
 * This object contains the default build configuration used by the build system.
 * It includes source map generation, minification in production, and custom plugins.
 *
 * @remarks
 * The configuration is modified at build time by:
 * - Custom ESBuild preset files (via `Option.ESBuild`)
 * - The TypeScript build plugin (added automatically)
 * - Dynamic entry points and exclusion patterns
 *
 * @example
 * Using default configuration:
 * ```typescript
 * import ESBuild from "./Variable/ESBuild.js";
 * import { build } from "esbuild";
 *
 * await build(ESBuild);
 * ```
 *
 * @example
 * Extending with custom options:
 * ```typescript
 * import ESBuild from "./Variable/ESBuild.js";
 * import Merge from "./Function/Merge.js";
 *
 * const customConfig = {
 *   ...ESBuild,
 *   external: ["lodash"],
 * };
 *
 * await build(customConfig);
 * ```
 */
export default {
	color: true,
	format: "esm",
	logLevel: "debug",
	metafile: true,
	minify: !On,
	outdir: "Target",
	platform: "node",
	target: "esnext",
	tsconfig: "tsconfig.json",
	write: true,
	legalComments: On ? "inline" : "none",
	bundle: false,
	assetNames: "Asset/[name]-[hash]",
	sourcemap: On,
	drop: On ? [] : ["debugger"],
	ignoreAnnotations: !On,
	keepNames: On,
	plugins: [
		{
			name: "Target",
			setup({ onStart, initialOptions: { outdir } }) {
				onStart(async () => {
					try {
						outdir
							? await (
									await import("node:fs/promises")
								).rm(outdir, {
									recursive: true,
								})
							: {};
					} catch (_Error) {
						console.log(_Error);
					}
				});
			},
		} as Plugin,
	],
	define: {
		"process.env.VERSION_PACKAGE": `'${
			(
				await (
					await import("../Function/JSON.js")
				).default("package.json")
			)?.version
		}'`,
	},
} satisfies BuildOptions as BuildOptions;

export const { sep, posix } = await import("node:path");
