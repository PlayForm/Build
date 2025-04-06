import type { BuildOptions } from "esbuild";

/**
 * @module Build
 *
 */
export default interface Interface {
	(
		Current: BuildOptions,
	): BuildOptions | Promise<BuildOptions> | void | Promise<void>;
}
