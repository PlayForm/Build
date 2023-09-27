/**
 * @module Build
 *
 */
export default interface Type {
    /**
     * Represents a function that processes file patterns.
     *
     * @param {Pattern[]} File - An array of file patterns to be processed. Each pattern can include wildcards (*) to match multiple files.
     * @param {Object} [Option] - An optional object that can contain two properties.
     * @param {string} [Option.ESBuild] - A string representing the ESBuild option.
     * @param {string} [Option.TypeScript] - A string representing the TypeScript option.
     * @returns {Promise<void>} A promise that resolves when the processing is complete.
     */
    (File: Pattern[], Option?: {
        ESBuild?: string;
        TypeScript?: string;
    }): Promise<void>;
}
import type { Pattern } from "fast-glob";
