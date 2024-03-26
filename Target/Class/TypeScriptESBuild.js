#!/usr/bin/env node
var i=new(await import("commander")).Command().name("TypeScriptESBuild").version("0.4.7").description("\u{1F300} Build TypeScript.").argument("<File...>","Build File.").option("-ES, --ESBuild <File>","ESBuild Configuration.").option("-TS, --TypeScript <File>","TypeScript Configuration.").action((await import("../Function/Build.js")).default).parse();export{i as default};
