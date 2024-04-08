/**
 * @module JSON
 *
 */
export default (async (...[File, From]: Parameters<Type>) =>
	JSON.parse(
		(
			await (
				await import("fs/promises")
			).readFile(`${From ?? "."}/${File}`, "utf-8")
		).toString(),
	)) satisfies Type as Type;

import type Type from "@Interface/JSON.js";
