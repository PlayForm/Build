#!/usr/bin/env node
import i from"../Function/Build.js";import"../Function/JSON.js";import{Command as e}from"commander";try{new e().name("TypeScriptESBuild").version("0.1.16").description("Builds files").argument("<Files...>","Files to build").option("-es, --ESBuild <File>","esbuild configuration file").option("-ts, --TypeScript <File>","TypeScript configuration file").action(i).parse()}catch{}
