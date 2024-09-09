import type Interface from "../Interface/Build.js";
/**
 * @module Build
 *
 */
declare const _default: Interface;
export default _default;
export declare const Exec: import("../Interface/Exec.js").default;
export declare const Merge: <Ts extends readonly unknown[]>(...objects: Ts) => import("deepmerge-ts").DeepMergeHKT<Ts, Readonly<{
    DeepMergeRecordsURI: "DeepMergeRecordsDefaultURI";
    DeepMergeArraysURI: "DeepMergeArraysDefaultURI";
    DeepMergeSetsURI: "DeepMergeSetsDefaultURI";
    DeepMergeMapsURI: "DeepMergeMapsDefaultURI";
    DeepMergeOthersURI: "DeepMergeLeafURI";
    DeepMergeFilterValuesURI: "DeepMergeFilterValuesDefaultURI";
}>, Readonly<{
    key: PropertyKey;
    parents: ReadonlyArray<Readonly<Record<PropertyKey, unknown>>>;
}>>;
export declare const Pipe: string[];
export declare const extname: (path: string) => string, basename: (path: string, suffix?: string) => string, relative: (from: string, to: string) => string, dirname: (path: string) => string, normalize: (path: string) => string, sep: "\\" | "/";
export declare const Current: string;
