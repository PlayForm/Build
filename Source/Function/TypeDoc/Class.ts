/**
 * @module TypeDoc
 *
 */
export default ((...[Name, Extra]: Parameters<Type>) => {
	const CSS = Object.keys(Name)
		.filter((key) => Name[key])
		.concat(Extra || "")
		.join(" ")
		.trim()
		.replace(/\s+/g, " ");

	return CSS.length ? CSS : "";
}) satisfies Type as Type;

import type Type from "../../Interface/TypeDoc/Class";
