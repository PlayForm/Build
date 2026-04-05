import type { BuildOptions } from "esbuild";
/**
 * @module Build
 *
 * Interface representing a function that modifies or extends ESBuild build options.
 *
 * This interface is used to define custom build configuration functions that can
 * modify the default build options. Functions implementing this interface receive
 * the current build options and can return modified options, or void to indicate
 * no changes are needed.
 *
 * @param Current - The current ESBuild build options to potentially modify.
 *
 * @returns BuildOptions | Promise<BuildOptions> | void | Promise<void>
 *          Returns modified build options, a promise resolving to modified options,
 *          void to indicate no changes, or a promise resolving to void.
 *
 * @example
 * Adding minification:
 * ```typescript
 * import type BuildSetInterface from "./Interface/Build/Set.js";
 * import type { BuildOptions } from "esbuild";
 *
 * const minifyConfig: BuildSetInterface = async (Current: BuildOptions) => {
 *   return {
 *     ...Current,
 *     minify: true,
 *   };
 * };
 * ```
 *
 * @example
 * Adding custom plugins:
 * ```typescript
 * const addPlugins: BuildSetInterface = async (Current: BuildOptions) => {
 *   return {
 *     ...Current,
 *     plugins: [...(Current.plugins ?? []), myPlugin],
 *   };
 * };
 * ```
 *
 * @example
 * Modifying options in place (void return):
 * ```typescript
 * const modifyInPlace: BuildSetInterface = async (Current: BuildOptions) => {
 *   Current.minify = !Current.minify;
 *   // no return - modifies options in place
 * };
 * ```
 */
export default interface Interface {
    (Current: BuildOptions): BuildOptions | Promise<BuildOptions> | void | Promise<void>;
}
