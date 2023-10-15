/**
 * @module Load
 *
 */
export const load = (...[Application]: Parameters<Type>) =>
	Application.renderer.defineTheme("TypeScriptESBuild", Theme);

export default load;

import type Type from "../Interface/Load.js";

import Theme from "../Class/Theme.js";
