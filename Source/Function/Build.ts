/**
 * @module Build
 *
 */
export default (async (...[File, Option]: Parameters<Type>) => {
	for (const _File of File) {
		for (const __File of await (
			await import("fast-glob")
		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
			Pipe.push(__File);
		}
	}

	Pipe.reverse();

	const Configuration = Merge(
		(await import("../Variable/ESBuild.js")).default,
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

	console.log(
		await (
			await import("esbuild")
		).analyzeMetafile(
			(
				await (
					await import("esbuild")
				).build(
					Option?.ESBuild
						? Merge(
								Configuration,
								await (
									await import("../Function/File.js")
								).default(Option.ESBuild)
							)
						: Configuration
				)
			)?.metafile ?? "",
			{
				verbose: true,
			}
		)
	);

	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);

	Exec(
		[
			"typedoc",
			"--commentStyle all",
			"--gitRevision main",
			`--customCss ${resolve(`${Current}/../Stylesheet/Theme.css`)}`,
			"--includeVersion",
			"--out ./Documentation",
			`--plugin ${resolve(`${Current}/../../Target/Variable/Load.js`)}`,
			"--plugin typedoc-plugin-remove-references",
			"--plugin typedoc-plugin-rename-defaults",
			"--plugin typedoc-plugin-mdn-links",
			"--plugin typedoc-plugin-zod",
			"--plugin typedoc-plugin-merge-modules",
			"--plugin typedoc-plugin-keywords",
			"--searchInComments",
			`--keywords ${
				(
					await (
						await import("../Function/JSON.js")
					).default("package.json", process.cwd())
				)?.keywords?.join(" --keywords ") ?? " typescript-esbuild "
			}`,
			"--theme TypeScriptESBuild",
			"--entryPointStrategy expand",
			"--mergeModulesRenameDefaults",
			"--mergeModulesMergeMode module",
			`--entryPoints ${Object.values(Configuration.entryPoints).join(
				" --entryPoints "
			)}`,
		].join(" ")
	);
}) satisfies Type as Type;

import type Type from "../Interface/Build.js";

export const { default: Exec } = await import("../Function/Exec.js");

export const { default: Merge } = await import("../Function/Merge.js");

export const { resolve } = await import("path");

export const Pipe: string[] = [];

export const Current = (await import("url")).fileURLToPath(
	(await import("path")).dirname(import.meta.url)
);
