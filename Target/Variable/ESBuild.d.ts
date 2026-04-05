import type { BuildOptions } from "esbuild";
export declare const On: boolean;
/**
 * @module ESBuild
 *
 * Default ESBuild configuration options for the build system.
 *
 * This object contains the default build configuration used by the build system.
 * It includes source map generation, minification in production, and custom plugins.
 *
 * @remarks
 * The configuration is modified at build time by:
 * - Custom ESBuild preset files (via `Option.ESBuild`)
 * - The TypeScript build plugin (added automatically)
 * - Dynamic entry points and exclusion patterns
 *
 * @example
 * Using default configuration:
 * ```typescript
 * import ESBuild from "./Variable/ESBuild.js";
 * import { build } from "esbuild";
 *
 * await build(ESBuild);
 * ```
 *
 * @example
 * Extending with custom options:
 * ```typescript
 * import ESBuild from "./Variable/ESBuild.js";
 * import Merge from "./Function/Merge.js";
 *
 * const customConfig = {
 *   ...ESBuild,
 *   external: ["lodash"],
 * };
 *
 * await build(customConfig);
 * ```
 */
declare const _default: BuildOptions;
export default _default;
export declare const sep: "\\" | "/", posix: typeof import("node:path");
