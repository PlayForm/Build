#!/usr/bin/env node

try {
	new (await import("commander")).Command()
		.name("TypeScriptESBuild")
		.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
		.description("Builds files")
		.argument("<Files...>", "Files to build")
		.option("-es, --ESBuild <File>", "esbuild configuration file")
		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
		.action((await import("../Function/Build.js")).default)
		.parse();
} catch (_Error) {}

export {};
