/**
 * @module TypeDoc
 *
 */
export function load(...[Application]: Parameters<Type["load"]>) {
	Application.renderer.hooks.on("body.begin", (_) => (
		<script>
			<JSX.Raw html="console.log(`Loaded ${location.href}`)" />
		</script>
	));

	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
}

import { JSX } from "typedoc";

import type Type from "../Interface/TypeDoc.js";

import Theme from "../Class/TypeDoc/Theme.js";
