import type { BuildOptions } from "esbuild";

import type Interface from "../Interface/Build.js";
import type Set from "../Interface/Build/Set.js";

/**
 * @module Build
 *
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
					await Exec(`tsc -p ${Configuration.tsconfig}`);

					await Exec(`tsc-alias -f -p ${Configuration.tsconfig}`);
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
					color: false,
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
