/**
 * @module Load
 *
 */
export const load = (...[Application]: Parameters<Type>) =>
	Application.renderer.defineTheme("TypeScriptESBuild", Theme);

export default load;

import type Type from "../Interface/Load.js";

export const { default: Theme } = await import("../Class/Theme.js");



