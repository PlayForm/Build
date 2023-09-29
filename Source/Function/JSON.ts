/**
 * @module JSON
 *
 */
export default (async (...[File, From]: Parameters<Type>) =>
	JSON.parse(
		(
			await (
				await import("fs/promises")
			).readFile(
				`${
					From
						? (await import("path")).dirname(
								(await import("url")).fileURLToPath(
									From ?? import.meta.url
								)
						  )
						: "."
				}/${File}`,
				"utf-8"
			)
		).toString()
	)) satisfies Type as Type;

import type Type from "../Interface/JSON.js";
