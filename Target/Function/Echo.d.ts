import type { Echo } from "../Interface/Echo.js";
/**
 * Echo callback function that filters output based on the Level setting.
 *
 * This function is used to control how output from child processes (stdout/stderr)
 * is displayed. It provides a mechanism to filter or suppress output based on the
 * current log level setting.
 *
 * @param Data - The output line data (trimmed whitespace)
 * @param IsError - Optional boolean flag indicating if this is stderr output (true)
 *                 or stdout output (false/undefined)
 *
 * @returns Promise<void>
 *
 * @example
 * Default usage (respects Level variable):
 * ```typescript
 * import Echo from "./Function/Echo.js";
 *
 * await Echo("Build started...");
 * await Echo("Error occurred", true);
 * ```
 *
 * @example
 * Custom echo function:
 * ```typescript
 * import type { Echo } from "./Interface/Echo.js";
 * import { Level } from "./Variable/Level.js";
 *
 * const customEcho: Echo = async (Data: string, IsError?: boolean): Promise<void> => {
 *   if (Level === "silent") {
 *     return;
 *   }
 *   console.log(Data);
 * };
 * ```
 */
declare const Echo: (Data: string, _IsError?: boolean) => Promise<void>;
declare const _default: Echo;
export default _default;
