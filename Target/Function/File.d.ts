import type Interface from "../Interface/File.js";
/**
 * @module File
 *
 * Function that dynamically imports and returns the default export of a module.
 *
 * With tsx as the ESM loader, TypeScript (.ts) files are transpiled
 * transparently — no manual TypeScript API compilation is needed.
 *
 * @param Path - The file path to import.
 *
 * @returns Promise<any> The default export of the module.
 *
 * @example
 * Loading a TypeScript configuration file:
 * ```typescript
 * import File from "./Function/File.js";
 *
 * const esbuildConfig = await File("./ESBuild.ts");
 * // Returns the default export directly, transpiled by tsx
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
