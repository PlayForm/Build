import { exec as Exec } from "child_process";
import { deepmerge as Merge } from "deepmerge-ts";
import type { BuildOptions as Option } from "esbuild";
import { build as Build } from "esbuild";
import type { Pattern } from "fast-glob";
import Glob from "fast-glob";
import _ESBuild from "../Configuration/ESBuild.js";
import File from "../Library/File.js";

export type Pipe = string[];

/**
 * The `Build` function compiles and builds TypeScript files using esbuild and TypeScript compiler.
 * @param {Pattern[]} Files - An array of file patterns to be processed. Each pattern can include
 * wildcards (*) to match multiple files.
 * @param [Option] - The `Option` parameter is an optional object that can contain two properties:
 */
export default async (
	Files: Pattern[],
	Option?: { ESBuild?: string; TypeScript?: string }
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

	const ESBuild = Merge(_ESBuild, {
		entryPoints: Object.fromEntries(
			Pipe.map((File) => [
				File.replace("Source/", "").split(".").slice(0, -1.0).join("."),
				File,
			])
		),
	} satisfies Option);

	await Build(
		Option?.ESBuild ? Merge(ESBuild, await File(Option?.ESBuild)) : ESBuild
	);

	if (Option?.TypeScript) {
		Exec(`tsc -p ${Option?.TypeScript}`);
	} else {
		Exec("tsc");
	}
};
