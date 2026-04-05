/**
 * @module Exclude
 *
 * Checks if a given path matches any of the patterns in the 'From' array.
 * Handles simple string inclusion, basic globs (*, **), and path normalization.
 *
 * @param Path The file path to check.
 *
 * @param From An array of strings/patterns to exclude against.
 *
 * @returns True if the Path matches any pattern in From, false otherwise.
 *
 */
declare const _default: (Path: string, From: string[]) => boolean;
export default _default;
export declare const posix: typeof import("node:path"), sep: "\\" | "/";
export declare const _Regex: (Glob: string) => RegExp;
