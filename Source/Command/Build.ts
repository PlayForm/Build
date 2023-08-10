import { exec as Exec } from "child_process";
import { deepmerge as Merge } from "deepmerge-ts";
import type { BuildOptions } from "esbuild";
import { build as Build } from "esbuild";
import type { Pattern } from "fast-glob";
import Glob from "fast-glob";
import _esbuild from "../Configuration/esbuild.js";
import File from "../Library/File.js";

export type Pipe = string[];

export default async (
	Files: Pattern[],
	Options?: { esbuild?: string; TypeScript?: string }
) => {
	const Pipe: Pipe = [];

	for (const File of Files) {
		for (const _File of await Glob(
			File.replaceAll("'", "").replaceAll('"', "")
		)) {
			Pipe.push(_File);
		}
	}

	Pipe.reverse();

	const esbuild = Merge(_esbuild, {
		entryPoints: Object.fromEntries(
			Pipe.map((File) => [
				File.replace("Source/", "").split(".").slice(0, -1.0).join("."),
				File,
			])
		),
	} satisfies BuildOptions);

	await Build(
		Options?.esbuild
			? Merge(esbuild, await File(Options?.esbuild))
			: esbuild
	);

	if (Options?.TypeScript) {
		Exec(`tsc -p ${Options?.TypeScript}`);
	} else {
		Exec("tsc");
	}
};
