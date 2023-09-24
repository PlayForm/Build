/**
 * The function takes a file path as input, checks if it is a TypeScript file, converts the TypeScript
 * code to JavaScript, and then imports and returns the default export of the JavaScript file.
 * @param {string} Path - The `Path` parameter is a string that represents the file path of the file
 * you want to process.
 * @returns the default export of the module that is imported using the provided `Path`.
 */
export default async (Path: string) => {
	if (Path.split(".").pop() === "ts") {
		const { options } = (
			await import("typescript")
		).default.convertCompilerOptionsFromJson(
			(
				await (
					await import("./JSON.js")
				).default("../Notation/TypeScript.json", import.meta.url)
			)?.compilerOptions,
			"."
		);

		(await import("typescript")).default
			.createProgram(
				[Path],
				options,
				(await import("typescript")).default.createCompilerHost(options)
			)
			.emit();

		await (
			await import("fs/promises")
		).writeFile(
			Path.replace(".ts", ".js"),
			(await import("typescript")).default.transpile(
				(
					await (await import("fs/promises")).readFile(Path, "utf-8")
				).toString(),
				options
			)
		);
	}

	return (
		await import(
			(await import("url"))
				.fileURLToPath(Path)
				.toString()
				.replace(".ts", ".js")
		)
	).default;
};
