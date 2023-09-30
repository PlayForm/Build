/**
 * @module TypeDoc
 *
 */
export default class
	extends (await import("typedoc")).DefaultThemeRenderContext
	implements Type
{
	constructor(...[Theme, Page, Option]: ConstructorParameters<Type>) {
		super(Theme, Page, Option);

		this.init();
	}

	init() {}
}

import type Type from "../../Interface/TypeDoc/Context.js";

export const { DefaultTheme } = await import("typedoc");
