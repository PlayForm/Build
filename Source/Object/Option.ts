import type { PluginBuild as Build, BuildOptions as Option } from "esbuild";

import { copy as Copy } from "esbuild-plugin-copy";
import { rm as Remove } from "fs/promises";

import _JSON from "../Fn/JSON.js";

const Out = "Target";

export default {
	color: true,
	format: "esm",
	metafile: true,
	minify: true,
	outdir: Out,
	platform: "node",
	target: "esnext",
	write: true,
	logLevel: "debug",
	plugins: [
		{
			name: "Target",
			setup(Build: Build) {
				Build.onStart(async () => {
					try {
						await Remove(Out, {
							recursive: true,
						});
					} catch (_Error) {}
				});
			},
		},
		Copy({
			resolveFrom: "out",
			assets: [
				{
					from: "./Source/Notation/TypeScript.json",
					to: "./Notation/",
				},
			],
		}),
	],
	define: {
		"process.env.VERSION_PACKAGE": `'${(await _JSON("package.json"))
			?.version}'`,
	},
} satisfies Option as Option;
