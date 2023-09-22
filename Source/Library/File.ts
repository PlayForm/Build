import _JSON from "./JSON.js";

import { readFile as _File, writeFile as File } from "fs/promises";
import TypeScript from "typescript";
import { pathToFileURL as URL } from "url";

/**
 * The function takes a file path as input, checks if it is a TypeScript file, converts the TypeScript
 * code to JavaScript, and then imports and returns the default export of the JavaScript file.
 * @param {string} Path - The `Path` parameter is a string that represents the file path of the file
 * you want to process.
 * @returns the default export of the module that is imported using the provided `Path`.
 */
export default async (Path: string) => {
	if (Path.split(".").pop() === "ts") {
		const { options } = TypeScript.convertCompilerOptionsFromJson(
			(await _JSON("../Configuration/TypeScript.json", import.meta.url))
				?.compilerOptions,
			"."
		);

		TypeScript.createProgram(
			[Path],
			options,
			TypeScript.createCompilerHost(options)
		).emit();

		await File(
			Path.replace(".ts", ".js"),
			TypeScript.transpile(
				(await _File(Path, "utf-8")).toString(),
				options
			)
		);
	}

	return (await import(URL(Path).toString().replace(".ts", ".js"))).default;
};
