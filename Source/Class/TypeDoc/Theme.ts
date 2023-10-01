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
		const { Directory } = this._Mapping(Reflection) ?? {};

		if (Directory) {
			if (
				!Reflection.url ||
				!DefaultTheme.URL_PREFIX.test(Reflection.url)
			) {
				const URL = [
					Directory,
					`${DefaultTheme.getUrl(Reflection)}.html`,
				].join("/");

				URLs.push(
					new UrlMapping(URL, Reflection, this.reflectionTemplate)
				);

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

	_Mapping = (...[Reflection]: Parameters<Type["_Mapping"]>) =>
		this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));

	Mapping: Mapping[] = [
		{
			Kind: [ReflectionKind.Class],
			Directory: "Class",
		},
		{
			Kind: [ReflectionKind.Interface],
			Directory: "Interface",
		},
		{
			Kind: [ReflectionKind.Enum],
			Directory: "Enum",
		},
		{
			Kind: [ReflectionKind.Namespace, ReflectionKind.Module],
			Directory: "Module",
		},
		{
			Kind: [ReflectionKind.TypeAlias],
			Directory: "Type",
		},
		{
			Kind: [ReflectionKind.Function],
			Directory: "Function",
		},
		{
			Kind: [ReflectionKind.Variable],
			Directory: "Variable",
		},
	];
}

import type Context from "../../Interface/TypeDoc/Context.js";
import type Mapping from "../../Interface/TypeDoc/Mapping.js";
import type Type from "../../Interface/TypeDoc/Theme.js";

import {
	DeclarationReflection,
	DefaultTheme,
	ReflectionKind,
	UrlMapping,
} from "typedoc";

export const { default: _Context } = await import("./Context.js");
