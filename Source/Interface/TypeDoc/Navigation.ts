/**
 * @module TypeDoc
 *
 */
export default interface Type {
	(
		Context: DefaultThemeRenderContext,
		Property: PageEvent<Reflection>
	): JSX.Element;
}

import type {
	DefaultThemeRenderContext,
	JSX,
	PageEvent,
	Reflection,
} from "typedoc";
