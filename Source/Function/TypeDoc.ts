/**
 * @TODO: Monitor this and rename outputs from `functions` to `Function`
 * the private property mappings in
 */
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
