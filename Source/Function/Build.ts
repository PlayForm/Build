import type { BuildOptions } from "esbuild";

import Echo from "../Function/Echo.js";
import type Interface from "../Interface/Build.js";
import type Set from "../Interface/Build/Set.js";

/**
 * @module Build
 *
 * Main build function that processes files and performs builds using ESBuild and TypeScript.
 *
 * This function handles the complete build pipeline including:
 * - Expanding file patterns (globbing)
 * - Loading ESBuild configuration
 * - Applying custom ESBuild presets
 * - Running TypeScript compilation
 * - Running tsc-alias for path aliases
 * - Watching for changes (optional)
 *
 * @param File - An array of file patterns to build. Patterns can include wildcards (*, **).
 * @param Option - Optional configuration object.
 * @param Option.ESBuild - Path to a custom ESBuild configuration file or function.
 * @param Option.TypeScript - Path to TypeScript configuration file (defaults to "tsconfig.json").
 * @param Option.Watch - Enable watch mode to rebuild on file changes.
 * @param Option.Exclude - Array of file patterns to exclude from the build.
 *
 * @returns Promise<void>
 *
 * @example
 * Basic build:
 * ```typescript
 * import Build from "./Function/Build.js";
 *
 * await Build(["Source/**\/*.ts"]);
 * ```
 *
 * @example
 * Build with options:
 * ```typescript
 * await Build(
 *   ["Source/**\/*.ts"],
 *   {
 *     ESBuild: "./Config/ESBuild.js",
 *     TypeScript: "./tsconfig.build.json",
 *     Watch: true,
 *     Exclude: ["Source/**\/*.test.ts"],
 *   }
 * );
 * ```
 *
 * @example
 * Custom ESBuild configuration:
 * ```typescript
 * // Config/ESBuild.js - returns BuildOptions
 * export default {
 *   minify: true,
 *   target: "es2020",
 * };
 * ```
 *
 * @example
 * Custom ESBuild configuration function:
 * ```typescript
 * // Config/ESBuild.js - returns function
 * import type BuildSetInterface from "../Interface/Build/Set.js";
 * import type { BuildOptions } from "esbuild";
 *
 * export default async (current: BuildOptions) => {
 *   return {
 *     ...current,
 *     plugins: [...(current.plugins ?? []), myPlugin],
 *   };
 * };
 * ```
 *
 * @example
 * Using the Pipe for dependency order:
 * ```typescript
 * import { Pipe } from "./Function/Build.js";
 *
 * // Pipe is populated with files in dependency order
 * await Build(["Index.ts", "Source/**\/*.ts"]);
 * console.log(Pipe); // ["Source/Module1.ts", "Source/Module2.ts", "Index.ts"]
 * ```
 */
export default (async (...[File, Option]) => {
	for (const _File of File) {
		for (const __File of await (
			await import("fast-glob")
		).default(_File.replaceAll("'", "").replaceAll('"', ""), {
			ignore: Option?.Exclude ?? [],
		})) {
			Pipe.push(__File);
		}
	}

	Pipe.reverse();

	const Configuration = (await import("../Variable/ESBuild.js")).default;

	Merge(Configuration, {
		entryPoints: Pipe,
	});

	if (Option?.ESBuild) {
		const Export = await (
			await import("@Function/File.js")
		).default(Option.ESBuild);

		let Change: Partial<BuildOptions> | undefined;

		if (typeof Export === "function") {
			const Result = await (Export as Set)(Configuration);

			if (Result && typeof Result === "object") {
				Change = Result;
			}
		} else if (
			Export &&
			typeof Export === "object" &&
			!Array.isArray(Export)
		) {
			Change = Export as Partial<BuildOptions>;
		}

		if (Change) {
			Merge(Configuration, Change);
		}

		if (
			!Configuration.entryPoints ||
			!Array.isArray(Configuration.entryPoints)
		) {
			Configuration.entryPoints = [...Pipe];
		}
	}

	Merge(Configuration, {
		tsconfig: Option?.TypeScript ?? "tsconfig.json",
	});

	if (!Configuration.plugins) {
		Configuration.plugins = [];
	} else if (!Array.isArray(Configuration.plugins)) {
		Configuration.plugins = [];
	}

	Configuration.plugins.push({
		name: "TypeScript",
		setup({ onEnd }) {
			onEnd(async () => {
				if (
					!Configuration.tsconfig ||
					typeof Configuration.tsconfig !== "string"
				) {
					return;
				}

				try {
					await Exec(`tsc -p ${Configuration.tsconfig}`, Echo);

					await Exec(
						`tsc-alias -f -p ${Configuration.tsconfig}`,
						Echo,
					);
				} catch (_Error) {
					console.error(_Error);
				}
			});
		},
	});

	if (Option?.Watch) {
		await (await (await import("esbuild")).context(Configuration)).watch();
	} else {
		const Result = await (await import("esbuild")).build(Configuration);

		if (Result.metafile) {
			console.log(
				await (
					await import("esbuild")
				).analyzeMetafile(Result.metafile, {
					verbose: true,
					color: true,
				}),
			);
		}
	}
}) satisfies Interface as Interface;

export const { default: Exec } = await import("../Function/Exec.js");

export const { default: Merge } = await import("../Function/Merge.js");

export const Pipe: string[] = [];

export const { extname, basename, relative, dirname, normalize, sep } =
	await import("node:path");
