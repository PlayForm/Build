#!/usr/bin/env node
var i=new(await import("commander")).Command().name("TypeScriptESBuild").version("0.3.5").description("Builds files").argument("<Files...>","Files to build").option("-es, --ESBuild <File>","esbuild configuration file").option("-ts, --TypeScript <File>","TypeScript configuration file").action((await import("../Function/Build.js")).default).parse();export{i as default};
