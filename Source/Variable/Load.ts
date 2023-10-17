/**
 * @module Load
 *
 */
export default {
	load: (...[Application]: Parameters<Type>) =>
	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
}


import type Type from "../Interface/Load.js";

export const { default: Theme } = await import("../Class/Theme.js");
