/**
 * @module TypeDoc
 *
 */
export default class
	extends (await import("typedoc")).DefaultTheme
	implements Type
{
	override getRenderContext = (
		...[Event]: Parameters<Type["getRenderContext"]>
	): Context => new _Context(this, Event, this.application.options);

	override buildUrls(...[Reflection, URLs]: Parameters<Type["buildUrls"]>) {
		const { Directory, Template } = this._Mapping(Reflection) ?? {};

		if (Directory && Template) {
			if (
				!Reflection.url ||
				!DefaultTheme.URL_PREFIX.test(Reflection.url)
			) {
				const URL = [
					Directory,
					`${DefaultTheme.getUrl(Reflection)}.html`,
				].join("/");
				URLs.push(new UrlMapping(URL, Reflection, Template));

				Reflection.url = URL;
				Reflection.hasOwnDocument = true;
			}

			Reflection.traverse((Child) => {
				if (Child instanceof DeclarationReflection) {
					this.buildUrls(Child, URLs);
				} else {
					DefaultTheme.applyAnchorUrl(Child, Reflection);
				}
				return true;
			});
		} else if (Reflection.parent) {
			DefaultTheme.applyAnchorUrl(Reflection, Reflection.parent);
		}

		return URLs;
	}

	_Mapping = (Reflection: DeclarationReflection) =>
		this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));

	Mapping: Mapping[] = [
		{
			Kind: [ReflectionKind.Class],
			Directory: "Class",
			Template: this.reflectionTemplate,
		},
		{
			Kind: [ReflectionKind.Interface],
			Directory: "Interface",
			Template: this.reflectionTemplate,
		},
		{
			Kind: [ReflectionKind.Enum],
			Directory: "Enum",
			Template: this.reflectionTemplate,
		},
		{
			Kind: [ReflectionKind.Namespace, ReflectionKind.Module],
			Directory: "Module",
			Template: this.reflectionTemplate,
		},
		{
			Kind: [ReflectionKind.TypeAlias],
			Directory: "Type",
			Template: this.reflectionTemplate,
		},
		{
			Kind: [ReflectionKind.Function],
			Directory: "Function",
			Template: this.reflectionTemplate,
		},
		{
			Kind: [ReflectionKind.Variable],
			Directory: "Variable",
			Template: this.reflectionTemplate,
		},
	];
}

import type Context from "../../Interface/TypeDoc/Context.js";
import type Type from "../../Interface/TypeDoc/Theme.js";

import {
	DeclarationReflection,
	DefaultTheme,
	PageEvent,
	ReflectionKind,
	UrlMapping,
	type RenderTemplate,
} from "typedoc";

export const { default: _Context } = await import("./Context.js");

/**
 * Defines a mapping of a {@link Models.Kind} to a template file.
 *
 * Used by {@link DefaultTheme} to map reflections to output files.
 */
interface Mapping {
	/**
	 * {@link DeclarationReflection.kind} this rule applies to.
	 */
	Kind: ReflectionKind[];

	/**
	 * The name of the directory the output files should be written to.
	 */
	Directory: string;

	/**
	 * The name of the template that should be used to render the reflection.
	 */
	// rome-ignore lint/suspicious/noExplicitAny:
	Template: RenderTemplate<PageEvent<any>>;
}
