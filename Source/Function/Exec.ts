import type Interface from "../Interface/Exec.js";

export const { default: EchoFn } = await import("../Function/Echo.js");

/**
 * @module Exec
 *
 * Function that executes a shell command and streams its output through an echo function.
 *
 * This function spawns a child process to execute the given command and streams
 * the stdout and stderr through the provided echo callback function. This allows
 * for custom handling of command output, including filtering by log level.
 *
 * @param Command - The shell command to execute.
 * @param Echo - Optional callback function for handling stdout/stderr output.
 *               If false, output is suppressed. If a function, it receives the output data.
 *               Defaults to the default Echo function which respects the Level setting.
 *
 * @returns Promise<void>
 *
 * @example
 * Basic execution with default echo:
 * ```typescript
 * import Exec from "./Function/Exec.js";
 *
 * await Exec("npm run build");
 * ```
 *
 * @example
 * Suppressing output:
 * ```typescript
 * await Exec("npm run test", false);
 * ```
 *
 * @example
 * Custom echo function:
 * ```typescript
 * import type { Echo } from "../Interface/Echo.js";
 *
 * const myEcho: Echo = async (data, isError) => {
 *   if (isError) {
 *     console.error(`[ERROR] ${data}`);
 *   } else {
 *     console.log(`[INFO] ${data}`);
 *   }
 * };
 *
 * await Exec("npm run build", myEcho);
 * ```
 *
 * @example
 * Multiple commands:
 * ```typescript
 * await Exec("npm install");
 * await Exec("npm run build");
 * await Exec("npm run test");
 * ```
 */
export default (async (...[Command, Echo = EchoFn]) => {
	try {
		const { stdout, stderr } = (await import("child_process")).exec(
			Command,
		);

		if (typeof Echo === "function") {
			stdout?.on("data", async (Data) => await Echo(Data.trim()));
			stderr?.on("data", async (Data) => await Echo(Data.trim(), true));
		}
	} catch (_Error) {
		console.log(_Error);
	}
}) satisfies Interface as Interface;
