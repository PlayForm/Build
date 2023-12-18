/**
 * @module Build
 *
 */
declare const _default: Type;
export default _default;
import type Type from "../Interface/Build.js";
export declare const Exec: import("../Interface/Exec.js").default;
export declare const Merge: import("../Interface/Merge.js").default<import("../Interface/Merge.js").Generic>;
export declare const resolve: (...paths: string[]) => string;
export declare const Pipe: string[];
export declare const Current: string;
