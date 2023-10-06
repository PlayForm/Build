/**
 * @module Build
 *
 */
declare const _default: Type;
export default _default;
import type Type from "../Interface/Build.js";
export declare const Exec: import("../Interface/Exec.js").default;
export declare const Merge: import("../Interface/Merge.js").default<import("../Function/Merge.js").PMF>;
export declare const resolve: (...paths: string[]) => string;
export declare const Pipe: string[];
export declare const Current: string;
