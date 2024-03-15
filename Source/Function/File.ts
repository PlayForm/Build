/**
 * @module File
 *
 */
export default (async (...[Path]: Parameters<Type>) => {
	if (Path.split(".").pop() === "ts") {
		const { options } = (
			await import("typescript")
		).default.convertCompilerOptionsFromJson(
			(
				await (
					await import("./JSON.js")
				).default(
					"../Notation/TypeScript.json",
					(
						await import("path")
					).dirname(
						(await import("url")).fileURLToPath(import.meta.url),
					),
				)
			)?.compilerOptions,
			".",
		);

		(await import("typescript")).default
			.createProgram(
				[Path],
				options,
				(await import("typescript")).default.createCompilerHost(
					options,
				),
			)
			.emit();

		await (await import("fs/promises")).writeFile(
			Path.replace(".ts", ".js"),
			(await import("typescript")).default.transpile(
				(
					await (await import("fs/promises")).readFile(Path, "utf-8")
				).toString(),
				options,
			),
		);
	}

	return (
		await import(
			(
				await import("url")
			)
				.pathToFileURL(Path)
				.toString()
				.replace(".ts", ".js")
		)
	).default;
}) satisfies Type as Type;

import type Type from "../Interface/File.js";
