/**
 * @module TypeDoc
 *
 */
export default ((...[Reflection]: Parameters<Type>): string =>
	`${Reflection.name}${
		(Reflection instanceof DeclarationReflection ||
			Reflection instanceof ProjectReflection) &&
		Reflection.packageVersion
			? ` / v${Reflection.packageVersion}`
			: ""
	}`) satisfies Type as Type;

import type Type from "../../Interface/TypeDoc/Name";

export const { DeclarationReflection, ProjectReflection } = await import(
	"typedoc"
);
