import type { Echo } from "./Echo.js";
/**
 * @module Exec
 *
 * Interface representing a function that executes commands and handles their output.
 *
 * @param Command - The command to execute. It can be any valid command that can be executed in a terminal or command prompt.
 *
 * @param Echo - An optional parameter that controls whether the stdout and stderr of the child process should be logged.
 *               If set to `false`, no logging will occur. If set to a function, the function will be called with the
 *               stdout and stderr data as a parameter for custom logging. If not provided, stdout and stderr will be
 *               logged to the console by default.
 *
 * @returns Promise<void>
 *
 * @example
 * Basic usage:
 * ```typescript
 * import ExecInterface from "./Interface/Exec.js";
 *
 * const exec: ExecInterface = async (Command, Echo) => {
 *   const { stdout, stderr } = exec(Command);
 *   if (typeof Echo === "function") {
 *     stdout?.on("data", async (data) => await Echo(data.trim()));
 *     stderr?.on("data", async (data) => await Echo(data.trim(), true));
 *   }
 * };
 * ```
 *
 * @example
 * Suppressing output:
 * ```typescript
 * const silentExec: ExecInterface = async (Command) => {
 *   await exec(Command, false);
 * };
 * ```
 */
export default interface Interface {
    /**
     * The 'Exec' function is an asynchronous function that executes a command and logs the
     * stdout and stderr of the child process.
     *
     * @param Command - The 'Command' parameter is a string that represents the
     * command you want to execute. It can be any valid command that can be executed in a
     * terminal or command prompt.
     *
     * @param Echo - An optional parameter that controls whether the stdout and stderr
     * of the child process should be logged. If set to 'false', no logging will occur. If set
     * to a function, the function will be called with the stdout and stderr data as a parameter for custom
     * logging. If not provided, stdout and stderr will be logged to the console by default.
     *
     */
    (Command: string, Echo?: false | Echo): Promise<void>;
}
