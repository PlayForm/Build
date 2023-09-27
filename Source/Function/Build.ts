/**
 * @module Build
 *
 */
export default (async (...[File, Option]: Parameters<Type>) => {
	const Pipe: string[] = [];

	File.forEach(async (File) =>
		(
			await (
				await import("fast-glob")
			).default(File.replaceAll("'", "").replaceAll('"', ""))
		).forEach((File) => Pipe.push(File))
	);

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
		}
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
			--commentStyle all \
			--gitRevision main \
			--customCss ${(await import("path")).resolve(
				`${Current}/../Sheet/TypeDoc.css`
			)} \
			--includeVersion \
			--out ./Documentation \
			--plugin typedoc-plugin-remove-references \
			--plugin typedoc-plugin-rename-defaults \
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
}) satisfies Type as Type;

import type Type from "../Interface/Build.js";

export const { default: Exec } = await import("../Function/Exec.js");

export const { deepmerge } = await import("deepmerge-ts");

export const Current = (await import("url")).fileURLToPath(
	(await import("path")).dirname(import.meta.url)
);
