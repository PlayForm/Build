// @TODO: Monitor this and rename outputs
export const load = (app: Application) => {
	app.options.addDeclaration({
		name: "TypeScriptESBuild",
		help: "",
		type: ParameterType.String, // The default
		defaultValue: "", // The default
	});
};

export default load;

import { Application, ParameterType } from "typedoc";
