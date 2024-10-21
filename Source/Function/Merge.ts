/**
 * @module Merge
 *
 */
export default <T extends object>(Target: T, Source: T) =>
	Into(Target, Source) as unknown as T;

export const { default: Into } = await import("./Merge/Into.js");
