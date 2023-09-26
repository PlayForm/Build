/**
 * @module Build
 *
 */
export default interface Type {
    (
    /**
     * An array of file patterns to be processed. Each pattern can include
     * wildcards (*) to match multiple files.
     */
    File: Pattern[], 
    /**
     *
     */
    Option?: {
        ESBuild?: string;
        TypeScript?: string;
    }): Promise<void>;
}
import type { Pattern } from "fast-glob";
