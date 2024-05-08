#!/usr/bin/env node

/**
 * @module Build
 *
 */
export default new (await import("commander")).Command()
	.name("Build")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("🌀 Build —")
	.argument("<File...>", "📂 File —")
	.option("-ES, --ESBuild <File>", "👷🏻‍♀️ ESBuild —")
	.option("-TS, --TypeScript <File>", "👨🏻‍💻 TypeScript —", "tsconfig.json")
	.action((await import("../Function/Build.js")).default)
	.parse();
