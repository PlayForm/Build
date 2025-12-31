import type Interface from "../Interface/Build.js";
/**
 * @module Build
 *
 */
declare const _default: Interface;
export default _default;
export declare const Exec: import("../Interface/Exec.js").default;
export declare const Merge: <Target extends object, Ts extends readonly unknown[]>(target: Target, ...objects: Ts) => void;
export declare const Pipe: string[];
export declare const extname: typeof import("node:path").extname, basename: typeof import("node:path").basename, relative: typeof import("node:path").relative, dirname: typeof import("node:path").dirname, normalize: typeof import("node:path").normalize, sep: "\\" | "/";
