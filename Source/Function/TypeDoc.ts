/**
 * @module TypeDoc
 *
 */
export default {
	load: async (...[Application]: Parameters<Type["load"]>) => {
		Application.renderer.defineTheme(
			"TypeScriptESBuild",
			(await import("../Function/TypeDoc/Theme.js")).default
		);
	},
};

import type Type from "../Interface/TypeDoc.js";
