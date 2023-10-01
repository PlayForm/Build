/**
 * @module TypeDoc
 *
 */
export default class _Class
	extends (await import("typedoc")).DefaultThemeRenderContext
	implements Type
{
	constructor(
		Theme: DefaultTheme,
		Page: PageEvent<Reflection>,
		Option: Options
	) {
		super(Theme, Page, Option);

		this.init();
	}

	init() {
		// rome-ignore lint/suspicious/noExplicitAny:
		this.defaultLayout = Bind(Layout as any, this);
	}
}

import type Type from "../../Interface/TypeDoc/Context.js";

import type { DefaultTheme, Options, PageEvent, Reflection } from "typedoc";

export const Bind =
	<F, L extends [], R>(fn: (f: F, ...a: L) => R, first: F) =>
	(...r: L) =>
		fn(first, ...r);

export const { default: Layout } = await import(
	"../../Function/TypeDoc/Layout.js"
);
