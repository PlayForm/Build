import type Interface from "../Interface/File.js";
/**
 * @module File
 *
 * Function that processes and loads files, with special TypeScript transpilation support.
 *
 * This function processes files based on their extension:
 * - For TypeScript (.ts) files: transpiles to JavaScript using TypeScript compiler and writes the .js file
 * - For all files: imports and returns the default export of the module
 *
 * @param Path - The file path to process.
 *
 * @returns Promise<any> The default export of the processed module.
 *
 * @example
 * Loading a TypeScript configuration file:
 * ```typescript
 * import File from "./Function/File.js";
 *
 * const esbuildConfig = await File("./ESBuild.ts");
 * // Returns the default export of the transpiled ESBuild.js
 * ```
 *
 * @example
 * Loading a JSON configuration (will be imported as-is):
 * ```typescript
 * const config = await File("./config.json");
 * ```
 *
 * @example
 * Dynamic configuration loading:
 * ```typescript
 * async function loadConfig<Option>(path: string): Promise<Option> {
 *   return (await File(path)) as Option;
 * }
 * ```
 */
declare const _default: Interface;
export default _default;
