import { readFile as _File } from "fs/promises";
import { dirname as Dir } from "path";
import { fileURLToPath as Path } from "url";

/**
 * The function 'JSON' is a TypeScript function that reads a JSON file and returns its
 * parsed content.
 * @param {string} File - The `File` parameter is a string that represents the name or
 * path of the JSON file that you want to parse.
 * @param {string} [From] - The `From` parameter is an optional string that represents
 * the directory path from which the JSON file should be loaded. If `From` is provided,
 * it will be used as the base directory path. If `From` is not provided, the current
 * directory will be used as the base directory path.
 */
export default async (File: string, From?: string) =>
	JSON.parse(
		(
			await _File(
				`${From ? Dir(Path(From ?? import.meta.url)) : "."}/${File}`,
				"utf-8"
			)
		).toString()
	);
