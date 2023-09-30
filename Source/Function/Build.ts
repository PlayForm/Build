/**
 * @module Build
 *
 */
export default (async (...[File, Option]: Parameters<Type>) => {
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

	const { metafile } = await (
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
		metafile
			? await (
					await import("esbuild")
			  ).analyzeMetafile(metafile, {
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
			--customCss ${resolve(`${Current}/../Sheet/TypeDoc.css`)} \
			--includeVersion \
			--out ./Documentation \
			--plugin typedoc-plugin-remove-references \
			--plugin typedoc-plugin-rename-defaults \
			--plugin typedoc-plugin-mdn-links \
			--plugin typedoc-plugin-zod \
			--plugin typedoc-plugin-merge-modules \
			--entryPointStrategy expand \
			--mergeModulesRenameDefaults \
			--mergeModulesMergeMode module \
			--entryPoints ${Object.values(Configuration.entryPoints).join(
				" --entryPoints "
			)}`
	);

	Exec(
		`mv ${resolve(
			`${Current}/../../Target/Function/Worker.js`
		)} ./Documentation/_worker.js`
	);
}) satisfies Type as Type;

import type Type from "../Interface/Build.js";

export const { default: Exec } = await import("../Function/Exec.js");

export const { deepmerge } = await import("deepmerge-ts");

export const { resolve } = await import("path");

export const Pipe: string[] = [];

export const Current = (await import("url")).fileURLToPath(
	(await import("path")).dirname(import.meta.url)
);
