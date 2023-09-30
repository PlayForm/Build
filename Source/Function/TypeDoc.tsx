/**
 * @module TypeDoc
 *
 */
export const load = (...[Application]: Parameters<Type["load"]>) =>
	Application.renderer.defineTheme("TypeScriptESBuild", Theme);

import type Type from "../Interface/TypeDoc.js";

import Theme from "../Class/TypeDoc/Theme.js";
