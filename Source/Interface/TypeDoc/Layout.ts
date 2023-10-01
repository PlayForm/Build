/**
 * @module TypeDoc
 *
 */
export default interface Type {
	(
		Context: DefaultThemeRenderContext,
		Template: RenderTemplate<PageEvent<Reflection>>,
		Property: PageEvent<Reflection>
	): JSX.Element;
}

import type {
	DefaultThemeRenderContext,
	JSX,
	PageEvent,
	Reflection,
	RenderTemplate,
} from "typedoc";
