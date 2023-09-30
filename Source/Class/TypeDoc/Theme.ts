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

	override buildUrls(
		Reflection: DeclarationReflection,
		// rome-ignore lint/suspicious/noExplicitAny:
		URLs: UrlMapping<any>[]
		// rome-ignore lint/suspicious/noExplicitAny:
	): UrlMapping<any>[] {
		const mapping = this._getMapping(Reflection);
		if (mapping) {
			if (
				!Reflection.url ||
				!DefaultTheme.URL_PREFIX.test(Reflection.url)
			) {
				const url = [
					mapping.directory,
					DefaultTheme.getUrl(Reflection) + ".html",
				].join("/");
				URLs.push(new UrlMapping(url, Reflection, mapping.template));

				Reflection.url = url;
				Reflection.hasOwnDocument = true;
			}

			Reflection.traverse((child) => {
				if (child instanceof DeclarationReflection) {
					this.buildUrls(child, URLs);
				} else {
					DefaultTheme.applyAnchorUrl(child, Reflection);
				}
				return true;
			});
		} else if (Reflection.parent) {
			DefaultTheme.applyAnchorUrl(Reflection, Reflection.parent);
		}

		return URLs;
	}

	_getMapping = () => {};

	Mapping: Mapping[] = [
		{
			kind: [ReflectionKind.Class],
			directory: "Class",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.Interface],
			directory: "Interface",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.Enum],
			directory: "Enum",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.Namespace, ReflectionKind.Module],
			directory: "Module",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.TypeAlias],
			directory: "Type",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.Function],
			directory: "Function",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.Variable],
			directory: "Variable",
			template: this.reflectionTemplate,
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
	kind: ReflectionKind[];

	/**
	 * The name of the directory the output files should be written to.
	 */
	directory: string;

	/**
	 * The name of the template that should be used to render the reflection.
	 */
	// rome-ignore lint/suspicious/noExplicitAny:
	template: RenderTemplate<PageEvent<any>>;
}
