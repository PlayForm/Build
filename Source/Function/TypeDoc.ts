import { Application, Context, Converter, ParameterType } from "typedoc";

export const load = (app: Application) => {
	app.options.addDeclaration({
		name: "plugin-option",
		help: "Displayed when --help is passed",
		type: ParameterType.String, // The default
		defaultValue: "", // The default
	});

	app.converter.on(Converter.EVENT_RESOLVE, (_Context: Context) => {
		if (app.options.getValue("plugin-option") === "something") {
			// ...
		}
	});
};

export default load;
