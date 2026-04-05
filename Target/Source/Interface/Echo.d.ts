/**
 * @module Echo
 *
 * Echo callback function type for filtering output based on log level.
 *
 * The Echo function is used to control how output from child processes
 * (stdout/stderr) is displayed. It provides a mechanism to filter or
 * suppress output based on the current log level setting.
 *
 * @param Data - The output line data (trimmed whitespace)
 * @param IsError - Optional boolean flag indicating if this is stderr output
 *                  (true) or stdout output (false/undefined)
 *
 * @returns Promise<void>
 *
 * @example
 * Basic usage:
 * ```typescript
 * const Echo = async (Data: string, IsError?: boolean): Promise<void> => {
 *   if (Level === "silent") {
 *     return;
 *   }
 *   console.log(Data);
 * };
 * ```
 *
 * @example
 * Filtering by error level:
 * ```typescript
 * const ErrorOnlyEcho = async (Data: string, IsError?: boolean): Promise<void> => {
 *   if (IsError) {
 *     console.error(Data);
 *   }
 * };
 * ```
 *
 * @example
 * Silencing all output:
 * ```typescript
 * const SilentEcho = async (): Promise<void> => {
 *   // Do nothing - suppress all output
 * };
 * ```
 */
export type Echo = (Data: string, IsError?: boolean) => Promise<void>;
