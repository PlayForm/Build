/**
 * @module TypeDoc
 *
 */
export default ((...[Reflection]: Parameters<Type>): string => {
	let Version = "";

	if (
		(Reflection instanceof DeclarationReflection ||
			Reflection instanceof ProjectReflection) &&
		Reflection.packageVersion
	) {
		Version = ` - v${Reflection.packageVersion}`;
	}

	return `${Reflection.name}${Version}`;
}) satisfies Type as Type;

import type Type from "../../Interface/TypeDoc/Name";

export const { DeclarationReflection, ProjectReflection } = await import(
	"typedoc"
);
