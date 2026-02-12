/**
 * @module JSON
 *
 * Interface representing a function that reads and parses JSON files.
 *
 * @param File - The name or path of the JSON file to parse.
 *
 * @param From - An optional string representing the directory path from which the JSON file should be loaded.
 *               If provided, it will be used as the base directory path. If not provided, the current directory
 *               will be used as the base directory path.
 *
 * @returns Promise<any> The parsed JSON content.
 *
 * @example
 * Reading a configuration file:
 * ```typescript
 * import JSONInterface from "./Interface/JSON.js";
 *
 * const readConfig: JSONInterface = async (File, From) => {
 *   const content = await JSON.parse(await readFile(`${From ?? "."}/${File}`, "utf-8"));
 *   return content;
 * };
 * ```
 *
 * @example
 * Reading from current directory:
 * ```typescript
 * const config = await readConfig("package.json");
 * ```
 *
 * @example
 * Reading from specific directory:
 * ```typescript
 * const config = await readConfig("tsconfig.json", "./Source");
 * ```
 */
export default interface Interface {
	/**
	 * The function 'JSON' is a TypeScript function that reads a JSON file and returns its
	 * parsed content.
	 *
	 * @param File - The `File` parameter is a string that represents the name or
	 * path of the JSON file that you want to parse.
	 *
	 * @param From - The `From` parameter is an optional string that represents
	 * the directory path from which the JSON file should be loaded. If `From` is provided,
	 * it will be used as the base directory path. If `From` is not provided, the current
	 * directory will be used as the base directory path.
	 *
	 */
	(File: string, From?: string): Promise<ReturnType<typeof JSON.parse>>;
}
