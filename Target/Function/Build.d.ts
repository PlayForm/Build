/**
 * The `Build` function compiles and builds TypeScript files using esbuild and the TypeScript compiler.
 *
 * @module Build
 *
 */
declare const _default: Type;
export default _default;
import type Type from "../Interface/Build.js";
export declare const Exec: (Command: string, Echo?: false | ((Return: any) => void)) => Promise<void>;
export declare const deepmerge: typeof import("deepmerge-ts").deepmerge;
