/**
 * @module Build
 *
 */
declare const _default: Interface;
export default _default;
import type Interface from "../Interface/Build.js";
export declare const Exec: import("../Interface/Exec.js").default;
export declare const Merge: <Ts extends readonly unknown[]>(...objects: Ts) => import("deepmerge-ts").DeepMergeHKT<Ts, import("deepmerge-ts").GetDeepMergeFunctionsURIs<{}>, import("deepmerge-ts").DeepMergeBuiltInMetaData>;
export declare const Pipe: string[];
export declare const Current: string;
