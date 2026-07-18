import type Interface from "../Interface/Build.js";
/**
 * @module Build
 *
 * Main build function that processes files and performs builds using ESBuild and TypeScript.
 *
 * This function handles the complete build pipeline including:
 * - Expanding file patterns (globbing)
 * - Loading ESBuild configuration
 * - Applying custom ESBuild presets
 * - Running TypeScript compilation
 * - Running tsc-alias for path aliases
 * - Watching for changes (optional)
 *
 * @param File - An array of file patterns to build. Patterns can include wildcards (*, **).
 * @param Option - Optional configuration object.
 * @param Option.ESBuild - Path to a custom ESBuild configuration file or function.
 * @param Option.TypeScript - Path to TypeScript configuration file (defaults to "tsconfig.json").
 * @param Option.Watch - Enable watch mode to rebuild on file changes.
 * @param Option.Exclude - Array of file patterns to exclude from the build.
 *
 * @returns Promise<void>
 *
 * @example
 * Basic build:
 * ```typescript
 * import Build from "./Function/Build.js";
 *
 * await Build(["Source/**\/*.ts"]);
 * ```
 *
 * @example
 * Build with options:
 * ```typescript
 * await Build(
 *   ["Source/**\/*.ts"],
 *   {
 *     ESBuild: "./Config/ESBuild.js",
 *     TypeScript: "./tsconfig.build.json",
 *     Watch: true,
 *     Exclude: ["Source/**\/*.test.ts"],
 *   }
 * );
 * ```
 *
 * @example
 * Custom ESBuild configuration:
 * ```typescript
 * // Config/ESBuild.js - returns BuildOptions
 * export default {
 *   minify: true,
 *   target: "es2020",
 * };
 * ```
 *
 * @example
 * Custom ESBuild configuration function:
 * ```typescript
 * // Config/ESBuild.js - returns function
 * import type BuildSetInterface from "../Interface/Build/Set.js";
 * import type { BuildOptions } from "esbuild";
 *
 * export default async (current: BuildOptions) => {
 *   return {
 *     ...current,
 *     plugins: [...(current.plugins ?? []), myPlugin],
 *   };
 * };
 * ```
 *
 * @example
 * Using the Pipe for dependency order:
 * ```typescript
 * import { Pipe } from "./Function/Build.js";
 *
 * // Pipe is populated with files in dependency order
 * await Build(["Index.ts", "Source/**\/*.ts"]);
 * console.log(Pipe); // ["Source/Module1.ts", "Source/Module2.ts", "Index.ts"]
 * ```
 */
declare const _default: Interface;
export default _default;
export declare const Exec: import("../Interface/Exec.js").default;
export declare const Merge: <Target extends object, Ts extends ReadonlyArray<unknown>>(target: Target, ...objects: Ts) => void;
export declare const Pipe: string[];
export declare const extname: typeof import("node:path").extname, basename: typeof import("node:path").basename, relative: typeof import("node:path").relative, dirname: typeof import("node:path").dirname, normalize: typeof import("node:path").normalize, sep: "/" | "\\";
