import type { LogLevel } from "esbuild";

/**
 * @module Level
 *
 * The log level setting for build output.
 *
 * This variable controls the verbosity of build output. It is set from the
 * environment variable `Level` and defaults to "debug" if not specified.
 *
 * Valid values (from esbuild LogLevel): "silent", "error", "warning", "info", "debug"
 *
 * @example
 * Setting level via environment variable:
 * ```bash
 * Level=warning pnpm build
 * ```
 *
 * @example
 * Accessing the level in code:
 * ```typescript
 * import { Level } from "./Variable/Level.js";
 *
 * if (Level !== "silent") {
 *   console.log("Build started...");
 * }
 * ```
 */
export const Level = ((process.env["Level"] as LogLevel) ??
	"debug") satisfies LogLevel as LogLevel;
