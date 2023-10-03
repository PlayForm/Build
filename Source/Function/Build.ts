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

	console.log(
		await (
			await import("esbuild")
		).analyzeMetafile(
			(
				await (
					await import("esbuild")
				).build(
					Option?.ESBuild
						? deepmerge(
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
			"--includeVersion",
			"--out ./Documentation",
			"--plugin typedoc-plugin-remove-references",
			"--plugin typedoc-plugin-rename-defaults",
			"--plugin typedoc-plugin-mdn-links",
			"--plugin typedoc-plugin-zod",
			"--plugin typedoc-plugin-merge-modules",
			"--plugin typedoc-plugin-keywords",
			"--plugin typedoc-plugin-cloudflare",
			"--theme TypeDocCloudflare",
			`--keywords ${
				(
					await (
						await import("../Function/JSON.js")
					).default("package.json", process.cwd())
				)?.keywords?.join(" --keywords ") ?? " project "
			}`,
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

export const { deepmerge } = await import("deepmerge-ts");

export const Pipe: string[] = [];
