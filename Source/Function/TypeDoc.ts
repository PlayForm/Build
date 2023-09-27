export class Context extends DefaultThemeRenderContext {}

export const load = (app: Application) => {
	app.renderer.defineTheme(
		"TypeScriptESBuild",
		class extends DefaultTheme {
			override getRenderContext(
				pageEvent: PageEvent<Reflection>
			): ThemeContext {
				return new ThemeContext(
					this,
					pageEvent,
					this.application.options
				);
			}
		}
	);
};

export default load;

import type { Application } from "typedoc";
import { DefaultTheme, DefaultThemeRenderContext } from "typedoc";
