import type { BuildOptions as Option } from "esbuild";
import type { Pattern } from "fast-glob";

export const { exec } = await import("child_process");

export const { deepmerge } = await import("deepmerge-ts");

/**
 * The `Build` function compiles and builds TypeScript files using esbuild and TypeScript compiler.
 * @param {Pattern[]} Files - An array of file patterns to be processed. Each pattern can include
 * wildcards (*) to match multiple files.
 * @param [Option] - The `Option` parameter is an optional object that can contain two properties:
 */
export default async (
	Files: Pattern[],
	Option?: { ESBuild?: string; TypeScript?: string }
) => {
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
		exec(`tsc -p ${Option?.TypeScript}`);
	} else {
		exec("tsc");
	}

	exec(
		`typedoc \
			--out ./Documentation \
			--plugin typedoc-plugin-mdn-links \
			--plugin typedoc-plugin-zod \
			--plugin @mxssfd/typedoc-theme \
			--plugin typedoc-plugin-merge-modules \
			--theme my-theme \
			--entryPointStrategy expand \
			--mergeModulesRenameDefaults \
			--mergeModulesMergeMode module \
			--entryPoints ${Object.values(Configuration.entryPoints).join(
				" --entryPoints "
			)}`
	);
};
