/**
 * The `Build` function compiles and builds TypeScript files using esbuild and TypeScript compiler.
 *
 * @module Build
 *
 */
export default (async (...[Files, Option]: Parameters<Type>) => {
	const Pipe: string[] = [];

	for (const File of Files) {
		for (const _File of await (
			await import("fast-glob")
		).default(File.replaceAll("'", "").replaceAll('"', ""))) {
			Pipe.push(_File);
		}
	}

	Pipe.reverse();

	const Configuration = deepmerge(
		(await import("../Object/ESBuild.js")).default,
		{
			entryPoints: Object.fromEntries(
				Pipe.map((File) => [
					File.replace("Source/", "")
						.split(".")
						.slice(0, -1.0)
						.join("."),
					File,
				])
			),
		} satisfies Option
	);

	const Result = await (
		await import("esbuild")
	).build(
		Option?.ESBuild
			? deepmerge(
					Configuration,
					await (
						await import("../Function/File.js")
					).default(Option?.ESBuild)
			  )
			: Configuration
	);

	console.log(
		Result.metafile
			? await (
					await import("esbuild")
			  ).analyzeMetafile(Result.metafile, {
					verbose: true,
			  })
			: {}
	);

	if (Option?.TypeScript) {
		Exec(`tsc -p ${Option?.TypeScript}`);
	} else {
		Exec("tsc");
	}

	Exec(
		`typedoc \
			--includeVersion \
			--out ./Documentation \
			--plugin typedoc-plugin-mdn-links \
			--plugin typedoc-plugin-zod \
			--plugin @mxssfd/typedoc-theme \
			--plugin typedoc-plugin-merge-modules \
			--theme my-theme \
			--entryPointStrategy expand ./Target \
			--mergeModulesRenameDefaults \
			--mergeModulesMergeMode module \
			--entryPoints ${Object.values(Configuration.entryPoints).join(
				" --entryPoints "
			)}`
	);
}) satisfies Type as Type;

import type { BuildOptions as Option } from "esbuild";
import type Type from "../Interface/Build.js";

export const { default: Exec } = await import("../Function/Exec.js");

export const { deepmerge } = await import("deepmerge-ts");
