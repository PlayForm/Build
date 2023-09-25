#!/usr/bin/env node
try{new(await import("commander")).Command().name("TypeScriptESBuild").version("0.1.16").description("Builds files").argument("<Files...>","Files to build").option("-es, --ESBuild <File>","esbuild configuration file").option("-ts, --TypeScript <File>","TypeScript configuration file").action((await import("../Function/Build.js")).default).parse()}catch{}
