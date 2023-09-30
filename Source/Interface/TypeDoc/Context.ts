export default interface Type extends DefaultThemeRenderContext {
	new (
		Theme: DefaultTheme,
		Page: PageEvent<Reflection>,
		Option: Options
	): Type;

	init: () => void;
}

import type {
	DefaultTheme,
	DefaultThemeRenderContext,
	Options,
	PageEvent,
	Reflection,
} from "typedoc";
