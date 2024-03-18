#!/usr/bin/env node

/**
 * @module TypeScriptESBuild
 *
 */
export default new (await import("commander")).Command()
	.name("TypeScriptESBuild")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("🌀 Build TypeScript.")
	.argument("<File...>", "Build File.")
	.option("-es, --ESBuild <File>", "ESBuild Configuration.")
	.option("-ts, --TypeScript <File>", "TypeScript Configuration.")
	.action((await import("../Function/Build.js")).default)
	.parse();
