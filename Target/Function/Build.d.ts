/**
 * @module Build
 *
 */
declare const _default: Type;
export default _default;
import type Type from "../Interface/Build.js";
export declare const Exec: import("../Interface/Exec.js").default;
export declare const deepmerge: typeof import("deepmerge-ts").deepmerge;
export declare const resolve: (...paths: string[]) => string;
export declare const Current: string;
