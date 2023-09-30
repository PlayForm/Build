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

	/**
	 * Mappings of reflections kinds to templates used by this theme.
	 */
	// override mappings = [
	// 	{
	// 		kind: [ReflectionKind.Class],
	// 		directory: "Class",
	// 		template: this.reflectionTemplate,
	// 	},
	// 	{
	// 		kind: [ReflectionKind.Interface],
	// 		directory: "Interface",
	// 		template: this.reflectionTemplate,
	// 	},
	// 	{
	// 		kind: [ReflectionKind.Enum],
	// 		directory: "Enum",
	// 		template: this.reflectionTemplate,
	// 	},
	// 	{
	// 		kind: [ReflectionKind.Namespace, ReflectionKind.Module],
	// 		directory: "Module",
	// 		template: this.reflectionTemplate,
	// 	},
	// 	{
	// 		kind: [ReflectionKind.TypeAlias],
	// 		directory: "Type",
	// 		template: this.reflectionTemplate,
	// 	},
	// 	{
	// 		kind: [ReflectionKind.Function],
	// 		directory: "Function",
	// 		template: this.reflectionTemplate,
	// 	},
	// 	{
	// 		kind: [ReflectionKind.Variable],
	// 		directory: "Variable",
	// 		template: this.reflectionTemplate,
	// 	},
	// ];
}

import type Context from "../../Interface/TypeDoc/Context.js";
import type Type from "../../Interface/TypeDoc/Theme.js";

// import { ReflectionKind } from "typedoc";

export const { default: _Context } = await import("./Context.js");
