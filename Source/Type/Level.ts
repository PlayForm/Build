import type { LogLevel } from "esbuild";

/**
 * @module Level
 *
 * Type representing valid log levels for the build system.
 *
 * This type is based on the LogLevel type from esbuild and represents the
 * available verbosity levels for build output.
 *
 * @remarks
 * Valid values are: "silent", "error", "warning", "info", "debug"
 *
 * @example
 * Using the type:
 * ```typescript
 * import type { default as Level } from "./Type/Level.js";
 * import type { LogLevel } from "esbuild";
 *
 * const setLevel = (level: Level): void => {
 *   // Set log level
 * };
 * ```
 *
 * @example
 * Type assertion:
 * ```typescript
 * import type Level from "./Type/Level.js";
 *
 * const level: Level = "debug";
 * ```
 */
export type Type = LogLevel;

export type { Type as default };
