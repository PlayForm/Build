import { readFile as _File, writeFile as File } from "fs/promises";
import TypeScript from "typescript";
import { pathToFileURL as URL } from "url";
import _JSON from "./JSON.js";

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
