#!/usr/bin/env node

/**
 * @module Build
 *
 * CLI command for running the build process using Commander.js.
 *
 * This module defines a command-line interface for the build system. It provides
 * options for specifying files to build, custom ESBuild/TypeScript configurations,
 * and watch mode for continuous rebuilding.
 *
 * @example
 * Basic usage - build all TypeScript files:
 * ```bash
 * node Class/Build.js "Source/**\/*.ts"
 * ```
 *
 * @example
 * Build with custom ESBuild configuration:
 * ```bash
 * node Class/Build.js "Source/**\/*.ts" --ESBuild ./config/esbuild.js
 * ```
 *
 * @example
 * Build with custom TypeScript configuration:
 * ```bash
 * node Class/Build.js "Source/**\/*.ts" --TypeScript ./tsconfig.build.json
 * ```
 *
 * @example
 * Enable watch mode for continuous builds:
 * ```bash
 * node Class/Build.js "Source/**\/*.ts" --Watch
 * ```
 *
 * @example
 * Combine options:
 * ```bash
 * node Class/Build.js "Index.ts" "Source/**\/*.ts" -E ./Config/ESBuild.js -T ./Config/TS.json --Watch
 * ```
 */
export default new (await import("commander")).Command()
	.name("Build")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("Build 🌀")
	.argument("<File...>", "File 📝")
	.option("-E, --ESBuild <File>", "ESBuild 📜")
	.option("-T, --TypeScript <File>", "TypeScript 📜", "tsconfig.json")
	.option("-W --Watch", "Watch 👁️")
	.action((await import("../Function/Build.js")).default)
	.parse();
