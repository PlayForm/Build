import type Interface from "../Interface/JSON.js";
/**
 * @module JSON
 *
 * Function that reads and parses JSON files.
 *
 * This function reads a file from a specified directory and parses it as JSON.
 * It is commonly used for loading configuration files (package.json, tsconfig.json, etc.).
 *
 * @param File - The name or path of the JSON file to read.
 *
 * @param From - An optional directory path from which to read the file.
 *               If not provided, uses the current directory (".").
 *
 * @returns Promise<any> The parsed JSON content.
 *
 * @example
 * Reading package.json:
 * ```typescript
 * import JSON from "./Function/JSON.js";
 *
 * const packageJson = await JSON("package.json");
 * console.log(packageJson.version);
 * ```
 *
 * @example
 * Reading from a specific directory:
 * ```typescript
 * const tsConfig = await JSON("tsconfig.json", "./Source");
 * ```
 *
 * @example
 * Using inline with TypeScript configuration:
 * ```typescript
 * import JSON from "./Function/JSON.js";
 * import { dirname, fileURLToPath } from "node:url";
 *
 * const config = await JSON(
 *   "../../tsconfig.json",
 *   dirname(fileURLToPath(import.meta.url))
 * );
 * ```
 */
declare const _default: Interface;
export default _default;
