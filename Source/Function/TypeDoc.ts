export class Context extends DefaultThemeRenderContext {}

export const load = (app: Application) => {
	app.renderer.defineTheme(
		"TypeScriptESBuild",
		class extends DefaultTheme {
			override getRenderContext(
				pageEvent: PageEvent<Reflection>
			): Context {
				return new Context(this, pageEvent, this.application.options);
			}
		}
	);

	console.log(app.renderer);
};

export default load;

import type { Application, PageEvent, Reflection } from "typedoc";
import { DefaultTheme, DefaultThemeRenderContext } from "typedoc";
