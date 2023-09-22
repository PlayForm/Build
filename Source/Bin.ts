#!/usr/bin/env node

import Build from "./Command/Build.js";
import _JSON from "./Library/JSON.js";

import { Command } from "commander";

try {
	new Command()
		.name("TypeScriptESBuild")
		.version((await _JSON("../package.json", import.meta.url))?.version)
		.description("Builds files")
		.argument("<Files...>", "Files to build")
		.option("-es, --ESBuild <File>", "esbuild configuration file")
		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
		.action(Build)
		.parse();
} catch (_Error) {
	console.log(_Error);
}
