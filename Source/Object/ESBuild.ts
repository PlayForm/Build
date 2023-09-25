export default {
	color: true,
	format: "esm",
	metafile: true,
	minify: true,
	outdir: "Target",
	platform: "node",
	target: "esnext",
	write: true,
	logLevel: "debug",
	plugins: [
		{
			name: "Target",
			setup({ onStart, initialOptions: { outdir } }) {
				onStart(async () =>
					outdir
						? await (
								await import("fs/promises")
						  ).rm(outdir, {
								recursive: true,
						  })
						: {}
				);
			},
		},
		(await import("esbuild-plugin-copy")).copy({
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
		"process.env.VERSION_PACKAGE": `'${(
			await (await import("../Function/JSON.js")).default("package.json")
		)?.version}'`,
	},
} satisfies BuildOptions as BuildOptions;

import type { BuildOptions } from "esbuild";
