#!/usr/bin/env node

import Build from "../Function/Build.js";
import _JSON from "../Function/JSON.js";

import { Command } from "commander";

try {
	new Command()
		.name("TypeScriptESBuild")
		.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
		.description("Builds files")
		.argument("<Files...>", "Files to build")
		.option("-es, --ESBuild <File>", "esbuild configuration file")
		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
		.action(Build)
		.parse();
} catch (_Error) {}
