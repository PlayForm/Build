export class Context extends DefaultThemeRenderContext {}

export const load = (app: Application) => {
	console.log("----- PLUGIN ----- ");

	app.options.addDeclaration({
		name: "TypeScriptESBuild",
		help: "",
		type: ParameterType.String, // The default
		defaultValue: "", // The default
	});

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
};

export default load;

import {
	Application,
	DefaultTheme,
	DefaultThemeRenderContext,
	PageEvent,
	ParameterType,
	Reflection,
} from "typedoc";
