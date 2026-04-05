/**
 * @module Regex
 *
 * Converts a basic glob pattern to a regular expression.
 * Handles '*' (match anything except separator) and '**' (match anything including separators).
 * Escapes other regex special characters.
 * @param Glob The glob pattern string.
 * @returns A RegExp object.
 */
declare const _default: (Glob: string) => RegExp;
export default _default;
export declare const posix: typeof import("node:path");
