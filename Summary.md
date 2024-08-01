🗣️ Summary from Build/v0.0.1 to Build/v0.0.10 in .
diff --git a/.github/FUNDING.yml b/.github/FUNDING.yml
new file mode 100644
index 0000000..22bb4f6
--- /dev/null
+++ b/.github/FUNDING.yml
+ open_collective: playform
diff --git a/.github/workflows/Dependabot.yml b/.github/workflows/Dependabot.yml
index cfa5b96..e6091e5 100644
--- a/.github/workflows/Dependabot.yml
+++ b/.github/workflows/Dependabot.yml
-             - uses: dependabot/fetch-metadata@v2.0.0
+             - uses: dependabot/fetch-metadata@v2.1.0
-             - uses: dependabot/fetch-metadata@v2.0.0
+             - uses: dependabot/fetch-metadata@v2.1.0
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index 09e8b75..5e814e3 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
-             - uses: pozil/auto-assign-issue@v1.13.0
+             - uses: pozil/auto-assign-issue@v2.0.0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 2fd4da9..c5828c9 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v4.1.2
+             - uses: actions/checkout@v4.1.6
-             - uses: pnpm/action-setup@v3.0.0
+             - uses: pnpm/action-setup@v4.0.0
-             - uses: actions/upload-artifact@v4.3.1
+             - uses: actions/upload-artifact@v4.3.3
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index b0332f1..788002b 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/checkout@v4.1.2
+             - uses: actions/checkout@v4.1.6
-                   npm install --legacy-peer-deps
-                   npm publish --legacy-peer-deps --provenance
+                   npm publish --legacy-peer-deps --provenance --ignore-scripts
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index 13ffed8..8c55e25 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
+ [homepage]: HTTPS://www.contributor-covenant.org
+ [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
+ [FAQ]: HTTPS://www.contributor-covenant.org/faq
+ [translations]: HTTPS://www.contributor-covenant.org/translations
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index 4700843..c749fbe 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
+ [homepage]: HTTPS://www.contributor-covenant.org
+ [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
+ [FAQ]: HTTPS://www.contributor-covenant.org/faq
+ [translations]: HTTPS://www.contributor-covenant.org/translations
diff --git a/LICENSE b/LICENSE
index cca5808..f236d76 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2023-2024 Playform
+ Copyright (c) 2023-2024 PlayForm
diff --git a/package.json b/package.json
index ee8595d..f754a86 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.1",
+ 	"version": "0.0.10",
- 	"description": "🌀 ESBuild Wrapper.",
+ 	"description": "🌀 Build —",
- 		"esbuild"
+ 		"esbuild",
+ 		"playform"
- 	"homepage": "https://github.com/Playform/Build#readme",
+ 	"homepage": "HTTPS://GitHub.Com/PlayForm/Build#ReadMe",
- 		"url": "https://github.com/Playform/Build/issues"
+ 		"url": "HTTPS://GitHub.Com/PlayForm/Build/issues"
- 		"url": "git+https://github.com/Playform/Build.git"
+ 		"url": "git+https://github.com/PlayForm/Build.git"
- 		"name": "Playform",
- 		"email": "hello@playform.cloud",
- 		"url": "https://playform.cloud"
+ 		"name": "🖋️ Source — 👐🏻 Open —",
+ 		"email": "Source/Open@PlayForm.Cloud",
+ 		"url": "HTTPS://PlayForm.Cloud"
- 	"main": "./Target/Class/TypeScriptESBuild.js",
- 	"types": "./Target/Class/TypeScriptESBuild.d.ts",
+ 	"main": "./Target/Class/Build.js",
+ 	"types": "./Target/Class/Build.d.ts",
- 		"TypeScriptESBuild": "Target/Class/TypeScriptESBuild.js"
+ 		"Build": "Target/Class/Build.js"
- 		"Document": "TypeScriptDocument 'Source/**/*.ts'",
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts'"
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts'"
- 		"@types/node": "20.12.2",
- 		"commander": "12.0.0",
- 		"deepmerge-ts": "5.1.0",
- 		"esbuild": "0.20.2",
- 		"esbuild-plugin-copy": "2.1.1",
+ 		"@types/node": "20.12.12",
+ 		"commander": "12.1.0",
+ 		"deepmerge-ts": "7.0.1",
+ 		"esbuild": "0.21.4",
- 		"typescript": "5.4.3"
+ 		"tsc-alias": "1.8.10",
+ 		"typescript": "5.4.5"
- 	"optionalDependencies": {
- 		"@playform/document": "0.0.1"
- 	},
diff --git a/README.md b/README.md
index 4f5b187..e08c5b8 100644
--- a/README.md
+++ b/README.md
- # 🌀 [TypeScriptESBuild]
+ # 🌀 [Build] —
- 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
+ 		"prepublishOnly": "Build 'Source/**/*.ts'"
- 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es ESBuild.ts"
+ 		"prepublishOnly": "Build 'Source/**/*.ts' --ESBuild ESBuild.ts"
- 	"extends": "@playform/build/Target/Notation/TypeScript",
+ 	"extends": "@playform/build/tsconfig",
- [ESBuild]: https://npmjs.org/esbuild
- [TypeDoc]: https://npmjs.org/typedoc
- [TypeScriptESBuild]: https://npmjs.org/@playform/build
+ [ESBuild]: HTTPS://NPMJS.Org/esbuild
+ [TypeDoc]: HTTPS://NPMJS.Org/typedoc
+ [Build]: HTTPS://NPMJS.Org/@playform/build
diff --git a/Source/Class/Build.ts b/Source/Class/Build.ts
new file mode 100644
index 0000000..162be35
--- /dev/null
+++ b/Source/Class/Build.ts
+ #!/usr/bin/env node
+ 
+ /**
+  * @module Build
+  *
+  */
+ export default new (await import("commander")).Command()
+ 	.name("Build")
+ 	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
+ 	.description("🌀 Build —")
+ 	.argument("<File...>", "📂 File —")
+ 	.option("-ES, --ESBuild <File>", "👷🏻‍♀️ ESBuild —")
+ 	.option("-TS, --TypeScript <File>", "👨🏻‍💻 TypeScript —", "tsconfig.json")
+ 	.action((await import("../Function/Build.js")).default)
+ 	.parse();
diff --git a/Source/Class/TypeScriptESBuild.ts b/Source/Class/TypeScriptESBuild.ts
deleted file mode 100644
index 8ef9c08..0000000
--- a/Source/Class/TypeScriptESBuild.ts
+++ /dev/null
- #!/usr/bin/env node
- 
- /**
-  * @module TypeScriptESBuild
-  *
-  */
- export default new (await import("commander")).Command()
- 	.name("TypeScriptESBuild")
- 	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
- 	.description("🌀 Build TypeScript.")
- 	.argument("<File...>", "Build File.")
- 	.option("-ES, --ESBuild <File>", "ESBuild Configuration.")
- 	.option("-TS, --TypeScript <File>", "TypeScript Configuration.")
- 	.action((await import("../Function/Build.js")).default)
- 	.parse();
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index 52074eb..17d15c0 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- export default (async (...[File, Option]: Parameters<Type>) => {
+ export default (async (...[File, Option]: Parameters<Interface>) => {
+ 			tsconfig: Option?.TypeScript ?? "tsconfig.json",
- 									await import("../Function/File.js")
+ 									await import("@Function/File.js")
- 	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
- }) satisfies Type as Type;
+ 	await Exec(`tsc -p ${Configuration.tsconfig}`);
+ 	await Exec(`tsc-alias -f -p ${Configuration.tsconfig}`);
+ }) satisfies Interface as Interface;
- import type Type from "../Interface/Build.js";
+ import type Interface from "../Interface/Build.js";
- export const { resolve } = await import("path");
- 
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 8f53f41..6f79df2 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Type>
+ 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Interface>
- }) satisfies Type as Type;
+ }) satisfies Interface as Interface;
- import type Type from "../Interface/Exec.js";
+ import type Interface from "../Interface/Exec.js";
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 212ba4a..9bb1a75 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- export default (async (...[Path]: Parameters<Type>) => {
+ export default (async (...[Path]: Parameters<Interface>) => {
- 		const { options } = (
+ 		const { options: Option } = (
- 					await import("./JSON.js")
+ 					await import("../Function/JSON.js")
- 					"../Notation/TypeScript.json",
+ 					"../../tsconfig.json",
- 				options,
- 				(await import("typescript")).default.createCompilerHost(
- 					options,
- 				),
+ 				Option,
+ 				(await import("typescript")).default.createCompilerHost(Option),
- 				options,
+ 				Option,
- }) satisfies Type as Type;
+ }) satisfies Interface as Interface;
- import type Type from "../Interface/File.js";
+ import type Interface from "../Interface/File.js";
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 9f75935..b44f0ac 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- export default (async (...[File, From]: Parameters<Type>) =>
+ export default (async (...[File, From]: Parameters<Interface>) =>
- 	)) satisfies Type as Type;
+ 	)) satisfies Interface as Interface;
- import type Type from "../Interface/JSON.js";
+ import type Interface from "../Interface/JSON.js";
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
index 8586054..adc696d 100644
--- a/Source/Function/Merge.ts
+++ b/Source/Function/Merge.ts
- export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
+ export default (await import("deepmerge-ts")).deepmergeCustom({
- }) satisfies Type<Generic> as Type<Generic>;
- 
- import type Type from "../Interface/Merge.js";
- import type { Generic } from "../Interface/Merge.js";
+ });
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
index 01dce34..84d2f05 100644
--- a/Source/Interface/Build.ts
+++ b/Source/Interface/Build.ts
- export default interface Type {
+ export default interface Interface {
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index ff2ec1b..24b86d3 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- export default interface Type {
+ export default interface Interface {
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
index 607aee2..0de0809 100644
--- a/Source/Interface/File.ts
+++ b/Source/Interface/File.ts
- export default interface Type {
+ export default interface Interface {
diff --git a/Source/Interface/JSON.ts b/Source/Interface/JSON.ts
index 9447d0c..3b5f8df 100644
--- a/Source/Interface/JSON.ts
+++ b/Source/Interface/JSON.ts
- export default interface Type {
+ export default interface Interface {
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
deleted file mode 100644
index 5e66d23..0000000
--- a/Source/Interface/Merge.ts
+++ /dev/null
- /**
-  * @module Merge
-  *
-  * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeMergeFunctionsURIs.
-  *
-  * @template PMF - A type parameter representing Partial<DeepMergeMergeFunctionsURIs>.
-  *
-  */
- export default interface Type<
- 	PMF extends Partial<DeepMergeMergeFunctionsURIs>,
- > {
- 	/**
- 	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
- 	 *
- 	 * @param ...Objects - An arbitrary number of objects to be merged.
- 	 *
- 	 */
- 	<Ts extends readonly unknown[]>(
- 		...Objects: Ts
- 	): DeepMergeHKT<
- 		Ts,
- 		GetDeepMergeMergeFunctionsURIs<PMF>,
- 		DeepMergeBuiltInMetaData
- 	>;
- }
- 
- export interface Generic {
- 	DeepMergeArraysURI: DeepMergeLeafURI;
- }
- 
- import type {
- 	DeepMergeBuiltInMetaData,
- 	DeepMergeHKT,
- 	DeepMergeLeafURI,
- 	DeepMergeMergeFunctionsURIs,
- 	GetDeepMergeMergeFunctionsURIs,
- } from "deepmerge-ts";
diff --git a/Source/Notation/TypeScript.json b/Source/Notation/TypeScript.json
deleted file mode 100644
index 80ad3c6..0000000
--- a/Source/Notation/TypeScript.json
+++ /dev/null
- {
- 	"$schema": "https://json.schemastore.org/tsconfig",
- 	"compilerOptions": {
- 		"allowArbitraryExtensions": true,
- 		"allowImportingTsExtensions": true,
- 		"allowJs": true,
- 		"allowSyntheticDefaultImports": true,
- 		"allowUmdGlobalAccess": false,
- 		"allowUnreachableCode": false,
- 		"allowUnusedLabels": false,
- 		"alwaysStrict": true,
- 		"assumeChangesOnlyAffectDirectDependencies": true,
- 		"baseUrl": "./",
- 		"checkJs": true,
- 		"declaration": true,
- 		"disableReferencedProjectLoad": false,
- 		"emitDeclarationOnly": true,
- 		"esModuleInterop": true,
- 		"exactOptionalPropertyTypes": true,
- 		"forceConsistentCasingInFileNames": true,
- 		"isolatedModules": true,
- 		"jsx": "preserve",
- 		"lib": ["ESNext"],
- 		"module": "ESNext",
- 		"moduleResolution": "Bundler",
- 		"noFallthroughCasesInSwitch": true,
- 		"noImplicitOverride": true,
- 		"noImplicitReturns": true,
- 		"noPropertyAccessFromIndexSignature": true,
- 		"noUncheckedIndexedAccess": true,
- 		"noUnusedLocals": true,
- 		"noUnusedParameters": true,
- 		"resolveJsonModule": true,
- 		"skipLibCheck": true,
- 		"strict": true,
- 		"strictBindCallApply": true,
- 		"strictFunctionTypes": true,
- 		"strictNullChecks": true,
- 		"target": "ESNext",
- 		"types": ["node", "@types/node"],
- 		"verbatimModuleSyntax": true,
- 		"noImplicitThis": true,
- 		"paths": {
- 			"@Asset/*": ["Source/Asset/*"],
- 			"@Class/*": ["Source/Class/*"],
- 			"@Component/*": ["Source/Component/*"],
- 			"@Context/*": ["Source/Context/*"],
- 			"@Element/*": ["Source/Element/*"],
- 			"@Function/*": ["Source/Function/*"],
- 			"@Interface/*": ["Source/Interface/*"],
- 			"@Layout/*": ["Source/Layout/*"],
- 			"@Library/*": ["Source/Library/*"],
- 			"@Notation/*": ["Source/Notation/*"],
- 			"@Option/*": ["Source/Option/*"],
- 			"@Page/*": ["Source/pages/*"],
- 			"@Script/*": ["Source/Script/*"],
- 			"@Stylesheet/*": ["Source/Stylesheet/*"],
- 			"@Type/*": ["Source/Type/*"],
- 			"@Variable/*": ["Source/Variable/*"]
- 		}
- 	},
- 	"ts-node": {
- 		"esm": true
- 	}
- }
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
index c09869e..ed62997 100644
--- a/Source/Variable/ESBuild.ts
+++ b/Source/Variable/ESBuild.ts
+ 	logLevel: "debug",
+ 	tsconfig: "tsconfig.json",
- 	logLevel: "debug",
- 		(await import("esbuild-plugin-copy")).copy({
- 			resolveFrom: "out",
- 			assets: [
- 				{
- 					from: "./Source/Notation/TypeScript.json",
- 					to: "./Notation/",
- 				},
- 			],
- 		}),
diff --git a/tsconfig.json b/tsconfig.json
index 12e0400..d03c6ae 100644
--- a/tsconfig.json
+++ b/tsconfig.json
+ 	"$schema": "https://json.schemastore.org/tsconfig",
- 		"outDir": "Target"
+ 		"allowArbitraryExtensions": true,
+ 		"allowImportingTsExtensions": true,
+ 		"allowJs": true,
+ 		"allowSyntheticDefaultImports": true,
+ 		"allowUmdGlobalAccess": false,
+ 		"allowUnreachableCode": false,
+ 		"allowUnusedLabels": false,
+ 		"alwaysStrict": true,
+ 		"assumeChangesOnlyAffectDirectDependencies": true,
+ 		"baseUrl": "./",
+ 		"checkJs": true,
+ 		"declaration": true,
+ 		"disableReferencedProjectLoad": false,
+ 		"emitDeclarationOnly": true,
+ 		"esModuleInterop": true,
+ 		"exactOptionalPropertyTypes": true,
+ 		"forceConsistentCasingInFileNames": true,
+ 		"isolatedModules": true,
+ 		"jsx": "preserve",
+ 		"lib": ["ESNext"],
+ 		"module": "ESNext",
+ 		"moduleResolution": "Bundler",
+ 		"noFallthroughCasesInSwitch": true,
+ 		"noImplicitOverride": true,
+ 		"noImplicitReturns": true,
+ 		"noImplicitThis": true,
+ 		"noPropertyAccessFromIndexSignature": true,
+ 		"noUncheckedIndexedAccess": true,
+ 		"noUnusedLocals": true,
+ 		"noUnusedParameters": true,
+ 		"outDir": "Target",
+ 		"paths": {
+ 			"@Asset/*": ["Source/Asset/*"],
+ 			"@Class/*": ["Source/Class/*"],
+ 			"@Component/*": ["Source/Component/*"],
+ 			"@Context/*": ["Source/Context/*"],
+ 			"@Element/*": ["Source/Element/*"],
+ 			"@Function/*": ["Source/Function/*"],
+ 			"@Interface/*": ["Source/Interface/*"],
+ 			"@Layout/*": ["Source/Layout/*"],
+ 			"@Library/*": ["Source/Library/*"],
+ 			"@Notation/*": ["Source/Notation/*"],
+ 			"@Option/*": ["Source/Option/*"],
+ 			"@Page/*": ["Source/pages/*"],
+ 			"@Script/*": ["Source/Script/*"],
+ 			"@Stylesheet/*": ["Source/Stylesheet/*"],
+ 			"@Target/*": ["Source/Target/*"],
+ 			"@Test/*": ["Source/Test/*"],
+ 			"@Type/*": ["Source/Type/*"],
+ 			"@Variable/*": ["Source/Variable/*"]
- 	"extends": "./Source/Notation/TypeScript",
- 	"include": ["Source"]
+ 		"resolveJsonModule": true,
+ 		"skipLibCheck": true,
+ 		"strict": true,
+ 		"strictBindCallApply": true,
+ 		"strictFunctionTypes": true,
+ 		"strictNullChecks": true,
+ 		"target": "ESNext",
+ 		"types": ["node", "@types/node"],
+ 		"verbatimModuleSyntax": true
+ 	},
+ 	"include": ["Source"],
+ 	"ts-node": {
+ 		"esm": true
+ 	}

🗣️ Summary from Build/v0.0.10 to Build/v0.0.11 in .
diff --git a/package.json b/package.json
index f754a86..65f84a1 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.10",
+ 	"version": "0.0.11",
- 		"@types/node": "20.12.12",
+ 		"@types/node": "20.14.2",
- 		"deepmerge-ts": "7.0.1",
- 		"esbuild": "0.21.4",
+ 		"deepmerge-ts": "7.0.3",
+ 		"esbuild": "0.21.5",
diff --git a/undefined/temp/v8-compile-cache/12.4.254.14-node.12/DzCzBDeveloperzBApplicationzBPlayFormzBNPMzBBuild.BLOB b/undefined/temp/v8-compile-cache/12.4.254.14-node.12/DzCzBDeveloperzBApplicationzBPlayFormzBNPMzBBuild.BLOB
new file mode 100644
index 0000000..876b3e7
--- /dev/null
+++ b/undefined/temp/v8-compile-cache/12.4.254.14-node.12/DzCzBDeveloperzBApplicationzBPlayFormzBNPMzBBuild.BLOB
+ `        ub    	    
+    getAllProjectOutputs    `    
+ 
+ 
+ ;Y   getJSDocClassTag`    %  Rd
+ 9
+ ?o@
+    RuleAction      `    c  Rd
+   Rc
+   Rd
+    isOwnChild      `    .  RcBD2   getExtendsConfigPath    `    
+   RbBΠ
+   Rb:њ   textSpansEqual  `      Rb>ѳ   findNodeToFix   `    d  RbFQ\,
+   Rc
+    halfIndent      `    p
+   Rc6pG+   createPrependNodes      `    f
+    Rc
+  @ 
+  @ 
+  @ 
+  X
+  @ 
+  @ 
+  }
+  Y
+ "  
+  @ 
+ @ 
+  @嶘鷘
+  @녺醺
+  @ 
+ @ 
+  @ 
+  @ 
+ 
+  @ 
+  @ 
+ 
+  @䵪꽪
+  @蘯⚯
+  @ 
+  @ 
+  @ 
+ @ 
+  @ 
+  @⛋坋 @ 
+ @   
+  @ 
+ 
+  @ 
+  @ 
+ @ 
+ z ,
+ z z
+ @ 
+  @ 
+ @ 
+ 
+    .timestamp      `
+ CU
+ =
+ EF
+ 1V
+ ),f
+ =)
+ N2U
+ CU
+ 
+ 
+ &
+ 6
+ F
+ V
+ f
+ v
+ 
+  
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 	
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+  
+ !
+ "
+ #
+ $
+ %
+ &
+ '
+ (
+ )
+ *
+ +
+ ,
+ -
+ .
+ /
+ 0
+ 1
+ 2
+ 3
+ 4
+ 5
+ 6
+ 7
+ 8
+ 9
+ :
+ ;
+ <
+ =
+ >
+ ?
+ @
+ A
+ B
+ C
+ D
+ E
+ F
+ G
+ H
+ I
+ J
+ K
+ L
+ M
+ N
+ O
+ P
+ Q
+ R
+ S
+ T
+ U
+ V
+ W
+ X
+ Y
+ Z
+ [
+ \
+ ]
+ ^
+ _
+ `
+ a
+ b
+ c
+ d
+ e
+ f
+ g
+ h
+ i
+ j
+ k
+ l
+ m
+ n
+ o
+ p
+ q
+ r
+ s
+ t
+ u
+ v
+ w
+ x
+ y
+ z
+ {
+ |
+ }
+ ~
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
+ 
diff --git a/undefined/temp/v8-compile-cache/12.4.254.14-node.12/DzCzBDeveloperzBApplicationzBPlayFormzBNPMzBBuild.MAP b/undefined/temp/v8-compile-cache/12.4.254.14-node.12/DzCzBDeveloperzBApplicationzBPlayFormzBNPMzBBuild.MAP
new file mode 100644
index 0000000..12b8e51
--- /dev/null
+++ b/undefined/temp/v8-compile-cache/12.4.254.14-node.12/DzCzBDeveloperzBApplicationzBPlayFormzBNPMzBBuild.MAP
+ {"D:\\Developer\\node_modules\\typescript\\lib\\typescript.js":["7c3f01f3b07dd22312cd0f770d7c6f6ac1671ced",0,1240328]}
🗣️ Summary from Build/v0.0.11 to Build/v0.0.2 in .
diff --git a/.github/FUNDING.yml b/.github/FUNDING.yml
deleted file mode 100644
index 22bb4f6..0000000
--- a/.github/FUNDING.yml
+++ /dev/null
- open_collective: playform
diff --git a/.github/workflows/Dependabot.yml b/.github/workflows/Dependabot.yml
index e6091e5..cfa5b96 100644
--- a/.github/workflows/Dependabot.yml
+++ b/.github/workflows/Dependabot.yml
-             - uses: dependabot/fetch-metadata@v2.1.0
+             - uses: dependabot/fetch-metadata@v2.0.0
-             - uses: dependabot/fetch-metadata@v2.1.0
+             - uses: dependabot/fetch-metadata@v2.0.0
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index 5e814e3..09e8b75 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
-             - uses: pozil/auto-assign-issue@v2.0.0
+             - uses: pozil/auto-assign-issue@v1.13.0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index c5828c9..ca94b6d 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v4.1.6
+             - uses: actions/checkout@v4.1.2
-             - uses: pnpm/action-setup@v4.0.0
+             - uses: pnpm/action-setup@v3.0.0
-             - run: pnpm run prepublishOnly
+             - run: pnpm run Build
-             - uses: actions/upload-artifact@v4.3.3
+             - uses: actions/upload-artifact@v4.3.1
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 788002b..b0332f1 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/checkout@v4.1.6
+             - uses: actions/checkout@v4.1.2
-                   npm publish --legacy-peer-deps --provenance --ignore-scripts
+                   npm install --legacy-peer-deps
+                   npm publish --legacy-peer-deps --provenance
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index 8c55e25..13ffed8 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- [homepage]: HTTPS://www.contributor-covenant.org
- [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
- [FAQ]: HTTPS://www.contributor-covenant.org/faq
- [translations]: HTTPS://www.contributor-covenant.org/translations
+ [homepage]: https://www.contributor-covenant.org
+ [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: https://github.com/mozilla/diversity
+ [FAQ]: https://www.contributor-covenant.org/faq
+ [translations]: https://www.contributor-covenant.org/translations
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index c749fbe..4700843 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
- [homepage]: HTTPS://www.contributor-covenant.org
- [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
- [FAQ]: HTTPS://www.contributor-covenant.org/faq
- [translations]: HTTPS://www.contributor-covenant.org/translations
+ [homepage]: https://www.contributor-covenant.org
+ [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: https://github.com/mozilla/diversity
+ [FAQ]: https://www.contributor-covenant.org/faq
+ [translations]: https://www.contributor-covenant.org/translations
diff --git a/LICENSE b/LICENSE
index f236d76..cca5808 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2023-2024 PlayForm
+ Copyright (c) 2023-2024 Playform
diff --git a/package.json b/package.json
index 65f84a1..6c2256e 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.11",
+ 	"version": "0.0.2",
- 	"description": "🌀 Build —",
+ 	"description": "🌀 Build.",
- 		"esbuild",
- 		"playform"
+ 		"esbuild"
- 	"homepage": "HTTPS://GitHub.Com/PlayForm/Build#ReadMe",
+ 	"homepage": "https://github.com/Playform/Build#ReadMe",
- 		"url": "HTTPS://GitHub.Com/PlayForm/Build/issues"
+ 		"url": "https://github.com/Playform/Build/issues"
- 		"url": "git+https://github.com/PlayForm/Build.git"
+ 		"url": "git+https://github.com/Playform/Build.git"
- 		"name": "🖋️ Source — 👐🏻 Open —",
- 		"email": "Source/Open@PlayForm.Cloud",
- 		"url": "HTTPS://PlayForm.Cloud"
+ 		"name": "Playform",
+ 		"email": "hello@playform.cloud",
+ 		"url": "https://playform.cloud"
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts'"
+ 		"Document": "Document 'Source/**/*.ts'",
+ 		"Build": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts'"
- 		"@types/node": "20.14.2",
- 		"commander": "12.1.0",
- 		"deepmerge-ts": "7.0.3",
- 		"esbuild": "0.21.5",
+ 		"@types/node": "20.12.3",
+ 		"commander": "12.0.0",
+ 		"deepmerge-ts": "5.1.0",
+ 		"esbuild": "0.20.2",
- 		"tsc-alias": "1.8.10",
- 		"typescript": "5.4.5"
+ 		"typescript": "5.4.3"
+ 	"peerDependencies": {
+ 		"@playform/document": "0.0.2"
+ 	},
diff --git a/README.md b/README.md
index e08c5b8..abb7dee 100644
--- a/README.md
+++ b/README.md
- # 🌀 [Build] —
+ # 🌀 [Build]
- 		"prepublishOnly": "Build 'Source/**/*.ts' --ESBuild ESBuild.ts"
+ 		"prepublishOnly": "Build 'Source/**/*.ts' -es ESBuild.ts"
- [ESBuild]: HTTPS://NPMJS.Org/esbuild
- [TypeDoc]: HTTPS://NPMJS.Org/typedoc
- [Build]: HTTPS://NPMJS.Org/@playform/build
+ [ESBuild]: https://npmjs.org/esbuild
+ [TypeDoc]: https://npmjs.org/typedoc
+ [Build]: https://npmjs.org/@playform/build
diff --git a/Source/Class/Build.ts b/Source/Class/Build.ts
index 162be35..4143aa2 100644
--- a/Source/Class/Build.ts
+++ b/Source/Class/Build.ts
- 	.description("🌀 Build —")
- 	.argument("<File...>", "📂 File —")
- 	.option("-ES, --ESBuild <File>", "👷🏻‍♀️ ESBuild —")
- 	.option("-TS, --TypeScript <File>", "👨🏻‍💻 TypeScript —", "tsconfig.json")
+ 	.description("🌀 Build.")
+ 	.argument("<File...>", "File.")
+ 	.option("-ES, --ESBuild <File>", "ESBuild.")
+ 	.option("-TS, --TypeScript <File>", "TypeScript.")
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index 17d15c0..a6e4e52 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- export default (async (...[File, Option]: Parameters<Interface>) => {
+ export default (async (...[File, Option]: Parameters<Type>) => {
- 		for (const __File of await (await import("fast-glob")).default(
- 			_File.replaceAll("'", "").replaceAll('"', ""),
- 		)) {
+ 		for (const __File of await (
+ 			await import("fast-glob")
+ 		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
- 				]),
+ 				])
- 			tsconfig: Option?.TypeScript ?? "tsconfig.json",
- 		},
+ 		}
- 		await (await import("esbuild")).analyzeMetafile(
+ 		await (
+ 			await import("esbuild")
+ 		).analyzeMetafile(
- 									await import("@Function/File.js")
- 								).default(Option.ESBuild),
+ 									await import("../Function/File.js")
+ 								).default(Option.ESBuild)
- 						: Configuration,
+ 						: Configuration
- 			},
- 		),
+ 			}
+ 		)
- 	await Exec(`tsc -p ${Configuration.tsconfig}`);
- 	await Exec(`tsc-alias -f -p ${Configuration.tsconfig}`);
- }) satisfies Interface as Interface;
+ 	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
+ }) satisfies Type as Type;
- import type Interface from "../Interface/Build.js";
+ import type Type from "../Interface/Build.js";
+ export const { resolve } = await import("path");
+ 
- 	(await import("path")).dirname(import.meta.url),
+ 	(await import("path")).dirname(import.meta.url)
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 6f79df2..a3a3a1f 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Interface>
+ 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Type>
- 			Command,
+ 			Command
- }) satisfies Interface as Interface;
+ }) satisfies Type as Type;
- import type Interface from "../Interface/Exec.js";
+ import type Type from "../Interface/Exec.js";
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 9bb1a75..6159f22 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- export default (async (...[Path]: Parameters<Interface>) => {
+ export default (async (...[Path]: Parameters<Type>) => {
- 					(
- 						await import("path")
- 					).dirname(
- 						(await import("url")).fileURLToPath(import.meta.url),
- 					),
+ 					(await import("path")).dirname(
+ 						(await import("url")).fileURLToPath(import.meta.url)
+ 					)
- 			".",
+ 			"."
- 				(await import("typescript")).default.createCompilerHost(Option),
+ 				(await import("typescript")).default.createCompilerHost(Option)
- 		await (await import("fs/promises")).writeFile(
+ 		await (
+ 			await import("fs/promises")
+ 		).writeFile(
- 				Option,
- 			),
+ 				Option
+ 			)
- 			(
- 				await import("url")
- 			)
+ 			(await import("url"))
- }) satisfies Interface as Interface;
+ }) satisfies Type as Type;
- import type Interface from "../Interface/File.js";
+ import type Type from "../Interface/File.js";
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index b44f0ac..9f75935 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- export default (async (...[File, From]: Parameters<Interface>) =>
+ export default (async (...[File, From]: Parameters<Type>) =>
- 	)) satisfies Interface as Interface;
+ 	)) satisfies Type as Type;
- import type Interface from "../Interface/JSON.js";
+ import type Type from "../Interface/JSON.js";
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
index adc696d..8586054 100644
--- a/Source/Function/Merge.ts
+++ b/Source/Function/Merge.ts
- export default (await import("deepmerge-ts")).deepmergeCustom({
+ export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
- });
+ }) satisfies Type<Generic> as Type<Generic>;
+ 
+ import type Type from "../Interface/Merge.js";
+ import type { Generic } from "../Interface/Merge.js";
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
new file mode 100644
index 0000000..5e66d23
--- /dev/null
+++ b/Source/Interface/Merge.ts
+ /**
+  * @module Merge
+  *
+  * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeMergeFunctionsURIs.
+  *
+  * @template PMF - A type parameter representing Partial<DeepMergeMergeFunctionsURIs>.
+  *
+  */
+ export default interface Type<
+ 	PMF extends Partial<DeepMergeMergeFunctionsURIs>,
+ > {
+ 	/**
+ 	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
+ 	 *
+ 	 * @param ...Objects - An arbitrary number of objects to be merged.
+ 	 *
+ 	 */
+ 	<Ts extends readonly unknown[]>(
+ 		...Objects: Ts
+ 	): DeepMergeHKT<
+ 		Ts,
+ 		GetDeepMergeMergeFunctionsURIs<PMF>,
+ 		DeepMergeBuiltInMetaData
+ 	>;
+ }
+ 
+ export interface Generic {
+ 	DeepMergeArraysURI: DeepMergeLeafURI;
+ }
+ 
+ import type {
+ 	DeepMergeBuiltInMetaData,
+ 	DeepMergeHKT,
+ 	DeepMergeLeafURI,
+ 	DeepMergeMergeFunctionsURIs,
+ 	GetDeepMergeMergeFunctionsURIs,
+ } from "deepmerge-ts";
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
index ed62997..fefb546 100644
--- a/Source/Variable/ESBuild.ts
+++ b/Source/Variable/ESBuild.ts
- 	logLevel: "debug",
- 	tsconfig: "tsconfig.json",
+ 	logLevel: "debug",
- 							? await (await import("fs/promises")).rm(outdir, {
+ 							? await (
+ 									await import("fs/promises")
+ 								).rm(outdir, {
diff --git a/tsconfig.json b/tsconfig.json
index d03c6ae..340903d 100644
--- a/tsconfig.json
+++ b/tsconfig.json
+ 		"outDir": "Target",
- 		"noImplicitThis": true,
- 		"outDir": "Target",
+ 		"resolveJsonModule": true,
+ 		"skipLibCheck": true,
+ 		"strict": true,
+ 		"strictBindCallApply": true,
+ 		"strictFunctionTypes": true,
+ 		"strictNullChecks": true,
+ 		"target": "ESNext",
+ 		"types": ["node", "@types/node"],
+ 		"verbatimModuleSyntax": true,
+ 		"noImplicitThis": true,
- 			"@Target/*": ["Source/Target/*"],
- 			"@Test/*": ["Source/Test/*"],
+ 		}
- 		"resolveJsonModule": true,
- 		"skipLibCheck": true,
- 		"strict": true,
- 		"strictBindCallApply": true,
- 		"strictFunctionTypes": true,
- 		"strictNullChecks": true,
- 		"target": "ESNext",
- 		"types": ["node", "@types/node"],
- 		"verbatimModuleSyntax": true
- 	},
- 	"include": ["Source"],
- 	}
+ 	},
+ 	"include": ["Source"]
diff --git a/undefined/temp/v8-compile-cache/12.4.254.14-node.12/DzCzBDeveloperzBApplicationzBPlayFormzBNPMzBBuild.BLOB b/undefined/temp/v8-compile-cache/12.4.254.14-node.12/DzCzBDeveloperzBApplicationzBPlayFormzBNPMzBBuild.BLOB
deleted file mode 100644
index 876b3e7..0000000
--- a/undefined/temp/v8-compile-cache/12.4.254.14-node.12/DzCzBDeveloperzBApplicationzBPlayFormzBNPMzBBuild.BLOB
+++ /dev/null
- `        ub    	    
-    getAllProjectOutputs    `    
- 
- 
- ;Y   getJSDocClassTag`    %  Rd
- 9
- ?o@
-    RuleAction      `    c  Rd
-   Rc
-   Rd
-    isOwnChild      `    .  RcBD2   getExtendsConfigPath    `    
-   RbBΠ
-   Rb:њ   textSpansEqual  `      Rb>ѳ   findNodeToFix   `    d  RbFQ\,
-   Rc
-    halfIndent      `    p
-   Rc6pG+   createPrependNodes      `    f
-    Rc
-  @ 
-  @ 
-  @ 
-  X
-  @ 
-  @ 
-  }
-  Y
- "  
-  @ 
- @ 
-  @嶘鷘
-  @녺醺
-  @ 
- @ 
-  @ 
-  @ 
- 
-  @ 
-  @ 
- 
-  @䵪꽪
-  @蘯⚯
-  @ 
-  @ 
-  @ 
- @ 
-  @ 
-  @⛋坋 @ 
- @   
-  @ 
- 
-  @ 
-  @ 
- @ 
- z ,
- z z
- @ 
-  @ 
- @ 
- 
-    .timestamp      `
- CU
- =
- EF
- 1V
- ),f
- =)
- N2U
- CU
- 
- 
- &
- 6
- F
- V
- f
- v
- 
-  
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 	
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
-  
- !
- "
- #
- $
- %
- &
- '
- (
- )
- *
- +
- ,
- -
- .
- /
- 0
- 1
- 2
- 3
- 4
- 5
- 6
- 7
- 8
- 9
- :
- ;
- <
- =
- >
- ?
- @
- A
- B
- C
- D
- E
- F
- G
- H
- I
- J
- K
- L
- M
- N
- O
- P
- Q
- R
- S
- T
- U
- V
- W
- X
- Y
- Z
- [
- \
- ]
- ^
- _
- `
- a
- b
- c
- d
- e
- f
- g
- h
- i
- j
- k
- l
- m
- n
- o
- p
- q
- r
- s
- t
- u
- v
- w
- x
- y
- z
- {
- |
- }
- ~
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
diff --git a/undefined/temp/v8-compile-cache/12.4.254.14-node.12/DzCzBDeveloperzBApplicationzBPlayFormzBNPMzBBuild.MAP b/undefined/temp/v8-compile-cache/12.4.254.14-node.12/DzCzBDeveloperzBApplicationzBPlayFormzBNPMzBBuild.MAP
deleted file mode 100644
index 12b8e51..0000000
--- a/undefined/temp/v8-compile-cache/12.4.254.14-node.12/DzCzBDeveloperzBApplicationzBPlayFormzBNPMzBBuild.MAP
+++ /dev/null
- {"D:\\Developer\\node_modules\\typescript\\lib\\typescript.js":["7c3f01f3b07dd22312cd0f770d7c6f6ac1671ced",0,1240328]}
🗣️ Summary from Build/v0.0.2 to Build/v0.0.3 in .
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index 09e8b75..0be30ba 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
-             - uses: pozil/auto-assign-issue@v1.13.0
+             - uses: pozil/auto-assign-issue@v1.14.0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index ca94b6d..2fd4da9 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - run: pnpm run Build
+             - run: pnpm run prepublishOnly
diff --git a/package.json b/package.json
index 6c2256e..8b37dff 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.2",
+ 	"version": "0.0.3",
- 		"Document": "Document 'Source/**/*.ts'",
- 		"Build": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts'"
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts'"
- 		"@types/node": "20.12.3",
+ 		"@types/node": "20.12.4",
- 		"typescript": "5.4.3"
+ 		"tsc-alias": "1.8.8",
+ 		"typescript": "5.4.4"
- 	"peerDependencies": {
- 		"@playform/document": "0.0.2"
- 	},
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index a6e4e52..fe2192b 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
+ 	Exec(`tsc-alias -p ${Option?.TypeScript ?? "tsconfig.json"}`);
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
index fefb546..ee02b93 100644
--- a/Source/Variable/ESBuild.ts
+++ b/Source/Variable/ESBuild.ts
+ 	logLevel: "debug",
+ 	tsconfig: "tsconfig.json",
- 	logLevel: "debug",

🗣️ Summary from Build/v0.0.3 to Build/v0.0.4 in .
diff --git a/package.json b/package.json
index 8b37dff..3051308 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.3",
+ 	"version": "0.0.5",
+ 		"Document": "Document 'Source/**/*.ts'",
+ 	"peerDependencies": {
+ 		"@playform/document": "0.0.5"
+ 	},
diff --git a/Source/Class/Build.ts b/Source/Class/Build.ts
index 4143aa2..790a412 100644
--- a/Source/Class/Build.ts
+++ b/Source/Class/Build.ts
- 	.option("-TS, --TypeScript <File>", "TypeScript.")
+ 	.option("-TS, --TypeScript <File>", "TypeScript.", "tsconfig.json")
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index fe2192b..1daa6d6 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
+ 			tsconfig: Option?.TypeScript ?? "tsconfig.json",
- 	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
- 	Exec(`tsc-alias -p ${Option?.TypeScript ?? "tsconfig.json"}`);
+ 	Exec(`tsc -p ${Configuration.tsconfig}`);
+ 	Exec(`tsc-alias -p ${Configuration.tsconfig}`);

🗣️ Summary from Build/v0.0.4 to Build/v0.0.5 in .

🗣️ Summary from Build/v0.0.5 to Build/v0.0.6 in .
diff --git a/package.json b/package.json
index 3051308..3eb3718 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.5",
+ 	"version": "0.0.6",
- 	"description": "🌀 Build.",
+ 	"description": "🌀 Build",
- 		"name": "Playform",
- 		"email": "hello@playform.cloud",
- 		"url": "https://playform.cloud"
+ 		"name": "Source/Open",
+ 		"email": "Source/Open@Playform.Cloud",
+ 		"url": "HTTPS://Playform.Cloud"
- 		"@types/node": "20.12.4",
+ 		"@types/node": "20.12.7",
- 		"typescript": "5.4.4"
+ 		"typescript": "5.4.5"
+ 		"@playform/document": "0.0.6",
- 	"peerDependencies": {
- 		"@playform/document": "0.0.5"
- 	},
diff --git a/README.md b/README.md
index abb7dee..9df0bdf 100644
--- a/README.md
+++ b/README.md
- 		"prepublishOnly": "Build 'Source/**/*.ts' -es ESBuild.ts"
+ 		"prepublishOnly": "Build 'Source/**/*.ts' --ESBuild ESBuild.ts"
diff --git a/Source/Class/Build.ts b/Source/Class/Build.ts
index 790a412..d437b5c 100644
--- a/Source/Class/Build.ts
+++ b/Source/Class/Build.ts
- 	.description("🌀 Build.")
+ 	.description("🌀 Build")
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index 1daa6d6..fa5715f 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- export default (async (...[File, Option]: Parameters<Type>) => {
+ export default (async (...[File, Option]: Parameters<Interface>) => {
- 									await import("../Function/File.js")
+ 									await import("@Function/File.js")
- 	Exec(`tsc-alias -p ${Configuration.tsconfig}`);
- }) satisfies Type as Type;
+ 	Exec(`tsc-alias -f -p ${Configuration.tsconfig}`);
+ }) satisfies Interface as Interface;
- import type Type from "../Interface/Build.js";
+ import type Interface from "@Interface/Build.js";
- export const { resolve } = await import("path");
- 
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index a3a3a1f..2ffadfd 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Type>
+ 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Interface>
- }) satisfies Type as Type;
+ }) satisfies Interface as Interface;
- import type Type from "../Interface/Exec.js";
+ import type Interface from "@Interface/Exec.js";
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 6159f22..dc0f203 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- export default (async (...[Path]: Parameters<Type>) => {
+ export default (async (...[Path]: Parameters<Interface>) => {
- }) satisfies Type as Type;
+ }) satisfies Interface as Interface;
- import type Type from "../Interface/File.js";
+ import type Interface from "@Interface/File.js";
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 9f75935..1fa55f3 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- export default (async (...[File, From]: Parameters<Type>) =>
+ export default (async (...[File, From]: Parameters<Interface>) =>
- 		).toString(),
- 	)) satisfies Type as Type;
+ 		).toString()
+ 	)) satisfies Interface as Interface;
- import type Type from "../Interface/JSON.js";
+ import type Interface from "@Interface/JSON.js";
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
index 8586054..2eb6fe4 100644
--- a/Source/Function/Merge.ts
+++ b/Source/Function/Merge.ts
- }) satisfies Type<Generic> as Type<Generic>;
+ }) satisfies Interface<Generic> as Interface<Generic>;
- import type Type from "../Interface/Merge.js";
- import type { Generic } from "../Interface/Merge.js";
+ import type Interface from "@Interface/Merge.js";
+ import type { Generic } from "@Interface/Merge.js";
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
index 84d2f05..59cc654 100644
--- a/Source/Interface/Build.ts
+++ b/Source/Interface/Build.ts
- 		},
+ 		}
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 24b86d3..dae46bd 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 		Echo?: false | ((Return: any) => void),
+ 		Echo?: false | ((Return: any) => void)
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
index 5e66d23..118a12d 100644
--- a/Source/Interface/Merge.ts
+++ b/Source/Interface/Merge.ts
- export default interface Type<
+ export default interface Interface<
diff --git a/tsconfig.json b/tsconfig.json
index 340903d..d03c6ae 100644
--- a/tsconfig.json
+++ b/tsconfig.json
- 		"outDir": "Target",
+ 		"noImplicitThis": true,
- 		"resolveJsonModule": true,
- 		"skipLibCheck": true,
- 		"strict": true,
- 		"strictBindCallApply": true,
- 		"strictFunctionTypes": true,
- 		"strictNullChecks": true,
- 		"target": "ESNext",
- 		"types": ["node", "@types/node"],
- 		"verbatimModuleSyntax": true,
- 		"noImplicitThis": true,
+ 		"outDir": "Target",
+ 			"@Target/*": ["Source/Target/*"],
+ 			"@Test/*": ["Source/Test/*"],
- 		}
+ 		"resolveJsonModule": true,
+ 		"skipLibCheck": true,
+ 		"strict": true,
+ 		"strictBindCallApply": true,
+ 		"strictFunctionTypes": true,
+ 		"strictNullChecks": true,
+ 		"target": "ESNext",
+ 		"types": ["node", "@types/node"],
+ 		"verbatimModuleSyntax": true
+ 	},
+ 	"include": ["Source"],
- 	},
- 	"include": ["Source"]
+ 	}

🗣️ Summary from Build/v0.0.6 to Build/v0.0.7 in .
diff --git a/package.json b/package.json
index 3eb3718..717dd2f 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.6",
+ 	"version": "0.0.7",
- 	"homepage": "https://github.com/Playform/Build#ReadMe",
+ 	"homepage": "HTTPS://GitHub.Com/Playform/Build#ReadMe",
- 		"url": "https://github.com/Playform/Build/issues"
+ 		"url": "HTTPS://GitHub.Com/Playform/Build/issues"
- 		"url": "git+https://github.com/Playform/Build.git"
+ 		"url": "git+HTTPS://github.com/Playform/Build.git"

🗣️ Summary from Build/v0.0.7 to Build/v0.0.8 in .
diff --git a/.github/workflows/Dependabot.yml b/.github/workflows/Dependabot.yml
index cfa5b96..e6091e5 100644
--- a/.github/workflows/Dependabot.yml
+++ b/.github/workflows/Dependabot.yml
-             - uses: dependabot/fetch-metadata@v2.0.0
+             - uses: dependabot/fetch-metadata@v2.1.0
-             - uses: dependabot/fetch-metadata@v2.0.0
+             - uses: dependabot/fetch-metadata@v2.1.0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 2fd4da9..520b5ce 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v4.1.2
+             - uses: actions/checkout@v4.1.5
-             - uses: actions/upload-artifact@v4.3.1
+             - uses: actions/upload-artifact@v4.3.3
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index b0332f1..db436be 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/checkout@v4.1.2
+             - uses: actions/checkout@v4.1.5
-                   npm install --legacy-peer-deps
-                   npm publish --legacy-peer-deps --provenance
+                   npm publish --legacy-peer-deps --provenance --ignore-scripts
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index 13ffed8..8c55e25 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
+ [homepage]: HTTPS://www.contributor-covenant.org
+ [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
+ [FAQ]: HTTPS://www.contributor-covenant.org/faq
+ [translations]: HTTPS://www.contributor-covenant.org/translations
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index 4700843..c749fbe 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
+ [homepage]: HTTPS://www.contributor-covenant.org
+ [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
+ [FAQ]: HTTPS://www.contributor-covenant.org/faq
+ [translations]: HTTPS://www.contributor-covenant.org/translations
diff --git a/LICENSE b/LICENSE
index cca5808..f236d76 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2023-2024 Playform
+ Copyright (c) 2023-2024 PlayForm
diff --git a/package.json b/package.json
index 717dd2f..ab695a3 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.7",
+ 	"version": "0.0.8",
- 	"description": "🌀 Build",
+ 	"description": "🌀 Build —",
- 		"esbuild"
+ 		"esbuild",
+ 		"playform"
- 	"homepage": "HTTPS://GitHub.Com/Playform/Build#ReadMe",
+ 	"homepage": "HTTPS://GitHub.Com/PlayForm/Build#ReadMe",
- 		"url": "HTTPS://GitHub.Com/Playform/Build/issues"
+ 		"url": "HTTPS://GitHub.Com/PlayForm/Build/issues"
- 		"url": "git+HTTPS://github.com/Playform/Build.git"
+ 		"url": "git+HTTPS://github.com/PlayForm/Build.git"
- 		"name": "Source/Open",
- 		"email": "Source/Open@Playform.Cloud",
- 		"url": "HTTPS://Playform.Cloud"
+ 		"name": "🖋️ Source — 👐🏻 Open —",
+ 		"email": "Source/Open@PlayForm.Cloud",
+ 		"url": "HTTPS://PlayForm.Cloud"
- 		"@types/node": "20.12.7",
+ 		"@types/node": "20.12.11",
- 		"esbuild": "0.20.2",
+ 		"esbuild": "0.21.1",
diff --git a/README.md b/README.md
index 9df0bdf..e08c5b8 100644
--- a/README.md
+++ b/README.md
- # 🌀 [Build]
+ # 🌀 [Build] —
- [ESBuild]: https://npmjs.org/esbuild
- [TypeDoc]: https://npmjs.org/typedoc
- [Build]: https://npmjs.org/@playform/build
+ [ESBuild]: HTTPS://NPMJS.Org/esbuild
+ [TypeDoc]: HTTPS://NPMJS.Org/typedoc
+ [Build]: HTTPS://NPMJS.Org/@playform/build
diff --git a/Source/Class/Build.ts b/Source/Class/Build.ts
index d437b5c..162be35 100644
--- a/Source/Class/Build.ts
+++ b/Source/Class/Build.ts
- 	.description("🌀 Build")
- 	.argument("<File...>", "File.")
- 	.option("-ES, --ESBuild <File>", "ESBuild.")
- 	.option("-TS, --TypeScript <File>", "TypeScript.", "tsconfig.json")
+ 	.description("🌀 Build —")
+ 	.argument("<File...>", "📂 File —")
+ 	.option("-ES, --ESBuild <File>", "👷🏻‍♀️ ESBuild —")
+ 	.option("-TS, --TypeScript <File>", "👨🏻‍💻 TypeScript —", "tsconfig.json")
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index fa5715f..f39a349 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- import type Interface from "@Interface/Build.js";
+ import type Interface from "../Interface/Build.js";
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 2ffadfd..57cd6c8 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- import type Interface from "@Interface/Exec.js";
+ import type Interface from "../Interface/Exec.js";
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index dc0f203..582c9ca 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- import type Interface from "@Interface/File.js";
+ import type Interface from "../Interface/File.js";
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 1fa55f3..884a6ac 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- import type Interface from "@Interface/JSON.js";
+ import type Interface from "../Interface/JSON.js";
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
index 2eb6fe4..c51b2fc 100644
--- a/Source/Function/Merge.ts
+++ b/Source/Function/Merge.ts
- import type Interface from "@Interface/Merge.js";
- import type { Generic } from "@Interface/Merge.js";
+ import type Interface from "../Interface/Merge.js";
+ import type { Generic } from "../Interface/Merge.js";

🗣️ Summary from Build/v0.0.8 to Build/v0.0.9 in .
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index 0be30ba..5e814e3 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
-             - uses: pozil/auto-assign-issue@v1.14.0
+             - uses: pozil/auto-assign-issue@v2.0.0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 520b5ce..c5828c9 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v4.1.5
+             - uses: actions/checkout@v4.1.6
-             - uses: pnpm/action-setup@v3.0.0
+             - uses: pnpm/action-setup@v4.0.0
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index db436be..788002b 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/checkout@v4.1.5
+             - uses: actions/checkout@v4.1.6
diff --git a/package.json b/package.json
index ab695a3..a82f72a 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.8",
+ 	"version": "0.0.9",
- 		"url": "git+HTTPS://github.com/PlayForm/Build.git"
+ 		"url": "git+https://github.com/PlayForm/Build.git"
- 		"@types/node": "20.12.11",
- 		"commander": "12.0.0",
- 		"deepmerge-ts": "5.1.0",
- 		"esbuild": "0.21.1",
+ 		"@types/node": "20.12.12",
+ 		"commander": "12.1.0",
+ 		"deepmerge-ts": "7.0.1",
+ 		"esbuild": "0.21.3",
- 		"tsc-alias": "1.8.8",
+ 		"tsc-alias": "1.8.10",
- 	"devDependencies": {
+ 	"peerDependencies": {
+ 	"peerDependenciesMeta": {
+ 		"@playform/document": {
+ 			"optional": true
+ 		},
+ 		"ts-node": {
+ 			"optional": true
+ 		}
+ 	},
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
index c51b2fc..adc696d 100644
--- a/Source/Function/Merge.ts
+++ b/Source/Function/Merge.ts
- export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
+ export default (await import("deepmerge-ts")).deepmergeCustom({
- }) satisfies Interface<Generic> as Interface<Generic>;
- 
- import type Interface from "../Interface/Merge.js";
- import type { Generic } from "../Interface/Merge.js";
+ });
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
deleted file mode 100644
index 118a12d..0000000
--- a/Source/Interface/Merge.ts
+++ /dev/null
- /**
-  * @module Merge
-  *
-  * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeMergeFunctionsURIs.
-  *
-  * @template PMF - A type parameter representing Partial<DeepMergeMergeFunctionsURIs>.
-  *
-  */
- export default interface Interface<
- 	PMF extends Partial<DeepMergeMergeFunctionsURIs>,
- > {
- 	/**
- 	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
- 	 *
- 	 * @param ...Objects - An arbitrary number of objects to be merged.
- 	 *
- 	 */
- 	<Ts extends readonly unknown[]>(
- 		...Objects: Ts
- 	): DeepMergeHKT<
- 		Ts,
- 		GetDeepMergeMergeFunctionsURIs<PMF>,
- 		DeepMergeBuiltInMetaData
- 	>;
- }
- 
- export interface Generic {
- 	DeepMergeArraysURI: DeepMergeLeafURI;
- }
- 
- import type {
- 	DeepMergeBuiltInMetaData,
- 	DeepMergeHKT,
- 	DeepMergeLeafURI,
- 	DeepMergeMergeFunctionsURIs,
- 	GetDeepMergeMergeFunctionsURIs,
- } from "deepmerge-ts";

🗣️ Summary from Build/v0.0.9 to Build/v0.1.0 in .
diff --git a/.github/FUNDING.yml b/.github/FUNDING.yml
new file mode 100644
index 0000000..22bb4f6
--- /dev/null
+++ b/.github/FUNDING.yml
+ open_collective: playform
diff --git a/.github/workflows/Dependabot.yml b/.github/workflows/Dependabot.yml
index e6091e5..387fece 100644
--- a/.github/workflows/Dependabot.yml
+++ b/.github/workflows/Dependabot.yml
-             - uses: dependabot/fetch-metadata@v2.1.0
+             - uses: dependabot/fetch-metadata@v2.2.0
-             - uses: dependabot/fetch-metadata@v2.1.0
+             - uses: dependabot/fetch-metadata@v2.2.0
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index 5e814e3..7b1e399 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
+             TERRAFORM_TELEMETRY: 0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index c5828c9..df9e87d 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
+             TERRAFORM_TELEMETRY: 0
-             - uses: actions/checkout@v4.1.6
+             - uses: actions/checkout@v4.1.7
-                   version: 8.15.5
+                   version: 9.3.0
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 788002b..86bf8e2 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
+         env:
+             ADBLOCK: true
+             ASTRO_TELEMETRY_DISABLED: 1
+             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
+             AZURE_CORE_COLLECT_TELEMETRY: 0
+             CHOOSENIM_NO_ANALYTICS: 1
+             DIEZ_DO_NOT_TRACK: 1
+             DOTNET_CLI_TELEMETRY_OPTOUT: 1
+             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
+             DO_NOT_TRACK: 1
+             ET_NO_TELEMETRY: 1
+             GATSBY_TELEMETRY_DISABLED: 1
+             GATSBY_TELEMETRY_OPTOUT: 1
+             GATSBY_TELEMETRY_OPT_OUT: 1
+             GRIT_TELEMETRY_DISABLED: 1
+             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
+             HINT_TELEMETRY: off
+             HOMEBREW_NO_ANALYTICS: 1
+             INFLUXD_REPORTING_DISABLED: true
+             ITERATIVE_DO_NOT_TRACK: 1
+             NEXT_TELEMETRY_DEBUG: 1
+             NEXT_TELEMETRY_DISABLED: 1
+             NG_CLI_ANALYTICS: false
+             NUXT_TELEMETRY_DISABLED: 1
+             PIN_DO_NOT_TRACK: 1
+             POWERSHELL_TELEMETRY_OPTOUT: 1
+             SAM_CLI_TELEMETRY: 0
+             STNOUPGRADE: 1
+             STRIPE_CLI_TELEMETRY_OPTOUT: 1
+             TELEMETRY_DISABLED: 1
+             TERRAFORM_TELEMETRY: 0
+ 
-             - uses: actions/checkout@v4.1.6
+             - uses: actions/checkout@v4.1.7
diff --git a/.gitignore b/.gitignore
new file mode 100644
index 0000000..85d6103
--- /dev/null
+++ b/.gitignore
+ /undefined
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index 8c55e25..d35c668 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- community@playform.cloud. All complaints will be reviewed and investigated
+ Community@PlayForm.Cloud. All complaints will be reviewed and investigated
- [homepage]: HTTPS://www.contributor-covenant.org
- [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
- [FAQ]: HTTPS://www.contributor-covenant.org/faq
- [translations]: HTTPS://www.contributor-covenant.org/translations
+ [homepage]: https://www.contributor-covenant.org
+ [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: https://github.com/mozilla/diversity
+ [FAQ]: https://www.contributor-covenant.org/faq
+ [translations]: https://www.contributor-covenant.org/translations
diff --git a/jsconfig.json b/jsconfig.json
new file mode 100644
index 0000000..7cd583e
--- /dev/null
+++ b/jsconfig.json
+ {
+ 	"$schema": "https://json.schemastore.org/jsconfig",
+ 	"compilerOptions": {
+ 		"allowArbitraryExtensions": true,
+ 		"allowImportingTsExtensions": true,
+ 		"allowJs": true,
+ 		"allowSyntheticDefaultImports": true,
+ 		"allowUmdGlobalAccess": false,
+ 		"allowUnreachableCode": false,
+ 		"allowUnusedLabels": false,
+ 		"alwaysStrict": true,
+ 		"assumeChangesOnlyAffectDirectDependencies": true,
+ 		"baseUrl": "./",
+ 		"checkJs": true,
+ 		"declaration": true,
+ 		"disableReferencedProjectLoad": false,
+ 		"emitDeclarationOnly": true,
+ 		"esModuleInterop": true,
+ 		"exactOptionalPropertyTypes": true,
+ 		"forceConsistentCasingInFileNames": true,
+ 		"isolatedModules": true,
+ 		"jsx": "preserve",
+ 		"lib": ["ESNext"],
+ 		"module": "ESNext",
+ 		"moduleResolution": "Bundler",
+ 		"noFallthroughCasesInSwitch": true,
+ 		"noImplicitOverride": true,
+ 		"noImplicitReturns": true,
+ 		"noImplicitThis": true,
+ 		"noPropertyAccessFromIndexSignature": true,
+ 		"noUncheckedIndexedAccess": true,
+ 		"noUnusedLocals": true,
+ 		"noUnusedParameters": true,
+ 		"outDir": "Target",
+ 		"paths": {
+ 			"@Asset/*": ["Source/Asset/*"],
+ 			"@Class/*": ["Source/Class/*"],
+ 			"@Component/*": ["Source/Component/*"],
+ 			"@Context/*": ["Source/Context/*"],
+ 			"@Element/*": ["Source/Element/*"],
+ 			"@Function/*": ["Source/Function/*"],
+ 			"@Interface/*": ["Source/Interface/*"],
+ 			"@Layout/*": ["Source/Layout/*"],
+ 			"@Library/*": ["Source/Library/*"],
+ 			"@Notation/*": ["Source/Notation/*"],
+ 			"@Option/*": ["Source/Option/*"],
+ 			"@Page/*": ["Source/pages/*"],
+ 			"@Script/*": ["Source/Script/*"],
+ 			"@Stylesheet/*": ["Source/Stylesheet/*"],
+ 			"@Target/*": ["Source/Target/*"],
+ 			"@Test/*": ["Source/Test/*"],
+ 			"@Type/*": ["Source/Type/*"],
+ 			"@Variable/*": ["Source/Variable/*"]
+ 		},
+ 		"resolveJsonModule": true,
+ 		"skipLibCheck": true,
+ 		"strict": true,
+ 		"strictBindCallApply": true,
+ 		"strictFunctionTypes": true,
+ 		"strictNullChecks": true,
+ 		"target": "ESNext",
+ 		"types": ["node", "@types/node"],
+ 		"verbatimModuleSyntax": true
+ 	},
+ 	"include": ["Source"],
+ 	"exclude": [
+ 		".git",
+ 		"node_modules",
+ 		"Target",
+ 		"**/.git/**",
+ 		"**/node_modules/**",
+ 		"**/Target/**",
+ 		"**/samples/**"
+ 	],
+ 	"jshint.options": {
+ 		"esversion": 6
+ 	}
+ }
diff --git a/package.json b/package.json
index a82f72a..b487a17 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.9",
+ 	"version": "0.1.0",
- 		"Document": "Document 'Source/**/*.ts'",
+ 		"Run": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts' -W",
- 		"@types/node": "20.12.12",
+ 		"@types/node": "20.14.10",
- 		"deepmerge-ts": "7.0.1",
- 		"esbuild": "0.21.3",
+ 		"deepmerge-ts": "7.0.3",
+ 		"esbuild": "0.23.0",
- 		"typescript": "5.4.5"
+ 		"typescript": "5.5.3"
- 	"peerDependencies": {
- 		"@playform/document": "0.0.6",
+ 	"devDependencies": {
- 	"peerDependenciesMeta": {
- 		"@playform/document": {
- 			"optional": true
- 		},
- 		"ts-node": {
- 			"optional": true
- 		}
- 	},
diff --git a/Source/Class/Build.ts b/Source/Class/Build.ts
index 162be35..87847d6 100644
--- a/Source/Class/Build.ts
+++ b/Source/Class/Build.ts
- 	.argument("<File...>", "📂 File —")
- 	.option("-ES, --ESBuild <File>", "👷🏻‍♀️ ESBuild —")
- 	.option("-TS, --TypeScript <File>", "👨🏻‍💻 TypeScript —", "tsconfig.json")
+ 	.argument("<File...>", "📝 File —")
+ 	.option("-ES, --ESBuild <File>", "📜 ESBuild —")
+ 	.option("-TS, --TypeScript <File>", "📜 TypeScript —", "tsconfig.json")
+ 	.option("-W --Watch", "👁️ Watch —")
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index f39a349..89d087c 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 		for (const __File of await (
- 			await import("fast-glob")
- 		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
+ 		for (const __File of await (await import("fast-glob")).default(
+ 			_File.replaceAll("'", "").replaceAll('"', ""),
+ 		)) {
- 	const Configuration = Merge(
+ 	let Configuration: BuildOptions = Merge(
- 				])
+ 				]),
- 		}
+ 		},
- 	console.log(
- 		await (
- 			await import("esbuild")
- 		).analyzeMetafile(
- 			(
- 				await (
- 					await import("esbuild")
- 				).build(
- 					Option?.ESBuild
+ 	Configuration = Option?.ESBuild
- 								await (
- 									await import("@Function/File.js")
- 								).default(Option.ESBuild)
- 							)
- 						: Configuration
+ 				await (await import("@Function/File.js")).default(
+ 					Option.ESBuild,
+ 				),
- 			)?.metafile ?? "",
+ 		: Configuration;
+ 
+ 	Configuration.plugins?.push({
+ 		name: "TypeScript",
+ 		setup({ onEnd }) {
+ 			onEnd(async () => {
+ 				await Exec(`tsc -p ${Configuration.tsconfig}`);
+ 				await Exec(`tsc-alias -f -p ${Configuration.tsconfig}`);
+ 			});
+ 		},
+ 	});
+ 
+ 	if (Option?.Watch) {
+ 		const Context = await (await import("esbuild")).context(Configuration);
+ 
+ 		await Context.watch();
+ 	} else {
+ 		console.log(
+ 			await (await import("esbuild")).analyzeMetafile(
+ 				(await (await import("esbuild")).build(Configuration))
+ 					?.metafile ?? "",
- 			}
- 		)
+ 				},
+ 			),
- 
- 	Exec(`tsc -p ${Configuration.tsconfig}`);
- 	Exec(`tsc-alias -f -p ${Configuration.tsconfig}`);
+ 	}
+ import type { BuildOptions } from "esbuild";
+ 
- 	(await import("path")).dirname(import.meta.url)
+ 	(await import("path")).dirname(import.meta.url),
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 57cd6c8..6f79df2 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 			Command
+ 			Command,
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 582c9ca..9bb1a75 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- 					(await import("path")).dirname(
- 						(await import("url")).fileURLToPath(import.meta.url)
- 					)
+ 					(
+ 						await import("path")
+ 					).dirname(
+ 						(await import("url")).fileURLToPath(import.meta.url),
+ 					),
- 			"."
+ 			".",
- 				(await import("typescript")).default.createCompilerHost(Option)
+ 				(await import("typescript")).default.createCompilerHost(Option),
- 		await (
- 			await import("fs/promises")
- 		).writeFile(
+ 		await (await import("fs/promises")).writeFile(
- 				Option
- 			)
+ 				Option,
+ 			),
- 			(await import("url"))
+ 			(
+ 				await import("url")
+ 			)
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 884a6ac..b44f0ac 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- 		).toString()
+ 		).toString(),
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
index 59cc654..e32d153 100644
--- a/Source/Interface/Build.ts
+++ b/Source/Interface/Build.ts
- 		}
+ 			Watch?: boolean;
+ 		},
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index dae46bd..24b86d3 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 		Echo?: false | ((Return: any) => void)
+ 		Echo?: false | ((Return: any) => void),
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
index ee02b93..ed62997 100644
--- a/Source/Variable/ESBuild.ts
+++ b/Source/Variable/ESBuild.ts
- 							? await (
- 									await import("fs/promises")
- 								).rm(outdir, {
+ 							? await (await import("fs/promises")).rm(outdir, {

🗣️ Summary from Build/v0.1.0 to Build/v0.1.1 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index df9e87d..9f42565 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/upload-artifact@v4.3.3
+             - uses: actions/upload-artifact@v4.3.4
diff --git a/package.json b/package.json
index b487a17..ca24471 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.0",
+ 	"version": "0.1.1",
- 		"Run": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts' -W",
+ 		"Run": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts' --Watch",
diff --git a/README.md b/README.md
index e08c5b8..5f5b2ee 100644
--- a/README.md
+++ b/README.md
- Build all your TypeScript files into JavaScript.
+ Builds all your TypeScript files into JavaScript.
+ Help:
+ 
+ ```sh
+ Usage: Build [options] <File...>
+ 
+ 🌀 Build —
+ 
+ Arguments:
+   File                      📝 File —
+ 
+ Options:
+   -V, --version             output the version number
+   -ES, --ESBuild <File>     📜 ESBuild —
+   -TS, --TypeScript <File>  📜 TypeScript — (default: "tsconfig.json")
+   -W --Watch                👁️ Watch —
+   -h, --help                display help for command
+ ```
+ 
+ 		"Run": "Build 'Source/**/*.ts' --Watch",
- ### ESBuild Configuration
+ ### 📜 ESBuild Configuration
- ### TypeScript Configuration
+ ### 📜 TypeScript Configuration
+ ### JSConfig Configuration (optional)
+ 
+ `jsconfig.json`
+ 
+ ```json
+ {
+ 	"compilerOptions": {
+ 		"outDir": "Target"
+ 	},
+ 	"extends": "@playform/build/jsconfig",
+ 	"include": ["Source"]
+ }
+ ```
+ 

🗣️ Summary from Build/v0.1.1 to Build/v0.1.2 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 9f42565..216f5b7 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/setup-node@v4.0.2
+             - uses: actions/setup-node@v4.0.3
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 86bf8e2..a3c4811 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/setup-node@v4.0.2
+             - uses: actions/setup-node@v4.0.3
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index d35c668..01e92b5 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
+ [homepage]: HTTPS://www.contributor-covenant.org
+ [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
+ [FAQ]: HTTPS://www.contributor-covenant.org/faq
+ [translations]: HTTPS://www.contributor-covenant.org/translations
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index c749fbe..c390eae 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
- community@playform.cloud. All complaints will be reviewed and investigated
+ Community@PlayForm.Cloud. All complaints will be reviewed and investigated
diff --git a/package.json b/package.json
index ca24471..985eca4 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.1",
+ 	"version": "0.1.2",
- 		"@types/node": "20.14.10",
+ 		"@types/node": "20.14.12",
- 		"deepmerge-ts": "7.0.3",
+ 		"deepmerge-ts": "7.1.0",
- 		"typescript": "5.5.3"
+ 		"typescript": "*"
- 		"ts-node": "10.9.2"
+ 		"ts-node": "11.0.0-beta.1"
+ 		"provenance": true,
diff --git a/README.md b/README.md
index 5f5b2ee..f226e1e 100644
--- a/README.md
+++ b/README.md
- or in a `package.json` file:
+ Or in a `package.json` file:
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 6f79df2..966d954 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Interface>
+ 	...[
+ 		Command,
+ 		Echo = async (Return) => console.log(Return),
+ 	]: Parameters<Interface>
- 			stdout?.on("data", (Data) => Echo(Data));
- 			stderr?.on("data", (Data) => Echo(Data));
+ 			stdout?.on("data", async (Data) => await Echo(Data.trim()));
+ 			stderr?.on("data", async (Data) => await Echo(Data.trim(), true));
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 24b86d3..a8de39c 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 		Echo?: false | ((Return: any) => void),
+ 		Echo?: false | ((Return: any, _Error?: boolean) => Promise<void>),

🗣️ Summary from Build/v0.1.2 to TypeScriptESBuild/v0.4.10 in .
diff --git a/.github/FUNDING.yml b/.github/FUNDING.yml
deleted file mode 100644
index 22bb4f6..0000000
--- a/.github/FUNDING.yml
+++ /dev/null
- open_collective: playform
diff --git a/.github/workflows/Dependabot.yml b/.github/workflows/Dependabot.yml
index 387fece..cfa5b96 100644
--- a/.github/workflows/Dependabot.yml
+++ b/.github/workflows/Dependabot.yml
-             - uses: dependabot/fetch-metadata@v2.2.0
+             - uses: dependabot/fetch-metadata@v2.0.0
-             - uses: dependabot/fetch-metadata@v2.2.0
+             - uses: dependabot/fetch-metadata@v2.0.0
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index 7b1e399..09e8b75 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
-             TERRAFORM_TELEMETRY: 0
-             - uses: pozil/auto-assign-issue@v2.0.0
+             - uses: pozil/auto-assign-issue@v1.13.0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 216f5b7..2fd4da9 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             TERRAFORM_TELEMETRY: 0
-             - uses: actions/checkout@v4.1.7
+             - uses: actions/checkout@v4.1.2
-             - uses: pnpm/action-setup@v4.0.0
+             - uses: pnpm/action-setup@v3.0.0
-                   version: 9.3.0
+                   version: 8.15.5
-             - uses: actions/setup-node@v4.0.3
+             - uses: actions/setup-node@v4.0.2
-             - uses: actions/upload-artifact@v4.3.4
+             - uses: actions/upload-artifact@v4.3.1
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index a3c4811..b0332f1 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-         env:
-             ADBLOCK: true
-             ASTRO_TELEMETRY_DISABLED: 1
-             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
-             AZURE_CORE_COLLECT_TELEMETRY: 0
-             CHOOSENIM_NO_ANALYTICS: 1
-             DIEZ_DO_NOT_TRACK: 1
-             DOTNET_CLI_TELEMETRY_OPTOUT: 1
-             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
-             DO_NOT_TRACK: 1
-             ET_NO_TELEMETRY: 1
-             GATSBY_TELEMETRY_DISABLED: 1
-             GATSBY_TELEMETRY_OPTOUT: 1
-             GATSBY_TELEMETRY_OPT_OUT: 1
-             GRIT_TELEMETRY_DISABLED: 1
-             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
-             HINT_TELEMETRY: off
-             HOMEBREW_NO_ANALYTICS: 1
-             INFLUXD_REPORTING_DISABLED: true
-             ITERATIVE_DO_NOT_TRACK: 1
-             NEXT_TELEMETRY_DEBUG: 1
-             NEXT_TELEMETRY_DISABLED: 1
-             NG_CLI_ANALYTICS: false
-             NUXT_TELEMETRY_DISABLED: 1
-             PIN_DO_NOT_TRACK: 1
-             POWERSHELL_TELEMETRY_OPTOUT: 1
-             SAM_CLI_TELEMETRY: 0
-             STNOUPGRADE: 1
-             STRIPE_CLI_TELEMETRY_OPTOUT: 1
-             TELEMETRY_DISABLED: 1
-             TERRAFORM_TELEMETRY: 0
- 
-             - uses: actions/checkout@v4.1.7
+             - uses: actions/checkout@v4.1.2
-             - uses: actions/setup-node@v4.0.3
+             - uses: actions/setup-node@v4.0.2
-                   npm publish --legacy-peer-deps --provenance --ignore-scripts
+                   npm install --legacy-peer-deps
+                   npm publish --legacy-peer-deps --provenance
diff --git a/.gitignore b/.gitignore
deleted file mode 100644
index 85d6103..0000000
--- a/.gitignore
+++ /dev/null
- /undefined
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index 01e92b5..13ffed8 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- Community@PlayForm.Cloud. All complaints will be reviewed and investigated
+ community@playform.cloud. All complaints will be reviewed and investigated
- [homepage]: HTTPS://www.contributor-covenant.org
- [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
- [FAQ]: HTTPS://www.contributor-covenant.org/faq
- [translations]: HTTPS://www.contributor-covenant.org/translations
+ [homepage]: https://www.contributor-covenant.org
+ [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: https://github.com/mozilla/diversity
+ [FAQ]: https://www.contributor-covenant.org/faq
+ [translations]: https://www.contributor-covenant.org/translations
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index c390eae..4700843 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
- Community@PlayForm.Cloud. All complaints will be reviewed and investigated
+ community@playform.cloud. All complaints will be reviewed and investigated
- [homepage]: HTTPS://www.contributor-covenant.org
- [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
- [FAQ]: HTTPS://www.contributor-covenant.org/faq
- [translations]: HTTPS://www.contributor-covenant.org/translations
+ [homepage]: https://www.contributor-covenant.org
+ [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: https://github.com/mozilla/diversity
+ [FAQ]: https://www.contributor-covenant.org/faq
+ [translations]: https://www.contributor-covenant.org/translations
diff --git a/jsconfig.json b/jsconfig.json
deleted file mode 100644
index 7cd583e..0000000
--- a/jsconfig.json
+++ /dev/null
- {
- 	"$schema": "https://json.schemastore.org/jsconfig",
- 	"compilerOptions": {
- 		"allowArbitraryExtensions": true,
- 		"allowImportingTsExtensions": true,
- 		"allowJs": true,
- 		"allowSyntheticDefaultImports": true,
- 		"allowUmdGlobalAccess": false,
- 		"allowUnreachableCode": false,
- 		"allowUnusedLabels": false,
- 		"alwaysStrict": true,
- 		"assumeChangesOnlyAffectDirectDependencies": true,
- 		"baseUrl": "./",
- 		"checkJs": true,
- 		"declaration": true,
- 		"disableReferencedProjectLoad": false,
- 		"emitDeclarationOnly": true,
- 		"esModuleInterop": true,
- 		"exactOptionalPropertyTypes": true,
- 		"forceConsistentCasingInFileNames": true,
- 		"isolatedModules": true,
- 		"jsx": "preserve",
- 		"lib": ["ESNext"],
- 		"module": "ESNext",
- 		"moduleResolution": "Bundler",
- 		"noFallthroughCasesInSwitch": true,
- 		"noImplicitOverride": true,
- 		"noImplicitReturns": true,
- 		"noImplicitThis": true,
- 		"noPropertyAccessFromIndexSignature": true,
- 		"noUncheckedIndexedAccess": true,
- 		"noUnusedLocals": true,
- 		"noUnusedParameters": true,
- 		"outDir": "Target",
- 		"paths": {
- 			"@Asset/*": ["Source/Asset/*"],
- 			"@Class/*": ["Source/Class/*"],
- 			"@Component/*": ["Source/Component/*"],
- 			"@Context/*": ["Source/Context/*"],
- 			"@Element/*": ["Source/Element/*"],
- 			"@Function/*": ["Source/Function/*"],
- 			"@Interface/*": ["Source/Interface/*"],
- 			"@Layout/*": ["Source/Layout/*"],
- 			"@Library/*": ["Source/Library/*"],
- 			"@Notation/*": ["Source/Notation/*"],
- 			"@Option/*": ["Source/Option/*"],
- 			"@Page/*": ["Source/pages/*"],
- 			"@Script/*": ["Source/Script/*"],
- 			"@Stylesheet/*": ["Source/Stylesheet/*"],
- 			"@Target/*": ["Source/Target/*"],
- 			"@Test/*": ["Source/Test/*"],
- 			"@Type/*": ["Source/Type/*"],
- 			"@Variable/*": ["Source/Variable/*"]
- 		},
- 		"resolveJsonModule": true,
- 		"skipLibCheck": true,
- 		"strict": true,
- 		"strictBindCallApply": true,
- 		"strictFunctionTypes": true,
- 		"strictNullChecks": true,
- 		"target": "ESNext",
- 		"types": ["node", "@types/node"],
- 		"verbatimModuleSyntax": true
- 	},
- 	"include": ["Source"],
- 	"exclude": [
- 		".git",
- 		"node_modules",
- 		"Target",
- 		"**/.git/**",
- 		"**/node_modules/**",
- 		"**/Target/**",
- 		"**/samples/**"
- 	],
- 	"jshint.options": {
- 		"esversion": 6
- 	}
- }
diff --git a/LICENSE b/LICENSE
index f236d76..cca5808 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2023-2024 PlayForm
+ Copyright (c) 2023-2024 Playform
diff --git a/package.json b/package.json
index 985eca4..0ff9afd 100644
--- a/package.json
+++ b/package.json
- 	"name": "@playform/build",
- 	"version": "0.1.2",
+ 	"name": "typescript-esbuild",
+ 	"version": "0.4.10",
- 	"description": "🌀 Build —",
- 	"keywords": [
- 		"javascript",
- 		"typescript",
- 		"esbuild",
- 		"playform"
- 	],
- 	"homepage": "HTTPS://GitHub.Com/PlayForm/Build#ReadMe",
+ 	"description": "🌀 ESBuild Wrapper.",
+ 	"keywords": ["javascript", "typescript", "esbuild"],
+ 	"homepage": "https://github.com/Playform/TypeScriptESBuild#readme",
- 		"url": "HTTPS://GitHub.Com/PlayForm/Build/issues"
+ 		"url": "https://github.com/Playform/TypeScriptESBuild/issues"
- 		"url": "git+https://github.com/PlayForm/Build.git"
+ 		"url": "git+https://github.com/Playform/TypeScriptESBuild.git"
- 		"name": "🖋️ Source — 👐🏻 Open —",
- 		"email": "Source/Open@PlayForm.Cloud",
- 		"url": "HTTPS://PlayForm.Cloud"
+ 		"name": "Playform",
+ 		"email": "hello@playform.cloud",
+ 		"url": "https://playform.cloud"
- 	"main": "./Target/Class/Build.js",
- 	"types": "./Target/Class/Build.d.ts",
+ 	"main": "./Target/Class/TypeScriptESBuild.js",
+ 	"types": "./Target/Class/TypeScriptESBuild.d.ts",
- 		"Build": "Target/Class/Build.js"
+ 		"TypeScriptESBuild": "Target/Class/TypeScriptESBuild.js"
- 		"Run": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts' --Watch",
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts'"
+ 		"Document": "TypeScriptDocument 'Source/**/*.ts'",
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts'"
- 		"@types/node": "20.14.12",
- 		"commander": "12.1.0",
- 		"deepmerge-ts": "7.1.0",
- 		"esbuild": "0.23.0",
+ 		"@types/node": "20.12.2",
+ 		"commander": "12.0.0",
+ 		"deepmerge-ts": "5.1.0",
+ 		"esbuild": "0.20.2",
+ 		"esbuild-plugin-copy": "2.1.1",
- 		"tsc-alias": "1.8.10",
- 		"typescript": "*"
+ 		"typescript": "5.4.3"
- 		"ts-node": "11.0.0-beta.1"
+ 		"ts-node": "10.9.2"
+ 	},
+ 	"peerDependencies": {
+ 		"typescript-document": "0.0.7"
- 		"provenance": true,
diff --git a/README.md b/README.md
index f226e1e..e9a550a 100644
--- a/README.md
+++ b/README.md
- # 🌀 [Build] —
+ # 🌀 [TypeScriptESBuild]
- Builds all your TypeScript files into JavaScript.
+ Build all your TypeScript files into JavaScript.
- npm install -D -E @playform/build
+ npm install -D -E typescript-esbuild
- npx @playform/build 'Source/**/*.ts'
+ npx typescript-esbuild 'Source/**/*.ts'
- Help:
- 
- ```sh
- Usage: Build [options] <File...>
- 
- 🌀 Build —
- 
- Arguments:
-   File                      📝 File —
- 
- Options:
-   -V, --version             output the version number
-   -ES, --ESBuild <File>     📜 ESBuild —
-   -TS, --TypeScript <File>  📜 TypeScript — (default: "tsconfig.json")
-   -W --Watch                👁️ Watch —
-   -h, --help                display help for command
- ```
- 
- Or in a `package.json` file:
+ or in a `package.json` file:
- 		"Run": "Build 'Source/**/*.ts' --Watch",
- 		"prepublishOnly": "Build 'Source/**/*.ts'"
+ 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
- ### 📜 ESBuild Configuration
+ ### ESBuild Configuration
- 		"prepublishOnly": "Build 'Source/**/*.ts' --ESBuild ESBuild.ts"
+ 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es ESBuild.ts"
- ### 📜 TypeScript Configuration
+ ### TypeScript Configuration
- 	"extends": "@playform/build/tsconfig",
- 	"include": ["Source"]
- }
- ```
- 
- ### JSConfig Configuration (optional)
- 
- `jsconfig.json`
- 
- ```json
- {
- 	"compilerOptions": {
- 		"outDir": "Target"
- 	},
- 	"extends": "@playform/build/jsconfig",
+ 	"extends": "typescript-esbuild/Target/Notation/TypeScript",
- [ESBuild]: HTTPS://NPMJS.Org/esbuild
- [TypeDoc]: HTTPS://NPMJS.Org/typedoc
- [Build]: HTTPS://NPMJS.Org/@playform/build
+ [ESBuild]: https://npmjs.org/esbuild
+ [TypeDoc]: https://npmjs.org/typedoc
+ [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
diff --git a/Source/Class/Build.ts b/Source/Class/Build.ts
deleted file mode 100644
index 87847d6..0000000
--- a/Source/Class/Build.ts
+++ /dev/null
- #!/usr/bin/env node
- 
- /**
-  * @module Build
-  *
-  */
- export default new (await import("commander")).Command()
- 	.name("Build")
- 	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
- 	.description("🌀 Build —")
- 	.argument("<File...>", "📝 File —")
- 	.option("-ES, --ESBuild <File>", "📜 ESBuild —")
- 	.option("-TS, --TypeScript <File>", "📜 TypeScript —", "tsconfig.json")
- 	.option("-W --Watch", "👁️ Watch —")
- 	.action((await import("../Function/Build.js")).default)
- 	.parse();
diff --git a/Source/Class/TypeScriptESBuild.ts b/Source/Class/TypeScriptESBuild.ts
new file mode 100644
index 0000000..8ef9c08
--- /dev/null
+++ b/Source/Class/TypeScriptESBuild.ts
+ #!/usr/bin/env node
+ 
+ /**
+  * @module TypeScriptESBuild
+  *
+  */
+ export default new (await import("commander")).Command()
+ 	.name("TypeScriptESBuild")
+ 	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
+ 	.description("🌀 Build TypeScript.")
+ 	.argument("<File...>", "Build File.")
+ 	.option("-ES, --ESBuild <File>", "ESBuild Configuration.")
+ 	.option("-TS, --TypeScript <File>", "TypeScript Configuration.")
+ 	.action((await import("../Function/Build.js")).default)
+ 	.parse();
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index 89d087c..52074eb 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- export default (async (...[File, Option]: Parameters<Interface>) => {
+ export default (async (...[File, Option]: Parameters<Type>) => {
- 	let Configuration: BuildOptions = Merge(
+ 	const Configuration = Merge(
- 			tsconfig: Option?.TypeScript ?? "tsconfig.json",
- 	Configuration = Option?.ESBuild
+ 	console.log(
+ 		await (await import("esbuild")).analyzeMetafile(
+ 			(
+ 				await (
+ 					await import("esbuild")
+ 				).build(
+ 					Option?.ESBuild
- 				await (await import("@Function/File.js")).default(
- 					Option.ESBuild,
- 				),
+ 								await (
+ 									await import("../Function/File.js")
+ 								).default(Option.ESBuild),
- 		: Configuration;
- 
- 	Configuration.plugins?.push({
- 		name: "TypeScript",
- 		setup({ onEnd }) {
- 			onEnd(async () => {
- 				await Exec(`tsc -p ${Configuration.tsconfig}`);
- 				await Exec(`tsc-alias -f -p ${Configuration.tsconfig}`);
- 			});
- 		},
- 	});
- 
- 	if (Option?.Watch) {
- 		const Context = await (await import("esbuild")).context(Configuration);
- 
- 		await Context.watch();
- 	} else {
- 		console.log(
- 			await (await import("esbuild")).analyzeMetafile(
- 				(await (await import("esbuild")).build(Configuration))
- 					?.metafile ?? "",
+ 						: Configuration,
+ 				)
+ 			)?.metafile ?? "",
- 	}
- }) satisfies Interface as Interface;
- import type { BuildOptions } from "esbuild";
+ 	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
+ }) satisfies Type as Type;
- import type Interface from "../Interface/Build.js";
+ import type Type from "../Interface/Build.js";
+ export const { resolve } = await import("path");
+ 
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 966d954..8f53f41 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 	...[
- 		Command,
- 		Echo = async (Return) => console.log(Return),
- 	]: Parameters<Interface>
+ 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Type>
- 			stdout?.on("data", async (Data) => await Echo(Data.trim()));
- 			stderr?.on("data", async (Data) => await Echo(Data.trim(), true));
+ 			stdout?.on("data", (Data) => Echo(Data));
+ 			stderr?.on("data", (Data) => Echo(Data));
- }) satisfies Interface as Interface;
+ }) satisfies Type as Type;
- import type Interface from "../Interface/Exec.js";
+ import type Type from "../Interface/Exec.js";
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 9bb1a75..212ba4a 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- export default (async (...[Path]: Parameters<Interface>) => {
+ export default (async (...[Path]: Parameters<Type>) => {
- 		const { options: Option } = (
+ 		const { options } = (
- 					await import("../Function/JSON.js")
+ 					await import("./JSON.js")
- 					"../../tsconfig.json",
+ 					"../Notation/TypeScript.json",
- 				Option,
- 				(await import("typescript")).default.createCompilerHost(Option),
+ 				options,
+ 				(await import("typescript")).default.createCompilerHost(
+ 					options,
+ 				),
- 				Option,
+ 				options,
- }) satisfies Interface as Interface;
+ }) satisfies Type as Type;
- import type Interface from "../Interface/File.js";
+ import type Type from "../Interface/File.js";
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index b44f0ac..9f75935 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- export default (async (...[File, From]: Parameters<Interface>) =>
+ export default (async (...[File, From]: Parameters<Type>) =>
- 	)) satisfies Interface as Interface;
+ 	)) satisfies Type as Type;
- import type Interface from "../Interface/JSON.js";
+ import type Type from "../Interface/JSON.js";
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
index adc696d..8586054 100644
--- a/Source/Function/Merge.ts
+++ b/Source/Function/Merge.ts
- export default (await import("deepmerge-ts")).deepmergeCustom({
+ export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
- });
+ }) satisfies Type<Generic> as Type<Generic>;
+ 
+ import type Type from "../Interface/Merge.js";
+ import type { Generic } from "../Interface/Merge.js";
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
index e32d153..01dce34 100644
--- a/Source/Interface/Build.ts
+++ b/Source/Interface/Build.ts
- export default interface Interface {
+ export default interface Type {
- 			Watch?: boolean;
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index a8de39c..ff2ec1b 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- export default interface Interface {
+ export default interface Type {
- 		Echo?: false | ((Return: any, _Error?: boolean) => Promise<void>),
+ 		Echo?: false | ((Return: any) => void),
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
index 0de0809..607aee2 100644
--- a/Source/Interface/File.ts
+++ b/Source/Interface/File.ts
- export default interface Interface {
+ export default interface Type {
diff --git a/Source/Interface/JSON.ts b/Source/Interface/JSON.ts
index 3b5f8df..9447d0c 100644
--- a/Source/Interface/JSON.ts
+++ b/Source/Interface/JSON.ts
- export default interface Interface {
+ export default interface Type {
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
new file mode 100644
index 0000000..5e66d23
--- /dev/null
+++ b/Source/Interface/Merge.ts
+ /**
+  * @module Merge
+  *
+  * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeMergeFunctionsURIs.
+  *
+  * @template PMF - A type parameter representing Partial<DeepMergeMergeFunctionsURIs>.
+  *
+  */
+ export default interface Type<
+ 	PMF extends Partial<DeepMergeMergeFunctionsURIs>,
+ > {
+ 	/**
+ 	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
+ 	 *
+ 	 * @param ...Objects - An arbitrary number of objects to be merged.
+ 	 *
+ 	 */
+ 	<Ts extends readonly unknown[]>(
+ 		...Objects: Ts
+ 	): DeepMergeHKT<
+ 		Ts,
+ 		GetDeepMergeMergeFunctionsURIs<PMF>,
+ 		DeepMergeBuiltInMetaData
+ 	>;
+ }
+ 
+ export interface Generic {
+ 	DeepMergeArraysURI: DeepMergeLeafURI;
+ }
+ 
+ import type {
+ 	DeepMergeBuiltInMetaData,
+ 	DeepMergeHKT,
+ 	DeepMergeLeafURI,
+ 	DeepMergeMergeFunctionsURIs,
+ 	GetDeepMergeMergeFunctionsURIs,
+ } from "deepmerge-ts";
diff --git a/Source/Notation/TypeScript.json b/Source/Notation/TypeScript.json
new file mode 100644
index 0000000..80ad3c6
--- /dev/null
+++ b/Source/Notation/TypeScript.json
+ {
+ 	"$schema": "https://json.schemastore.org/tsconfig",
+ 	"compilerOptions": {
+ 		"allowArbitraryExtensions": true,
+ 		"allowImportingTsExtensions": true,
+ 		"allowJs": true,
+ 		"allowSyntheticDefaultImports": true,
+ 		"allowUmdGlobalAccess": false,
+ 		"allowUnreachableCode": false,
+ 		"allowUnusedLabels": false,
+ 		"alwaysStrict": true,
+ 		"assumeChangesOnlyAffectDirectDependencies": true,
+ 		"baseUrl": "./",
+ 		"checkJs": true,
+ 		"declaration": true,
+ 		"disableReferencedProjectLoad": false,
+ 		"emitDeclarationOnly": true,
+ 		"esModuleInterop": true,
+ 		"exactOptionalPropertyTypes": true,
+ 		"forceConsistentCasingInFileNames": true,
+ 		"isolatedModules": true,
+ 		"jsx": "preserve",
+ 		"lib": ["ESNext"],
+ 		"module": "ESNext",
+ 		"moduleResolution": "Bundler",
+ 		"noFallthroughCasesInSwitch": true,
+ 		"noImplicitOverride": true,
+ 		"noImplicitReturns": true,
+ 		"noPropertyAccessFromIndexSignature": true,
+ 		"noUncheckedIndexedAccess": true,
+ 		"noUnusedLocals": true,
+ 		"noUnusedParameters": true,
+ 		"resolveJsonModule": true,
+ 		"skipLibCheck": true,
+ 		"strict": true,
+ 		"strictBindCallApply": true,
+ 		"strictFunctionTypes": true,
+ 		"strictNullChecks": true,
+ 		"target": "ESNext",
+ 		"types": ["node", "@types/node"],
+ 		"verbatimModuleSyntax": true,
+ 		"noImplicitThis": true,
+ 		"paths": {
+ 			"@Asset/*": ["Source/Asset/*"],
+ 			"@Class/*": ["Source/Class/*"],
+ 			"@Component/*": ["Source/Component/*"],
+ 			"@Context/*": ["Source/Context/*"],
+ 			"@Element/*": ["Source/Element/*"],
+ 			"@Function/*": ["Source/Function/*"],
+ 			"@Interface/*": ["Source/Interface/*"],
+ 			"@Layout/*": ["Source/Layout/*"],
+ 			"@Library/*": ["Source/Library/*"],
+ 			"@Notation/*": ["Source/Notation/*"],
+ 			"@Option/*": ["Source/Option/*"],
+ 			"@Page/*": ["Source/pages/*"],
+ 			"@Script/*": ["Source/Script/*"],
+ 			"@Stylesheet/*": ["Source/Stylesheet/*"],
+ 			"@Type/*": ["Source/Type/*"],
+ 			"@Variable/*": ["Source/Variable/*"]
+ 		}
+ 	},
+ 	"ts-node": {
+ 		"esm": true
+ 	}
+ }
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
index ed62997..c09869e 100644
--- a/Source/Variable/ESBuild.ts
+++ b/Source/Variable/ESBuild.ts
- 	logLevel: "debug",
- 	tsconfig: "tsconfig.json",
+ 	logLevel: "debug",
+ 		(await import("esbuild-plugin-copy")).copy({
+ 			resolveFrom: "out",
+ 			assets: [
+ 				{
+ 					from: "./Source/Notation/TypeScript.json",
+ 					to: "./Notation/",
+ 				},
+ 			],
+ 		}),
diff --git a/tsconfig.json b/tsconfig.json
index d03c6ae..12e0400 100644
--- a/tsconfig.json
+++ b/tsconfig.json
- 	"$schema": "https://json.schemastore.org/tsconfig",
- 		"allowArbitraryExtensions": true,
- 		"allowImportingTsExtensions": true,
- 		"allowJs": true,
- 		"allowSyntheticDefaultImports": true,
- 		"allowUmdGlobalAccess": false,
- 		"allowUnreachableCode": false,
- 		"allowUnusedLabels": false,
- 		"alwaysStrict": true,
- 		"assumeChangesOnlyAffectDirectDependencies": true,
- 		"baseUrl": "./",
- 		"checkJs": true,
- 		"declaration": true,
- 		"disableReferencedProjectLoad": false,
- 		"emitDeclarationOnly": true,
- 		"esModuleInterop": true,
- 		"exactOptionalPropertyTypes": true,
- 		"forceConsistentCasingInFileNames": true,
- 		"isolatedModules": true,
- 		"jsx": "preserve",
- 		"lib": ["ESNext"],
- 		"module": "ESNext",
- 		"moduleResolution": "Bundler",
- 		"noFallthroughCasesInSwitch": true,
- 		"noImplicitOverride": true,
- 		"noImplicitReturns": true,
- 		"noImplicitThis": true,
- 		"noPropertyAccessFromIndexSignature": true,
- 		"noUncheckedIndexedAccess": true,
- 		"noUnusedLocals": true,
- 		"noUnusedParameters": true,
- 		"outDir": "Target",
- 		"paths": {
- 			"@Asset/*": ["Source/Asset/*"],
- 			"@Class/*": ["Source/Class/*"],
- 			"@Component/*": ["Source/Component/*"],
- 			"@Context/*": ["Source/Context/*"],
- 			"@Element/*": ["Source/Element/*"],
- 			"@Function/*": ["Source/Function/*"],
- 			"@Interface/*": ["Source/Interface/*"],
- 			"@Layout/*": ["Source/Layout/*"],
- 			"@Library/*": ["Source/Library/*"],
- 			"@Notation/*": ["Source/Notation/*"],
- 			"@Option/*": ["Source/Option/*"],
- 			"@Page/*": ["Source/pages/*"],
- 			"@Script/*": ["Source/Script/*"],
- 			"@Stylesheet/*": ["Source/Stylesheet/*"],
- 			"@Target/*": ["Source/Target/*"],
- 			"@Test/*": ["Source/Test/*"],
- 			"@Type/*": ["Source/Type/*"],
- 			"@Variable/*": ["Source/Variable/*"]
+ 		"outDir": "Target"
- 		"resolveJsonModule": true,
- 		"skipLibCheck": true,
- 		"strict": true,
- 		"strictBindCallApply": true,
- 		"strictFunctionTypes": true,
- 		"strictNullChecks": true,
- 		"target": "ESNext",
- 		"types": ["node", "@types/node"],
- 		"verbatimModuleSyntax": true
- 	},
- 	"include": ["Source"],
- 	"ts-node": {
- 		"esm": true
- 	}
+ 	"extends": "./Source/Notation/TypeScript",
+ 	"include": ["Source"]

🗣️ Summary from TypeScriptESBuild/v0.4.10 to syclone@v0.1.5 in .
diff --git a/.github/dependabot.yml b/.github/dependabot.yml
index 575fdde..4528898 100644
--- a/.github/dependabot.yml
+++ b/.github/dependabot.yml
- enable-beta-ecosystems: true
-       directory: "/"
+       directory: "/NPM"
+       schedule:
+           interval: "daily"
+       versioning-strategy: increase
+ 
+     - package-ecosystem: "npm"
+       directory: "/website"
diff --git a/.github/workflows/codeql.yml b/.github/workflows/codeql.yml
new file mode 100644
index 0000000..8cedfe5
--- /dev/null
+++ b/.github/workflows/codeql.yml
+ name: CodeQL
+ 
+ concurrency:
+     group: CodeQL-${{ github.workflow }}-${{ github.ref }}
+     cancel-in-progress: true
+ 
+ permissions:
+     security-events: write
+     contents: write
+     pull-requests: write
+ 
+ on:
+     workflow_dispatch:
+     push:
+         branches: [main]
+     pull_request:
+         branches: [main]
+     workflow_call:
+ 
+ jobs:
+     CodeQL:
+         runs-on: ubuntu-latest
+ 
+         env:
+             ADBLOCK: true
+             TELEMETRY_DISABLED: 1
+             ASTRO_TELEMETRY_DISABLED: 1
+             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
+             AZURE_CORE_COLLECT_TELEMETRY: 0
+             CHOOSENIM_NO_ANALYTICS: 1
+             DIEZ_DO_NOT_TRACK: 1
+             DO_NOT_TRACK: 1
+             DOTNET_CLI_TELEMETRY_OPTOUT: 1
+             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
+             ET_NO_TELEMETRY: 1
+             GATSBY_TELEMETRY_DISABLED: 1
+             GATSBY_TELEMETRY_OPT_OUT: 1
+             GATSBY_TELEMETRY_OPTOUT: 1
+             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
+             HINT_TELEMETRY: off
+             HOMEBREW_NO_ANALYTICS: 1
+             INFLUXD_REPORTING_DISABLED: true
+             ITERATIVE_DO_NOT_TRACK: 1
+             NEXT_TELEMETRY_DEBUG: 1
+             NEXT_TELEMETRY_DISABLED: 1
+             NG_CLI_ANALYTICS: false
+             NUXT_TELEMETRY_DISABLED: 1
+             PIN_DO_NOT_TRACK: 1
+             POWERSHELL_TELEMETRY_OPTOUT: 1
+             SAM_CLI_TELEMETRY: 0
+             STNOUPGRADE: 1
+             STRIPE_CLI_TELEMETRY_OPTOUT: 1
+ 
+         steps:
+             - uses: actions/checkout@v3.5.3
+ 
+             - uses: github/codeql-action/init@v2.21.3
+               with:
+                   languages: javascript
+ 
+             - name: Perform CodeQL Analysis
+               uses: github/codeql-action/analyze@v2.21.3
+               with:
+                   category: "/language:javascript"
diff --git a/.github/workflows/Dependabot.yml b/.github/workflows/Dependabot.yml
index cfa5b96..819f8a1 100644
--- a/.github/workflows/Dependabot.yml
+++ b/.github/workflows/Dependabot.yml
-             - uses: dependabot/fetch-metadata@v2.0.0
+             - uses: dependabot/fetch-metadata@v1.6.0
-             - uses: dependabot/fetch-metadata@v2.0.0
+             - uses: dependabot/fetch-metadata@v1.6.0
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
deleted file mode 100644
index 09e8b75..0000000
--- a/.github/workflows/GitHub.yml
+++ /dev/null
- name: GitHub
- 
- concurrency:
-     group: GitHub-${{ github.workflow }}-${{ github.ref }}
-     cancel-in-progress: true
- 
- permissions:
-     issues: write
-     pull-requests: write
- 
- on:
-     issues:
-         types: [opened]
-     pull_request:
-         types: [opened]
- 
- jobs:
-     Assign:
-         runs-on: ubuntu-latest
- 
-         env:
-             ADBLOCK: true
-             ASTRO_TELEMETRY_DISABLED: 1
-             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
-             AZURE_CORE_COLLECT_TELEMETRY: 0
-             CHOOSENIM_NO_ANALYTICS: 1
-             DIEZ_DO_NOT_TRACK: 1
-             DOTNET_CLI_TELEMETRY_OPTOUT: 1
-             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
-             DO_NOT_TRACK: 1
-             ET_NO_TELEMETRY: 1
-             GATSBY_TELEMETRY_DISABLED: 1
-             GATSBY_TELEMETRY_OPTOUT: 1
-             GATSBY_TELEMETRY_OPT_OUT: 1
-             GRIT_TELEMETRY_DISABLED: 1
-             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
-             HINT_TELEMETRY: off
-             HOMEBREW_NO_ANALYTICS: 1
-             INFLUXD_REPORTING_DISABLED: true
-             ITERATIVE_DO_NOT_TRACK: 1
-             NEXT_TELEMETRY_DEBUG: 1
-             NEXT_TELEMETRY_DISABLED: 1
-             NG_CLI_ANALYTICS: false
-             NUXT_TELEMETRY_DISABLED: 1
-             PIN_DO_NOT_TRACK: 1
-             POWERSHELL_TELEMETRY_OPTOUT: 1
-             SAM_CLI_TELEMETRY: 0
-             STNOUPGRADE: 1
-             STRIPE_CLI_TELEMETRY_OPTOUT: 1
-             TELEMETRY_DISABLED: 1
- 
-         steps:
-             - uses: pozil/auto-assign-issue@v1.13.0
-               with:
-                   repo-token: ${{ secrets.GITHUB_TOKEN }}
-                   assignees: NikolaRHristov
-                   numOfAssignee: 1
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 2fd4da9..ccb993f 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-         branches: [Current]
+         branches: [main]
-         branches: [Current]
+         branches: [main]
+             TELEMETRY_DISABLED: 1
+             DO_NOT_TRACK: 1
-             DO_NOT_TRACK: 1
-             GATSBY_TELEMETRY_OPTOUT: 1
-             GRIT_TELEMETRY_DISABLED: 1
+             GATSBY_TELEMETRY_OPTOUT: 1
-             TELEMETRY_DISABLED: 1
-                 node-version: [18, 19, 20]
+                 node-version: [16, 18, 19]
-             - uses: actions/checkout@v4.1.2
+             - uses: actions/checkout@v3.5.3
-             - uses: pnpm/action-setup@v3.0.0
+             - uses: pnpm/action-setup@v2.4.0
-                   version: 8.15.5
+                   version: 8.6.12
+                           --child-concurrency=9999,
+                           --network-concurrency=9999,
-             - uses: actions/setup-node@v4.0.2
+             - uses: actions/setup-node@v3.7.0
+               with:
+                   node-version: ${{ matrix.node-version }}
+                   cache: "pnpm"
+                   cache-dependency-path: ./NPM/pnpm-lock.yaml
+ 
+             - run: pnpm install
+               working-directory: ./NPM
+ 
+             - run: pnpm run prepublishOnly
+               working-directory: ./NPM
+ 
+             - uses: actions/upload-artifact@v3.1.2
+               with:
+                   name: .-NPM-Node-${{ matrix.node-version }}-Target
+                   path: ./NPM/Target
+ 
+             - uses: actions/setup-node@v3.7.0
-                   cache-dependency-path: ./pnpm-lock.yaml
+                   cache-dependency-path: ./website/pnpm-lock.yaml
-               working-directory: .
+               working-directory: ./website
-               working-directory: .
+               working-directory: ./website
-             - uses: actions/upload-artifact@v4.3.1
+             - uses: actions/upload-artifact@v3.1.2
-                   name: .-Node-${{ matrix.node-version }}-Target
-                   path: ./Target
+                   name: .-website-Node-${{ matrix.node-version }}-Target
+                   path: ./website/Target
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index b0332f1..752d0e9 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
- 
-             - uses: actions/checkout@v4.1.2
+             - uses: actions/checkout@v3.5.3
-             - uses: actions/setup-node@v4.0.2
+             - uses: actions/setup-node@v3.7.0
-             - name: Publish .
+             - name: Publish ./NPM
-               working-directory: .
+               working-directory: ./NPM
diff --git a/.npmignore b/.npmignore
deleted file mode 100644
index d0265ba..0000000
--- a/.npmignore
+++ /dev/null
- .github/
- Source/
- Documentation/
- CHANGELOG.md
- CODE_OF_CONDUCT.md
- CONTRIBUTING.md
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
deleted file mode 100644
index 13ffed8..0000000
--- a/CODE_OF_CONDUCT.md
+++ /dev/null
- # Code of Conduct
- 
- ## Our Pledge
- 
- Welcome to our community! We are committed to creating a welcoming and inclusive
- environment for all contributors. As members, contributors, and leaders, we
- pledge to make participation in our community a harassment-free experience for
- everyone, regardless of:
- 
- -   Age
- -   Body size
- -   Visible or invisible disability
- -   Ethnicity
- -   Sex characteristics
- -   Gender identity and expression
- -   Level of experience
- -   Education
- -   Socio-economic status
- -   Nationality
- -   Personal appearance
- -   Race
- -   Caste
- -   Color
- -   Religion
- -   Sexual identity and orientation
- 
- We promise to act and interact in ways that contribute to an open, welcoming,
- diverse, inclusive, and healthy community.
- 
- ## Our Standards
- 
- Examples of behavior that contributes to a positive environment for our
- community include:
- 
- -   Demonstrating empathy and kindness toward other people
- -   Being respectful of differing opinions, viewpoints, and experiences
- -   Giving and gracefully accepting constructive feedback
- -   Accepting responsibility and apologizing to those affected by our mistakes,
-     and learning from the experience
- -   Focusing on what is best not just for us as individuals but for the overall
-     community
- 
- Examples of unacceptable behavior include:
- 
- -   The use of sexualized language or imagery, and sexual attention or advances
-     of any kind
- -   Trolling, insulting, or derogatory comments, and personal or political
-     attacks
- -   Public or private harassment
- -   Publishing others' private information, such as a physical or email address,
-     without their explicit permission
- -   Other conduct which could reasonably be considered inappropriate in a
-     professional setting
- 
- ## Enforcement Responsibilities
- 
- Community leaders are responsible for clarifying and enforcing our standards of
- acceptable behavior. They will take appropriate and fair corrective action in
- response to any behavior they deem inappropriate, threatening, offensive, or
- harmful. This may include removing, editing, or rejecting comments, commits,
- code, wiki edits, issues, and other contributions that do not align with this
- Code of Conduct. Community leaders will communicate reasons for moderation
- decisions when appropriate.
- 
- ## Scope
- 
- This Code of Conduct applies within all community spaces, and also applies when
- an individual is officially representing the community in public spaces.
- Examples of representing our community include using an official e-mail address,
- posting via an official social media account, or acting as an appointed
- representative at an online or offline event.
- 
- ## Enforcement
- 
- Instances of abusive, harassing, or otherwise unacceptable behavior may be
- reported to the community leaders responsible for enforcement at
- community@playform.cloud. All complaints will be reviewed and investigated
- promptly and fairly. All community leaders are obligated to respect the privacy
- and security of the reporter of any incident.
- 
- ## Enforcement Guidelines
- 
- Community leaders will follow these Community Impact Guidelines in determining
- the consequences for any action they deem in violation of this Code of Conduct:
- 
- ### 1. Correction
- 
- **Community Impact**: Use of inappropriate language or other behavior deemed
- unprofessional or unwelcome in the community.
- 
- **Consequence**: A private, written warning from community leaders, providing
- clarity around the nature of the violation and an explanation of why the
- behavior was inappropriate. A public apology may be requested.
- 
- ### 2. Warning
- 
- **Community Impact**: A violation through a single incident or series of
- actions.
- 
- **Consequence**: A warning with consequences for continued behavior. No
- interaction with the people involved, including unsolicited interaction with
- those enforcing the Code of Conduct, for a specified period of time. This
- includes avoiding interactions in community spaces as well as external channels
- like social media. Violating these terms may lead to a temporary or permanent
- ban.
- 
- ### 3. Temporary Ban
- 
- **Community Impact**: A serious violation of community standards, including
- sustained inappropriate behavior.
- 
- **Consequence**: A temporary ban from any sort of interaction or public
- communication with the community for a specified period of time. No public or
- private interaction with the people involved, including unsolicited interaction
- with those enforcing the Code of Conduct, is allowed during this period.
- Violating these terms may lead to a permanent ban.
- 
- ### 4. Permanent Ban
- 
- **Community Impact**: Demonstrating a pattern of violation of community
- standards, including sustained inappropriate behavior, harassment of an
- individual, or aggression toward or disparagement of classes of individuals.
- 
- **Consequence**: A permanent ban from any sort of public interaction within the
- community.
- 
- ## Attribution
- 
- This Code of Conduct is adapted from the [Contributor Covenant][homepage],
- version 2.1, available at
- [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
- Community Impact Guidelines were inspired by [Mozilla's code of conduct
- enforcement ladder][Mozilla CoC].
- 
- For answers to common questions about this code of conduct, see the FAQ at
- [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
- [https://www.contributor-covenant.org/translations][translations].
- 
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
- 
- Thank you for being part of our community and helping us create a safe and
- respectful environment for everyone!
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
deleted file mode 100644
index 4700843..0000000
--- a/CONTRIBUTING.md
+++ /dev/null
- # Contributing Guidelines
- 
- Welcome to our community! We are committed to creating a welcoming and inclusive
- environment for all contributors. Before you get started, please read and adhere
- to the following code of conduct. By participating in our community, you agree
- to abide by these guidelines.
- 
- ## Our Pledge
- 
- We, as members, contributors, and leaders, pledge to make participation in our
- community a harassment-free experience for everyone, regardless of age, body
- size, visible or invisible disability, ethnicity, sex characteristics, gender
- identity and expression, level of experience, education, socio-economic status,
- nationality, personal appearance, race, caste, color, religion, or sexual
- identity and orientation. We pledge to act and interact in ways that contribute
- to an open, welcoming, diverse, inclusive, and healthy community.
- 
- ## Our Standards
- 
- Examples of behavior that contributes to a positive environment for our
- community include:
- 
- -   Demonstrating empathy and kindness toward other people
- -   Being respectful of differing opinions, viewpoints, and experiences
- -   Giving and gracefully accepting constructive feedback
- -   Accepting responsibility and apologizing to those affected by our mistakes,
-     and learning from the experience
- -   Focusing on what is best not just for us as individuals, but for the overall
-     community
- 
- Examples of unacceptable behavior include:
- 
- -   The use of sexualized language or imagery, and sexual attention or advances
-     of any kind
- -   Trolling, insulting, or derogatory comments, and personal or political
-     attacks
- -   Public or private harassment
- -   Publishing others' private information, such as a physical or email address,
-     without their explicit permission
- -   Other conduct which could reasonably be considered inappropriate in a
-     professional setting
- 
- ## Enforcement Responsibilities
- 
- Community leaders are responsible for clarifying and enforcing our standards of
- acceptable behavior and will take appropriate and fair corrective action in
- response to any behavior that they deem inappropriate, threatening, offensive,
- or harmful. Community leaders have the right and responsibility to remove, edit,
- or reject comments, commits, code, wiki edits, issues, and other contributions
- that are not aligned with this Code of Conduct, and will communicate reasons for
- moderation decisions when appropriate.
- 
- ## Scope
- 
- This Code of Conduct applies within all community spaces, and also applies when
- an individual is officially representing the community in public spaces.
- Examples of representing our community include using an official e-mail address,
- posting via an official social media account, or acting as an appointed
- representative at an online or offline event.
- 
- ## Enforcement
- 
- Instances of abusive, harassing, or otherwise unacceptable behavior may be
- reported to the community leaders responsible for enforcement at
- community@playform.cloud. All complaints will be reviewed and investigated
- promptly and fairly. All community leaders are obligated to respect the privacy
- and security of the reporter of any incident.
- 
- ## Enforcement Guidelines
- 
- Community leaders will follow these Community Impact Guidelines in determining
- the consequences for any action they deem in violation of this Code of Conduct:
- 
- ### 1. Correction
- 
- **Community Impact**: Use of inappropriate language or other behavior deemed
- unprofessional or unwelcome in the community.
- 
- **Consequence**: A private, written warning from community leaders, providing
- clarity around the nature of the violation and an explanation of why the
- behavior was inappropriate. A public apology may be requested.
- 
- ### 2. Warning
- 
- **Community Impact**: A violation through a single incident or series of
- actions.
- 
- **Consequence**: A warning with consequences for continued behavior. No
- interaction with the people involved, including unsolicited interaction with
- those enforcing the Code of Conduct, for a specified period of time. This
- includes avoiding interactions in community spaces as well as external channels
- like social media. Violating these terms may lead to a temporary or permanent
- ban.
- 
- ### 3. Temporary Ban
- 
- **Community Impact**: A serious violation of community standards, including
- sustained inappropriate behavior.
- 
- **Consequence**: A temporary ban from any sort of interaction or public
- communication with the community for a specified period of time. No public or
- private interaction with the people involved, including unsolicited interaction
- with those enforcing the Code of Conduct, is allowed during this period.
- Violating these terms may lead to a permanent ban.
- 
- ### 4. Permanent Ban
- 
- **Community Impact**: Demonstrating a pattern of violation of community
- standards, including sustained inappropriate behavior, harassment of an
- individual, or aggression toward or disparagement of classes of individuals.
- 
- **Consequence**: A permanent ban from any sort of public interaction within the
- community.
- 
- ## Attribution
- 
- This Code of Conduct is adapted from the [Contributor Covenant][homepage],
- version 2.1, available at
- [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
- Community Impact Guidelines were inspired by [Mozilla's code of conduct
- enforcement ladder][Mozilla CoC].
- 
- For answers to common questions about this code of conduct, see the FAQ at
- [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
- [https://www.contributor-covenant.org/translations][translations].
- 
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
- 
- Thank you for being part of our community and helping us create a safe and
- respectful environment for everyone!
diff --git a/LICENSE b/LICENSE
deleted file mode 100644
index cca5808..0000000
--- a/LICENSE
+++ /dev/null
- MIT License
- 
- Copyright (c) 2023-2024 Playform
- 
- Permission is hereby granted, free of charge, to any person obtaining a copy of
- this software and associated documentation files (the "Software"), to deal in
- the Software without restriction, including without limitation the rights to
- use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
- the Software, and to permit persons to whom the Software is furnished to do so,
- subject to the following conditions:
- 
- The above copyright notice and this permission notice shall be included in all
- copies or substantial portions of the Software.
- 
- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
- IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
- FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
- COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
- IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
- CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
diff --git a/NPM/.npmignore b/NPM/.npmignore
new file mode 100644
index 0000000..797b72a
--- /dev/null
+++ b/NPM/.npmignore
+ .turbo/
+ CHANGELOG.md
+ Source/
diff --git a/NPM/LICENSE b/NPM/LICENSE
new file mode 100644
index 0000000..66f72b3
--- /dev/null
+++ b/NPM/LICENSE
+ MIT License
+ 
+ Copyright (c) 2022 Nikola Hristov
+ 
+ Permission is hereby granted, free of charge, to any person obtaining a copy of
+ this software and associated documentation files (the "Software"), to deal in
+ the Software without restriction, including without limitation the rights to
+ use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
+ the Software, and to permit persons to whom the Software is furnished to do so,
+ subject to the following conditions:
+ 
+ The above copyright notice and this permission notice shall be included in all
+ copies or substantial portions of the Software.
+ 
+ THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
+ IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
+ FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
+ COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
+ IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
+ CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
diff --git a/NPM/package.json b/NPM/package.json
new file mode 100644
index 0000000..13174ee
--- /dev/null
+++ b/NPM/package.json
+ {
+ 	"name": "syclone",
+ 	"version": "0.1.5",
+ 	"private": false,
+ 	"description": "🌀 Builds all JavaScript files from TypeScript within a given folder using esbuild.",
+ 	"keywords": [
+ 		"javascript",
+ 		"typescript",
+ 		"esbuild"
+ 	],
+ 	"homepage": "https://github.com/NikolaRHristov/Syclone#readme",
+ 	"bugs": {
+ 		"url": "https://github.com/NikolaRHristov/Syclone/issues"
+ 	},
+ 	"repository": {
+ 		"type": "git",
+ 		"url": "git+https://github.com/NikolaRHristov/Syclone.git",
+ 		"directory": "NPM"
+ 	},
+ 	"license": "MIT",
+ 	"type": "module",
+ 	"main": "./Target/Index.js",
+ 	"types": "./Target/Index.d.ts",
+ 	"bin": {
+ 		"Syclone": "Target/Bin.js"
+ 	},
+ 	"scripts": {
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Index.ts 'Source/**/*.ts'"
+ 	},
+ 	"dependencies": {
+ 		"@types/node": "20.4.10",
+ 		"commander": "11.0.0",
+ 		"deepmerge-ts": "5.1.0",
+ 		"esbuild": "0.19.1",
+ 		"esbuild-plugin-copy": "2.1.1",
+ 		"fast-glob": "3.3.1",
+ 		"typescript": "5.1.6"
+ 	},
+ 	"devDependencies": {
+ 		"@types/node": "20.4.10",
+ 		"ts-node": "10.9.1"
+ 	},
+ 	"publishConfig": {
+ 		"access": "public"
+ 	}
+ }
diff --git a/NPM/README.md b/NPM/README.md
new file mode 100644
index 0000000..e8d2601
--- /dev/null
+++ b/NPM/README.md
+ # [Syclone] 🌀
+ 
+ Builds all your TypeScript files into JavaScript.
+ 
+ ## Installation
+ 
+ Add configuration and setup scripts:
+ 
+ ```sh
+ npm install -D -E syclone
+ ```
+ 
+ ## Usage
+ 
+ `package.json`
+ 
+ ```json
+ {
+ 	"name": "my-awesome-package",
+ 	"scripts": {
+ 		"prepublishOnly": "Syclone 'Source/**/*.ts'"
+ 	},
+ 	"dependencies": {
+ 		"syclone": "0.1.5"
+ 	}
+ }
+ ```
+ 
+ #### or with a custom esbuild config file:
+ 
+ ```json
+ {
+ 	"scripts": {
+ 		"prepublishOnly": "Syclone 'Source/**/*.ts' -es esbuild.ts"
+ 	}
+ }
+ ```
+ 
+ #### See an example of a config file in [esbuild.ts](Source/Configuration/esbuild.ts)
+ 
+ `tsconfig.json`
+ 
+ ```json
+ {
+ 	"compilerOptions": {
+ 		"outDir": "Target"
+ 	},
+ 	"extends": "./Source/Configuration/TypeScript",
+ 	"include": ["Source"]
+ }
+ ```
+ 
+ The script will now automatically compile your build files with [esbuild] and
+ add TypeScript types.
+ 
+ [Syclone]: https://npmjs.org/syclone
+ [esbuild]: https://npmjs.org/esbuild
diff --git a/NPM/Source/Bin.ts b/NPM/Source/Bin.ts
new file mode 100644
index 0000000..f401b04
--- /dev/null
+++ b/NPM/Source/Bin.ts
+ #!/usr/bin/env node
+ 
+ import "./Index.js";
diff --git a/NPM/Source/Command/Build.ts b/NPM/Source/Command/Build.ts
new file mode 100644
index 0000000..21cdb44
--- /dev/null
+++ b/NPM/Source/Command/Build.ts
+ import { exec as Exec } from "child_process";
+ import { deepmerge as Merge } from "deepmerge-ts";
+ import type { BuildOptions } from "esbuild";
+ import { build as Build } from "esbuild";
+ import type { Pattern } from "fast-glob";
+ import Glob from "fast-glob";
+ import _esbuild from "../Configuration/esbuild.js";
+ import File from "../Library/File.js";
+ 
+ export type Pipe = string[];
+ 
+ /**
+  * The `Build` function compiles and builds TypeScript files using esbuild and TypeScript compiler.
+  * @param {Pattern[]} Files - An array of file patterns to be processed. Each pattern can include
+  * wildcards (*) to match multiple files.
+  * @param [Options] - The `Options` parameter is an optional object that can contain two properties:
+  */
+ export default async (
+ 	Files: Pattern[],
+ 	Options?: { esbuild?: string; TypeScript?: string }
+ ) => {
+ 	const Pipe: Pipe = [];
+ 
+ 	for (const File of Files) {
+ 		for (const _File of await Glob(
+ 			File.replaceAll("'", "").replaceAll('"', "")
+ 		)) {
+ 			Pipe.push(_File);
+ 		}
+ 	}
+ 
+ 	Pipe.reverse();
+ 
+ 	const esbuild = Merge(_esbuild, {
+ 		entryPoints: Object.fromEntries(
+ 			Pipe.map((File) => [
+ 				File.replace("Source/", "").split(".").slice(0, -1.0).join("."),
+ 				File,
+ 			])
+ 		),
+ 	} satisfies BuildOptions);
+ 
+ 	await Build(
+ 		Options?.esbuild
+ 			? Merge(esbuild, await File(Options?.esbuild))
+ 			: esbuild
+ 	);
+ 
+ 	if (Options?.TypeScript) {
+ 		Exec(`tsc -p ${Options?.TypeScript}`);
+ 	} else {
+ 		Exec("tsc");
+ 	}
+ };
diff --git a/NPM/Source/Configuration/esbuild.ts b/NPM/Source/Configuration/esbuild.ts
new file mode 100644
index 0000000..8e4c808
--- /dev/null
+++ b/NPM/Source/Configuration/esbuild.ts
+ import type { BuildOptions, PluginBuild } from "esbuild";
+ import { copy as Copy } from "esbuild-plugin-copy";
+ import { rm as Remove } from "fs/promises";
+ 
+ const Out = "Target";
+ 
+ export default {
+ 	format: "esm",
+ 	minify: true,
+ 	outdir: Out,
+ 	platform: "node",
+ 	target: "esnext",
+ 	write: true,
+ 	plugins: [
+ 		{
+ 			name: "Target",
+ 			setup(build: PluginBuild) {
+ 				build.onStart(async () => {
+ 					try {
+ 						await Remove(Out, {
+ 							recursive: true,
+ 						});
+ 					} catch (_Error) {
+ 						console.log(_Error);
+ 					}
+ 				});
+ 			},
+ 		},
+ 		Copy({
+ 			resolveFrom: "out",
+ 			assets: [
+ 				{
+ 					from: "./Source/Configuration/TypeScript.json",
+ 					to: "./Configuration/",
+ 				},
+ 			],
+ 		}),
+ 	],
+ } satisfies BuildOptions;
diff --git a/NPM/Source/Configuration/TypeScript.json b/NPM/Source/Configuration/TypeScript.json
new file mode 100644
index 0000000..27705c6
--- /dev/null
+++ b/NPM/Source/Configuration/TypeScript.json
+ {
+ 	"$schema": "https://json.schemastore.org/tsconfig",
+ 	"compilerOptions": {
+ 		"allowArbitraryExtensions": true,
+ 		"allowImportingTsExtensions": true,
+ 		"allowJs": true,
+ 		"allowSyntheticDefaultImports": true,
+ 		"allowUmdGlobalAccess": false,
+ 		"allowUnreachableCode": false,
+ 		"allowUnusedLabels": false,
+ 		"alwaysStrict": true,
+ 		"assumeChangesOnlyAffectDirectDependencies": true,
+ 		"baseUrl": "./",
+ 		"checkJs": true,
+ 		"declaration": true,
+ 		"disableReferencedProjectLoad": false,
+ 		"emitDeclarationOnly": true,
+ 		"esModuleInterop": true,
+ 		"exactOptionalPropertyTypes": true,
+ 		"forceConsistentCasingInFileNames": true,
+ 		"isolatedModules": true,
+ 		"jsx": "preserve",
+ 		"lib": ["ESNext"],
+ 		"module": "ESNext",
+ 		"moduleResolution": "NodeNext",
+ 		"noFallthroughCasesInSwitch": true,
+ 		"noImplicitOverride": true,
+ 		"noImplicitReturns": true,
+ 		"noPropertyAccessFromIndexSignature": true,
+ 		"noUncheckedIndexedAccess": true,
+ 		"noUnusedLocals": true,
+ 		"noUnusedParameters": true,
+ 		"resolveJsonModule": true,
+ 		"skipLibCheck": true,
+ 		"strict": true,
+ 		"strictBindCallApply": true,
+ 		"strictFunctionTypes": true,
+ 		"strictNullChecks": true,
+ 		"target": "ESNext",
+ 		"types": ["node", "@types/node"],
+ 		"verbatimModuleSyntax": true
+ 	},
+ 	"ts-node": {
+ 		"esm": true
+ 	}
+ }
diff --git a/NPM/Source/Index.ts b/NPM/Source/Index.ts
new file mode 100644
index 0000000..193827d
--- /dev/null
+++ b/NPM/Source/Index.ts
+ import { Command } from "commander";
+ import Build from "./Command/Build.js";
+ import _JSON from "./Library/JSON.js";
+ 
+ try {
+ 	new Command()
+ 		.name("Syclone")
+ 		.version((await _JSON("../package.json", import.meta.url))?.version)
+ 		.description("Builds files")
+ 		.argument("<Files...>", "Files to build")
+ 		.option("-es, --esbuild <File>", "esbuild configuration file")
+ 		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
+ 		.action(Build)
+ 		.parse();
+ } catch (_Error) {
+ 	console.log(_Error);
+ }
diff --git a/NPM/Source/Library/File.ts b/NPM/Source/Library/File.ts
new file mode 100644
index 0000000..f151f6d
--- /dev/null
+++ b/NPM/Source/Library/File.ts
+ import { readFile as _File, writeFile as File } from "fs/promises";
+ import TypeScript from "typescript";
+ import { pathToFileURL as URL } from "url";
+ import _JSON from "./JSON.js";
+ 
+ /**
+  * The function takes a file path as input, checks if it is a TypeScript file, converts the TypeScript
+  * code to JavaScript, and then imports and returns the default export of the JavaScript file.
+  * @param {string} Path - The `Path` parameter is a string that represents the file path of the file
+  * you want to process.
+  * @returns the default export of the module that is imported using the provided `Path`.
+  */
+ export default async (Path: string) => {
+ 	if (Path.split(".").pop() === "ts") {
+ 		const { options } = TypeScript.convertCompilerOptionsFromJson(
+ 			(await _JSON("../Configuration/TypeScript.json", import.meta.url))
+ 				?.compilerOptions,
+ 			"."
+ 		);
+ 
+ 		TypeScript.createProgram(
+ 			[Path],
+ 			options,
+ 			TypeScript.createCompilerHost(options)
+ 		).emit();
+ 
+ 		await File(
+ 			Path.replace(".ts", ".js"),
+ 			TypeScript.transpile(
+ 				(await _File(Path, "utf-8")).toString(),
+ 				options
+ 			)
+ 		);
+ 	}
+ 
+ 	return (await import(URL(Path).toString().replace(".ts", ".js"))).default;
+ };
diff --git a/NPM/Source/Library/JSON.ts b/NPM/Source/Library/JSON.ts
new file mode 100644
index 0000000..826a677
--- /dev/null
+++ b/NPM/Source/Library/JSON.ts
+ import { readFile as _File } from "fs/promises";
+ import { dirname as Dir } from "path";
+ import { fileURLToPath as Path } from "url";
+ 
+ /**
+  * The function `JSON` is a TypeScript function that reads a JSON file and returns its parsed content.
+  * @param {string} File - The `File` parameter is a string that represents the name or path of the JSON
+  * file that you want to parse.
+  * @param {string} From - The `From` parameter is a string that represents the source URL or file path
+  * from which the JSON file will be loaded. It is set to `import.meta.url` by default, which refers to
+  * the URL of the current module. However, if a different source URL or file path is provided,
+  */
+ export default async (File: string, From: string = import.meta.url) =>
+ 	JSON.parse(
+ 		(
+ 			await _File(
+ 				`${Dir(Path(From ?? import.meta.url))}/${File}`,
+ 				"utf-8"
+ 			)
+ 		).toString()
+ 	);
diff --git a/NPM/tsconfig.json b/NPM/tsconfig.json
new file mode 100644
index 0000000..ee1d5c8
--- /dev/null
+++ b/NPM/tsconfig.json
+ {
+ 	"compilerOptions": {
+ 		"outDir": "Target"
+ 	},
+ 	"extends": "./Source/Configuration/TypeScript",
+ 	"include": ["Source"]
+ }
diff --git a/package.json b/package.json
deleted file mode 100644
index 0ff9afd..0000000
--- a/package.json
+++ /dev/null
- {
- 	"name": "typescript-esbuild",
- 	"version": "0.4.10",
- 	"private": false,
- 	"description": "🌀 ESBuild Wrapper.",
- 	"keywords": ["javascript", "typescript", "esbuild"],
- 	"homepage": "https://github.com/Playform/TypeScriptESBuild#readme",
- 	"bugs": {
- 		"url": "https://github.com/Playform/TypeScriptESBuild/issues"
- 	},
- 	"repository": {
- 		"type": "git",
- 		"url": "git+https://github.com/Playform/TypeScriptESBuild.git"
- 	},
- 	"license": "SEE LICENSE IN LICENSE",
- 	"author": {
- 		"name": "Playform",
- 		"email": "hello@playform.cloud",
- 		"url": "https://playform.cloud"
- 	},
- 	"type": "module",
- 	"main": "./Target/Class/TypeScriptESBuild.js",
- 	"types": "./Target/Class/TypeScriptESBuild.d.ts",
- 	"bin": {
- 		"TypeScriptESBuild": "Target/Class/TypeScriptESBuild.js"
- 	},
- 	"scripts": {
- 		"Document": "TypeScriptDocument 'Source/**/*.ts'",
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts'"
- 	},
- 	"dependencies": {
- 		"@types/node": "20.12.2",
- 		"commander": "12.0.0",
- 		"deepmerge-ts": "5.1.0",
- 		"esbuild": "0.20.2",
- 		"esbuild-plugin-copy": "2.1.1",
- 		"fast-glob": "3.3.2",
- 		"typescript": "5.4.3"
- 	},
- 	"devDependencies": {
- 		"ts-node": "10.9.2"
- 	},
- 	"peerDependencies": {
- 		"typescript-document": "0.0.7"
- 	},
- 	"publishConfig": {
- 		"access": "public"
- 	}
- }
diff --git a/README.md b/README.md
deleted file mode 100644
index e9a550a..0000000
--- a/README.md
+++ /dev/null
- # 🌀 [TypeScriptESBuild]
- 
- Build all your TypeScript files into JavaScript.
- 
- ## Installation
- 
- Add configuration and setup scripts:
- 
- ```sh
- npm install -D -E typescript-esbuild
- ```
- 
- ## Usage
- 
- Through a command line run:
- 
- ```sh
- npx typescript-esbuild 'Source/**/*.ts'
- ```
- 
- or in a `package.json` file:
- 
- ```json
- {
- 	"scripts": {
- 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
- 	}
- }
- ```
- 
- ### ESBuild Configuration
- 
- Or with a custom ESBuild config file:
- 
- `package.json`
- 
- ```json
- {
- 	"scripts": {
- 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es ESBuild.ts"
- 	}
- }
- ```
- 
- See an example of a configuration file in
- [ESBuild.ts](Source/Variable/ESBuild.ts)
- 
- ### TypeScript Configuration
- 
- `tsconfig.json`
- 
- ```json
- {
- 	"compilerOptions": {
- 		"outDir": "Target"
- 	},
- 	"extends": "typescript-esbuild/Target/Notation/TypeScript",
- 	"include": ["Source"]
- }
- ```
- 
- [ESBuild]: https://npmjs.org/esbuild
- [TypeDoc]: https://npmjs.org/typedoc
- [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
diff --git a/Source/Class/TypeScriptESBuild.ts b/Source/Class/TypeScriptESBuild.ts
deleted file mode 100644
index 8ef9c08..0000000
--- a/Source/Class/TypeScriptESBuild.ts
+++ /dev/null
- #!/usr/bin/env node
- 
- /**
-  * @module TypeScriptESBuild
-  *
-  */
- export default new (await import("commander")).Command()
- 	.name("TypeScriptESBuild")
- 	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
- 	.description("🌀 Build TypeScript.")
- 	.argument("<File...>", "Build File.")
- 	.option("-ES, --ESBuild <File>", "ESBuild Configuration.")
- 	.option("-TS, --TypeScript <File>", "TypeScript Configuration.")
- 	.action((await import("../Function/Build.js")).default)
- 	.parse();
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
deleted file mode 100644
index 52074eb..0000000
--- a/Source/Function/Build.ts
+++ /dev/null
- /**
-  * @module Build
-  *
-  */
- export default (async (...[File, Option]: Parameters<Type>) => {
- 	for (const _File of File) {
- 		for (const __File of await (await import("fast-glob")).default(
- 			_File.replaceAll("'", "").replaceAll('"', ""),
- 		)) {
- 			Pipe.push(__File);
- 		}
- 	}
- 
- 	Pipe.reverse();
- 
- 	const Configuration = Merge(
- 		(await import("../Variable/ESBuild.js")).default,
- 		{
- 			entryPoints: Object.fromEntries(
- 				Pipe.map((File) => [
- 					File.replace("Source/", "")
- 						.split(".")
- 						.slice(0, -1.0)
- 						.join("."),
- 					File,
- 				]),
- 			),
- 		},
- 	);
- 
- 	console.log(
- 		await (await import("esbuild")).analyzeMetafile(
- 			(
- 				await (
- 					await import("esbuild")
- 				).build(
- 					Option?.ESBuild
- 						? Merge(
- 								Configuration,
- 								await (
- 									await import("../Function/File.js")
- 								).default(Option.ESBuild),
- 						  )
- 						: Configuration,
- 				)
- 			)?.metafile ?? "",
- 			{
- 				verbose: true,
- 			},
- 		),
- 	);
- 
- 	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
- }) satisfies Type as Type;
- 
- import type Type from "../Interface/Build.js";
- 
- export const { default: Exec } = await import("../Function/Exec.js");
- 
- export const { default: Merge } = await import("../Function/Merge.js");
- 
- export const { resolve } = await import("path");
- 
- export const Pipe: string[] = [];
- 
- export const Current = (await import("url")).fileURLToPath(
- 	(await import("path")).dirname(import.meta.url),
- );
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
deleted file mode 100644
index 8f53f41..0000000
--- a/Source/Function/Exec.ts
+++ /dev/null
- /**
-  * @module Exec
-  *
-  */
- export default (async (
- 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Type>
- ) => {
- 	try {
- 		const { stdout, stderr } = (await import("child_process")).exec(
- 			Command,
- 		);
- 
- 		if (typeof Echo === "function") {
- 			stdout?.on("data", (Data) => Echo(Data));
- 			stderr?.on("data", (Data) => Echo(Data));
- 		}
- 	} catch (_Error) {
- 		console.log(_Error);
- 	}
- }) satisfies Type as Type;
- 
- import type Type from "../Interface/Exec.js";
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
deleted file mode 100644
index 212ba4a..0000000
--- a/Source/Function/File.ts
+++ /dev/null
- /**
-  * @module File
-  *
-  */
- export default (async (...[Path]: Parameters<Type>) => {
- 	if (Path.split(".").pop() === "ts") {
- 		const { options } = (
- 			await import("typescript")
- 		).default.convertCompilerOptionsFromJson(
- 			(
- 				await (
- 					await import("./JSON.js")
- 				).default(
- 					"../Notation/TypeScript.json",
- 					(
- 						await import("path")
- 					).dirname(
- 						(await import("url")).fileURLToPath(import.meta.url),
- 					),
- 				)
- 			)?.compilerOptions,
- 			".",
- 		);
- 
- 		(await import("typescript")).default
- 			.createProgram(
- 				[Path],
- 				options,
- 				(await import("typescript")).default.createCompilerHost(
- 					options,
- 				),
- 			)
- 			.emit();
- 
- 		await (await import("fs/promises")).writeFile(
- 			Path.replace(".ts", ".js"),
- 			(await import("typescript")).default.transpile(
- 				(
- 					await (await import("fs/promises")).readFile(Path, "utf-8")
- 				).toString(),
- 				options,
- 			),
- 		);
- 	}
- 
- 	return (
- 		await import(
- 			(
- 				await import("url")
- 			)
- 				.pathToFileURL(Path)
- 				.toString()
- 				.replace(".ts", ".js")
- 		)
- 	).default;
- }) satisfies Type as Type;
- 
- import type Type from "../Interface/File.js";
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
deleted file mode 100644
index 9f75935..0000000
--- a/Source/Function/JSON.ts
+++ /dev/null
- /**
-  * @module JSON
-  *
-  */
- export default (async (...[File, From]: Parameters<Type>) =>
- 	JSON.parse(
- 		(
- 			await (
- 				await import("fs/promises")
- 			).readFile(`${From ?? "."}/${File}`, "utf-8")
- 		).toString(),
- 	)) satisfies Type as Type;
- 
- import type Type from "../Interface/JSON.js";
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
deleted file mode 100644
index 8586054..0000000
--- a/Source/Function/Merge.ts
+++ /dev/null
- /**
-  * @module Merge
-  *
-  */
- export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
- 	mergeArrays: false,
- }) satisfies Type<Generic> as Type<Generic>;
- 
- import type Type from "../Interface/Merge.js";
- import type { Generic } from "../Interface/Merge.js";
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
deleted file mode 100644
index 01dce34..0000000
--- a/Source/Interface/Build.ts
+++ /dev/null
- /**
-  * @module Build
-  *
-  */
- export default interface Type {
- 	/**
- 	 * Represents a function that processes file patterns.
- 	 *
- 	 * @param File - An array of file patterns to be processed. Each pattern can include wildcards (*) to match multiple files.
- 	 *
- 	 * @param Option - An optional object that can contain two properties.
- 	 *
- 	 * @param Option.ESBuild - A string representing the ESBuild option.
- 	 *
- 	 * @param Option.TypeScript - A string representing the TypeScript option.
- 	 *
- 	 */
- 	(
- 		File: Pattern[],
- 		Option?: {
- 			ESBuild?: string;
- 			TypeScript?: string;
- 		},
- 	): Promise<void>;
- }
- 
- import type { Pattern } from "fast-glob";
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
deleted file mode 100644
index ff2ec1b..0000000
--- a/Source/Interface/Exec.ts
+++ /dev/null
- /**
-  * @module Exec
-  *
-  */
- export default interface Type {
- 	/**
- 	 * The 'Exec' function is an asynchronous function that executes a command and logs the
- 	 * stdout and stderr of the child process.
- 	 *
- 	 * @param Command - The 'Command' parameter is a string that represents the
- 	 * command you want to execute. It can be any valid command that can be executed in a
- 	 * terminal or command prompt.
- 	 *
- 	 * @param Echo - An optional parameter that controls whether the stdout and stderr
- 	 * of the child process should be logged. If set to 'false', no logging will occur. If set
- 	 * to a function, the function will be called with the stdout and stderr data as a parameter for custom
- 	 * logging. If not provided, stdout and stderr will be logged to the console by default.
- 	 *
- 	 */
- 	(
- 		Command: string,
- 		// biome-ignore lint/suspicious/noExplicitAny:
- 		Echo?: false | ((Return: any) => void),
- 	): Promise<void>;
- }
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
deleted file mode 100644
index 607aee2..0000000
--- a/Source/Interface/File.ts
+++ /dev/null
- /**
-  * @module File
-  *
-  */
- export default interface Type {
- 	/**
- 	 * This function asynchronously processes a file located at the given path. If the file is a TypeScript
- 	 * (.ts) file, it performs the following steps:
- 	 * 1. Converts TypeScript code to JavaScript.
- 	 * 2. Creates a JavaScript module and emits it.
- 	 * 3. Writes the transpiled JavaScript code to a new file with a .js extension.
- 	 *
- 	 * Finally, it imports and returns the default export of the processed JavaScript module.
- 	 *
- 	 * @param Path - The 'Path' parameter is a string that represents the file path of the file
- 	 * you want to process.
- 	 *
- 	 */
- 	// biome-ignore lint/suspicious/noExplicitAny:
- 	(Path: string): Promise<any>;
- }
diff --git a/Source/Interface/JSON.ts b/Source/Interface/JSON.ts
deleted file mode 100644
index 9447d0c..0000000
--- a/Source/Interface/JSON.ts
+++ /dev/null
- /**
-  * @module JSON
-  *
-  */
- export default interface Type {
- 	/**
- 	 * The function 'JSON' is a TypeScript function that reads a JSON file and returns its
- 	 * parsed content.
- 	 *
- 	 * @param File - The `File` parameter is a string that represents the name or
- 	 * path of the JSON file that you want to parse.
- 	 *
- 	 * @param From - The `From` parameter is an optional string that represents
- 	 * the directory path from which the JSON file should be loaded. If `From` is provided,
- 	 * it will be used as the base directory path. If `From` is not provided, the current
- 	 * directory will be used as the base directory path.
- 	 *
- 	 */
- 	(File: string, From?: string): Promise<ReturnType<typeof JSON.parse>>;
- }
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
deleted file mode 100644
index 5e66d23..0000000
--- a/Source/Interface/Merge.ts
+++ /dev/null
- /**
-  * @module Merge
-  *
-  * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeMergeFunctionsURIs.
-  *
-  * @template PMF - A type parameter representing Partial<DeepMergeMergeFunctionsURIs>.
-  *
-  */
- export default interface Type<
- 	PMF extends Partial<DeepMergeMergeFunctionsURIs>,
- > {
- 	/**
- 	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
- 	 *
- 	 * @param ...Objects - An arbitrary number of objects to be merged.
- 	 *
- 	 */
- 	<Ts extends readonly unknown[]>(
- 		...Objects: Ts
- 	): DeepMergeHKT<
- 		Ts,
- 		GetDeepMergeMergeFunctionsURIs<PMF>,
- 		DeepMergeBuiltInMetaData
- 	>;
- }
- 
- export interface Generic {
- 	DeepMergeArraysURI: DeepMergeLeafURI;
- }
- 
- import type {
- 	DeepMergeBuiltInMetaData,
- 	DeepMergeHKT,
- 	DeepMergeLeafURI,
- 	DeepMergeMergeFunctionsURIs,
- 	GetDeepMergeMergeFunctionsURIs,
- } from "deepmerge-ts";
diff --git a/Source/Notation/TypeScript.json b/Source/Notation/TypeScript.json
deleted file mode 100644
index 80ad3c6..0000000
--- a/Source/Notation/TypeScript.json
+++ /dev/null
- {
- 	"$schema": "https://json.schemastore.org/tsconfig",
- 	"compilerOptions": {
- 		"allowArbitraryExtensions": true,
- 		"allowImportingTsExtensions": true,
- 		"allowJs": true,
- 		"allowSyntheticDefaultImports": true,
- 		"allowUmdGlobalAccess": false,
- 		"allowUnreachableCode": false,
- 		"allowUnusedLabels": false,
- 		"alwaysStrict": true,
- 		"assumeChangesOnlyAffectDirectDependencies": true,
- 		"baseUrl": "./",
- 		"checkJs": true,
- 		"declaration": true,
- 		"disableReferencedProjectLoad": false,
- 		"emitDeclarationOnly": true,
- 		"esModuleInterop": true,
- 		"exactOptionalPropertyTypes": true,
- 		"forceConsistentCasingInFileNames": true,
- 		"isolatedModules": true,
- 		"jsx": "preserve",
- 		"lib": ["ESNext"],
- 		"module": "ESNext",
- 		"moduleResolution": "Bundler",
- 		"noFallthroughCasesInSwitch": true,
- 		"noImplicitOverride": true,
- 		"noImplicitReturns": true,
- 		"noPropertyAccessFromIndexSignature": true,
- 		"noUncheckedIndexedAccess": true,
- 		"noUnusedLocals": true,
- 		"noUnusedParameters": true,
- 		"resolveJsonModule": true,
- 		"skipLibCheck": true,
- 		"strict": true,
- 		"strictBindCallApply": true,
- 		"strictFunctionTypes": true,
- 		"strictNullChecks": true,
- 		"target": "ESNext",
- 		"types": ["node", "@types/node"],
- 		"verbatimModuleSyntax": true,
- 		"noImplicitThis": true,
- 		"paths": {
- 			"@Asset/*": ["Source/Asset/*"],
- 			"@Class/*": ["Source/Class/*"],
- 			"@Component/*": ["Source/Component/*"],
- 			"@Context/*": ["Source/Context/*"],
- 			"@Element/*": ["Source/Element/*"],
- 			"@Function/*": ["Source/Function/*"],
- 			"@Interface/*": ["Source/Interface/*"],
- 			"@Layout/*": ["Source/Layout/*"],
- 			"@Library/*": ["Source/Library/*"],
- 			"@Notation/*": ["Source/Notation/*"],
- 			"@Option/*": ["Source/Option/*"],
- 			"@Page/*": ["Source/pages/*"],
- 			"@Script/*": ["Source/Script/*"],
- 			"@Stylesheet/*": ["Source/Stylesheet/*"],
- 			"@Type/*": ["Source/Type/*"],
- 			"@Variable/*": ["Source/Variable/*"]
- 		}
- 	},
- 	"ts-node": {
- 		"esm": true
- 	}
- }
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
deleted file mode 100644
index c09869e..0000000
--- a/Source/Variable/ESBuild.ts
+++ /dev/null
- /**
-  * @module ESBuild
-  *
-  */
- export default {
- 	color: true,
- 	format: "esm",
- 	metafile: true,
- 	minify: true,
- 	outdir: "Target",
- 	platform: "node",
- 	target: "esnext",
- 	write: true,
- 	logLevel: "debug",
- 	plugins: [
- 		{
- 			name: "Target",
- 			setup({ onStart, initialOptions: { outdir } }) {
- 				onStart(async () => {
- 					try {
- 						outdir
- 							? await (await import("fs/promises")).rm(outdir, {
- 									recursive: true,
- 							  })
- 							: {};
- 					} catch (_Error) {
- 						console.log(_Error);
- 					}
- 				});
- 			},
- 		},
- 		(await import("esbuild-plugin-copy")).copy({
- 			resolveFrom: "out",
- 			assets: [
- 				{
- 					from: "./Source/Notation/TypeScript.json",
- 					to: "./Notation/",
- 				},
- 			],
- 		}),
- 	],
- 	define: {
- 		"process.env.VERSION_PACKAGE": `'${
- 			(
- 				await (
- 					await import("../Function/JSON.js")
- 				).default("package.json")
- 			)?.version
- 		}'`,
- 	},
- } satisfies BuildOptions as BuildOptions;
- 
- import type { BuildOptions } from "esbuild";
diff --git a/tsconfig.json b/tsconfig.json
deleted file mode 100644
index 12e0400..0000000
--- a/tsconfig.json
+++ /dev/null
- {
- 	"compilerOptions": {
- 		"outDir": "Target"
- 	},
- 	"extends": "./Source/Notation/TypeScript",
- 	"include": ["Source"]
- }
diff --git a/website/.gitignore b/website/.gitignore
new file mode 100644
index 0000000..ca8e4ca
--- /dev/null
+++ b/website/.gitignore
+ # dependencies
+ package-lock.json
+ node_modules/
+ .snowpack/
+ 
+ # logs
+ npm-debug.log*
+ yarn-debug.log*
+ yarn-error.log*
+ 
+ # environment variables
+ .env
+ .env.production
+ 
+ # macOS-specific files
+ .DS_Store
+ 
+ Target/
+ .astro
diff --git a/website/.npmignore b/website/.npmignore
new file mode 100644
index 0000000..a5a4619
--- /dev/null
+++ b/website/.npmignore
+ .github/
+ .turbo/
+ Source/
+ public/
+ CONTRIBUTING.md
diff --git a/website/astro.config.ts b/website/astro.config.ts
new file mode 100644
index 0000000..abd4cef
--- /dev/null
+++ b/website/astro.config.ts
+ import PreFetch from "@astrojs/prefetch";
+ import SiteMap from "@astrojs/sitemap";
+ import Compress from "astro-compress";
+ import Critters from "astro-critters";
+ import ROME from "astro-rome";
+ import { defineConfig } from "astro/config";
+ import Worker from "astrojs-service-worker";
+ 
+ export default defineConfig({
+ 	srcDir: "./Source",
+ 	publicDir: "./Public",
+ 	outDir: "./Target",
+ 	// TODO Place your site URL here
+ 	// site: "",
+ 	experimental: {
+ 		assets: true,
+ 		viewTransitions: true,
+ 	},
+ 	compressHTML: true,
+ 	integrations: [
+ 		import.meta.env.MODE === "production" ? Worker() : null,
+ 		SiteMap(),
+ 		Critters({ Logger: 1 }),
+ 		PreFetch(),
+ 		ROME({ Logger: 1 }),
+ 		Compress({ Logger: 1 }),
+ 	],
+ 	vite: {
+ 		build: {
+ 			sourcemap: true,
+ 		},
+ 	},
+ });
diff --git a/website/package.json b/website/package.json
new file mode 100644
index 0000000..c246119
--- /dev/null
+++ b/website/package.json
+ {
+ 	"name": "syclone-web",
+ 	"version": "2.0.0",
+ 	"private": false,
+ 	"description": "",
+ 	"keywords": [
+ 		"astro",
+ 		"starter"
+ 	],
+ 	"homepage": "https://github.com/NikolaRHristov/Syclone#readme",
+ 	"bugs": {
+ 		"url": "https://github.com/NikolaRHristov/Syclone/issues"
+ 	},
+ 	"repository": {
+ 		"type": "git",
+ 		"url": "git+https://github.com/NikolaRHristov/Syclone.git",
+ 		"directory": "website"
+ 	},
+ 	"scripts": {
+ 		"build": "astro check && astro build",
+ 		"start": "astro dev"
+ 	},
+ 	"devDependencies": {
+ 		"@astrojs/prefetch": "0.3.0",
+ 		"@astrojs/sitemap": "2.0.1",
+ 		"@tailwindcss/aspect-ratio": "0.4.2",
+ 		"@tailwindcss/forms": "0.5.4",
+ 		"@tailwindcss/typography": "0.5.9",
+ 		"astro": "2.10.7",
+ 		"astro-compress": "2.0.5",
+ 		"astro-critters": "2.0.4",
+ 		"astro-rome": "2.0.1",
+ 		"astrojs-service-worker": "1.0.0",
+ 		"autoprefixer": "10.4.14",
+ 		"cssnano": "6.0.1",
+ 		"cssnano-preset-advanced": "6.0.1",
+ 		"dotenv": "16.3.1",
+ 		"firebase": "10.1.0",
+ 		"postcss": "8.4.27",
+ 		"postcss-combine-duplicated-selectors": "10.0.3",
+ 		"postcss-combine-media-query": "1.0.1",
+ 		"postcss-import": "15.1.0",
+ 		"postcss-reporter": "7.0.5",
+ 		"postcss-url": "10.1.3",
+ 		"tailwindcss": "3.3.3",
+ 		"zod": "3.21.4"
+ 	},
+ 	"publishConfig": {
+ 		"access": "public"
+ 	}
+ }
diff --git a/website/postcss.config.js b/website/postcss.config.js
new file mode 100644
index 0000000..569db63
--- /dev/null
+++ b/website/postcss.config.js
+ // @ts-nocheck
+ module.exports = {
+ 	plugins: [
+ 		require("postcss-import"),
+ 		require("postcss-url"),
+ 		require("tailwindcss/nesting"),
+ 		require("tailwindcss")("./tailwind.config.js"),
+ 		require("postcss-combine-media-query"),
+ 		require("postcss-combine-duplicated-selectors")({
+ 			removeDuplicatedProperties: true,
+ 			removeDuplicatedValues: false,
+ 		}),
+ 		require("autoprefixer"),
+ 		require("cssnano")({ preset: "advanced" }),
+ 		require("postcss-reporter"),
+ 	],
+ };
diff --git a/website/Public/robots.txt b/website/Public/robots.txt
new file mode 100644
index 0000000..eb05362
--- /dev/null
+++ b/website/Public/robots.txt
+ User-agent: *
+ Disallow:
diff --git a/website/Public/site.webmanifest b/website/Public/site.webmanifest
new file mode 100644
index 0000000..6ea903b
--- /dev/null
+++ b/website/Public/site.webmanifest
+ {
+ 	"background_color": "// TODO Set the background color of the app",
+ 	"categories": [],
+ 	"display": "minimal-ui",
+ 	"name": "// TODO Use the same title as in template.html",
+ 	"orientation": "landscape",
+ 	"short_name": "// TODO Title but lowercase",
+ 	"start_url": "/",
+ 	"theme_color": "// TODO Use the same theme color from template.html"
+ }diff --git a/website/README.md b/website/README.md
new file mode 100644
index 0000000..2240773
--- /dev/null
+++ b/website/README.md
+ # [astro-starter-template] 📄
+ 
+ Starter template for AstroJS.
+ 
+ [astro-starter-template]: https://npmjs.org/astro-starter-template
diff --git a/website/Source/Layout/Base.astro b/website/Source/Layout/Base.astro
new file mode 100644
index 0000000..4ee5431
--- /dev/null
+++ b/website/Source/Layout/Base.astro
+ ---
+ import "@Style/Base.css";
+ 
+ // TODO Place your title and description here
+ const { title = "", description = "" } = Astro.props;
+ ---
+ 
+ <!DOCTYPE html>
+ <html lang="en" class="no-js" dir="ltr">
+ 	<head>
+ 		<script>
+ 			document.documentElement.classList.remove("no-js");
+ 			document.documentElement.classList.add("js");
+ 		</script>
+ 
+ 		<!-- Meta -->
+ 		<title>{title}</title>
+ 		<meta charset="utf-8" />
+ 		<meta name="description" content={description} />
+ 		<meta name="viewport" content="width=device-width,initial-scale=1.0" />
+ 		<!-- TODO Define your color theme in hex here -->
+ 		<meta name="theme-color" content="" />
+ 		<meta name="format-detection" content="telephone=no" />
+ 		<meta name="twitter:dnt" content="on" />
+ 
+ 		<!-- Links -->
+ 		<link
+ 			rel="preconnect"
+ 			href="https://fonts.googleapis.com"
+ 			crossorigin
+ 		/>
+ 		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
+ 		<link
+ 			rel="manifest"
+ 			href="/site.webmanifest"
+ 			crossorigin="use-credentials"
+ 		/>
+ 
+ 		<style is:global>
+ 			@import "@Style/Global.css";
+ 		</style>
+ 
+ 		<!-- Favicon -->
+ 	</head>
+ 	<body>
+ 		<!-- TODO Generate the ID here -->
+ 		<div id="">
+ 			<div class="grow">
+ 				<slot />
+ 			</div>
+ 			<script>
+ 				import "@Script/Firebase";
+ 			</script>
+ 		</div>
+ 	</body>
+ </html>
diff --git a/website/Source/Library/Environment.ts b/website/Source/Library/Environment.ts
new file mode 100644
index 0000000..8993cf3
--- /dev/null
+++ b/website/Source/Library/Environment.ts
+ import * as dotenv from "dotenv";
+ import { z } from "zod";
+ 
+ dotenv.config();
+ 
+ export default z
+ 	.object({
+ 		GH_AUTH_TOKEN: z.string().default(""),
+ 	})
+ 	.parse(process.env);
diff --git a/website/Source/pages/index.astro b/website/Source/pages/index.astro
new file mode 100644
index 0000000..7bc75b9
--- /dev/null
+++ b/website/Source/pages/index.astro
+ ---
+ import Base from "@Layout/Base.astro";
+ ---
+ 
+ <Base />
diff --git a/website/Source/Script/FIREBASE.ts b/website/Source/Script/FIREBASE.ts
new file mode 100644
index 0000000..894d86f
--- /dev/null
+++ b/website/Source/Script/FIREBASE.ts
+ import { initializeApp as Initialize } from "firebase/app";
+ 
+ Initialize({
+ 	apiKey: "", // TODO Replace with your API key
+ 	appId: "", // TODO Replace with your app ID
+ 	authDomain: "", // TODO Replace with your auth domain
+ 	databaseURL: "", // TODO Replace with your database URL
+ 	measurementId: "", // TODO Replace with your measurement ID
+ 	messagingSenderId: "", // TODO Replace with your messaging sender ID
+ 	projectId: "", // TODO Replace with your project ID
+ 	storageBucket: "", // TODO Replace with your storage bucket
+ });
diff --git a/website/Source/Style/Base.css b/website/Source/Style/Base.css
new file mode 100644
index 0000000..510ff1d
--- /dev/null
+++ b/website/Source/Style/Base.css
+ @tailwind base;
+ @tailwind components;
+ @tailwind utilities;
+ @tailwind variants;
diff --git a/website/Source/Style/Global.css b/website/Source/Style/Global.css
new file mode 100644
index 0000000..47992c4
--- /dev/null
+++ b/website/Source/Style/Global.css
+ html {
+ 	-webkit-tap-highlight-color: transparent;
+ }
+ 
+ html,
+ body {
+ 	height: 100%;
+ }
+ 
+ body {
+ 	@apply flex
+ 		flex-grow
+ 		flex-col
+ 		antialiased
+ 		dark:bg-black
+ 		dark:text-white
+ 		sm:subpixel-antialiased;
+ }
+ 
+ img {
+ 	@apply inline-block
+ 		select-none
+ 		outline-none;
+ }
diff --git a/website/tailwind.config.js b/website/tailwind.config.js
new file mode 100644
index 0000000..c9de326
--- /dev/null
+++ b/website/tailwind.config.js
+ module.exports = {
+ 	content: [
+ 		"./Public/**/*.html",
+ 		"./Source/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
+ 	],
+ 	darkMode: "media",
+ 	theme: {
+ 		container: {
+ 			center: true,
+ 		},
+ 		extend: {
+ 			typography: {
+ 				DEFAULT: {
+ 					css: {
+ 						a: {
+ 							"font-weight": "400",
+ 						},
+ 					},
+ 				},
+ 			},
+ 		},
+ 	},
+ 	variants: {},
+ 	plugins: [
+ 		require("@tailwindcss/forms"),
+ 		require("@tailwindcss/typography"),
+ 		require("@tailwindcss/aspect-ratio"),
+ 	],
+ };
diff --git a/website/tsconfig.json b/website/tsconfig.json
new file mode 100644
index 0000000..51baa8b
--- /dev/null
+++ b/website/tsconfig.json
+ {
+ 	"compilerOptions": {
+ 		"baseUrl": "./",
+ 		"moduleResolution": "bundler",
+ 		"paths": {
+ 			"@Asset/*": ["Source/Asset/*"],
+ 			"@Component/*": ["Source/Component/*"],
+ 			"@Layout/*": ["Source/Layout/*"],
+ 			"@Library/*": ["Source/Library/*"],
+ 			"@Option/*": ["Source/Option/*"],
+ 			"@Page/*": ["Source/pages/*"],
+ 			"@Script/*": ["Source/Script/*"],
+ 			"@Style/*": ["Source/Style/*"]
+ 		},
+ 		"types": ["astro/client", "astro/client-image", "astro/env"]
+ 	},
+ 	"extends": "syclone/Source/Configuration/TypeScript",
+ }

🗣️ Summary from first commit to v0.4.9 in .
diff --git a/.github/FUNDING.yml b/.github/FUNDING.yml
deleted file mode 100644
index 22bb4f6..0000000
--- a/.github/FUNDING.yml
+++ /dev/null
- open_collective: playform
diff --git a/.github/workflows/Dependabot.yml b/.github/workflows/Dependabot.yml
index 387fece..cfa5b96 100644
--- a/.github/workflows/Dependabot.yml
+++ b/.github/workflows/Dependabot.yml
-             - uses: dependabot/fetch-metadata@v2.2.0
+             - uses: dependabot/fetch-metadata@v2.0.0
-             - uses: dependabot/fetch-metadata@v2.2.0
+             - uses: dependabot/fetch-metadata@v2.0.0
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index 7b1e399..09e8b75 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
-             TERRAFORM_TELEMETRY: 0
-             - uses: pozil/auto-assign-issue@v2.0.0
+             - uses: pozil/auto-assign-issue@v1.13.0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 216f5b7..2fd4da9 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             TERRAFORM_TELEMETRY: 0
-             - uses: actions/checkout@v4.1.7
+             - uses: actions/checkout@v4.1.2
-             - uses: pnpm/action-setup@v4.0.0
+             - uses: pnpm/action-setup@v3.0.0
-                   version: 9.3.0
+                   version: 8.15.5
-             - uses: actions/setup-node@v4.0.3
+             - uses: actions/setup-node@v4.0.2
-             - uses: actions/upload-artifact@v4.3.4
+             - uses: actions/upload-artifact@v4.3.1
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index a3c4811..b0332f1 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-         env:
-             ADBLOCK: true
-             ASTRO_TELEMETRY_DISABLED: 1
-             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
-             AZURE_CORE_COLLECT_TELEMETRY: 0
-             CHOOSENIM_NO_ANALYTICS: 1
-             DIEZ_DO_NOT_TRACK: 1
-             DOTNET_CLI_TELEMETRY_OPTOUT: 1
-             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
-             DO_NOT_TRACK: 1
-             ET_NO_TELEMETRY: 1
-             GATSBY_TELEMETRY_DISABLED: 1
-             GATSBY_TELEMETRY_OPTOUT: 1
-             GATSBY_TELEMETRY_OPT_OUT: 1
-             GRIT_TELEMETRY_DISABLED: 1
-             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
-             HINT_TELEMETRY: off
-             HOMEBREW_NO_ANALYTICS: 1
-             INFLUXD_REPORTING_DISABLED: true
-             ITERATIVE_DO_NOT_TRACK: 1
-             NEXT_TELEMETRY_DEBUG: 1
-             NEXT_TELEMETRY_DISABLED: 1
-             NG_CLI_ANALYTICS: false
-             NUXT_TELEMETRY_DISABLED: 1
-             PIN_DO_NOT_TRACK: 1
-             POWERSHELL_TELEMETRY_OPTOUT: 1
-             SAM_CLI_TELEMETRY: 0
-             STNOUPGRADE: 1
-             STRIPE_CLI_TELEMETRY_OPTOUT: 1
-             TELEMETRY_DISABLED: 1
-             TERRAFORM_TELEMETRY: 0
- 
-             - uses: actions/checkout@v4.1.7
+             - uses: actions/checkout@v4.1.2
-             - uses: actions/setup-node@v4.0.3
+             - uses: actions/setup-node@v4.0.2
-                   npm publish --legacy-peer-deps --provenance --ignore-scripts
+                   npm install --legacy-peer-deps
+                   npm publish --legacy-peer-deps --provenance
diff --git a/.gitignore b/.gitignore
deleted file mode 100644
index 85d6103..0000000
--- a/.gitignore
+++ /dev/null
- /undefined
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index d35c668..2a61435 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- Community@PlayForm.Cloud. All complaints will be reviewed and investigated
+ Community@playform.cloud. All complaints will be reviewed and investigated
- [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
+ [https://WWW.Contributor-Covenant.Org/version/2/1/code_of_conduct.html][v2.1].
- [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
- [https://www.contributor-covenant.org/translations][translations].
+ [https://WWW.Contributor-Covenant.Org/faq][FAQ]. Translations are available at
+ [https://WWW.Contributor-Covenant.Org/translations][translations].
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [homepage]: https://WWW.Contributor-Covenant.Org
+ [v2.1]: https://WWW.Contributor-Covenant.Org/version/2/1/code_of_conduct.html
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
+ [FAQ]: https://WWW.Contributor-Covenant.Org/faq
+ [translations]: https://WWW.Contributor-Covenant.Org/translations
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index c749fbe..323d746 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
- community@playform.cloud. All complaints will be reviewed and investigated
+ Community@playform.cloud. All complaints will be reviewed and investigated
- [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
+ [https://WWW.Contributor-Covenant.Org/version/2/1/code_of_conduct.html][v2.1].
- [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
- [https://www.contributor-covenant.org/translations][translations].
- 
- [homepage]: HTTPS://www.contributor-covenant.org
- [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
- [FAQ]: HTTPS://www.contributor-covenant.org/faq
- [translations]: HTTPS://www.contributor-covenant.org/translations
+ [https://WWW.Contributor-Covenant.Org/faq][FAQ]. Translations are available at
+ [https://WWW.Contributor-Covenant.Org/translations][translations].
+ 
+ [homepage]: https://WWW.Contributor-Covenant.Org
+ [v2.1]: https://WWW.Contributor-Covenant.Org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: https://github.com/mozilla/diversity
+ [FAQ]: https://WWW.Contributor-Covenant.Org/faq
+ [translations]: https://WWW.Contributor-Covenant.Org/translations
diff --git a/jsconfig.json b/jsconfig.json
deleted file mode 100644
index 7cd583e..0000000
--- a/jsconfig.json
+++ /dev/null
- {
- 	"$schema": "https://json.schemastore.org/jsconfig",
- 	"compilerOptions": {
- 		"allowArbitraryExtensions": true,
- 		"allowImportingTsExtensions": true,
- 		"allowJs": true,
- 		"allowSyntheticDefaultImports": true,
- 		"allowUmdGlobalAccess": false,
- 		"allowUnreachableCode": false,
- 		"allowUnusedLabels": false,
- 		"alwaysStrict": true,
- 		"assumeChangesOnlyAffectDirectDependencies": true,
- 		"baseUrl": "./",
- 		"checkJs": true,
- 		"declaration": true,
- 		"disableReferencedProjectLoad": false,
- 		"emitDeclarationOnly": true,
- 		"esModuleInterop": true,
- 		"exactOptionalPropertyTypes": true,
- 		"forceConsistentCasingInFileNames": true,
- 		"isolatedModules": true,
- 		"jsx": "preserve",
- 		"lib": ["ESNext"],
- 		"module": "ESNext",
- 		"moduleResolution": "Bundler",
- 		"noFallthroughCasesInSwitch": true,
- 		"noImplicitOverride": true,
- 		"noImplicitReturns": true,
- 		"noImplicitThis": true,
- 		"noPropertyAccessFromIndexSignature": true,
- 		"noUncheckedIndexedAccess": true,
- 		"noUnusedLocals": true,
- 		"noUnusedParameters": true,
- 		"outDir": "Target",
- 		"paths": {
- 			"@Asset/*": ["Source/Asset/*"],
- 			"@Class/*": ["Source/Class/*"],
- 			"@Component/*": ["Source/Component/*"],
- 			"@Context/*": ["Source/Context/*"],
- 			"@Element/*": ["Source/Element/*"],
- 			"@Function/*": ["Source/Function/*"],
- 			"@Interface/*": ["Source/Interface/*"],
- 			"@Layout/*": ["Source/Layout/*"],
- 			"@Library/*": ["Source/Library/*"],
- 			"@Notation/*": ["Source/Notation/*"],
- 			"@Option/*": ["Source/Option/*"],
- 			"@Page/*": ["Source/pages/*"],
- 			"@Script/*": ["Source/Script/*"],
- 			"@Stylesheet/*": ["Source/Stylesheet/*"],
- 			"@Target/*": ["Source/Target/*"],
- 			"@Test/*": ["Source/Test/*"],
- 			"@Type/*": ["Source/Type/*"],
- 			"@Variable/*": ["Source/Variable/*"]
- 		},
- 		"resolveJsonModule": true,
- 		"skipLibCheck": true,
- 		"strict": true,
- 		"strictBindCallApply": true,
- 		"strictFunctionTypes": true,
- 		"strictNullChecks": true,
- 		"target": "ESNext",
- 		"types": ["node", "@types/node"],
- 		"verbatimModuleSyntax": true
- 	},
- 	"include": ["Source"],
- 	"exclude": [
- 		".git",
- 		"node_modules",
- 		"Target",
- 		"**/.git/**",
- 		"**/node_modules/**",
- 		"**/Target/**",
- 		"**/samples/**"
- 	],
- 	"jshint.options": {
- 		"esversion": 6
- 	}
- }
diff --git a/LICENSE b/LICENSE
index f236d76..cca5808 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2023-2024 PlayForm
+ Copyright (c) 2023-2024 Playform
diff --git a/package.json b/package.json
index ef06128..62f7ebb 100644
--- a/package.json
+++ b/package.json
- 	"name": "@playform/build",
- 	"version": "0.1.1",
+ 	"name": "typescript-esbuild",
+ 	"version": "0.4.9",
- 	"description": "🌀 Build —",
- 	"keywords": [
- 		"javascript",
- 		"typescript",
- 		"esbuild",
- 		"playform"
- 	],
- 	"homepage": "HTTPS://GitHub.Com/PlayForm/Build#ReadMe",
+ 	"description": "🌀 ESBuild Wrapper.",
+ 	"keywords": ["javascript", "typescript", "esbuild"],
+ 	"homepage": "https://github.com/Playform/TypeScriptESBuild#readme",
- 		"url": "HTTPS://GitHub.Com/PlayForm/Build/issues"
+ 		"url": "https://github.com/Playform/TypeScriptESBuild/issues"
- 		"url": "git+https://github.com/PlayForm/Build.git"
+ 		"url": "git+https://github.com/Playform/TypeScriptESBuild.git"
- 		"name": "🖋️ Source — 👐🏻 Open —",
- 		"email": "Source/Open@PlayForm.Cloud",
- 		"url": "HTTPS://PlayForm.Cloud"
+ 		"name": "Playform",
+ 		"email": "hello@playform.cloud",
+ 		"url": "https://playform.cloud"
- 	"main": "./Target/Class/Build.js",
- 	"types": "./Target/Class/Build.d.ts",
+ 	"main": "./Target/Class/TypeScriptESBuild.js",
+ 	"types": "./Target/Class/TypeScriptESBuild.d.ts",
- 		"Build": "Target/Class/Build.js"
+ 		"TypeScriptESBuild": "Target/Class/TypeScriptESBuild.js"
- 		"Run": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts' --Watch",
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts'"
+ 		"Document": "TypeScriptDocument 'Source/**/*.ts'",
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts'"
- 		"@types/node": "20.14.11",
- 		"commander": "12.1.0",
- 		"deepmerge-ts": "7.1.0",
- 		"esbuild": "0.23.0",
+ 		"@types/node": "20.11.30",
+ 		"commander": "12.0.0",
+ 		"deepmerge-ts": "5.1.0",
+ 		"esbuild": "0.20.2",
+ 		"esbuild-plugin-copy": "2.1.1",
- 		"tsc-alias": "1.8.10",
- 		"typescript": "*"
+ 		"typescript": "5.4.3"
- 		"ts-node": "11.0.0-beta.1"
+ 		"ts-node": "10.9.2"
+ 	},
+ 	"peerDependencies": {
+ 		"typescript-document": "0.0.6"
- 		"provenance": true,
diff --git a/README.md b/README.md
index f226e1e..e9a550a 100644
--- a/README.md
+++ b/README.md
- # 🌀 [Build] —
+ # 🌀 [TypeScriptESBuild]
- Builds all your TypeScript files into JavaScript.
+ Build all your TypeScript files into JavaScript.
- npm install -D -E @playform/build
+ npm install -D -E typescript-esbuild
- npx @playform/build 'Source/**/*.ts'
+ npx typescript-esbuild 'Source/**/*.ts'
- Help:
- 
- ```sh
- Usage: Build [options] <File...>
- 
- 🌀 Build —
- 
- Arguments:
-   File                      📝 File —
- 
- Options:
-   -V, --version             output the version number
-   -ES, --ESBuild <File>     📜 ESBuild —
-   -TS, --TypeScript <File>  📜 TypeScript — (default: "tsconfig.json")
-   -W --Watch                👁️ Watch —
-   -h, --help                display help for command
- ```
- 
- Or in a `package.json` file:
+ or in a `package.json` file:
- 		"Run": "Build 'Source/**/*.ts' --Watch",
- 		"prepublishOnly": "Build 'Source/**/*.ts'"
+ 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
- ### 📜 ESBuild Configuration
+ ### ESBuild Configuration
- 		"prepublishOnly": "Build 'Source/**/*.ts' --ESBuild ESBuild.ts"
+ 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es ESBuild.ts"
- ### 📜 TypeScript Configuration
+ ### TypeScript Configuration
- 	"extends": "@playform/build/tsconfig",
- 	"include": ["Source"]
- }
- ```
- 
- ### JSConfig Configuration (optional)
- 
- `jsconfig.json`
- 
- ```json
- {
- 	"compilerOptions": {
- 		"outDir": "Target"
- 	},
- 	"extends": "@playform/build/jsconfig",
+ 	"extends": "typescript-esbuild/Target/Notation/TypeScript",
- [ESBuild]: HTTPS://NPMJS.Org/esbuild
- [TypeDoc]: HTTPS://NPMJS.Org/typedoc
- [Build]: HTTPS://NPMJS.Org/@playform/build
+ [ESBuild]: https://npmjs.org/esbuild
+ [TypeDoc]: https://npmjs.org/typedoc
+ [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
diff --git a/Source/Class/Build.ts b/Source/Class/Build.ts
deleted file mode 100644
index 87847d6..0000000
--- a/Source/Class/Build.ts
+++ /dev/null
- #!/usr/bin/env node
- 
- /**
-  * @module Build
-  *
-  */
- export default new (await import("commander")).Command()
- 	.name("Build")
- 	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
- 	.description("🌀 Build —")
- 	.argument("<File...>", "📝 File —")
- 	.option("-ES, --ESBuild <File>", "📜 ESBuild —")
- 	.option("-TS, --TypeScript <File>", "📜 TypeScript —", "tsconfig.json")
- 	.option("-W --Watch", "👁️ Watch —")
- 	.action((await import("../Function/Build.js")).default)
- 	.parse();
diff --git a/Source/Class/TypeScriptESBuild.ts b/Source/Class/TypeScriptESBuild.ts
new file mode 100644
index 0000000..8ef9c08
--- /dev/null
+++ b/Source/Class/TypeScriptESBuild.ts
+ #!/usr/bin/env node
+ 
+ /**
+  * @module TypeScriptESBuild
+  *
+  */
+ export default new (await import("commander")).Command()
+ 	.name("TypeScriptESBuild")
+ 	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
+ 	.description("🌀 Build TypeScript.")
+ 	.argument("<File...>", "Build File.")
+ 	.option("-ES, --ESBuild <File>", "ESBuild Configuration.")
+ 	.option("-TS, --TypeScript <File>", "TypeScript Configuration.")
+ 	.action((await import("../Function/Build.js")).default)
+ 	.parse();
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index 89d087c..52074eb 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- export default (async (...[File, Option]: Parameters<Interface>) => {
+ export default (async (...[File, Option]: Parameters<Type>) => {
- 	let Configuration: BuildOptions = Merge(
+ 	const Configuration = Merge(
- 			tsconfig: Option?.TypeScript ?? "tsconfig.json",
- 	Configuration = Option?.ESBuild
+ 	console.log(
+ 		await (await import("esbuild")).analyzeMetafile(
+ 			(
+ 				await (
+ 					await import("esbuild")
+ 				).build(
+ 					Option?.ESBuild
- 				await (await import("@Function/File.js")).default(
- 					Option.ESBuild,
- 				),
+ 								await (
+ 									await import("../Function/File.js")
+ 								).default(Option.ESBuild),
- 		: Configuration;
- 
- 	Configuration.plugins?.push({
- 		name: "TypeScript",
- 		setup({ onEnd }) {
- 			onEnd(async () => {
- 				await Exec(`tsc -p ${Configuration.tsconfig}`);
- 				await Exec(`tsc-alias -f -p ${Configuration.tsconfig}`);
- 			});
- 		},
- 	});
- 
- 	if (Option?.Watch) {
- 		const Context = await (await import("esbuild")).context(Configuration);
- 
- 		await Context.watch();
- 	} else {
- 		console.log(
- 			await (await import("esbuild")).analyzeMetafile(
- 				(await (await import("esbuild")).build(Configuration))
- 					?.metafile ?? "",
+ 						: Configuration,
+ 				)
+ 			)?.metafile ?? "",
- 	}
- }) satisfies Interface as Interface;
- import type { BuildOptions } from "esbuild";
+ 	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
+ }) satisfies Type as Type;
- import type Interface from "../Interface/Build.js";
+ import type Type from "../Interface/Build.js";
+ export const { resolve } = await import("path");
+ 
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 6f79df2..8f53f41 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Interface>
+ 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Type>
- }) satisfies Interface as Interface;
+ }) satisfies Type as Type;
- import type Interface from "../Interface/Exec.js";
+ import type Type from "../Interface/Exec.js";
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 9bb1a75..212ba4a 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- export default (async (...[Path]: Parameters<Interface>) => {
+ export default (async (...[Path]: Parameters<Type>) => {
- 		const { options: Option } = (
+ 		const { options } = (
- 					await import("../Function/JSON.js")
+ 					await import("./JSON.js")
- 					"../../tsconfig.json",
+ 					"../Notation/TypeScript.json",
- 				Option,
- 				(await import("typescript")).default.createCompilerHost(Option),
+ 				options,
+ 				(await import("typescript")).default.createCompilerHost(
+ 					options,
+ 				),
- 				Option,
+ 				options,
- }) satisfies Interface as Interface;
+ }) satisfies Type as Type;
- import type Interface from "../Interface/File.js";
+ import type Type from "../Interface/File.js";
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index b44f0ac..9f75935 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- export default (async (...[File, From]: Parameters<Interface>) =>
+ export default (async (...[File, From]: Parameters<Type>) =>
- 	)) satisfies Interface as Interface;
+ 	)) satisfies Type as Type;
- import type Interface from "../Interface/JSON.js";
+ import type Type from "../Interface/JSON.js";
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
index adc696d..8586054 100644
--- a/Source/Function/Merge.ts
+++ b/Source/Function/Merge.ts
- export default (await import("deepmerge-ts")).deepmergeCustom({
+ export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
- });
+ }) satisfies Type<Generic> as Type<Generic>;
+ 
+ import type Type from "../Interface/Merge.js";
+ import type { Generic } from "../Interface/Merge.js";
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
index e32d153..01dce34 100644
--- a/Source/Interface/Build.ts
+++ b/Source/Interface/Build.ts
- export default interface Interface {
+ export default interface Type {
- 			Watch?: boolean;
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 24b86d3..ff2ec1b 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- export default interface Interface {
+ export default interface Type {
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
index 0de0809..607aee2 100644
--- a/Source/Interface/File.ts
+++ b/Source/Interface/File.ts
- export default interface Interface {
+ export default interface Type {
diff --git a/Source/Interface/JSON.ts b/Source/Interface/JSON.ts
index 3b5f8df..9447d0c 100644
--- a/Source/Interface/JSON.ts
+++ b/Source/Interface/JSON.ts
- export default interface Interface {
+ export default interface Type {
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
new file mode 100644
index 0000000..5e66d23
--- /dev/null
+++ b/Source/Interface/Merge.ts
+ /**
+  * @module Merge
+  *
+  * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeMergeFunctionsURIs.
+  *
+  * @template PMF - A type parameter representing Partial<DeepMergeMergeFunctionsURIs>.
+  *
+  */
+ export default interface Type<
+ 	PMF extends Partial<DeepMergeMergeFunctionsURIs>,
+ > {
+ 	/**
+ 	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
+ 	 *
+ 	 * @param ...Objects - An arbitrary number of objects to be merged.
+ 	 *
+ 	 */
+ 	<Ts extends readonly unknown[]>(
+ 		...Objects: Ts
+ 	): DeepMergeHKT<
+ 		Ts,
+ 		GetDeepMergeMergeFunctionsURIs<PMF>,
+ 		DeepMergeBuiltInMetaData
+ 	>;
+ }
+ 
+ export interface Generic {
+ 	DeepMergeArraysURI: DeepMergeLeafURI;
+ }
+ 
+ import type {
+ 	DeepMergeBuiltInMetaData,
+ 	DeepMergeHKT,
+ 	DeepMergeLeafURI,
+ 	DeepMergeMergeFunctionsURIs,
+ 	GetDeepMergeMergeFunctionsURIs,
+ } from "deepmerge-ts";
diff --git a/Source/Notation/TypeScript.json b/Source/Notation/TypeScript.json
new file mode 100644
index 0000000..80ad3c6
--- /dev/null
+++ b/Source/Notation/TypeScript.json
+ {
+ 	"$schema": "https://json.schemastore.org/tsconfig",
+ 	"compilerOptions": {
+ 		"allowArbitraryExtensions": true,
+ 		"allowImportingTsExtensions": true,
+ 		"allowJs": true,
+ 		"allowSyntheticDefaultImports": true,
+ 		"allowUmdGlobalAccess": false,
+ 		"allowUnreachableCode": false,
+ 		"allowUnusedLabels": false,
+ 		"alwaysStrict": true,
+ 		"assumeChangesOnlyAffectDirectDependencies": true,
+ 		"baseUrl": "./",
+ 		"checkJs": true,
+ 		"declaration": true,
+ 		"disableReferencedProjectLoad": false,
+ 		"emitDeclarationOnly": true,
+ 		"esModuleInterop": true,
+ 		"exactOptionalPropertyTypes": true,
+ 		"forceConsistentCasingInFileNames": true,
+ 		"isolatedModules": true,
+ 		"jsx": "preserve",
+ 		"lib": ["ESNext"],
+ 		"module": "ESNext",
+ 		"moduleResolution": "Bundler",
+ 		"noFallthroughCasesInSwitch": true,
+ 		"noImplicitOverride": true,
+ 		"noImplicitReturns": true,
+ 		"noPropertyAccessFromIndexSignature": true,
+ 		"noUncheckedIndexedAccess": true,
+ 		"noUnusedLocals": true,
+ 		"noUnusedParameters": true,
+ 		"resolveJsonModule": true,
+ 		"skipLibCheck": true,
+ 		"strict": true,
+ 		"strictBindCallApply": true,
+ 		"strictFunctionTypes": true,
+ 		"strictNullChecks": true,
+ 		"target": "ESNext",
+ 		"types": ["node", "@types/node"],
+ 		"verbatimModuleSyntax": true,
+ 		"noImplicitThis": true,
+ 		"paths": {
+ 			"@Asset/*": ["Source/Asset/*"],
+ 			"@Class/*": ["Source/Class/*"],
+ 			"@Component/*": ["Source/Component/*"],
+ 			"@Context/*": ["Source/Context/*"],
+ 			"@Element/*": ["Source/Element/*"],
+ 			"@Function/*": ["Source/Function/*"],
+ 			"@Interface/*": ["Source/Interface/*"],
+ 			"@Layout/*": ["Source/Layout/*"],
+ 			"@Library/*": ["Source/Library/*"],
+ 			"@Notation/*": ["Source/Notation/*"],
+ 			"@Option/*": ["Source/Option/*"],
+ 			"@Page/*": ["Source/pages/*"],
+ 			"@Script/*": ["Source/Script/*"],
+ 			"@Stylesheet/*": ["Source/Stylesheet/*"],
+ 			"@Type/*": ["Source/Type/*"],
+ 			"@Variable/*": ["Source/Variable/*"]
+ 		}
+ 	},
+ 	"ts-node": {
+ 		"esm": true
+ 	}
+ }
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
index ed62997..c09869e 100644
--- a/Source/Variable/ESBuild.ts
+++ b/Source/Variable/ESBuild.ts
- 	logLevel: "debug",
- 	tsconfig: "tsconfig.json",
+ 	logLevel: "debug",
+ 		(await import("esbuild-plugin-copy")).copy({
+ 			resolveFrom: "out",
+ 			assets: [
+ 				{
+ 					from: "./Source/Notation/TypeScript.json",
+ 					to: "./Notation/",
+ 				},
+ 			],
+ 		}),
diff --git a/tsconfig.json b/tsconfig.json
index d03c6ae..12e0400 100644
--- a/tsconfig.json
+++ b/tsconfig.json
- 	"$schema": "https://json.schemastore.org/tsconfig",
- 		"allowArbitraryExtensions": true,
- 		"allowImportingTsExtensions": true,
- 		"allowJs": true,
- 		"allowSyntheticDefaultImports": true,
- 		"allowUmdGlobalAccess": false,
- 		"allowUnreachableCode": false,
- 		"allowUnusedLabels": false,
- 		"alwaysStrict": true,
- 		"assumeChangesOnlyAffectDirectDependencies": true,
- 		"baseUrl": "./",
- 		"checkJs": true,
- 		"declaration": true,
- 		"disableReferencedProjectLoad": false,
- 		"emitDeclarationOnly": true,
- 		"esModuleInterop": true,
- 		"exactOptionalPropertyTypes": true,
- 		"forceConsistentCasingInFileNames": true,
- 		"isolatedModules": true,
- 		"jsx": "preserve",
- 		"lib": ["ESNext"],
- 		"module": "ESNext",
- 		"moduleResolution": "Bundler",
- 		"noFallthroughCasesInSwitch": true,
- 		"noImplicitOverride": true,
- 		"noImplicitReturns": true,
- 		"noImplicitThis": true,
- 		"noPropertyAccessFromIndexSignature": true,
- 		"noUncheckedIndexedAccess": true,
- 		"noUnusedLocals": true,
- 		"noUnusedParameters": true,
- 		"outDir": "Target",
- 		"paths": {
- 			"@Asset/*": ["Source/Asset/*"],
- 			"@Class/*": ["Source/Class/*"],
- 			"@Component/*": ["Source/Component/*"],
- 			"@Context/*": ["Source/Context/*"],
- 			"@Element/*": ["Source/Element/*"],
- 			"@Function/*": ["Source/Function/*"],
- 			"@Interface/*": ["Source/Interface/*"],
- 			"@Layout/*": ["Source/Layout/*"],
- 			"@Library/*": ["Source/Library/*"],
- 			"@Notation/*": ["Source/Notation/*"],
- 			"@Option/*": ["Source/Option/*"],
- 			"@Page/*": ["Source/pages/*"],
- 			"@Script/*": ["Source/Script/*"],
- 			"@Stylesheet/*": ["Source/Stylesheet/*"],
- 			"@Target/*": ["Source/Target/*"],
- 			"@Test/*": ["Source/Test/*"],
- 			"@Type/*": ["Source/Type/*"],
- 			"@Variable/*": ["Source/Variable/*"]
+ 		"outDir": "Target"
- 		"resolveJsonModule": true,
- 		"skipLibCheck": true,
- 		"strict": true,
- 		"strictBindCallApply": true,
- 		"strictFunctionTypes": true,
- 		"strictNullChecks": true,
- 		"target": "ESNext",
- 		"types": ["node", "@types/node"],
- 		"verbatimModuleSyntax": true
- 	},
- 	"include": ["Source"],
- 	"ts-node": {
- 		"esm": true
- 	}
+ 	"extends": "./Source/Notation/TypeScript",
+ 	"include": ["Source"]

🗣️ Summary from syclone@v0.1.5 to syclone@v0.1.6 in .
diff --git a/NPM/package.json b/NPM/package.json
index 13174ee..1c308bf 100644
--- a/NPM/package.json
+++ b/NPM/package.json
- 	"version": "0.1.5",
+ 	"version": "0.1.6",
diff --git a/NPM/README.md b/NPM/README.md
index e8d2601..04cba4a 100644
--- a/NPM/README.md
+++ b/NPM/README.md
- 		"syclone": "0.1.5"
+ 		"syclone": "0.1.6"

🗣️ Summary from syclone@v0.1.6 to tsbundle@v0.1.5 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index ccb993f..8da9a91 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
+                   scope: "@nikolarhristov"
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 752d0e9..1149962 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-                   registry-url: "https://registry.npmjs.org"
+                   registry-url: https://npm.pkg.github.com/
-                   NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
+                   NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
diff --git a/NPM/package.json b/NPM/package.json
index 1c308bf..22f7bcb 100644
--- a/NPM/package.json
+++ b/NPM/package.json
- 	"name": "syclone",
- 	"version": "0.1.6",
+ 	"name": "@nikolarhristov/tsbundle",
+ 	"version": "0.1.5",
- 	"homepage": "https://github.com/NikolaRHristov/Syclone#readme",
+ 	"homepage": "https://github.com/NikolaRHristov/TSBundle#readme",
- 		"url": "https://github.com/NikolaRHristov/Syclone/issues"
+ 		"url": "https://github.com/NikolaRHristov/TSBundle/issues"
- 		"url": "git+https://github.com/NikolaRHristov/Syclone.git",
+ 		"url": "git+https://github.com/NikolaRHristov/TSBundle.git",
- 		"Syclone": "Target/Bin.js"
+ 		"TSBundle": "Target/Bin.js"
- 		"access": "public"
+ 		"access": "public",
+ 		"@NikolaRHristov:registry": "https://npm.pkg.github.com"
diff --git a/NPM/README.md b/NPM/README.md
index 04cba4a..058e525 100644
--- a/NPM/README.md
+++ b/NPM/README.md
- # [Syclone] 🌀
+ # [TSBundle] 🌀
- npm install -D -E syclone
+ npm install -D -E @nikolarhristov/tsbundle
- 		"prepublishOnly": "Syclone 'Source/**/*.ts'"
+ 		"prepublishOnly": "TSBundle 'Source/**/*.ts'"
- 		"syclone": "0.1.6"
+ 		"@nikolarhristov/tsbundle": "0.1.5"
- 		"prepublishOnly": "Syclone 'Source/**/*.ts' -es esbuild.ts"
+ 		"prepublishOnly": "TSBundle 'Source/**/*.ts' -es esbuild.ts"
- [Syclone]: https://npmjs.org/syclone
+ [TSBundle]: https://npmjs.org/@nikolarhristov/tsbundle
diff --git a/NPM/Source/Index.ts b/NPM/Source/Index.ts
index 193827d..54f6f0d 100644
--- a/NPM/Source/Index.ts
+++ b/NPM/Source/Index.ts
- 		.name("Syclone")
+ 		.name("TSBundle")
diff --git a/website/package.json b/website/package.json
index c246119..50c218c 100644
--- a/website/package.json
+++ b/website/package.json
- 	"name": "syclone-web",
+ 	"name": "tsbundle-web",
- 	"homepage": "https://github.com/NikolaRHristov/Syclone#readme",
+ 	"homepage": "https://github.com/NikolaRHristov/TSBundle#readme",
- 		"url": "https://github.com/NikolaRHristov/Syclone/issues"
+ 		"url": "https://github.com/NikolaRHristov/TSBundle/issues"
- 		"url": "git+https://github.com/NikolaRHristov/Syclone.git",
+ 		"url": "git+https://github.com/NikolaRHristov/TSBundle.git",
diff --git a/website/tsconfig.json b/website/tsconfig.json
index 51baa8b..3496e2a 100644
--- a/website/tsconfig.json
+++ b/website/tsconfig.json
- 	"extends": "syclone/Source/Configuration/TypeScript",
+ 	"extends": "@nikolarhristov/tsbundle/Source/Configuration/TypeScript",

🗣️ Summary from tsbundle@v0.1.5 to v in .
diff --git a/.github/dependabot.yml b/.github/dependabot.yml
index 4528898..0bd5833 100644
--- a/.github/dependabot.yml
+++ b/.github/dependabot.yml
-       directory: "/NPM"
-       schedule:
-           interval: "daily"
-       versioning-strategy: increase
- 
-     - package-ecosystem: "npm"
-       directory: "/website"
+       directory: "/"
diff --git a/.github/workflows/codeql.yml b/.github/workflows/codeql.yml
deleted file mode 100644
index 8cedfe5..0000000
--- a/.github/workflows/codeql.yml
+++ /dev/null
- name: CodeQL
- 
- concurrency:
-     group: CodeQL-${{ github.workflow }}-${{ github.ref }}
-     cancel-in-progress: true
- 
- permissions:
-     security-events: write
-     contents: write
-     pull-requests: write
- 
- on:
-     workflow_dispatch:
-     push:
-         branches: [main]
-     pull_request:
-         branches: [main]
-     workflow_call:
- 
- jobs:
-     CodeQL:
-         runs-on: ubuntu-latest
- 
-         env:
-             ADBLOCK: true
-             TELEMETRY_DISABLED: 1
-             ASTRO_TELEMETRY_DISABLED: 1
-             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
-             AZURE_CORE_COLLECT_TELEMETRY: 0
-             CHOOSENIM_NO_ANALYTICS: 1
-             DIEZ_DO_NOT_TRACK: 1
-             DO_NOT_TRACK: 1
-             DOTNET_CLI_TELEMETRY_OPTOUT: 1
-             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
-             ET_NO_TELEMETRY: 1
-             GATSBY_TELEMETRY_DISABLED: 1
-             GATSBY_TELEMETRY_OPT_OUT: 1
-             GATSBY_TELEMETRY_OPTOUT: 1
-             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
-             HINT_TELEMETRY: off
-             HOMEBREW_NO_ANALYTICS: 1
-             INFLUXD_REPORTING_DISABLED: true
-             ITERATIVE_DO_NOT_TRACK: 1
-             NEXT_TELEMETRY_DEBUG: 1
-             NEXT_TELEMETRY_DISABLED: 1
-             NG_CLI_ANALYTICS: false
-             NUXT_TELEMETRY_DISABLED: 1
-             PIN_DO_NOT_TRACK: 1
-             POWERSHELL_TELEMETRY_OPTOUT: 1
-             SAM_CLI_TELEMETRY: 0
-             STNOUPGRADE: 1
-             STRIPE_CLI_TELEMETRY_OPTOUT: 1
- 
-         steps:
-             - uses: actions/checkout@v3.5.3
- 
-             - uses: github/codeql-action/init@v2.21.3
-               with:
-                   languages: javascript
- 
-             - name: Perform CodeQL Analysis
-               uses: github/codeql-action/analyze@v2.21.3
-               with:
-                   category: "/language:javascript"
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
new file mode 100644
index 0000000..dcb957d
--- /dev/null
+++ b/.github/workflows/GitHub.yml
+ name: GitHub
+ 
+ concurrency:
+     group: GitHub-${{ github.workflow }}-${{ github.ref }}
+     cancel-in-progress: true
+ 
+ permissions:
+     issues: write
+     pull-requests: write
+ 
+ on:
+     issues:
+         types: [opened]
+     pull_request:
+         types: [opened]
+ 
+ jobs:
+     Assign:
+         runs-on: ubuntu-latest
+ 
+         env:
+             ADBLOCK: true
+             TELEMETRY_DISABLED: 1
+             ASTRO_TELEMETRY_DISABLED: 1
+             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
+             AZURE_CORE_COLLECT_TELEMETRY: 0
+             CHOOSENIM_NO_ANALYTICS: 1
+             DIEZ_DO_NOT_TRACK: 1
+             DO_NOT_TRACK: 1
+             DOTNET_CLI_TELEMETRY_OPTOUT: 1
+             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
+             ET_NO_TELEMETRY: 1
+             GATSBY_TELEMETRY_DISABLED: 1
+             GATSBY_TELEMETRY_OPT_OUT: 1
+             GATSBY_TELEMETRY_OPTOUT: 1
+             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
+             HINT_TELEMETRY: off
+             HOMEBREW_NO_ANALYTICS: 1
+             INFLUXD_REPORTING_DISABLED: true
+             ITERATIVE_DO_NOT_TRACK: 1
+             NEXT_TELEMETRY_DEBUG: 1
+             NEXT_TELEMETRY_DISABLED: 1
+             NG_CLI_ANALYTICS: false
+             NUXT_TELEMETRY_DISABLED: 1
+             PIN_DO_NOT_TRACK: 1
+             POWERSHELL_TELEMETRY_OPTOUT: 1
+             SAM_CLI_TELEMETRY: 0
+             STNOUPGRADE: 1
+             STRIPE_CLI_TELEMETRY_OPTOUT: 1
+ 
+         steps:
+             - uses: pozil/auto-assign-issue@v1.12.0
+               with:
+                   repo-token: ${{ secrets.GITHUB_TOKEN }}
+                   assignees: NikolaRHristov
+                   numOfAssignee: 1
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 8da9a91..d97ceff 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v3.5.3
+             - uses: actions/checkout@v4.0.0
-             - uses: actions/setup-node@v3.7.0
+             - uses: actions/setup-node@v3.8.1
-                   cache-dependency-path: ./NPM/pnpm-lock.yaml
-                   scope: "@nikolarhristov"
+                   cache-dependency-path: ./pnpm-lock.yaml
-               working-directory: ./NPM
+               working-directory: .
-               working-directory: ./NPM
+               working-directory: .
-             - uses: actions/upload-artifact@v3.1.2
+             - uses: actions/upload-artifact@v3.1.3
-                   name: .-NPM-Node-${{ matrix.node-version }}-Target
-                   path: ./NPM/Target
- 
-             - uses: actions/setup-node@v3.7.0
-               with:
-                   node-version: ${{ matrix.node-version }}
-                   cache: "pnpm"
-                   cache-dependency-path: ./website/pnpm-lock.yaml
- 
-             - run: pnpm install
-               working-directory: ./website
- 
-             - run: pnpm run prepublishOnly
-               working-directory: ./website
- 
-             - uses: actions/upload-artifact@v3.1.2
-               with:
-                   name: .-website-Node-${{ matrix.node-version }}-Target
-                   path: ./website/Target
+                   name: .-Node-${{ matrix.node-version }}-Target
+                   path: ./Target
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 1149962..33f5e8b 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
+ 
-             - uses: actions/checkout@v3.5.3
+             - uses: actions/checkout@v4.0.0
-             - uses: actions/setup-node@v3.7.0
+             - uses: actions/setup-node@v3.8.1
-                   registry-url: https://npm.pkg.github.com/
+                   registry-url: "https://registry.npmjs.org"
-             - name: Publish ./NPM
+             - name: Publish .
-               working-directory: ./NPM
+               working-directory: .
-                   NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
+                   NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
diff --git a/.npmignore b/.npmignore
new file mode 100644
index 0000000..4a67f96
--- /dev/null
+++ b/.npmignore
+ .github/
+ .turbo/
+ CHANGELOG.md
+ CODE_OF_CONDUCT.md
+ CONTRIBUTING.md
+ Source/
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
new file mode 100644
index 0000000..b4f1f9b
--- /dev/null
+++ b/CODE_OF_CONDUCT.md
+ # Code of Conduct
+ 
+ ## Our Pledge
+ 
+ Welcome to our community! We are committed to creating a welcoming and inclusive
+ environment for all contributors. As members, contributors, and leaders, we
+ pledge to make participation in our community a harassment-free experience for
+ everyone, regardless of:
+ 
+ -   Age
+ -   Body size
+ -   Visible or invisible disability
+ -   Ethnicity
+ -   Sex characteristics
+ -   Gender identity and expression
+ -   Level of experience
+ -   Education
+ -   Socio-economic status
+ -   Nationality
+ -   Personal appearance
+ -   Race
+ -   Caste
+ -   Color
+ -   Religion
+ -   Sexual identity and orientation
+ 
+ We promise to act and interact in ways that contribute to an open, welcoming,
+ diverse, inclusive, and healthy community.
+ 
+ ## Our Standards
+ 
+ Examples of behavior that contributes to a positive environment for our
+ community include:
+ 
+ -   Demonstrating empathy and kindness toward other people
+ -   Being respectful of differing opinions, viewpoints, and experiences
+ -   Giving and gracefully accepting constructive feedback
+ -   Accepting responsibility and apologizing to those affected by our mistakes,
+     and learning from the experience
+ -   Focusing on what is best not just for us as individuals but for the overall
+     community
+ 
+ Examples of unacceptable behavior include:
+ 
+ -   The use of sexualized language or imagery, and sexual attention or advances
+     of any kind
+ -   Trolling, insulting, or derogatory comments, and personal or political
+     attacks
+ -   Public or private harassment
+ -   Publishing others' private information, such as a physical or email address,
+     without their explicit permission
+ -   Other conduct which could reasonably be considered inappropriate in a
+     professional setting
+ 
+ ## Enforcement Responsibilities
+ 
+ Community leaders are responsible for clarifying and enforcing our standards of
+ acceptable behavior. They will take appropriate and fair corrective action in
+ response to any behavior they deem inappropriate, threatening, offensive, or
+ harmful. This may include removing, editing, or rejecting comments, commits,
+ code, wiki edits, issues, and other contributions that do not align with this
+ Code of Conduct. Community leaders will communicate reasons for moderation
+ decisions when appropriate.
+ 
+ ## Scope
+ 
+ This Code of Conduct applies within all community spaces, and also applies when
+ an individual is officially representing the community in public spaces.
+ Examples of representing our community include using an official e-mail address,
+ posting via an official social media account, or acting as an appointed
+ representative at an online or offline event.
+ 
+ ## Enforcement
+ 
+ Instances of abusive, harassing, or otherwise unacceptable behavior may be
+ reported to the community leaders responsible for enforcement at
+ nikola@nikolahristov.tech. All complaints will be reviewed and investigated
+ promptly and fairly. All community leaders are obligated to respect the privacy
+ and security of the reporter of any incident.
+ 
+ ## Enforcement Guidelines
+ 
+ Community leaders will follow these Community Impact Guidelines in determining
+ the consequences for any action they deem in violation of this Code of Conduct:
+ 
+ ### 1. Correction
+ 
+ **Community Impact**: Use of inappropriate language or other behavior deemed
+ unprofessional or unwelcome in the community.
+ 
+ **Consequence**: A private, written warning from community leaders, providing
+ clarity around the nature of the violation and an explanation of why the
+ behavior was inappropriate. A public apology may be requested.
+ 
+ ### 2. Warning
+ 
+ **Community Impact**: A violation through a single incident or series of
+ actions.
+ 
+ **Consequence**: A warning with consequences for continued behavior. No
+ interaction with the people involved, including unsolicited interaction with
+ those enforcing the Code of Conduct, for a specified period of time. This
+ includes avoiding interactions in community spaces as well as external channels
+ like social media. Violating these terms may lead to a temporary or permanent
+ ban.
+ 
+ ### 3. Temporary Ban
+ 
+ **Community Impact**: A serious violation of community standards, including
+ sustained inappropriate behavior.
+ 
+ **Consequence**: A temporary ban from any sort of interaction or public
+ communication with the community for a specified period of time. No public or
+ private interaction with the people involved, including unsolicited interaction
+ with those enforcing the Code of Conduct, is allowed during this period.
+ Violating these terms may lead to a permanent ban.
+ 
+ ### 4. Permanent Ban
+ 
+ **Community Impact**: Demonstrating a pattern of violation of community
+ standards, including sustained inappropriate behavior, harassment of an
+ individual, or aggression toward or disparagement of classes of individuals.
+ 
+ **Consequence**: A permanent ban from any sort of public interaction within the
+ community.
+ 
+ ## Attribution
+ 
+ This Code of Conduct is adapted from the [Contributor Covenant][homepage],
+ version 2.1, available at
+ [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
+ Community Impact Guidelines were inspired by [Mozilla's code of conduct
+ enforcement ladder][Mozilla CoC].
+ 
+ For answers to common questions about this code of conduct, see the FAQ at
+ [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
+ [https://www.contributor-covenant.org/translations][translations].
+ 
+ [homepage]: https://www.contributor-covenant.org
+ [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: https://github.com/mozilla/diversity
+ [FAQ]: https://www.contributor-covenant.org/faq
+ [translations]: https://www.contributor-covenant.org/translations
+ 
+ Thank you for being part of our community and helping us create a safe and
+ respectful environment for everyone!
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
new file mode 100644
index 0000000..c740185
--- /dev/null
+++ b/CONTRIBUTING.md
+ # Contributing Guidelines
+ 
+ Welcome to our community! We are committed to creating a welcoming and inclusive
+ environment for all contributors. Before you get started, please read and adhere
+ to the following code of conduct. By participating in our community, you agree
+ to abide by these guidelines.
+ 
+ ## Our Pledge
+ 
+ We, as members, contributors, and leaders, pledge to make participation in our
+ community a harassment-free experience for everyone, regardless of age, body
+ size, visible or invisible disability, ethnicity, sex characteristics, gender
+ identity and expression, level of experience, education, socio-economic status,
+ nationality, personal appearance, race, caste, color, religion, or sexual
+ identity and orientation. We pledge to act and interact in ways that contribute
+ to an open, welcoming, diverse, inclusive, and healthy community.
+ 
+ ## Our Standards
+ 
+ Examples of behavior that contributes to a positive environment for our
+ community include:
+ 
+ -   Demonstrating empathy and kindness toward other people
+ -   Being respectful of differing opinions, viewpoints, and experiences
+ -   Giving and gracefully accepting constructive feedback
+ -   Accepting responsibility and apologizing to those affected by our mistakes,
+     and learning from the experience
+ -   Focusing on what is best not just for us as individuals, but for the overall
+     community
+ 
+ Examples of unacceptable behavior include:
+ 
+ -   The use of sexualized language or imagery, and sexual attention or advances
+     of any kind
+ -   Trolling, insulting, or derogatory comments, and personal or political
+     attacks
+ -   Public or private harassment
+ -   Publishing others' private information, such as a physical or email address,
+     without their explicit permission
+ -   Other conduct which could reasonably be considered inappropriate in a
+     professional setting
+ 
+ ## Enforcement Responsibilities
+ 
+ Community leaders are responsible for clarifying and enforcing our standards of
+ acceptable behavior and will take appropriate and fair corrective action in
+ response to any behavior that they deem inappropriate, threatening, offensive,
+ or harmful. Community leaders have the right and responsibility to remove, edit,
+ or reject comments, commits, code, wiki edits, issues, and other contributions
+ that are not aligned with this Code of Conduct, and will communicate reasons for
+ moderation decisions when appropriate.
+ 
+ ## Scope
+ 
+ This Code of Conduct applies within all community spaces, and also applies when
+ an individual is officially representing the community in public spaces.
+ Examples of representing our community include using an official e-mail address,
+ posting via an official social media account, or acting as an appointed
+ representative at an online or offline event.
+ 
+ ## Enforcement
+ 
+ Instances of abusive, harassing, or otherwise unacceptable behavior may be
+ reported to the community leaders responsible for enforcement at
+ nikola@nikolahristov.tech. All complaints will be reviewed and investigated
+ promptly and fairly. All community leaders are obligated to respect the privacy
+ and security of the reporter of any incident.
+ 
+ ## Enforcement Guidelines
+ 
+ Community leaders will follow these Community Impact Guidelines in determining
+ the consequences for any action they deem in violation of this Code of Conduct:
+ 
+ ### 1. Correction
+ 
+ **Community Impact**: Use of inappropriate language or other behavior deemed
+ unprofessional or unwelcome in the community.
+ 
+ **Consequence**: A private, written warning from community leaders, providing
+ clarity around the nature of the violation and an explanation of why the
+ behavior was inappropriate. A public apology may be requested.
+ 
+ ### 2. Warning
+ 
+ **Community Impact**: A violation through a single incident or series of
+ actions.
+ 
+ **Consequence**: A warning with consequences for continued behavior. No
+ interaction with the people involved, including unsolicited interaction with
+ those enforcing the Code of Conduct, for a specified period of time. This
+ includes avoiding interactions in community spaces as well as external channels
+ like social media. Violating these terms may lead to a temporary or permanent
+ ban.
+ 
+ ### 3. Temporary Ban
+ 
+ **Community Impact**: A serious violation of community standards, including
+ sustained inappropriate behavior.
+ 
+ **Consequence**: A temporary ban from any sort of interaction or public
+ communication with the community for a specified period of time. No public or
+ private interaction with the people involved, including unsolicited interaction
+ with those enforcing the Code of Conduct, is allowed during this period.
+ Violating these terms may lead to a permanent ban.
+ 
+ ### 4. Permanent Ban
+ 
+ **Community Impact**: Demonstrating a pattern of violation of community
+ standards, including sustained inappropriate behavior, harassment of an
+ individual, or aggression toward or disparagement of classes of individuals.
+ 
+ **Consequence**: A permanent ban from any sort of public interaction within the
+ community.
+ 
+ ## Attribution
+ 
+ This Code of Conduct is adapted from the [Contributor Covenant][homepage],
+ version 2.1, available at
+ [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
+ Community Impact Guidelines were inspired by [Mozilla's code of conduct
+ enforcement ladder][Mozilla CoC].
+ 
+ For answers to common questions about this code of conduct, see the FAQ at
+ [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
+ [https://www.contributor-covenant.org/translations][translations].
+ 
+ [homepage]: https://www.contributor-covenant.org
+ [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: https://github.com/mozilla/diversity
+ [FAQ]: https://www.contributor-covenant.org/faq
+ [translations]: https://www.contributor-covenant.org/translations
+ 
+ Thank you for being part of our community and helping us create a safe and
+ respectful environment for everyone!
diff --git a/LICENSE b/LICENSE
new file mode 100644
index 0000000..a14ae95
--- /dev/null
+++ b/LICENSE
+ MIT License
+ 
+ Copyright (c) 2023 Nikola R. Hristov
+ 
+ Permission is hereby granted, free of charge, to any person obtaining a copy of
+ this software and associated documentation files (the "Software"), to deal in
+ the Software without restriction, including without limitation the rights to
+ use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
+ the Software, and to permit persons to whom the Software is furnished to do so,
+ subject to the following conditions:
+ 
+ The above copyright notice and this permission notice shall be included in all
+ copies or substantial portions of the Software.
+ 
+ THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
+ IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
+ FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
+ COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
+ IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
+ CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
diff --git a/NPM/.npmignore b/NPM/.npmignore
deleted file mode 100644
index 797b72a..0000000
--- a/NPM/.npmignore
+++ /dev/null
- .turbo/
- CHANGELOG.md
- Source/
diff --git a/NPM/LICENSE b/NPM/LICENSE
deleted file mode 100644
index 66f72b3..0000000
--- a/NPM/LICENSE
+++ /dev/null
- MIT License
- 
- Copyright (c) 2022 Nikola Hristov
- 
- Permission is hereby granted, free of charge, to any person obtaining a copy of
- this software and associated documentation files (the "Software"), to deal in
- the Software without restriction, including without limitation the rights to
- use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
- the Software, and to permit persons to whom the Software is furnished to do so,
- subject to the following conditions:
- 
- The above copyright notice and this permission notice shall be included in all
- copies or substantial portions of the Software.
- 
- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
- IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
- FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
- COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
- IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
- CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
diff --git a/NPM/package.json b/NPM/package.json
deleted file mode 100644
index 22f7bcb..0000000
--- a/NPM/package.json
+++ /dev/null
- {
- 	"name": "@nikolarhristov/tsbundle",
- 	"version": "0.1.5",
- 	"private": false,
- 	"description": "🌀 Builds all JavaScript files from TypeScript within a given folder using esbuild.",
- 	"keywords": [
- 		"javascript",
- 		"typescript",
- 		"esbuild"
- 	],
- 	"homepage": "https://github.com/NikolaRHristov/TSBundle#readme",
- 	"bugs": {
- 		"url": "https://github.com/NikolaRHristov/TSBundle/issues"
- 	},
- 	"repository": {
- 		"type": "git",
- 		"url": "git+https://github.com/NikolaRHristov/TSBundle.git",
- 		"directory": "NPM"
- 	},
- 	"license": "MIT",
- 	"type": "module",
- 	"main": "./Target/Index.js",
- 	"types": "./Target/Index.d.ts",
- 	"bin": {
- 		"TSBundle": "Target/Bin.js"
- 	},
- 	"scripts": {
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Index.ts 'Source/**/*.ts'"
- 	},
- 	"dependencies": {
- 		"@types/node": "20.4.10",
- 		"commander": "11.0.0",
- 		"deepmerge-ts": "5.1.0",
- 		"esbuild": "0.19.1",
- 		"esbuild-plugin-copy": "2.1.1",
- 		"fast-glob": "3.3.1",
- 		"typescript": "5.1.6"
- 	},
- 	"devDependencies": {
- 		"@types/node": "20.4.10",
- 		"ts-node": "10.9.1"
- 	},
- 	"publishConfig": {
- 		"access": "public",
- 		"@NikolaRHristov:registry": "https://npm.pkg.github.com"
- 	}
- }
diff --git a/NPM/README.md b/NPM/README.md
deleted file mode 100644
index 058e525..0000000
--- a/NPM/README.md
+++ /dev/null
- # [TSBundle] 🌀
- 
- Builds all your TypeScript files into JavaScript.
- 
- ## Installation
- 
- Add configuration and setup scripts:
- 
- ```sh
- npm install -D -E @nikolarhristov/tsbundle
- ```
- 
- ## Usage
- 
- `package.json`
- 
- ```json
- {
- 	"name": "my-awesome-package",
- 	"scripts": {
- 		"prepublishOnly": "TSBundle 'Source/**/*.ts'"
- 	},
- 	"dependencies": {
- 		"@nikolarhristov/tsbundle": "0.1.5"
- 	}
- }
- ```
- 
- #### or with a custom esbuild config file:
- 
- ```json
- {
- 	"scripts": {
- 		"prepublishOnly": "TSBundle 'Source/**/*.ts' -es esbuild.ts"
- 	}
- }
- ```
- 
- #### See an example of a config file in [esbuild.ts](Source/Configuration/esbuild.ts)
- 
- `tsconfig.json`
- 
- ```json
- {
- 	"compilerOptions": {
- 		"outDir": "Target"
- 	},
- 	"extends": "./Source/Configuration/TypeScript",
- 	"include": ["Source"]
- }
- ```
- 
- The script will now automatically compile your build files with [esbuild] and
- add TypeScript types.
- 
- [TSBundle]: https://npmjs.org/@nikolarhristov/tsbundle
- [esbuild]: https://npmjs.org/esbuild
diff --git a/NPM/Source/Bin.ts b/NPM/Source/Bin.ts
deleted file mode 100644
index f401b04..0000000
--- a/NPM/Source/Bin.ts
+++ /dev/null
- #!/usr/bin/env node
- 
- import "./Index.js";
diff --git a/NPM/Source/Command/Build.ts b/NPM/Source/Command/Build.ts
deleted file mode 100644
index 21cdb44..0000000
--- a/NPM/Source/Command/Build.ts
+++ /dev/null
- import { exec as Exec } from "child_process";
- import { deepmerge as Merge } from "deepmerge-ts";
- import type { BuildOptions } from "esbuild";
- import { build as Build } from "esbuild";
- import type { Pattern } from "fast-glob";
- import Glob from "fast-glob";
- import _esbuild from "../Configuration/esbuild.js";
- import File from "../Library/File.js";
- 
- export type Pipe = string[];
- 
- /**
-  * The `Build` function compiles and builds TypeScript files using esbuild and TypeScript compiler.
-  * @param {Pattern[]} Files - An array of file patterns to be processed. Each pattern can include
-  * wildcards (*) to match multiple files.
-  * @param [Options] - The `Options` parameter is an optional object that can contain two properties:
-  */
- export default async (
- 	Files: Pattern[],
- 	Options?: { esbuild?: string; TypeScript?: string }
- ) => {
- 	const Pipe: Pipe = [];
- 
- 	for (const File of Files) {
- 		for (const _File of await Glob(
- 			File.replaceAll("'", "").replaceAll('"', "")
- 		)) {
- 			Pipe.push(_File);
- 		}
- 	}
- 
- 	Pipe.reverse();
- 
- 	const esbuild = Merge(_esbuild, {
- 		entryPoints: Object.fromEntries(
- 			Pipe.map((File) => [
- 				File.replace("Source/", "").split(".").slice(0, -1.0).join("."),
- 				File,
- 			])
- 		),
- 	} satisfies BuildOptions);
- 
- 	await Build(
- 		Options?.esbuild
- 			? Merge(esbuild, await File(Options?.esbuild))
- 			: esbuild
- 	);
- 
- 	if (Options?.TypeScript) {
- 		Exec(`tsc -p ${Options?.TypeScript}`);
- 	} else {
- 		Exec("tsc");
- 	}
- };
diff --git a/NPM/Source/Configuration/esbuild.ts b/NPM/Source/Configuration/esbuild.ts
deleted file mode 100644
index 8e4c808..0000000
--- a/NPM/Source/Configuration/esbuild.ts
+++ /dev/null
- import type { BuildOptions, PluginBuild } from "esbuild";
- import { copy as Copy } from "esbuild-plugin-copy";
- import { rm as Remove } from "fs/promises";
- 
- const Out = "Target";
- 
- export default {
- 	format: "esm",
- 	minify: true,
- 	outdir: Out,
- 	platform: "node",
- 	target: "esnext",
- 	write: true,
- 	plugins: [
- 		{
- 			name: "Target",
- 			setup(build: PluginBuild) {
- 				build.onStart(async () => {
- 					try {
- 						await Remove(Out, {
- 							recursive: true,
- 						});
- 					} catch (_Error) {
- 						console.log(_Error);
- 					}
- 				});
- 			},
- 		},
- 		Copy({
- 			resolveFrom: "out",
- 			assets: [
- 				{
- 					from: "./Source/Configuration/TypeScript.json",
- 					to: "./Configuration/",
- 				},
- 			],
- 		}),
- 	],
- } satisfies BuildOptions;
diff --git a/NPM/Source/Configuration/TypeScript.json b/NPM/Source/Configuration/TypeScript.json
deleted file mode 100644
index 27705c6..0000000
--- a/NPM/Source/Configuration/TypeScript.json
+++ /dev/null
- {
- 	"$schema": "https://json.schemastore.org/tsconfig",
- 	"compilerOptions": {
- 		"allowArbitraryExtensions": true,
- 		"allowImportingTsExtensions": true,
- 		"allowJs": true,
- 		"allowSyntheticDefaultImports": true,
- 		"allowUmdGlobalAccess": false,
- 		"allowUnreachableCode": false,
- 		"allowUnusedLabels": false,
- 		"alwaysStrict": true,
- 		"assumeChangesOnlyAffectDirectDependencies": true,
- 		"baseUrl": "./",
- 		"checkJs": true,
- 		"declaration": true,
- 		"disableReferencedProjectLoad": false,
- 		"emitDeclarationOnly": true,
- 		"esModuleInterop": true,
- 		"exactOptionalPropertyTypes": true,
- 		"forceConsistentCasingInFileNames": true,
- 		"isolatedModules": true,
- 		"jsx": "preserve",
- 		"lib": ["ESNext"],
- 		"module": "ESNext",
- 		"moduleResolution": "NodeNext",
- 		"noFallthroughCasesInSwitch": true,
- 		"noImplicitOverride": true,
- 		"noImplicitReturns": true,
- 		"noPropertyAccessFromIndexSignature": true,
- 		"noUncheckedIndexedAccess": true,
- 		"noUnusedLocals": true,
- 		"noUnusedParameters": true,
- 		"resolveJsonModule": true,
- 		"skipLibCheck": true,
- 		"strict": true,
- 		"strictBindCallApply": true,
- 		"strictFunctionTypes": true,
- 		"strictNullChecks": true,
- 		"target": "ESNext",
- 		"types": ["node", "@types/node"],
- 		"verbatimModuleSyntax": true
- 	},
- 	"ts-node": {
- 		"esm": true
- 	}
- }
diff --git a/NPM/Source/Index.ts b/NPM/Source/Index.ts
deleted file mode 100644
index 54f6f0d..0000000
--- a/NPM/Source/Index.ts
+++ /dev/null
- import { Command } from "commander";
- import Build from "./Command/Build.js";
- import _JSON from "./Library/JSON.js";
- 
- try {
- 	new Command()
- 		.name("TSBundle")
- 		.version((await _JSON("../package.json", import.meta.url))?.version)
- 		.description("Builds files")
- 		.argument("<Files...>", "Files to build")
- 		.option("-es, --esbuild <File>", "esbuild configuration file")
- 		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
- 		.action(Build)
- 		.parse();
- } catch (_Error) {
- 	console.log(_Error);
- }
diff --git a/NPM/Source/Library/File.ts b/NPM/Source/Library/File.ts
deleted file mode 100644
index f151f6d..0000000
--- a/NPM/Source/Library/File.ts
+++ /dev/null
- import { readFile as _File, writeFile as File } from "fs/promises";
- import TypeScript from "typescript";
- import { pathToFileURL as URL } from "url";
- import _JSON from "./JSON.js";
- 
- /**
-  * The function takes a file path as input, checks if it is a TypeScript file, converts the TypeScript
-  * code to JavaScript, and then imports and returns the default export of the JavaScript file.
-  * @param {string} Path - The `Path` parameter is a string that represents the file path of the file
-  * you want to process.
-  * @returns the default export of the module that is imported using the provided `Path`.
-  */
- export default async (Path: string) => {
- 	if (Path.split(".").pop() === "ts") {
- 		const { options } = TypeScript.convertCompilerOptionsFromJson(
- 			(await _JSON("../Configuration/TypeScript.json", import.meta.url))
- 				?.compilerOptions,
- 			"."
- 		);
- 
- 		TypeScript.createProgram(
- 			[Path],
- 			options,
- 			TypeScript.createCompilerHost(options)
- 		).emit();
- 
- 		await File(
- 			Path.replace(".ts", ".js"),
- 			TypeScript.transpile(
- 				(await _File(Path, "utf-8")).toString(),
- 				options
- 			)
- 		);
- 	}
- 
- 	return (await import(URL(Path).toString().replace(".ts", ".js"))).default;
- };
diff --git a/NPM/Source/Library/JSON.ts b/NPM/Source/Library/JSON.ts
deleted file mode 100644
index 826a677..0000000
--- a/NPM/Source/Library/JSON.ts
+++ /dev/null
- import { readFile as _File } from "fs/promises";
- import { dirname as Dir } from "path";
- import { fileURLToPath as Path } from "url";
- 
- /**
-  * The function `JSON` is a TypeScript function that reads a JSON file and returns its parsed content.
-  * @param {string} File - The `File` parameter is a string that represents the name or path of the JSON
-  * file that you want to parse.
-  * @param {string} From - The `From` parameter is a string that represents the source URL or file path
-  * from which the JSON file will be loaded. It is set to `import.meta.url` by default, which refers to
-  * the URL of the current module. However, if a different source URL or file path is provided,
-  */
- export default async (File: string, From: string = import.meta.url) =>
- 	JSON.parse(
- 		(
- 			await _File(
- 				`${Dir(Path(From ?? import.meta.url))}/${File}`,
- 				"utf-8"
- 			)
- 		).toString()
- 	);
diff --git a/NPM/tsconfig.json b/NPM/tsconfig.json
deleted file mode 100644
index ee1d5c8..0000000
--- a/NPM/tsconfig.json
+++ /dev/null
- {
- 	"compilerOptions": {
- 		"outDir": "Target"
- 	},
- 	"extends": "./Source/Configuration/TypeScript",
- 	"include": ["Source"]
- }
diff --git a/package.json b/package.json
new file mode 100644
index 0000000..7f56c3d
--- /dev/null
+++ b/package.json
+ {
+ 	"name": "typescript-esbuild",
+ 	"version": "0.1.15",
+ 	"private": false,
+ 	"description": "🌀 Builds all your TypeScript files into JavaScript from a given folder using esbuild.",
+ 	"keywords": [
+ 		"javascript",
+ 		"typescript",
+ 		"esbuild"
+ 	],
+ 	"homepage": "https://github.com/NikolaRHristov/TypeScriptESBuild#readme",
+ 	"bugs": {
+ 		"url": "https://github.com/NikolaRHristov/TypeScriptESBuild/issues"
+ 	},
+ 	"repository": {
+ 		"type": "git",
+ 		"url": "git+https://github.com/NikolaRHristov/TypeScriptESBuild.git"
+ 	},
+ 	"license": "MIT",
+ 	"author": {
+ 		"name": "Nikola Hristov",
+ 		"email": "nikola@nikolahristov.tech",
+ 		"url": "https://nikolahristov.tech"
+ 	},
+ 	"type": "module",
+ 	"bin": {
+ 		"TypeScriptESBuild": "Target/Bin.js"
+ 	},
+ 	"scripts": {
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Bin.ts 'Source/**/*.ts'"
+ 	},
+ 	"dependencies": {
+ 		"@types/node": "20.6.2",
+ 		"commander": "11.0.0",
+ 		"deepmerge-ts": "5.1.0",
+ 		"esbuild": "0.19.3",
+ 		"esbuild-plugin-copy": "2.1.1",
+ 		"fast-glob": "3.3.1",
+ 		"typescript": "5.2.2"
+ 	},
+ 	"devDependencies": {
+ 		"@types/node": "20.6.2",
+ 		"ts-node": "10.9.1"
+ 	},
+ 	"publishConfig": {
+ 		"access": "public"
+ 	}
+ }
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..a2cd16b
--- /dev/null
+++ b/README.md
+ # [TypeScriptESBuild] 🌀
+ 
+ Builds all your TypeScript files into JavaScript.
+ 
+ ## Installation
+ 
+ Add configuration and setup scripts:
+ 
+ ```sh
+ npm install -D -E typescript-esbuild
+ ```
+ 
+ ## Usage
+ 
+ `package.json`
+ 
+ ```json
+ {
+ 	"name": "package",
+ 	"scripts": {
+ 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
+ 	},
+ 	"dependencies": {
+ 		"typescript-esbuild": "latest"
+ 	}
+ }
+ ```
+ 
+ #### or with a custom esbuild config file:
+ 
+ ```json
+ {
+ 	"scripts": {
+ 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es ESBuild.ts"
+ 	}
+ }
+ ```
+ 
+ #### See an example of a config file in [ESBuild.ts](Source/Configuration/ESBuild.ts)
+ 
+ `tsconfig.json`
+ 
+ ```json
+ {
+ 	"compilerOptions": {
+ 		"outDir": "Target"
+ 	},
+ 	"extends": "typescript-esbuild/Target/Configuration/TypeScript",
+ 	"include": ["Source"]
+ }
+ ```
+ 
+ [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
+ [esbuild]: https://npmjs.org/esbuild
diff --git a/Source/Bin.ts b/Source/Bin.ts
new file mode 100644
index 0000000..27ab322
--- /dev/null
+++ b/Source/Bin.ts
+ #!/usr/bin/env node
+ 
+ import Build from "./Command/Build.js";
+ import _JSON from "./Library/JSON.js";
+ 
+ import { Command } from "commander";
+ 
+ try {
+ 	new Command()
+ 		.name("TypeScriptESBuild")
+ 		.version((await _JSON("../package.json", import.meta.url))?.version)
+ 		.description("Builds files")
+ 		.argument("<Files...>", "Files to build")
+ 		.option("-es, --ESBuild <File>", "esbuild configuration file")
+ 		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
+ 		.action(Build)
+ 		.parse();	
+ } catch (_Error) {
+ 	console.log(_Error);
+ }
diff --git a/Source/Command/Build.ts b/Source/Command/Build.ts
new file mode 100644
index 0000000..b20fac3
--- /dev/null
+++ b/Source/Command/Build.ts
+ import { exec as Exec } from "child_process";
+ import { deepmerge as Merge } from "deepmerge-ts";
+ import type { BuildOptions as Option } from "esbuild";
+ import { build as Build } from "esbuild";
+ import type { Pattern } from "fast-glob";
+ import Glob from "fast-glob";
+ import _ESBuild from "../Configuration/ESBuild.js";
+ import File from "../Library/File.js";
+ 
+ export type Pipe = string[];
+ 
+ /**
+  * The `Build` function compiles and builds TypeScript files using esbuild and TypeScript compiler.
+  * @param {Pattern[]} Files - An array of file patterns to be processed. Each pattern can include
+  * wildcards (*) to match multiple files.
+  * @param [Option] - The `Option` parameter is an optional object that can contain two properties:
+  */
+ export default async (
+ 	Files: Pattern[],
+ 	Option?: { ESBuild?: string; TypeScript?: string }
+ ) => {
+ 	const Pipe: Pipe = [];
+ 
+ 	for (const File of Files) {
+ 		for (const _File of await Glob(
+ 			File.replaceAll("'", "").replaceAll('"', "")
+ 		)) {
+ 			Pipe.push(_File);
+ 		}
+ 	}
+ 
+ 	Pipe.reverse();
+ 
+ 	const ESBuild = Merge(_ESBuild, {
+ 		entryPoints: Object.fromEntries(
+ 			Pipe.map((File) => [
+ 				File.replace("Source/", "").split(".").slice(0, -1.0).join("."),
+ 				File,
+ 			])
+ 		),
+ 	} satisfies Option);
+ 
+ 	await Build(
+ 		Option?.ESBuild ? Merge(ESBuild, await File(Option?.ESBuild)) : ESBuild
+ 	);
+ 
+ 	if (Option?.TypeScript) {
+ 		Exec(`tsc -p ${Option?.TypeScript}`);
+ 	} else {
+ 		Exec("tsc");
+ 	}
+ };
diff --git a/Source/Configuration/ESBuild.ts b/Source/Configuration/ESBuild.ts
new file mode 100644
index 0000000..181864f
--- /dev/null
+++ b/Source/Configuration/ESBuild.ts
+ import type { PluginBuild as Build, BuildOptions as Option } from "esbuild";
+ import { copy as Copy } from "esbuild-plugin-copy";
+ import {
+ 	access as Access,
+ 	constants as Constant,
+ 	mkdir as Make,
+ 	rm as Remove,
+ } from "fs/promises";
+ 
+ const Out = "Target";
+ 
+ export default {
+ 	format: "esm",
+ 	minify: true,
+ 	outdir: Out,
+ 	platform: "node",
+ 	target: "esnext",
+ 	write: true,
+ 	plugins: [
+ 		{
+ 			name: "Target",
+ 			setup(Build: Build) {
+ 				Build.onStart(async () => {
+ 					try {
+ 						await Access(Out, Constant.R_OK);
+ 					} catch (_Error) {
+ 						await Make(Out, {
+ 							recursive: true,
+ 						});
+ 					}
+ 
+ 					try {
+ 						await Remove(Out, {
+ 							recursive: true,
+ 						});
+ 					} catch (_Error) {
+ 						console.log(_Error);
+ 					}
+ 				});
+ 			},
+ 		},
+ 		Copy({
+ 			resolveFrom: "out",
+ 			assets: [
+ 				{
+ 					from: "./Source/Configuration/TypeScript.json",
+ 					to: "./Configuration/",
+ 				},
+ 			],
+ 		}),
+ 	],
+ } satisfies Option;
diff --git a/Source/Configuration/TypeScript.json b/Source/Configuration/TypeScript.json
new file mode 100644
index 0000000..27705c6
--- /dev/null
+++ b/Source/Configuration/TypeScript.json
+ {
+ 	"$schema": "https://json.schemastore.org/tsconfig",
+ 	"compilerOptions": {
+ 		"allowArbitraryExtensions": true,
+ 		"allowImportingTsExtensions": true,
+ 		"allowJs": true,
+ 		"allowSyntheticDefaultImports": true,
+ 		"allowUmdGlobalAccess": false,
+ 		"allowUnreachableCode": false,
+ 		"allowUnusedLabels": false,
+ 		"alwaysStrict": true,
+ 		"assumeChangesOnlyAffectDirectDependencies": true,
+ 		"baseUrl": "./",
+ 		"checkJs": true,
+ 		"declaration": true,
+ 		"disableReferencedProjectLoad": false,
+ 		"emitDeclarationOnly": true,
+ 		"esModuleInterop": true,
+ 		"exactOptionalPropertyTypes": true,
+ 		"forceConsistentCasingInFileNames": true,
+ 		"isolatedModules": true,
+ 		"jsx": "preserve",
+ 		"lib": ["ESNext"],
+ 		"module": "ESNext",
+ 		"moduleResolution": "NodeNext",
+ 		"noFallthroughCasesInSwitch": true,
+ 		"noImplicitOverride": true,
+ 		"noImplicitReturns": true,
+ 		"noPropertyAccessFromIndexSignature": true,
+ 		"noUncheckedIndexedAccess": true,
+ 		"noUnusedLocals": true,
+ 		"noUnusedParameters": true,
+ 		"resolveJsonModule": true,
+ 		"skipLibCheck": true,
+ 		"strict": true,
+ 		"strictBindCallApply": true,
+ 		"strictFunctionTypes": true,
+ 		"strictNullChecks": true,
+ 		"target": "ESNext",
+ 		"types": ["node", "@types/node"],
+ 		"verbatimModuleSyntax": true
+ 	},
+ 	"ts-node": {
+ 		"esm": true
+ 	}
+ }
diff --git a/Source/Library/File.ts b/Source/Library/File.ts
new file mode 100644
index 0000000..f151f6d
--- /dev/null
+++ b/Source/Library/File.ts
+ import { readFile as _File, writeFile as File } from "fs/promises";
+ import TypeScript from "typescript";
+ import { pathToFileURL as URL } from "url";
+ import _JSON from "./JSON.js";
+ 
+ /**
+  * The function takes a file path as input, checks if it is a TypeScript file, converts the TypeScript
+  * code to JavaScript, and then imports and returns the default export of the JavaScript file.
+  * @param {string} Path - The `Path` parameter is a string that represents the file path of the file
+  * you want to process.
+  * @returns the default export of the module that is imported using the provided `Path`.
+  */
+ export default async (Path: string) => {
+ 	if (Path.split(".").pop() === "ts") {
+ 		const { options } = TypeScript.convertCompilerOptionsFromJson(
+ 			(await _JSON("../Configuration/TypeScript.json", import.meta.url))
+ 				?.compilerOptions,
+ 			"."
+ 		);
+ 
+ 		TypeScript.createProgram(
+ 			[Path],
+ 			options,
+ 			TypeScript.createCompilerHost(options)
+ 		).emit();
+ 
+ 		await File(
+ 			Path.replace(".ts", ".js"),
+ 			TypeScript.transpile(
+ 				(await _File(Path, "utf-8")).toString(),
+ 				options
+ 			)
+ 		);
+ 	}
+ 
+ 	return (await import(URL(Path).toString().replace(".ts", ".js"))).default;
+ };
diff --git a/Source/Library/JSON.ts b/Source/Library/JSON.ts
new file mode 100644
index 0000000..826a677
--- /dev/null
+++ b/Source/Library/JSON.ts
+ import { readFile as _File } from "fs/promises";
+ import { dirname as Dir } from "path";
+ import { fileURLToPath as Path } from "url";
+ 
+ /**
+  * The function `JSON` is a TypeScript function that reads a JSON file and returns its parsed content.
+  * @param {string} File - The `File` parameter is a string that represents the name or path of the JSON
+  * file that you want to parse.
+  * @param {string} From - The `From` parameter is a string that represents the source URL or file path
+  * from which the JSON file will be loaded. It is set to `import.meta.url` by default, which refers to
+  * the URL of the current module. However, if a different source URL or file path is provided,
+  */
+ export default async (File: string, From: string = import.meta.url) =>
+ 	JSON.parse(
+ 		(
+ 			await _File(
+ 				`${Dir(Path(From ?? import.meta.url))}/${File}`,
+ 				"utf-8"
+ 			)
+ 		).toString()
+ 	);
diff --git a/tsconfig.json b/tsconfig.json
new file mode 100644
index 0000000..ee1d5c8
--- /dev/null
+++ b/tsconfig.json
+ {
+ 	"compilerOptions": {
+ 		"outDir": "Target"
+ 	},
+ 	"extends": "./Source/Configuration/TypeScript",
+ 	"include": ["Source"]
+ }
diff --git a/website/.gitignore b/website/.gitignore
deleted file mode 100644
index ca8e4ca..0000000
--- a/website/.gitignore
+++ /dev/null
- # dependencies
- package-lock.json
- node_modules/
- .snowpack/
- 
- # logs
- npm-debug.log*
- yarn-debug.log*
- yarn-error.log*
- 
- # environment variables
- .env
- .env.production
- 
- # macOS-specific files
- .DS_Store
- 
- Target/
- .astro
diff --git a/website/.npmignore b/website/.npmignore
deleted file mode 100644
index a5a4619..0000000
--- a/website/.npmignore
+++ /dev/null
- .github/
- .turbo/
- Source/
- public/
- CONTRIBUTING.md
diff --git a/website/astro.config.ts b/website/astro.config.ts
deleted file mode 100644
index abd4cef..0000000
--- a/website/astro.config.ts
+++ /dev/null
- import PreFetch from "@astrojs/prefetch";
- import SiteMap from "@astrojs/sitemap";
- import Compress from "astro-compress";
- import Critters from "astro-critters";
- import ROME from "astro-rome";
- import { defineConfig } from "astro/config";
- import Worker from "astrojs-service-worker";
- 
- export default defineConfig({
- 	srcDir: "./Source",
- 	publicDir: "./Public",
- 	outDir: "./Target",
- 	// TODO Place your site URL here
- 	// site: "",
- 	experimental: {
- 		assets: true,
- 		viewTransitions: true,
- 	},
- 	compressHTML: true,
- 	integrations: [
- 		import.meta.env.MODE === "production" ? Worker() : null,
- 		SiteMap(),
- 		Critters({ Logger: 1 }),
- 		PreFetch(),
- 		ROME({ Logger: 1 }),
- 		Compress({ Logger: 1 }),
- 	],
- 	vite: {
- 		build: {
- 			sourcemap: true,
- 		},
- 	},
- });
diff --git a/website/package.json b/website/package.json
deleted file mode 100644
index 50c218c..0000000
--- a/website/package.json
+++ /dev/null
- {
- 	"name": "tsbundle-web",
- 	"version": "2.0.0",
- 	"private": false,
- 	"description": "",
- 	"keywords": [
- 		"astro",
- 		"starter"
- 	],
- 	"homepage": "https://github.com/NikolaRHristov/TSBundle#readme",
- 	"bugs": {
- 		"url": "https://github.com/NikolaRHristov/TSBundle/issues"
- 	},
- 	"repository": {
- 		"type": "git",
- 		"url": "git+https://github.com/NikolaRHristov/TSBundle.git",
- 		"directory": "website"
- 	},
- 	"scripts": {
- 		"build": "astro check && astro build",
- 		"start": "astro dev"
- 	},
- 	"devDependencies": {
- 		"@astrojs/prefetch": "0.3.0",
- 		"@astrojs/sitemap": "2.0.1",
- 		"@tailwindcss/aspect-ratio": "0.4.2",
- 		"@tailwindcss/forms": "0.5.4",
- 		"@tailwindcss/typography": "0.5.9",
- 		"astro": "2.10.7",
- 		"astro-compress": "2.0.5",
- 		"astro-critters": "2.0.4",
- 		"astro-rome": "2.0.1",
- 		"astrojs-service-worker": "1.0.0",
- 		"autoprefixer": "10.4.14",
- 		"cssnano": "6.0.1",
- 		"cssnano-preset-advanced": "6.0.1",
- 		"dotenv": "16.3.1",
- 		"firebase": "10.1.0",
- 		"postcss": "8.4.27",
- 		"postcss-combine-duplicated-selectors": "10.0.3",
- 		"postcss-combine-media-query": "1.0.1",
- 		"postcss-import": "15.1.0",
- 		"postcss-reporter": "7.0.5",
- 		"postcss-url": "10.1.3",
- 		"tailwindcss": "3.3.3",
- 		"zod": "3.21.4"
- 	},
- 	"publishConfig": {
- 		"access": "public"
- 	}
- }
diff --git a/website/postcss.config.js b/website/postcss.config.js
deleted file mode 100644
index 569db63..0000000
--- a/website/postcss.config.js
+++ /dev/null
- // @ts-nocheck
- module.exports = {
- 	plugins: [
- 		require("postcss-import"),
- 		require("postcss-url"),
- 		require("tailwindcss/nesting"),
- 		require("tailwindcss")("./tailwind.config.js"),
- 		require("postcss-combine-media-query"),
- 		require("postcss-combine-duplicated-selectors")({
- 			removeDuplicatedProperties: true,
- 			removeDuplicatedValues: false,
- 		}),
- 		require("autoprefixer"),
- 		require("cssnano")({ preset: "advanced" }),
- 		require("postcss-reporter"),
- 	],
- };
diff --git a/website/Public/robots.txt b/website/Public/robots.txt
deleted file mode 100644
index eb05362..0000000
--- a/website/Public/robots.txt
+++ /dev/null
- User-agent: *
- Disallow:
diff --git a/website/Public/site.webmanifest b/website/Public/site.webmanifest
deleted file mode 100644
index 6ea903b..0000000
--- a/website/Public/site.webmanifest
+++ /dev/null
- {
- 	"background_color": "// TODO Set the background color of the app",
- 	"categories": [],
- 	"display": "minimal-ui",
- 	"name": "// TODO Use the same title as in template.html",
- 	"orientation": "landscape",
- 	"short_name": "// TODO Title but lowercase",
- 	"start_url": "/",
- 	"theme_color": "// TODO Use the same theme color from template.html"
- }diff --git a/website/README.md b/website/README.md
deleted file mode 100644
index 2240773..0000000
--- a/website/README.md
+++ /dev/null
- # [astro-starter-template] 📄
- 
- Starter template for AstroJS.
- 
- [astro-starter-template]: https://npmjs.org/astro-starter-template
diff --git a/website/Source/Layout/Base.astro b/website/Source/Layout/Base.astro
deleted file mode 100644
index 4ee5431..0000000
--- a/website/Source/Layout/Base.astro
+++ /dev/null
- ---
- import "@Style/Base.css";
- 
- // TODO Place your title and description here
- const { title = "", description = "" } = Astro.props;
- ---
- 
- <!DOCTYPE html>
- <html lang="en" class="no-js" dir="ltr">
- 	<head>
- 		<script>
- 			document.documentElement.classList.remove("no-js");
- 			document.documentElement.classList.add("js");
- 		</script>
- 
- 		<!-- Meta -->
- 		<title>{title}</title>
- 		<meta charset="utf-8" />
- 		<meta name="description" content={description} />
- 		<meta name="viewport" content="width=device-width,initial-scale=1.0" />
- 		<!-- TODO Define your color theme in hex here -->
- 		<meta name="theme-color" content="" />
- 		<meta name="format-detection" content="telephone=no" />
- 		<meta name="twitter:dnt" content="on" />
- 
- 		<!-- Links -->
- 		<link
- 			rel="preconnect"
- 			href="https://fonts.googleapis.com"
- 			crossorigin
- 		/>
- 		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
- 		<link
- 			rel="manifest"
- 			href="/site.webmanifest"
- 			crossorigin="use-credentials"
- 		/>
- 
- 		<style is:global>
- 			@import "@Style/Global.css";
- 		</style>
- 
- 		<!-- Favicon -->
- 	</head>
- 	<body>
- 		<!-- TODO Generate the ID here -->
- 		<div id="">
- 			<div class="grow">
- 				<slot />
- 			</div>
- 			<script>
- 				import "@Script/Firebase";
- 			</script>
- 		</div>
- 	</body>
- </html>
diff --git a/website/Source/Library/Environment.ts b/website/Source/Library/Environment.ts
deleted file mode 100644
index 8993cf3..0000000
--- a/website/Source/Library/Environment.ts
+++ /dev/null
- import * as dotenv from "dotenv";
- import { z } from "zod";
- 
- dotenv.config();
- 
- export default z
- 	.object({
- 		GH_AUTH_TOKEN: z.string().default(""),
- 	})
- 	.parse(process.env);
diff --git a/website/Source/pages/index.astro b/website/Source/pages/index.astro
deleted file mode 100644
index 7bc75b9..0000000
--- a/website/Source/pages/index.astro
+++ /dev/null
- ---
- import Base from "@Layout/Base.astro";
- ---
- 
- <Base />
diff --git a/website/Source/Script/FIREBASE.ts b/website/Source/Script/FIREBASE.ts
deleted file mode 100644
index 894d86f..0000000
--- a/website/Source/Script/FIREBASE.ts
+++ /dev/null
- import { initializeApp as Initialize } from "firebase/app";
- 
- Initialize({
- 	apiKey: "", // TODO Replace with your API key
- 	appId: "", // TODO Replace with your app ID
- 	authDomain: "", // TODO Replace with your auth domain
- 	databaseURL: "", // TODO Replace with your database URL
- 	measurementId: "", // TODO Replace with your measurement ID
- 	messagingSenderId: "", // TODO Replace with your messaging sender ID
- 	projectId: "", // TODO Replace with your project ID
- 	storageBucket: "", // TODO Replace with your storage bucket
- });
diff --git a/website/Source/Style/Base.css b/website/Source/Style/Base.css
deleted file mode 100644
index 510ff1d..0000000
--- a/website/Source/Style/Base.css
+++ /dev/null
- @tailwind base;
- @tailwind components;
- @tailwind utilities;
- @tailwind variants;
diff --git a/website/Source/Style/Global.css b/website/Source/Style/Global.css
deleted file mode 100644
index 47992c4..0000000
--- a/website/Source/Style/Global.css
+++ /dev/null
- html {
- 	-webkit-tap-highlight-color: transparent;
- }
- 
- html,
- body {
- 	height: 100%;
- }
- 
- body {
- 	@apply flex
- 		flex-grow
- 		flex-col
- 		antialiased
- 		dark:bg-black
- 		dark:text-white
- 		sm:subpixel-antialiased;
- }
- 
- img {
- 	@apply inline-block
- 		select-none
- 		outline-none;
- }
diff --git a/website/tailwind.config.js b/website/tailwind.config.js
deleted file mode 100644
index c9de326..0000000
--- a/website/tailwind.config.js
+++ /dev/null
- module.exports = {
- 	content: [
- 		"./Public/**/*.html",
- 		"./Source/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
- 	],
- 	darkMode: "media",
- 	theme: {
- 		container: {
- 			center: true,
- 		},
- 		extend: {
- 			typography: {
- 				DEFAULT: {
- 					css: {
- 						a: {
- 							"font-weight": "400",
- 						},
- 					},
- 				},
- 			},
- 		},
- 	},
- 	variants: {},
- 	plugins: [
- 		require("@tailwindcss/forms"),
- 		require("@tailwindcss/typography"),
- 		require("@tailwindcss/aspect-ratio"),
- 	],
- };
diff --git a/website/tsconfig.json b/website/tsconfig.json
deleted file mode 100644
index 3496e2a..0000000
--- a/website/tsconfig.json
+++ /dev/null
- {
- 	"compilerOptions": {
- 		"baseUrl": "./",
- 		"moduleResolution": "bundler",
- 		"paths": {
- 			"@Asset/*": ["Source/Asset/*"],
- 			"@Component/*": ["Source/Component/*"],
- 			"@Layout/*": ["Source/Layout/*"],
- 			"@Library/*": ["Source/Library/*"],
- 			"@Option/*": ["Source/Option/*"],
- 			"@Page/*": ["Source/pages/*"],
- 			"@Script/*": ["Source/Script/*"],
- 			"@Style/*": ["Source/Style/*"]
- 		},
- 		"types": ["astro/client", "astro/client-image", "astro/env"]
- 	},
- 	"extends": "@nikolarhristov/tsbundle/Source/Configuration/TypeScript",
- }

🗣️ Summary from v to v0.0.10 in .
diff --git a/.github/workflows/codeql.yml b/.github/workflows/codeql.yml
new file mode 100644
index 0000000..8cedfe5
--- /dev/null
+++ b/.github/workflows/codeql.yml
+ name: CodeQL
+ 
+ concurrency:
+     group: CodeQL-${{ github.workflow }}-${{ github.ref }}
+     cancel-in-progress: true
+ 
+ permissions:
+     security-events: write
+     contents: write
+     pull-requests: write
+ 
+ on:
+     workflow_dispatch:
+     push:
+         branches: [main]
+     pull_request:
+         branches: [main]
+     workflow_call:
+ 
+ jobs:
+     CodeQL:
+         runs-on: ubuntu-latest
+ 
+         env:
+             ADBLOCK: true
+             TELEMETRY_DISABLED: 1
+             ASTRO_TELEMETRY_DISABLED: 1
+             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
+             AZURE_CORE_COLLECT_TELEMETRY: 0
+             CHOOSENIM_NO_ANALYTICS: 1
+             DIEZ_DO_NOT_TRACK: 1
+             DO_NOT_TRACK: 1
+             DOTNET_CLI_TELEMETRY_OPTOUT: 1
+             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
+             ET_NO_TELEMETRY: 1
+             GATSBY_TELEMETRY_DISABLED: 1
+             GATSBY_TELEMETRY_OPT_OUT: 1
+             GATSBY_TELEMETRY_OPTOUT: 1
+             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
+             HINT_TELEMETRY: off
+             HOMEBREW_NO_ANALYTICS: 1
+             INFLUXD_REPORTING_DISABLED: true
+             ITERATIVE_DO_NOT_TRACK: 1
+             NEXT_TELEMETRY_DEBUG: 1
+             NEXT_TELEMETRY_DISABLED: 1
+             NG_CLI_ANALYTICS: false
+             NUXT_TELEMETRY_DISABLED: 1
+             PIN_DO_NOT_TRACK: 1
+             POWERSHELL_TELEMETRY_OPTOUT: 1
+             SAM_CLI_TELEMETRY: 0
+             STNOUPGRADE: 1
+             STRIPE_CLI_TELEMETRY_OPTOUT: 1
+ 
+         steps:
+             - uses: actions/checkout@v3.5.3
+ 
+             - uses: github/codeql-action/init@v2.21.3
+               with:
+                   languages: javascript
+ 
+             - name: Perform CodeQL Analysis
+               uses: github/codeql-action/analyze@v2.21.3
+               with:
+                   category: "/language:javascript"
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
deleted file mode 100644
index dcb957d..0000000
--- a/.github/workflows/GitHub.yml
+++ /dev/null
- name: GitHub
- 
- concurrency:
-     group: GitHub-${{ github.workflow }}-${{ github.ref }}
-     cancel-in-progress: true
- 
- permissions:
-     issues: write
-     pull-requests: write
- 
- on:
-     issues:
-         types: [opened]
-     pull_request:
-         types: [opened]
- 
- jobs:
-     Assign:
-         runs-on: ubuntu-latest
- 
-         env:
-             ADBLOCK: true
-             TELEMETRY_DISABLED: 1
-             ASTRO_TELEMETRY_DISABLED: 1
-             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
-             AZURE_CORE_COLLECT_TELEMETRY: 0
-             CHOOSENIM_NO_ANALYTICS: 1
-             DIEZ_DO_NOT_TRACK: 1
-             DO_NOT_TRACK: 1
-             DOTNET_CLI_TELEMETRY_OPTOUT: 1
-             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
-             ET_NO_TELEMETRY: 1
-             GATSBY_TELEMETRY_DISABLED: 1
-             GATSBY_TELEMETRY_OPT_OUT: 1
-             GATSBY_TELEMETRY_OPTOUT: 1
-             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
-             HINT_TELEMETRY: off
-             HOMEBREW_NO_ANALYTICS: 1
-             INFLUXD_REPORTING_DISABLED: true
-             ITERATIVE_DO_NOT_TRACK: 1
-             NEXT_TELEMETRY_DEBUG: 1
-             NEXT_TELEMETRY_DISABLED: 1
-             NG_CLI_ANALYTICS: false
-             NUXT_TELEMETRY_DISABLED: 1
-             PIN_DO_NOT_TRACK: 1
-             POWERSHELL_TELEMETRY_OPTOUT: 1
-             SAM_CLI_TELEMETRY: 0
-             STNOUPGRADE: 1
-             STRIPE_CLI_TELEMETRY_OPTOUT: 1
- 
-         steps:
-             - uses: pozil/auto-assign-issue@v1.12.0
-               with:
-                   repo-token: ${{ secrets.GITHUB_TOKEN }}
-                   assignees: NikolaRHristov
-                   numOfAssignee: 1
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index d97ceff..9eff081 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v4.0.0
+             - uses: actions/checkout@v3.5.3
-             - uses: actions/setup-node@v3.8.1
+             - uses: actions/setup-node@v3.7.0
-             - uses: actions/upload-artifact@v3.1.3
+             - uses: actions/upload-artifact@v3.1.2
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 33f5e8b..f8d70f3 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
- 
-             - uses: actions/checkout@v4.0.0
+             - uses: actions/checkout@v3.5.3
-             - uses: actions/setup-node@v3.8.1
+             - uses: actions/setup-node@v3.7.0
diff --git a/.gitignore b/.gitignore
new file mode 100644
index 0000000..1244cda
--- /dev/null
+++ b/.gitignore
+ .github/
+ .turbo/
+ Source/
diff --git a/.npmignore b/.npmignore
index 4a67f96..70da021 100644
--- a/.npmignore
+++ b/.npmignore
- CODE_OF_CONDUCT.md
- CONTRIBUTING.md
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
deleted file mode 100644
index b4f1f9b..0000000
--- a/CODE_OF_CONDUCT.md
+++ /dev/null
- # Code of Conduct
- 
- ## Our Pledge
- 
- Welcome to our community! We are committed to creating a welcoming and inclusive
- environment for all contributors. As members, contributors, and leaders, we
- pledge to make participation in our community a harassment-free experience for
- everyone, regardless of:
- 
- -   Age
- -   Body size
- -   Visible or invisible disability
- -   Ethnicity
- -   Sex characteristics
- -   Gender identity and expression
- -   Level of experience
- -   Education
- -   Socio-economic status
- -   Nationality
- -   Personal appearance
- -   Race
- -   Caste
- -   Color
- -   Religion
- -   Sexual identity and orientation
- 
- We promise to act and interact in ways that contribute to an open, welcoming,
- diverse, inclusive, and healthy community.
- 
- ## Our Standards
- 
- Examples of behavior that contributes to a positive environment for our
- community include:
- 
- -   Demonstrating empathy and kindness toward other people
- -   Being respectful of differing opinions, viewpoints, and experiences
- -   Giving and gracefully accepting constructive feedback
- -   Accepting responsibility and apologizing to those affected by our mistakes,
-     and learning from the experience
- -   Focusing on what is best not just for us as individuals but for the overall
-     community
- 
- Examples of unacceptable behavior include:
- 
- -   The use of sexualized language or imagery, and sexual attention or advances
-     of any kind
- -   Trolling, insulting, or derogatory comments, and personal or political
-     attacks
- -   Public or private harassment
- -   Publishing others' private information, such as a physical or email address,
-     without their explicit permission
- -   Other conduct which could reasonably be considered inappropriate in a
-     professional setting
- 
- ## Enforcement Responsibilities
- 
- Community leaders are responsible for clarifying and enforcing our standards of
- acceptable behavior. They will take appropriate and fair corrective action in
- response to any behavior they deem inappropriate, threatening, offensive, or
- harmful. This may include removing, editing, or rejecting comments, commits,
- code, wiki edits, issues, and other contributions that do not align with this
- Code of Conduct. Community leaders will communicate reasons for moderation
- decisions when appropriate.
- 
- ## Scope
- 
- This Code of Conduct applies within all community spaces, and also applies when
- an individual is officially representing the community in public spaces.
- Examples of representing our community include using an official e-mail address,
- posting via an official social media account, or acting as an appointed
- representative at an online or offline event.
- 
- ## Enforcement
- 
- Instances of abusive, harassing, or otherwise unacceptable behavior may be
- reported to the community leaders responsible for enforcement at
- nikola@nikolahristov.tech. All complaints will be reviewed and investigated
- promptly and fairly. All community leaders are obligated to respect the privacy
- and security of the reporter of any incident.
- 
- ## Enforcement Guidelines
- 
- Community leaders will follow these Community Impact Guidelines in determining
- the consequences for any action they deem in violation of this Code of Conduct:
- 
- ### 1. Correction
- 
- **Community Impact**: Use of inappropriate language or other behavior deemed
- unprofessional or unwelcome in the community.
- 
- **Consequence**: A private, written warning from community leaders, providing
- clarity around the nature of the violation and an explanation of why the
- behavior was inappropriate. A public apology may be requested.
- 
- ### 2. Warning
- 
- **Community Impact**: A violation through a single incident or series of
- actions.
- 
- **Consequence**: A warning with consequences for continued behavior. No
- interaction with the people involved, including unsolicited interaction with
- those enforcing the Code of Conduct, for a specified period of time. This
- includes avoiding interactions in community spaces as well as external channels
- like social media. Violating these terms may lead to a temporary or permanent
- ban.
- 
- ### 3. Temporary Ban
- 
- **Community Impact**: A serious violation of community standards, including
- sustained inappropriate behavior.
- 
- **Consequence**: A temporary ban from any sort of interaction or public
- communication with the community for a specified period of time. No public or
- private interaction with the people involved, including unsolicited interaction
- with those enforcing the Code of Conduct, is allowed during this period.
- Violating these terms may lead to a permanent ban.
- 
- ### 4. Permanent Ban
- 
- **Community Impact**: Demonstrating a pattern of violation of community
- standards, including sustained inappropriate behavior, harassment of an
- individual, or aggression toward or disparagement of classes of individuals.
- 
- **Consequence**: A permanent ban from any sort of public interaction within the
- community.
- 
- ## Attribution
- 
- This Code of Conduct is adapted from the [Contributor Covenant][homepage],
- version 2.1, available at
- [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
- Community Impact Guidelines were inspired by [Mozilla's code of conduct
- enforcement ladder][Mozilla CoC].
- 
- For answers to common questions about this code of conduct, see the FAQ at
- [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
- [https://www.contributor-covenant.org/translations][translations].
- 
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
- 
- Thank you for being part of our community and helping us create a safe and
- respectful environment for everyone!
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
deleted file mode 100644
index c740185..0000000
--- a/CONTRIBUTING.md
+++ /dev/null
- # Contributing Guidelines
- 
- Welcome to our community! We are committed to creating a welcoming and inclusive
- environment for all contributors. Before you get started, please read and adhere
- to the following code of conduct. By participating in our community, you agree
- to abide by these guidelines.
- 
- ## Our Pledge
- 
- We, as members, contributors, and leaders, pledge to make participation in our
- community a harassment-free experience for everyone, regardless of age, body
- size, visible or invisible disability, ethnicity, sex characteristics, gender
- identity and expression, level of experience, education, socio-economic status,
- nationality, personal appearance, race, caste, color, religion, or sexual
- identity and orientation. We pledge to act and interact in ways that contribute
- to an open, welcoming, diverse, inclusive, and healthy community.
- 
- ## Our Standards
- 
- Examples of behavior that contributes to a positive environment for our
- community include:
- 
- -   Demonstrating empathy and kindness toward other people
- -   Being respectful of differing opinions, viewpoints, and experiences
- -   Giving and gracefully accepting constructive feedback
- -   Accepting responsibility and apologizing to those affected by our mistakes,
-     and learning from the experience
- -   Focusing on what is best not just for us as individuals, but for the overall
-     community
- 
- Examples of unacceptable behavior include:
- 
- -   The use of sexualized language or imagery, and sexual attention or advances
-     of any kind
- -   Trolling, insulting, or derogatory comments, and personal or political
-     attacks
- -   Public or private harassment
- -   Publishing others' private information, such as a physical or email address,
-     without their explicit permission
- -   Other conduct which could reasonably be considered inappropriate in a
-     professional setting
- 
- ## Enforcement Responsibilities
- 
- Community leaders are responsible for clarifying and enforcing our standards of
- acceptable behavior and will take appropriate and fair corrective action in
- response to any behavior that they deem inappropriate, threatening, offensive,
- or harmful. Community leaders have the right and responsibility to remove, edit,
- or reject comments, commits, code, wiki edits, issues, and other contributions
- that are not aligned with this Code of Conduct, and will communicate reasons for
- moderation decisions when appropriate.
- 
- ## Scope
- 
- This Code of Conduct applies within all community spaces, and also applies when
- an individual is officially representing the community in public spaces.
- Examples of representing our community include using an official e-mail address,
- posting via an official social media account, or acting as an appointed
- representative at an online or offline event.
- 
- ## Enforcement
- 
- Instances of abusive, harassing, or otherwise unacceptable behavior may be
- reported to the community leaders responsible for enforcement at
- nikola@nikolahristov.tech. All complaints will be reviewed and investigated
- promptly and fairly. All community leaders are obligated to respect the privacy
- and security of the reporter of any incident.
- 
- ## Enforcement Guidelines
- 
- Community leaders will follow these Community Impact Guidelines in determining
- the consequences for any action they deem in violation of this Code of Conduct:
- 
- ### 1. Correction
- 
- **Community Impact**: Use of inappropriate language or other behavior deemed
- unprofessional or unwelcome in the community.
- 
- **Consequence**: A private, written warning from community leaders, providing
- clarity around the nature of the violation and an explanation of why the
- behavior was inappropriate. A public apology may be requested.
- 
- ### 2. Warning
- 
- **Community Impact**: A violation through a single incident or series of
- actions.
- 
- **Consequence**: A warning with consequences for continued behavior. No
- interaction with the people involved, including unsolicited interaction with
- those enforcing the Code of Conduct, for a specified period of time. This
- includes avoiding interactions in community spaces as well as external channels
- like social media. Violating these terms may lead to a temporary or permanent
- ban.
- 
- ### 3. Temporary Ban
- 
- **Community Impact**: A serious violation of community standards, including
- sustained inappropriate behavior.
- 
- **Consequence**: A temporary ban from any sort of interaction or public
- communication with the community for a specified period of time. No public or
- private interaction with the people involved, including unsolicited interaction
- with those enforcing the Code of Conduct, is allowed during this period.
- Violating these terms may lead to a permanent ban.
- 
- ### 4. Permanent Ban
- 
- **Community Impact**: Demonstrating a pattern of violation of community
- standards, including sustained inappropriate behavior, harassment of an
- individual, or aggression toward or disparagement of classes of individuals.
- 
- **Consequence**: A permanent ban from any sort of public interaction within the
- community.
- 
- ## Attribution
- 
- This Code of Conduct is adapted from the [Contributor Covenant][homepage],
- version 2.1, available at
- [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
- Community Impact Guidelines were inspired by [Mozilla's code of conduct
- enforcement ladder][Mozilla CoC].
- 
- For answers to common questions about this code of conduct, see the FAQ at
- [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
- [https://www.contributor-covenant.org/translations][translations].
- 
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
- 
- Thank you for being part of our community and helping us create a safe and
- respectful environment for everyone!
diff --git a/LICENSE b/LICENSE
deleted file mode 100644
index a14ae95..0000000
--- a/LICENSE
+++ /dev/null
- MIT License
- 
- Copyright (c) 2023 Nikola R. Hristov
- 
- Permission is hereby granted, free of charge, to any person obtaining a copy of
- this software and associated documentation files (the "Software"), to deal in
- the Software without restriction, including without limitation the rights to
- use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
- the Software, and to permit persons to whom the Software is furnished to do so,
- subject to the following conditions:
- 
- The above copyright notice and this permission notice shall be included in all
- copies or substantial portions of the Software.
- 
- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
- IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
- FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
- COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
- IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
- CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
diff --git a/package.json b/package.json
index 7f56c3d..c180f0b 100644
--- a/package.json
+++ b/package.json
- 	"name": "typescript-esbuild",
- 	"version": "0.1.15",
- 	"private": false,
- 	"description": "🌀 Builds all your TypeScript files into JavaScript from a given folder using esbuild.",
- 	"keywords": [
- 		"javascript",
- 		"typescript",
- 		"esbuild"
- 	],
- 	"homepage": "https://github.com/NikolaRHristov/TypeScriptESBuild#readme",
+ 	"name": "baxast",
+ 	"version": "0.0.10",
+ 	"homepage": "https://github.com/baxast/baxast#readme",
- 		"url": "https://github.com/NikolaRHristov/TypeScriptESBuild/issues"
+ 		"url": "https://github.com/baxast/baxast/issues"
- 		"url": "git+https://github.com/NikolaRHristov/TypeScriptESBuild.git"
- 	},
- 	"license": "MIT",
- 	"author": {
- 		"name": "Nikola Hristov",
- 		"email": "nikola@nikolahristov.tech",
- 		"url": "https://nikolahristov.tech"
+ 		"url": "git+https://github.com/baxast/baxast.git"
+ 	"main": "./Target/Index.js",
+ 	"types": "./Target/Index.d.ts",
- 		"TypeScriptESBuild": "Target/Bin.js"
+ 		"baxast": "Target/Bin.js"
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Bin.ts 'Source/**/*.ts'"
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Index.ts 'Source/**/*.ts'"
- 		"@types/node": "20.6.2",
- 		"esbuild": "0.19.3",
+ 		"esbuild": "0.19.0",
- 		"typescript": "5.2.2"
+ 		"typescript": "5.1.6"
- 		"@types/node": "20.6.2",
+ 		"@types/node": "20.4.9",
- 	},
- 	"publishConfig": {
- 		"access": "public"
diff --git a/README.md b/README.md
deleted file mode 100644
index a2cd16b..0000000
--- a/README.md
+++ /dev/null
- # [TypeScriptESBuild] 🌀
- 
- Builds all your TypeScript files into JavaScript.
- 
- ## Installation
- 
- Add configuration and setup scripts:
- 
- ```sh
- npm install -D -E typescript-esbuild
- ```
- 
- ## Usage
- 
- `package.json`
- 
- ```json
- {
- 	"name": "package",
- 	"scripts": {
- 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
- 	},
- 	"dependencies": {
- 		"typescript-esbuild": "latest"
- 	}
- }
- ```
- 
- #### or with a custom esbuild config file:
- 
- ```json
- {
- 	"scripts": {
- 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es ESBuild.ts"
- 	}
- }
- ```
- 
- #### See an example of a config file in [ESBuild.ts](Source/Configuration/ESBuild.ts)
- 
- `tsconfig.json`
- 
- ```json
- {
- 	"compilerOptions": {
- 		"outDir": "Target"
- 	},
- 	"extends": "typescript-esbuild/Target/Configuration/TypeScript",
- 	"include": ["Source"]
- }
- ```
- 
- [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
- [esbuild]: https://npmjs.org/esbuild
diff --git a/Source/Bin.ts b/Source/Bin.ts
index 27ab322..f401b04 100644
--- a/Source/Bin.ts
+++ b/Source/Bin.ts
- import Build from "./Command/Build.js";
- import _JSON from "./Library/JSON.js";
- 
- import { Command } from "commander";
- 
- try {
- 	new Command()
- 		.name("TypeScriptESBuild")
- 		.version((await _JSON("../package.json", import.meta.url))?.version)
- 		.description("Builds files")
- 		.argument("<Files...>", "Files to build")
- 		.option("-es, --ESBuild <File>", "esbuild configuration file")
- 		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
- 		.action(Build)
- 		.parse();	
- } catch (_Error) {
- 	console.log(_Error);
- }
+ import "./Index.js";
diff --git a/Source/Command/Build.ts b/Source/Command/Build.ts
index b20fac3..6b6852d 100644
--- a/Source/Command/Build.ts
+++ b/Source/Command/Build.ts
- import type { BuildOptions as Option } from "esbuild";
+ import type { BuildOptions } from "esbuild";
- import _ESBuild from "../Configuration/ESBuild.js";
- import File from "../Library/File.js";
+ import esbuild from "../Configuration/esbuild.js";
- /**
-  * The `Build` function compiles and builds TypeScript files using esbuild and TypeScript compiler.
-  * @param {Pattern[]} Files - An array of file patterns to be processed. Each pattern can include
-  * wildcards (*) to match multiple files.
-  * @param [Option] - The `Option` parameter is an optional object that can contain two properties:
-  */
- export default async (
- 	Files: Pattern[],
- 	Option?: { ESBuild?: string; TypeScript?: string }
- ) => {
+ export default async (Files: Pattern[], Options?: { TypeScript?: string }) => {
- 	const ESBuild = Merge(_ESBuild, {
+ 	await Build(
+ 		Merge(esbuild, {
- 				File.replace("Source/", "").split(".").slice(0, -1.0).join("."),
+ 					File.replace("Source/", "")
+ 						.split(".")
+ 						.slice(0, -1.0)
+ 						.join("."),
- 	} satisfies Option);
- 
- 	await Build(
- 		Option?.ESBuild ? Merge(ESBuild, await File(Option?.ESBuild)) : ESBuild
+ 		} satisfies BuildOptions)
- 	if (Option?.TypeScript) {
- 		Exec(`tsc -p ${Option?.TypeScript}`);
+ 	if (Options?.TypeScript) {
+ 		Exec(`tsc -p ${Options?.TypeScript}`);
diff --git a/Source/Configuration/ESBuild.ts b/Source/Configuration/ESBuild.ts
index 181864f..ed7fed4 100644
--- a/Source/Configuration/ESBuild.ts
+++ b/Source/Configuration/ESBuild.ts
- import type { PluginBuild as Build, BuildOptions as Option } from "esbuild";
+ import type { BuildOptions, PluginBuild } from "esbuild";
- import {
- 	access as Access,
- 	constants as Constant,
- 	mkdir as Make,
- 	rm as Remove,
- } from "fs/promises";
+ import { rm as Remove } from "fs/promises";
+ 	sourcemap: false,
- 			setup(Build: Build) {
- 				Build.onStart(async () => {
- 					try {
- 						await Access(Out, Constant.R_OK);
- 					} catch (_Error) {
- 						await Make(Out, {
- 							recursive: true,
- 						});
- 					}
- 
+ 			setup(build: PluginBuild) {
+ 				build.onStart(async () => {
- } satisfies Option;
+ } satisfies BuildOptions;
diff --git a/Source/Configuration/TypeScript.json b/Source/Configuration/TypeScript.json
index 27705c6..358d983 100644
--- a/Source/Configuration/TypeScript.json
+++ b/Source/Configuration/TypeScript.json
- 		"lib": ["ESNext"],
- 		"module": "ESNext",
+ 		"lib": [
+ 			"ESNext"
+ 		],
+ 		"module": "NodeNext",
- 		"types": ["node", "@types/node"],
+ 		"types": [
+ 			"node"
+ 		],
diff --git a/Source/Index.ts b/Source/Index.ts
new file mode 100644
index 0000000..bdc2bcf
--- /dev/null
+++ b/Source/Index.ts
+ import { Command } from "commander";
+ import Build from "./Command/Build.js";
+ import _JSON from "./Library/JSON.js";
+ 
+ try {
+ 	const { version } = await _JSON("../package.json", import.meta.url);
+ 
+ 	new Command()
+ 		.name("baxast")
+ 		.version(version)
+ 		.description("Builds files")
+ 		.argument("<Files...>", "Files to build")
+ 		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
+ 		.action(Build)
+ 		.parse();
+ } catch (_Error) {
+ 	console.log(_Error);
+ }
diff --git a/Source/Library/File.ts b/Source/Library/File.ts
deleted file mode 100644
index f151f6d..0000000
--- a/Source/Library/File.ts
+++ /dev/null
- import { readFile as _File, writeFile as File } from "fs/promises";
- import TypeScript from "typescript";
- import { pathToFileURL as URL } from "url";
- import _JSON from "./JSON.js";
- 
- /**
-  * The function takes a file path as input, checks if it is a TypeScript file, converts the TypeScript
-  * code to JavaScript, and then imports and returns the default export of the JavaScript file.
-  * @param {string} Path - The `Path` parameter is a string that represents the file path of the file
-  * you want to process.
-  * @returns the default export of the module that is imported using the provided `Path`.
-  */
- export default async (Path: string) => {
- 	if (Path.split(".").pop() === "ts") {
- 		const { options } = TypeScript.convertCompilerOptionsFromJson(
- 			(await _JSON("../Configuration/TypeScript.json", import.meta.url))
- 				?.compilerOptions,
- 			"."
- 		);
- 
- 		TypeScript.createProgram(
- 			[Path],
- 			options,
- 			TypeScript.createCompilerHost(options)
- 		).emit();
- 
- 		await File(
- 			Path.replace(".ts", ".js"),
- 			TypeScript.transpile(
- 				(await _File(Path, "utf-8")).toString(),
- 				options
- 			)
- 		);
- 	}
- 
- 	return (await import(URL(Path).toString().replace(".ts", ".js"))).default;
- };
diff --git a/Source/Library/JSON.ts b/Source/Library/JSON.ts
index 826a677..0b31dd5 100644
--- a/Source/Library/JSON.ts
+++ b/Source/Library/JSON.ts
- /**
-  * The function `JSON` is a TypeScript function that reads a JSON file and returns its parsed content.
-  * @param {string} File - The `File` parameter is a string that represents the name or path of the JSON
-  * file that you want to parse.
-  * @param {string} From - The `From` parameter is a string that represents the source URL or file path
-  * from which the JSON file will be loaded. It is set to `import.meta.url` by default, which refers to
-  * the URL of the current module. However, if a different source URL or file path is provided,
-  */

🗣️ Summary from v0.0.10 to v0.0.11 in .
diff --git a/.gitignore b/.gitignore
index 1244cda..7392fac 100644
--- a/.gitignore
+++ b/.gitignore
- .github/
- Source/
diff --git a/package.json b/package.json
index c180f0b..abb84be 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.10",
+ 	"version": "0.0.11",
diff --git a/Source/Index.ts b/Source/Index.ts
index bdc2bcf..77149fd 100644
--- a/Source/Index.ts
+++ b/Source/Index.ts
- 	const { version } = await _JSON("../package.json", import.meta.url);
- 
- 		.version(version)
+ 		.version((await _JSON("../package.json", import.meta.url))?.version)

🗣️ Summary from v0.0.11 to v0.0.2 in .
diff --git a/.github/workflows/codeql.yml b/.github/workflows/codeql.yml
index 8cedfe5..83feba6 100644
--- a/.github/workflows/codeql.yml
+++ b/.github/workflows/codeql.yml
- name: CodeQL
+ name: "CodeQL"
-             - uses: github/codeql-action/init@v2.21.3
+             - uses: github/codeql-action/init@v2.21.2
-               uses: github/codeql-action/analyze@v2.21.3
+               uses: github/codeql-action/analyze@v2.21.2
diff --git a/.gitignore b/.gitignore
index 7392fac..c72a4fc 100644
--- a/.gitignore
+++ b/.gitignore
- .turbo/
+ .turbo
diff --git a/.npmignore b/.npmignore
index 70da021..1244cda 100644
--- a/.npmignore
+++ b/.npmignore
- CHANGELOG.md
diff --git a/package.json b/package.json
index abb84be..f37cc07 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.11",
+ 	"version": "0.0.2",
- 		"baxast": "Target/Bin.js"
+ 		"baxast": "./Target/Bin.js"
- 		"esbuild": "0.19.0",
+ 		"esbuild": "0.18.19",
- 		"@types/node": "20.4.9",
+ 		"@types/node": "20.4.8",
diff --git a/Source/Configuration/esbuild.ts b/Source/Configuration/esbuild.ts
index ed7fed4..b148160 100644
--- a/Source/Configuration/esbuild.ts
+++ b/Source/Configuration/esbuild.ts
- import { copy as Copy } from "esbuild-plugin-copy";
+ import { copy as Copy } from "esbuild-plugin-copy";
- 	sourcemap: false,
diff --git a/Source/Index.ts b/Source/Index.ts
index 77149fd..bdc2bcf 100644
--- a/Source/Index.ts
+++ b/Source/Index.ts
+ 	const { version } = await _JSON("../package.json", import.meta.url);
+ 
- 		.version((await _JSON("../package.json", import.meta.url))?.version)
+ 		.version(version)

🗣️ Summary from v0.0.2 to v0.0.3 in .
diff --git a/.gitignore b/.gitignore
index c72a4fc..1244cda 100644
--- a/.gitignore
+++ b/.gitignore
- .turbo
+ .github/
+ .turbo/
+ Source/
diff --git a/package.json b/package.json
index f37cc07..a581d0c 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.2",
+ 	"version": "0.0.3",

🗣️ Summary from v0.0.3 to v0.0.4 in .
diff --git a/.npmignore b/.npmignore
index 1244cda..70da021 100644
--- a/.npmignore
+++ b/.npmignore
+ CHANGELOG.md
diff --git a/package.json b/package.json
index a581d0c..341a395 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.3",
+ 	"version": "0.0.4",

🗣️ Summary from v0.0.4 to v0.0.5 in .
diff --git a/package.json b/package.json
index 341a395..f83b89c 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.4",
+ 	"version": "0.0.5",
- 		"baxast": "./Target/Bin.js"
+ 		"baxast": "Target/Bin.js"
- 		"esbuild": "0.18.19",
+ 		"esbuild": "0.18.20",

🗣️ Summary from v0.0.5 to v0.0.6 in .
diff --git a/package.json b/package.json
index f83b89c..bc03131 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.5",
+ 	"version": "0.0.6",

🗣️ Summary from v0.0.6 to v0.0.7 in .
diff --git a/.github/workflows/codeql.yml b/.github/workflows/codeql.yml
index 83feba6..8d8ab25 100644
--- a/.github/workflows/codeql.yml
+++ b/.github/workflows/codeql.yml
- name: "CodeQL"
+ name: CodeQL
diff --git a/package.json b/package.json
index bc03131..98eb0f8 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.6",
+ 	"version": "0.0.7",
- 		"esbuild": "0.18.20",
+ 		"esbuild": "0.19.0",
- 		"@types/node": "20.4.8",
- 		"ts-node": "10.9.1"
+ 		"@types/node": "latest",
+ 		"ts-node": "latest"

🗣️ Summary from v0.0.7 to v0.0.8 in .
diff --git a/package.json b/package.json
index 98eb0f8..5a4bcc5 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.7",
+ 	"version": "0.0.8",
diff --git a/Source/Configuration/esbuild.ts b/Source/Configuration/esbuild.ts
index b148160..8e4c808 100644
--- a/Source/Configuration/esbuild.ts
+++ b/Source/Configuration/esbuild.ts
- import { rm as Remove } from "fs/promises";
+ import { rm as Remove } from "fs/promises";

🗣️ Summary from v0.0.8 to v0.0.9 in .
diff --git a/.github/workflows/codeql.yml b/.github/workflows/codeql.yml
index 8d8ab25..8cedfe5 100644
--- a/.github/workflows/codeql.yml
+++ b/.github/workflows/codeql.yml
-             - uses: github/codeql-action/init@v2.21.2
+             - uses: github/codeql-action/init@v2.21.3
-               uses: github/codeql-action/analyze@v2.21.2
+               uses: github/codeql-action/analyze@v2.21.3
diff --git a/package.json b/package.json
index 5a4bcc5..2af036b 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.8",
+ 	"version": "0.0.9",
- 		"@types/node": "latest",
- 		"ts-node": "latest"
+ 		"@types/node": "20.4.9",
+ 		"ts-node": "10.9.1"

🗣️ Summary from v0.0.9 to v0.1.0 in .
diff --git a/.gitignore b/.gitignore
index 1244cda..7392fac 100644
--- a/.gitignore
+++ b/.gitignore
- .github/
- Source/
diff --git a/package.json b/package.json
index 2af036b..947bb06 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.0.9",
+ 	"version": "0.1.0",
- 		"typescript": "5.1.6"
+ 		"typescript": "5.1.6",
+ 		"@types/node": "20.4.9"
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..b8e5153
--- /dev/null
+++ b/README.md
+ # Build scripts and configuration
+ 
+ ## Installation
+ 
+ Add configuration and setup scripts:
+ 
+ ```sh
+ npm install -D -E baxast
+ ```
+ 
+ ## Usage
+ 
+ `package.json`
+ 
+ ```json
+ {
+ 	"name": "my-awesome-package",
+ 	"scripts": {
+ 		"prepublishOnly": "baxast 'Source/**/*.ts'"
+ 	},
+ 	"dependencies": {
+ 		"baxast": "latest"
+ 	}
+ }
+ ```
+ 
+ or with a custom esbuild config file:
+ 
+ ```json
+ {
+ 	"scripts": {
+ 		"prepublishOnly": "baxast 'Source/**/*.ts' -es ESBuild.ts"
+ 	}
+ }
+ ```
+ 
+ #### See an example of a config file in [ESBuild.ts](Source/Configuration/esbuild.ts)
+ 
+ `tsconfig.json`
+ 
+ ```json
+ {
+ 	"compilerOptions": {
+ 		"outDir": "Target"
+ 	},
+ 	"extends": "./Source/Configuration/TypeScript",
+ 	"include": ["Source"]
+ }
+ ```
+ 
+ The script will now automatically compile your build files with [esbuild] and
+ add TypeScript types.
+ 
+ [baxast]: https://npmjs.org/baxast
+ [esbuild]: https://npmjs.org/esbuild
diff --git a/Source/Command/Build.ts b/Source/Command/Build.ts
index 6b6852d..cf50885 100644
--- a/Source/Command/Build.ts
+++ b/Source/Command/Build.ts
- import esbuild from "../Configuration/esbuild.js";
+ import _esbuild from "../Configuration/esbuild.js";
+ import File from "../Library/File.js";
- export default async (Files: Pattern[], Options?: { TypeScript?: string }) => {
+ export default async (
+ 	Files: Pattern[],
+ 	Options?: { esbuild?: string; TypeScript?: string }
+ ) => {
- 	await Build(
- 		Merge(esbuild, {
+ 	const esbuild = Merge(_esbuild, {
- 					File.replace("Source/", "")
- 						.split(".")
- 						.slice(0, -1.0)
- 						.join("."),
+ 				File.replace("Source/", "").split(".").slice(0, -1.0).join("."),
- 		} satisfies BuildOptions)
+ 	} satisfies BuildOptions);
+ 
+ 	await Build(
+ 		Options?.esbuild
+ 			? Merge(esbuild, await File(Options?.esbuild))
+ 			: esbuild
diff --git a/Source/Configuration/TypeScript.json b/Source/Configuration/TypeScript.json
index 358d983..894b8bd 100644
--- a/Source/Configuration/TypeScript.json
+++ b/Source/Configuration/TypeScript.json
- 		"module": "NodeNext",
+ 		"module": "ESNext",
- 			"node"
+ 			"node",
+ 			"@types/node"
diff --git a/Source/Index.ts b/Source/Index.ts
index bdc2bcf..1ac8c8d 100644
--- a/Source/Index.ts
+++ b/Source/Index.ts
- 	const { version } = await _JSON("../package.json", import.meta.url);
- 
- 		.version(version)
+ 		.version((await _JSON("../package.json", import.meta.url))?.version)
+ 		.option("-es, --esbuild <File>", "esbuild configuration file")
diff --git a/Source/Library/File.ts b/Source/Library/File.ts
new file mode 100644
index 0000000..10a0928
--- /dev/null
+++ b/Source/Library/File.ts
+ import { readFile as _File, writeFile as File } from "fs/promises";
+ import TypeScript from "typescript";
+ import { pathToFileURL as URL } from "url";
+ import _JSON from "./JSON.js";
+ 
+ export default async (Path: string) => {
+ 	if (Path.split(".").pop() === "ts") {
+ 		const { options } = TypeScript.convertCompilerOptionsFromJson(
+ 			(await _JSON("../Configuration/TypeScript.json", import.meta.url))
+ 				?.compilerOptions,
+ 			"."
+ 		);
+ 
+ 		TypeScript.createProgram(
+ 			[Path],
+ 			options,
+ 			TypeScript.createCompilerHost(options)
+ 		).emit();
+ 
+ 		await File(
+ 			Path.replace(".ts", ".js"),
+ 			TypeScript.transpile(
+ 				(await _File(Path, "utf-8")).toString(),
+ 				options
+ 			)
+ 		);
+ 	}
+ 
+ 	return (await import(URL(Path).toString().replace(".ts", ".js"))).default;
+ };

🗣️ Summary from v0.1.0 to v0.1.1 in .
diff --git a/.gitignore b/.gitignore
deleted file mode 100644
index 7392fac..0000000
--- a/.gitignore
+++ /dev/null
- .turbo/
diff --git a/LICENSE b/LICENSE
new file mode 100644
index 0000000..66f72b3
--- /dev/null
+++ b/LICENSE
+ MIT License
+ 
+ Copyright (c) 2022 Nikola Hristov
+ 
+ Permission is hereby granted, free of charge, to any person obtaining a copy of
+ this software and associated documentation files (the "Software"), to deal in
+ the Software without restriction, including without limitation the rights to
+ use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
+ the Software, and to permit persons to whom the Software is furnished to do so,
+ subject to the following conditions:
+ 
+ The above copyright notice and this permission notice shall be included in all
+ copies or substantial portions of the Software.
+ 
+ THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
+ IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
+ FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
+ COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
+ IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
+ CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
diff --git a/package.json b/package.json
index 947bb06..ed0695d 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.0",
- 	"homepage": "https://github.com/baxast/baxast#readme",
+ 	"version": "0.1.1",
+ 	"homepage": "https://github.com/NikolaRHristov/baxast#readme",
- 		"url": "https://github.com/baxast/baxast/issues"
+ 		"url": "https://github.com/NikolaRHristov/baxast/issues"
- 		"url": "git+https://github.com/baxast/baxast.git"
+ 		"url": "git+https://github.com/NikolaRHristov/baxast.git"
+ 		"@types/node": "20.4.10",
- 		"esbuild": "0.19.0",
+ 		"esbuild": "0.19.1",
- 		"typescript": "5.1.6",
- 		"@types/node": "20.4.9"
+ 		"typescript": "5.1.6"
- 		"@types/node": "20.4.9",
+ 		"@types/node": "20.4.10",
diff --git a/README.md b/README.md
index b8e5153..8db3e09 100644
--- a/README.md
+++ b/README.md
- or with a custom esbuild config file:
+ #### or with a custom esbuild config file:
- 		"prepublishOnly": "baxast 'Source/**/*.ts' -es ESBuild.ts"
+ 		"prepublishOnly": "baxast 'Source/**/*.ts' -es esbuild.ts"
- #### See an example of a config file in [ESBuild.ts](Source/Configuration/esbuild.ts)
+ #### See an example of a config file in [esbuild.ts](Source/Configuration/esbuild.ts)
diff --git a/Source/Configuration/TypeScript.json b/Source/Configuration/TypeScript.json
index 894b8bd..27705c6 100644
--- a/Source/Configuration/TypeScript.json
+++ b/Source/Configuration/TypeScript.json
- 		"lib": [
- 			"ESNext"
- 		],
+ 		"lib": ["ESNext"],
- 		"types": [
- 			"node",
- 			"@types/node"
- 		],
+ 		"types": ["node", "@types/node"],

🗣️ Summary from v0.1.1 to v0.1.10 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 9eff081..ef3f64c 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-                   name: .-Node-${{ matrix.node-version }}-Target
+                   name: .-NPM-Node-${{ matrix.node-version }}-Target
diff --git a/.npmignore b/.npmignore
index 70da021..797b72a 100644
--- a/.npmignore
+++ b/.npmignore
- .github/
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
new file mode 100644
index 0000000..444e067
--- /dev/null
+++ b/CODE_OF_CONDUCT.md
+ # Code of Conduct
+ 
+ ## Our Pledge
+ 
+ Welcome to our community! We are committed to creating a welcoming and inclusive
+ environment for all contributors. As members, contributors, and leaders, we
+ pledge to make participation in our community a harassment-free experience for
+ everyone, regardless of:
+ 
+ -   Age
+ -   Body size
+ -   Visible or invisible disability
+ -   Ethnicity
+ -   Sex characteristics
+ -   Gender identity and expression
+ -   Level of experience
+ -   Education
+ -   Socio-economic status
+ -   Nationality
+ -   Personal appearance
+ -   Race
+ -   Caste
+ -   Color
+ -   Religion
+ -   Sexual identity and orientation
+ 
+ We promise to act and interact in ways that contribute to an open, welcoming,
+ diverse, inclusive, and healthy community.
+ 
+ ## Our Standards
+ 
+ Examples of behavior that contributes to a positive environment for our
+ community include:
+ 
+ -   Demonstrating empathy and kindness toward other people
+ -   Being respectful of differing opinions, viewpoints, and experiences
+ -   Giving and gracefully accepting constructive feedback
+ -   Accepting responsibility and apologizing to those affected by our mistakes,
+     and learning from the experience
+ -   Focusing on what is best not just for us as individuals but for the overall
+     community
+ 
+ Examples of unacceptable behavior include:
+ 
+ -   The use of sexualized language or imagery, and sexual attention or advances
+     of any kind
+ -   Trolling, insulting, or derogatory comments, and personal or political
+     attacks
+ -   Public or private harassment
+ -   Publishing others' private information, such as a physical or email address,
+     without their explicit permission
+ -   Other conduct which could reasonably be considered inappropriate in a
+     professional setting
+ 
+ ## Enforcement Responsibilities
+ 
+ Community leaders are responsible for clarifying and enforcing our standards of
+ acceptable behavior. They will take appropriate and fair corrective action in
+ response to any behavior they deem inappropriate, threatening, offensive, or
+ harmful. This may include removing, editing, or rejecting comments, commits,
+ code, wiki edits, issues, and other contributions that do not align with this
+ Code of Conduct. Community leaders will communicate reasons for moderation
+ decisions when appropriate.
+ 
+ ## Scope
+ 
+ This Code of Conduct applies within all community spaces, and also applies when
+ an individual is officially representing the community in public spaces.
+ Examples of representing our community include using an official e-mail address,
+ posting via an official social media account, or acting as an appointed
+ representative at an online or offline event.
+ 
+ ## Enforcement
+ 
+ Instances of abusive, harassing, or otherwise unacceptable behavior may be
+ reported to the community leaders responsible for enforcement at
+ nikola@lightrix.help. All complaints will be reviewed and investigated promptly
+ and fairly. All community leaders are obligated to respect the privacy and
+ security of the reporter of any incident.
+ 
+ ## Enforcement Guidelines
+ 
+ Community leaders will follow these Community Impact Guidelines in determining
+ the consequences for any action they deem in violation of this Code of Conduct:
+ 
+ ### 1. Correction
+ 
+ **Community Impact**: Use of inappropriate language or other behavior deemed
+ unprofessional or unwelcome in the community.
+ 
+ **Consequence**: A private, written warning from community leaders, providing
+ clarity around the nature of the violation and an explanation of why the
+ behavior was inappropriate. A public apology may be requested.
+ 
+ ### 2. Warning
+ 
+ **Community Impact**: A violation through a single incident or series of
+ actions.
+ 
+ **Consequence**: A warning with consequences for continued behavior. No
+ interaction with the people involved, including unsolicited interaction with
+ those enforcing the Code of Conduct, for a specified period of time. This
+ includes avoiding interactions in community spaces as well as external channels
+ like social media. Violating these terms may lead to a temporary or permanent
+ ban.
+ 
+ ### 3. Temporary Ban
+ 
+ **Community Impact**: A serious violation of community standards, including
+ sustained inappropriate behavior.
+ 
+ **Consequence**: A temporary ban from any sort of interaction or public
+ communication with the community for a specified period of time. No public or
+ private interaction with the people involved, including unsolicited interaction
+ with those enforcing the Code of Conduct, is allowed during this period.
+ Violating these terms may lead to a permanent ban.
+ 
+ ### 4. Permanent Ban
+ 
+ **Community Impact**: Demonstrating a pattern of violation of community
+ standards, including sustained inappropriate behavior, harassment of an
+ individual, or aggression toward or disparagement of classes of individuals.
+ 
+ **Consequence**: A permanent ban from any sort of public interaction within the
+ community.
+ 
+ ## Attribution
+ 
+ This Code of Conduct is adapted from the [Contributor Covenant][homepage],
+ version 2.1, available at
+ [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
+ Community Impact Guidelines were inspired by [Mozilla's code of conduct
+ enforcement ladder][Mozilla CoC].
+ 
+ For answers to common questions about this code of conduct, see the FAQ at
+ [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
+ [https://www.contributor-covenant.org/translations][translations].
+ 
+ [homepage]: https://www.contributor-covenant.org
+ [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: https://github.com/mozilla/diversity
+ [FAQ]: https://www.contributor-covenant.org/faq
+ [translations]: https://www.contributor-covenant.org/translations
+ 
+ Thank you for being part of our community and helping us create a safe and
+ respectful environment for everyone!
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
new file mode 100644
index 0000000..cf99f15
--- /dev/null
+++ b/CONTRIBUTING.md
+ # Contributing Guidelines
+ 
+ Welcome to our community! We are committed to creating a welcoming and inclusive
+ environment for all contributors. Before you get started, please read and adhere
+ to the following code of conduct. By participating in our community, you agree
+ to abide by these guidelines.
+ 
+ ## Our Pledge
+ 
+ We, as members, contributors, and leaders, pledge to make participation in our
+ community a harassment-free experience for everyone, regardless of age, body
+ size, visible or invisible disability, ethnicity, sex characteristics, gender
+ identity and expression, level of experience, education, socio-economic status,
+ nationality, personal appearance, race, caste, color, religion, or sexual
+ identity and orientation. We pledge to act and interact in ways that contribute
+ to an open, welcoming, diverse, inclusive, and healthy community.
+ 
+ ## Our Standards
+ 
+ Examples of behavior that contributes to a positive environment for our
+ community include:
+ 
+ -   Demonstrating empathy and kindness toward other people
+ -   Being respectful of differing opinions, viewpoints, and experiences
+ -   Giving and gracefully accepting constructive feedback
+ -   Accepting responsibility and apologizing to those affected by our mistakes,
+     and learning from the experience
+ -   Focusing on what is best not just for us as individuals, but for the overall
+     community
+ 
+ Examples of unacceptable behavior include:
+ 
+ -   The use of sexualized language or imagery, and sexual attention or advances
+     of any kind
+ -   Trolling, insulting, or derogatory comments, and personal or political
+     attacks
+ -   Public or private harassment
+ -   Publishing others' private information, such as a physical or email address,
+     without their explicit permission
+ -   Other conduct which could reasonably be considered inappropriate in a
+     professional setting
+ 
+ ## Enforcement Responsibilities
+ 
+ Community leaders are responsible for clarifying and enforcing our standards of
+ acceptable behavior and will take appropriate and fair corrective action in
+ response to any behavior that they deem inappropriate, threatening, offensive,
+ or harmful. Community leaders have the right and responsibility to remove, edit,
+ or reject comments, commits, code, wiki edits, issues, and other contributions
+ that are not aligned with this Code of Conduct, and will communicate reasons for
+ moderation decisions when appropriate.
+ 
+ ## Scope
+ 
+ This Code of Conduct applies within all community spaces, and also applies when
+ an individual is officially representing the community in public spaces.
+ Examples of representing our community include using an official e-mail address,
+ posting via an official social media account, or acting as an appointed
+ representative at an online or offline event.
+ 
+ ## Enforcement
+ 
+ Instances of abusive, harassing, or otherwise unacceptable behavior may be
+ reported to the community leaders responsible for enforcement at
+ nikola@nikolahristov.tech. All complaints will be reviewed and investigated promptly
+ and fairly. All community leaders are obligated to respect the privacy and
+ security of the reporter of any incident.
+ 
+ ## Enforcement Guidelines
+ 
+ Community leaders will follow these Community Impact Guidelines in determining
+ the consequences for any action they deem in violation of this Code of Conduct:
+ 
+ ### 1. Correction
+ 
+ **Community Impact**: Use of inappropriate language or other behavior deemed
+ unprofessional or unwelcome in the community.
+ 
+ **Consequence**: A private, written warning from community leaders, providing
+ clarity around the nature of the violation and an explanation of why the
+ behavior was inappropriate. A public apology may be requested.
+ 
+ ### 2. Warning
+ 
+ **Community Impact**: A violation through a single incident or series of
+ actions.
+ 
+ **Consequence**: A warning with consequences for continued behavior. No
+ interaction with the people involved, including unsolicited interaction with
+ those enforcing the Code of Conduct, for a specified period of time. This
+ includes avoiding interactions in community spaces as well as external channels
+ like social media. Violating these terms may lead to a temporary or permanent
+ ban.
+ 
+ ### 3. Temporary Ban
+ 
+ **Community Impact**: A serious violation of community standards, including
+ sustained inappropriate behavior.
+ 
+ **Consequence**: A temporary ban from any sort of interaction or public
+ communication with the community for a specified period of time. No public or
+ private interaction with the people involved, including unsolicited interaction
+ with those enforcing the Code of Conduct, is allowed during this period.
+ Violating these terms may lead to a permanent ban.
+ 
+ ### 4. Permanent Ban
+ 
+ **Community Impact**: Demonstrating a pattern of violation of community
+ standards, including sustained inappropriate behavior, harassment of an
+ individual, or aggression toward or disparagement of classes of individuals.
+ 
+ **Consequence**: A permanent ban from any sort of public interaction within the
+ community.
+ 
+ ## Attribution
+ 
+ This Code of Conduct is adapted from the [Contributor Covenant][homepage],
+ version 2.1, available at
+ [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
+ Community Impact Guidelines were inspired by [Mozilla's code of conduct
+ enforcement ladder][Mozilla CoC].
+ 
+ For answers to common questions about this code of conduct, see the FAQ at
+ [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
+ [https://www.contributor-covenant.org/translations][translations].
+ 
+ [homepage]: https://www.contributor-covenant.org
+ [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: https://github.com/mozilla/diversity
+ [FAQ]: https://www.contributor-covenant.org/faq
+ [translations]: https://www.contributor-covenant.org/translations
+ 
+ Thank you for being part of our community and helping us create a safe and
+ respectful environment for everyone!
diff --git a/package.json b/package.json
index ed0695d..be1308f 100644
--- a/package.json
+++ b/package.json
- 	"name": "baxast",
- 	"version": "0.1.1",
- 	"homepage": "https://github.com/NikolaRHristov/baxast#readme",
+ 	"name": "typescript-esbuild",
+ 	"version": "0.1.10",
+ 	"private": false,
+ 	"description": "🌀 Builds all JavaScript files from TypeScript within a given folder using esbuild.",
+ 	"keywords": [
+ 		"javascript",
+ 		"typescript",
+ 		"esbuild"
+ 	],
+ 	"homepage": "https://github.com/NikolaRHristov/TypeScriptESBuild#readme",
- 		"url": "https://github.com/NikolaRHristov/baxast/issues"
+ 		"url": "https://github.com/NikolaRHristov/TypeScriptESBuild/issues"
- 		"url": "git+https://github.com/NikolaRHristov/baxast.git"
+ 		"url": "git+https://github.com/NikolaRHristov/TypeScriptESBuild.git"
+ 	"license": "MIT",
- 		"baxast": "Target/Bin.js"
+ 		"TypeScriptESBuild": "Target/Bin.js"
- 		"@types/node": "20.4.10",
+ 		"@types/node": "20.5.0",
- 		"esbuild": "0.19.1",
+ 		"esbuild": "0.19.2",
- 		"@types/node": "20.4.10",
+ 		"@types/node": "20.5.0",
+ 	},
+ 	"publishConfig": {
+ 		"access": "public"
diff --git a/README.md b/README.md
index 8db3e09..14d705b 100644
--- a/README.md
+++ b/README.md
- # Build scripts and configuration
+ # [TypeScriptESBuild] 🌀
+ 
+ Builds all your TypeScript files into JavaScript.
- npm install -D -E baxast
+ npm install -D -E typescript-esbuild
- 	"name": "my-awesome-package",
+ 	"name": "package",
- 		"prepublishOnly": "baxast 'Source/**/*.ts'"
+ 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
- 		"baxast": "latest"
+ 		"typescript-esbuild": "0.1.8"
- 		"prepublishOnly": "baxast 'Source/**/*.ts' -es esbuild.ts"
+ 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es ESBuild.ts"
- #### See an example of a config file in [esbuild.ts](Source/Configuration/esbuild.ts)
+ #### See an example of a config file in [ESBuild.ts](Source/Configuration/ESBuild.ts)
- 	"extends": "./Source/Configuration/TypeScript",
+ 	"extends": "typescript-esbuild/Target/Configuration/TypeScript",
- The script will now automatically compile your build files with [esbuild] and
- add TypeScript types.
- 
- [baxast]: https://npmjs.org/baxast
+ [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
diff --git a/Source/Command/Build.ts b/Source/Command/Build.ts
index cf50885..e212540 100644
--- a/Source/Command/Build.ts
+++ b/Source/Command/Build.ts
- import type { BuildOptions } from "esbuild";
+ import type { BuildOptions as Option } from "esbuild";
- import _esbuild from "../Configuration/esbuild.js";
+ import _ESBuild from "../Configuration/ESBuild.js";
+ /**
+  * The `Build` function compiles and builds TypeScript files using esbuild and TypeScript compiler.
+  * @param {Pattern[]} Files - An array of file patterns to be processed. Each pattern can include
+  * wildcards (*) to match multiple files.
+  * @param [Option] - The `Option` parameter is an optional object that can contain two properties:
+  */
- 	Options?: { esbuild?: string; TypeScript?: string }
+ 	Option?: { ESBuild?: string; TypeScript?: string }
- 	const esbuild = Merge(_esbuild, {
+ 	const ESBuild = Merge(_ESBuild, {
- 	} satisfies BuildOptions);
+ 	} satisfies Option);
- 		Options?.esbuild
- 			? Merge(esbuild, await File(Options?.esbuild))
- 			: esbuild
+ 		Option?.ESBuild
+ 			? Merge(ESBuild, await File(Option?.ESBuild))
+ 			: ESBuild
- 	if (Options?.TypeScript) {
- 		Exec(`tsc -p ${Options?.TypeScript}`);
+ 	if (Option?.TypeScript) {
+ 		Exec(`tsc -p ${Option?.TypeScript}`);
diff --git a/Source/Configuration/esbuild.ts b/Source/Configuration/esbuild.ts
index 8e4c808..7333bc8 100644
--- a/Source/Configuration/esbuild.ts
+++ b/Source/Configuration/esbuild.ts
- import type { BuildOptions, PluginBuild } from "esbuild";
+ import type { PluginBuild as Build, BuildOptions as Option } from "esbuild";
- import { rm as Remove } from "fs/promises";
+ import {
+ 	access as Access,
+ 	constants as Constant,
+ 	rm as Remove,
+ } from "fs/promises";
- 			setup(build: PluginBuild) {
- 				build.onStart(async () => {
+ 			setup(Build: Build) {
+ 				Build.onStart(async () => {
+ 					try {
+ 						await Access(Out, Constant.R_OK);
+ 
+ 					} catch (_Error) {}
- } satisfies BuildOptions;
+ } satisfies Option;
diff --git a/Source/Index.ts b/Source/Index.ts
index 1ac8c8d..d7b6362 100644
--- a/Source/Index.ts
+++ b/Source/Index.ts
- 		.name("baxast")
+ 		.name("TypeScriptESBuild")
diff --git a/Source/Library/File.ts b/Source/Library/File.ts
index 10a0928..f151f6d 100644
--- a/Source/Library/File.ts
+++ b/Source/Library/File.ts
+ /**
+  * The function takes a file path as input, checks if it is a TypeScript file, converts the TypeScript
+  * code to JavaScript, and then imports and returns the default export of the JavaScript file.
+  * @param {string} Path - The `Path` parameter is a string that represents the file path of the file
+  * you want to process.
+  * @returns the default export of the module that is imported using the provided `Path`.
+  */
diff --git a/Source/Library/JSON.ts b/Source/Library/JSON.ts
index 0b31dd5..826a677 100644
--- a/Source/Library/JSON.ts
+++ b/Source/Library/JSON.ts
+ /**
+  * The function `JSON` is a TypeScript function that reads a JSON file and returns its parsed content.
+  * @param {string} File - The `File` parameter is a string that represents the name or path of the JSON
+  * file that you want to parse.
+  * @param {string} From - The `From` parameter is a string that represents the source URL or file path
+  * from which the JSON file will be loaded. It is set to `import.meta.url` by default, which refers to
+  * the URL of the current module. However, if a different source URL or file path is provided,
+  */

🗣️ Summary from v0.1.10 to v0.1.11 in .
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index 444e067..aad3b7e 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- nikola@lightrix.help. All complaints will be reviewed and investigated promptly
+ nikola@nikolahristov.tech. All complaints will be reviewed and investigated promptly
diff --git a/package.json b/package.json
index be1308f..bc6f41b 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.10",
+ 	"version": "0.1.11",
diff --git a/README.md b/README.md
index 14d705b..a2cd16b 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.1.8"
+ 		"typescript-esbuild": "latest"

🗣️ Summary from v0.1.11 to v0.1.12 in .
diff --git a/.npmignore b/.npmignore
index 797b72a..46f4c6c 100644
--- a/.npmignore
+++ b/.npmignore
+ CODE_OF_CONDUCT.md
+ CONTRIBUTING.md
diff --git a/package.json b/package.json
index bc6f41b..ae261f4 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.11",
+ 	"version": "0.1.12",
diff --git a/Source/Command/Build.ts b/Source/Command/Build.ts
index e212540..b20fac3 100644
--- a/Source/Command/Build.ts
+++ b/Source/Command/Build.ts
- 		Option?.ESBuild
- 			? Merge(ESBuild, await File(Option?.ESBuild))
- 			: ESBuild
+ 		Option?.ESBuild ? Merge(ESBuild, await File(Option?.ESBuild)) : ESBuild
diff --git a/Source/Index.ts b/Source/Index.ts
index d7b6362..66bfd1c 100644
--- a/Source/Index.ts
+++ b/Source/Index.ts
- 		.option("-es, --esbuild <File>", "esbuild configuration file")
+ 		.option("-es, --ESBuild <File>", "esbuild configuration file")

🗣️ Summary from v0.1.12 to v0.1.13 in .
diff --git a/.github/workflows/codeql.yml b/.github/workflows/codeql.yml
index 8cedfe5..ac05410 100644
--- a/.github/workflows/codeql.yml
+++ b/.github/workflows/codeql.yml
-     security-events: write
+     actions: read
-     pull-requests: write
+     security-events: write
+         timeout-minutes: 360
+ 
+         strategy:
+             fail-fast: false
+ 
+             matrix:
+                 language: ["javascript"]
+                 node-version: [18]
+ 
-             - uses: github/codeql-action/init@v2.21.3
+             - uses: github/codeql-action/init@v2.21.4
-                   languages: javascript
+                   languages: ${{ matrix.language }}
+ 
+             - uses: pnpm/action-setup@v2.4.0
+               with:
+                   version: 8.6.12
+                   run_install: |
+                       - recursive: true
+                         args: [
+                           --child-concurrency=9999,
+                           --link-workspace-packages=true,
+                           --lockfile-only,
+                           --network-concurrency=9999,
+                           --prefer-frozen-lockfile=false,
+                           --shamefully-hoist=false,
+                           --shared-workspace-lockfile=true,
+                           --strict-peer-dependencies=false,
+                           --unsafe-perm=true
+                         ]
+ 
+             - uses: actions/setup-node@v3.8.0
+               with:
+                   node-version: ${{ matrix.node-version }}
+                   cache: "pnpm"
+                   cache-dependency-path: ./pnpm-lock.yaml
+ 
+             - run: pnpm install
+               working-directory: .
+ 
+             - run: pnpm run prepublishOnly
+               working-directory: .
-             - name: Perform CodeQL Analysis
-               uses: github/codeql-action/analyze@v2.21.3
+             - uses: github/codeql-action/analyze@v2.21.4
-                   category: "/language:javascript"
+                   category: "/language:${{matrix.language}}"
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index ef3f64c..bbf0e4e 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/setup-node@v3.7.0
+             - uses: actions/setup-node@v3.8.0
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index f8d70f3..43d0c16 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/setup-node@v3.7.0
+             - uses: actions/setup-node@v3.8.0
diff --git a/.npmignore b/.npmignore
index 46f4c6c..4a67f96 100644
--- a/.npmignore
+++ b/.npmignore
+ .github/
diff --git a/LICENSE b/LICENSE
index 66f72b3..a14ae95 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2022 Nikola Hristov
+ Copyright (c) 2023 Nikola R. Hristov
diff --git a/package.json b/package.json
index ae261f4..a776e64 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.12",
+ 	"version": "0.1.13",
diff --git a/README.md b/README.md
index a2cd16b..bb164ad 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "latest"
+ 		"typescript-esbuild": "0.1.13"

🗣️ Summary from v0.1.13 to v0.1.14 in .
diff --git a/.github/workflows/codeql.yml b/.github/workflows/codeql.yml
deleted file mode 100644
index ac05410..0000000
--- a/.github/workflows/codeql.yml
+++ /dev/null
- name: CodeQL
- 
- concurrency:
-     group: CodeQL-${{ github.workflow }}-${{ github.ref }}
-     cancel-in-progress: true
- 
- permissions:
-     actions: read
-     contents: write
-     security-events: write
- 
- on:
-     workflow_dispatch:
-     push:
-         branches: [main]
-     pull_request:
-         branches: [main]
-     workflow_call:
- 
- jobs:
-     CodeQL:
-         runs-on: ubuntu-latest
- 
-         env:
-             ADBLOCK: true
-             TELEMETRY_DISABLED: 1
-             ASTRO_TELEMETRY_DISABLED: 1
-             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
-             AZURE_CORE_COLLECT_TELEMETRY: 0
-             CHOOSENIM_NO_ANALYTICS: 1
-             DIEZ_DO_NOT_TRACK: 1
-             DO_NOT_TRACK: 1
-             DOTNET_CLI_TELEMETRY_OPTOUT: 1
-             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
-             ET_NO_TELEMETRY: 1
-             GATSBY_TELEMETRY_DISABLED: 1
-             GATSBY_TELEMETRY_OPT_OUT: 1
-             GATSBY_TELEMETRY_OPTOUT: 1
-             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
-             HINT_TELEMETRY: off
-             HOMEBREW_NO_ANALYTICS: 1
-             INFLUXD_REPORTING_DISABLED: true
-             ITERATIVE_DO_NOT_TRACK: 1
-             NEXT_TELEMETRY_DEBUG: 1
-             NEXT_TELEMETRY_DISABLED: 1
-             NG_CLI_ANALYTICS: false
-             NUXT_TELEMETRY_DISABLED: 1
-             PIN_DO_NOT_TRACK: 1
-             POWERSHELL_TELEMETRY_OPTOUT: 1
-             SAM_CLI_TELEMETRY: 0
-             STNOUPGRADE: 1
-             STRIPE_CLI_TELEMETRY_OPTOUT: 1
- 
-         timeout-minutes: 360
- 
-         strategy:
-             fail-fast: false
- 
-             matrix:
-                 language: ["javascript"]
-                 node-version: [18]
- 
-         steps:
-             - uses: actions/checkout@v3.5.3
- 
-             - uses: github/codeql-action/init@v2.21.4
-               with:
-                   languages: ${{ matrix.language }}
- 
-             - uses: pnpm/action-setup@v2.4.0
-               with:
-                   version: 8.6.12
-                   run_install: |
-                       - recursive: true
-                         args: [
-                           --child-concurrency=9999,
-                           --link-workspace-packages=true,
-                           --lockfile-only,
-                           --network-concurrency=9999,
-                           --prefer-frozen-lockfile=false,
-                           --shamefully-hoist=false,
-                           --shared-workspace-lockfile=true,
-                           --strict-peer-dependencies=false,
-                           --unsafe-perm=true
-                         ]
- 
-             - uses: actions/setup-node@v3.8.0
-               with:
-                   node-version: ${{ matrix.node-version }}
-                   cache: "pnpm"
-                   cache-dependency-path: ./pnpm-lock.yaml
- 
-             - run: pnpm install
-               working-directory: .
- 
-             - run: pnpm run prepublishOnly
-               working-directory: .
- 
-             - uses: github/codeql-action/analyze@v2.21.4
-               with:
-                   category: "/language:${{matrix.language}}"
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index bbf0e4e..e176213 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/setup-node@v3.8.0
+             - uses: actions/setup-node@v3.8.1
-                   name: .-NPM-Node-${{ matrix.node-version }}-Target
+                   name: .-Node-${{ matrix.node-version }}-Target
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 43d0c16..9b73941 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/setup-node@v3.8.0
+             - uses: actions/setup-node@v3.8.1
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index aad3b7e..b4f1f9b 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- nikola@nikolahristov.tech. All complaints will be reviewed and investigated promptly
- and fairly. All community leaders are obligated to respect the privacy and
- security of the reporter of any incident.
+ nikola@nikolahristov.tech. All complaints will be reviewed and investigated
+ promptly and fairly. All community leaders are obligated to respect the privacy
+ and security of the reporter of any incident.
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index cf99f15..c740185 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
- nikola@nikolahristov.tech. All complaints will be reviewed and investigated promptly
- and fairly. All community leaders are obligated to respect the privacy and
- security of the reporter of any incident.
+ nikola@nikolahristov.tech. All complaints will be reviewed and investigated
+ promptly and fairly. All community leaders are obligated to respect the privacy
+ and security of the reporter of any incident.
diff --git a/package.json b/package.json
index a776e64..3311c2d 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.13",
+ 	"version": "0.1.14",
+ 	"author": {
+ 		"name": "Nikola Hristov",
+ 		"email": "nikola@nikolahristov.tech",
+ 		"url": "https://nikolahristov.tech"
+ 	},
diff --git a/Source/Configuration/ESBuild.ts b/Source/Configuration/ESBuild.ts
index 7333bc8..181864f 100644
--- a/Source/Configuration/ESBuild.ts
+++ b/Source/Configuration/ESBuild.ts
+ 	mkdir as Make,
+ 					} catch (_Error) {
+ 						await Make(Out, {
+ 							recursive: true,
+ 						});
+ 					}
- 					} catch (_Error) {}

🗣️ Summary from v0.1.14 to v0.1.15 in .
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
new file mode 100644
index 0000000..dcb957d
--- /dev/null
+++ b/.github/workflows/GitHub.yml
+ name: GitHub
+ 
+ concurrency:
+     group: GitHub-${{ github.workflow }}-${{ github.ref }}
+     cancel-in-progress: true
+ 
+ permissions:
+     issues: write
+     pull-requests: write
+ 
+ on:
+     issues:
+         types: [opened]
+     pull_request:
+         types: [opened]
+ 
+ jobs:
+     Assign:
+         runs-on: ubuntu-latest
+ 
+         env:
+             ADBLOCK: true
+             TELEMETRY_DISABLED: 1
+             ASTRO_TELEMETRY_DISABLED: 1
+             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
+             AZURE_CORE_COLLECT_TELEMETRY: 0
+             CHOOSENIM_NO_ANALYTICS: 1
+             DIEZ_DO_NOT_TRACK: 1
+             DO_NOT_TRACK: 1
+             DOTNET_CLI_TELEMETRY_OPTOUT: 1
+             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
+             ET_NO_TELEMETRY: 1
+             GATSBY_TELEMETRY_DISABLED: 1
+             GATSBY_TELEMETRY_OPT_OUT: 1
+             GATSBY_TELEMETRY_OPTOUT: 1
+             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
+             HINT_TELEMETRY: off
+             HOMEBREW_NO_ANALYTICS: 1
+             INFLUXD_REPORTING_DISABLED: true
+             ITERATIVE_DO_NOT_TRACK: 1
+             NEXT_TELEMETRY_DEBUG: 1
+             NEXT_TELEMETRY_DISABLED: 1
+             NG_CLI_ANALYTICS: false
+             NUXT_TELEMETRY_DISABLED: 1
+             PIN_DO_NOT_TRACK: 1
+             POWERSHELL_TELEMETRY_OPTOUT: 1
+             SAM_CLI_TELEMETRY: 0
+             STNOUPGRADE: 1
+             STRIPE_CLI_TELEMETRY_OPTOUT: 1
+ 
+         steps:
+             - uses: pozil/auto-assign-issue@v1.12.0
+               with:
+                   repo-token: ${{ secrets.GITHUB_TOKEN }}
+                   assignees: NikolaRHristov
+                   numOfAssignee: 1
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index e176213..93ddde9 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v3.5.3
+             - uses: actions/checkout@v3.6.0
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 9b73941..41b93bb 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
+ 
-             - uses: actions/checkout@v3.5.3
+             - uses: actions/checkout@v3.6.0
diff --git a/package.json b/package.json
index 3311c2d..846a7fe 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.14",
+ 	"version": "0.1.15",
- 	"description": "🌀 Builds all JavaScript files from TypeScript within a given folder using esbuild.",
+ 	"description": "🌀 Builds all your TypeScript files into JavaScript from a given folder using esbuild.",
- 		"@types/node": "20.5.0",
+ 		"@types/node": "20.5.7",
- 		"typescript": "5.1.6"
+ 		"typescript": "5.2.2"
- 		"@types/node": "20.5.0",
+ 		"@types/node": "20.5.7",
diff --git a/README.md b/README.md
index bb164ad..a2cd16b 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.1.13"
+ 		"typescript-esbuild": "latest"

🗣️ Summary from v0.1.15 to v0.1.16 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 93ddde9..d97ceff 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v3.6.0
+             - uses: actions/checkout@v4.0.0
-             - uses: actions/upload-artifact@v3.1.2
+             - uses: actions/upload-artifact@v3.1.3
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 41b93bb..33f5e8b 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/checkout@v3.6.0
+             - uses: actions/checkout@v4.0.0
diff --git a/package.json b/package.json
index 846a7fe..1be08bf 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.15",
+ 	"version": "0.1.16",
- 	"main": "./Target/Index.js",
- 	"types": "./Target/Index.d.ts",
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Index.ts 'Source/**/*.ts'"
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Bin.ts 'Source/**/*.ts'"
- 		"@types/node": "20.5.7",
+ 		"@types/node": "20.6.2",
- 		"esbuild": "0.19.2",
+ 		"esbuild": "0.19.3",
- 		"@types/node": "20.5.7",
+ 		"@types/node": "20.6.2",
diff --git a/README.md b/README.md
index a2cd16b..7e6e7cd 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "latest"
+ 		"typescript-esbuild": "0.1.16"
diff --git a/Source/Bin.ts b/Source/Bin.ts
index f401b04..27ab322 100644
--- a/Source/Bin.ts
+++ b/Source/Bin.ts
- import "./Index.js";
+ import Build from "./Command/Build.js";
+ import _JSON from "./Library/JSON.js";
+ 
+ import { Command } from "commander";
+ 
+ try {
+ 	new Command()
+ 		.name("TypeScriptESBuild")
+ 		.version((await _JSON("../package.json", import.meta.url))?.version)
+ 		.description("Builds files")
+ 		.argument("<Files...>", "Files to build")
+ 		.option("-es, --ESBuild <File>", "esbuild configuration file")
+ 		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
+ 		.action(Build)
+ 		.parse();	
+ } catch (_Error) {
+ 	console.log(_Error);
+ }
diff --git a/Source/Index.ts b/Source/Index.ts
deleted file mode 100644
index 66bfd1c..0000000
--- a/Source/Index.ts
+++ /dev/null
- import { Command } from "commander";
- import Build from "./Command/Build.js";
- import _JSON from "./Library/JSON.js";
- 
- try {
- 	new Command()
- 		.name("TypeScriptESBuild")
- 		.version((await _JSON("../package.json", import.meta.url))?.version)
- 		.description("Builds files")
- 		.argument("<Files...>", "Files to build")
- 		.option("-es, --ESBuild <File>", "esbuild configuration file")
- 		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
- 		.action(Build)
- 		.parse();
- } catch (_Error) {
- 	console.log(_Error);
- }

🗣️ Summary from v0.1.16 to v0.1.2 in .
diff --git a/.github/workflows/codeql.yml b/.github/workflows/codeql.yml
new file mode 100644
index 0000000..8cedfe5
--- /dev/null
+++ b/.github/workflows/codeql.yml
+ name: CodeQL
+ 
+ concurrency:
+     group: CodeQL-${{ github.workflow }}-${{ github.ref }}
+     cancel-in-progress: true
+ 
+ permissions:
+     security-events: write
+     contents: write
+     pull-requests: write
+ 
+ on:
+     workflow_dispatch:
+     push:
+         branches: [main]
+     pull_request:
+         branches: [main]
+     workflow_call:
+ 
+ jobs:
+     CodeQL:
+         runs-on: ubuntu-latest
+ 
+         env:
+             ADBLOCK: true
+             TELEMETRY_DISABLED: 1
+             ASTRO_TELEMETRY_DISABLED: 1
+             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
+             AZURE_CORE_COLLECT_TELEMETRY: 0
+             CHOOSENIM_NO_ANALYTICS: 1
+             DIEZ_DO_NOT_TRACK: 1
+             DO_NOT_TRACK: 1
+             DOTNET_CLI_TELEMETRY_OPTOUT: 1
+             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
+             ET_NO_TELEMETRY: 1
+             GATSBY_TELEMETRY_DISABLED: 1
+             GATSBY_TELEMETRY_OPT_OUT: 1
+             GATSBY_TELEMETRY_OPTOUT: 1
+             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
+             HINT_TELEMETRY: off
+             HOMEBREW_NO_ANALYTICS: 1
+             INFLUXD_REPORTING_DISABLED: true
+             ITERATIVE_DO_NOT_TRACK: 1
+             NEXT_TELEMETRY_DEBUG: 1
+             NEXT_TELEMETRY_DISABLED: 1
+             NG_CLI_ANALYTICS: false
+             NUXT_TELEMETRY_DISABLED: 1
+             PIN_DO_NOT_TRACK: 1
+             POWERSHELL_TELEMETRY_OPTOUT: 1
+             SAM_CLI_TELEMETRY: 0
+             STNOUPGRADE: 1
+             STRIPE_CLI_TELEMETRY_OPTOUT: 1
+ 
+         steps:
+             - uses: actions/checkout@v3.5.3
+ 
+             - uses: github/codeql-action/init@v2.21.3
+               with:
+                   languages: javascript
+ 
+             - name: Perform CodeQL Analysis
+               uses: github/codeql-action/analyze@v2.21.3
+               with:
+                   category: "/language:javascript"
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
deleted file mode 100644
index dcb957d..0000000
--- a/.github/workflows/GitHub.yml
+++ /dev/null
- name: GitHub
- 
- concurrency:
-     group: GitHub-${{ github.workflow }}-${{ github.ref }}
-     cancel-in-progress: true
- 
- permissions:
-     issues: write
-     pull-requests: write
- 
- on:
-     issues:
-         types: [opened]
-     pull_request:
-         types: [opened]
- 
- jobs:
-     Assign:
-         runs-on: ubuntu-latest
- 
-         env:
-             ADBLOCK: true
-             TELEMETRY_DISABLED: 1
-             ASTRO_TELEMETRY_DISABLED: 1
-             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
-             AZURE_CORE_COLLECT_TELEMETRY: 0
-             CHOOSENIM_NO_ANALYTICS: 1
-             DIEZ_DO_NOT_TRACK: 1
-             DO_NOT_TRACK: 1
-             DOTNET_CLI_TELEMETRY_OPTOUT: 1
-             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
-             ET_NO_TELEMETRY: 1
-             GATSBY_TELEMETRY_DISABLED: 1
-             GATSBY_TELEMETRY_OPT_OUT: 1
-             GATSBY_TELEMETRY_OPTOUT: 1
-             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
-             HINT_TELEMETRY: off
-             HOMEBREW_NO_ANALYTICS: 1
-             INFLUXD_REPORTING_DISABLED: true
-             ITERATIVE_DO_NOT_TRACK: 1
-             NEXT_TELEMETRY_DEBUG: 1
-             NEXT_TELEMETRY_DISABLED: 1
-             NG_CLI_ANALYTICS: false
-             NUXT_TELEMETRY_DISABLED: 1
-             PIN_DO_NOT_TRACK: 1
-             POWERSHELL_TELEMETRY_OPTOUT: 1
-             SAM_CLI_TELEMETRY: 0
-             STNOUPGRADE: 1
-             STRIPE_CLI_TELEMETRY_OPTOUT: 1
- 
-         steps:
-             - uses: pozil/auto-assign-issue@v1.12.0
-               with:
-                   repo-token: ${{ secrets.GITHUB_TOKEN }}
-                   assignees: NikolaRHristov
-                   numOfAssignee: 1
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index d97ceff..9eff081 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v4.0.0
+             - uses: actions/checkout@v3.5.3
-             - uses: actions/setup-node@v3.8.1
+             - uses: actions/setup-node@v3.7.0
-             - uses: actions/upload-artifact@v3.1.3
+             - uses: actions/upload-artifact@v3.1.2
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 33f5e8b..f8d70f3 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
- 
-             - uses: actions/checkout@v4.0.0
+             - uses: actions/checkout@v3.5.3
-             - uses: actions/setup-node@v3.8.1
+             - uses: actions/setup-node@v3.7.0
diff --git a/.npmignore b/.npmignore
index 4a67f96..70da021 100644
--- a/.npmignore
+++ b/.npmignore
- CODE_OF_CONDUCT.md
- CONTRIBUTING.md
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
deleted file mode 100644
index b4f1f9b..0000000
--- a/CODE_OF_CONDUCT.md
+++ /dev/null
- # Code of Conduct
- 
- ## Our Pledge
- 
- Welcome to our community! We are committed to creating a welcoming and inclusive
- environment for all contributors. As members, contributors, and leaders, we
- pledge to make participation in our community a harassment-free experience for
- everyone, regardless of:
- 
- -   Age
- -   Body size
- -   Visible or invisible disability
- -   Ethnicity
- -   Sex characteristics
- -   Gender identity and expression
- -   Level of experience
- -   Education
- -   Socio-economic status
- -   Nationality
- -   Personal appearance
- -   Race
- -   Caste
- -   Color
- -   Religion
- -   Sexual identity and orientation
- 
- We promise to act and interact in ways that contribute to an open, welcoming,
- diverse, inclusive, and healthy community.
- 
- ## Our Standards
- 
- Examples of behavior that contributes to a positive environment for our
- community include:
- 
- -   Demonstrating empathy and kindness toward other people
- -   Being respectful of differing opinions, viewpoints, and experiences
- -   Giving and gracefully accepting constructive feedback
- -   Accepting responsibility and apologizing to those affected by our mistakes,
-     and learning from the experience
- -   Focusing on what is best not just for us as individuals but for the overall
-     community
- 
- Examples of unacceptable behavior include:
- 
- -   The use of sexualized language or imagery, and sexual attention or advances
-     of any kind
- -   Trolling, insulting, or derogatory comments, and personal or political
-     attacks
- -   Public or private harassment
- -   Publishing others' private information, such as a physical or email address,
-     without their explicit permission
- -   Other conduct which could reasonably be considered inappropriate in a
-     professional setting
- 
- ## Enforcement Responsibilities
- 
- Community leaders are responsible for clarifying and enforcing our standards of
- acceptable behavior. They will take appropriate and fair corrective action in
- response to any behavior they deem inappropriate, threatening, offensive, or
- harmful. This may include removing, editing, or rejecting comments, commits,
- code, wiki edits, issues, and other contributions that do not align with this
- Code of Conduct. Community leaders will communicate reasons for moderation
- decisions when appropriate.
- 
- ## Scope
- 
- This Code of Conduct applies within all community spaces, and also applies when
- an individual is officially representing the community in public spaces.
- Examples of representing our community include using an official e-mail address,
- posting via an official social media account, or acting as an appointed
- representative at an online or offline event.
- 
- ## Enforcement
- 
- Instances of abusive, harassing, or otherwise unacceptable behavior may be
- reported to the community leaders responsible for enforcement at
- nikola@nikolahristov.tech. All complaints will be reviewed and investigated
- promptly and fairly. All community leaders are obligated to respect the privacy
- and security of the reporter of any incident.
- 
- ## Enforcement Guidelines
- 
- Community leaders will follow these Community Impact Guidelines in determining
- the consequences for any action they deem in violation of this Code of Conduct:
- 
- ### 1. Correction
- 
- **Community Impact**: Use of inappropriate language or other behavior deemed
- unprofessional or unwelcome in the community.
- 
- **Consequence**: A private, written warning from community leaders, providing
- clarity around the nature of the violation and an explanation of why the
- behavior was inappropriate. A public apology may be requested.
- 
- ### 2. Warning
- 
- **Community Impact**: A violation through a single incident or series of
- actions.
- 
- **Consequence**: A warning with consequences for continued behavior. No
- interaction with the people involved, including unsolicited interaction with
- those enforcing the Code of Conduct, for a specified period of time. This
- includes avoiding interactions in community spaces as well as external channels
- like social media. Violating these terms may lead to a temporary or permanent
- ban.
- 
- ### 3. Temporary Ban
- 
- **Community Impact**: A serious violation of community standards, including
- sustained inappropriate behavior.
- 
- **Consequence**: A temporary ban from any sort of interaction or public
- communication with the community for a specified period of time. No public or
- private interaction with the people involved, including unsolicited interaction
- with those enforcing the Code of Conduct, is allowed during this period.
- Violating these terms may lead to a permanent ban.
- 
- ### 4. Permanent Ban
- 
- **Community Impact**: Demonstrating a pattern of violation of community
- standards, including sustained inappropriate behavior, harassment of an
- individual, or aggression toward or disparagement of classes of individuals.
- 
- **Consequence**: A permanent ban from any sort of public interaction within the
- community.
- 
- ## Attribution
- 
- This Code of Conduct is adapted from the [Contributor Covenant][homepage],
- version 2.1, available at
- [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
- Community Impact Guidelines were inspired by [Mozilla's code of conduct
- enforcement ladder][Mozilla CoC].
- 
- For answers to common questions about this code of conduct, see the FAQ at
- [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
- [https://www.contributor-covenant.org/translations][translations].
- 
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
- 
- Thank you for being part of our community and helping us create a safe and
- respectful environment for everyone!
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
deleted file mode 100644
index c740185..0000000
--- a/CONTRIBUTING.md
+++ /dev/null
- # Contributing Guidelines
- 
- Welcome to our community! We are committed to creating a welcoming and inclusive
- environment for all contributors. Before you get started, please read and adhere
- to the following code of conduct. By participating in our community, you agree
- to abide by these guidelines.
- 
- ## Our Pledge
- 
- We, as members, contributors, and leaders, pledge to make participation in our
- community a harassment-free experience for everyone, regardless of age, body
- size, visible or invisible disability, ethnicity, sex characteristics, gender
- identity and expression, level of experience, education, socio-economic status,
- nationality, personal appearance, race, caste, color, religion, or sexual
- identity and orientation. We pledge to act and interact in ways that contribute
- to an open, welcoming, diverse, inclusive, and healthy community.
- 
- ## Our Standards
- 
- Examples of behavior that contributes to a positive environment for our
- community include:
- 
- -   Demonstrating empathy and kindness toward other people
- -   Being respectful of differing opinions, viewpoints, and experiences
- -   Giving and gracefully accepting constructive feedback
- -   Accepting responsibility and apologizing to those affected by our mistakes,
-     and learning from the experience
- -   Focusing on what is best not just for us as individuals, but for the overall
-     community
- 
- Examples of unacceptable behavior include:
- 
- -   The use of sexualized language or imagery, and sexual attention or advances
-     of any kind
- -   Trolling, insulting, or derogatory comments, and personal or political
-     attacks
- -   Public or private harassment
- -   Publishing others' private information, such as a physical or email address,
-     without their explicit permission
- -   Other conduct which could reasonably be considered inappropriate in a
-     professional setting
- 
- ## Enforcement Responsibilities
- 
- Community leaders are responsible for clarifying and enforcing our standards of
- acceptable behavior and will take appropriate and fair corrective action in
- response to any behavior that they deem inappropriate, threatening, offensive,
- or harmful. Community leaders have the right and responsibility to remove, edit,
- or reject comments, commits, code, wiki edits, issues, and other contributions
- that are not aligned with this Code of Conduct, and will communicate reasons for
- moderation decisions when appropriate.
- 
- ## Scope
- 
- This Code of Conduct applies within all community spaces, and also applies when
- an individual is officially representing the community in public spaces.
- Examples of representing our community include using an official e-mail address,
- posting via an official social media account, or acting as an appointed
- representative at an online or offline event.
- 
- ## Enforcement
- 
- Instances of abusive, harassing, or otherwise unacceptable behavior may be
- reported to the community leaders responsible for enforcement at
- nikola@nikolahristov.tech. All complaints will be reviewed and investigated
- promptly and fairly. All community leaders are obligated to respect the privacy
- and security of the reporter of any incident.
- 
- ## Enforcement Guidelines
- 
- Community leaders will follow these Community Impact Guidelines in determining
- the consequences for any action they deem in violation of this Code of Conduct:
- 
- ### 1. Correction
- 
- **Community Impact**: Use of inappropriate language or other behavior deemed
- unprofessional or unwelcome in the community.
- 
- **Consequence**: A private, written warning from community leaders, providing
- clarity around the nature of the violation and an explanation of why the
- behavior was inappropriate. A public apology may be requested.
- 
- ### 2. Warning
- 
- **Community Impact**: A violation through a single incident or series of
- actions.
- 
- **Consequence**: A warning with consequences for continued behavior. No
- interaction with the people involved, including unsolicited interaction with
- those enforcing the Code of Conduct, for a specified period of time. This
- includes avoiding interactions in community spaces as well as external channels
- like social media. Violating these terms may lead to a temporary or permanent
- ban.
- 
- ### 3. Temporary Ban
- 
- **Community Impact**: A serious violation of community standards, including
- sustained inappropriate behavior.
- 
- **Consequence**: A temporary ban from any sort of interaction or public
- communication with the community for a specified period of time. No public or
- private interaction with the people involved, including unsolicited interaction
- with those enforcing the Code of Conduct, is allowed during this period.
- Violating these terms may lead to a permanent ban.
- 
- ### 4. Permanent Ban
- 
- **Community Impact**: Demonstrating a pattern of violation of community
- standards, including sustained inappropriate behavior, harassment of an
- individual, or aggression toward or disparagement of classes of individuals.
- 
- **Consequence**: A permanent ban from any sort of public interaction within the
- community.
- 
- ## Attribution
- 
- This Code of Conduct is adapted from the [Contributor Covenant][homepage],
- version 2.1, available at
- [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
- Community Impact Guidelines were inspired by [Mozilla's code of conduct
- enforcement ladder][Mozilla CoC].
- 
- For answers to common questions about this code of conduct, see the FAQ at
- [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
- [https://www.contributor-covenant.org/translations][translations].
- 
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
- 
- Thank you for being part of our community and helping us create a safe and
- respectful environment for everyone!
diff --git a/LICENSE b/LICENSE
index a14ae95..66f72b3 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2023 Nikola R. Hristov
+ Copyright (c) 2022 Nikola Hristov
diff --git a/package.json b/package.json
index 1be08bf..230ec0d 100644
--- a/package.json
+++ b/package.json
- 	"name": "typescript-esbuild",
- 	"version": "0.1.16",
+ 	"name": "javascriptbuild",
+ 	"version": "0.1.2",
- 	"description": "🌀 Builds all your TypeScript files into JavaScript from a given folder using esbuild.",
- 	"keywords": [
- 		"javascript",
- 		"typescript",
- 		"esbuild"
- 	],
- 	"homepage": "https://github.com/NikolaRHristov/TypeScriptESBuild#readme",
+ 	"description": "🧑🏻‍💻 Builds JavaScript files from TypeScript with esbuild.",
+ 	"homepage": "https://github.com/NikolaRHristov/JavaScriptBuild#readme",
- 		"url": "https://github.com/NikolaRHristov/TypeScriptESBuild/issues"
+ 		"url": "https://github.com/NikolaRHristov/JavaScriptBuild/issues"
- 		"url": "git+https://github.com/NikolaRHristov/TypeScriptESBuild.git"
+ 		"url": "git+https://github.com/NikolaRHristov/JavaScriptBuild.git"
- 	"author": {
- 		"name": "Nikola Hristov",
- 		"email": "nikola@nikolahristov.tech",
- 		"url": "https://nikolahristov.tech"
- 	},
+ 	"main": "./Target/Index.js",
+ 	"types": "./Target/Index.d.ts",
- 		"TypeScriptESBuild": "Target/Bin.js"
+ 		"JavaScriptBuild": "Target/Bin.js"
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Bin.ts 'Source/**/*.ts'"
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Index.ts 'Source/**/*.ts'"
- 		"@types/node": "20.6.2",
+ 		"@types/node": "20.4.10",
- 		"esbuild": "0.19.3",
+ 		"esbuild": "0.19.1",
- 		"typescript": "5.2.2"
+ 		"typescript": "5.1.6"
- 		"@types/node": "20.6.2",
+ 		"@types/node": "20.4.10",
diff --git a/README.md b/README.md
index 7e6e7cd..98985a0 100644
--- a/README.md
+++ b/README.md
- # [TypeScriptESBuild] 🌀
+ # [TypeScript Build] 🧑🏻‍💻
- Builds all your TypeScript files into JavaScript.
+ This utility deletes all deployments older than 7 days in your Cloudflare Pages account.
- npm install -D -E typescript-esbuild
+ npm install -D -E javascriptbuild
- 	"name": "package",
+ 	"name": "my-awesome-package",
- 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
+ 		"prepublishOnly": "JavaScriptBuild 'Source/**/*.ts'"
- 		"typescript-esbuild": "0.1.16"
+ 		"javascriptbuild": "0.1.2"
- 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es ESBuild.ts"
+ 		"prepublishOnly": "JavaScriptBuild 'Source/**/*.ts' -es esbuild.ts"
- #### See an example of a config file in [ESBuild.ts](Source/Configuration/ESBuild.ts)
+ #### See an example of a config file in [esbuild.ts](Source/Configuration/esbuild.ts)
- 	"extends": "typescript-esbuild/Target/Configuration/TypeScript",
+ 	"extends": "./Source/Configuration/TypeScript",
- [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
+ The script will now automatically compile your build files with [esbuild] and
+ add TypeScript types.
+ 
+ [TypeScript Build]: https://npmjs.org/javascriptbuild
diff --git a/Source/Bin.ts b/Source/Bin.ts
index 27ab322..f401b04 100644
--- a/Source/Bin.ts
+++ b/Source/Bin.ts
- import Build from "./Command/Build.js";
- import _JSON from "./Library/JSON.js";
- 
- import { Command } from "commander";
- 
- try {
- 	new Command()
- 		.name("TypeScriptESBuild")
- 		.version((await _JSON("../package.json", import.meta.url))?.version)
- 		.description("Builds files")
- 		.argument("<Files...>", "Files to build")
- 		.option("-es, --ESBuild <File>", "esbuild configuration file")
- 		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
- 		.action(Build)
- 		.parse();	
- } catch (_Error) {
- 	console.log(_Error);
- }
+ import "./Index.js";
diff --git a/Source/Command/Build.ts b/Source/Command/Build.ts
index b20fac3..21cdb44 100644
--- a/Source/Command/Build.ts
+++ b/Source/Command/Build.ts
- import type { BuildOptions as Option } from "esbuild";
+ import type { BuildOptions } from "esbuild";
- import _ESBuild from "../Configuration/ESBuild.js";
+ import _esbuild from "../Configuration/esbuild.js";
-  * @param [Option] - The `Option` parameter is an optional object that can contain two properties:
+  * @param [Options] - The `Options` parameter is an optional object that can contain two properties:
- 	Option?: { ESBuild?: string; TypeScript?: string }
+ 	Options?: { esbuild?: string; TypeScript?: string }
- 	const ESBuild = Merge(_ESBuild, {
+ 	const esbuild = Merge(_esbuild, {
- 	} satisfies Option);
+ 	} satisfies BuildOptions);
- 		Option?.ESBuild ? Merge(ESBuild, await File(Option?.ESBuild)) : ESBuild
+ 		Options?.esbuild
+ 			? Merge(esbuild, await File(Options?.esbuild))
+ 			: esbuild
- 	if (Option?.TypeScript) {
- 		Exec(`tsc -p ${Option?.TypeScript}`);
+ 	if (Options?.TypeScript) {
+ 		Exec(`tsc -p ${Options?.TypeScript}`);
diff --git a/Source/Configuration/ESBuild.ts b/Source/Configuration/ESBuild.ts
index 181864f..8e4c808 100644
--- a/Source/Configuration/ESBuild.ts
+++ b/Source/Configuration/ESBuild.ts
- import type { PluginBuild as Build, BuildOptions as Option } from "esbuild";
+ import type { BuildOptions, PluginBuild } from "esbuild";
- import {
- 	access as Access,
- 	constants as Constant,
- 	mkdir as Make,
- 	rm as Remove,
- } from "fs/promises";
+ import { rm as Remove } from "fs/promises";
- 			setup(Build: Build) {
- 				Build.onStart(async () => {
- 					try {
- 						await Access(Out, Constant.R_OK);
- 					} catch (_Error) {
- 						await Make(Out, {
- 							recursive: true,
- 						});
- 					}
- 
+ 			setup(build: PluginBuild) {
+ 				build.onStart(async () => {
- } satisfies Option;
+ } satisfies BuildOptions;
diff --git a/Source/Index.ts b/Source/Index.ts
new file mode 100644
index 0000000..65e3086
--- /dev/null
+++ b/Source/Index.ts
+ import { Command } from "commander";
+ import Build from "./Command/Build.js";
+ import _JSON from "./Library/JSON.js";
+ 
+ try {
+ 	new Command()
+ 		.name("JavaScriptBuild")
+ 		.version((await _JSON("../package.json", import.meta.url))?.version)
+ 		.description("Builds files")
+ 		.argument("<Files...>", "Files to build")
+ 		.option("-es, --esbuild <File>", "esbuild configuration file")
+ 		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
+ 		.action(Build)
+ 		.parse();
+ } catch (_Error) {
+ 	console.log(_Error);
+ }

🗣️ Summary from v0.1.2 to v0.1.3 in .
diff --git a/package.json b/package.json
index 230ec0d..c671969 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.2",
+ 	"version": "0.1.3",
+ 	"keywords": [
+ 		"javascript",
+ 		"typescript",
+ 		"esbuild"
+ 	],
diff --git a/README.md b/README.md
index 98985a0..4c56b41 100644
--- a/README.md
+++ b/README.md
- # [TypeScript Build] 🧑🏻‍💻
+ # [JavaScript Build] 🧑🏻‍💻
- This utility deletes all deployments older than 7 days in your Cloudflare Pages account.
+ This utility builds all JavaScript files from TypeScript with esbuild in a given folder.
- 		"javascriptbuild": "0.1.2"
+ 		"javascriptbuild": "0.1.3"
- [TypeScript Build]: https://npmjs.org/javascriptbuild
+ [JavaScript Build]: https://npmjs.org/javascriptbuild

🗣️ Summary from v0.1.3 to v0.1.4 in .
diff --git a/package.json b/package.json
index c671969..9e23d9b 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.3",
+ 	"version": "0.1.4",
- 	"description": "🧑🏻‍💻 Builds JavaScript files from TypeScript with esbuild.",
+ 	"description": "🧑🏻‍💻 Builds all JavaScript files from TypeScript within a given folder using esbuild.",
diff --git a/README.md b/README.md
index 4c56b41..7c31ae5 100644
--- a/README.md
+++ b/README.md
- This utility builds all JavaScript files from TypeScript with esbuild in a given folder.
+ This utility builds all JavaScript files from TypeScript within a given folder
+ using esbuild.

🗣️ Summary from v0.1.4 to v0.1.6 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 9eff081..9240329 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-                   name: .-Node-${{ matrix.node-version }}-Target
+                   name: .-NPM-Node-${{ matrix.node-version }}-Target
+ 
+             - uses: actions/setup-node@v3.7.0
+               with:
+                   node-version: ${{ matrix.node-version }}
+                   cache: "pnpm"
+                   cache-dependency-path: ./website/pnpm-lock.yaml
+ 
+             - run: pnpm install
+               working-directory: ./website
+ 
+             - run: pnpm run prepublishOnly
+               working-directory: ./website
+ 
+             - uses: actions/upload-artifact@v3.1.2
+               with:
+                   name: .-website-Node-${{ matrix.node-version }}-Target
+                   path: ./website/Target
diff --git a/.npmignore b/.npmignore
index 70da021..797b72a 100644
--- a/.npmignore
+++ b/.npmignore
- .github/
diff --git a/package.json b/package.json
index 9e23d9b..1c308bf 100644
--- a/package.json
+++ b/package.json
- 	"name": "javascriptbuild",
- 	"version": "0.1.4",
+ 	"name": "syclone",
+ 	"version": "0.1.6",
- 	"description": "🧑🏻‍💻 Builds all JavaScript files from TypeScript within a given folder using esbuild.",
+ 	"description": "🌀 Builds all JavaScript files from TypeScript within a given folder using esbuild.",
- 	"homepage": "https://github.com/NikolaRHristov/JavaScriptBuild#readme",
+ 	"homepage": "https://github.com/NikolaRHristov/Syclone#readme",
- 		"url": "https://github.com/NikolaRHristov/JavaScriptBuild/issues"
+ 		"url": "https://github.com/NikolaRHristov/Syclone/issues"
- 		"url": "git+https://github.com/NikolaRHristov/JavaScriptBuild.git"
+ 		"url": "git+https://github.com/NikolaRHristov/Syclone.git",
+ 		"directory": "NPM"
- 		"JavaScriptBuild": "Target/Bin.js"
+ 		"Syclone": "Target/Bin.js"
diff --git a/README.md b/README.md
index 7c31ae5..04cba4a 100644
--- a/README.md
+++ b/README.md
- # [JavaScript Build] 🧑🏻‍💻
+ # [Syclone] 🌀
- This utility builds all JavaScript files from TypeScript within a given folder
- using esbuild.
+ Builds all your TypeScript files into JavaScript.
- npm install -D -E javascriptbuild
+ npm install -D -E syclone
- 		"prepublishOnly": "JavaScriptBuild 'Source/**/*.ts'"
+ 		"prepublishOnly": "Syclone 'Source/**/*.ts'"
- 		"javascriptbuild": "0.1.3"
+ 		"syclone": "0.1.6"
- 		"prepublishOnly": "JavaScriptBuild 'Source/**/*.ts' -es esbuild.ts"
+ 		"prepublishOnly": "Syclone 'Source/**/*.ts' -es esbuild.ts"
- [JavaScript Build]: https://npmjs.org/javascriptbuild
+ [Syclone]: https://npmjs.org/syclone
diff --git a/Source/Index.ts b/Source/Index.ts
index 65e3086..193827d 100644
--- a/Source/Index.ts
+++ b/Source/Index.ts
- 		.name("JavaScriptBuild")
+ 		.name("Syclone")

🗣️ Summary from v0.1.6 to v0.1.7 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 9240329..ef3f64c 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
- 
-             - uses: actions/setup-node@v3.7.0
-               with:
-                   node-version: ${{ matrix.node-version }}
-                   cache: "pnpm"
-                   cache-dependency-path: ./website/pnpm-lock.yaml
- 
-             - run: pnpm install
-               working-directory: ./website
- 
-             - run: pnpm run prepublishOnly
-               working-directory: ./website
- 
-             - uses: actions/upload-artifact@v3.1.2
-               with:
-                   name: .-website-Node-${{ matrix.node-version }}-Target
-                   path: ./website/Target
diff --git a/package.json b/package.json
index 1c308bf..ad59443 100644
--- a/package.json
+++ b/package.json
- 	"name": "syclone",
- 	"version": "0.1.6",
+ 	"name": "typescript-esbuild",
+ 	"version": "0.1.7",
- 	"homepage": "https://github.com/NikolaRHristov/Syclone#readme",
+ 	"homepage": "https://github.com/NikolaRHristov/TypeScriptESBuild#readme",
- 		"url": "https://github.com/NikolaRHristov/Syclone/issues"
+ 		"url": "https://github.com/NikolaRHristov/TypeScriptESBuild/issues"
- 		"url": "git+https://github.com/NikolaRHristov/Syclone.git",
+ 		"url": "git+https://github.com/NikolaRHristov/TypeScriptESBuild.git",
- 		"Syclone": "Target/Bin.js"
+ 		"TypeScriptESBuild": "Target/Bin.js"
diff --git a/README.md b/README.md
index 04cba4a..b90e84c 100644
--- a/README.md
+++ b/README.md
- # [Syclone] 🌀
+ # [TypeScriptESBuild] 🌀
- npm install -D -E syclone
+ npm install -D -E typescript-esbuild
- 	"name": "my-awesome-package",
+ 	"name": "package",
- 		"prepublishOnly": "Syclone 'Source/**/*.ts'"
+ 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
- 		"syclone": "0.1.6"
+ 		"typescript-esbuild": "0.1.6"
- 		"prepublishOnly": "Syclone 'Source/**/*.ts' -es esbuild.ts"
+ 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es esbuild.ts"
- 	"extends": "./Source/Configuration/TypeScript",
+ 	"extends": "typescript-esbuild/Target/Configuration/TypeScript",
- [Syclone]: https://npmjs.org/syclone
+ [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
diff --git a/Source/Index.ts b/Source/Index.ts
index 193827d..d7b6362 100644
--- a/Source/Index.ts
+++ b/Source/Index.ts
- 		.name("Syclone")
+ 		.name("TypeScriptESBuild")

🗣️ Summary from v0.1.7 to v0.1.8 in .
diff --git a/package.json b/package.json
index ad59443..0705c37 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.7",
+ 	"version": "0.1.8",
- 		"url": "git+https://github.com/NikolaRHristov/TypeScriptESBuild.git",
- 		"directory": "NPM"
+ 		"url": "git+https://github.com/NikolaRHristov/TypeScriptESBuild.git"
diff --git a/README.md b/README.md
index b90e84c..342d7ee 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.1.6"
+ 		"typescript-esbuild": "0.1.8"

🗣️ Summary from v0.1.8 to v0.1.9 in .
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
new file mode 100644
index 0000000..444e067
--- /dev/null
+++ b/CODE_OF_CONDUCT.md
+ # Code of Conduct
+ 
+ ## Our Pledge
+ 
+ Welcome to our community! We are committed to creating a welcoming and inclusive
+ environment for all contributors. As members, contributors, and leaders, we
+ pledge to make participation in our community a harassment-free experience for
+ everyone, regardless of:
+ 
+ -   Age
+ -   Body size
+ -   Visible or invisible disability
+ -   Ethnicity
+ -   Sex characteristics
+ -   Gender identity and expression
+ -   Level of experience
+ -   Education
+ -   Socio-economic status
+ -   Nationality
+ -   Personal appearance
+ -   Race
+ -   Caste
+ -   Color
+ -   Religion
+ -   Sexual identity and orientation
+ 
+ We promise to act and interact in ways that contribute to an open, welcoming,
+ diverse, inclusive, and healthy community.
+ 
+ ## Our Standards
+ 
+ Examples of behavior that contributes to a positive environment for our
+ community include:
+ 
+ -   Demonstrating empathy and kindness toward other people
+ -   Being respectful of differing opinions, viewpoints, and experiences
+ -   Giving and gracefully accepting constructive feedback
+ -   Accepting responsibility and apologizing to those affected by our mistakes,
+     and learning from the experience
+ -   Focusing on what is best not just for us as individuals but for the overall
+     community
+ 
+ Examples of unacceptable behavior include:
+ 
+ -   The use of sexualized language or imagery, and sexual attention or advances
+     of any kind
+ -   Trolling, insulting, or derogatory comments, and personal or political
+     attacks
+ -   Public or private harassment
+ -   Publishing others' private information, such as a physical or email address,
+     without their explicit permission
+ -   Other conduct which could reasonably be considered inappropriate in a
+     professional setting
+ 
+ ## Enforcement Responsibilities
+ 
+ Community leaders are responsible for clarifying and enforcing our standards of
+ acceptable behavior. They will take appropriate and fair corrective action in
+ response to any behavior they deem inappropriate, threatening, offensive, or
+ harmful. This may include removing, editing, or rejecting comments, commits,
+ code, wiki edits, issues, and other contributions that do not align with this
+ Code of Conduct. Community leaders will communicate reasons for moderation
+ decisions when appropriate.
+ 
+ ## Scope
+ 
+ This Code of Conduct applies within all community spaces, and also applies when
+ an individual is officially representing the community in public spaces.
+ Examples of representing our community include using an official e-mail address,
+ posting via an official social media account, or acting as an appointed
+ representative at an online or offline event.
+ 
+ ## Enforcement
+ 
+ Instances of abusive, harassing, or otherwise unacceptable behavior may be
+ reported to the community leaders responsible for enforcement at
+ nikola@lightrix.help. All complaints will be reviewed and investigated promptly
+ and fairly. All community leaders are obligated to respect the privacy and
+ security of the reporter of any incident.
+ 
+ ## Enforcement Guidelines
+ 
+ Community leaders will follow these Community Impact Guidelines in determining
+ the consequences for any action they deem in violation of this Code of Conduct:
+ 
+ ### 1. Correction
+ 
+ **Community Impact**: Use of inappropriate language or other behavior deemed
+ unprofessional or unwelcome in the community.
+ 
+ **Consequence**: A private, written warning from community leaders, providing
+ clarity around the nature of the violation and an explanation of why the
+ behavior was inappropriate. A public apology may be requested.
+ 
+ ### 2. Warning
+ 
+ **Community Impact**: A violation through a single incident or series of
+ actions.
+ 
+ **Consequence**: A warning with consequences for continued behavior. No
+ interaction with the people involved, including unsolicited interaction with
+ those enforcing the Code of Conduct, for a specified period of time. This
+ includes avoiding interactions in community spaces as well as external channels
+ like social media. Violating these terms may lead to a temporary or permanent
+ ban.
+ 
+ ### 3. Temporary Ban
+ 
+ **Community Impact**: A serious violation of community standards, including
+ sustained inappropriate behavior.
+ 
+ **Consequence**: A temporary ban from any sort of interaction or public
+ communication with the community for a specified period of time. No public or
+ private interaction with the people involved, including unsolicited interaction
+ with those enforcing the Code of Conduct, is allowed during this period.
+ Violating these terms may lead to a permanent ban.
+ 
+ ### 4. Permanent Ban
+ 
+ **Community Impact**: Demonstrating a pattern of violation of community
+ standards, including sustained inappropriate behavior, harassment of an
+ individual, or aggression toward or disparagement of classes of individuals.
+ 
+ **Consequence**: A permanent ban from any sort of public interaction within the
+ community.
+ 
+ ## Attribution
+ 
+ This Code of Conduct is adapted from the [Contributor Covenant][homepage],
+ version 2.1, available at
+ [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
+ Community Impact Guidelines were inspired by [Mozilla's code of conduct
+ enforcement ladder][Mozilla CoC].
+ 
+ For answers to common questions about this code of conduct, see the FAQ at
+ [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
+ [https://www.contributor-covenant.org/translations][translations].
+ 
+ [homepage]: https://www.contributor-covenant.org
+ [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: https://github.com/mozilla/diversity
+ [FAQ]: https://www.contributor-covenant.org/faq
+ [translations]: https://www.contributor-covenant.org/translations
+ 
+ Thank you for being part of our community and helping us create a safe and
+ respectful environment for everyone!
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
new file mode 100644
index 0000000..16cd312
--- /dev/null
+++ b/CONTRIBUTING.md
+ # Contributing Guidelines
+ 
+ Welcome to our community! We are committed to creating a welcoming and inclusive
+ environment for all contributors. Before you get started, please read and adhere
+ to the following code of conduct. By participating in our community, you agree
+ to abide by these guidelines.
+ 
+ ## Our Pledge
+ 
+ We, as members, contributors, and leaders, pledge to make participation in our
+ community a harassment-free experience for everyone, regardless of age, body
+ size, visible or invisible disability, ethnicity, sex characteristics, gender
+ identity and expression, level of experience, education, socio-economic status,
+ nationality, personal appearance, race, caste, color, religion, or sexual
+ identity and orientation. We pledge to act and interact in ways that contribute
+ to an open, welcoming, diverse, inclusive, and healthy community.
+ 
+ ## Our Standards
+ 
+ Examples of behavior that contributes to a positive environment for our
+ community include:
+ 
+ -   Demonstrating empathy and kindness toward other people
+ -   Being respectful of differing opinions, viewpoints, and experiences
+ -   Giving and gracefully accepting constructive feedback
+ -   Accepting responsibility and apologizing to those affected by our mistakes,
+     and learning from the experience
+ -   Focusing on what is best not just for us as individuals, but for the overall
+     community
+ 
+ Examples of unacceptable behavior include:
+ 
+ -   The use of sexualized language or imagery, and sexual attention or advances
+     of any kind
+ -   Trolling, insulting, or derogatory comments, and personal or political
+     attacks
+ -   Public or private harassment
+ -   Publishing others' private information, such as a physical or email address,
+     without their explicit permission
+ -   Other conduct which could reasonably be considered inappropriate in a
+     professional setting
+ 
+ ## Enforcement Responsibilities
+ 
+ Community leaders are responsible for clarifying and enforcing our standards of
+ acceptable behavior and will take appropriate and fair corrective action in
+ response to any behavior that they deem inappropriate, threatening, offensive,
+ or harmful. Community leaders have the right and responsibility to remove, edit,
+ or reject comments, commits, code, wiki edits, issues, and other contributions
+ that are not aligned with this Code of Conduct, and will communicate reasons for
+ moderation decisions when appropriate.
+ 
+ ## Scope
+ 
+ This Code of Conduct applies within all community spaces, and also applies when
+ an individual is officially representing the community in public spaces.
+ Examples of representing our community include using an official e-mail address,
+ posting via an official social media account, or acting as an appointed
+ representative at an online or offline event.
+ 
+ ## Enforcement
+ 
+ Instances of abusive, harassing, or otherwise unacceptable behavior may be
+ reported to the community leaders responsible for enforcement at
+ nikola@lightrix.help. All complaints will be reviewed and investigated promptly
+ and fairly. All community leaders are obligated to respect the privacy and
+ security of the reporter of any incident.
+ 
+ ## Enforcement Guidelines
+ 
+ Community leaders will follow these Community Impact Guidelines in determining
+ the consequences for any action they deem in violation of this Code of Conduct:
+ 
+ ### 1. Correction
+ 
+ **Community Impact**: Use of inappropriate language or other behavior deemed
+ unprofessional or unwelcome in the community.
+ 
+ **Consequence**: A private, written warning from community leaders, providing
+ clarity around the nature of the violation and an explanation of why the
+ behavior was inappropriate. A public apology may be requested.
+ 
+ ### 2. Warning
+ 
+ **Community Impact**: A violation through a single incident or series of
+ actions.
+ 
+ **Consequence**: A warning with consequences for continued behavior. No
+ interaction with the people involved, including unsolicited interaction with
+ those enforcing the Code of Conduct, for a specified period of time. This
+ includes avoiding interactions in community spaces as well as external channels
+ like social media. Violating these terms may lead to a temporary or permanent
+ ban.
+ 
+ ### 3. Temporary Ban
+ 
+ **Community Impact**: A serious violation of community standards, including
+ sustained inappropriate behavior.
+ 
+ **Consequence**: A temporary ban from any sort of interaction or public
+ communication with the community for a specified period of time. No public or
+ private interaction with the people involved, including unsolicited interaction
+ with those enforcing the Code of Conduct, is allowed during this period.
+ Violating these terms may lead to a permanent ban.
+ 
+ ### 4. Permanent Ban
+ 
+ **Community Impact**: Demonstrating a pattern of violation of community
+ standards, including sustained inappropriate behavior, harassment of an
+ individual, or aggression toward or disparagement of classes of individuals.
+ 
+ **Consequence**: A permanent ban from any sort of public interaction within the
+ community.
+ 
+ ## Attribution
+ 
+ This Code of Conduct is adapted from the [Contributor Covenant][homepage],
+ version 2.1, available at
+ [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
+ Community Impact Guidelines were inspired by [Mozilla's code of conduct
+ enforcement ladder][Mozilla CoC].
+ 
+ For answers to common questions about this code of conduct, see the FAQ at
+ [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
+ [https://www.contributor-covenant.org/translations][translations].
+ 
+ [homepage]: https://www.contributor-covenant.org
+ [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: https://github.com/mozilla/diversity
+ [FAQ]: https://www.contributor-covenant.org/faq
+ [translations]: https://www.contributor-covenant.org/translations
+ 
+ Thank you for being part of our community and helping us create a safe and
+ respectful environment for everyone!
diff --git a/package.json b/package.json
index 0705c37..bc4e7e1 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.8",
+ 	"version": "0.1.9",
- 		"@types/node": "20.4.10",
+ 		"@types/node": "20.5.0",
- 		"esbuild": "0.19.1",
+ 		"esbuild": "0.19.2",
- 		"@types/node": "20.4.10",
+ 		"@types/node": "20.5.0",
diff --git a/README.md b/README.md
index 342d7ee..14d705b 100644
--- a/README.md
+++ b/README.md
- 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es esbuild.ts"
+ 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es ESBuild.ts"
- #### See an example of a config file in [esbuild.ts](Source/Configuration/esbuild.ts)
+ #### See an example of a config file in [ESBuild.ts](Source/Configuration/ESBuild.ts)
- The script will now automatically compile your build files with [esbuild] and
- add TypeScript types.
- 
diff --git a/Source/Command/Build.ts b/Source/Command/Build.ts
index 21cdb44..0baf6fe 100644
--- a/Source/Command/Build.ts
+++ b/Source/Command/Build.ts
- import type { BuildOptions } from "esbuild";
+ import type { BuildOptions as Option } from "esbuild";
- import _esbuild from "../Configuration/esbuild.js";
+ import _ESBuild from "../Configuration/esbuild.js";
-  * @param [Options] - The `Options` parameter is an optional object that can contain two properties:
+  * @param [Option] - The `Option` parameter is an optional object that can contain two properties:
- 	Options?: { esbuild?: string; TypeScript?: string }
+ 	Option?: { ESBuild?: string; TypeScript?: string }
- 	const esbuild = Merge(_esbuild, {
+ 	const ESBuild = Merge(_ESBuild, {
- 	} satisfies BuildOptions);
+ 	} satisfies Option);
- 		Options?.esbuild
- 			? Merge(esbuild, await File(Options?.esbuild))
- 			: esbuild
+ 		Option?.ESBuild
+ 			? Merge(ESBuild, await File(Option?.ESBuild))
+ 			: ESBuild
- 	if (Options?.TypeScript) {
- 		Exec(`tsc -p ${Options?.TypeScript}`);
+ 	if (Option?.TypeScript) {
+ 		Exec(`tsc -p ${Option?.TypeScript}`);
diff --git a/Source/Configuration/esbuild.ts b/Source/Configuration/esbuild.ts
index 8e4c808..7333bc8 100644
--- a/Source/Configuration/esbuild.ts
+++ b/Source/Configuration/esbuild.ts
- import type { BuildOptions, PluginBuild } from "esbuild";
+ import type { PluginBuild as Build, BuildOptions as Option } from "esbuild";
- import { rm as Remove } from "fs/promises";
+ import {
+ 	access as Access,
+ 	constants as Constant,
+ 	rm as Remove,
+ } from "fs/promises";
- 			setup(build: PluginBuild) {
- 				build.onStart(async () => {
+ 			setup(Build: Build) {
+ 				Build.onStart(async () => {
+ 					try {
+ 						await Access(Out, Constant.R_OK);
+ 
+ 					} catch (_Error) {}
- } satisfies BuildOptions;
+ } satisfies Option;

🗣️ Summary from v0.1.9 to v0.2.0 in .
diff --git a/.github/workflows/codeql.yml b/.github/workflows/codeql.yml
deleted file mode 100644
index 8cedfe5..0000000
--- a/.github/workflows/codeql.yml
+++ /dev/null
- name: CodeQL
- 
- concurrency:
-     group: CodeQL-${{ github.workflow }}-${{ github.ref }}
-     cancel-in-progress: true
- 
- permissions:
-     security-events: write
-     contents: write
-     pull-requests: write
- 
- on:
-     workflow_dispatch:
-     push:
-         branches: [main]
-     pull_request:
-         branches: [main]
-     workflow_call:
- 
- jobs:
-     CodeQL:
-         runs-on: ubuntu-latest
- 
-         env:
-             ADBLOCK: true
-             TELEMETRY_DISABLED: 1
-             ASTRO_TELEMETRY_DISABLED: 1
-             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
-             AZURE_CORE_COLLECT_TELEMETRY: 0
-             CHOOSENIM_NO_ANALYTICS: 1
-             DIEZ_DO_NOT_TRACK: 1
-             DO_NOT_TRACK: 1
-             DOTNET_CLI_TELEMETRY_OPTOUT: 1
-             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
-             ET_NO_TELEMETRY: 1
-             GATSBY_TELEMETRY_DISABLED: 1
-             GATSBY_TELEMETRY_OPT_OUT: 1
-             GATSBY_TELEMETRY_OPTOUT: 1
-             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
-             HINT_TELEMETRY: off
-             HOMEBREW_NO_ANALYTICS: 1
-             INFLUXD_REPORTING_DISABLED: true
-             ITERATIVE_DO_NOT_TRACK: 1
-             NEXT_TELEMETRY_DEBUG: 1
-             NEXT_TELEMETRY_DISABLED: 1
-             NG_CLI_ANALYTICS: false
-             NUXT_TELEMETRY_DISABLED: 1
-             PIN_DO_NOT_TRACK: 1
-             POWERSHELL_TELEMETRY_OPTOUT: 1
-             SAM_CLI_TELEMETRY: 0
-             STNOUPGRADE: 1
-             STRIPE_CLI_TELEMETRY_OPTOUT: 1
- 
-         steps:
-             - uses: actions/checkout@v3.5.3
- 
-             - uses: github/codeql-action/init@v2.21.3
-               with:
-                   languages: javascript
- 
-             - name: Perform CodeQL Analysis
-               uses: github/codeql-action/analyze@v2.21.3
-               with:
-                   category: "/language:javascript"
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
new file mode 100644
index 0000000..dcb957d
--- /dev/null
+++ b/.github/workflows/GitHub.yml
+ name: GitHub
+ 
+ concurrency:
+     group: GitHub-${{ github.workflow }}-${{ github.ref }}
+     cancel-in-progress: true
+ 
+ permissions:
+     issues: write
+     pull-requests: write
+ 
+ on:
+     issues:
+         types: [opened]
+     pull_request:
+         types: [opened]
+ 
+ jobs:
+     Assign:
+         runs-on: ubuntu-latest
+ 
+         env:
+             ADBLOCK: true
+             TELEMETRY_DISABLED: 1
+             ASTRO_TELEMETRY_DISABLED: 1
+             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
+             AZURE_CORE_COLLECT_TELEMETRY: 0
+             CHOOSENIM_NO_ANALYTICS: 1
+             DIEZ_DO_NOT_TRACK: 1
+             DO_NOT_TRACK: 1
+             DOTNET_CLI_TELEMETRY_OPTOUT: 1
+             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
+             ET_NO_TELEMETRY: 1
+             GATSBY_TELEMETRY_DISABLED: 1
+             GATSBY_TELEMETRY_OPT_OUT: 1
+             GATSBY_TELEMETRY_OPTOUT: 1
+             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
+             HINT_TELEMETRY: off
+             HOMEBREW_NO_ANALYTICS: 1
+             INFLUXD_REPORTING_DISABLED: true
+             ITERATIVE_DO_NOT_TRACK: 1
+             NEXT_TELEMETRY_DEBUG: 1
+             NEXT_TELEMETRY_DISABLED: 1
+             NG_CLI_ANALYTICS: false
+             NUXT_TELEMETRY_DISABLED: 1
+             PIN_DO_NOT_TRACK: 1
+             POWERSHELL_TELEMETRY_OPTOUT: 1
+             SAM_CLI_TELEMETRY: 0
+             STNOUPGRADE: 1
+             STRIPE_CLI_TELEMETRY_OPTOUT: 1
+ 
+         steps:
+             - uses: pozil/auto-assign-issue@v1.12.0
+               with:
+                   repo-token: ${{ secrets.GITHUB_TOKEN }}
+                   assignees: NikolaRHristov
+                   numOfAssignee: 1
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index ef3f64c..16ee310 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v3.5.3
+             - uses: actions/checkout@v4.1.0
-             - uses: actions/setup-node@v3.7.0
+             - uses: actions/setup-node@v3.8.1
-             - uses: actions/upload-artifact@v3.1.2
+             - uses: actions/upload-artifact@v3.1.3
-                   name: .-NPM-Node-${{ matrix.node-version }}-Target
+                   name: .-Node-${{ matrix.node-version }}-Target
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index f8d70f3..2551c53 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
+ 
-             - uses: actions/checkout@v3.5.3
+             - uses: actions/checkout@v4.1.0
-             - uses: actions/setup-node@v3.7.0
+             - uses: actions/setup-node@v3.8.1
diff --git a/.npmignore b/.npmignore
index 797b72a..4639469 100644
--- a/.npmignore
+++ b/.npmignore
+ .github/
+ CODE_OF_CONDUCT.md
+ CONTRIBUTING.md
+ Documentation/
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index 444e067..b4f1f9b 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- nikola@lightrix.help. All complaints will be reviewed and investigated promptly
- and fairly. All community leaders are obligated to respect the privacy and
- security of the reporter of any incident.
+ nikola@nikolahristov.tech. All complaints will be reviewed and investigated
+ promptly and fairly. All community leaders are obligated to respect the privacy
+ and security of the reporter of any incident.
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index 16cd312..c740185 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
- nikola@lightrix.help. All complaints will be reviewed and investigated promptly
- and fairly. All community leaders are obligated to respect the privacy and
- security of the reporter of any incident.
+ nikola@nikolahristov.tech. All complaints will be reviewed and investigated
+ promptly and fairly. All community leaders are obligated to respect the privacy
+ and security of the reporter of any incident.
diff --git a/LICENSE b/LICENSE
index 66f72b3..a14ae95 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2022 Nikola Hristov
+ Copyright (c) 2023 Nikola R. Hristov
diff --git a/package.json b/package.json
index bc4e7e1..44fbbca 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.1.9",
+ 	"version": "0.2.0",
- 	"description": "🌀 Builds all JavaScript files from TypeScript within a given folder using esbuild.",
+ 	"description": "🌀 Builds all your TypeScript files into JavaScript from a given folder using esbuild.",
+ 	"author": {
+ 		"name": "Nikola Hristov",
+ 		"email": "nikola@nikolahristov.tech",
+ 		"url": "https://nikolahristov.tech"
+ 	},
- 	"main": "./Target/Index.js",
- 	"types": "./Target/Index.d.ts",
+ 	"main": "./Target/Class/TypeScriptESBuild.js",
+ 	"types": "./Target/Class/TypeScriptESBuild.d.ts",
- 		"TypeScriptESBuild": "Target/Bin.js"
+ 		"TypeScriptESBuild": "Target/Class/TypeScriptESBuild.js"
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Index.ts 'Source/**/*.ts'"
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts'"
- 		"@types/node": "20.5.0",
+ 		"@mxssfd/typedoc-theme": "1.1.3",
+ 		"@types/node": "20.7.2",
- 		"esbuild": "0.19.2",
+ 		"esbuild": "0.19.4",
- 		"typescript": "5.1.6"
+ 		"typedoc": "0.25.1",
+ 		"typedoc-plugin-mdn-links": "3.1.0",
+ 		"typedoc-plugin-merge-modules": "5.1.0",
+ 		"typedoc-plugin-remove-references": "0.0.6",
+ 		"typedoc-plugin-rename-defaults": "0.6.6",
+ 		"typedoc-plugin-zod": "1.1.0",
+ 		"typescript": "5.2.2"
- 		"@types/node": "20.5.0",
+ 		"@types/node": "20.7.2",
diff --git a/README.md b/README.md
index 14d705b..d5b0459 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.1.8"
+ 		"typescript-esbuild": "0.1.16"
- #### See an example of a config file in [ESBuild.ts](Source/Configuration/ESBuild.ts)
+ #### See an example of a configuration file in [Configuration.ts](Source/Object/Configuration.ts)
- 	"extends": "typescript-esbuild/Target/Configuration/TypeScript",
+ 	"extends": "typescript-esbuild/Target/Notation/TypeScript",
diff --git a/Source/Bin.ts b/Source/Bin.ts
deleted file mode 100644
index f401b04..0000000
--- a/Source/Bin.ts
+++ /dev/null
- #!/usr/bin/env node
- 
- import "./Index.js";
diff --git a/Source/Class/TypeScriptESBuild.ts b/Source/Class/TypeScriptESBuild.ts
new file mode 100644
index 0000000..13f798e
--- /dev/null
+++ b/Source/Class/TypeScriptESBuild.ts
+ #!/usr/bin/env node
+ 
+ /**
+  * @module TypeScriptESBuild
+  *
+  */
+ export default new (await import("commander")).Command()
+ 	.name("TypeScriptESBuild")
+ 	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
+ 	.description("Builds files")
+ 	.argument("<Files...>", "Files to build")
+ 	.option("-es, --ESBuild <File>", "esbuild configuration file")
+ 	.option("-ts, --TypeScript <File>", "TypeScript configuration file")
+ 	.action((await import("../Function/Build.js")).default)
+ 	.parse();
diff --git a/Source/Command/Build.ts b/Source/Command/Build.ts
deleted file mode 100644
index 0baf6fe..0000000
--- a/Source/Command/Build.ts
+++ /dev/null
- import { exec as Exec } from "child_process";
- import { deepmerge as Merge } from "deepmerge-ts";
- import type { BuildOptions as Option } from "esbuild";
- import { build as Build } from "esbuild";
- import type { Pattern } from "fast-glob";
- import Glob from "fast-glob";
- import _ESBuild from "../Configuration/esbuild.js";
- import File from "../Library/File.js";
- 
- export type Pipe = string[];
- 
- /**
-  * The `Build` function compiles and builds TypeScript files using esbuild and TypeScript compiler.
-  * @param {Pattern[]} Files - An array of file patterns to be processed. Each pattern can include
-  * wildcards (*) to match multiple files.
-  * @param [Option] - The `Option` parameter is an optional object that can contain two properties:
-  */
- export default async (
- 	Files: Pattern[],
- 	Option?: { ESBuild?: string; TypeScript?: string }
- ) => {
- 	const Pipe: Pipe = [];
- 
- 	for (const File of Files) {
- 		for (const _File of await Glob(
- 			File.replaceAll("'", "").replaceAll('"', "")
- 		)) {
- 			Pipe.push(_File);
- 		}
- 	}
- 
- 	Pipe.reverse();
- 
- 	const ESBuild = Merge(_ESBuild, {
- 		entryPoints: Object.fromEntries(
- 			Pipe.map((File) => [
- 				File.replace("Source/", "").split(".").slice(0, -1.0).join("."),
- 				File,
- 			])
- 		),
- 	} satisfies Option);
- 
- 	await Build(
- 		Option?.ESBuild
- 			? Merge(ESBuild, await File(Option?.ESBuild))
- 			: ESBuild
- 	);
- 
- 	if (Option?.TypeScript) {
- 		Exec(`tsc -p ${Option?.TypeScript}`);
- 	} else {
- 		Exec("tsc");
- 	}
- };
diff --git a/Source/Configuration/ESBuild.ts b/Source/Configuration/ESBuild.ts
deleted file mode 100644
index 7333bc8..0000000
--- a/Source/Configuration/ESBuild.ts
+++ /dev/null
- import type { PluginBuild as Build, BuildOptions as Option } from "esbuild";
- import { copy as Copy } from "esbuild-plugin-copy";
- import {
- 	access as Access,
- 	constants as Constant,
- 	rm as Remove,
- } from "fs/promises";
- 
- const Out = "Target";
- 
- export default {
- 	format: "esm",
- 	minify: true,
- 	outdir: Out,
- 	platform: "node",
- 	target: "esnext",
- 	write: true,
- 	plugins: [
- 		{
- 			name: "Target",
- 			setup(Build: Build) {
- 				Build.onStart(async () => {
- 					try {
- 						await Access(Out, Constant.R_OK);
- 
- 						try {
- 							await Remove(Out, {
- 								recursive: true,
- 							});
- 						} catch (_Error) {
- 							console.log(_Error);
- 						}
- 					} catch (_Error) {}
- 				});
- 			},
- 		},
- 		Copy({
- 			resolveFrom: "out",
- 			assets: [
- 				{
- 					from: "./Source/Configuration/TypeScript.json",
- 					to: "./Configuration/",
- 				},
- 			],
- 		}),
- 	],
- } satisfies Option;
diff --git a/Source/Configuration/TypeScript.json b/Source/Configuration/TypeScript.json
deleted file mode 100644
index 27705c6..0000000
--- a/Source/Configuration/TypeScript.json
+++ /dev/null
- {
- 	"$schema": "https://json.schemastore.org/tsconfig",
- 	"compilerOptions": {
- 		"allowArbitraryExtensions": true,
- 		"allowImportingTsExtensions": true,
- 		"allowJs": true,
- 		"allowSyntheticDefaultImports": true,
- 		"allowUmdGlobalAccess": false,
- 		"allowUnreachableCode": false,
- 		"allowUnusedLabels": false,
- 		"alwaysStrict": true,
- 		"assumeChangesOnlyAffectDirectDependencies": true,
- 		"baseUrl": "./",
- 		"checkJs": true,
- 		"declaration": true,
- 		"disableReferencedProjectLoad": false,
- 		"emitDeclarationOnly": true,
- 		"esModuleInterop": true,
- 		"exactOptionalPropertyTypes": true,
- 		"forceConsistentCasingInFileNames": true,
- 		"isolatedModules": true,
- 		"jsx": "preserve",
- 		"lib": ["ESNext"],
- 		"module": "ESNext",
- 		"moduleResolution": "NodeNext",
- 		"noFallthroughCasesInSwitch": true,
- 		"noImplicitOverride": true,
- 		"noImplicitReturns": true,
- 		"noPropertyAccessFromIndexSignature": true,
- 		"noUncheckedIndexedAccess": true,
- 		"noUnusedLocals": true,
- 		"noUnusedParameters": true,
- 		"resolveJsonModule": true,
- 		"skipLibCheck": true,
- 		"strict": true,
- 		"strictBindCallApply": true,
- 		"strictFunctionTypes": true,
- 		"strictNullChecks": true,
- 		"target": "ESNext",
- 		"types": ["node", "@types/node"],
- 		"verbatimModuleSyntax": true
- 	},
- 	"ts-node": {
- 		"esm": true
- 	}
- }
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
new file mode 100644
index 0000000..673aacc
--- /dev/null
+++ b/Source/Function/Build.ts
+ /**
+  * @module Build
+  *
+  */
+ export default (async (...[File, Option]: Parameters<Type>) => {
+ 	File.forEach(async (File) =>
+ 		(
+ 			await (
+ 				await import("fast-glob")
+ 			).default(File.replaceAll("'", "").replaceAll('"', ""))
+ 		).forEach((File) => Pipe.push(File))
+ 	);
+ 
+ 	Pipe.reverse();
+ 
+ 	const Configuration = deepmerge(
+ 		(await import("../Object/ESBuild.js")).default,
+ 		{
+ 			entryPoints: Object.fromEntries(
+ 				Pipe.map((File) => [
+ 					File.replace("Source/", "")
+ 						.split(".")
+ 						.slice(0, -1.0)
+ 						.join("."),
+ 					File,
+ 				])
+ 			),
+ 		}
+ 	);
+ 
+ 	const { metafile } = await (
+ 		await import("esbuild")
+ 	).build(
+ 		Option?.ESBuild
+ 			? deepmerge(
+ 					Configuration,
+ 					await (
+ 						await import("../Function/File.js")
+ 					).default(Option?.ESBuild)
+ 			  )
+ 			: Configuration
+ 	);
+ 
+ 	console.log(
+ 		metafile
+ 			? await (
+ 					await import("esbuild")
+ 			  ).analyzeMetafile(metafile, {
+ 					verbose: true,
+ 			  })
+ 			: {}
+ 	);
+ 
+ 	if (Option?.TypeScript) {
+ 		Exec(`tsc -p ${Option?.TypeScript}`);
+ 	} else {
+ 		Exec("tsc");
+ 	}
+ 
+ 	Exec(
+ 		`typedoc \
+ 			--commentStyle all \
+ 			--gitRevision main \
+ 			--customCss ${(await import("path")).resolve(
+ 				`${Current}/../Sheet/TypeDoc.css`
+ 			)} \
+ 			--includeVersion \
+ 			--out ./Documentation \
+ 			--plugin typedoc-plugin-remove-references \
+ 			--plugin typedoc-plugin-rename-defaults \
+ 			--plugin typedoc-plugin-mdn-links \
+ 			--plugin typedoc-plugin-zod \
+ 			--plugin @mxssfd/typedoc-theme \
+ 			--plugin typedoc-plugin-merge-modules \
+ 			--theme my-theme \
+ 			--entryPointStrategy expand \
+ 			--mergeModulesRenameDefaults \
+ 			--mergeModulesMergeMode module \
+ 			--entryPoints ${Object.values(Configuration.entryPoints).join(
+ 				" --entryPoints "
+ 			)}`
+ 	);
+ 
+ 	setTimeout(() => {
+ 		Exec("mv ./Documentation/functions ./Documentation/Function");
+ 
+ 		Exec(
+ 			`find ./Documentation -type f -name '*.html' -exec sed -i -E --regexp-extended 's:(href="([^"]+)?)functions/:\\1Function/:g' {} \;`
+ 		);
+ 	}, 10000);
+ }) satisfies Type as Type;
+ 
+ import type Type from "../Interface/Build.js";
+ 
+ export const { default: Exec } = await import("../Function/Exec.js");
+ 
+ export const { deepmerge } = await import("deepmerge-ts");
+ 
+ export const Pipe: string[] = [];
+ 
+ export const Current = (await import("url")).fileURLToPath(
+ 	(await import("path")).dirname(import.meta.url)
+ );
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
new file mode 100644
index 0000000..0d71924
--- /dev/null
+++ b/Source/Function/Exec.ts
+ /**
+  * @module Exec
+  *
+  */
+ export default (async (
+ 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Type>
+ ) => {
+ 	try {
+ 		const Exec = (await import("child_process")).exec(Command);
+ 
+ 		if (typeof Echo === "function") {
+ 			Exec.stdout?.on("data", (Data) => Echo(Data));
+ 		}
+ 	} catch (_Error) {}
+ }) satisfies Type as Type;
+ 
+ import type Type from "../Interface/Exec.js";
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
new file mode 100644
index 0000000..6219be1
--- /dev/null
+++ b/Source/Function/File.ts
+ /**
+  * @module File
+  *
+  */
+ export default (async (...[Path]: Parameters<Type>) => {
+ 	if (Path.split(".").pop() === "ts") {
+ 		const { options } = (
+ 			await import("typescript")
+ 		).default.convertCompilerOptionsFromJson(
+ 			(
+ 				await (
+ 					await import("./JSON.js")
+ 				).default("../Notation/TypeScript.json", import.meta.url)
+ 			)?.compilerOptions,
+ 			"."
+ 		);
+ 
+ 		(await import("typescript")).default
+ 			.createProgram(
+ 				[Path],
+ 				options,
+ 				(await import("typescript")).default.createCompilerHost(options)
+ 			)
+ 			.emit();
+ 
+ 		await (
+ 			await import("fs/promises")
+ 		).writeFile(
+ 			Path.replace(".ts", ".js"),
+ 			(await import("typescript")).default.transpile(
+ 				(
+ 					await (await import("fs/promises")).readFile(Path, "utf-8")
+ 				).toString(),
+ 				options
+ 			)
+ 		);
+ 	}
+ 
+ 	return (
+ 		await import(
+ 			(await import("url"))
+ 				.pathToFileURL(Path)
+ 				.toString()
+ 				.replace(".ts", ".js")
+ 		)
+ 	).default;
+ }) satisfies Type as Type;
+ 
+ import type Type from "../Interface/File.js";
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
new file mode 100644
index 0000000..504dc40
--- /dev/null
+++ b/Source/Function/JSON.ts
+ /**
+  * @module JSON
+  *
+  */
+ export default (async (...[File, From]: Parameters<Type>) =>
+ 	JSON.parse(
+ 		(
+ 			await (
+ 				await import("fs/promises")
+ 			).readFile(
+ 				`${
+ 					From
+ 						? (await import("path")).dirname(
+ 								(await import("url")).fileURLToPath(
+ 									From ?? import.meta.url
+ 								)
+ 						  )
+ 						: "."
+ 				}/${File}`,
+ 				"utf-8"
+ 			)
+ 		).toString()
+ 	)) satisfies Type as Type;
+ 
+ import type Type from "../Interface/JSON.js";
diff --git a/Source/Index.ts b/Source/Index.ts
deleted file mode 100644
index d7b6362..0000000
--- a/Source/Index.ts
+++ /dev/null
- import { Command } from "commander";
- import Build from "./Command/Build.js";
- import _JSON from "./Library/JSON.js";
- 
- try {
- 	new Command()
- 		.name("TypeScriptESBuild")
- 		.version((await _JSON("../package.json", import.meta.url))?.version)
- 		.description("Builds files")
- 		.argument("<Files...>", "Files to build")
- 		.option("-es, --esbuild <File>", "esbuild configuration file")
- 		.option("-ts, --TypeScript <File>", "TypeScript configuration file")
- 		.action(Build)
- 		.parse();
- } catch (_Error) {
- 	console.log(_Error);
- }
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
new file mode 100644
index 0000000..ca1a77f
--- /dev/null
+++ b/Source/Interface/Build.ts
+ /**
+  * @module Build
+  *
+  */
+ export default interface Type {
+ 	/**
+ 	 * Represents a function that processes file patterns.
+ 	 *
+ 	 * @param File - An array of file patterns to be processed. Each pattern can include wildcards (*) to match multiple files.
+ 	 *
+ 	 * @param Option - An optional object that can contain two properties.
+ 	 *
+ 	 * @param Option.ESBuild - A string representing the ESBuild option.
+ 	 *
+ 	 * @param Option.TypeScript - A string representing the TypeScript option.
+ 	 *
+ 	 */
+ 	(
+ 		File: Pattern[],
+ 		Option?: {
+ 			ESBuild?: string;
+ 			TypeScript?: string;
+ 		}
+ 	): Promise<void>;
+ }
+ 
+ import type { Pattern } from "fast-glob";
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
new file mode 100644
index 0000000..50666a4
--- /dev/null
+++ b/Source/Interface/Exec.ts
+ /**
+  * @module Exec
+  *
+  */
+ export default interface Type {
+ 	/**
+ 	 * The 'Exec' function is an asynchronous function that executes a command and logs the
+ 	 * stdout of the child process.
+ 	 *
+ 	 * @param {string} Command - The 'Command' parameter is a string that represents the
+ 	 * command you want to execute. It can be any valid command that can be executed in a
+ 	 * terminal or command prompt.
+ 	 *
+ 	 * @param {boolean|function} [Echo] - An optional parameter that controls whether the stdout
+ 	 * of the child process should be logged. If set to 'false', no logging will occur. If set
+ 	 * to a function, the function will be called with the stdout data as a parameter for custom
+ 	 * logging. If not provided, stdout will be logged to the console by default.
+ 	 *
+ 	 */
+ 	(
+ 		Command: string,
+ 		// rome-ignore lint/suspicious/noExplicitAny:
+ 		Echo?: false | ((Return: any) => void)
+ 	): Promise<void>;
+ }
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
new file mode 100644
index 0000000..d028236
--- /dev/null
+++ b/Source/Interface/File.ts
+ /**
+  * @module File
+  *
+  */
+ export default interface Type {
+ 	/**
+ 	 * This function asynchronously processes a file located at the given path. If the file is a TypeScript
+ 	 * (.ts) file, it performs the following steps:
+ 	 * 1. Converts TypeScript code to JavaScript.
+ 	 * 2. Creates a JavaScript module and emits it.
+ 	 * 3. Writes the transpiled JavaScript code to a new file with a .js extension.
+ 	 *
+ 	 * Finally, it imports and returns the default export of the processed JavaScript module.
+ 	 *
+ 	 * @param {string} Path - The 'Path' parameter is a string that represents the file path of the file
+ 	 * you want to process.
+ 	 *
+ 	 */
+ 	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
+ 	(Path: string): Promise<any>;
+ }
diff --git a/Source/Interface/JSON.ts b/Source/Interface/JSON.ts
new file mode 100644
index 0000000..9447d0c
--- /dev/null
+++ b/Source/Interface/JSON.ts
+ /**
+  * @module JSON
+  *
+  */
+ export default interface Type {
+ 	/**
+ 	 * The function 'JSON' is a TypeScript function that reads a JSON file and returns its
+ 	 * parsed content.
+ 	 *
+ 	 * @param File - The `File` parameter is a string that represents the name or
+ 	 * path of the JSON file that you want to parse.
+ 	 *
+ 	 * @param From - The `From` parameter is an optional string that represents
+ 	 * the directory path from which the JSON file should be loaded. If `From` is provided,
+ 	 * it will be used as the base directory path. If `From` is not provided, the current
+ 	 * directory will be used as the base directory path.
+ 	 *
+ 	 */
+ 	(File: string, From?: string): Promise<ReturnType<typeof JSON.parse>>;
+ }
diff --git a/Source/Library/File.ts b/Source/Library/File.ts
deleted file mode 100644
index f151f6d..0000000
--- a/Source/Library/File.ts
+++ /dev/null
- import { readFile as _File, writeFile as File } from "fs/promises";
- import TypeScript from "typescript";
- import { pathToFileURL as URL } from "url";
- import _JSON from "./JSON.js";
- 
- /**
-  * The function takes a file path as input, checks if it is a TypeScript file, converts the TypeScript
-  * code to JavaScript, and then imports and returns the default export of the JavaScript file.
-  * @param {string} Path - The `Path` parameter is a string that represents the file path of the file
-  * you want to process.
-  * @returns the default export of the module that is imported using the provided `Path`.
-  */
- export default async (Path: string) => {
- 	if (Path.split(".").pop() === "ts") {
- 		const { options } = TypeScript.convertCompilerOptionsFromJson(
- 			(await _JSON("../Configuration/TypeScript.json", import.meta.url))
- 				?.compilerOptions,
- 			"."
- 		);
- 
- 		TypeScript.createProgram(
- 			[Path],
- 			options,
- 			TypeScript.createCompilerHost(options)
- 		).emit();
- 
- 		await File(
- 			Path.replace(".ts", ".js"),
- 			TypeScript.transpile(
- 				(await _File(Path, "utf-8")).toString(),
- 				options
- 			)
- 		);
- 	}
- 
- 	return (await import(URL(Path).toString().replace(".ts", ".js"))).default;
- };
diff --git a/Source/Library/JSON.ts b/Source/Library/JSON.ts
deleted file mode 100644
index 826a677..0000000
--- a/Source/Library/JSON.ts
+++ /dev/null
- import { readFile as _File } from "fs/promises";
- import { dirname as Dir } from "path";
- import { fileURLToPath as Path } from "url";
- 
- /**
-  * The function `JSON` is a TypeScript function that reads a JSON file and returns its parsed content.
-  * @param {string} File - The `File` parameter is a string that represents the name or path of the JSON
-  * file that you want to parse.
-  * @param {string} From - The `From` parameter is a string that represents the source URL or file path
-  * from which the JSON file will be loaded. It is set to `import.meta.url` by default, which refers to
-  * the URL of the current module. However, if a different source URL or file path is provided,
-  */
- export default async (File: string, From: string = import.meta.url) =>
- 	JSON.parse(
- 		(
- 			await _File(
- 				`${Dir(Path(From ?? import.meta.url))}/${File}`,
- 				"utf-8"
- 			)
- 		).toString()
- 	);
diff --git a/Source/Notation/TypeScript.json b/Source/Notation/TypeScript.json
new file mode 100644
index 0000000..8978670
--- /dev/null
+++ b/Source/Notation/TypeScript.json
+ {
+ 	"$schema": "https://json.schemastore.org/tsconfig",
+ 	"compilerOptions": {
+ 		"allowArbitraryExtensions": true,
+ 		"allowImportingTsExtensions": true,
+ 		"allowJs": true,
+ 		"allowSyntheticDefaultImports": true,
+ 		"allowUmdGlobalAccess": false,
+ 		"allowUnreachableCode": false,
+ 		"allowUnusedLabels": false,
+ 		"alwaysStrict": true,
+ 		"assumeChangesOnlyAffectDirectDependencies": true,
+ 		"baseUrl": "./",
+ 		"checkJs": true,
+ 		"declaration": true,
+ 		"disableReferencedProjectLoad": false,
+ 		"emitDeclarationOnly": true,
+ 		"esModuleInterop": true,
+ 		"exactOptionalPropertyTypes": true,
+ 		"forceConsistentCasingInFileNames": true,
+ 		"isolatedModules": true,
+ 		"jsx": "preserve",
+ 		"lib": ["ESNext"],
+ 		"module": "ESNext",
+ 		"moduleResolution": "Bundler",
+ 		"noFallthroughCasesInSwitch": true,
+ 		"noImplicitOverride": true,
+ 		"noImplicitReturns": true,
+ 		"noPropertyAccessFromIndexSignature": true,
+ 		"noUncheckedIndexedAccess": true,
+ 		"noUnusedLocals": true,
+ 		"noUnusedParameters": true,
+ 		"resolveJsonModule": true,
+ 		"skipLibCheck": true,
+ 		"strict": true,
+ 		"strictBindCallApply": true,
+ 		"strictFunctionTypes": true,
+ 		"strictNullChecks": true,
+ 		"target": "ESNext",
+ 		"types": ["node", "@types/node"],
+ 		"verbatimModuleSyntax": true
+ 	},
+ 	"ts-node": {
+ 		"esm": true
+ 	}
+ }
diff --git a/Source/Object/ESBuild.ts b/Source/Object/ESBuild.ts
new file mode 100644
index 0000000..1c99a33
--- /dev/null
+++ b/Source/Object/ESBuild.ts
+ /**
+  * @module ESBuild
+  *
+  */
+ export default {
+ 	color: true,
+ 	format: "esm",
+ 	metafile: true,
+ 	minify: true,
+ 	outdir: "Target",
+ 	platform: "node",
+ 	target: "esnext",
+ 	write: true,
+ 	logLevel: "debug",
+ 	plugins: [
+ 		{
+ 			name: "Target",
+ 			setup({ onStart, initialOptions: { outdir } }) {
+ 				onStart(async () => {
+ 					try {
+ 						outdir
+ 							? await (
+ 									await import("fs/promises")
+ 							  ).rm(outdir, {
+ 									recursive: true,
+ 							  })
+ 							: {};
+ 					} catch (_Error) {}
+ 				});
+ 			},
+ 		},
+ 		(await import("esbuild-plugin-copy")).copy({
+ 			resolveFrom: "out",
+ 			assets: [
+ 				{
+ 					from: "./Source/Notation/TypeScript.json",
+ 					to: "./Notation/",
+ 				},
+ 				{
+ 					from: "./Source/Sheet/TypeDoc.css",
+ 					to: "./Sheet/",
+ 				},
+ 			],
+ 		}),
+ 	],
+ 	define: {
+ 		"process.env.VERSION_PACKAGE": `'${(
+ 			await (await import("../Function/JSON.js")).default("package.json")
+ 		)?.version}'`,
+ 	},
+ } satisfies BuildOptions as BuildOptions;
+ 
+ import type { BuildOptions } from "esbuild";
diff --git a/Source/Sheet/TypeDoc.css b/Source/Sheet/TypeDoc.css
new file mode 100644
index 0000000..d43ae60
--- /dev/null
+++ b/Source/Sheet/TypeDoc.css
+ :root {
+ 	--color-background: #000;
+ 	--color-background-secondary: #000;
+ }
+ 
+ .tsd-navigation.settings {
+ 	display: none !important;
+ }
+ 
+ #tsd-search .field label {
+ 	left: 50%;
+ 	margin-left: -20px;
+ 	z-index: 1;
+ }
diff --git a/tsconfig.json b/tsconfig.json
index ee1d5c8..12e0400 100644
--- a/tsconfig.json
+++ b/tsconfig.json
- 	"extends": "./Source/Configuration/TypeScript",
+ 	"extends": "./Source/Notation/TypeScript",

🗣️ Summary from v0.2.0 to v0.2.1 in .
diff --git a/package.json b/package.json
index 44fbbca..8f8b9fa 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.0",
+ 	"version": "0.2.1",
- 		"@mxssfd/typedoc-theme": "1.1.3",
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index 673aacc..a207f9a 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 			--plugin @mxssfd/typedoc-theme \
- 			--theme my-theme \

🗣️ Summary from v0.2.1 to v0.2.10 in .
diff --git a/package.json b/package.json
index 8f8b9fa..45fa243 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.1",
+ 	"version": "0.2.10",
- 	"description": "🌀 Builds all your TypeScript files into JavaScript from a given folder using esbuild.",
+ 	"description": "🌀 Builds all your TypeScript files into JavaScript and generates documentation for it using TypeDoc.",
- 		"esbuild"
+ 		"esbuild",
+ 		"typedoc"
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts'"
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts' 'Source/**/*.tsx'"
- 		"@types/node": "20.7.2",
+ 		"@types/node": "20.8.2",
+ 		"typedoc-plugin-keywords": "1.5.0",
- 		"@types/node": "20.7.2",
diff --git a/README.md b/README.md
index d5b0459..780fb99 100644
--- a/README.md
+++ b/README.md
- Builds all your TypeScript files into JavaScript.
+ Builds all your TypeScript files into JavaScript and generates documentation for
+ it using [TypeDoc][typedoc].
- 	"dependencies": {
- 		"typescript-esbuild": "0.1.16"
+ 	"devDependencies": {
+ 		"typescript-esbuild": "0.2.10"
- #### or with a custom esbuild config file:
+ ### ESBuild Configuration
+ 
+ Or with a custom esbuild config file:
- #### See an example of a configuration file in [Configuration.ts](Source/Object/Configuration.ts)
+ See an example of a configuration file in [ESBuild.ts](Source/Object/ESBuild.ts)
+ 
+ ### TypeScript Configuration
- [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
+ [typedoc]: https://npmjs.org/typedoc
+ [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
diff --git a/Source/Class/TypeDoc/Theme.ts b/Source/Class/TypeDoc/Theme.ts
new file mode 100644
index 0000000..2e32798
--- /dev/null
+++ b/Source/Class/TypeDoc/Theme.ts
+ /**
+  * @module TypeDoc
+  *
+  */
+ export default class
+ 	extends (await import("typedoc")).DefaultTheme
+ 	implements Type
+ {
+ 	override buildUrls(...[Reflection, URLs]: Parameters<Type["buildUrls"]>) {
+ 		const { Directory } = this._Mapping(Reflection) ?? {};
+ 
+ 		if (Directory) {
+ 			if (
+ 				!Reflection.url ||
+ 				!DefaultTheme.URL_PREFIX.test(Reflection.url)
+ 			) {
+ 				const URL = [
+ 					Directory,
+ 					`${DefaultTheme.getUrl(Reflection)}.html`,
+ 				].join("/");
+ 
+ 				URLs.push(
+ 					new UrlMapping(URL, Reflection, this.reflectionTemplate)
+ 				);
+ 
+ 				Reflection.url = URL;
+ 				Reflection.hasOwnDocument = true;
+ 			}
+ 
+ 			Reflection.traverse((Child) => {
+ 				if (Child instanceof DeclarationReflection) {
+ 					this.buildUrls(Child, URLs);
+ 				} else {
+ 					DefaultTheme.applyAnchorUrl(Child, Reflection);
+ 				}
+ 
+ 				return true;
+ 			});
+ 		} else if (Reflection.parent) {
+ 			DefaultTheme.applyAnchorUrl(Reflection, Reflection.parent);
+ 		}
+ 
+ 		return URLs;
+ 	}
+ 
+ 	_Mapping = (...[Reflection]: Parameters<Type["_Mapping"]>) =>
+ 		this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));
+ 
+ 	Mapping: Mapping[] = [
+ 		{
+ 			Kind: [ReflectionKind.Class],
+ 			Directory: "Class",
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Interface],
+ 			Directory: "Interface",
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Enum],
+ 			Directory: "Enum",
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Namespace, ReflectionKind.Module],
+ 			Directory: "Module",
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.TypeAlias],
+ 			Directory: "Type",
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Function],
+ 			Directory: "Function",
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Variable],
+ 			Directory: "Variable",
+ 		},
+ 	];
+ }
+ 
+ import type Mapping from "../../Interface/TypeDoc/Mapping.js";
+ import type Type from "../../Interface/TypeDoc/Theme.js";
+ 
+ import {
+ 	DeclarationReflection,
+ 	DefaultTheme,
+ 	ReflectionKind,
+ 	UrlMapping,
+ } from "typedoc";
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index a207f9a..bf7b301 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 	const { metafile } = await (
+ 	console.log(
+ 		await (
+ 			await import("esbuild")
+ 		).analyzeMetafile(
+ 			(
+ 				await (
- 					).default(Option?.ESBuild)
+ 								).default(Option.ESBuild)
- 	);
- 
- 	console.log(
- 		metafile
- 			? await (
- 					await import("esbuild")
- 			  ).analyzeMetafile(metafile, {
+ 				)
+ 			)?.metafile ?? "",
+ 			{
- 			  })
- 			: {}
- 	);
- 
- 	if (Option?.TypeScript) {
- 		Exec(`tsc -p ${Option?.TypeScript}`);
- 	} else {
- 		Exec("tsc");
- 
- 	Exec(
- 		`typedoc \
- 			--commentStyle all \
- 			--gitRevision main \
- 			--customCss ${(await import("path")).resolve(
- 				`${Current}/../Sheet/TypeDoc.css`
- 			)} \
- 			--includeVersion \
- 			--out ./Documentation \
- 			--plugin typedoc-plugin-remove-references \
- 			--plugin typedoc-plugin-rename-defaults \
- 			--plugin typedoc-plugin-mdn-links \
- 			--plugin typedoc-plugin-zod \
- 			--plugin typedoc-plugin-merge-modules \
- 			--entryPointStrategy expand \
- 			--mergeModulesRenameDefaults \
- 			--mergeModulesMergeMode module \
- 			--entryPoints ${Object.values(Configuration.entryPoints).join(
- 				" --entryPoints "
- 			)}`
+ 		)
- 	setTimeout(() => {
- 		Exec("mv ./Documentation/functions ./Documentation/Function");
+ 	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
- 			`find ./Documentation -type f -name '*.html' -exec sed -i -E --regexp-extended 's:(href="([^"]+)?)functions/:\\1Function/:g' {} \;`
+ 		[
+ 			"typedoc",
+ 			"--commentStyle all",
+ 			"--gitRevision main",
+ 			`--customCss ${resolve(`${Current}/../Stylesheet/TypeDoc.css`)}`,
+ 			"--includeVersion",
+ 			"--out ./Documentation",
+ 			`--plugin ${resolve(
+ 				`${Current}/../../Target/Function/TypeDoc.js`
+ 			)}`,
+ 			"--plugin typedoc-plugin-remove-references",
+ 			"--plugin typedoc-plugin-rename-defaults",
+ 			"--plugin typedoc-plugin-mdn-links",
+ 			"--plugin typedoc-plugin-zod",
+ 			"--plugin typedoc-plugin-merge-modules",
+ 			"--plugin typedoc-plugin-keywords",
+ 			`--keywords ${
+ 				(
+ 					await (
+ 						await import("../Function/JSON.js")
+ 					).default("package.json", process.cwd())
+ 				)?.keywords?.join(" --keywords ") ?? " project "
+ 			}`,
+ 			"--theme TypeScriptESBuild",
+ 			"--entryPointStrategy expand",
+ 			"--mergeModulesRenameDefaults",
+ 			"--mergeModulesMergeMode module",
+ 			`--entryPoints ${Object.values(Configuration.entryPoints).join(
+ 				" --entryPoints "
+ 			)}`,
+ 		].join(" ")
- 	}, 10000);
+ export const { resolve } = await import("path");
+ 
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 6219be1..0137920 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- 				).default("../Notation/TypeScript.json", import.meta.url)
+ 				).default(
+ 					"../Notation/TypeScript.json",
+ 					(await import("path")).dirname(
+ 						(await import("url")).fileURLToPath(import.meta.url)
+ 					)
+ 				)
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 504dc40..20a4ba4 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- 			).readFile(
- 				`${
- 					From
- 						? (await import("path")).dirname(
- 								(await import("url")).fileURLToPath(
- 									From ?? import.meta.url
- 								)
- 						  )
- 						: "."
- 				}/${File}`,
- 				"utf-8"
- 			)
+ 			).readFile(`${From ?? "."}/${File}`, "utf-8")
diff --git a/Source/Function/TypeDoc.ts b/Source/Function/TypeDoc.ts
new file mode 100644
index 0000000..af34fa0
--- /dev/null
+++ b/Source/Function/TypeDoc.ts
+ /**
+  * @module TypeDoc
+  *
+  */
+ export const load = (...[Application]: Parameters<Type["load"]>) =>
+ 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
+ 
+ import type Type from "../Interface/TypeDoc.js";
+ 
+ import Theme from "../Class/TypeDoc/Theme.js";
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
index d028236..3e41884 100644
--- a/Source/Interface/File.ts
+++ b/Source/Interface/File.ts
- 	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
+ 	// rome-ignore lint/suspicious/noExplicitAny:
diff --git a/Source/Interface/TypeDoc.ts b/Source/Interface/TypeDoc.ts
new file mode 100644
index 0000000..b114750
--- /dev/null
+++ b/Source/Interface/TypeDoc.ts
+ /**
+  * @module TypeDoc
+  *
+  */
+ export default interface Type {
+ 	load: (Application: Application) => void;
+ }
+ 
+ import type { Application } from "typedoc";
diff --git a/Source/Interface/TypeDoc/Mapping.ts b/Source/Interface/TypeDoc/Mapping.ts
new file mode 100644
index 0000000..3a587dc
--- /dev/null
+++ b/Source/Interface/TypeDoc/Mapping.ts
+ /**
+  * Defines a mapping of a {@link Models.Kind} to a template file.
+  *
+  * Used by {@link DefaultTheme} to map reflections to output files.
+  *
+  * @module TypeDoc
+  *
+  */
+ export default interface Type {
+ 	/**
+ 	 * {@link DeclarationReflection.kind} this rule applies to.
+ 	 */
+ 	Kind: ReflectionKind[];
+ 
+ 	/**
+ 	 * The name of the directory the output files should be written to.
+ 	 */
+ 	Directory: string;
+ }
+ 
+ import type { ReflectionKind } from "typedoc";
diff --git a/Source/Interface/TypeDoc/Theme.ts b/Source/Interface/TypeDoc/Theme.ts
new file mode 100644
index 0000000..7efd527
--- /dev/null
+++ b/Source/Interface/TypeDoc/Theme.ts
+ /**
+  * @module TypeDoc
+  *
+  */
+ export default interface Type {
+ 	buildUrls: (
+ 		Reflection: DeclarationReflection,
+ 		// rome-ignore lint/suspicious/noExplicitAny:
+ 		URLs: UrlMapping<any>[]
+ 		// rome-ignore lint/suspicious/noExplicitAny:
+ 	) => UrlMapping<any>[];
+ 
+ 	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
+ 
+ 	Mapping: Mapping[];
+ }
+ 
+ import type Mapping from "./Mapping.js";
+ 
+ import type { DeclarationReflection, UrlMapping } from "typedoc";
diff --git a/Source/Object/ESBuild.ts b/Source/Object/ESBuild.ts
index 1c99a33..407c126 100644
--- a/Source/Object/ESBuild.ts
+++ b/Source/Object/ESBuild.ts
- 					from: "./Source/Sheet/TypeDoc.css",
- 					to: "./Sheet/",
+ 					from: "./Source/Stylesheet/TypeDoc.css",
+ 					to: "./Stylesheet/",
diff --git a/Source/Sheet/TypeDoc.css b/Source/Sheet/TypeDoc.css
deleted file mode 100644
index d43ae60..0000000
--- a/Source/Sheet/TypeDoc.css
+++ /dev/null
- :root {
- 	--color-background: #000;
- 	--color-background-secondary: #000;
- }
- 
- .tsd-navigation.settings {
- 	display: none !important;
- }
- 
- #tsd-search .field label {
- 	left: 50%;
- 	margin-left: -20px;
- 	z-index: 1;
- }
diff --git a/Source/Stylesheet/TypeDoc.css b/Source/Stylesheet/TypeDoc.css
new file mode 100644
index 0000000..2a15bee
--- /dev/null
+++ b/Source/Stylesheet/TypeDoc.css
+ :root {
+ 	--dark-color-background: #000;
+ 	--dark-color-background-secondary: #000;
+ 	--dark-code-background: #040404;
+ 	--color-accent: #2463eb;
+ 
+ 	--dark-hl-0: #ffdd00;
+ 	--dark-hl-1: #ff66ff;
+ 	--dark-hl-2: #ff4444;
+ 	--dark-hl-3: #44ffff;
+ 	--dark-hl-4: #44ff44;
+ }
+ 
+ body #tsd-search .field label {
+ 	left: 50%;
+ 	margin-left: -20px;
+ 	z-index: 1;
+ 	text-align: center;
+ }
+ 
+ body #tsd-search.has-focus .field label {
+ 	display: none;
+ }
+ 
+ body #tsd-search .field input {
+ 	z-index: 2;
+ }
+ 
+ body pre,
+ body .tsd-page-toolbar,
+ body .tsd-generator {
+ 	border: none;
+ }
+ 
+ body .tsd-navigation a,
+ body .tsd-navigation summary > span,
+ body .tsd-page-navigation a {
+ 	padding: 0.5rem;
+ 	border-radius: 8px;
+ }
+ 
+ .tsd-signature,
+ .tsd-signatures .tsd-signature,
+ .tsd-typography td,
+ .tsd-typography th {
+ 	border-radius: 12px;
+ 	border-width: 2px;
+ }
diff --git a/tsconfig.json b/tsconfig.json
index 12e0400..48a4366 100644
--- a/tsconfig.json
+++ b/tsconfig.json
- 		"outDir": "Target"
+ 		"outDir": "Target",
+ 		"jsx": "react",
+ 		"jsxFactory": "JSX.createElement",
+ 		"jsxFragmentFactory": "JSX.Fragment"

🗣️ Summary from v0.2.10 to v0.2.11 in .
diff --git a/package.json b/package.json
index 45fa243..f5ce385 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.10",
+ 	"version": "0.2.11",
- 		"typedoc-plugin-remove-references": "0.0.6",
diff --git a/README.md b/README.md
index 780fb99..9093c0a 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.10"
+ 		"typescript-esbuild": "0.2.11"
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
new file mode 100644
index 0000000..c0d8264
--- /dev/null
+++ b/Source/Class/Theme.ts
+ /**
+  * @module Theme
+  *
+  */
+ export default class
+ 	extends (await import("typedoc")).DefaultTheme
+ 	implements Type
+ {
+ 	override buildUrls(...[Reflection, URLs]: Parameters<Type["buildUrls"]>) {
+ 		const { Directory } = this._Mapping(Reflection) ?? {};
+ 
+ 		if (Directory) {
+ 			if (
+ 				!Reflection.url ||
+ 				!DefaultTheme.URL_PREFIX.test(Reflection.url)
+ 			) {
+ 				const URL = [
+ 					Directory,
+ 					`${DefaultTheme.getUrl(Reflection)}.html`,
+ 				].join("/");
+ 
+ 				URLs.push(
+ 					new UrlMapping(URL, Reflection, this.reflectionTemplate)
+ 				);
+ 
+ 				Reflection.url = URL;
+ 				Reflection.hasOwnDocument = true;
+ 			}
+ 
+ 			Reflection.traverse((Child) => {
+ 				if (Child instanceof DeclarationReflection) {
+ 					this.buildUrls(Child, URLs);
+ 				} else {
+ 					DefaultTheme.applyAnchorUrl(Child, Reflection);
+ 				}
+ 
+ 				return true;
+ 			});
+ 		} else if (Reflection.parent) {
+ 			DefaultTheme.applyAnchorUrl(Reflection, Reflection.parent);
+ 		}
+ 
+ 		return URLs;
+ 	}
+ 
+ 	_Mapping = (...[Reflection]: Parameters<Type["_Mapping"]>) =>
+ 		this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));
+ 
+ 	Mapping: Mapping[] = [
+ 		{
+ 			Kind: [ReflectionKind.Class],
+ 			Directory: "Class",
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Interface],
+ 			Directory: "Interface",
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Enum],
+ 			Directory: "Enum",
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Namespace, ReflectionKind.Module],
+ 			Directory: "Module",
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.TypeAlias],
+ 			Directory: "Type",
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Function],
+ 			Directory: "Function",
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Variable],
+ 			Directory: "Variable",
+ 		},
+ 	];
+ }
+ 
+ import type Mapping from "../Interface/Mapping.js";
+ import type Type from "../Interface/Theme.js";
+ 
+ import {
+ 	DeclarationReflection,
+ 	DefaultTheme,
+ 	ReflectionKind,
+ 	UrlMapping,
+ } from "typedoc";
diff --git a/Source/Class/TypeDoc/Theme.ts b/Source/Class/TypeDoc/Theme.ts
deleted file mode 100644
index 2e32798..0000000
--- a/Source/Class/TypeDoc/Theme.ts
+++ /dev/null
- /**
-  * @module TypeDoc
-  *
-  */
- export default class
- 	extends (await import("typedoc")).DefaultTheme
- 	implements Type
- {
- 	override buildUrls(...[Reflection, URLs]: Parameters<Type["buildUrls"]>) {
- 		const { Directory } = this._Mapping(Reflection) ?? {};
- 
- 		if (Directory) {
- 			if (
- 				!Reflection.url ||
- 				!DefaultTheme.URL_PREFIX.test(Reflection.url)
- 			) {
- 				const URL = [
- 					Directory,
- 					`${DefaultTheme.getUrl(Reflection)}.html`,
- 				].join("/");
- 
- 				URLs.push(
- 					new UrlMapping(URL, Reflection, this.reflectionTemplate)
- 				);
- 
- 				Reflection.url = URL;
- 				Reflection.hasOwnDocument = true;
- 			}
- 
- 			Reflection.traverse((Child) => {
- 				if (Child instanceof DeclarationReflection) {
- 					this.buildUrls(Child, URLs);
- 				} else {
- 					DefaultTheme.applyAnchorUrl(Child, Reflection);
- 				}
- 
- 				return true;
- 			});
- 		} else if (Reflection.parent) {
- 			DefaultTheme.applyAnchorUrl(Reflection, Reflection.parent);
- 		}
- 
- 		return URLs;
- 	}
- 
- 	_Mapping = (...[Reflection]: Parameters<Type["_Mapping"]>) =>
- 		this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));
- 
- 	Mapping: Mapping[] = [
- 		{
- 			Kind: [ReflectionKind.Class],
- 			Directory: "Class",
- 		},
- 		{
- 			Kind: [ReflectionKind.Interface],
- 			Directory: "Interface",
- 		},
- 		{
- 			Kind: [ReflectionKind.Enum],
- 			Directory: "Enum",
- 		},
- 		{
- 			Kind: [ReflectionKind.Namespace, ReflectionKind.Module],
- 			Directory: "Module",
- 		},
- 		{
- 			Kind: [ReflectionKind.TypeAlias],
- 			Directory: "Type",
- 		},
- 		{
- 			Kind: [ReflectionKind.Function],
- 			Directory: "Function",
- 		},
- 		{
- 			Kind: [ReflectionKind.Variable],
- 			Directory: "Variable",
- 		},
- 	];
- }
- 
- import type Mapping from "../../Interface/TypeDoc/Mapping.js";
- import type Type from "../../Interface/TypeDoc/Theme.js";
- 
- import {
- 	DeclarationReflection,
- 	DefaultTheme,
- 	ReflectionKind,
- 	UrlMapping,
- } from "typedoc";
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index bf7b301..d9cfacc 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 			`--customCss ${resolve(`${Current}/../Stylesheet/TypeDoc.css`)}`,
+ 			`--customCss ${resolve(`${Current}/../Stylesheet/Theme.css`)}`,
- 			`--plugin ${resolve(
- 				`${Current}/../../Target/Function/TypeDoc.js`
- 			)}`,
- 			"--plugin typedoc-plugin-remove-references",
+ 			`--plugin ${resolve(`${Current}/../../Target/Function/Load.js`)}`,
- 				)?.keywords?.join(" --keywords ") ?? " project "
+ 				)?.keywords?.join(" --keywords ") ?? " typescript-esbuild "
diff --git a/Source/Function/Load.ts b/Source/Function/Load.ts
new file mode 100644
index 0000000..03ebbc2
--- /dev/null
+++ b/Source/Function/Load.ts
+ /**
+  * @module Load
+  *
+  */
+ export const load = (...[Application]: Parameters<Type>) =>
+ 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
+ 
+ import type Type from "../Interface/Load.js";
+ 
+ import Theme from "../Class/Theme.js";
diff --git a/Source/Function/TypeDoc.ts b/Source/Function/TypeDoc.ts
deleted file mode 100644
index af34fa0..0000000
--- a/Source/Function/TypeDoc.ts
+++ /dev/null
- /**
-  * @module TypeDoc
-  *
-  */
- export const load = (...[Application]: Parameters<Type["load"]>) =>
- 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
- 
- import type Type from "../Interface/TypeDoc.js";
- 
- import Theme from "../Class/TypeDoc/Theme.js";
diff --git a/Source/Interface/Load.ts b/Source/Interface/Load.ts
new file mode 100644
index 0000000..c4771e8
--- /dev/null
+++ b/Source/Interface/Load.ts
+ /**
+  * @module Load
+  *
+  */
+ export default interface Type {
+ 	(Application: Application): void;
+ }
+ 
+ import type { Application } from "typedoc";
diff --git a/Source/Interface/Mapping.ts b/Source/Interface/Mapping.ts
new file mode 100644
index 0000000..c083bd8
--- /dev/null
+++ b/Source/Interface/Mapping.ts
+ /**
+  * Defines a mapping of a {@link Models.Kind} to a template file.
+  *
+  * Used by {@link DefaultTheme} to map reflections to output files.
+  *
+  * @module Mapping
+  *
+  */
+ export default interface Type {
+ 	/**
+ 	 * {@link DeclarationReflection.kind} this rule applies to.
+ 	 */
+ 	Kind: ReflectionKind[];
+ 
+ 	/**
+ 	 * The name of the directory the output files should be written to.
+ 	 */
+ 	Directory: string;
+ }
+ 
+ import type { ReflectionKind } from "typedoc";
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
new file mode 100644
index 0000000..e57efb4
--- /dev/null
+++ b/Source/Interface/Theme.ts
+ /**
+  * @module Theme
+  *
+  */
+ export default interface Type {
+ 	buildUrls: (
+ 		Reflection: DeclarationReflection,
+ 		// rome-ignore lint/suspicious/noExplicitAny:
+ 		URLs: UrlMapping<any>[]
+ 		// rome-ignore lint/suspicious/noExplicitAny:
+ 	) => UrlMapping<any>[];
+ 
+ 	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
+ 
+ 	Mapping: Mapping[];
+ }
+ 
+ import type Mapping from "./Mapping.js";
+ 
+ import type { DeclarationReflection, UrlMapping } from "typedoc";
diff --git a/Source/Interface/TypeDoc.ts b/Source/Interface/TypeDoc.ts
deleted file mode 100644
index b114750..0000000
--- a/Source/Interface/TypeDoc.ts
+++ /dev/null
- /**
-  * @module TypeDoc
-  *
-  */
- export default interface Type {
- 	load: (Application: Application) => void;
- }
- 
- import type { Application } from "typedoc";
diff --git a/Source/Interface/TypeDoc/Mapping.ts b/Source/Interface/TypeDoc/Mapping.ts
deleted file mode 100644
index 3a587dc..0000000
--- a/Source/Interface/TypeDoc/Mapping.ts
+++ /dev/null
- /**
-  * Defines a mapping of a {@link Models.Kind} to a template file.
-  *
-  * Used by {@link DefaultTheme} to map reflections to output files.
-  *
-  * @module TypeDoc
-  *
-  */
- export default interface Type {
- 	/**
- 	 * {@link DeclarationReflection.kind} this rule applies to.
- 	 */
- 	Kind: ReflectionKind[];
- 
- 	/**
- 	 * The name of the directory the output files should be written to.
- 	 */
- 	Directory: string;
- }
- 
- import type { ReflectionKind } from "typedoc";
diff --git a/Source/Interface/TypeDoc/Theme.ts b/Source/Interface/TypeDoc/Theme.ts
deleted file mode 100644
index 7efd527..0000000
--- a/Source/Interface/TypeDoc/Theme.ts
+++ /dev/null
- /**
-  * @module TypeDoc
-  *
-  */
- export default interface Type {
- 	buildUrls: (
- 		Reflection: DeclarationReflection,
- 		// rome-ignore lint/suspicious/noExplicitAny:
- 		URLs: UrlMapping<any>[]
- 		// rome-ignore lint/suspicious/noExplicitAny:
- 	) => UrlMapping<any>[];
- 
- 	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
- 
- 	Mapping: Mapping[];
- }
- 
- import type Mapping from "./Mapping.js";
- 
- import type { DeclarationReflection, UrlMapping } from "typedoc";
diff --git a/Source/Object/ESBuild.ts b/Source/Object/ESBuild.ts
index 407c126..ff84d2c 100644
--- a/Source/Object/ESBuild.ts
+++ b/Source/Object/ESBuild.ts
- 					from: "./Source/Stylesheet/TypeDoc.css",
+ 					from: "./Source/Stylesheet/Theme.css",
diff --git a/Source/Stylesheet/Theme.css b/Source/Stylesheet/Theme.css
new file mode 100644
index 0000000..f989798
--- /dev/null
+++ b/Source/Stylesheet/Theme.css
+ :root {
+ 	--dark-color-background: #000;
+ 	--dark-color-background-secondary: #000;
+ 	--dark-code-background: #040404;
+ 	--color-accent: #2463eb;
+ 	--dark-hl-0: #ffdd00;
+ 	--dark-hl-1: #ff66ff;
+ 	--dark-hl-2: #ff4444;
+ 	--dark-hl-3: #44ffff;
+ 	--dark-hl-4: #44ff44;
+ }
+ 
+ body #tsd-search .field label {
+ 	left: 50%;
+ 	margin-left: -20px;
+ 	z-index: 1;
+ 	text-align: center;
+ }
+ 
+ body #tsd-search.has-focus .field label {
+ 	display: none;
+ }
+ 
+ body #tsd-search .field input {
+ 	z-index: 2;
+ }
+ 
+ body pre,
+ body .tsd-page-toolbar,
+ body .tsd-generator {
+ 	border: none;
+ }
+ 
+ body .tsd-navigation a,
+ body .tsd-navigation summary > span,
+ body .tsd-page-navigation a {
+ 	padding: 0.5rem;
+ 	border-radius: 8px;
+ }
+ 
+ body .tsd-signature,
+ body .tsd-signatures .tsd-signature,
+ body .tsd-typography td,
+ body .tsd-typography th {
+ 	border-radius: 12px;
+ 	border-width: 2px;
+ }
diff --git a/Source/Stylesheet/TypeDoc.css b/Source/Stylesheet/TypeDoc.css
deleted file mode 100644
index 2a15bee..0000000
--- a/Source/Stylesheet/TypeDoc.css
+++ /dev/null
- :root {
- 	--dark-color-background: #000;
- 	--dark-color-background-secondary: #000;
- 	--dark-code-background: #040404;
- 	--color-accent: #2463eb;
- 
- 	--dark-hl-0: #ffdd00;
- 	--dark-hl-1: #ff66ff;
- 	--dark-hl-2: #ff4444;
- 	--dark-hl-3: #44ffff;
- 	--dark-hl-4: #44ff44;
- }
- 
- body #tsd-search .field label {
- 	left: 50%;
- 	margin-left: -20px;
- 	z-index: 1;
- 	text-align: center;
- }
- 
- body #tsd-search.has-focus .field label {
- 	display: none;
- }
- 
- body #tsd-search .field input {
- 	z-index: 2;
- }
- 
- body pre,
- body .tsd-page-toolbar,
- body .tsd-generator {
- 	border: none;
- }
- 
- body .tsd-navigation a,
- body .tsd-navigation summary > span,
- body .tsd-page-navigation a {
- 	padding: 0.5rem;
- 	border-radius: 8px;
- }
- 
- .tsd-signature,
- .tsd-signatures .tsd-signature,
- .tsd-typography td,
- .tsd-typography th {
- 	border-radius: 12px;
- 	border-width: 2px;
- }
diff --git a/tsconfig.json b/tsconfig.json
index 48a4366..12e0400 100644
--- a/tsconfig.json
+++ b/tsconfig.json
- 		"outDir": "Target",
- 		"jsx": "react",
- 		"jsxFactory": "JSX.createElement",
- 		"jsxFragmentFactory": "JSX.Fragment"
+ 		"outDir": "Target"

🗣️ Summary from v0.2.11 to v0.2.12 in .
diff --git a/package.json b/package.json
index f5ce385..f6da38a 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.11",
+ 	"version": "0.2.12",
diff --git a/README.md b/README.md
index 9093c0a..138b811 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.11"
+ 		"typescript-esbuild": "0.2.12"
diff --git a/Source/Interface/Load.ts b/Source/Interface/Load.ts
index c4771e8..396740c 100644
--- a/Source/Interface/Load.ts
+++ b/Source/Interface/Load.ts
+  * This module defines the `Load` function, which is used by TypeDoc to load a plugin
+  * into the TypeDoc instance.
+ 	/**
+ 	 * The `Load` function is responsible for loading a plugin into the TypeDoc instance.
+ 	 *
+ 	 * @param Application - The `Application` parameter is an instance of TypeDoc's Application
+ 	 * class, representing the TypeDoc application to which the plugin should be loaded.
+ 	 *
+ 	 */

🗣️ Summary from v0.2.12 to v0.2.13 in .
diff --git a/package.json b/package.json
index f6da38a..1f5dfcb 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.12",
+ 	"version": "0.2.13",
diff --git a/README.md b/README.md
index 138b811..89bd65a 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.12"
+ 		"typescript-esbuild": "0.2.13"
diff --git a/Source/Function/Load.ts b/Source/Function/Load.ts
index 03ebbc2..903ceba 100644
--- a/Source/Function/Load.ts
+++ b/Source/Function/Load.ts
+ export default load;
+ 
diff --git a/Source/Interface/Load.ts b/Source/Interface/Load.ts
index 396740c..e2a5041 100644
--- a/Source/Interface/Load.ts
+++ b/Source/Interface/Load.ts
-  * This module defines the `Load` function, which is used by TypeDoc to load a plugin
-  * into the TypeDoc instance.

🗣️ Summary from v0.2.13 to v0.2.14 in .
diff --git a/package.json b/package.json
index 1f5dfcb..04f562c 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.13",
+ 	"version": "0.2.14",
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts' 'Source/**/*.tsx'"
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts'"
+ 		"typedoc-plugin-remove-references": "0.0.6",
diff --git a/README.md b/README.md
index 89bd65a..47c19bc 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.13"
+ 		"typescript-esbuild": "0.2.14"
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index d9cfacc..d6957b2 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
+ 			"--plugin typedoc-plugin-remove-references",
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 0d71924..749769c 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 		const Exec = (await import("child_process")).exec(Command);
+ 		const { stdout } = (await import("child_process")).exec(Command);
- 			Exec.stdout?.on("data", (Data) => Echo(Data));
+ 			stdout?.on("data", (Data) => Echo(Data));
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
index ca1a77f..0362f0f 100644
--- a/Source/Interface/Build.ts
+++ b/Source/Interface/Build.ts
- 			ESBuild?: string;
- 			TypeScript?: string;
+ 			ESBuild?: string | undefined;
+ 			TypeScript?: string | undefined;

🗣️ Summary from v0.2.14 to v0.2.15 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 16ee310..ab40ca2 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-                           --child-concurrency=9999,
-                           --network-concurrency=9999,
diff --git a/package.json b/package.json
index 04f562c..387bdb5 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.14",
+ 	"version": "0.2.15",
- 		"@types/node": "20.8.2",
+ 		"@types/node": "20.8.4",
- 		"typedoc": "0.25.1",
+ 		"typedoc": "0.25.2",
- 		"typescript": "5.2.2"
+ 		"typescript": "next"
diff --git a/README.md b/README.md
index 47c19bc..8922d7d 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.14"
+ 		"typescript-esbuild": "0.2.15"
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index d6957b2..0969dff 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 	const Configuration = deepmerge(
+ 	const Configuration = Merge(
- 						? deepmerge(
+ 						? Merge(
- export const { deepmerge } = await import("deepmerge-ts");
+ export const { default: Merge } = await import("../Function/Merge.js");
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
new file mode 100644
index 0000000..1b55413
--- /dev/null
+++ b/Source/Function/Merge.ts
+ /**
+  * @module Merge
+  *
+  */
+ export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
+ 	mergeArrays: false,
+ }) satisfies Type<Generic> as Type<Generic>;
+ 
+ import type Type from "../Interface/Merge.js";
+ import type { Generic } from "../Interface/Merge.js";
+ 
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
new file mode 100644
index 0000000..43c5204
--- /dev/null
+++ b/Source/Interface/Merge.ts
+ /**
+  * @module Merge
+  *
+  * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeMergeFunctionsURIs.
+  *
+  * @template PMF - A type parameter representing Partial<DeepMergeMergeFunctionsURIs>.
+  */
+ export default interface Type<
+ 	PMF extends Partial<DeepMergeMergeFunctionsURIs>,
+ > {
+ 	/**
+ 	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
+ 	 *
+ 	 * @param ...Objects - An arbitrary number of objects to be merged.
+ 	 *
+ 	 * @returns DeepMergeHKT - A type representing the result of the deep merge operation.
+ 	 */
+ 	<Ts extends ReadonlyArray<unknown>>(
+ 		...Objects: Ts
+ 	): DeepMergeHKT<
+ 		Ts,
+ 		GetDeepMergeMergeFunctionsURIs<PMF>,
+ 		DeepMergeBuiltInMetaData
+ 	>;
+ }
+ 
+ export interface Generic {
+ 	DeepMergeArraysURI: DeepMergeLeafURI;
+ }
+ 
+ import type {
+ 	DeepMergeBuiltInMetaData,
+ 	DeepMergeHKT,
+ 	DeepMergeLeafURI,
+ 	DeepMergeMergeFunctionsURIs,
+ 	GetDeepMergeMergeFunctionsURIs,
+ } from "deepmerge-ts";
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
index e57efb4..d0f307e 100644
--- a/Source/Interface/Theme.ts
+++ b/Source/Interface/Theme.ts
+  * Represents an interface for defining a theme with various methods and properties.
+ 	/**
+ 	 * A function that builds URLs for a given DeclarationReflection and an array of URL mappings.
+ 	 *
+ 	 * @param Reflection - The DeclarationReflection for which URLs are being built.
+ 	 *
+ 	 * @param URLs - An array of URL mappings with any data type.
+ 	 *
+ 	 * @returns An array of URL mappings with any data type.
+ 	 */
+ 	/**
+ 	 * A function that maps a DeclarationReflection to a Mapping or returns undefined.
+ 	 *
+ 	 * @param Reflection - The DeclarationReflection to map to a Mapping.
+ 	 * @returns The Mapping associated with the DeclarationReflection or undefined.
+ 	 */
+ 	/**
+ 	 * An array of Mappings representing the theme's mapping configuration.
+ 	 */

🗣️ Summary from v0.2.15 to v0.2.16 in .
diff --git a/package.json b/package.json
index 387bdb5..c4ba7e8 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.15",
+ 	"version": "0.2.16",
- 		"@types/node": "20.8.4",
- 		"commander": "11.0.0",
+ 		"@types/node": "20.8.6",
+ 		"commander": "11.1.0",
- 		"typescript": "next"
+ 		"typescript": "5.2.2"
diff --git a/README.md b/README.md
index 8922d7d..fd980e3 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.15"
+ 		"typescript-esbuild": "0.2.16"
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
index c0d8264..b2a80d3 100644
--- a/Source/Class/Theme.ts
+++ b/Source/Class/Theme.ts
- 				!Reflection.url ||
- 				!DefaultTheme.URL_PREFIX.test(Reflection.url)
+ 				!(
+ 					Reflection.url &&
+ 					DefaultTheme.URL_PREFIX.test(Reflection.url)
+ 				)
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index 0969dff..e5a6b3b 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 	File.forEach(async (File) =>
- 		(
- 			await (
+ 	for (const _File of File) {
+ 		for (const __File of await (
- 			).default(File.replaceAll("'", "").replaceAll('"', ""))
- 		).forEach((File) => Pipe.push(File))
- 	);
+ 		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
+ 			Pipe.push(__File);
+ 		}
+ 	}
- 		(await import("../Object/ESBuild.js")).default,
+ 		(await import("../Variable/ESBuild.js")).default,
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 50666a4..707ecac 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 		// rome-ignore lint/suspicious/noExplicitAny:
+ 		// biome-ignore lint/suspicious/noExplicitAny:
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
index 3e41884..9f260f3 100644
--- a/Source/Interface/File.ts
+++ b/Source/Interface/File.ts
- 	// rome-ignore lint/suspicious/noExplicitAny:
+ 	// biome-ignore lint/suspicious/noExplicitAny:
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
index 43c5204..af3930a 100644
--- a/Source/Interface/Merge.ts
+++ b/Source/Interface/Merge.ts
- 	<Ts extends ReadonlyArray<unknown>>(
+ 	<Ts extends readonly unknown[]>(
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
index d0f307e..d3816c6 100644
--- a/Source/Interface/Theme.ts
+++ b/Source/Interface/Theme.ts
- 		// rome-ignore lint/suspicious/noExplicitAny:
+ 		// biome-ignore lint/suspicious/noExplicitAny:
- 		// rome-ignore lint/suspicious/noExplicitAny:
+ 		// biome-ignore lint/suspicious/noExplicitAny:
diff --git a/Source/Object/ESBuild.ts b/Source/Object/ESBuild.ts
deleted file mode 100644
index ff84d2c..0000000
--- a/Source/Object/ESBuild.ts
+++ /dev/null
- /**
-  * @module ESBuild
-  *
-  */
- export default {
- 	color: true,
- 	format: "esm",
- 	metafile: true,
- 	minify: true,
- 	outdir: "Target",
- 	platform: "node",
- 	target: "esnext",
- 	write: true,
- 	logLevel: "debug",
- 	plugins: [
- 		{
- 			name: "Target",
- 			setup({ onStart, initialOptions: { outdir } }) {
- 				onStart(async () => {
- 					try {
- 						outdir
- 							? await (
- 									await import("fs/promises")
- 							  ).rm(outdir, {
- 									recursive: true,
- 							  })
- 							: {};
- 					} catch (_Error) {}
- 				});
- 			},
- 		},
- 		(await import("esbuild-plugin-copy")).copy({
- 			resolveFrom: "out",
- 			assets: [
- 				{
- 					from: "./Source/Notation/TypeScript.json",
- 					to: "./Notation/",
- 				},
- 				{
- 					from: "./Source/Stylesheet/Theme.css",
- 					to: "./Stylesheet/",
- 				},
- 			],
- 		}),
- 	],
- 	define: {
- 		"process.env.VERSION_PACKAGE": `'${(
- 			await (await import("../Function/JSON.js")).default("package.json")
- 		)?.version}'`,
- 	},
- } satisfies BuildOptions as BuildOptions;
- 
- import type { BuildOptions } from "esbuild";
diff --git a/Source/Stylesheet/Theme.css b/Source/Stylesheet/Theme.css
index f989798..b34cb5d 100644
--- a/Source/Stylesheet/Theme.css
+++ b/Source/Stylesheet/Theme.css
+ body .tsd-description .tsd-signatures .tsd-signature,
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
new file mode 100644
index 0000000..ff84d2c
--- /dev/null
+++ b/Source/Variable/ESBuild.ts
+ /**
+  * @module ESBuild
+  *
+  */
+ export default {
+ 	color: true,
+ 	format: "esm",
+ 	metafile: true,
+ 	minify: true,
+ 	outdir: "Target",
+ 	platform: "node",
+ 	target: "esnext",
+ 	write: true,
+ 	logLevel: "debug",
+ 	plugins: [
+ 		{
+ 			name: "Target",
+ 			setup({ onStart, initialOptions: { outdir } }) {
+ 				onStart(async () => {
+ 					try {
+ 						outdir
+ 							? await (
+ 									await import("fs/promises")
+ 							  ).rm(outdir, {
+ 									recursive: true,
+ 							  })
+ 							: {};
+ 					} catch (_Error) {}
+ 				});
+ 			},
+ 		},
+ 		(await import("esbuild-plugin-copy")).copy({
+ 			resolveFrom: "out",
+ 			assets: [
+ 				{
+ 					from: "./Source/Notation/TypeScript.json",
+ 					to: "./Notation/",
+ 				},
+ 				{
+ 					from: "./Source/Stylesheet/Theme.css",
+ 					to: "./Stylesheet/",
+ 				},
+ 			],
+ 		}),
+ 	],
+ 	define: {
+ 		"process.env.VERSION_PACKAGE": `'${(
+ 			await (await import("../Function/JSON.js")).default("package.json")
+ 		)?.version}'`,
+ 	},
+ } satisfies BuildOptions as BuildOptions;
+ 
+ import type { BuildOptions } from "esbuild";

🗣️ Summary from v0.2.16 to v0.2.17 in .
diff --git a/.npmignore b/.npmignore
index 4639469..d0265ba 100644
--- a/.npmignore
+++ b/.npmignore
- .turbo/
+ Source/
+ Documentation/
- Source/
- Documentation/
diff --git a/package.json b/package.json
index c4ba7e8..74d55e7 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.16",
+ 	"version": "0.2.17",
diff --git a/README.md b/README.md
index fd980e3..7abf1d9 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.16"
+ 		"typescript-esbuild": "0.2.17"
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
index b2a80d3..ee97d15 100644
--- a/Source/Class/Theme.ts
+++ b/Source/Class/Theme.ts
- import {
+ export const {
- } from "typedoc";
+ } = await import("typedoc");
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index e5a6b3b..50016fd 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 			`--plugin ${resolve(`${Current}/../../Target/Function/Load.js`)}`,
+ 			`--plugin ${resolve(`${Current}/../../Target/Variable/Load.js`)}`,
diff --git a/Source/Function/Load.ts b/Source/Function/Load.ts
deleted file mode 100644
index 903ceba..0000000
--- a/Source/Function/Load.ts
+++ /dev/null
- /**
-  * @module Load
-  *
-  */
- export const load = (...[Application]: Parameters<Type>) =>
- 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
- 
- export default load;
- 
- import type Type from "../Interface/Load.js";
- 
- import Theme from "../Class/Theme.js";
diff --git a/Source/Stylesheet/Theme.css b/Source/Stylesheet/Theme.css
index b34cb5d..e3a4462 100644
--- a/Source/Stylesheet/Theme.css
+++ b/Source/Stylesheet/Theme.css
- body .tsd-typography th {
+ body .tsd-typography th,
+ body code.tsd-tag {
diff --git a/Source/Variable/Load.ts b/Source/Variable/Load.ts
new file mode 100644
index 0000000..903ceba
--- /dev/null
+++ b/Source/Variable/Load.ts
+ /**
+  * @module Load
+  *
+  */
+ export const load = (...[Application]: Parameters<Type>) =>
+ 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
+ 
+ export default load;
+ 
+ import type Type from "../Interface/Load.js";
+ 
+ import Theme from "../Class/Theme.js";

🗣️ Summary from v0.2.17 to v0.2.18 in .
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index dcb957d..ffde8df 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
-             - uses: pozil/auto-assign-issue@v1.12.0
+             - uses: pozil/auto-assign-issue@v1.13.0
diff --git a/package.json b/package.json
index 74d55e7..2fdafc7 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.17",
+ 	"version": "0.2.18",
- 		"esbuild": "0.19.4",
+ 		"esbuild": "0.19.5",
diff --git a/README.md b/README.md
index 7abf1d9..7317f13 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.17"
+ 		"typescript-esbuild": "0.2.18"
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
index ee97d15..09ea6f9 100644
--- a/Source/Class/Theme.ts
+++ b/Source/Class/Theme.ts
- 			if (
- 				!(
- 					Reflection.url &&
- 					DefaultTheme.URL_PREFIX.test(Reflection.url)
- 				)
- 			) {
- 				const URL = [
- 					Directory,
- 					`${DefaultTheme.getUrl(Reflection)}.html`,
- 				].join("/");
+ 			if (!(Reflection.url && URL_PREFIX.test(Reflection.url))) {
+ 				const URL = [Directory, `${getUrl(Reflection)}.html`].join("/");
- 					DefaultTheme.applyAnchorUrl(Child, Reflection);
+ 					applyAnchorUrl(Child, Reflection);
- 			DefaultTheme.applyAnchorUrl(Reflection, Reflection.parent);
+ 			applyAnchorUrl(Reflection, Reflection.parent);
- 			Kind: [ReflectionKind.Class],
+ 			Kind: [Class],
- 			Kind: [ReflectionKind.Interface],
+ 			Kind: [Interface],
- 			Kind: [ReflectionKind.Enum],
+ 			Kind: [Enum],
- 			Kind: [ReflectionKind.Namespace, ReflectionKind.Module],
+ 			Kind: [Namespace, Module],
- 			Kind: [ReflectionKind.TypeAlias],
+ 			Kind: [TypeAlias],
- 			Kind: [ReflectionKind.Function],
+ 			Kind: [_Function],
- 			Kind: [ReflectionKind.Variable],
+ 			Kind: [Variable],
- 	DefaultTheme,
- 	ReflectionKind,
+ 	DefaultTheme: { URL_PREFIX, getUrl, applyAnchorUrl },
+ 	ReflectionKind: {
+ 		Interface,
+ 		Class,
+ 		Enum,
+ 		Namespace,
+ 		Module,
+ 		TypeAlias,
+ 		Function: _Function,
+ 		Variable,
+ 	},
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
index 0362f0f..ca1a77f 100644
--- a/Source/Interface/Build.ts
+++ b/Source/Interface/Build.ts
- 			ESBuild?: string | undefined;
- 			TypeScript?: string | undefined;
+ 			ESBuild?: string;
+ 			TypeScript?: string;
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 707ecac..0f96c7e 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 	 * @param {string} Command - The 'Command' parameter is a string that represents the
+ 	 * @param Command - The 'Command' parameter is a string that represents the
- 	 * @param {boolean|function} [Echo] - An optional parameter that controls whether the stdout
+ 	 * @param Echo - An optional parameter that controls whether the stdout
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
index 9f260f3..607aee2 100644
--- a/Source/Interface/File.ts
+++ b/Source/Interface/File.ts
- 	 * @param {string} Path - The 'Path' parameter is a string that represents the file path of the file
+ 	 * @param Path - The 'Path' parameter is a string that represents the file path of the file
diff --git a/Source/Interface/Load.ts b/Source/Interface/Load.ts
index e2a5041..fda2db9 100644
--- a/Source/Interface/Load.ts
+++ b/Source/Interface/Load.ts
- 	(Application: Application): void;
+ 	load: (Application: Application) => void;
diff --git a/Source/Interface/Mapping.ts b/Source/Interface/Mapping.ts
index c083bd8..5b91846 100644
--- a/Source/Interface/Mapping.ts
+++ b/Source/Interface/Mapping.ts
+  * @module Mapping
+  *
-  * @module Mapping
-  *
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
index af3930a..5e66d23 100644
--- a/Source/Interface/Merge.ts
+++ b/Source/Interface/Merge.ts
+  *
- 	 * @returns DeepMergeHKT - A type representing the result of the deep merge operation.
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
index d3816c6..27a7277 100644
--- a/Source/Interface/Theme.ts
+++ b/Source/Interface/Theme.ts
- 	 * A function that builds URLs for a given DeclarationReflection and an array of URL mappings.
+ 	 * A function that builds URLs for a given DeclarationReflection and an array of URLs mappings.
- 	 * @param URLs - An array of URL mappings with any data type.
+ 	 * @param URLs - An array of URLs mappings with any data type.
- 	 * @returns An array of URL mappings with any data type.
- 	 * @returns The Mapping associated with the DeclarationReflection or undefined.
+ 	 *
diff --git a/Source/Type/Value.ts b/Source/Type/Value.ts
new file mode 100644
index 0000000..7c1f62c
--- /dev/null
+++ b/Source/Type/Value.ts
+ /**
+  * @module Value
+  *
+  */
+ export type Type<T> = T[keyof T];
+ 
+ export type { Type as default };
diff --git a/Source/Variable/Load.ts b/Source/Variable/Load.ts
index 903ceba..5281fbc 100644
--- a/Source/Variable/Load.ts
+++ b/Source/Variable/Load.ts
- export const load = (...[Application]: Parameters<Type>) =>
+ export const load = (...[Application]: Parameters<Type["load"]>) =>
- export default load;
+ export default {
+ 	load,
+ } satisfies Type as Type;
- import Theme from "../Class/Theme.js";
+ export const { default: Theme } = await import("../Class/Theme.js");

🗣️ Summary from v0.2.18 to v0.2.19 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index ab40ca2..e70fa64 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v4.1.0
+             - uses: actions/checkout@v4.1.1
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 2551c53..b8f4d7b 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/checkout@v4.1.0
+             - uses: actions/checkout@v4.1.1
diff --git a/package.json b/package.json
index 2fdafc7..2a082c2 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.18",
+ 	"version": "0.2.19",
- 		"@types/node": "20.8.6",
+ 		"@types/node": "20.8.7",
- 		"typedoc-plugin-rename-defaults": "0.6.6",
+ 		"typedoc-plugin-rename-defaults": "0.6.7",
diff --git a/README.md b/README.md
index 7317f13..a8f4294 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.18"
+ 		"typescript-esbuild": "0.2.19"
diff --git a/Source/Notation/TypeScript.json b/Source/Notation/TypeScript.json
index 8978670..05f941d 100644
--- a/Source/Notation/TypeScript.json
+++ b/Source/Notation/TypeScript.json
- 		"verbatimModuleSyntax": true
+ 		"verbatimModuleSyntax": true,
+ 		"noImplicitThis": true

🗣️ Summary from v0.2.19 to v0.2.2 in .
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index ffde8df..dcb957d 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
-             - uses: pozil/auto-assign-issue@v1.13.0
+             - uses: pozil/auto-assign-issue@v1.12.0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index e70fa64..16ee310 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v4.1.1
+             - uses: actions/checkout@v4.1.0
+                           --child-concurrency=9999,
+                           --network-concurrency=9999,
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index b8f4d7b..2551c53 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/checkout@v4.1.1
+             - uses: actions/checkout@v4.1.0
diff --git a/.npmignore b/.npmignore
index d0265ba..4639469 100644
--- a/.npmignore
+++ b/.npmignore
- Source/
- Documentation/
+ .turbo/
+ Source/
+ Documentation/
diff --git a/package.json b/package.json
index 2a082c2..f344a98 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.19",
+ 	"version": "0.2.2",
- 	"description": "🌀 Builds all your TypeScript files into JavaScript and generates documentation for it using TypeDoc.",
+ 	"description": "🌀 Builds all your TypeScript files into JavaScript from a given folder using esbuild.",
- 		"esbuild",
- 		"typedoc"
+ 		"esbuild"
- 		"@types/node": "20.8.7",
- 		"commander": "11.1.0",
+ 		"@types/node": "20.8.0",
+ 		"commander": "11.0.0",
- 		"esbuild": "0.19.5",
+ 		"esbuild": "0.19.4",
- 		"typedoc": "0.25.2",
- 		"typedoc-plugin-keywords": "1.5.0",
+ 		"typedoc": "0.25.1",
- 		"typedoc-plugin-rename-defaults": "0.6.7",
+ 		"typedoc-plugin-rename-defaults": "0.6.6",
+ 		"@cloudflare/workers-types": "4.20230922.0",
+ 		"@types/node": "20.8.0",
diff --git a/README.md b/README.md
index a8f4294..d5b0459 100644
--- a/README.md
+++ b/README.md
- Builds all your TypeScript files into JavaScript and generates documentation for
- it using [TypeDoc][typedoc].
+ Builds all your TypeScript files into JavaScript.
- 	"devDependencies": {
- 		"typescript-esbuild": "0.2.19"
+ 	"dependencies": {
+ 		"typescript-esbuild": "0.1.16"
- ### ESBuild Configuration
- 
- Or with a custom esbuild config file:
+ #### or with a custom esbuild config file:
- See an example of a configuration file in [ESBuild.ts](Source/Object/ESBuild.ts)
- 
- ### TypeScript Configuration
+ #### See an example of a configuration file in [Configuration.ts](Source/Object/Configuration.ts)
- [esbuild]: https://npmjs.org/esbuild
- [typedoc]: https://npmjs.org/typedoc
+ [esbuild]: https://npmjs.org/esbuild
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
deleted file mode 100644
index 09ea6f9..0000000
--- a/Source/Class/Theme.ts
+++ /dev/null
- /**
-  * @module Theme
-  *
-  */
- export default class
- 	extends (await import("typedoc")).DefaultTheme
- 	implements Type
- {
- 	override buildUrls(...[Reflection, URLs]: Parameters<Type["buildUrls"]>) {
- 		const { Directory } = this._Mapping(Reflection) ?? {};
- 
- 		if (Directory) {
- 			if (!(Reflection.url && URL_PREFIX.test(Reflection.url))) {
- 				const URL = [Directory, `${getUrl(Reflection)}.html`].join("/");
- 
- 				URLs.push(
- 					new UrlMapping(URL, Reflection, this.reflectionTemplate)
- 				);
- 
- 				Reflection.url = URL;
- 				Reflection.hasOwnDocument = true;
- 			}
- 
- 			Reflection.traverse((Child) => {
- 				if (Child instanceof DeclarationReflection) {
- 					this.buildUrls(Child, URLs);
- 				} else {
- 					applyAnchorUrl(Child, Reflection);
- 				}
- 
- 				return true;
- 			});
- 		} else if (Reflection.parent) {
- 			applyAnchorUrl(Reflection, Reflection.parent);
- 		}
- 
- 		return URLs;
- 	}
- 
- 	_Mapping = (...[Reflection]: Parameters<Type["_Mapping"]>) =>
- 		this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));
- 
- 	Mapping: Mapping[] = [
- 		{
- 			Kind: [Class],
- 			Directory: "Class",
- 		},
- 		{
- 			Kind: [Interface],
- 			Directory: "Interface",
- 		},
- 		{
- 			Kind: [Enum],
- 			Directory: "Enum",
- 		},
- 		{
- 			Kind: [Namespace, Module],
- 			Directory: "Module",
- 		},
- 		{
- 			Kind: [TypeAlias],
- 			Directory: "Type",
- 		},
- 		{
- 			Kind: [_Function],
- 			Directory: "Function",
- 		},
- 		{
- 			Kind: [Variable],
- 			Directory: "Variable",
- 		},
- 	];
- }
- 
- import type Mapping from "../Interface/Mapping.js";
- import type Type from "../Interface/Theme.js";
- 
- export const {
- 	DeclarationReflection,
- 	DefaultTheme: { URL_PREFIX, getUrl, applyAnchorUrl },
- 	ReflectionKind: {
- 		Interface,
- 		Class,
- 		Enum,
- 		Namespace,
- 		Module,
- 		TypeAlias,
- 		Function: _Function,
- 		Variable,
- 	},
- 	UrlMapping,
- } = await import("typedoc");
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index 50016fd..c18a650 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 	for (const _File of File) {
- 		for (const __File of await (
+ 	File.forEach(async (File) =>
+ 		(
+ 			await (
- 		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
- 			Pipe.push(__File);
- 		}
- 	}
+ 			).default(File.replaceAll("'", "").replaceAll('"', ""))
+ 		).forEach((File) => Pipe.push(File))
+ 	);
- 	const Configuration = Merge(
- 		(await import("../Variable/ESBuild.js")).default,
+ 	const Configuration = deepmerge(
+ 		(await import("../Object/ESBuild.js")).default,
- 	console.log(
- 		await (
- 			await import("esbuild")
- 		).analyzeMetafile(
- 			(
- 				await (
+ 	const { metafile } = await (
- 						? Merge(
+ 			? deepmerge(
- 				)
- 			)?.metafile ?? "",
- 			{
+ 	);
+ 
+ 	console.log(
+ 		metafile
+ 			? await (
+ 					await import("esbuild")
+ 			  ).analyzeMetafile(metafile, {
- 			}
- 		)
+ 			  })
+ 			: {}
- 	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
+ 	if (Option?.TypeScript) {
+ 		Exec(`tsc -p ${Option.TypeScript}`);
+ 	} else {
+ 		Exec("tsc");
+ 	}
- 		[
- 			"typedoc",
- 			"--commentStyle all",
- 			"--gitRevision main",
- 			`--customCss ${resolve(`${Current}/../Stylesheet/Theme.css`)}`,
- 			"--includeVersion",
- 			"--out ./Documentation",
- 			`--plugin ${resolve(`${Current}/../../Target/Variable/Load.js`)}`,
- 			"--plugin typedoc-plugin-remove-references",
- 			"--plugin typedoc-plugin-rename-defaults",
- 			"--plugin typedoc-plugin-mdn-links",
- 			"--plugin typedoc-plugin-zod",
- 			"--plugin typedoc-plugin-merge-modules",
- 			"--plugin typedoc-plugin-keywords",
- 			`--keywords ${
- 				(
- 					await (
- 						await import("../Function/JSON.js")
- 					).default("package.json", process.cwd())
- 				)?.keywords?.join(" --keywords ") ?? " typescript-esbuild "
- 			}`,
- 			"--theme TypeScriptESBuild",
- 			"--entryPointStrategy expand",
- 			"--mergeModulesRenameDefaults",
- 			"--mergeModulesMergeMode module",
- 			`--entryPoints ${Object.values(Configuration.entryPoints).join(
+ 		`typedoc \
+ 			--commentStyle all \
+ 			--gitRevision main \
+ 			--customCss ${resolve(`${Current}/../Sheet/TypeDoc.css`)} \
+ 			--includeVersion \
+ 			--out ./Documentation \
+ 			--plugin typedoc-plugin-remove-references \
+ 			--plugin typedoc-plugin-rename-defaults \
+ 			--plugin typedoc-plugin-mdn-links \
+ 			--plugin typedoc-plugin-zod \
+ 			--plugin typedoc-plugin-merge-modules \
+ 			--entryPointStrategy expand \
+ 			--mergeModulesRenameDefaults \
+ 			--mergeModulesMergeMode module \
+ 			--entryPoints ${Object.values(Configuration.entryPoints).join(
- 			)}`,
- 		].join(" ")
+ 			)} && \
+ 			mv ./Documentation/functions ./Documentation/Function && \
+ 			find ./Documentation/ -iname *.html -exec sed -i -E 's:(href=".*)functions/:\\1Function/:g' {} \;`
- export const { default: Merge } = await import("../Function/Merge.js");
+ export const { deepmerge } = await import("deepmerge-ts");
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 749769c..0d71924 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 		const { stdout } = (await import("child_process")).exec(Command);
+ 		const Exec = (await import("child_process")).exec(Command);
- 			stdout?.on("data", (Data) => Echo(Data));
+ 			Exec.stdout?.on("data", (Data) => Echo(Data));
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 0137920..6219be1 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- 				).default(
- 					"../Notation/TypeScript.json",
- 					(await import("path")).dirname(
- 						(await import("url")).fileURLToPath(import.meta.url)
- 					)
- 				)
+ 				).default("../Notation/TypeScript.json", import.meta.url)
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 20a4ba4..504dc40 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- 			).readFile(`${From ?? "."}/${File}`, "utf-8")
+ 			).readFile(
+ 				`${
+ 					From
+ 						? (await import("path")).dirname(
+ 								(await import("url")).fileURLToPath(
+ 									From ?? import.meta.url
+ 								)
+ 						  )
+ 						: "."
+ 				}/${File}`,
+ 				"utf-8"
+ 			)
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
deleted file mode 100644
index 8586054..0000000
--- a/Source/Function/Merge.ts
+++ /dev/null
- /**
-  * @module Merge
-  *
-  */
- export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
- 	mergeArrays: false,
- }) satisfies Type<Generic> as Type<Generic>;
- 
- import type Type from "../Interface/Merge.js";
- import type { Generic } from "../Interface/Merge.js";
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 0f96c7e..50666a4 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 	 * @param Command - The 'Command' parameter is a string that represents the
+ 	 * @param {string} Command - The 'Command' parameter is a string that represents the
- 	 * @param Echo - An optional parameter that controls whether the stdout
+ 	 * @param {boolean|function} [Echo] - An optional parameter that controls whether the stdout
- 		// biome-ignore lint/suspicious/noExplicitAny:
+ 		// rome-ignore lint/suspicious/noExplicitAny:
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
index 607aee2..d028236 100644
--- a/Source/Interface/File.ts
+++ b/Source/Interface/File.ts
- 	 * @param Path - The 'Path' parameter is a string that represents the file path of the file
+ 	 * @param {string} Path - The 'Path' parameter is a string that represents the file path of the file
- 	// biome-ignore lint/suspicious/noExplicitAny:
+ 	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
diff --git a/Source/Interface/Load.ts b/Source/Interface/Load.ts
deleted file mode 100644
index fda2db9..0000000
--- a/Source/Interface/Load.ts
+++ /dev/null
- /**
-  * @module Load
-  *
-  */
- export default interface Type {
- 	/**
- 	 * The `Load` function is responsible for loading a plugin into the TypeDoc instance.
- 	 *
- 	 * @param Application - The `Application` parameter is an instance of TypeDoc's Application
- 	 * class, representing the TypeDoc application to which the plugin should be loaded.
- 	 *
- 	 */
- 	load: (Application: Application) => void;
- }
- 
- import type { Application } from "typedoc";
diff --git a/Source/Interface/Mapping.ts b/Source/Interface/Mapping.ts
deleted file mode 100644
index 5b91846..0000000
--- a/Source/Interface/Mapping.ts
+++ /dev/null
- /**
-  * @module Mapping
-  *
-  * Defines a mapping of a {@link Models.Kind} to a template file.
-  *
-  * Used by {@link DefaultTheme} to map reflections to output files.
-  *
-  */
- export default interface Type {
- 	/**
- 	 * {@link DeclarationReflection.kind} this rule applies to.
- 	 */
- 	Kind: ReflectionKind[];
- 
- 	/**
- 	 * The name of the directory the output files should be written to.
- 	 */
- 	Directory: string;
- }
- 
- import type { ReflectionKind } from "typedoc";
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
deleted file mode 100644
index 5e66d23..0000000
--- a/Source/Interface/Merge.ts
+++ /dev/null
- /**
-  * @module Merge
-  *
-  * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeMergeFunctionsURIs.
-  *
-  * @template PMF - A type parameter representing Partial<DeepMergeMergeFunctionsURIs>.
-  *
-  */
- export default interface Type<
- 	PMF extends Partial<DeepMergeMergeFunctionsURIs>,
- > {
- 	/**
- 	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
- 	 *
- 	 * @param ...Objects - An arbitrary number of objects to be merged.
- 	 *
- 	 */
- 	<Ts extends readonly unknown[]>(
- 		...Objects: Ts
- 	): DeepMergeHKT<
- 		Ts,
- 		GetDeepMergeMergeFunctionsURIs<PMF>,
- 		DeepMergeBuiltInMetaData
- 	>;
- }
- 
- export interface Generic {
- 	DeepMergeArraysURI: DeepMergeLeafURI;
- }
- 
- import type {
- 	DeepMergeBuiltInMetaData,
- 	DeepMergeHKT,
- 	DeepMergeLeafURI,
- 	DeepMergeMergeFunctionsURIs,
- 	GetDeepMergeMergeFunctionsURIs,
- } from "deepmerge-ts";
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
deleted file mode 100644
index 27a7277..0000000
--- a/Source/Interface/Theme.ts
+++ /dev/null
- /**
-  * @module Theme
-  *
-  * Represents an interface for defining a theme with various methods and properties.
-  */
- export default interface Type {
- 	/**
- 	 * A function that builds URLs for a given DeclarationReflection and an array of URLs mappings.
- 	 *
- 	 * @param Reflection - The DeclarationReflection for which URLs are being built.
- 	 *
- 	 * @param URLs - An array of URLs mappings with any data type.
- 	 *
- 	 */
- 	buildUrls: (
- 		Reflection: DeclarationReflection,
- 		// biome-ignore lint/suspicious/noExplicitAny:
- 		URLs: UrlMapping<any>[]
- 		// biome-ignore lint/suspicious/noExplicitAny:
- 	) => UrlMapping<any>[];
- 
- 	/**
- 	 * A function that maps a DeclarationReflection to a Mapping or returns undefined.
- 	 *
- 	 * @param Reflection - The DeclarationReflection to map to a Mapping.
- 	 *
- 	 */
- 	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
- 
- 	/**
- 	 * An array of Mappings representing the theme's mapping configuration.
- 	 */
- 	Mapping: Mapping[];
- }
- 
- import type Mapping from "./Mapping.js";
- 
- import type { DeclarationReflection, UrlMapping } from "typedoc";
diff --git a/Source/Notation/TypeScript.json b/Source/Notation/TypeScript.json
index 05f941d..8978670 100644
--- a/Source/Notation/TypeScript.json
+++ b/Source/Notation/TypeScript.json
- 		"verbatimModuleSyntax": true,
- 		"noImplicitThis": true
+ 		"verbatimModuleSyntax": true
diff --git a/Source/Object/ESBuild.ts b/Source/Object/ESBuild.ts
new file mode 100644
index 0000000..1c99a33
--- /dev/null
+++ b/Source/Object/ESBuild.ts
+ /**
+  * @module ESBuild
+  *
+  */
+ export default {
+ 	color: true,
+ 	format: "esm",
+ 	metafile: true,
+ 	minify: true,
+ 	outdir: "Target",
+ 	platform: "node",
+ 	target: "esnext",
+ 	write: true,
+ 	logLevel: "debug",
+ 	plugins: [
+ 		{
+ 			name: "Target",
+ 			setup({ onStart, initialOptions: { outdir } }) {
+ 				onStart(async () => {
+ 					try {
+ 						outdir
+ 							? await (
+ 									await import("fs/promises")
+ 							  ).rm(outdir, {
+ 									recursive: true,
+ 							  })
+ 							: {};
+ 					} catch (_Error) {}
+ 				});
+ 			},
+ 		},
+ 		(await import("esbuild-plugin-copy")).copy({
+ 			resolveFrom: "out",
+ 			assets: [
+ 				{
+ 					from: "./Source/Notation/TypeScript.json",
+ 					to: "./Notation/",
+ 				},
+ 				{
+ 					from: "./Source/Sheet/TypeDoc.css",
+ 					to: "./Sheet/",
+ 				},
+ 			],
+ 		}),
+ 	],
+ 	define: {
+ 		"process.env.VERSION_PACKAGE": `'${(
+ 			await (await import("../Function/JSON.js")).default("package.json")
+ 		)?.version}'`,
+ 	},
+ } satisfies BuildOptions as BuildOptions;
+ 
+ import type { BuildOptions } from "esbuild";
diff --git a/Source/Sheet/TypeDoc.css b/Source/Sheet/TypeDoc.css
new file mode 100644
index 0000000..d43ae60
--- /dev/null
+++ b/Source/Sheet/TypeDoc.css
+ :root {
+ 	--color-background: #000;
+ 	--color-background-secondary: #000;
+ }
+ 
+ .tsd-navigation.settings {
+ 	display: none !important;
+ }
+ 
+ #tsd-search .field label {
+ 	left: 50%;
+ 	margin-left: -20px;
+ 	z-index: 1;
+ }
diff --git a/Source/Stylesheet/Theme.css b/Source/Stylesheet/Theme.css
deleted file mode 100644
index e3a4462..0000000
--- a/Source/Stylesheet/Theme.css
+++ /dev/null
- :root {
- 	--dark-color-background: #000;
- 	--dark-color-background-secondary: #000;
- 	--dark-code-background: #040404;
- 	--color-accent: #2463eb;
- 	--dark-hl-0: #ffdd00;
- 	--dark-hl-1: #ff66ff;
- 	--dark-hl-2: #ff4444;
- 	--dark-hl-3: #44ffff;
- 	--dark-hl-4: #44ff44;
- }
- 
- body #tsd-search .field label {
- 	left: 50%;
- 	margin-left: -20px;
- 	z-index: 1;
- 	text-align: center;
- }
- 
- body #tsd-search.has-focus .field label {
- 	display: none;
- }
- 
- body #tsd-search .field input {
- 	z-index: 2;
- }
- 
- body pre,
- body .tsd-page-toolbar,
- body .tsd-generator {
- 	border: none;
- }
- 
- body .tsd-navigation a,
- body .tsd-navigation summary > span,
- body .tsd-page-navigation a {
- 	padding: 0.5rem;
- 	border-radius: 8px;
- }
- 
- body .tsd-description .tsd-signatures .tsd-signature,
- body .tsd-signature,
- body .tsd-signatures .tsd-signature,
- body .tsd-typography td,
- body .tsd-typography th,
- body code.tsd-tag {
- 	border-radius: 12px;
- 	border-width: 2px;
- }
diff --git a/Source/Type/Value.ts b/Source/Type/Value.ts
deleted file mode 100644
index 7c1f62c..0000000
--- a/Source/Type/Value.ts
+++ /dev/null
- /**
-  * @module Value
-  *
-  */
- export type Type<T> = T[keyof T];
- 
- export type { Type as default };
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
deleted file mode 100644
index ff84d2c..0000000
--- a/Source/Variable/ESBuild.ts
+++ /dev/null
- /**
-  * @module ESBuild
-  *
-  */
- export default {
- 	color: true,
- 	format: "esm",
- 	metafile: true,
- 	minify: true,
- 	outdir: "Target",
- 	platform: "node",
- 	target: "esnext",
- 	write: true,
- 	logLevel: "debug",
- 	plugins: [
- 		{
- 			name: "Target",
- 			setup({ onStart, initialOptions: { outdir } }) {
- 				onStart(async () => {
- 					try {
- 						outdir
- 							? await (
- 									await import("fs/promises")
- 							  ).rm(outdir, {
- 									recursive: true,
- 							  })
- 							: {};
- 					} catch (_Error) {}
- 				});
- 			},
- 		},
- 		(await import("esbuild-plugin-copy")).copy({
- 			resolveFrom: "out",
- 			assets: [
- 				{
- 					from: "./Source/Notation/TypeScript.json",
- 					to: "./Notation/",
- 				},
- 				{
- 					from: "./Source/Stylesheet/Theme.css",
- 					to: "./Stylesheet/",
- 				},
- 			],
- 		}),
- 	],
- 	define: {
- 		"process.env.VERSION_PACKAGE": `'${(
- 			await (await import("../Function/JSON.js")).default("package.json")
- 		)?.version}'`,
- 	},
- } satisfies BuildOptions as BuildOptions;
- 
- import type { BuildOptions } from "esbuild";
diff --git a/Source/Variable/Load.ts b/Source/Variable/Load.ts
deleted file mode 100644
index 5281fbc..0000000
--- a/Source/Variable/Load.ts
+++ /dev/null
- /**
-  * @module Load
-  *
-  */
- export const load = (...[Application]: Parameters<Type["load"]>) =>
- 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
- 
- export default {
- 	load,
- } satisfies Type as Type;
- 
- import type Type from "../Interface/Load.js";
- 
- export const { default: Theme } = await import("../Class/Theme.js");
diff --git a/tsconfig.json b/tsconfig.json
index 12e0400..68696b3 100644
--- a/tsconfig.json
+++ b/tsconfig.json
- 		"outDir": "Target"
+ 		"outDir": "Target",
+ 		"types": ["@cloudflare/workers-types/experimental"]

🗣️ Summary from v0.2.2 to v0.2.20 in .
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index dcb957d..ffde8df 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
-             - uses: pozil/auto-assign-issue@v1.12.0
+             - uses: pozil/auto-assign-issue@v1.13.0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 16ee310..e70fa64 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/checkout@v4.1.0
+             - uses: actions/checkout@v4.1.1
-                           --child-concurrency=9999,
-                           --network-concurrency=9999,
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 2551c53..b8f4d7b 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/checkout@v4.1.0
+             - uses: actions/checkout@v4.1.1
diff --git a/.npmignore b/.npmignore
index 4639469..d0265ba 100644
--- a/.npmignore
+++ b/.npmignore
- .turbo/
+ Source/
+ Documentation/
- Source/
- Documentation/
diff --git a/package.json b/package.json
index f344a98..80454c1 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.2",
+ 	"version": "0.2.20",
- 	"description": "🌀 Builds all your TypeScript files into JavaScript from a given folder using esbuild.",
+ 	"description": "🌀 Builds all your TypeScript files into JavaScript and generates documentation for it using TypeDoc.",
- 		"esbuild"
+ 		"esbuild",
+ 		"typedoc"
- 		"@types/node": "20.8.0",
- 		"commander": "11.0.0",
+ 		"@types/node": "20.8.7",
+ 		"commander": "11.1.0",
- 		"esbuild": "0.19.4",
+ 		"esbuild": "0.19.5",
- 		"typedoc": "0.25.1",
+ 		"typedoc": "0.25.2",
+ 		"typedoc-plugin-keywords": "1.5.0",
- 		"typedoc-plugin-rename-defaults": "0.6.6",
+ 		"typedoc-plugin-rename-defaults": "0.6.7",
- 		"@cloudflare/workers-types": "4.20230922.0",
- 		"@types/node": "20.8.0",
diff --git a/README.md b/README.md
index d5b0459..aebee1b 100644
--- a/README.md
+++ b/README.md
- Builds all your TypeScript files into JavaScript.
+ Builds all your TypeScript files into JavaScript and generates documentation for
+ it using [TypeDoc][typedoc].
- 	"dependencies": {
- 		"typescript-esbuild": "0.1.16"
+ 	"devDependencies": {
+ 		"typescript-esbuild": "0.2.20"
- #### or with a custom esbuild config file:
+ ### ESBuild Configuration
+ 
+ Or with a custom esbuild config file:
- #### See an example of a configuration file in [Configuration.ts](Source/Object/Configuration.ts)
+ See an example of a configuration file in [ESBuild.ts](Source/Object/ESBuild.ts)
+ 
+ ### TypeScript Configuration
- [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
+ [typedoc]: https://npmjs.org/typedoc
+ [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
new file mode 100644
index 0000000..a86df94
--- /dev/null
+++ b/Source/Class/Theme.ts
+ /**
+  * @module Theme
+  *
+  */
+ export default class
+ 	extends (await import("typedoc")).DefaultTheme
+ 	implements Type
+ {
+ 	override buildUrls(...[Reflection, URLs]: Parameters<Type["buildUrls"]>) {
+ 		const { Directory } = this._Mapping(Reflection) ?? {};
+ 
+ 		if (Directory) {
+ 			if (!(Reflection.url && URL_PREFIX.test(Reflection.url))) {
+ 				const URL = [Directory, `${getUrl(Reflection)}.html`].join("/");
+ 
+ 				URLs.push(
+ 					new UrlMapping(URL, Reflection, this.reflectionTemplate)
+ 				);
+ 
+ 				Reflection.url = URL;
+ 				Reflection.hasOwnDocument = true;
+ 			}
+ 
+ 			Reflection.traverse((Child) => {
+ 				if (Child instanceof DeclarationReflection) {
+ 					this.buildUrls(Child, URLs);
+ 				}
+ 
+ 				return true;
+ 			});
+ 		} else if (Reflection.parent) {
+ 			applyAnchorUrl(Reflection, Reflection.parent);
+ 		}
+ 
+ 		return URLs;
+ 	}
+ 
+ 	_Mapping = (...[Reflection]: Parameters<Type["_Mapping"]>) =>
+ 		this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));
+ 
+ 	Mapping: Mapping[] = [
+ 		{
+ 			Kind: [Class],
+ 			Directory: "Class",
+ 		},
+ 		{
+ 			Kind: [Interface],
+ 			Directory: "Interface",
+ 		},
+ 		{
+ 			Kind: [Enum],
+ 			Directory: "Enum",
+ 		},
+ 		{
+ 			Kind: [Namespace, Module],
+ 			Directory: "Module",
+ 		},
+ 		{
+ 			Kind: [TypeAlias],
+ 			Directory: "Type",
+ 		},
+ 		{
+ 			Kind: [_Function],
+ 			Directory: "Function",
+ 		},
+ 		{
+ 			Kind: [Variable],
+ 			Directory: "Variable",
+ 		},
+ 	];
+ }
+ 
+ import type Mapping from "../Interface/Mapping.js";
+ import type Type from "../Interface/Theme.js";
+ 
+ export const {
+ 	DeclarationReflection,
+ 	DefaultTheme: { URL_PREFIX, getUrl, applyAnchorUrl },
+ 	ReflectionKind: {
+ 		Interface,
+ 		Class,
+ 		Enum,
+ 		Namespace,
+ 		Module,
+ 		TypeAlias,
+ 		Function: _Function,
+ 		Variable,
+ 	},
+ 	UrlMapping,
+ } = await import("typedoc");
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index c18a650..50016fd 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 	File.forEach(async (File) =>
- 		(
- 			await (
+ 	for (const _File of File) {
+ 		for (const __File of await (
- 			).default(File.replaceAll("'", "").replaceAll('"', ""))
- 		).forEach((File) => Pipe.push(File))
- 	);
+ 		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
+ 			Pipe.push(__File);
+ 		}
+ 	}
- 	const Configuration = deepmerge(
- 		(await import("../Object/ESBuild.js")).default,
+ 	const Configuration = Merge(
+ 		(await import("../Variable/ESBuild.js")).default,
- 	const { metafile } = await (
+ 	console.log(
+ 		await (
+ 			await import("esbuild")
+ 		).analyzeMetafile(
+ 			(
+ 				await (
- 			? deepmerge(
+ 						? Merge(
- 	);
- 
- 	console.log(
- 		metafile
- 			? await (
- 					await import("esbuild")
- 			  ).analyzeMetafile(metafile, {
+ 				)
+ 			)?.metafile ?? "",
+ 			{
- 			  })
- 			: {}
+ 			}
+ 		)
- 	if (Option?.TypeScript) {
- 		Exec(`tsc -p ${Option.TypeScript}`);
- 	} else {
- 		Exec("tsc");
- 	}
+ 	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
- 		`typedoc \
- 			--commentStyle all \
- 			--gitRevision main \
- 			--customCss ${resolve(`${Current}/../Sheet/TypeDoc.css`)} \
- 			--includeVersion \
- 			--out ./Documentation \
- 			--plugin typedoc-plugin-remove-references \
- 			--plugin typedoc-plugin-rename-defaults \
- 			--plugin typedoc-plugin-mdn-links \
- 			--plugin typedoc-plugin-zod \
- 			--plugin typedoc-plugin-merge-modules \
- 			--entryPointStrategy expand \
- 			--mergeModulesRenameDefaults \
- 			--mergeModulesMergeMode module \
- 			--entryPoints ${Object.values(Configuration.entryPoints).join(
+ 		[
+ 			"typedoc",
+ 			"--commentStyle all",
+ 			"--gitRevision main",
+ 			`--customCss ${resolve(`${Current}/../Stylesheet/Theme.css`)}`,
+ 			"--includeVersion",
+ 			"--out ./Documentation",
+ 			`--plugin ${resolve(`${Current}/../../Target/Variable/Load.js`)}`,
+ 			"--plugin typedoc-plugin-remove-references",
+ 			"--plugin typedoc-plugin-rename-defaults",
+ 			"--plugin typedoc-plugin-mdn-links",
+ 			"--plugin typedoc-plugin-zod",
+ 			"--plugin typedoc-plugin-merge-modules",
+ 			"--plugin typedoc-plugin-keywords",
+ 			`--keywords ${
+ 				(
+ 					await (
+ 						await import("../Function/JSON.js")
+ 					).default("package.json", process.cwd())
+ 				)?.keywords?.join(" --keywords ") ?? " typescript-esbuild "
+ 			}`,
+ 			"--theme TypeScriptESBuild",
+ 			"--entryPointStrategy expand",
+ 			"--mergeModulesRenameDefaults",
+ 			"--mergeModulesMergeMode module",
+ 			`--entryPoints ${Object.values(Configuration.entryPoints).join(
- 			)} && \
- 			mv ./Documentation/functions ./Documentation/Function && \
- 			find ./Documentation/ -iname *.html -exec sed -i -E 's:(href=".*)functions/:\\1Function/:g' {} \;`
+ 			)}`,
+ 		].join(" ")
- export const { deepmerge } = await import("deepmerge-ts");
+ export const { default: Merge } = await import("../Function/Merge.js");
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 0d71924..749769c 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 		const Exec = (await import("child_process")).exec(Command);
+ 		const { stdout } = (await import("child_process")).exec(Command);
- 			Exec.stdout?.on("data", (Data) => Echo(Data));
+ 			stdout?.on("data", (Data) => Echo(Data));
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 6219be1..0137920 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- 				).default("../Notation/TypeScript.json", import.meta.url)
+ 				).default(
+ 					"../Notation/TypeScript.json",
+ 					(await import("path")).dirname(
+ 						(await import("url")).fileURLToPath(import.meta.url)
+ 					)
+ 				)
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 504dc40..20a4ba4 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- 			).readFile(
- 				`${
- 					From
- 						? (await import("path")).dirname(
- 								(await import("url")).fileURLToPath(
- 									From ?? import.meta.url
- 								)
- 						  )
- 						: "."
- 				}/${File}`,
- 				"utf-8"
- 			)
+ 			).readFile(`${From ?? "."}/${File}`, "utf-8")
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
new file mode 100644
index 0000000..8586054
--- /dev/null
+++ b/Source/Function/Merge.ts
+ /**
+  * @module Merge
+  *
+  */
+ export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
+ 	mergeArrays: false,
+ }) satisfies Type<Generic> as Type<Generic>;
+ 
+ import type Type from "../Interface/Merge.js";
+ import type { Generic } from "../Interface/Merge.js";
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 50666a4..0f96c7e 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 	 * @param {string} Command - The 'Command' parameter is a string that represents the
+ 	 * @param Command - The 'Command' parameter is a string that represents the
- 	 * @param {boolean|function} [Echo] - An optional parameter that controls whether the stdout
+ 	 * @param Echo - An optional parameter that controls whether the stdout
- 		// rome-ignore lint/suspicious/noExplicitAny:
+ 		// biome-ignore lint/suspicious/noExplicitAny:
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
index d028236..607aee2 100644
--- a/Source/Interface/File.ts
+++ b/Source/Interface/File.ts
- 	 * @param {string} Path - The 'Path' parameter is a string that represents the file path of the file
+ 	 * @param Path - The 'Path' parameter is a string that represents the file path of the file
- 	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
+ 	// biome-ignore lint/suspicious/noExplicitAny:
diff --git a/Source/Interface/Load.ts b/Source/Interface/Load.ts
new file mode 100644
index 0000000..fda2db9
--- /dev/null
+++ b/Source/Interface/Load.ts
+ /**
+  * @module Load
+  *
+  */
+ export default interface Type {
+ 	/**
+ 	 * The `Load` function is responsible for loading a plugin into the TypeDoc instance.
+ 	 *
+ 	 * @param Application - The `Application` parameter is an instance of TypeDoc's Application
+ 	 * class, representing the TypeDoc application to which the plugin should be loaded.
+ 	 *
+ 	 */
+ 	load: (Application: Application) => void;
+ }
+ 
+ import type { Application } from "typedoc";
diff --git a/Source/Interface/Mapping.ts b/Source/Interface/Mapping.ts
new file mode 100644
index 0000000..5b91846
--- /dev/null
+++ b/Source/Interface/Mapping.ts
+ /**
+  * @module Mapping
+  *
+  * Defines a mapping of a {@link Models.Kind} to a template file.
+  *
+  * Used by {@link DefaultTheme} to map reflections to output files.
+  *
+  */
+ export default interface Type {
+ 	/**
+ 	 * {@link DeclarationReflection.kind} this rule applies to.
+ 	 */
+ 	Kind: ReflectionKind[];
+ 
+ 	/**
+ 	 * The name of the directory the output files should be written to.
+ 	 */
+ 	Directory: string;
+ }
+ 
+ import type { ReflectionKind } from "typedoc";
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
new file mode 100644
index 0000000..5e66d23
--- /dev/null
+++ b/Source/Interface/Merge.ts
+ /**
+  * @module Merge
+  *
+  * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeMergeFunctionsURIs.
+  *
+  * @template PMF - A type parameter representing Partial<DeepMergeMergeFunctionsURIs>.
+  *
+  */
+ export default interface Type<
+ 	PMF extends Partial<DeepMergeMergeFunctionsURIs>,
+ > {
+ 	/**
+ 	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
+ 	 *
+ 	 * @param ...Objects - An arbitrary number of objects to be merged.
+ 	 *
+ 	 */
+ 	<Ts extends readonly unknown[]>(
+ 		...Objects: Ts
+ 	): DeepMergeHKT<
+ 		Ts,
+ 		GetDeepMergeMergeFunctionsURIs<PMF>,
+ 		DeepMergeBuiltInMetaData
+ 	>;
+ }
+ 
+ export interface Generic {
+ 	DeepMergeArraysURI: DeepMergeLeafURI;
+ }
+ 
+ import type {
+ 	DeepMergeBuiltInMetaData,
+ 	DeepMergeHKT,
+ 	DeepMergeLeafURI,
+ 	DeepMergeMergeFunctionsURIs,
+ 	GetDeepMergeMergeFunctionsURIs,
+ } from "deepmerge-ts";
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
new file mode 100644
index 0000000..27a7277
--- /dev/null
+++ b/Source/Interface/Theme.ts
+ /**
+  * @module Theme
+  *
+  * Represents an interface for defining a theme with various methods and properties.
+  */
+ export default interface Type {
+ 	/**
+ 	 * A function that builds URLs for a given DeclarationReflection and an array of URLs mappings.
+ 	 *
+ 	 * @param Reflection - The DeclarationReflection for which URLs are being built.
+ 	 *
+ 	 * @param URLs - An array of URLs mappings with any data type.
+ 	 *
+ 	 */
+ 	buildUrls: (
+ 		Reflection: DeclarationReflection,
+ 		// biome-ignore lint/suspicious/noExplicitAny:
+ 		URLs: UrlMapping<any>[]
+ 		// biome-ignore lint/suspicious/noExplicitAny:
+ 	) => UrlMapping<any>[];
+ 
+ 	/**
+ 	 * A function that maps a DeclarationReflection to a Mapping or returns undefined.
+ 	 *
+ 	 * @param Reflection - The DeclarationReflection to map to a Mapping.
+ 	 *
+ 	 */
+ 	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
+ 
+ 	/**
+ 	 * An array of Mappings representing the theme's mapping configuration.
+ 	 */
+ 	Mapping: Mapping[];
+ }
+ 
+ import type Mapping from "./Mapping.js";
+ 
+ import type { DeclarationReflection, UrlMapping } from "typedoc";
diff --git a/Source/Notation/TypeScript.json b/Source/Notation/TypeScript.json
index 8978670..05f941d 100644
--- a/Source/Notation/TypeScript.json
+++ b/Source/Notation/TypeScript.json
- 		"verbatimModuleSyntax": true
+ 		"verbatimModuleSyntax": true,
+ 		"noImplicitThis": true
diff --git a/Source/Object/ESBuild.ts b/Source/Object/ESBuild.ts
deleted file mode 100644
index 1c99a33..0000000
--- a/Source/Object/ESBuild.ts
+++ /dev/null
- /**
-  * @module ESBuild
-  *
-  */
- export default {
- 	color: true,
- 	format: "esm",
- 	metafile: true,
- 	minify: true,
- 	outdir: "Target",
- 	platform: "node",
- 	target: "esnext",
- 	write: true,
- 	logLevel: "debug",
- 	plugins: [
- 		{
- 			name: "Target",
- 			setup({ onStart, initialOptions: { outdir } }) {
- 				onStart(async () => {
- 					try {
- 						outdir
- 							? await (
- 									await import("fs/promises")
- 							  ).rm(outdir, {
- 									recursive: true,
- 							  })
- 							: {};
- 					} catch (_Error) {}
- 				});
- 			},
- 		},
- 		(await import("esbuild-plugin-copy")).copy({
- 			resolveFrom: "out",
- 			assets: [
- 				{
- 					from: "./Source/Notation/TypeScript.json",
- 					to: "./Notation/",
- 				},
- 				{
- 					from: "./Source/Sheet/TypeDoc.css",
- 					to: "./Sheet/",
- 				},
- 			],
- 		}),
- 	],
- 	define: {
- 		"process.env.VERSION_PACKAGE": `'${(
- 			await (await import("../Function/JSON.js")).default("package.json")
- 		)?.version}'`,
- 	},
- } satisfies BuildOptions as BuildOptions;
- 
- import type { BuildOptions } from "esbuild";
diff --git a/Source/Sheet/TypeDoc.css b/Source/Sheet/TypeDoc.css
deleted file mode 100644
index d43ae60..0000000
--- a/Source/Sheet/TypeDoc.css
+++ /dev/null
- :root {
- 	--color-background: #000;
- 	--color-background-secondary: #000;
- }
- 
- .tsd-navigation.settings {
- 	display: none !important;
- }
- 
- #tsd-search .field label {
- 	left: 50%;
- 	margin-left: -20px;
- 	z-index: 1;
- }
diff --git a/Source/Stylesheet/Theme.css b/Source/Stylesheet/Theme.css
new file mode 100644
index 0000000..e3a4462
--- /dev/null
+++ b/Source/Stylesheet/Theme.css
+ :root {
+ 	--dark-color-background: #000;
+ 	--dark-color-background-secondary: #000;
+ 	--dark-code-background: #040404;
+ 	--color-accent: #2463eb;
+ 	--dark-hl-0: #ffdd00;
+ 	--dark-hl-1: #ff66ff;
+ 	--dark-hl-2: #ff4444;
+ 	--dark-hl-3: #44ffff;
+ 	--dark-hl-4: #44ff44;
+ }
+ 
+ body #tsd-search .field label {
+ 	left: 50%;
+ 	margin-left: -20px;
+ 	z-index: 1;
+ 	text-align: center;
+ }
+ 
+ body #tsd-search.has-focus .field label {
+ 	display: none;
+ }
+ 
+ body #tsd-search .field input {
+ 	z-index: 2;
+ }
+ 
+ body pre,
+ body .tsd-page-toolbar,
+ body .tsd-generator {
+ 	border: none;
+ }
+ 
+ body .tsd-navigation a,
+ body .tsd-navigation summary > span,
+ body .tsd-page-navigation a {
+ 	padding: 0.5rem;
+ 	border-radius: 8px;
+ }
+ 
+ body .tsd-description .tsd-signatures .tsd-signature,
+ body .tsd-signature,
+ body .tsd-signatures .tsd-signature,
+ body .tsd-typography td,
+ body .tsd-typography th,
+ body code.tsd-tag {
+ 	border-radius: 12px;
+ 	border-width: 2px;
+ }
diff --git a/Source/Type/Value.ts b/Source/Type/Value.ts
new file mode 100644
index 0000000..7c1f62c
--- /dev/null
+++ b/Source/Type/Value.ts
+ /**
+  * @module Value
+  *
+  */
+ export type Type<T> = T[keyof T];
+ 
+ export type { Type as default };
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
new file mode 100644
index 0000000..a652f8b
--- /dev/null
+++ b/Source/Variable/ESBuild.ts
+ /**
+  * @module ESBuild
+  *
+  */
+ export default {
+ 	color: true,
+ 	format: "esm",
+ 	metafile: true,
+ 	minify: true,
+ 	outdir: "Target",
+ 	platform: "node",
+ 	target: "esnext",
+ 	write: true,
+ 	logLevel: "debug",
+ 	plugins: [
+ 		{
+ 			name: "Target",
+ 			setup({ onStart, initialOptions: { outdir } }) {
+ 				onStart(async () => {
+ 					try {
+ 						outdir
+ 							? await (
+ 									await import("fs/promises")
+ 							  ).rm(outdir, {
+ 									recursive: true,
+ 							  })
+ 							: {};
+ 					} catch (_Error) {}
+ 				});
+ 			},
+ 		},
+ 		(await import("esbuild-plugin-copy")).copy({
+ 			resolveFrom: "out",
+ 			assets: [
+ 				{
+ 					from: "./Source/Notation/TypeScript.json",	
+ 					to: "./Notation/",
+ 				},
+ 				{
+ 					from: "./Source/Stylesheet/Theme.css",
+ 					to: "./Stylesheet/",
+ 				},
+ 			],
+ 		}),
+ 	],
+ 	define: {
+ 		"process.env.VERSION_PACKAGE": `'${(
+ 			await (await import("../Function/JSON.js")).default("package.json")
+ 		)?.version}'`,
+ 	},
+ } satisfies BuildOptions as BuildOptions;
+ 
+ import type { BuildOptions } from "esbuild";
diff --git a/Source/Variable/Load.ts b/Source/Variable/Load.ts
new file mode 100644
index 0000000..5281fbc
--- /dev/null
+++ b/Source/Variable/Load.ts
+ /**
+  * @module Load
+  *
+  */
+ export const load = (...[Application]: Parameters<Type["load"]>) =>
+ 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
+ 
+ export default {
+ 	load,
+ } satisfies Type as Type;
+ 
+ import type Type from "../Interface/Load.js";
+ 
+ export const { default: Theme } = await import("../Class/Theme.js");
diff --git a/tsconfig.json b/tsconfig.json
index 68696b3..12e0400 100644
--- a/tsconfig.json
+++ b/tsconfig.json
- 		"outDir": "Target",
- 		"types": ["@cloudflare/workers-types/experimental"]
+ 		"outDir": "Target"

🗣️ Summary from v0.2.20 to v0.2.21 in .
diff --git a/package.json b/package.json
index 80454c1..369988f 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.20",
+ 	"version": "0.2.21",
diff --git a/README.md b/README.md
index aebee1b..f5963d0 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.20"
+ 		"typescript-esbuild": "0.2.21"
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
index a86df94..09ea6f9 100644
--- a/Source/Class/Theme.ts
+++ b/Source/Class/Theme.ts
+ 				} else {
+ 					applyAnchorUrl(Child, Reflection);

🗣️ Summary from v0.2.21 to v0.2.22 in .
diff --git a/package.json b/package.json
index 369988f..432eb8a 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.21",
+ 	"version": "0.2.22",
- 		"typescript": "5.2.2"
+ 		"typescript": "5.3.0-dev.20231021"
diff --git a/README.md b/README.md
index f5963d0..41d1b1a 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.21"
+ 		"typescript-esbuild": "0.2.22"
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index 50016fd..8a21ea1 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
+ 			"--searchInComments",
+ 			"--cacheBust",

🗣️ Summary from v0.2.22 to v0.2.23 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index e70fa64..9dff4f6 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-                 node-version: [16, 18, 19]
+                 node-version: [18, 19, 20]
diff --git a/package.json b/package.json
index 432eb8a..2ec21ce 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.22",
+ 	"version": "0.2.23",
diff --git a/README.md b/README.md
index 41d1b1a..f577a33 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.22"
+ 		"typescript-esbuild": "0.2.23"
diff --git a/Source/Notation/TypeScript.json b/Source/Notation/TypeScript.json
index 05f941d..80ad3c6 100644
--- a/Source/Notation/TypeScript.json
+++ b/Source/Notation/TypeScript.json
- 		"noImplicitThis": true
+ 		"noImplicitThis": true,
+ 		"paths": {
+ 			"@Asset/*": ["Source/Asset/*"],
+ 			"@Class/*": ["Source/Class/*"],
+ 			"@Component/*": ["Source/Component/*"],
+ 			"@Context/*": ["Source/Context/*"],
+ 			"@Element/*": ["Source/Element/*"],
+ 			"@Function/*": ["Source/Function/*"],
+ 			"@Interface/*": ["Source/Interface/*"],
+ 			"@Layout/*": ["Source/Layout/*"],
+ 			"@Library/*": ["Source/Library/*"],
+ 			"@Notation/*": ["Source/Notation/*"],
+ 			"@Option/*": ["Source/Option/*"],
+ 			"@Page/*": ["Source/pages/*"],
+ 			"@Script/*": ["Source/Script/*"],
+ 			"@Stylesheet/*": ["Source/Stylesheet/*"],
+ 			"@Type/*": ["Source/Type/*"],
+ 			"@Variable/*": ["Source/Variable/*"]
+ 		}

🗣️ Summary from v0.2.23 to v0.2.24 in .
diff --git a/package.json b/package.json
index 2ec21ce..9ffb758 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.23",
+ 	"version": "0.2.24",
diff --git a/README.md b/README.md
index f577a33..d893c3c 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.23"
+ 		"typescript-esbuild": "0.2.24"
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index 8a21ea1..c5ba9a3 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 			"--cacheBust",

🗣️ Summary from v0.2.24 to v0.2.25 in .
diff --git a/package.json b/package.json
index 9ffb758..ebfb79c 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.24",
+ 	"version": "0.2.25",
diff --git a/README.md b/README.md
index d893c3c..831bcf1 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.24"
+ 		"typescript-esbuild": "0.2.25"

🗣️ Summary from v0.2.25 to v0.2.26 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 9dff4f6..84d881c 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/setup-node@v3.8.1
+             - uses: actions/setup-node@v4.0.0
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index b8f4d7b..c890b37 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/setup-node@v3.8.1
+             - uses: actions/setup-node@v4.0.0
diff --git a/package.json b/package.json
index ebfb79c..948620c 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.25",
+ 	"version": "0.2.26",
- 		"@types/node": "20.8.7",
+ 		"@types/node": "20.8.8",
- 		"typescript": "5.3.0-dev.20231021"
+ 		"typescript": "5.2.2"
diff --git a/README.md b/README.md
index 831bcf1..f33c194 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.25"
+ 		"typescript-esbuild": "0.2.26"
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
index 09ea6f9..a68861d 100644
--- a/Source/Class/Theme.ts
+++ b/Source/Class/Theme.ts
- 	override buildUrls(...[Reflection, URLs]: Parameters<Type["buildUrls"]>) {
+ 	public override buildUrls(
+ 		...[Reflection, URLs]: Parameters<Type["buildUrls"]>
+ 	) {
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
index 27a7277..ea43111 100644
--- a/Source/Interface/Theme.ts
+++ b/Source/Interface/Theme.ts
- export default interface Type {
+ export default interface Type extends DefaultTheme {
+ 	/**
+ 	 * A function that gets the render context for the DefaultTheme.
+ 	 *
+ 	 * @param Reflection - The DeclarationReflection for which URLs are being built.
+ 	 *
+ 	 * @param URLs - An array of URLs mappings with any data type.
+ 	 *
+ 	 */
+ 	getRenderContext(Event: PageEvent<Reflection>): DefaultThemeRenderContext;
+ 
- import type { DeclarationReflection, UrlMapping } from "typedoc";
+ import type {
+ 	DeclarationReflection,
+ 	DefaultTheme,
+ 	DefaultThemeRenderContext,
+ 	PageEvent,
+ 	Reflection,
+ 	UrlMapping,
+ } from "typedoc";

🗣️ Summary from v0.2.26 to v0.2.3 in .
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index ffde8df..dcb957d 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
-             - uses: pozil/auto-assign-issue@v1.13.0
+             - uses: pozil/auto-assign-issue@v1.12.0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 84d881c..16ee310 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-                 node-version: [18, 19, 20]
+                 node-version: [16, 18, 19]
-             - uses: actions/checkout@v4.1.1
+             - uses: actions/checkout@v4.1.0
+                           --child-concurrency=9999,
+                           --network-concurrency=9999,
-             - uses: actions/setup-node@v4.0.0
+             - uses: actions/setup-node@v3.8.1
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index c890b37..2551c53 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/checkout@v4.1.1
+             - uses: actions/checkout@v4.1.0
-             - uses: actions/setup-node@v4.0.0
+             - uses: actions/setup-node@v3.8.1
diff --git a/.npmignore b/.npmignore
index d0265ba..4639469 100644
--- a/.npmignore
+++ b/.npmignore
- Source/
- Documentation/
+ .turbo/
+ Source/
+ Documentation/
diff --git a/package.json b/package.json
index 948620c..91575d2 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.26",
+ 	"version": "0.2.3",
- 	"description": "🌀 Builds all your TypeScript files into JavaScript and generates documentation for it using TypeDoc.",
+ 	"description": "🌀 Builds all your TypeScript files into JavaScript from a given folder using esbuild.",
- 		"esbuild",
- 		"typedoc"
+ 		"esbuild"
- 		"@types/node": "20.8.8",
- 		"commander": "11.1.0",
+ 		"@types/node": "20.8.0",
+ 		"commander": "11.0.0",
- 		"esbuild": "0.19.5",
+ 		"esbuild": "0.19.4",
- 		"typedoc": "0.25.2",
- 		"typedoc-plugin-keywords": "1.5.0",
+ 		"typedoc": "0.25.1",
- 		"typedoc-plugin-rename-defaults": "0.6.7",
+ 		"typedoc-plugin-rename-defaults": "0.6.6",
+ 		"@mxssfd/typedoc-theme": "1.1.3",
+ 		"@types/node": "20.8.0",
diff --git a/README.md b/README.md
index f33c194..d5b0459 100644
--- a/README.md
+++ b/README.md
- Builds all your TypeScript files into JavaScript and generates documentation for
- it using [TypeDoc][typedoc].
+ Builds all your TypeScript files into JavaScript.
- 	"devDependencies": {
- 		"typescript-esbuild": "0.2.26"
+ 	"dependencies": {
+ 		"typescript-esbuild": "0.1.16"
- ### ESBuild Configuration
- 
- Or with a custom esbuild config file:
+ #### or with a custom esbuild config file:
- See an example of a configuration file in [ESBuild.ts](Source/Object/ESBuild.ts)
- 
- ### TypeScript Configuration
+ #### See an example of a configuration file in [Configuration.ts](Source/Object/Configuration.ts)
- [esbuild]: https://npmjs.org/esbuild
- [typedoc]: https://npmjs.org/typedoc
+ [esbuild]: https://npmjs.org/esbuild
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
deleted file mode 100644
index a68861d..0000000
--- a/Source/Class/Theme.ts
+++ /dev/null
- /**
-  * @module Theme
-  *
-  */
- export default class
- 	extends (await import("typedoc")).DefaultTheme
- 	implements Type
- {
- 	public override buildUrls(
- 		...[Reflection, URLs]: Parameters<Type["buildUrls"]>
- 	) {
- 		const { Directory } = this._Mapping(Reflection) ?? {};
- 
- 		if (Directory) {
- 			if (!(Reflection.url && URL_PREFIX.test(Reflection.url))) {
- 				const URL = [Directory, `${getUrl(Reflection)}.html`].join("/");
- 
- 				URLs.push(
- 					new UrlMapping(URL, Reflection, this.reflectionTemplate)
- 				);
- 
- 				Reflection.url = URL;
- 				Reflection.hasOwnDocument = true;
- 			}
- 
- 			Reflection.traverse((Child) => {
- 				if (Child instanceof DeclarationReflection) {
- 					this.buildUrls(Child, URLs);
- 				} else {
- 					applyAnchorUrl(Child, Reflection);
- 				}
- 
- 				return true;
- 			});
- 		} else if (Reflection.parent) {
- 			applyAnchorUrl(Reflection, Reflection.parent);
- 		}
- 
- 		return URLs;
- 	}
- 
- 	_Mapping = (...[Reflection]: Parameters<Type["_Mapping"]>) =>
- 		this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));
- 
- 	Mapping: Mapping[] = [
- 		{
- 			Kind: [Class],
- 			Directory: "Class",
- 		},
- 		{
- 			Kind: [Interface],
- 			Directory: "Interface",
- 		},
- 		{
- 			Kind: [Enum],
- 			Directory: "Enum",
- 		},
- 		{
- 			Kind: [Namespace, Module],
- 			Directory: "Module",
- 		},
- 		{
- 			Kind: [TypeAlias],
- 			Directory: "Type",
- 		},
- 		{
- 			Kind: [_Function],
- 			Directory: "Function",
- 		},
- 		{
- 			Kind: [Variable],
- 			Directory: "Variable",
- 		},
- 	];
- }
- 
- import type Mapping from "../Interface/Mapping.js";
- import type Type from "../Interface/Theme.js";
- 
- export const {
- 	DeclarationReflection,
- 	DefaultTheme: { URL_PREFIX, getUrl, applyAnchorUrl },
- 	ReflectionKind: {
- 		Interface,
- 		Class,
- 		Enum,
- 		Namespace,
- 		Module,
- 		TypeAlias,
- 		Function: _Function,
- 		Variable,
- 	},
- 	UrlMapping,
- } = await import("typedoc");
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index c5ba9a3..d8292f8 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 	for (const _File of File) {
- 		for (const __File of await (
+ 	File.forEach(async (File) =>
+ 		(
+ 			await (
- 		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
- 			Pipe.push(__File);
- 		}
- 	}
+ 			).default(File.replaceAll("'", "").replaceAll('"', ""))
+ 		).forEach((File) => Pipe.push(File))
+ 	);
- 	const Configuration = Merge(
- 		(await import("../Variable/ESBuild.js")).default,
+ 	const Configuration = deepmerge(
+ 		(await import("../Object/ESBuild.js")).default,
- 	console.log(
- 		await (
- 			await import("esbuild")
- 		).analyzeMetafile(
- 			(
- 				await (
+ 	const { metafile } = await (
- 						? Merge(
+ 			? deepmerge(
- 				)
- 			)?.metafile ?? "",
- 			{
+ 	);
+ 
+ 	console.log(
+ 		metafile
+ 			? await (
+ 					await import("esbuild")
+ 			  ).analyzeMetafile(metafile, {
- 			}
- 		)
+ 			  })
+ 			: {}
- 	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
+ 	if (Option?.TypeScript) {
+ 		Exec(`tsc -p ${Option.TypeScript}`);
+ 	} else {
+ 		Exec("tsc");
+ 	}
- 		[
- 			"typedoc",
- 			"--commentStyle all",
- 			"--gitRevision main",
- 			`--customCss ${resolve(`${Current}/../Stylesheet/Theme.css`)}`,
- 			"--includeVersion",
- 			"--out ./Documentation",
- 			`--plugin ${resolve(`${Current}/../../Target/Variable/Load.js`)}`,
- 			"--plugin typedoc-plugin-remove-references",
- 			"--plugin typedoc-plugin-rename-defaults",
- 			"--plugin typedoc-plugin-mdn-links",
- 			"--plugin typedoc-plugin-zod",
- 			"--plugin typedoc-plugin-merge-modules",
- 			"--plugin typedoc-plugin-keywords",
- 			"--searchInComments",
- 			`--keywords ${
- 				(
- 					await (
- 						await import("../Function/JSON.js")
- 					).default("package.json", process.cwd())
- 				)?.keywords?.join(" --keywords ") ?? " typescript-esbuild "
- 			}`,
- 			"--theme TypeScriptESBuild",
- 			"--entryPointStrategy expand",
- 			"--mergeModulesRenameDefaults",
- 			"--mergeModulesMergeMode module",
- 			`--entryPoints ${Object.values(Configuration.entryPoints).join(
+ 		`typedoc \
+ 			--commentStyle all \
+ 			--gitRevision main \
+ 			--customCss ${resolve(`${Current}/../Sheet/TypeDoc.css`)} \
+ 			--includeVersion \
+ 			--out ./Documentation \
+ 			--plugin typedoc-plugin-remove-references \
+ 			--plugin typedoc-plugin-rename-defaults \
+ 			--plugin typedoc-plugin-mdn-links \
+ 			--plugin typedoc-plugin-zod \
+ 			--plugin typedoc-plugin-merge-modules \
+ 			--plugin @mxssfd/typedoc-theme \
+ 			--theme my-theme \
+ 			--entryPointStrategy expand \
+ 			--mergeModulesRenameDefaults \
+ 			--mergeModulesMergeMode module \
+ 			--entryPoints ${Object.values(Configuration.entryPoints).join(
- 			)}`,
- 		].join(" ")
+ 			)} && \
+ 			mv ./Documentation/functions ./Documentation/Function && \
+ 			find ./Documentation/ -iname *.html -exec sed -i -E 's:(href=".*)functions/:\\1Function/:g' {} \;`
- export const { default: Merge } = await import("../Function/Merge.js");
+ export const { deepmerge } = await import("deepmerge-ts");
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 749769c..0d71924 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 		const { stdout } = (await import("child_process")).exec(Command);
+ 		const Exec = (await import("child_process")).exec(Command);
- 			stdout?.on("data", (Data) => Echo(Data));
+ 			Exec.stdout?.on("data", (Data) => Echo(Data));
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 0137920..6219be1 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- 				).default(
- 					"../Notation/TypeScript.json",
- 					(await import("path")).dirname(
- 						(await import("url")).fileURLToPath(import.meta.url)
- 					)
- 				)
+ 				).default("../Notation/TypeScript.json", import.meta.url)
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 20a4ba4..504dc40 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- 			).readFile(`${From ?? "."}/${File}`, "utf-8")
+ 			).readFile(
+ 				`${
+ 					From
+ 						? (await import("path")).dirname(
+ 								(await import("url")).fileURLToPath(
+ 									From ?? import.meta.url
+ 								)
+ 						  )
+ 						: "."
+ 				}/${File}`,
+ 				"utf-8"
+ 			)
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
deleted file mode 100644
index 8586054..0000000
--- a/Source/Function/Merge.ts
+++ /dev/null
- /**
-  * @module Merge
-  *
-  */
- export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
- 	mergeArrays: false,
- }) satisfies Type<Generic> as Type<Generic>;
- 
- import type Type from "../Interface/Merge.js";
- import type { Generic } from "../Interface/Merge.js";
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 0f96c7e..50666a4 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 	 * @param Command - The 'Command' parameter is a string that represents the
+ 	 * @param {string} Command - The 'Command' parameter is a string that represents the
- 	 * @param Echo - An optional parameter that controls whether the stdout
+ 	 * @param {boolean|function} [Echo] - An optional parameter that controls whether the stdout
- 		// biome-ignore lint/suspicious/noExplicitAny:
+ 		// rome-ignore lint/suspicious/noExplicitAny:
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
index 607aee2..d028236 100644
--- a/Source/Interface/File.ts
+++ b/Source/Interface/File.ts
- 	 * @param Path - The 'Path' parameter is a string that represents the file path of the file
+ 	 * @param {string} Path - The 'Path' parameter is a string that represents the file path of the file
- 	// biome-ignore lint/suspicious/noExplicitAny:
+ 	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
diff --git a/Source/Interface/Load.ts b/Source/Interface/Load.ts
deleted file mode 100644
index fda2db9..0000000
--- a/Source/Interface/Load.ts
+++ /dev/null
- /**
-  * @module Load
-  *
-  */
- export default interface Type {
- 	/**
- 	 * The `Load` function is responsible for loading a plugin into the TypeDoc instance.
- 	 *
- 	 * @param Application - The `Application` parameter is an instance of TypeDoc's Application
- 	 * class, representing the TypeDoc application to which the plugin should be loaded.
- 	 *
- 	 */
- 	load: (Application: Application) => void;
- }
- 
- import type { Application } from "typedoc";
diff --git a/Source/Interface/Mapping.ts b/Source/Interface/Mapping.ts
deleted file mode 100644
index 5b91846..0000000
--- a/Source/Interface/Mapping.ts
+++ /dev/null
- /**
-  * @module Mapping
-  *
-  * Defines a mapping of a {@link Models.Kind} to a template file.
-  *
-  * Used by {@link DefaultTheme} to map reflections to output files.
-  *
-  */
- export default interface Type {
- 	/**
- 	 * {@link DeclarationReflection.kind} this rule applies to.
- 	 */
- 	Kind: ReflectionKind[];
- 
- 	/**
- 	 * The name of the directory the output files should be written to.
- 	 */
- 	Directory: string;
- }
- 
- import type { ReflectionKind } from "typedoc";
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
deleted file mode 100644
index 5e66d23..0000000
--- a/Source/Interface/Merge.ts
+++ /dev/null
- /**
-  * @module Merge
-  *
-  * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeMergeFunctionsURIs.
-  *
-  * @template PMF - A type parameter representing Partial<DeepMergeMergeFunctionsURIs>.
-  *
-  */
- export default interface Type<
- 	PMF extends Partial<DeepMergeMergeFunctionsURIs>,
- > {
- 	/**
- 	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
- 	 *
- 	 * @param ...Objects - An arbitrary number of objects to be merged.
- 	 *
- 	 */
- 	<Ts extends readonly unknown[]>(
- 		...Objects: Ts
- 	): DeepMergeHKT<
- 		Ts,
- 		GetDeepMergeMergeFunctionsURIs<PMF>,
- 		DeepMergeBuiltInMetaData
- 	>;
- }
- 
- export interface Generic {
- 	DeepMergeArraysURI: DeepMergeLeafURI;
- }
- 
- import type {
- 	DeepMergeBuiltInMetaData,
- 	DeepMergeHKT,
- 	DeepMergeLeafURI,
- 	DeepMergeMergeFunctionsURIs,
- 	GetDeepMergeMergeFunctionsURIs,
- } from "deepmerge-ts";
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
deleted file mode 100644
index ea43111..0000000
--- a/Source/Interface/Theme.ts
+++ /dev/null
- /**
-  * @module Theme
-  *
-  * Represents an interface for defining a theme with various methods and properties.
-  */
- export default interface Type extends DefaultTheme {
- 	/**
- 	 * A function that gets the render context for the DefaultTheme.
- 	 *
- 	 * @param Reflection - The DeclarationReflection for which URLs are being built.
- 	 *
- 	 * @param URLs - An array of URLs mappings with any data type.
- 	 *
- 	 */
- 	getRenderContext(Event: PageEvent<Reflection>): DefaultThemeRenderContext;
- 
- 	/**
- 	 * A function that builds URLs for a given DeclarationReflection and an array of URLs mappings.
- 	 *
- 	 * @param Reflection - The DeclarationReflection for which URLs are being built.
- 	 *
- 	 * @param URLs - An array of URLs mappings with any data type.
- 	 *
- 	 */
- 	buildUrls: (
- 		Reflection: DeclarationReflection,
- 		// biome-ignore lint/suspicious/noExplicitAny:
- 		URLs: UrlMapping<any>[]
- 		// biome-ignore lint/suspicious/noExplicitAny:
- 	) => UrlMapping<any>[];
- 
- 	/**
- 	 * A function that maps a DeclarationReflection to a Mapping or returns undefined.
- 	 *
- 	 * @param Reflection - The DeclarationReflection to map to a Mapping.
- 	 *
- 	 */
- 	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
- 
- 	/**
- 	 * An array of Mappings representing the theme's mapping configuration.
- 	 */
- 	Mapping: Mapping[];
- }
- 
- import type Mapping from "./Mapping.js";
- 
- import type {
- 	DeclarationReflection,
- 	DefaultTheme,
- 	DefaultThemeRenderContext,
- 	PageEvent,
- 	Reflection,
- 	UrlMapping,
- } from "typedoc";
diff --git a/Source/Notation/TypeScript.json b/Source/Notation/TypeScript.json
index 80ad3c6..8978670 100644
--- a/Source/Notation/TypeScript.json
+++ b/Source/Notation/TypeScript.json
- 		"verbatimModuleSyntax": true,
- 		"noImplicitThis": true,
- 		"paths": {
- 			"@Asset/*": ["Source/Asset/*"],
- 			"@Class/*": ["Source/Class/*"],
- 			"@Component/*": ["Source/Component/*"],
- 			"@Context/*": ["Source/Context/*"],
- 			"@Element/*": ["Source/Element/*"],
- 			"@Function/*": ["Source/Function/*"],
- 			"@Interface/*": ["Source/Interface/*"],
- 			"@Layout/*": ["Source/Layout/*"],
- 			"@Library/*": ["Source/Library/*"],
- 			"@Notation/*": ["Source/Notation/*"],
- 			"@Option/*": ["Source/Option/*"],
- 			"@Page/*": ["Source/pages/*"],
- 			"@Script/*": ["Source/Script/*"],
- 			"@Stylesheet/*": ["Source/Stylesheet/*"],
- 			"@Type/*": ["Source/Type/*"],
- 			"@Variable/*": ["Source/Variable/*"]
- 		}
+ 		"verbatimModuleSyntax": true
diff --git a/Source/Object/ESBuild.ts b/Source/Object/ESBuild.ts
new file mode 100644
index 0000000..1c99a33
--- /dev/null
+++ b/Source/Object/ESBuild.ts
+ /**
+  * @module ESBuild
+  *
+  */
+ export default {
+ 	color: true,
+ 	format: "esm",
+ 	metafile: true,
+ 	minify: true,
+ 	outdir: "Target",
+ 	platform: "node",
+ 	target: "esnext",
+ 	write: true,
+ 	logLevel: "debug",
+ 	plugins: [
+ 		{
+ 			name: "Target",
+ 			setup({ onStart, initialOptions: { outdir } }) {
+ 				onStart(async () => {
+ 					try {
+ 						outdir
+ 							? await (
+ 									await import("fs/promises")
+ 							  ).rm(outdir, {
+ 									recursive: true,
+ 							  })
+ 							: {};
+ 					} catch (_Error) {}
+ 				});
+ 			},
+ 		},
+ 		(await import("esbuild-plugin-copy")).copy({
+ 			resolveFrom: "out",
+ 			assets: [
+ 				{
+ 					from: "./Source/Notation/TypeScript.json",
+ 					to: "./Notation/",
+ 				},
+ 				{
+ 					from: "./Source/Sheet/TypeDoc.css",
+ 					to: "./Sheet/",
+ 				},
+ 			],
+ 		}),
+ 	],
+ 	define: {
+ 		"process.env.VERSION_PACKAGE": `'${(
+ 			await (await import("../Function/JSON.js")).default("package.json")
+ 		)?.version}'`,
+ 	},
+ } satisfies BuildOptions as BuildOptions;
+ 
+ import type { BuildOptions } from "esbuild";
diff --git a/Source/Sheet/TypeDoc.css b/Source/Sheet/TypeDoc.css
new file mode 100644
index 0000000..d43ae60
--- /dev/null
+++ b/Source/Sheet/TypeDoc.css
+ :root {
+ 	--color-background: #000;
+ 	--color-background-secondary: #000;
+ }
+ 
+ .tsd-navigation.settings {
+ 	display: none !important;
+ }
+ 
+ #tsd-search .field label {
+ 	left: 50%;
+ 	margin-left: -20px;
+ 	z-index: 1;
+ }
diff --git a/Source/Stylesheet/Theme.css b/Source/Stylesheet/Theme.css
deleted file mode 100644
index e3a4462..0000000
--- a/Source/Stylesheet/Theme.css
+++ /dev/null
- :root {
- 	--dark-color-background: #000;
- 	--dark-color-background-secondary: #000;
- 	--dark-code-background: #040404;
- 	--color-accent: #2463eb;
- 	--dark-hl-0: #ffdd00;
- 	--dark-hl-1: #ff66ff;
- 	--dark-hl-2: #ff4444;
- 	--dark-hl-3: #44ffff;
- 	--dark-hl-4: #44ff44;
- }
- 
- body #tsd-search .field label {
- 	left: 50%;
- 	margin-left: -20px;
- 	z-index: 1;
- 	text-align: center;
- }
- 
- body #tsd-search.has-focus .field label {
- 	display: none;
- }
- 
- body #tsd-search .field input {
- 	z-index: 2;
- }
- 
- body pre,
- body .tsd-page-toolbar,
- body .tsd-generator {
- 	border: none;
- }
- 
- body .tsd-navigation a,
- body .tsd-navigation summary > span,
- body .tsd-page-navigation a {
- 	padding: 0.5rem;
- 	border-radius: 8px;
- }
- 
- body .tsd-description .tsd-signatures .tsd-signature,
- body .tsd-signature,
- body .tsd-signatures .tsd-signature,
- body .tsd-typography td,
- body .tsd-typography th,
- body code.tsd-tag {
- 	border-radius: 12px;
- 	border-width: 2px;
- }
diff --git a/Source/Type/Value.ts b/Source/Type/Value.ts
deleted file mode 100644
index 7c1f62c..0000000
--- a/Source/Type/Value.ts
+++ /dev/null
- /**
-  * @module Value
-  *
-  */
- export type Type<T> = T[keyof T];
- 
- export type { Type as default };
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
deleted file mode 100644
index ff84d2c..0000000
--- a/Source/Variable/ESBuild.ts
+++ /dev/null
- /**
-  * @module ESBuild
-  *
-  */
- export default {
- 	color: true,
- 	format: "esm",
- 	metafile: true,
- 	minify: true,
- 	outdir: "Target",
- 	platform: "node",
- 	target: "esnext",
- 	write: true,
- 	logLevel: "debug",
- 	plugins: [
- 		{
- 			name: "Target",
- 			setup({ onStart, initialOptions: { outdir } }) {
- 				onStart(async () => {
- 					try {
- 						outdir
- 							? await (
- 									await import("fs/promises")
- 							  ).rm(outdir, {
- 									recursive: true,
- 							  })
- 							: {};
- 					} catch (_Error) {}
- 				});
- 			},
- 		},
- 		(await import("esbuild-plugin-copy")).copy({
- 			resolveFrom: "out",
- 			assets: [
- 				{
- 					from: "./Source/Notation/TypeScript.json",
- 					to: "./Notation/",
- 				},
- 				{
- 					from: "./Source/Stylesheet/Theme.css",
- 					to: "./Stylesheet/",
- 				},
- 			],
- 		}),
- 	],
- 	define: {
- 		"process.env.VERSION_PACKAGE": `'${(
- 			await (await import("../Function/JSON.js")).default("package.json")
- 		)?.version}'`,
- 	},
- } satisfies BuildOptions as BuildOptions;
- 
- import type { BuildOptions } from "esbuild";
diff --git a/Source/Variable/Load.ts b/Source/Variable/Load.ts
deleted file mode 100644
index 5281fbc..0000000
--- a/Source/Variable/Load.ts
+++ /dev/null
- /**
-  * @module Load
-  *
-  */
- export const load = (...[Application]: Parameters<Type["load"]>) =>
- 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
- 
- export default {
- 	load,
- } satisfies Type as Type;
- 
- import type Type from "../Interface/Load.js";
- 
- export const { default: Theme } = await import("../Class/Theme.js");

🗣️ Summary from v0.2.3 to v0.2.4 in .
diff --git a/package.json b/package.json
index 91575d2..76402b4 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.3",
+ 	"version": "0.2.4",
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts'"
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts' 'Source/**/*.tsx'"
- 		"@mxssfd/typedoc-theme": "1.1.3",
- 		"@types/node": "20.8.0",
diff --git a/README.md b/README.md
index d5b0459..940b224 100644
--- a/README.md
+++ b/README.md
- 	"dependencies": {
- 		"typescript-esbuild": "0.1.16"
+ 	"devDependencies": {
+ 		"typescript-esbuild": "0.2.4"
- #### or with a custom esbuild config file:
+ ### ESBuild Configuration
+ 
+ Or with a custom esbuild config file:
- #### See an example of a configuration file in [Configuration.ts](Source/Object/Configuration.ts)
+ ### TypeScript Configuration
+ 
+ See an example of a configuration file in
+ [Configuration.ts](Source/Object/Configuration.ts)
diff --git a/Source/Class/TypeDoc/Context.ts b/Source/Class/TypeDoc/Context.ts
new file mode 100644
index 0000000..70cadaa
--- /dev/null
+++ b/Source/Class/TypeDoc/Context.ts
+ /**
+  * @module TypeDoc
+  *
+  */
+ export default class
+ 	extends (await import("typedoc")).DefaultThemeRenderContext
+ 	implements Type
+ {
+ 	constructor(
+ 		Theme: DefaultTheme,
+ 		Page: PageEvent<Reflection>,
+ 		Option: Options
+ 	) {
+ 		super(Theme, Page, Option);
+ 
+ 		this.init();
+ 	}
+ 
+ 	init() {}
+ }
+ 
+ import type Type from "../../Interface/TypeDoc/Context.js";
+ 
+ import type { DefaultTheme, Options, PageEvent, Reflection } from "typedoc";
diff --git a/Source/Class/TypeDoc/Theme.ts b/Source/Class/TypeDoc/Theme.ts
new file mode 100644
index 0000000..dd83a9b
--- /dev/null
+++ b/Source/Class/TypeDoc/Theme.ts
+ /**
+  * @module TypeDoc
+  *
+  */
+ export default class
+ 	extends (await import("typedoc")).DefaultTheme
+ 	implements Type
+ {
+ 	override getRenderContext = (
+ 		...[Event]: Parameters<Type["getRenderContext"]>
+ 	): Context => new _Context(this, Event, this.application.options);
+ 
+ 	override buildUrls(...[Reflection, URLs]: Parameters<Type["buildUrls"]>) {
+ 		const { Directory, Template } = this._Mapping(Reflection) ?? {};
+ 
+ 		if (Directory && Template) {
+ 			if (
+ 				!Reflection.url ||
+ 				!DefaultTheme.URL_PREFIX.test(Reflection.url)
+ 			) {
+ 				const URL = [
+ 					Directory,
+ 					`${DefaultTheme.getUrl(Reflection)}.html`,
+ 				].join("/");
+ 				URLs.push(new UrlMapping(URL, Reflection, Template));
+ 
+ 				Reflection.url = URL;
+ 				Reflection.hasOwnDocument = true;
+ 			}
+ 
+ 			Reflection.traverse((Child) => {
+ 				if (Child instanceof DeclarationReflection) {
+ 					this.buildUrls(Child, URLs);
+ 				} else {
+ 					DefaultTheme.applyAnchorUrl(Child, Reflection);
+ 				}
+ 				return true;
+ 			});
+ 		} else if (Reflection.parent) {
+ 			DefaultTheme.applyAnchorUrl(Reflection, Reflection.parent);
+ 		}
+ 
+ 		return URLs;
+ 	}
+ 
+ 	_Mapping = (...[Reflection]: Parameters<Type["_Mapping"]>) =>
+ 		this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));
+ 
+ 	Mapping: Mapping[] = [
+ 		{
+ 			Kind: [ReflectionKind.Class],
+ 			Directory: "Class",
+ 			Template: this.reflectionTemplate,
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Interface],
+ 			Directory: "Interface",
+ 			Template: this.reflectionTemplate,
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Enum],
+ 			Directory: "Enum",
+ 			Template: this.reflectionTemplate,
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Namespace, ReflectionKind.Module],
+ 			Directory: "Module",
+ 			Template: this.reflectionTemplate,
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.TypeAlias],
+ 			Directory: "Type",
+ 			Template: this.reflectionTemplate,
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Function],
+ 			Directory: "Function",
+ 			Template: this.reflectionTemplate,
+ 		},
+ 		{
+ 			Kind: [ReflectionKind.Variable],
+ 			Directory: "Variable",
+ 			Template: this.reflectionTemplate,
+ 		},
+ 	];
+ }
+ 
+ import type Mapping from "../../Interface/Mapping.js";
+ import type Context from "../../Interface/TypeDoc/Context.js";
+ import type Type from "../../Interface/TypeDoc/Theme.js";
+ 
+ import {
+ 	DeclarationReflection,
+ 	DefaultTheme,
+ 	ReflectionKind,
+ 	UrlMapping,
+ } from "typedoc";
+ 
+ export const { default: _Context } = await import("./Context.js");
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index d8292f8..c11248e 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 			--plugin @mxssfd/typedoc-theme \
- 			--theme my-theme \
+ 			--plugin ${resolve(`${Current}/../../Target/Function/TypeDoc.js`)} \
+ 			--theme TypeScriptESBuild \
- 			)} && \
- 			mv ./Documentation/functions ./Documentation/Function && \
- 			find ./Documentation/ -iname *.html -exec sed -i -E 's:(href=".*)functions/:\\1Function/:g' {} \;`
+ 			)}`
diff --git a/Source/Function/TypeDoc.tsx b/Source/Function/TypeDoc.tsx
new file mode 100644
index 0000000..af34fa0
--- /dev/null
+++ b/Source/Function/TypeDoc.tsx
+ /**
+  * @module TypeDoc
+  *
+  */
+ export const load = (...[Application]: Parameters<Type["load"]>) =>
+ 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
+ 
+ import type Type from "../Interface/TypeDoc.js";
+ 
+ import Theme from "../Class/TypeDoc/Theme.js";
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
index d028236..3e41884 100644
--- a/Source/Interface/File.ts
+++ b/Source/Interface/File.ts
- 	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
+ 	// rome-ignore lint/suspicious/noExplicitAny:
diff --git a/Source/Interface/Mapping.ts b/Source/Interface/Mapping.ts
new file mode 100644
index 0000000..2805e9b
--- /dev/null
+++ b/Source/Interface/Mapping.ts
+ /**
+  * Defines a mapping of a {@link Models.Kind} to a template file.
+  *
+  * Used by {@link DefaultTheme} to map reflections to output files.
+  *
+  * @module TypeDoc
+  *
+  */
+ export default interface Type {
+ 	/**
+ 	 * {@link DeclarationReflection.kind} this rule applies to.
+ 	 */
+ 	Kind: ReflectionKind[];
+ 
+ 	/**
+ 	 * The name of the directory the output files should be written to.
+ 	 */
+ 	Directory: string;
+ 
+ 	/**
+ 	 * The name of the template that should be used to render the reflection.
+ 	 */
+ 	// rome-ignore lint/suspicious/noExplicitAny:
+ 	Template: RenderTemplate<PageEvent<any>>;
+ }
+ 
+ import type { PageEvent, ReflectionKind, RenderTemplate } from "typedoc";
diff --git a/Source/Interface/TypeDoc.ts b/Source/Interface/TypeDoc.ts
new file mode 100644
index 0000000..b114750
--- /dev/null
+++ b/Source/Interface/TypeDoc.ts
+ /**
+  * @module TypeDoc
+  *
+  */
+ export default interface Type {
+ 	load: (Application: Application) => void;
+ }
+ 
+ import type { Application } from "typedoc";
diff --git a/Source/Interface/TypeDoc/Context.ts b/Source/Interface/TypeDoc/Context.ts
new file mode 100644
index 0000000..56a4407
--- /dev/null
+++ b/Source/Interface/TypeDoc/Context.ts
+ /**
+  * @module TypeDoc
+  *
+  */
+ export default interface Type extends DefaultThemeRenderContext {
+ 	init: () => void;
+ }
+ 
+ import type { DefaultThemeRenderContext } from "typedoc";
diff --git a/Source/Interface/TypeDoc/Theme.ts b/Source/Interface/TypeDoc/Theme.ts
new file mode 100644
index 0000000..31870db
--- /dev/null
+++ b/Source/Interface/TypeDoc/Theme.ts
+ /**
+  * @module TypeDoc
+  *
+  */
+ export default interface Type {
+ 	getRenderContext: (Event: PageEvent<Reflection>) => Context;
+ 
+ 	buildUrls: (
+ 		Reflection: DeclarationReflection,
+ 		// rome-ignore lint/suspicious/noExplicitAny:
+ 		URLs: UrlMapping<any>[]
+ 		// rome-ignore lint/suspicious/noExplicitAny:
+ 	) => UrlMapping<any>[];
+ 
+ 	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
+ 
+ 	Mapping: Mapping[];
+ }
+ 
+ import type Mapping from "../Mapping.js";
+ import type Context from "./Context.js";
+ 
+ import type {
+ 	DeclarationReflection,
+ 	PageEvent,
+ 	Reflection,
+ 	UrlMapping,
+ } from "typedoc";
diff --git a/tsconfig.json b/tsconfig.json
index 12e0400..48a4366 100644
--- a/tsconfig.json
+++ b/tsconfig.json
- 		"outDir": "Target"
+ 		"outDir": "Target",
+ 		"jsx": "react",
+ 		"jsxFactory": "JSX.createElement",
+ 		"jsxFragmentFactory": "JSX.Fragment"

🗣️ Summary from v0.2.4 to v0.2.5 in .
diff --git a/package.json b/package.json
index 76402b4..7dd9eef 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.4",
+ 	"version": "0.2.5",
diff --git a/README.md b/README.md
index 940b224..885b8dc 100644
--- a/README.md
+++ b/README.md
- Builds all your TypeScript files into JavaScript.
+ Builds all your TypeScript files into JavaScript and generates documentation for
+ it using [TypeDoc][typedoc].
- 		"typescript-esbuild": "0.2.4"
+ 		"typescript-esbuild": "0.2.5"
- ### TypeScript Configuration
+ See an example of a configuration file in [ESBuild.ts](Source/Object/ESBuild.ts)
- See an example of a configuration file in
- [Configuration.ts](Source/Object/Configuration.ts)
+ ### TypeScript Configuration
- [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
+ [typedoc]: https://npmjs.org/typedoc
+ [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild

🗣️ Summary from v0.2.5 to v0.2.6 in .
diff --git a/package.json b/package.json
index 7dd9eef..de6676b 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.5",
+ 	"version": "0.2.6",
- 	"description": "🌀 Builds all your TypeScript files into JavaScript from a given folder using esbuild.",
+ 	"description": "🌀 Builds all your TypeScript files into JavaScript and generates documentation for it using TypeDoc.",
- 		"esbuild"
+ 		"esbuild",
+ 		"typedoc"
+ 		"typedoc-plugin-keywords": "1.5.0",
diff --git a/README.md b/README.md
index 885b8dc..98c3347 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.5"
+ 		"typescript-esbuild": "0.2.6"
diff --git a/Source/Class/TypeDoc/Context.ts b/Source/Class/TypeDoc/Context.ts
index 70cadaa..2306fd6 100644
--- a/Source/Class/TypeDoc/Context.ts
+++ b/Source/Class/TypeDoc/Context.ts
- export default class
+ export default class _Class
diff --git a/Source/Class/TypeDoc/Theme.ts b/Source/Class/TypeDoc/Theme.ts
index dd83a9b..6428ecf 100644
--- a/Source/Class/TypeDoc/Theme.ts
+++ b/Source/Class/TypeDoc/Theme.ts
- 		const { Directory, Template } = this._Mapping(Reflection) ?? {};
+ 		const { Directory } = this._Mapping(Reflection) ?? {};
- 		if (Directory && Template) {
+ 		if (Directory) {
- 				URLs.push(new UrlMapping(URL, Reflection, Template));
+ 
+ 				URLs.push(
+ 					new UrlMapping(URL, Reflection, this.reflectionTemplate)
+ 				);
- 			Template: this.reflectionTemplate,
- 			Template: this.reflectionTemplate,
- 			Template: this.reflectionTemplate,
- 			Template: this.reflectionTemplate,
- 			Template: this.reflectionTemplate,
- 			Template: this.reflectionTemplate,
- 			Template: this.reflectionTemplate,
- import type Mapping from "../../Interface/Mapping.js";
+ import type Mapping from "../../Interface/TypeDoc/Mapping.js";
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index c11248e..d55d7b0 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 	const { metafile } = await (
+ 	console.log(
+ 		await (
+ 			await import("esbuild")
+ 		).analyzeMetafile(
+ 			(
+ 				await (
- 	);
- 
- 	console.log(
- 		metafile
- 			? await (
- 					await import("esbuild")
- 			  ).analyzeMetafile(metafile, {
+ 				)
+ 			)?.metafile ?? "",
+ 			{
- 			  })
- 			: {}
+ 			}
+ 		)
- 	if (Option?.TypeScript) {
- 		Exec(`tsc -p ${Option.TypeScript}`);
- 	} else {
- 		Exec("tsc");
- 	}
+ 	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
- 		`typedoc \
- 			--commentStyle all \
- 			--gitRevision main \
- 			--customCss ${resolve(`${Current}/../Sheet/TypeDoc.css`)} \
- 			--includeVersion \
- 			--out ./Documentation \
- 			--plugin typedoc-plugin-remove-references \
- 			--plugin typedoc-plugin-rename-defaults \
- 			--plugin typedoc-plugin-mdn-links \
- 			--plugin typedoc-plugin-zod \
- 			--plugin typedoc-plugin-merge-modules \
- 			--plugin ${resolve(`${Current}/../../Target/Function/TypeDoc.js`)} \
- 			--theme TypeScriptESBuild \
- 			--entryPointStrategy expand \
- 			--mergeModulesRenameDefaults \
- 			--mergeModulesMergeMode module \
- 			--entryPoints ${Object.values(Configuration.entryPoints).join(
+ 		[
+ 			"typedoc",
+ 			"--commentStyle all",
+ 			"--gitRevision main",
+ 			`--customCss ${resolve(`${Current}/../Sheet/TypeDoc.css`)}`,
+ 			"--includeVersion",
+ 			"--out ./Documentation",
+ 			`--plugin ${resolve(
+ 				`${Current}/../../Target/Function/TypeDoc.js`
+ 			)}`,
+ 			"--plugin typedoc-plugin-remove-references",
+ 			"--plugin typedoc-plugin-rename-defaults",
+ 			"--plugin typedoc-plugin-mdn-links",
+ 			"--plugin typedoc-plugin-zod",
+ 			"--plugin typedoc-plugin-merge-modules",
+ 			"--plugin typedoc-plugin-keywords",
+ 			`--keywords ${(
+ 				await (
+ 					await import("../Function/JSON.js")
+ 				).default("package.json", process.cwd())
+ 			)?.keywords?.join(" --keywords ")}`,
+ 			"--theme TypeScriptESBuild",
+ 			"--entryPointStrategy expand",
+ 			"--mergeModulesRenameDefaults",
+ 			"--mergeModulesMergeMode module-category",
+ 			`--entryPoints ${Object.values(Configuration.entryPoints).join(
- 			)}`
+ 			)}`,
+ 		].join(" ")
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 6219be1..0137920 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- 				).default("../Notation/TypeScript.json", import.meta.url)
+ 				).default(
+ 					"../Notation/TypeScript.json",
+ 					(await import("path")).dirname(
+ 						(await import("url")).fileURLToPath(import.meta.url)
+ 					)
+ 				)
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 504dc40..20a4ba4 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- 			).readFile(
- 				`${
- 					From
- 						? (await import("path")).dirname(
- 								(await import("url")).fileURLToPath(
- 									From ?? import.meta.url
- 								)
- 						  )
- 						: "."
- 				}/${File}`,
- 				"utf-8"
- 			)
+ 			).readFile(`${From ?? "."}/${File}`, "utf-8")
diff --git a/Source/Function/TypeDoc.ts b/Source/Function/TypeDoc.ts
new file mode 100644
index 0000000..af34fa0
--- /dev/null
+++ b/Source/Function/TypeDoc.ts
+ /**
+  * @module TypeDoc
+  *
+  */
+ export const load = (...[Application]: Parameters<Type["load"]>) =>
+ 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
+ 
+ import type Type from "../Interface/TypeDoc.js";
+ 
+ import Theme from "../Class/TypeDoc/Theme.js";
diff --git a/Source/Function/TypeDoc.tsx b/Source/Function/TypeDoc.tsx
deleted file mode 100644
index af34fa0..0000000
--- a/Source/Function/TypeDoc.tsx
+++ /dev/null
- /**
-  * @module TypeDoc
-  *
-  */
- export const load = (...[Application]: Parameters<Type["load"]>) =>
- 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
- 
- import type Type from "../Interface/TypeDoc.js";
- 
- import Theme from "../Class/TypeDoc/Theme.js";
diff --git a/Source/Interface/Mapping.ts b/Source/Interface/Mapping.ts
deleted file mode 100644
index 2805e9b..0000000
--- a/Source/Interface/Mapping.ts
+++ /dev/null
- /**
-  * Defines a mapping of a {@link Models.Kind} to a template file.
-  *
-  * Used by {@link DefaultTheme} to map reflections to output files.
-  *
-  * @module TypeDoc
-  *
-  */
- export default interface Type {
- 	/**
- 	 * {@link DeclarationReflection.kind} this rule applies to.
- 	 */
- 	Kind: ReflectionKind[];
- 
- 	/**
- 	 * The name of the directory the output files should be written to.
- 	 */
- 	Directory: string;
- 
- 	/**
- 	 * The name of the template that should be used to render the reflection.
- 	 */
- 	// rome-ignore lint/suspicious/noExplicitAny:
- 	Template: RenderTemplate<PageEvent<any>>;
- }
- 
- import type { PageEvent, ReflectionKind, RenderTemplate } from "typedoc";
diff --git a/Source/Interface/TypeDoc/Mapping.ts b/Source/Interface/TypeDoc/Mapping.ts
new file mode 100644
index 0000000..3a587dc
--- /dev/null
+++ b/Source/Interface/TypeDoc/Mapping.ts
+ /**
+  * Defines a mapping of a {@link Models.Kind} to a template file.
+  *
+  * Used by {@link DefaultTheme} to map reflections to output files.
+  *
+  * @module TypeDoc
+  *
+  */
+ export default interface Type {
+ 	/**
+ 	 * {@link DeclarationReflection.kind} this rule applies to.
+ 	 */
+ 	Kind: ReflectionKind[];
+ 
+ 	/**
+ 	 * The name of the directory the output files should be written to.
+ 	 */
+ 	Directory: string;
+ }
+ 
+ import type { ReflectionKind } from "typedoc";
diff --git a/Source/Interface/TypeDoc/Theme.ts b/Source/Interface/TypeDoc/Theme.ts
index 31870db..8c257d2 100644
--- a/Source/Interface/TypeDoc/Theme.ts
+++ b/Source/Interface/TypeDoc/Theme.ts
- import type Mapping from "../Mapping.js";
+ import type Mapping from "./Mapping.js";
diff --git a/Source/Sheet/TypeDoc.css b/Source/Sheet/TypeDoc.css
index d43ae60..e0e917e 100644
--- a/Source/Sheet/TypeDoc.css
+++ b/Source/Sheet/TypeDoc.css
+ 	--color-accent: #2463eb;
- .tsd-navigation.settings {
- 	display: none !important;
- }
- 
- #tsd-search .field label {
+ body #tsd-search .field label {
+ 	text-align: center;
+ }
+ 
+ body #tsd-search.has-focus .field label {
+ 	display: none;
+ }
+ 
+ body #tsd-search .field input {
+ 	z-index: 2;
+ }
+ 
+ body pre,
+ body .tsd-page-toolbar,
+ body .tsd-generator {
+ 	border: none;
+ }
+ 
+ body .tsd-navigation a,
+ body .tsd-navigation summary > span,
+ body .tsd-page-navigation a {
+ 	padding: 0.5rem;
+ 	border-radius: 8px;
+ }
+ 
+ .tsd-signature,
+ .tsd-signatures .tsd-signature {
+ 	border-radius: 12px;
+ 	border-width: 2px;

🗣️ Summary from v0.2.6 to v0.2.7 in .
diff --git a/package.json b/package.json
index de6676b..233ea05 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.6",
+ 	"version": "0.2.7",
diff --git a/README.md b/README.md
index 98c3347..f99c64e 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.6"
+ 		"typescript-esbuild": "0.2.7"
diff --git a/Source/Sheet/TypeDoc.css b/Source/Sheet/TypeDoc.css
index e0e917e..21fdbbb 100644
--- a/Source/Sheet/TypeDoc.css
+++ b/Source/Sheet/TypeDoc.css
- 	--color-background: #000;
- 	--color-background-secondary: #000;
+ 	--dark-color-background: #000;
+ 	--dark-color-background-secondary: #000;
+ 	--dark-code-background: #040404;

🗣️ Summary from v0.2.7 to v0.2.8 in .
diff --git a/package.json b/package.json
index 233ea05..410713d 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.7",
+ 	"version": "0.2.8",
diff --git a/README.md b/README.md
index f99c64e..358f134 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.7"
+ 		"typescript-esbuild": "0.2.8"
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index d55d7b0..db71bc2 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 			`--keywords ${(
+ 			`--keywords ${
+ 				(
- 			)?.keywords?.join(" --keywords ")}`,
+ 				)?.keywords?.join(" --keywords ") ?? " project "
+ 			}`,
- 			"--mergeModulesMergeMode module-category",
+ 			"--mergeModulesMergeMode module",
diff --git a/Source/Sheet/TypeDoc.css b/Source/Sheet/TypeDoc.css
index 21fdbbb..30f2280 100644
--- a/Source/Sheet/TypeDoc.css
+++ b/Source/Sheet/TypeDoc.css
+ 
+ 	--dark-hl-0: #ffdd00;
+ 	--dark-hl-1: #ff66ff;
+ 	--dark-hl-2: #ff4444;
+ 	--dark-hl-3: #44ffff;
+ 	--dark-hl-4: #44ff44;

🗣️ Summary from v0.2.8 to v0.2.9 in .
diff --git a/package.json b/package.json
index 410713d..331e111 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.8",
+ 	"version": "0.2.9",
diff --git a/README.md b/README.md
index 358f134..612e740 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.8"
+ 		"typescript-esbuild": "0.2.9"
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index db71bc2..bf7b301 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 			`--customCss ${resolve(`${Current}/../Sheet/TypeDoc.css`)}`,
+ 			`--customCss ${resolve(`${Current}/../Stylesheet/TypeDoc.css`)}`,
diff --git a/Source/Object/ESBuild.ts b/Source/Object/ESBuild.ts
index 1c99a33..407c126 100644
--- a/Source/Object/ESBuild.ts
+++ b/Source/Object/ESBuild.ts
- 					from: "./Source/Sheet/TypeDoc.css",
- 					to: "./Sheet/",
+ 					from: "./Source/Stylesheet/TypeDoc.css",
+ 					to: "./Stylesheet/",
diff --git a/Source/Sheet/TypeDoc.css b/Source/Sheet/TypeDoc.css
deleted file mode 100644
index 30f2280..0000000
--- a/Source/Sheet/TypeDoc.css
+++ /dev/null
- :root {
- 	--dark-color-background: #000;
- 	--dark-color-background-secondary: #000;
- 	--dark-code-background: #040404;
- 	--color-accent: #2463eb;
- 
- 	--dark-hl-0: #ffdd00;
- 	--dark-hl-1: #ff66ff;
- 	--dark-hl-2: #ff4444;
- 	--dark-hl-3: #44ffff;
- 	--dark-hl-4: #44ff44;
- }
- 
- body #tsd-search .field label {
- 	left: 50%;
- 	margin-left: -20px;
- 	z-index: 1;
- 	text-align: center;
- }
- 
- body #tsd-search.has-focus .field label {
- 	display: none;
- }
- 
- body #tsd-search .field input {
- 	z-index: 2;
- }
- 
- body pre,
- body .tsd-page-toolbar,
- body .tsd-generator {
- 	border: none;
- }
- 
- body .tsd-navigation a,
- body .tsd-navigation summary > span,
- body .tsd-page-navigation a {
- 	padding: 0.5rem;
- 	border-radius: 8px;
- }
- 
- .tsd-signature,
- .tsd-signatures .tsd-signature {
- 	border-radius: 12px;
- 	border-width: 2px;
- }
diff --git a/Source/Stylesheet/TypeDoc.css b/Source/Stylesheet/TypeDoc.css
new file mode 100644
index 0000000..2a15bee
--- /dev/null
+++ b/Source/Stylesheet/TypeDoc.css
+ :root {
+ 	--dark-color-background: #000;
+ 	--dark-color-background-secondary: #000;
+ 	--dark-code-background: #040404;
+ 	--color-accent: #2463eb;
+ 
+ 	--dark-hl-0: #ffdd00;
+ 	--dark-hl-1: #ff66ff;
+ 	--dark-hl-2: #ff4444;
+ 	--dark-hl-3: #44ffff;
+ 	--dark-hl-4: #44ff44;
+ }
+ 
+ body #tsd-search .field label {
+ 	left: 50%;
+ 	margin-left: -20px;
+ 	z-index: 1;
+ 	text-align: center;
+ }
+ 
+ body #tsd-search.has-focus .field label {
+ 	display: none;
+ }
+ 
+ body #tsd-search .field input {
+ 	z-index: 2;
+ }
+ 
+ body pre,
+ body .tsd-page-toolbar,
+ body .tsd-generator {
+ 	border: none;
+ }
+ 
+ body .tsd-navigation a,
+ body .tsd-navigation summary > span,
+ body .tsd-page-navigation a {
+ 	padding: 0.5rem;
+ 	border-radius: 8px;
+ }
+ 
+ .tsd-signature,
+ .tsd-signatures .tsd-signature,
+ .tsd-typography td,
+ .tsd-typography th {
+ 	border-radius: 12px;
+ 	border-width: 2px;
+ }

🗣️ Summary from v0.2.9 to v0.3.0 in .
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index dcb957d..ffde8df 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
-             - uses: pozil/auto-assign-issue@v1.12.0
+             - uses: pozil/auto-assign-issue@v1.13.0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 16ee310..84d881c 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-                 node-version: [16, 18, 19]
+                 node-version: [18, 19, 20]
-             - uses: actions/checkout@v4.1.0
+             - uses: actions/checkout@v4.1.1
-                           --child-concurrency=9999,
-                           --network-concurrency=9999,
-             - uses: actions/setup-node@v3.8.1
+             - uses: actions/setup-node@v4.0.0
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index 2551c53..c890b37 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/checkout@v4.1.0
+             - uses: actions/checkout@v4.1.1
-             - uses: actions/setup-node@v3.8.1
+             - uses: actions/setup-node@v4.0.0
diff --git a/.npmignore b/.npmignore
index 4639469..d0265ba 100644
--- a/.npmignore
+++ b/.npmignore
- .turbo/
+ Source/
+ Documentation/
- Source/
- Documentation/
diff --git a/package.json b/package.json
index 331e111..95061ac 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.2.9",
+ 	"version": "0.3.0",
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts' 'Source/**/*.tsx'"
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts'"
- 		"@types/node": "20.8.0",
- 		"commander": "11.0.0",
+ 		"@types/node": "20.8.8",
+ 		"commander": "11.1.0",
- 		"esbuild": "0.19.4",
+ 		"esbuild": "0.19.5",
- 		"typedoc": "0.25.1",
+ 		"typedoc": "0.25.2",
- 		"typedoc-plugin-rename-defaults": "0.6.6",
+ 		"typedoc-plugin-rename-defaults": "0.6.7",
diff --git a/README.md b/README.md
index 612e740..c0229f8 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.2.9"
+ 		"typescript-esbuild": "0.3.0"
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
new file mode 100644
index 0000000..a68861d
--- /dev/null
+++ b/Source/Class/Theme.ts
+ /**
+  * @module Theme
+  *
+  */
+ export default class
+ 	extends (await import("typedoc")).DefaultTheme
+ 	implements Type
+ {
+ 	public override buildUrls(
+ 		...[Reflection, URLs]: Parameters<Type["buildUrls"]>
+ 	) {
+ 		const { Directory } = this._Mapping(Reflection) ?? {};
+ 
+ 		if (Directory) {
+ 			if (!(Reflection.url && URL_PREFIX.test(Reflection.url))) {
+ 				const URL = [Directory, `${getUrl(Reflection)}.html`].join("/");
+ 
+ 				URLs.push(
+ 					new UrlMapping(URL, Reflection, this.reflectionTemplate)
+ 				);
+ 
+ 				Reflection.url = URL;
+ 				Reflection.hasOwnDocument = true;
+ 			}
+ 
+ 			Reflection.traverse((Child) => {
+ 				if (Child instanceof DeclarationReflection) {
+ 					this.buildUrls(Child, URLs);
+ 				} else {
+ 					applyAnchorUrl(Child, Reflection);
+ 				}
+ 
+ 				return true;
+ 			});
+ 		} else if (Reflection.parent) {
+ 			applyAnchorUrl(Reflection, Reflection.parent);
+ 		}
+ 
+ 		return URLs;
+ 	}
+ 
+ 	_Mapping = (...[Reflection]: Parameters<Type["_Mapping"]>) =>
+ 		this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));
+ 
+ 	Mapping: Mapping[] = [
+ 		{
+ 			Kind: [Class],
+ 			Directory: "Class",
+ 		},
+ 		{
+ 			Kind: [Interface],
+ 			Directory: "Interface",
+ 		},
+ 		{
+ 			Kind: [Enum],
+ 			Directory: "Enum",
+ 		},
+ 		{
+ 			Kind: [Namespace, Module],
+ 			Directory: "Module",
+ 		},
+ 		{
+ 			Kind: [TypeAlias],
+ 			Directory: "Type",
+ 		},
+ 		{
+ 			Kind: [_Function],
+ 			Directory: "Function",
+ 		},
+ 		{
+ 			Kind: [Variable],
+ 			Directory: "Variable",
+ 		},
+ 	];
+ }
+ 
+ import type Mapping from "../Interface/Mapping.js";
+ import type Type from "../Interface/Theme.js";
+ 
+ export const {
+ 	DeclarationReflection,
+ 	DefaultTheme: { URL_PREFIX, getUrl, applyAnchorUrl },
+ 	ReflectionKind: {
+ 		Interface,
+ 		Class,
+ 		Enum,
+ 		Namespace,
+ 		Module,
+ 		TypeAlias,
+ 		Function: _Function,
+ 		Variable,
+ 	},
+ 	UrlMapping,
+ } = await import("typedoc");
diff --git a/Source/Class/TypeDoc/Context.ts b/Source/Class/TypeDoc/Context.ts
deleted file mode 100644
index 2306fd6..0000000
--- a/Source/Class/TypeDoc/Context.ts
+++ /dev/null
- /**
-  * @module TypeDoc
-  *
-  */
- export default class _Class
- 	extends (await import("typedoc")).DefaultThemeRenderContext
- 	implements Type
- {
- 	constructor(
- 		Theme: DefaultTheme,
- 		Page: PageEvent<Reflection>,
- 		Option: Options
- 	) {
- 		super(Theme, Page, Option);
- 
- 		this.init();
- 	}
- 
- 	init() {}
- }
- 
- import type Type from "../../Interface/TypeDoc/Context.js";
- 
- import type { DefaultTheme, Options, PageEvent, Reflection } from "typedoc";
diff --git a/Source/Class/TypeDoc/Theme.ts b/Source/Class/TypeDoc/Theme.ts
deleted file mode 100644
index 6428ecf..0000000
--- a/Source/Class/TypeDoc/Theme.ts
+++ /dev/null
- /**
-  * @module TypeDoc
-  *
-  */
- export default class
- 	extends (await import("typedoc")).DefaultTheme
- 	implements Type
- {
- 	override getRenderContext = (
- 		...[Event]: Parameters<Type["getRenderContext"]>
- 	): Context => new _Context(this, Event, this.application.options);
- 
- 	override buildUrls(...[Reflection, URLs]: Parameters<Type["buildUrls"]>) {
- 		const { Directory } = this._Mapping(Reflection) ?? {};
- 
- 		if (Directory) {
- 			if (
- 				!Reflection.url ||
- 				!DefaultTheme.URL_PREFIX.test(Reflection.url)
- 			) {
- 				const URL = [
- 					Directory,
- 					`${DefaultTheme.getUrl(Reflection)}.html`,
- 				].join("/");
- 
- 				URLs.push(
- 					new UrlMapping(URL, Reflection, this.reflectionTemplate)
- 				);
- 
- 				Reflection.url = URL;
- 				Reflection.hasOwnDocument = true;
- 			}
- 
- 			Reflection.traverse((Child) => {
- 				if (Child instanceof DeclarationReflection) {
- 					this.buildUrls(Child, URLs);
- 				} else {
- 					DefaultTheme.applyAnchorUrl(Child, Reflection);
- 				}
- 
- 				return true;
- 			});
- 		} else if (Reflection.parent) {
- 			DefaultTheme.applyAnchorUrl(Reflection, Reflection.parent);
- 		}
- 
- 		return URLs;
- 	}
- 
- 	_Mapping = (...[Reflection]: Parameters<Type["_Mapping"]>) =>
- 		this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));
- 
- 	Mapping: Mapping[] = [
- 		{
- 			Kind: [ReflectionKind.Class],
- 			Directory: "Class",
- 		},
- 		{
- 			Kind: [ReflectionKind.Interface],
- 			Directory: "Interface",
- 		},
- 		{
- 			Kind: [ReflectionKind.Enum],
- 			Directory: "Enum",
- 		},
- 		{
- 			Kind: [ReflectionKind.Namespace, ReflectionKind.Module],
- 			Directory: "Module",
- 		},
- 		{
- 			Kind: [ReflectionKind.TypeAlias],
- 			Directory: "Type",
- 		},
- 		{
- 			Kind: [ReflectionKind.Function],
- 			Directory: "Function",
- 		},
- 		{
- 			Kind: [ReflectionKind.Variable],
- 			Directory: "Variable",
- 		},
- 	];
- }
- 
- import type Context from "../../Interface/TypeDoc/Context.js";
- import type Mapping from "../../Interface/TypeDoc/Mapping.js";
- import type Type from "../../Interface/TypeDoc/Theme.js";
- 
- import {
- 	DeclarationReflection,
- 	DefaultTheme,
- 	ReflectionKind,
- 	UrlMapping,
- } from "typedoc";
- 
- export const { default: _Context } = await import("./Context.js");
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index bf7b301..c5ba9a3 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 	File.forEach(async (File) =>
- 		(
- 			await (
+ 	for (const _File of File) {
+ 		for (const __File of await (
- 			).default(File.replaceAll("'", "").replaceAll('"', ""))
- 		).forEach((File) => Pipe.push(File))
- 	);
+ 		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
+ 			Pipe.push(__File);
+ 		}
+ 	}
- 	const Configuration = deepmerge(
- 		(await import("../Object/ESBuild.js")).default,
+ 	const Configuration = Merge(
+ 		(await import("../Variable/ESBuild.js")).default,
- 						? deepmerge(
+ 						? Merge(
- 			`--customCss ${resolve(`${Current}/../Stylesheet/TypeDoc.css`)}`,
+ 			`--customCss ${resolve(`${Current}/../Stylesheet/Theme.css`)}`,
- 			`--plugin ${resolve(
- 				`${Current}/../../Target/Function/TypeDoc.js`
- 			)}`,
+ 			`--plugin ${resolve(`${Current}/../../Target/Variable/Load.js`)}`,
+ 			"--searchInComments",
- 				)?.keywords?.join(" --keywords ") ?? " project "
+ 				)?.keywords?.join(" --keywords ") ?? " typescript-esbuild "
- export const { deepmerge } = await import("deepmerge-ts");
+ export const { default: Merge } = await import("../Function/Merge.js");
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 0d71924..749769c 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 		const Exec = (await import("child_process")).exec(Command);
+ 		const { stdout } = (await import("child_process")).exec(Command);
- 			Exec.stdout?.on("data", (Data) => Echo(Data));
+ 			stdout?.on("data", (Data) => Echo(Data));
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
new file mode 100644
index 0000000..8586054
--- /dev/null
+++ b/Source/Function/Merge.ts
+ /**
+  * @module Merge
+  *
+  */
+ export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
+ 	mergeArrays: false,
+ }) satisfies Type<Generic> as Type<Generic>;
+ 
+ import type Type from "../Interface/Merge.js";
+ import type { Generic } from "../Interface/Merge.js";
diff --git a/Source/Function/TypeDoc.ts b/Source/Function/TypeDoc.ts
deleted file mode 100644
index af34fa0..0000000
--- a/Source/Function/TypeDoc.ts
+++ /dev/null
- /**
-  * @module TypeDoc
-  *
-  */
- export const load = (...[Application]: Parameters<Type["load"]>) =>
- 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
- 
- import type Type from "../Interface/TypeDoc.js";
- 
- import Theme from "../Class/TypeDoc/Theme.js";
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 50666a4..0f96c7e 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 	 * @param {string} Command - The 'Command' parameter is a string that represents the
+ 	 * @param Command - The 'Command' parameter is a string that represents the
- 	 * @param {boolean|function} [Echo] - An optional parameter that controls whether the stdout
+ 	 * @param Echo - An optional parameter that controls whether the stdout
- 		// rome-ignore lint/suspicious/noExplicitAny:
+ 		// biome-ignore lint/suspicious/noExplicitAny:
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
index 3e41884..607aee2 100644
--- a/Source/Interface/File.ts
+++ b/Source/Interface/File.ts
- 	 * @param {string} Path - The 'Path' parameter is a string that represents the file path of the file
+ 	 * @param Path - The 'Path' parameter is a string that represents the file path of the file
- 	// rome-ignore lint/suspicious/noExplicitAny:
+ 	// biome-ignore lint/suspicious/noExplicitAny:
diff --git a/Source/Interface/Load.ts b/Source/Interface/Load.ts
new file mode 100644
index 0000000..fda2db9
--- /dev/null
+++ b/Source/Interface/Load.ts
+ /**
+  * @module Load
+  *
+  */
+ export default interface Type {
+ 	/**
+ 	 * The `Load` function is responsible for loading a plugin into the TypeDoc instance.
+ 	 *
+ 	 * @param Application - The `Application` parameter is an instance of TypeDoc's Application
+ 	 * class, representing the TypeDoc application to which the plugin should be loaded.
+ 	 *
+ 	 */
+ 	load: (Application: Application) => void;
+ }
+ 
+ import type { Application } from "typedoc";
diff --git a/Source/Interface/Mapping.ts b/Source/Interface/Mapping.ts
new file mode 100644
index 0000000..5b91846
--- /dev/null
+++ b/Source/Interface/Mapping.ts
+ /**
+  * @module Mapping
+  *
+  * Defines a mapping of a {@link Models.Kind} to a template file.
+  *
+  * Used by {@link DefaultTheme} to map reflections to output files.
+  *
+  */
+ export default interface Type {
+ 	/**
+ 	 * {@link DeclarationReflection.kind} this rule applies to.
+ 	 */
+ 	Kind: ReflectionKind[];
+ 
+ 	/**
+ 	 * The name of the directory the output files should be written to.
+ 	 */
+ 	Directory: string;
+ }
+ 
+ import type { ReflectionKind } from "typedoc";
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
new file mode 100644
index 0000000..5e66d23
--- /dev/null
+++ b/Source/Interface/Merge.ts
+ /**
+  * @module Merge
+  *
+  * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeMergeFunctionsURIs.
+  *
+  * @template PMF - A type parameter representing Partial<DeepMergeMergeFunctionsURIs>.
+  *
+  */
+ export default interface Type<
+ 	PMF extends Partial<DeepMergeMergeFunctionsURIs>,
+ > {
+ 	/**
+ 	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
+ 	 *
+ 	 * @param ...Objects - An arbitrary number of objects to be merged.
+ 	 *
+ 	 */
+ 	<Ts extends readonly unknown[]>(
+ 		...Objects: Ts
+ 	): DeepMergeHKT<
+ 		Ts,
+ 		GetDeepMergeMergeFunctionsURIs<PMF>,
+ 		DeepMergeBuiltInMetaData
+ 	>;
+ }
+ 
+ export interface Generic {
+ 	DeepMergeArraysURI: DeepMergeLeafURI;
+ }
+ 
+ import type {
+ 	DeepMergeBuiltInMetaData,
+ 	DeepMergeHKT,
+ 	DeepMergeLeafURI,
+ 	DeepMergeMergeFunctionsURIs,
+ 	GetDeepMergeMergeFunctionsURIs,
+ } from "deepmerge-ts";
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
new file mode 100644
index 0000000..2f3506c
--- /dev/null
+++ b/Source/Interface/Theme.ts
+ /**
+  * @module Theme
+  *
+  * Represents an interface for defining a theme with various methods and properties.
+  */
+ export default interface Type extends DefaultTheme {
+ 	/**
+ 	 * A function that builds URLs for a given DeclarationReflection and an array of URLs mappings.
+ 	 *
+ 	 * @param Reflection - The DeclarationReflection for which URLs are being built.
+ 	 *
+ 	 * @param URLs - An array of URLs mappings with any data type.
+ 	 *
+ 	 */
+ 	buildUrls: (
+ 		Reflection: DeclarationReflection,
+ 		// biome-ignore lint/suspicious/noExplicitAny:
+ 		URLs: UrlMapping<any>[]
+ 		// biome-ignore lint/suspicious/noExplicitAny:
+ 	) => UrlMapping<any>[];
+ 
+ 	/**
+ 	 * A function that maps a DeclarationReflection to a Mapping or returns undefined.
+ 	 *
+ 	 * @param Reflection - The DeclarationReflection to map to a Mapping.
+ 	 *
+ 	 */
+ 	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
+ 
+ 	/**
+ 	 * An array of Mappings representing the theme's mapping configuration.
+ 	 */
+ 	Mapping: Mapping[];
+ }
+ 
+ import type Mapping from "./Mapping.js";
+ 
+ import type {
+ 	DeclarationReflection,
+ 	DefaultTheme,
+ 	UrlMapping,
+ } from "typedoc";
diff --git a/Source/Interface/TypeDoc.ts b/Source/Interface/TypeDoc.ts
deleted file mode 100644
index b114750..0000000
--- a/Source/Interface/TypeDoc.ts
+++ /dev/null
- /**
-  * @module TypeDoc
-  *
-  */
- export default interface Type {
- 	load: (Application: Application) => void;
- }
- 
- import type { Application } from "typedoc";
diff --git a/Source/Interface/TypeDoc/Context.ts b/Source/Interface/TypeDoc/Context.ts
deleted file mode 100644
index 56a4407..0000000
--- a/Source/Interface/TypeDoc/Context.ts
+++ /dev/null
- /**
-  * @module TypeDoc
-  *
-  */
- export default interface Type extends DefaultThemeRenderContext {
- 	init: () => void;
- }
- 
- import type { DefaultThemeRenderContext } from "typedoc";
diff --git a/Source/Interface/TypeDoc/Mapping.ts b/Source/Interface/TypeDoc/Mapping.ts
deleted file mode 100644
index 3a587dc..0000000
--- a/Source/Interface/TypeDoc/Mapping.ts
+++ /dev/null
- /**
-  * Defines a mapping of a {@link Models.Kind} to a template file.
-  *
-  * Used by {@link DefaultTheme} to map reflections to output files.
-  *
-  * @module TypeDoc
-  *
-  */
- export default interface Type {
- 	/**
- 	 * {@link DeclarationReflection.kind} this rule applies to.
- 	 */
- 	Kind: ReflectionKind[];
- 
- 	/**
- 	 * The name of the directory the output files should be written to.
- 	 */
- 	Directory: string;
- }
- 
- import type { ReflectionKind } from "typedoc";
diff --git a/Source/Interface/TypeDoc/Theme.ts b/Source/Interface/TypeDoc/Theme.ts
deleted file mode 100644
index 8c257d2..0000000
--- a/Source/Interface/TypeDoc/Theme.ts
+++ /dev/null
- /**
-  * @module TypeDoc
-  *
-  */
- export default interface Type {
- 	getRenderContext: (Event: PageEvent<Reflection>) => Context;
- 
- 	buildUrls: (
- 		Reflection: DeclarationReflection,
- 		// rome-ignore lint/suspicious/noExplicitAny:
- 		URLs: UrlMapping<any>[]
- 		// rome-ignore lint/suspicious/noExplicitAny:
- 	) => UrlMapping<any>[];
- 
- 	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
- 
- 	Mapping: Mapping[];
- }
- 
- import type Mapping from "./Mapping.js";
- import type Context from "./Context.js";
- 
- import type {
- 	DeclarationReflection,
- 	PageEvent,
- 	Reflection,
- 	UrlMapping,
- } from "typedoc";
diff --git a/Source/Notation/TypeScript.json b/Source/Notation/TypeScript.json
index 8978670..80ad3c6 100644
--- a/Source/Notation/TypeScript.json
+++ b/Source/Notation/TypeScript.json
- 		"verbatimModuleSyntax": true
+ 		"verbatimModuleSyntax": true,
+ 		"noImplicitThis": true,
+ 		"paths": {
+ 			"@Asset/*": ["Source/Asset/*"],
+ 			"@Class/*": ["Source/Class/*"],
+ 			"@Component/*": ["Source/Component/*"],
+ 			"@Context/*": ["Source/Context/*"],
+ 			"@Element/*": ["Source/Element/*"],
+ 			"@Function/*": ["Source/Function/*"],
+ 			"@Interface/*": ["Source/Interface/*"],
+ 			"@Layout/*": ["Source/Layout/*"],
+ 			"@Library/*": ["Source/Library/*"],
+ 			"@Notation/*": ["Source/Notation/*"],
+ 			"@Option/*": ["Source/Option/*"],
+ 			"@Page/*": ["Source/pages/*"],
+ 			"@Script/*": ["Source/Script/*"],
+ 			"@Stylesheet/*": ["Source/Stylesheet/*"],
+ 			"@Type/*": ["Source/Type/*"],
+ 			"@Variable/*": ["Source/Variable/*"]
+ 		}
diff --git a/Source/Object/ESBuild.ts b/Source/Object/ESBuild.ts
deleted file mode 100644
index 407c126..0000000
--- a/Source/Object/ESBuild.ts
+++ /dev/null
- /**
-  * @module ESBuild
-  *
-  */
- export default {
- 	color: true,
- 	format: "esm",
- 	metafile: true,
- 	minify: true,
- 	outdir: "Target",
- 	platform: "node",
- 	target: "esnext",
- 	write: true,
- 	logLevel: "debug",
- 	plugins: [
- 		{
- 			name: "Target",
- 			setup({ onStart, initialOptions: { outdir } }) {
- 				onStart(async () => {
- 					try {
- 						outdir
- 							? await (
- 									await import("fs/promises")
- 							  ).rm(outdir, {
- 									recursive: true,
- 							  })
- 							: {};
- 					} catch (_Error) {}
- 				});
- 			},
- 		},
- 		(await import("esbuild-plugin-copy")).copy({
- 			resolveFrom: "out",
- 			assets: [
- 				{
- 					from: "./Source/Notation/TypeScript.json",
- 					to: "./Notation/",
- 				},
- 				{
- 					from: "./Source/Stylesheet/TypeDoc.css",
- 					to: "./Stylesheet/",
- 				},
- 			],
- 		}),
- 	],
- 	define: {
- 		"process.env.VERSION_PACKAGE": `'${(
- 			await (await import("../Function/JSON.js")).default("package.json")
- 		)?.version}'`,
- 	},
- } satisfies BuildOptions as BuildOptions;
- 
- import type { BuildOptions } from "esbuild";
diff --git a/Source/Stylesheet/Theme.css b/Source/Stylesheet/Theme.css
new file mode 100644
index 0000000..e3a4462
--- /dev/null
+++ b/Source/Stylesheet/Theme.css
+ :root {
+ 	--dark-color-background: #000;
+ 	--dark-color-background-secondary: #000;
+ 	--dark-code-background: #040404;
+ 	--color-accent: #2463eb;
+ 	--dark-hl-0: #ffdd00;
+ 	--dark-hl-1: #ff66ff;
+ 	--dark-hl-2: #ff4444;
+ 	--dark-hl-3: #44ffff;
+ 	--dark-hl-4: #44ff44;
+ }
+ 
+ body #tsd-search .field label {
+ 	left: 50%;
+ 	margin-left: -20px;
+ 	z-index: 1;
+ 	text-align: center;
+ }
+ 
+ body #tsd-search.has-focus .field label {
+ 	display: none;
+ }
+ 
+ body #tsd-search .field input {
+ 	z-index: 2;
+ }
+ 
+ body pre,
+ body .tsd-page-toolbar,
+ body .tsd-generator {
+ 	border: none;
+ }
+ 
+ body .tsd-navigation a,
+ body .tsd-navigation summary > span,
+ body .tsd-page-navigation a {
+ 	padding: 0.5rem;
+ 	border-radius: 8px;
+ }
+ 
+ body .tsd-description .tsd-signatures .tsd-signature,
+ body .tsd-signature,
+ body .tsd-signatures .tsd-signature,
+ body .tsd-typography td,
+ body .tsd-typography th,
+ body code.tsd-tag {
+ 	border-radius: 12px;
+ 	border-width: 2px;
+ }
diff --git a/Source/Stylesheet/TypeDoc.css b/Source/Stylesheet/TypeDoc.css
deleted file mode 100644
index 2a15bee..0000000
--- a/Source/Stylesheet/TypeDoc.css
+++ /dev/null
- :root {
- 	--dark-color-background: #000;
- 	--dark-color-background-secondary: #000;
- 	--dark-code-background: #040404;
- 	--color-accent: #2463eb;
- 
- 	--dark-hl-0: #ffdd00;
- 	--dark-hl-1: #ff66ff;
- 	--dark-hl-2: #ff4444;
- 	--dark-hl-3: #44ffff;
- 	--dark-hl-4: #44ff44;
- }
- 
- body #tsd-search .field label {
- 	left: 50%;
- 	margin-left: -20px;
- 	z-index: 1;
- 	text-align: center;
- }
- 
- body #tsd-search.has-focus .field label {
- 	display: none;
- }
- 
- body #tsd-search .field input {
- 	z-index: 2;
- }
- 
- body pre,
- body .tsd-page-toolbar,
- body .tsd-generator {
- 	border: none;
- }
- 
- body .tsd-navigation a,
- body .tsd-navigation summary > span,
- body .tsd-page-navigation a {
- 	padding: 0.5rem;
- 	border-radius: 8px;
- }
- 
- .tsd-signature,
- .tsd-signatures .tsd-signature,
- .tsd-typography td,
- .tsd-typography th {
- 	border-radius: 12px;
- 	border-width: 2px;
- }
diff --git a/Source/Type/Value.ts b/Source/Type/Value.ts
new file mode 100644
index 0000000..7c1f62c
--- /dev/null
+++ b/Source/Type/Value.ts
+ /**
+  * @module Value
+  *
+  */
+ export type Type<T> = T[keyof T];
+ 
+ export type { Type as default };
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
new file mode 100644
index 0000000..ff84d2c
--- /dev/null
+++ b/Source/Variable/ESBuild.ts
+ /**
+  * @module ESBuild
+  *
+  */
+ export default {
+ 	color: true,
+ 	format: "esm",
+ 	metafile: true,
+ 	minify: true,
+ 	outdir: "Target",
+ 	platform: "node",
+ 	target: "esnext",
+ 	write: true,
+ 	logLevel: "debug",
+ 	plugins: [
+ 		{
+ 			name: "Target",
+ 			setup({ onStart, initialOptions: { outdir } }) {
+ 				onStart(async () => {
+ 					try {
+ 						outdir
+ 							? await (
+ 									await import("fs/promises")
+ 							  ).rm(outdir, {
+ 									recursive: true,
+ 							  })
+ 							: {};
+ 					} catch (_Error) {}
+ 				});
+ 			},
+ 		},
+ 		(await import("esbuild-plugin-copy")).copy({
+ 			resolveFrom: "out",
+ 			assets: [
+ 				{
+ 					from: "./Source/Notation/TypeScript.json",
+ 					to: "./Notation/",
+ 				},
+ 				{
+ 					from: "./Source/Stylesheet/Theme.css",
+ 					to: "./Stylesheet/",
+ 				},
+ 			],
+ 		}),
+ 	],
+ 	define: {
+ 		"process.env.VERSION_PACKAGE": `'${(
+ 			await (await import("../Function/JSON.js")).default("package.json")
+ 		)?.version}'`,
+ 	},
+ } satisfies BuildOptions as BuildOptions;
+ 
+ import type { BuildOptions } from "esbuild";
diff --git a/Source/Variable/Load.ts b/Source/Variable/Load.ts
new file mode 100644
index 0000000..5281fbc
--- /dev/null
+++ b/Source/Variable/Load.ts
+ /**
+  * @module Load
+  *
+  */
+ export const load = (...[Application]: Parameters<Type["load"]>) =>
+ 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
+ 
+ export default {
+ 	load,
+ } satisfies Type as Type;
+ 
+ import type Type from "../Interface/Load.js";
+ 
+ export const { default: Theme } = await import("../Class/Theme.js");
diff --git a/tsconfig.json b/tsconfig.json
index 48a4366..12e0400 100644
--- a/tsconfig.json
+++ b/tsconfig.json
- 		"outDir": "Target",
- 		"jsx": "react",
- 		"jsxFactory": "JSX.createElement",
- 		"jsxFragmentFactory": "JSX.Fragment"
+ 		"outDir": "Target"

🗣️ Summary from v0.3.0 to v0.3.1 in .
diff --git a/package.json b/package.json
index 95061ac..60558f5 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.0",
+ 	"version": "0.3.1",
- 		"@types/node": "20.8.8",
+ 		"@types/node": "20.8.9",
diff --git a/README.md b/README.md
index c0229f8..9e216a1 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.3.0"
+ 		"typescript-esbuild": "0.3.1"
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
index 2f3506c..d9895dd 100644
--- a/Source/Interface/Theme.ts
+++ b/Source/Interface/Theme.ts
- import type {
- 	DeclarationReflection,
- 	DefaultTheme,
- 	UrlMapping,
- } from "typedoc";
+ import type { DeclarationReflection, DefaultTheme, UrlMapping } from "typedoc";

🗣️ Summary from v0.3.1 to v0.3.10 in .
diff --git a/.github/dependabot.yml b/.github/dependabot.yml
index 0bd5833..575fdde 100644
--- a/.github/dependabot.yml
+++ b/.github/dependabot.yml
+ enable-beta-ecosystems: true
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 84d881c..e2c047c 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: pnpm/action-setup@v2.4.0
+             - uses: pnpm/action-setup@v3.0.0
-             - uses: actions/setup-node@v4.0.0
+             - uses: actions/setup-node@v4.0.2
-             - uses: actions/upload-artifact@v3.1.3
+             - uses: actions/upload-artifact@v4.3.1
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index c890b37..fac5bac 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/setup-node@v4.0.0
+             - uses: actions/setup-node@v4.0.2
diff --git a/LICENSE b/LICENSE
index a14ae95..c47b9fa 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2023 Nikola R. Hristov
+ Copyright (c) 2023-2024 Nikola R. Hristov
diff --git a/package.json b/package.json
index 60558f5..add69f4 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.1",
+ 	"version": "0.3.10",
- 	"description": "🌀 Builds all your TypeScript files into JavaScript and generates documentation for it using TypeDoc.",
+ 	"description": "🌀 Builds all your TypeScript files into JavaScript.",
- 	"license": "MIT",
+ 	"license": "SEE LICENSE IN LICENSE",
- 		"name": "Nikola Hristov",
+ 		"name": "Nikola R. Hristov",
- 		"@types/node": "20.8.9",
- 		"commander": "11.1.0",
+ 		"@types/node": "20.11.21",
+ 		"commander": "12.0.0",
- 		"esbuild": "0.19.5",
+ 		"esbuild": "0.20.1",
- 		"fast-glob": "3.3.1",
- 		"typedoc": "0.25.2",
- 		"typedoc-plugin-keywords": "1.5.0",
- 		"typedoc-plugin-mdn-links": "3.1.0",
+ 		"fast-glob": "3.3.2",
+ 		"typedoc": "0.25.9",
+ 		"typedoc-plugin-keywords": "1.6.0",
+ 		"typedoc-plugin-mdn-links": "3.1.17",
- 		"typedoc-plugin-rename-defaults": "0.6.7",
- 		"typedoc-plugin-zod": "1.1.0",
- 		"typescript": "5.2.2"
+ 		"typedoc-plugin-rename-defaults": "0.7.0",
+ 		"typedoc-plugin-zod": "1.1.2",
+ 		"typescript": "5.3.3"
- 		"ts-node": "10.9.1"
+ 		"ts-node": "10.9.2"
diff --git a/README.md b/README.md
index 9e216a1..2561f53 100644
--- a/README.md
+++ b/README.md
- # [TypeScriptESBuild] 🌀
+ # 🌀 [TypeScriptESBuild]
- Builds all your TypeScript files into JavaScript and generates documentation for
- it using [TypeDoc][typedoc].
+ Builds all your TypeScript files into JavaScript.
- 	"name": "package",
- 	},
- 	"devDependencies": {
- 		"typescript-esbuild": "0.3.1"
+ `package.json`
+ 
- See an example of a configuration file in [ESBuild.ts](Source/Object/ESBuild.ts)
+ See an example of a configuration file in
+ [ESBuild.ts](Source/Variable/ESBuild.ts)
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
index a68861d..4067c77 100644
--- a/Source/Class/Theme.ts
+++ b/Source/Class/Theme.ts
- 					new UrlMapping(URL, Reflection, this.reflectionTemplate)
+ 					new UrlMapping(URL, Reflection, this.reflectionTemplate),
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index c5ba9a3..be7b76d 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 		for (const __File of await (
- 			await import("fast-glob")
- 		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
+ 		for (const __File of await (await import("fast-glob")).default(
+ 			_File.replaceAll("'", "").replaceAll('"', ""),
+ 		)) {
- 				])
+ 				]),
- 		}
+ 		},
- 		await (
- 			await import("esbuild")
- 		).analyzeMetafile(
+ 		await (await import("esbuild")).analyzeMetafile(
- 								).default(Option.ESBuild)
+ 								).default(Option.ESBuild),
- 						: Configuration
+ 						: Configuration,
- 			}
- 		)
+ 			},
+ 		),
- 				" --entryPoints "
+ 				" --entryPoints ",
- 		].join(" ")
+ 		].join(" "),
- 	(await import("path")).dirname(import.meta.url)
+ 	(await import("path")).dirname(import.meta.url),
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 749769c..932c4e4 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 	} catch (_Error) {}
+ 	} catch (_Error) {
+ 		console.log(_Error);
+ 	}
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 0137920..08161a7 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- 					(await import("path")).dirname(
- 						(await import("url")).fileURLToPath(import.meta.url)
- 					)
+ 					(
+ 						await import("path")
+ 					).dirname(
+ 						(
+ 							await import("url")
+ 						).fileURLToPath(import.meta.url),
+ 					),
- 			"."
+ 			".",
- 				(await import("typescript")).default.createCompilerHost(options)
+ 				(await import("typescript")).default.createCompilerHost(
+ 					options,
+ 				),
- 		await (
- 			await import("fs/promises")
- 		).writeFile(
+ 		await (await import("fs/promises")).writeFile(
- 					await (await import("fs/promises")).readFile(Path, "utf-8")
+ 					await (
+ 						await import("fs/promises")
+ 					).readFile(Path, "utf-8")
- 				options
- 			)
+ 				options,
+ 			),
- 			(await import("url"))
+ 			(
+ 				await import("url")
+ 			)
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 20a4ba4..9f75935 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- 		).toString()
+ 		).toString(),
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
index ca1a77f..01dce34 100644
--- a/Source/Interface/Build.ts
+++ b/Source/Interface/Build.ts
- 		}
+ 		},
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 0f96c7e..4aa5b30 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 		Echo?: false | ((Return: any) => void)
+ 		Echo?: false | ((Return: any) => void),
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
index d9895dd..84b6915 100644
--- a/Source/Interface/Theme.ts
+++ b/Source/Interface/Theme.ts
- 		URLs: UrlMapping<any>[]
+ 		URLs: UrlMapping<any>[],
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
index ff84d2c..2807c20 100644
--- a/Source/Variable/ESBuild.ts
+++ b/Source/Variable/ESBuild.ts
- 							? await (
- 									await import("fs/promises")
- 							  ).rm(outdir, {
+ 							? await (await import("fs/promises")).rm(
+ 									outdir,
+ 									{
- 							  })
+ 									},
+ 							  )
- 					} catch (_Error) {}
+ 					} catch (_Error) {
+ 						console.log(_Error);
+ 					}
- 		"process.env.VERSION_PACKAGE": `'${(
- 			await (await import("../Function/JSON.js")).default("package.json")
- 		)?.version}'`,
+ 		"process.env.VERSION_PACKAGE": `'${
+ 			(
+ 				await (
+ 					await import("../Function/JSON.js")
+ 				).default("package.json")
+ 			)?.version
+ 		}'`,

🗣️ Summary from v0.3.10 to v0.3.11 in .
diff --git a/package.json b/package.json
index add69f4..3f56978 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.10",
+ 	"version": "0.3.11",
- 		"@types/node": "20.11.21",
+ 		"@types/node": "20.11.25",
- 		"typedoc": "0.25.9",
+ 		"typedoc": "0.25.11",
- 		"typescript": "5.3.3"
+ 		"typescript": "5.4.2"

🗣️ Summary from v0.3.11 to v0.3.12 in .
diff --git a/package.json b/package.json
index 3f56978..d520efd 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.11",
+ 	"version": "0.3.12",

🗣️ Summary from v0.3.12 to v0.3.2 in .
diff --git a/.github/dependabot.yml b/.github/dependabot.yml
index 575fdde..0bd5833 100644
--- a/.github/dependabot.yml
+++ b/.github/dependabot.yml
- enable-beta-ecosystems: true
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index e2c047c..84d881c 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: pnpm/action-setup@v3.0.0
+             - uses: pnpm/action-setup@v2.4.0
-             - uses: actions/setup-node@v4.0.2
+             - uses: actions/setup-node@v4.0.0
-             - uses: actions/upload-artifact@v4.3.1
+             - uses: actions/upload-artifact@v3.1.3
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index fac5bac..c890b37 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/setup-node@v4.0.2
+             - uses: actions/setup-node@v4.0.0
diff --git a/LICENSE b/LICENSE
index c47b9fa..a14ae95 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2023-2024 Nikola R. Hristov
+ Copyright (c) 2023 Nikola R. Hristov
diff --git a/package.json b/package.json
index d520efd..8376719 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.12",
+ 	"version": "0.3.2",
- 	"description": "🌀 Builds all your TypeScript files into JavaScript.",
+ 	"description": "🌀 Builds all your TypeScript files into JavaScript and generates documentation for it using TypeDoc.",
- 		"name": "Nikola R. Hristov",
+ 		"name": "Nikola Hristov",
- 		"@types/node": "20.11.25",
- 		"commander": "12.0.0",
+ 		"@types/node": "20.10.3",
+ 		"commander": "11.1.0",
- 		"esbuild": "0.20.1",
+ 		"esbuild": "0.19.8",
- 		"typedoc": "0.25.11",
+ 		"typedoc": "0.25.4",
- 		"typedoc-plugin-mdn-links": "3.1.17",
+ 		"typedoc-plugin-mdn-links": "3.1.6",
- 		"typedoc-plugin-zod": "1.1.2",
- 		"typescript": "5.4.2"
+ 		"typedoc-plugin-zod": "1.1.0",
+ 		"typescript": "5.3.2"
- 		"ts-node": "10.9.2"
+ 		"ts-node": "10.9.1"
diff --git a/README.md b/README.md
index 2561f53..9e216a1 100644
--- a/README.md
+++ b/README.md
- # 🌀 [TypeScriptESBuild]
+ # [TypeScriptESBuild] 🌀
- Builds all your TypeScript files into JavaScript.
+ Builds all your TypeScript files into JavaScript and generates documentation for
+ it using [TypeDoc][typedoc].
+ 	"name": "package",
+ 	},
+ 	"devDependencies": {
+ 		"typescript-esbuild": "0.3.1"
- `package.json`
- 
- See an example of a configuration file in
- [ESBuild.ts](Source/Variable/ESBuild.ts)
+ See an example of a configuration file in [ESBuild.ts](Source/Object/ESBuild.ts)
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
index 4067c77..a68861d 100644
--- a/Source/Class/Theme.ts
+++ b/Source/Class/Theme.ts
- 					new UrlMapping(URL, Reflection, this.reflectionTemplate),
+ 					new UrlMapping(URL, Reflection, this.reflectionTemplate)
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index be7b76d..c5ba9a3 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 		for (const __File of await (await import("fast-glob")).default(
- 			_File.replaceAll("'", "").replaceAll('"', ""),
- 		)) {
+ 		for (const __File of await (
+ 			await import("fast-glob")
+ 		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
- 				]),
+ 				])
- 		},
+ 		}
- 		await (await import("esbuild")).analyzeMetafile(
+ 		await (
+ 			await import("esbuild")
+ 		).analyzeMetafile(
- 								).default(Option.ESBuild),
+ 								).default(Option.ESBuild)
- 						: Configuration,
+ 						: Configuration
- 			},
- 		),
+ 			}
+ 		)
- 				" --entryPoints ",
+ 				" --entryPoints "
- 		].join(" "),
+ 		].join(" ")
- 	(await import("path")).dirname(import.meta.url),
+ 	(await import("path")).dirname(import.meta.url)
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 932c4e4..749769c 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 	} catch (_Error) {
- 		console.log(_Error);
- 	}
+ 	} catch (_Error) {}
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 08161a7..0137920 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- 					(
- 						await import("path")
- 					).dirname(
- 						(
- 							await import("url")
- 						).fileURLToPath(import.meta.url),
- 					),
+ 					(await import("path")).dirname(
+ 						(await import("url")).fileURLToPath(import.meta.url)
+ 					)
- 			".",
+ 			"."
- 				(await import("typescript")).default.createCompilerHost(
- 					options,
- 				),
+ 				(await import("typescript")).default.createCompilerHost(options)
- 		await (await import("fs/promises")).writeFile(
+ 		await (
+ 			await import("fs/promises")
+ 		).writeFile(
- 					await (
- 						await import("fs/promises")
- 					).readFile(Path, "utf-8")
+ 					await (await import("fs/promises")).readFile(Path, "utf-8")
- 				options,
- 			),
+ 				options
+ 			)
- 			(
- 				await import("url")
- 			)
+ 			(await import("url"))
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 9f75935..20a4ba4 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- 		).toString(),
+ 		).toString()
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
index 01dce34..ca1a77f 100644
--- a/Source/Interface/Build.ts
+++ b/Source/Interface/Build.ts
- 		},
+ 		}
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 4aa5b30..0f96c7e 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 		Echo?: false | ((Return: any) => void),
+ 		Echo?: false | ((Return: any) => void)
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
index 84b6915..d9895dd 100644
--- a/Source/Interface/Theme.ts
+++ b/Source/Interface/Theme.ts
- 		URLs: UrlMapping<any>[],
+ 		URLs: UrlMapping<any>[]
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
index 2807c20..ff84d2c 100644
--- a/Source/Variable/ESBuild.ts
+++ b/Source/Variable/ESBuild.ts
- 							? await (await import("fs/promises")).rm(
- 									outdir,
- 									{
+ 							? await (
+ 									await import("fs/promises")
+ 							  ).rm(outdir, {
- 									},
- 							  )
+ 							  })
- 					} catch (_Error) {
- 						console.log(_Error);
- 					}
+ 					} catch (_Error) {}
- 		"process.env.VERSION_PACKAGE": `'${
- 			(
- 				await (
- 					await import("../Function/JSON.js")
- 				).default("package.json")
- 			)?.version
- 		}'`,
+ 		"process.env.VERSION_PACKAGE": `'${(
+ 			await (await import("../Function/JSON.js")).default("package.json")
+ 		)?.version}'`,

🗣️ Summary from v0.3.2 to v0.3.3 in .
diff --git a/package.json b/package.json
index 8376719..1e251a2 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.2",
+ 	"version": "0.3.3",
- 		"@types/node": "20.10.3",
+ 		"@types/node": "20.10.4",
- 		"esbuild": "0.19.8",
+ 		"esbuild": "0.19.9",
- 		"typedoc-plugin-mdn-links": "3.1.6",
+ 		"typedoc-plugin-mdn-links": "3.1.7",
- 		"typescript": "5.3.2"
+ 		"typescript": "5.3.3"
- 		"ts-node": "10.9.1"
+ 		"ts-node": "10.9.2"
diff --git a/README.md b/README.md
index 9e216a1..2744742 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.3.1"
+ 		"typescript-esbuild": "0.3.3"

🗣️ Summary from v0.3.3 to v0.3.4 in .
diff --git a/.github/dependabot.yml b/.github/dependabot.yml
index 0bd5833..575fdde 100644
--- a/.github/dependabot.yml
+++ b/.github/dependabot.yml
+ enable-beta-ecosystems: true
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 84d881c..81862fa 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/setup-node@v4.0.0
+             - uses: actions/setup-node@v4.0.1
-             - uses: actions/upload-artifact@v3.1.3
+             - uses: actions/upload-artifact@v4.0.0
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index c890b37..db5d8af 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/setup-node@v4.0.0
+             - uses: actions/setup-node@v4.0.1
diff --git a/package.json b/package.json
index 1e251a2..e71c54f 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.3",
+ 	"version": "0.3.4",
- 		"@types/node": "20.10.4",
+ 		"@types/node": "20.10.6",
- 		"esbuild": "0.19.9",
+ 		"esbuild": "0.19.11",
- 		"typedoc": "0.25.4",
+ 		"typedoc": "0.25.6",
- 		"typedoc-plugin-mdn-links": "3.1.7",
+ 		"typedoc-plugin-mdn-links": "3.1.10",
- 		"typedoc-plugin-zod": "1.1.0",
+ 		"typedoc-plugin-zod": "1.1.1",

🗣️ Summary from v0.3.4 to v0.3.5 in .
diff --git a/package.json b/package.json
index e71c54f..990f1e7 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.4",
+ 	"version": "0.3.5",
diff --git a/README.md b/README.md
index 2744742..ee8c041 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.3.3"
+ 		"typescript-esbuild": "0.3.5"
- See an example of a configuration file in [ESBuild.ts](Source/Object/ESBuild.ts)
+ See an example of a configuration file in
+ [ESBuild.ts](Source/Variable/ESBuild.ts)

🗣️ Summary from v0.3.5 to v0.3.6 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 81862fa..827bb7a 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/upload-artifact@v4.0.0
+             - uses: actions/upload-artifact@v4.1.0
diff --git a/LICENSE b/LICENSE
index a14ae95..c47b9fa 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2023 Nikola R. Hristov
+ Copyright (c) 2023-2024 Nikola R. Hristov
diff --git a/package.json b/package.json
index 990f1e7..79b45ea 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.5",
+ 	"version": "0.3.6",
- 		"@types/node": "20.10.6",
+ 		"@types/node": "20.11.0",
- 		"typedoc": "0.25.6",
+ 		"typedoc": "0.25.7",
- 		"typedoc-plugin-mdn-links": "3.1.10",
+ 		"typedoc-plugin-mdn-links": "3.1.12",
- 		"typedoc-plugin-zod": "1.1.1",
+ 		"typedoc-plugin-zod": "1.1.2",
diff --git a/README.md b/README.md
index ee8c041..d1e76fb 100644
--- a/README.md
+++ b/README.md
- 		"typescript-esbuild": "0.3.5"
+ 		"typescript-esbuild": "0.3.6"

🗣️ Summary from v0.3.6 to v0.3.7 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 827bb7a..88d34a1 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: actions/upload-artifact@v4.1.0
+             - uses: actions/upload-artifact@v4.3.0
diff --git a/package.json b/package.json
index 79b45ea..5cc78e0 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.6",
+ 	"version": "0.3.7",
- 		"@types/node": "20.11.0",
+ 		"@types/node": "20.11.16",
- 		"esbuild": "0.19.11",
+ 		"esbuild": "0.20.0",
- 		"typedoc-plugin-mdn-links": "3.1.12",
+ 		"typedoc-plugin-mdn-links": "3.1.14",
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
index a68861d..4067c77 100644
--- a/Source/Class/Theme.ts
+++ b/Source/Class/Theme.ts
- 					new UrlMapping(URL, Reflection, this.reflectionTemplate)
+ 					new UrlMapping(URL, Reflection, this.reflectionTemplate),
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index 438cfa5..be7b76d 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 		for (const __File of await (
- 			await import("fast-glob")
- 		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
+ 		for (const __File of await (await import("fast-glob")).default(
+ 			_File.replaceAll("'", "").replaceAll('"', ""),
+ 		)) {
- 				])
+ 				]),
- 		}
+ 		},
- 		await (
- 			await import("esbuild")
- 		).analyzeMetafile(
+ 		await (await import("esbuild")).analyzeMetafile(
- 								).default(Option.ESBuild)
+ 								).default(Option.ESBuild),
- 						: Configuration
+ 						: Configuration,
- 			}
- 		)
+ 			},
+ 		),
- 				" --entryPoints "
+ 				" --entryPoints ",
- 		].join(" ")
+ 		].join(" "),
- 	(await import("path")).dirname(import.meta.url)
+ 	(await import("path")).dirname(import.meta.url),
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 749769c..932c4e4 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 	} catch (_Error) {}
+ 	} catch (_Error) {
+ 		console.log(_Error);
+ 	}
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 0137920..08161a7 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- 					(await import("path")).dirname(
- 						(await import("url")).fileURLToPath(import.meta.url)
- 					)
+ 					(
+ 						await import("path")
+ 					).dirname(
+ 						(
+ 							await import("url")
+ 						).fileURLToPath(import.meta.url),
+ 					),
- 			"."
+ 			".",
- 				(await import("typescript")).default.createCompilerHost(options)
+ 				(await import("typescript")).default.createCompilerHost(
+ 					options,
+ 				),
- 		await (
- 			await import("fs/promises")
- 		).writeFile(
+ 		await (await import("fs/promises")).writeFile(
- 					await (await import("fs/promises")).readFile(Path, "utf-8")
+ 					await (
+ 						await import("fs/promises")
+ 					).readFile(Path, "utf-8")
- 				options
- 			)
+ 				options,
+ 			),
- 			(await import("url"))
+ 			(
+ 				await import("url")
+ 			)
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 20a4ba4..9f75935 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- 		).toString()
+ 		).toString(),
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
index ca1a77f..01dce34 100644
--- a/Source/Interface/Build.ts
+++ b/Source/Interface/Build.ts
- 		}
+ 		},
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 0f96c7e..4aa5b30 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 		Echo?: false | ((Return: any) => void)
+ 		Echo?: false | ((Return: any) => void),
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
index d9895dd..84b6915 100644
--- a/Source/Interface/Theme.ts
+++ b/Source/Interface/Theme.ts
- 		URLs: UrlMapping<any>[]
+ 		URLs: UrlMapping<any>[],
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
index 81f9e7a..2807c20 100644
--- a/Source/Variable/ESBuild.ts
+++ b/Source/Variable/ESBuild.ts
- 							? await (
- 									await import("fs/promises")
- 								).rm(outdir, {
+ 							? await (await import("fs/promises")).rm(
+ 									outdir,
+ 									{
- 								})
+ 									},
+ 							  )
- 					} catch (_Error) {}
+ 					} catch (_Error) {
+ 						console.log(_Error);
+ 					}
- 		"process.env.VERSION_PACKAGE": `'${(
- 			await (await import("../Function/JSON.js")).default("package.json")
- 		)?.version}'`,
+ 		"process.env.VERSION_PACKAGE": `'${
+ 			(
+ 				await (
+ 					await import("../Function/JSON.js")
+ 				).default("package.json")
+ 			)?.version
+ 		}'`,

🗣️ Summary from v0.3.7 to v0.3.8 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 88d34a1..e2c047c 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             - uses: pnpm/action-setup@v2.4.0
+             - uses: pnpm/action-setup@v3.0.0
-             - uses: actions/setup-node@v4.0.1
+             - uses: actions/setup-node@v4.0.2
-             - uses: actions/upload-artifact@v4.3.0
+             - uses: actions/upload-artifact@v4.3.1
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index db5d8af..fac5bac 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/setup-node@v4.0.1
+             - uses: actions/setup-node@v4.0.2
diff --git a/package.json b/package.json
index 5cc78e0..a29be1b 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.7",
+ 	"version": "0.3.8",
- 		"@types/node": "20.11.16",
- 		"commander": "11.1.0",
+ 		"@types/node": "20.11.17",
+ 		"commander": "12.0.0",
- 		"typedoc-plugin-mdn-links": "3.1.14",
+ 		"typedoc-plugin-mdn-links": "3.1.15",
diff --git a/README.md b/README.md
index d1e76fb..43f6362 100644
--- a/README.md
+++ b/README.md
- 	"name": "package",
- 	},
- 	"devDependencies": {
- 		"typescript-esbuild": "0.3.6"
+ `package.json`
+ 

🗣️ Summary from v0.3.8 to v0.3.9 in .
diff --git a/package.json b/package.json
index a29be1b..b2fe0ca 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.8",
+ 	"version": "0.3.9",
- 	"description": "🌀 Builds all your TypeScript files into JavaScript and generates documentation for it using TypeDoc.",
+ 	"description": "Builds all your TypeScript files into JavaScript. 🌀 + generates documentation for it using TypeDoc. 📄",
- 		"typedoc": "0.25.7",
+ 		"typedoc": "0.25.8",
diff --git a/README.md b/README.md
index 43f6362..48e05b5 100644
--- a/README.md
+++ b/README.md
- Builds all your TypeScript files into JavaScript and generates documentation for
- it using [TypeDoc][typedoc].
+ Builds all your TypeScript files into JavaScript. 🌀 + generates documentation
+ for it using [TypeDoc][typedoc]. 📄

🗣️ Summary from v0.3.9 to v0.4.0 in .
diff --git a/package.json b/package.json
index b2fe0ca..fddb77b 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.3.9",
+ 	"version": "0.4.0",
- 	"description": "Builds all your TypeScript files into JavaScript. 🌀 + generates documentation for it using TypeDoc. 📄",
+ 	"description": "🌀 Builds all your TypeScript files into JavaScript.",
- 		"name": "Nikola Hristov",
+ 		"name": "Nikola R. Hristov",
- 		"@types/node": "20.11.17",
+ 		"@types/node": "20.11.25",
- 		"esbuild": "0.20.0",
+ 		"esbuild": "0.20.1",
- 		"typedoc": "0.25.8",
+ 		"typedoc": "0.25.12",
- 		"typedoc-plugin-mdn-links": "3.1.15",
+ 		"typedoc-plugin-mdn-links": "3.1.18",
- 		"typescript": "5.3.3"
+ 		"typescript": "5.4.2"
diff --git a/README.md b/README.md
index 48e05b5..2561f53 100644
--- a/README.md
+++ b/README.md
- # [TypeScriptESBuild] 🌀
+ # 🌀 [TypeScriptESBuild]
- Builds all your TypeScript files into JavaScript. 🌀 + generates documentation
- for it using [TypeDoc][typedoc]. 📄
+ Builds all your TypeScript files into JavaScript.

🗣️ Summary from v0.4.0 to v0.4.1 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index e2c047c..28da924 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-         branches: [main]
+         branches: [Current]
-         branches: [main]
+         branches: [Current]
-             - uses: actions/checkout@v4.1.1
+             - uses: actions/checkout@v4.1.2
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index fac5bac..b0332f1 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-             - uses: actions/checkout@v4.1.1
+             - uses: actions/checkout@v4.1.2
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index b4f1f9b..0e092d3 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- nikola@nikolahristov.tech. All complaints will be reviewed and investigated
+ Community@Playform.Cloud. All complaints will be reviewed and investigated
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index c740185..b8ceeae 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
- nikola@nikolahristov.tech. All complaints will be reviewed and investigated
+ Community@Playform.Cloud. All complaints will be reviewed and investigated
diff --git a/package.json b/package.json
index fddb77b..5921753 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.4.0",
+ 	"version": "0.4.1",
- 	"keywords": [
- 		"javascript",
- 		"typescript",
- 		"esbuild",
- 		"typedoc"
- 	],
- 	"homepage": "https://github.com/NikolaRHristov/TypeScriptESBuild#readme",
+ 	"keywords": ["javascript", "typescript", "esbuild", "typedoc"],
+ 	"homepage": "https://github.com/Playform/TypeScriptESBuild#readme",
- 		"url": "https://github.com/NikolaRHristov/TypeScriptESBuild/issues"
+ 		"url": "https://github.com/Playform/TypeScriptESBuild/issues"
- 		"url": "git+https://github.com/NikolaRHristov/TypeScriptESBuild.git"
+ 		"url": "git+https://github.com/Playform/TypeScriptESBuild.git"
- 		"email": "nikola@nikolahristov.tech",
+ 		"email": "Nikola@Playform.Cloud",
- 		"@types/node": "20.11.25",
+ 		"@types/node": "20.11.28",
- 		"esbuild": "0.20.1",
+ 		"esbuild": "0.20.2",
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 08161a7..212ba4a 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- 						(
- 							await import("url")
- 						).fileURLToPath(import.meta.url),
+ 						(await import("url")).fileURLToPath(import.meta.url),
- 					await (
- 						await import("fs/promises")
- 					).readFile(Path, "utf-8")
+ 					await (await import("fs/promises")).readFile(Path, "utf-8")
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
index 2807c20..df1bb66 100644
--- a/Source/Variable/ESBuild.ts
+++ b/Source/Variable/ESBuild.ts
- 							? await (await import("fs/promises")).rm(
- 									outdir,
- 									{
+ 							? await (await import("fs/promises")).rm(outdir, {
- 									},
- 							  )
+ 							  })

🗣️ Summary from v0.4.1 to v0.4.2 in .
diff --git a/LICENSE b/LICENSE
index c47b9fa..cca5808 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2023-2024 Nikola R. Hristov
+ Copyright (c) 2023-2024 Playform
diff --git a/package.json b/package.json
index 5921753..c0b511a 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.4.1",
+ 	"version": "0.4.2",
- 	"description": "🌀 Builds all your TypeScript files into JavaScript.",
- 	"keywords": ["javascript", "typescript", "esbuild", "typedoc"],
+ 	"description": "🌀 ESBuild Wrapper.",
+ 	"keywords": [
+ 		"javascript",
+ 		"typescript",
+ 		"esbuild"
+ 	],
- 		"name": "Nikola R. Hristov",
- 		"email": "Nikola@Playform.Cloud",
- 		"url": "https://nikolahristov.tech"
+ 		"name": "Playform",
+ 		"email": "Hello@Playform.Cloud",
+ 		"url": "https://playform.cloud"
- 		"@types/node": "20.11.28",
+ 		"@types/node": "20.11.29",
- 		"typedoc": "0.25.12",
- 		"typedoc-plugin-keywords": "1.6.0",
- 		"typedoc-plugin-mdn-links": "3.1.18",
- 		"typedoc-plugin-merge-modules": "5.1.0",
- 		"typedoc-plugin-remove-references": "0.0.6",
- 		"typedoc-plugin-rename-defaults": "0.7.0",
- 		"typedoc-plugin-zod": "1.1.2",
diff --git a/README.md b/README.md
index 2561f53..47b143b 100644
--- a/README.md
+++ b/README.md
- Builds all your TypeScript files into JavaScript.
+ Build all your TypeScript files into JavaScript.
- `package.json`
+ Through a command line run:
+ 
+ ```sh
+ npx typescript-esbuild 'Source/**/*.ts'
+ ```
+ 
+ or in a `package.json` file:
- Or with a custom esbuild config file:
+ Or with a custom ESBuild config file:
- [esbuild]: https://npmjs.org/esbuild
- [typedoc]: https://npmjs.org/typedoc
+ [ESBuild]: https://npmjs.org/esbuild
+ [TypeDoc]: https://npmjs.org/typedoc
diff --git a/Source/Class/Theme.ts b/Source/Class/Theme.ts
deleted file mode 100644
index 4067c77..0000000
--- a/Source/Class/Theme.ts
+++ /dev/null
- /**
-  * @module Theme
-  *
-  */
- export default class
- 	extends (await import("typedoc")).DefaultTheme
- 	implements Type
- {
- 	public override buildUrls(
- 		...[Reflection, URLs]: Parameters<Type["buildUrls"]>
- 	) {
- 		const { Directory } = this._Mapping(Reflection) ?? {};
- 
- 		if (Directory) {
- 			if (!(Reflection.url && URL_PREFIX.test(Reflection.url))) {
- 				const URL = [Directory, `${getUrl(Reflection)}.html`].join("/");
- 
- 				URLs.push(
- 					new UrlMapping(URL, Reflection, this.reflectionTemplate),
- 				);
- 
- 				Reflection.url = URL;
- 				Reflection.hasOwnDocument = true;
- 			}
- 
- 			Reflection.traverse((Child) => {
- 				if (Child instanceof DeclarationReflection) {
- 					this.buildUrls(Child, URLs);
- 				} else {
- 					applyAnchorUrl(Child, Reflection);
- 				}
- 
- 				return true;
- 			});
- 		} else if (Reflection.parent) {
- 			applyAnchorUrl(Reflection, Reflection.parent);
- 		}
- 
- 		return URLs;
- 	}
- 
- 	_Mapping = (...[Reflection]: Parameters<Type["_Mapping"]>) =>
- 		this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));
- 
- 	Mapping: Mapping[] = [
- 		{
- 			Kind: [Class],
- 			Directory: "Class",
- 		},
- 		{
- 			Kind: [Interface],
- 			Directory: "Interface",
- 		},
- 		{
- 			Kind: [Enum],
- 			Directory: "Enum",
- 		},
- 		{
- 			Kind: [Namespace, Module],
- 			Directory: "Module",
- 		},
- 		{
- 			Kind: [TypeAlias],
- 			Directory: "Type",
- 		},
- 		{
- 			Kind: [_Function],
- 			Directory: "Function",
- 		},
- 		{
- 			Kind: [Variable],
- 			Directory: "Variable",
- 		},
- 	];
- }
- 
- import type Mapping from "../Interface/Mapping.js";
- import type Type from "../Interface/Theme.js";
- 
- export const {
- 	DeclarationReflection,
- 	DefaultTheme: { URL_PREFIX, getUrl, applyAnchorUrl },
- 	ReflectionKind: {
- 		Interface,
- 		Class,
- 		Enum,
- 		Namespace,
- 		Module,
- 		TypeAlias,
- 		Function: _Function,
- 		Variable,
- 	},
- 	UrlMapping,
- } = await import("typedoc");
diff --git a/Source/Class/TypeScriptESBuild.ts b/Source/Class/TypeScriptESBuild.ts
index 13f798e..5436a96 100644
--- a/Source/Class/TypeScriptESBuild.ts
+++ b/Source/Class/TypeScriptESBuild.ts
- 	.description("Builds files")
- 	.argument("<Files...>", "Files to build")
- 	.option("-es, --ESBuild <File>", "esbuild configuration file")
- 	.option("-ts, --TypeScript <File>", "TypeScript configuration file")
+ 	.description("🌀 Build TypeScript.")
+ 	.argument("<File...>", "Build File.")
+ 	.option("-es, --ESBuild <File>", "ESBuild Configuration.")
+ 	.option("-ts, --TypeScript <File>", "TypeScript Configuration.")
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index be7b76d..52074eb 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- 
- 	Exec(
- 		[
- 			"typedoc",
- 			"--commentStyle all",
- 			"--gitRevision main",
- 			`--customCss ${resolve(`${Current}/../Stylesheet/Theme.css`)}`,
- 			"--includeVersion",
- 			"--out ./Documentation",
- 			`--plugin ${resolve(`${Current}/../../Target/Variable/Load.js`)}`,
- 			"--plugin typedoc-plugin-remove-references",
- 			"--plugin typedoc-plugin-rename-defaults",
- 			"--plugin typedoc-plugin-mdn-links",
- 			"--plugin typedoc-plugin-zod",
- 			"--plugin typedoc-plugin-merge-modules",
- 			"--plugin typedoc-plugin-keywords",
- 			"--searchInComments",
- 			`--keywords ${
- 				(
- 					await (
- 						await import("../Function/JSON.js")
- 					).default("package.json", process.cwd())
- 				)?.keywords?.join(" --keywords ") ?? " typescript-esbuild "
- 			}`,
- 			"--theme TypeScriptESBuild",
- 			"--entryPointStrategy expand",
- 			"--mergeModulesRenameDefaults",
- 			"--mergeModulesMergeMode module",
- 			`--entryPoints ${Object.values(Configuration.entryPoints).join(
- 				" --entryPoints ",
- 			)}`,
- 		].join(" "),
- 	);
diff --git a/Source/Interface/Load.ts b/Source/Interface/Load.ts
deleted file mode 100644
index fda2db9..0000000
--- a/Source/Interface/Load.ts
+++ /dev/null
- /**
-  * @module Load
-  *
-  */
- export default interface Type {
- 	/**
- 	 * The `Load` function is responsible for loading a plugin into the TypeDoc instance.
- 	 *
- 	 * @param Application - The `Application` parameter is an instance of TypeDoc's Application
- 	 * class, representing the TypeDoc application to which the plugin should be loaded.
- 	 *
- 	 */
- 	load: (Application: Application) => void;
- }
- 
- import type { Application } from "typedoc";
diff --git a/Source/Interface/Mapping.ts b/Source/Interface/Mapping.ts
deleted file mode 100644
index 5b91846..0000000
--- a/Source/Interface/Mapping.ts
+++ /dev/null
- /**
-  * @module Mapping
-  *
-  * Defines a mapping of a {@link Models.Kind} to a template file.
-  *
-  * Used by {@link DefaultTheme} to map reflections to output files.
-  *
-  */
- export default interface Type {
- 	/**
- 	 * {@link DeclarationReflection.kind} this rule applies to.
- 	 */
- 	Kind: ReflectionKind[];
- 
- 	/**
- 	 * The name of the directory the output files should be written to.
- 	 */
- 	Directory: string;
- }
- 
- import type { ReflectionKind } from "typedoc";
diff --git a/Source/Interface/Theme.ts b/Source/Interface/Theme.ts
deleted file mode 100644
index 84b6915..0000000
--- a/Source/Interface/Theme.ts
+++ /dev/null
- /**
-  * @module Theme
-  *
-  * Represents an interface for defining a theme with various methods and properties.
-  */
- export default interface Type extends DefaultTheme {
- 	/**
- 	 * A function that builds URLs for a given DeclarationReflection and an array of URLs mappings.
- 	 *
- 	 * @param Reflection - The DeclarationReflection for which URLs are being built.
- 	 *
- 	 * @param URLs - An array of URLs mappings with any data type.
- 	 *
- 	 */
- 	buildUrls: (
- 		Reflection: DeclarationReflection,
- 		// biome-ignore lint/suspicious/noExplicitAny:
- 		URLs: UrlMapping<any>[],
- 		// biome-ignore lint/suspicious/noExplicitAny:
- 	) => UrlMapping<any>[];
- 
- 	/**
- 	 * A function that maps a DeclarationReflection to a Mapping or returns undefined.
- 	 *
- 	 * @param Reflection - The DeclarationReflection to map to a Mapping.
- 	 *
- 	 */
- 	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;
- 
- 	/**
- 	 * An array of Mappings representing the theme's mapping configuration.
- 	 */
- 	Mapping: Mapping[];
- }
- 
- import type Mapping from "./Mapping.js";
- 
- import type { DeclarationReflection, DefaultTheme, UrlMapping } from "typedoc";
diff --git a/Source/Stylesheet/Theme.css b/Source/Stylesheet/Theme.css
deleted file mode 100644
index e3a4462..0000000
--- a/Source/Stylesheet/Theme.css
+++ /dev/null
- :root {
- 	--dark-color-background: #000;
- 	--dark-color-background-secondary: #000;
- 	--dark-code-background: #040404;
- 	--color-accent: #2463eb;
- 	--dark-hl-0: #ffdd00;
- 	--dark-hl-1: #ff66ff;
- 	--dark-hl-2: #ff4444;
- 	--dark-hl-3: #44ffff;
- 	--dark-hl-4: #44ff44;
- }
- 
- body #tsd-search .field label {
- 	left: 50%;
- 	margin-left: -20px;
- 	z-index: 1;
- 	text-align: center;
- }
- 
- body #tsd-search.has-focus .field label {
- 	display: none;
- }
- 
- body #tsd-search .field input {
- 	z-index: 2;
- }
- 
- body pre,
- body .tsd-page-toolbar,
- body .tsd-generator {
- 	border: none;
- }
- 
- body .tsd-navigation a,
- body .tsd-navigation summary > span,
- body .tsd-page-navigation a {
- 	padding: 0.5rem;
- 	border-radius: 8px;
- }
- 
- body .tsd-description .tsd-signatures .tsd-signature,
- body .tsd-signature,
- body .tsd-signatures .tsd-signature,
- body .tsd-typography td,
- body .tsd-typography th,
- body code.tsd-tag {
- 	border-radius: 12px;
- 	border-width: 2px;
- }
diff --git a/Source/Type/Value.ts b/Source/Type/Value.ts
deleted file mode 100644
index 7c1f62c..0000000
--- a/Source/Type/Value.ts
+++ /dev/null
- /**
-  * @module Value
-  *
-  */
- export type Type<T> = T[keyof T];
- 
- export type { Type as default };
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
index df1bb66..c09869e 100644
--- a/Source/Variable/ESBuild.ts
+++ b/Source/Variable/ESBuild.ts
- 				{
- 					from: "./Source/Stylesheet/Theme.css",
- 					to: "./Stylesheet/",
- 				},
diff --git a/Source/Variable/Load.ts b/Source/Variable/Load.ts
deleted file mode 100644
index 5281fbc..0000000
--- a/Source/Variable/Load.ts
+++ /dev/null
- /**
-  * @module Load
-  *
-  */
- export const load = (...[Application]: Parameters<Type["load"]>) =>
- 	Application.renderer.defineTheme("TypeScriptESBuild", Theme);
- 
- export default {
- 	load,
- } satisfies Type as Type;
- 
- import type Type from "../Interface/Load.js";
- 
- export const { default: Theme } = await import("../Class/Theme.js");

🗣️ Summary from v0.4.2 to v0.4.3 in .
diff --git a/package.json b/package.json
index c0b511a..d3a23c0 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.4.2",
+ 	"version": "0.4.3",
- 		"@types/node": "20.11.29",
+ 		"@types/node": "20.11.30",
diff --git a/Source/Class/TypeScriptESBuild.ts b/Source/Class/TypeScriptESBuild.ts
index 5436a96..e454e6f 100644
--- a/Source/Class/TypeScriptESBuild.ts
+++ b/Source/Class/TypeScriptESBuild.ts
- 	.option("-es, --ESBuild <File>", "ESBuild Configuration.")
- 	.option("-ts, --TypeScript <File>", "TypeScript Configuration.")
+ 	.option("-ES, --ESBuild <File>", "ESBuild Configuration.")
+ 	.option("-TS, --TypeScript <File>", "TypeScript Configuration.")
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 932c4e4..8f53f41 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 		const { stdout } = (await import("child_process")).exec(Command);
+ 		const { stdout, stderr } = (await import("child_process")).exec(
+ 			Command,
+ 		);
+ 			stderr?.on("data", (Data) => Echo(Data));
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index 4aa5b30..ff2ec1b 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- 	 * stdout of the child process.
+ 	 * stdout and stderr of the child process.
- 	 * @param Echo - An optional parameter that controls whether the stdout
+ 	 * @param Echo - An optional parameter that controls whether the stdout and stderr
- 	 * to a function, the function will be called with the stdout data as a parameter for custom
- 	 * logging. If not provided, stdout will be logged to the console by default.
+ 	 * to a function, the function will be called with the stdout and stderr data as a parameter for custom
+ 	 * logging. If not provided, stdout and stderr will be logged to the console by default.

🗣️ Summary from v0.4.3 to v0.4.4 in .
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 28da924..64b00f6 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-                   version: 8.6.12
+                   version: 8.15.5
diff --git a/package.json b/package.json
index d3a23c0..ba8f6f6 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.4.3",
+ 	"version": "0.4.4",
+ 		"Document": "TypeScriptDocument 'Source/**/*.ts'",
- 		"ts-node": "10.9.2"
+ 		"ts-node": "10.9.2",
+ 		"typescript-document": "0.0.2"

🗣️ Summary from v0.4.4 to v0.4.5 in .
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index ffde8df..09e8b75 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
-             TELEMETRY_DISABLED: 1
-             DO_NOT_TRACK: 1
+             DO_NOT_TRACK: 1
-             GATSBY_TELEMETRY_OPT_OUT: 1
+             GATSBY_TELEMETRY_OPT_OUT: 1
+             GRIT_TELEMETRY_DISABLED: 1
+             TELEMETRY_DISABLED: 1
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 64b00f6..2fd4da9 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
-             TELEMETRY_DISABLED: 1
-             DO_NOT_TRACK: 1
+             DO_NOT_TRACK: 1
-             GATSBY_TELEMETRY_OPT_OUT: 1
+             GATSBY_TELEMETRY_OPT_OUT: 1
+             GRIT_TELEMETRY_DISABLED: 1
+             TELEMETRY_DISABLED: 1
diff --git a/package.json b/package.json
index ba8f6f6..0a45ba1 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.4.4",
+ 	"version": "0.4.5",
- 		"typescript": "5.4.2"
+ 		"typescript": "5.4.3"
- 		"ts-node": "10.9.2",
- 		"typescript-document": "0.0.2"
+ 		"ts-node": "10.9.2"
+ 	},
+ 	"peerDependencies": {
+ 		"typescript-document": "0.0.4"

🗣️ Summary from v0.4.5 to v0.4.6 in .
diff --git a/.github/workflows/Dependabot.yml b/.github/workflows/Dependabot.yml
index 819f8a1..cfa5b96 100644
--- a/.github/workflows/Dependabot.yml
+++ b/.github/workflows/Dependabot.yml
-             - uses: dependabot/fetch-metadata@v1.6.0
+             - uses: dependabot/fetch-metadata@v2.0.0
-             - uses: dependabot/fetch-metadata@v1.6.0
+             - uses: dependabot/fetch-metadata@v2.0.0
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index 0e092d3..2da8999 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
+ [https://WWW.Contributor-Covenant.Org/version/2/1/code_of_conduct.html][v2.1].
- [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
- [https://www.contributor-covenant.org/translations][translations].
+ [https://WWW.Contributor-Covenant.Org/faq][FAQ]. Translations are available at
+ [https://WWW.Contributor-Covenant.Org/translations][translations].
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [homepage]: https://WWW.Contributor-Covenant.Org
+ [v2.1]: https://WWW.Contributor-Covenant.Org/version/2/1/code_of_conduct.html
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
+ [FAQ]: https://WWW.Contributor-Covenant.Org/faq
+ [translations]: https://WWW.Contributor-Covenant.Org/translations
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index b8ceeae..4e81efa 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
- [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
+ [https://WWW.Contributor-Covenant.Org/version/2/1/code_of_conduct.html][v2.1].
- [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
- [https://www.contributor-covenant.org/translations][translations].
+ [https://WWW.Contributor-Covenant.Org/faq][FAQ]. Translations are available at
+ [https://WWW.Contributor-Covenant.Org/translations][translations].
- [homepage]: https://www.contributor-covenant.org
- [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [homepage]: https://WWW.Contributor-Covenant.Org
+ [v2.1]: https://WWW.Contributor-Covenant.Org/version/2/1/code_of_conduct.html
- [FAQ]: https://www.contributor-covenant.org/faq
- [translations]: https://www.contributor-covenant.org/translations
+ [FAQ]: https://WWW.Contributor-Covenant.Org/faq
+ [translations]: https://WWW.Contributor-Covenant.Org/translations
diff --git a/package.json b/package.json
index 0a45ba1..22432ae 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.4.5",
+ 	"version": "0.4.6",
- 	"peerDependencies": {
- 		"typescript-document": "0.0.4"
+ 	"optionalDependencies": {
+ 		"typescript-document": "0.0.6"
diff --git a/README.md b/README.md
index 47b143b..1d05117 100644
--- a/README.md
+++ b/README.md
- [ESBuild]: https://npmjs.org/esbuild
- [TypeDoc]: https://npmjs.org/typedoc
- [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
+ [ESBuild]: https://NPMJS.Org/esbuild
+ [TypeDoc]: https://NPMJS.Org/typedoc
+ [TypeScriptESBuild]: https://NPMJS.Org/typescript-esbuild

🗣️ Summary from v0.4.6 to v0.4.7 in .
diff --git a/package.json b/package.json
index 22432ae..64cd208 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.4.6",
+ 	"version": "0.4.7",
- 	"optionalDependencies": {
- 		"typescript-document": "0.0.6"
+ 	"peerDependencies": {
+ 		"typescript-document": "0.0.7"

🗣️ Summary from v0.4.7 to v0.4.8 in .
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index b0332f1..a6a964c 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-                   npm install --legacy-peer-deps
-                   npm publish --legacy-peer-deps --provenance
+                   npm install \
+                     --legacy-peer-deps \
+                     --strict-peer-dependencies=false
+                   npm publish \
+                     --legacy-peer-deps \
+                     --strict-peer-dependencies=false \
+                     --provenance
diff --git a/package.json b/package.json
index 64cd208..33ea1e9 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.4.7",
+ 	"version": "0.4.8",

🗣️ Summary from v0.4.8 to v0.4.9 in .
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index a6a964c..b0332f1 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
-                   npm install \
-                     --legacy-peer-deps \
-                     --strict-peer-dependencies=false
-                   npm publish \
-                     --legacy-peer-deps \
-                     --strict-peer-dependencies=false \
-                     --provenance
+                   npm install --legacy-peer-deps
+                   npm publish --legacy-peer-deps --provenance
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index 2da8999..2a61435 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- Community@Playform.Cloud. All complaints will be reviewed and investigated
+ Community@playform.cloud. All complaints will be reviewed and investigated
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index 4e81efa..323d746 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
- Community@Playform.Cloud. All complaints will be reviewed and investigated
+ Community@playform.cloud. All complaints will be reviewed and investigated
diff --git a/package.json b/package.json
index 33ea1e9..62f7ebb 100644
--- a/package.json
+++ b/package.json
- 	"version": "0.4.8",
+ 	"version": "0.4.9",
- 	"description": "🌀 ESBuild Wrapper.",
- 	"keywords": [
- 		"javascript",
- 		"typescript",
- 		"esbuild"
- 	],
+ 	"description": "🌀 ESBuild Wrapper.",
+ 	"keywords": ["javascript", "typescript", "esbuild"],
- 		"email": "Hello@Playform.Cloud",
+ 		"email": "hello@playform.cloud",
- 		"typescript-document": "0.0.7"
+ 		"typescript-document": "0.0.6"
diff --git a/README.md b/README.md
index 1d05117..e9a550a 100644
--- a/README.md
+++ b/README.md
- # 🌀 [TypeScriptESBuild]
+ # 🌀 [TypeScriptESBuild]
- [ESBuild]: https://NPMJS.Org/esbuild
- [TypeDoc]: https://NPMJS.Org/typedoc
- [TypeScriptESBuild]: https://NPMJS.Org/typescript-esbuild
+ [ESBuild]: https://npmjs.org/esbuild
+ [TypeDoc]: https://npmjs.org/typedoc
+ [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
diff --git a/Source/Class/TypeScriptESBuild.ts b/Source/Class/TypeScriptESBuild.ts
index e454e6f..8ef9c08 100644
--- a/Source/Class/TypeScriptESBuild.ts
+++ b/Source/Class/TypeScriptESBuild.ts
- 	.description("🌀 Build TypeScript.")
+ 	.description("🌀 Build TypeScript.")

🗣️ Summary from v0.4.9 to last commit in .
diff --git a/.github/FUNDING.yml b/.github/FUNDING.yml
new file mode 100644
index 0000000..22bb4f6
--- /dev/null
+++ b/.github/FUNDING.yml
+ open_collective: playform
diff --git a/.github/workflows/Dependabot.yml b/.github/workflows/Dependabot.yml
index cfa5b96..387fece 100644
--- a/.github/workflows/Dependabot.yml
+++ b/.github/workflows/Dependabot.yml
-             - uses: dependabot/fetch-metadata@v2.0.0
+             - uses: dependabot/fetch-metadata@v2.2.0
-             - uses: dependabot/fetch-metadata@v2.0.0
+             - uses: dependabot/fetch-metadata@v2.2.0
diff --git a/.github/workflows/GitHub.yml b/.github/workflows/GitHub.yml
index 09e8b75..7b1e399 100644
--- a/.github/workflows/GitHub.yml
+++ b/.github/workflows/GitHub.yml
+             TERRAFORM_TELEMETRY: 0
-             - uses: pozil/auto-assign-issue@v1.13.0
+             - uses: pozil/auto-assign-issue@v2.0.0
diff --git a/.github/workflows/Node.yml b/.github/workflows/Node.yml
index 2fd4da9..216f5b7 100644
--- a/.github/workflows/Node.yml
+++ b/.github/workflows/Node.yml
+             TERRAFORM_TELEMETRY: 0
-             - uses: actions/checkout@v4.1.2
+             - uses: actions/checkout@v4.1.7
-             - uses: pnpm/action-setup@v3.0.0
+             - uses: pnpm/action-setup@v4.0.0
-                   version: 8.15.5
+                   version: 9.3.0
-             - uses: actions/setup-node@v4.0.2
+             - uses: actions/setup-node@v4.0.3
-             - uses: actions/upload-artifact@v4.3.1
+             - uses: actions/upload-artifact@v4.3.4
diff --git a/.github/workflows/NPM.yml b/.github/workflows/NPM.yml
index b0332f1..a3c4811 100644
--- a/.github/workflows/NPM.yml
+++ b/.github/workflows/NPM.yml
+         env:
+             ADBLOCK: true
+             ASTRO_TELEMETRY_DISABLED: 1
+             AUTOMATEDLAB_TELEMETRY_OPTOUT: 1
+             AZURE_CORE_COLLECT_TELEMETRY: 0
+             CHOOSENIM_NO_ANALYTICS: 1
+             DIEZ_DO_NOT_TRACK: 1
+             DOTNET_CLI_TELEMETRY_OPTOUT: 1
+             DOTNET_INTERACTIVE_CLI_TELEMETRY_OPTOUT: 1
+             DO_NOT_TRACK: 1
+             ET_NO_TELEMETRY: 1
+             GATSBY_TELEMETRY_DISABLED: 1
+             GATSBY_TELEMETRY_OPTOUT: 1
+             GATSBY_TELEMETRY_OPT_OUT: 1
+             GRIT_TELEMETRY_DISABLED: 1
+             HASURA_GRAPHQL_ENABLE_TELEMETRY: false
+             HINT_TELEMETRY: off
+             HOMEBREW_NO_ANALYTICS: 1
+             INFLUXD_REPORTING_DISABLED: true
+             ITERATIVE_DO_NOT_TRACK: 1
+             NEXT_TELEMETRY_DEBUG: 1
+             NEXT_TELEMETRY_DISABLED: 1
+             NG_CLI_ANALYTICS: false
+             NUXT_TELEMETRY_DISABLED: 1
+             PIN_DO_NOT_TRACK: 1
+             POWERSHELL_TELEMETRY_OPTOUT: 1
+             SAM_CLI_TELEMETRY: 0
+             STNOUPGRADE: 1
+             STRIPE_CLI_TELEMETRY_OPTOUT: 1
+             TELEMETRY_DISABLED: 1
+             TERRAFORM_TELEMETRY: 0
+ 
-             - uses: actions/checkout@v4.1.2
+             - uses: actions/checkout@v4.1.7
-             - uses: actions/setup-node@v4.0.2
+             - uses: actions/setup-node@v4.0.3
-                   npm install --legacy-peer-deps
-                   npm publish --legacy-peer-deps --provenance
+                   npm publish --legacy-peer-deps --provenance --ignore-scripts
diff --git a/.gitignore b/.gitignore
new file mode 100644
index 0000000..85d6103
--- /dev/null
+++ b/.gitignore
+ /undefined
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index 2a61435..01e92b5 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
- Community@playform.cloud. All complaints will be reviewed and investigated
+ Community@PlayForm.Cloud. All complaints will be reviewed and investigated
- [https://WWW.Contributor-Covenant.Org/version/2/1/code_of_conduct.html][v2.1].
+ [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
- [https://WWW.Contributor-Covenant.Org/faq][FAQ]. Translations are available at
- [https://WWW.Contributor-Covenant.Org/translations][translations].
- 
- [homepage]: https://WWW.Contributor-Covenant.Org
- [v2.1]: https://WWW.Contributor-Covenant.Org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://WWW.Contributor-Covenant.Org/faq
- [translations]: https://WWW.Contributor-Covenant.Org/translations
+ [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
+ [https://www.contributor-covenant.org/translations][translations].
+ 
+ [homepage]: HTTPS://www.contributor-covenant.org
+ [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
+ [FAQ]: HTTPS://www.contributor-covenant.org/faq
+ [translations]: HTTPS://www.contributor-covenant.org/translations
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index 323d746..c390eae 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
- Community@playform.cloud. All complaints will be reviewed and investigated
+ Community@PlayForm.Cloud. All complaints will be reviewed and investigated
- [https://WWW.Contributor-Covenant.Org/version/2/1/code_of_conduct.html][v2.1].
+ [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
- [https://WWW.Contributor-Covenant.Org/faq][FAQ]. Translations are available at
- [https://WWW.Contributor-Covenant.Org/translations][translations].
- 
- [homepage]: https://WWW.Contributor-Covenant.Org
- [v2.1]: https://WWW.Contributor-Covenant.Org/version/2/1/code_of_conduct.html
- [Mozilla CoC]: https://github.com/mozilla/diversity
- [FAQ]: https://WWW.Contributor-Covenant.Org/faq
- [translations]: https://WWW.Contributor-Covenant.Org/translations
+ [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
+ [https://www.contributor-covenant.org/translations][translations].
+ 
+ [homepage]: HTTPS://www.contributor-covenant.org
+ [v2.1]: HTTPS://www.contributor-covenant.org/version/2/1/code_of_conduct.html
+ [Mozilla CoC]: HTTPS://github.com/mozilla/diversity
+ [FAQ]: HTTPS://www.contributor-covenant.org/faq
+ [translations]: HTTPS://www.contributor-covenant.org/translations
diff --git a/jsconfig.json b/jsconfig.json
new file mode 100644
index 0000000..7cd583e
--- /dev/null
+++ b/jsconfig.json
+ {
+ 	"$schema": "https://json.schemastore.org/jsconfig",
+ 	"compilerOptions": {
+ 		"allowArbitraryExtensions": true,
+ 		"allowImportingTsExtensions": true,
+ 		"allowJs": true,
+ 		"allowSyntheticDefaultImports": true,
+ 		"allowUmdGlobalAccess": false,
+ 		"allowUnreachableCode": false,
+ 		"allowUnusedLabels": false,
+ 		"alwaysStrict": true,
+ 		"assumeChangesOnlyAffectDirectDependencies": true,
+ 		"baseUrl": "./",
+ 		"checkJs": true,
+ 		"declaration": true,
+ 		"disableReferencedProjectLoad": false,
+ 		"emitDeclarationOnly": true,
+ 		"esModuleInterop": true,
+ 		"exactOptionalPropertyTypes": true,
+ 		"forceConsistentCasingInFileNames": true,
+ 		"isolatedModules": true,
+ 		"jsx": "preserve",
+ 		"lib": ["ESNext"],
+ 		"module": "ESNext",
+ 		"moduleResolution": "Bundler",
+ 		"noFallthroughCasesInSwitch": true,
+ 		"noImplicitOverride": true,
+ 		"noImplicitReturns": true,
+ 		"noImplicitThis": true,
+ 		"noPropertyAccessFromIndexSignature": true,
+ 		"noUncheckedIndexedAccess": true,
+ 		"noUnusedLocals": true,
+ 		"noUnusedParameters": true,
+ 		"outDir": "Target",
+ 		"paths": {
+ 			"@Asset/*": ["Source/Asset/*"],
+ 			"@Class/*": ["Source/Class/*"],
+ 			"@Component/*": ["Source/Component/*"],
+ 			"@Context/*": ["Source/Context/*"],
+ 			"@Element/*": ["Source/Element/*"],
+ 			"@Function/*": ["Source/Function/*"],
+ 			"@Interface/*": ["Source/Interface/*"],
+ 			"@Layout/*": ["Source/Layout/*"],
+ 			"@Library/*": ["Source/Library/*"],
+ 			"@Notation/*": ["Source/Notation/*"],
+ 			"@Option/*": ["Source/Option/*"],
+ 			"@Page/*": ["Source/pages/*"],
+ 			"@Script/*": ["Source/Script/*"],
+ 			"@Stylesheet/*": ["Source/Stylesheet/*"],
+ 			"@Target/*": ["Source/Target/*"],
+ 			"@Test/*": ["Source/Test/*"],
+ 			"@Type/*": ["Source/Type/*"],
+ 			"@Variable/*": ["Source/Variable/*"]
+ 		},
+ 		"resolveJsonModule": true,
+ 		"skipLibCheck": true,
+ 		"strict": true,
+ 		"strictBindCallApply": true,
+ 		"strictFunctionTypes": true,
+ 		"strictNullChecks": true,
+ 		"target": "ESNext",
+ 		"types": ["node", "@types/node"],
+ 		"verbatimModuleSyntax": true
+ 	},
+ 	"include": ["Source"],
+ 	"exclude": [
+ 		".git",
+ 		"node_modules",
+ 		"Target",
+ 		"**/.git/**",
+ 		"**/node_modules/**",
+ 		"**/Target/**",
+ 		"**/samples/**"
+ 	],
+ 	"jshint.options": {
+ 		"esversion": 6
+ 	}
+ }
diff --git a/LICENSE b/LICENSE
index cca5808..f236d76 100644
--- a/LICENSE
+++ b/LICENSE
- Copyright (c) 2023-2024 Playform
+ Copyright (c) 2023-2024 PlayForm
diff --git a/package.json b/package.json
index 62f7ebb..f5d663b 100644
--- a/package.json
+++ b/package.json
- 	"name": "typescript-esbuild",
- 	"version": "0.4.9",
+ 	"name": "@playform/build",
+ 	"version": "0.1.2",
- 	"description": "🌀 ESBuild Wrapper.",
- 	"keywords": ["javascript", "typescript", "esbuild"],
- 	"homepage": "https://github.com/Playform/TypeScriptESBuild#readme",
+ 	"description": "🌀 Build —",
+ 	"keywords": [
+ 		"javascript",
+ 		"typescript",
+ 		"esbuild",
+ 		"playform"
+ 	],
+ 	"homepage": "HTTPS://GitHub.Com/PlayForm/Build#ReadMe",
- 		"url": "https://github.com/Playform/TypeScriptESBuild/issues"
+ 		"url": "HTTPS://GitHub.Com/PlayForm/Build/issues"
- 		"url": "git+https://github.com/Playform/TypeScriptESBuild.git"
+ 		"url": "git+https://github.com/PlayForm/Build.git"
- 		"name": "Playform",
- 		"email": "hello@playform.cloud",
- 		"url": "https://playform.cloud"
+ 		"name": "🖋️ Source — 👐🏻 Open —",
+ 		"email": "Source/Open@PlayForm.Cloud",
+ 		"url": "HTTPS://PlayForm.Cloud"
- 	"main": "./Target/Class/TypeScriptESBuild.js",
- 	"types": "./Target/Class/TypeScriptESBuild.d.ts",
+ 	"main": "./Target/Class/Build.js",
+ 	"types": "./Target/Class/Build.d.ts",
- 		"TypeScriptESBuild": "Target/Class/TypeScriptESBuild.js"
+ 		"Build": "Target/Class/Build.js"
- 		"Document": "TypeScriptDocument 'Source/**/*.ts'",
- 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/TypeScriptESBuild.ts 'Source/**/*.ts'"
+ 		"Run": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts' --Watch",
+ 		"prepublishOnly": "node --no-warnings --loader ts-node/esm Source/Class/Build.ts 'Source/**/*.ts'"
- 		"@types/node": "20.11.30",
- 		"commander": "12.0.0",
- 		"deepmerge-ts": "5.1.0",
- 		"esbuild": "0.20.2",
- 		"esbuild-plugin-copy": "2.1.1",
+ 		"@types/node": "22.0.2",
+ 		"commander": "12.1.0",
+ 		"deepmerge-ts": "7.1.0",
+ 		"esbuild": "0.23.0",
- 		"typescript": "5.4.3"
+ 		"tsc-alias": "1.8.10",
+ 		"typescript": "*"
- 		"ts-node": "10.9.2"
- 	},
- 	"peerDependencies": {
- 		"typescript-document": "0.0.6"
+ 		"ts-node": "11.0.0-beta.1"
- 		"access": "public"
+ 		"access": "public",
+ 		"provenance": true
diff --git a/README.md b/README.md
index e9a550a..f226e1e 100644
--- a/README.md
+++ b/README.md
- # 🌀 [TypeScriptESBuild]
+ # 🌀 [Build] —
- Build all your TypeScript files into JavaScript.
+ Builds all your TypeScript files into JavaScript.
- npm install -D -E typescript-esbuild
+ npm install -D -E @playform/build
- npx typescript-esbuild 'Source/**/*.ts'
+ npx @playform/build 'Source/**/*.ts'
- or in a `package.json` file:
+ Help:
+ 
+ ```sh
+ Usage: Build [options] <File...>
+ 
+ 🌀 Build —
+ 
+ Arguments:
+   File                      📝 File —
+ 
+ Options:
+   -V, --version             output the version number
+   -ES, --ESBuild <File>     📜 ESBuild —
+   -TS, --TypeScript <File>  📜 TypeScript — (default: "tsconfig.json")
+   -W --Watch                👁️ Watch —
+   -h, --help                display help for command
+ ```
+ 
+ Or in a `package.json` file:
- 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
+ 		"Run": "Build 'Source/**/*.ts' --Watch",
+ 		"prepublishOnly": "Build 'Source/**/*.ts'"
- ### ESBuild Configuration
+ ### 📜 ESBuild Configuration
- 		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es ESBuild.ts"
+ 		"prepublishOnly": "Build 'Source/**/*.ts' --ESBuild ESBuild.ts"
- ### TypeScript Configuration
+ ### 📜 TypeScript Configuration
- 	"extends": "typescript-esbuild/Target/Notation/TypeScript",
+ 	"extends": "@playform/build/tsconfig",
+ 	"include": ["Source"]
+ }
+ ```
+ 
+ ### JSConfig Configuration (optional)
+ 
+ `jsconfig.json`
+ 
+ ```json
+ {
+ 	"compilerOptions": {
+ 		"outDir": "Target"
+ 	},
+ 	"extends": "@playform/build/jsconfig",
- [ESBuild]: https://npmjs.org/esbuild
- [TypeDoc]: https://npmjs.org/typedoc
- [TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
+ [ESBuild]: HTTPS://NPMJS.Org/esbuild
+ [TypeDoc]: HTTPS://NPMJS.Org/typedoc
+ [Build]: HTTPS://NPMJS.Org/@playform/build
diff --git a/Source/Class/Build.ts b/Source/Class/Build.ts
new file mode 100644
index 0000000..87847d6
--- /dev/null
+++ b/Source/Class/Build.ts
+ #!/usr/bin/env node
+ 
+ /**
+  * @module Build
+  *
+  */
+ export default new (await import("commander")).Command()
+ 	.name("Build")
+ 	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
+ 	.description("🌀 Build —")
+ 	.argument("<File...>", "📝 File —")
+ 	.option("-ES, --ESBuild <File>", "📜 ESBuild —")
+ 	.option("-TS, --TypeScript <File>", "📜 TypeScript —", "tsconfig.json")
+ 	.option("-W --Watch", "👁️ Watch —")
+ 	.action((await import("../Function/Build.js")).default)
+ 	.parse();
diff --git a/Source/Class/TypeScriptESBuild.ts b/Source/Class/TypeScriptESBuild.ts
deleted file mode 100644
index 8ef9c08..0000000
--- a/Source/Class/TypeScriptESBuild.ts
+++ /dev/null
- #!/usr/bin/env node
- 
- /**
-  * @module TypeScriptESBuild
-  *
-  */
- export default new (await import("commander")).Command()
- 	.name("TypeScriptESBuild")
- 	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
- 	.description("🌀 Build TypeScript.")
- 	.argument("<File...>", "Build File.")
- 	.option("-ES, --ESBuild <File>", "ESBuild Configuration.")
- 	.option("-TS, --TypeScript <File>", "TypeScript Configuration.")
- 	.action((await import("../Function/Build.js")).default)
- 	.parse();
diff --git a/Source/Function/Build.ts b/Source/Function/Build.ts
index 52074eb..44b0795 100644
--- a/Source/Function/Build.ts
+++ b/Source/Function/Build.ts
- export default (async (...[File, Option]: Parameters<Type>) => {
+ export default (async (...[File, Option]: Parameters<Interface>) => {
- 		for (const __File of await (await import("fast-glob")).default(
- 			_File.replaceAll("'", "").replaceAll('"', ""),
- 		)) {
+ 		for (const __File of await (
+ 			await import("fast-glob")
+ 		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
- 	const Configuration = Merge(
+ 	let Configuration: BuildOptions = Merge(
+ 			tsconfig: Option?.TypeScript ?? "tsconfig.json",
- 	console.log(
- 		await (await import("esbuild")).analyzeMetafile(
- 			(
- 				await (
- 					await import("esbuild")
- 				).build(
- 					Option?.ESBuild
+ 	Configuration = Option?.ESBuild
- 									await import("../Function/File.js")
+ 					await import("@Function/File.js")
- 						: Configuration,
- 				)
- 			)?.metafile ?? "",
+ 		: Configuration;
+ 
+ 	Configuration.plugins?.push({
+ 		name: "TypeScript",
+ 		setup({ onEnd }) {
+ 			onEnd(async () => {
+ 				await Exec(`tsc -p ${Configuration.tsconfig}`);
+ 				await Exec(`tsc-alias -f -p ${Configuration.tsconfig}`);
+ 			});
+ 		},
+ 	});
+ 
+ 	if (Option?.Watch) {
+ 		const Context = await (await import("esbuild")).context(Configuration);
+ 
+ 		await Context.watch();
+ 	} else {
+ 		console.log(
+ 			await (
+ 				await import("esbuild")
+ 			).analyzeMetafile(
+ 				(await (await import("esbuild")).build(Configuration))
+ 					?.metafile ?? "",
+ 	}
+ }) satisfies Interface as Interface;
- 	Exec(`tsc -p ${Option?.TypeScript ?? "tsconfig.json"}`);
- }) satisfies Type as Type;
+ import type { BuildOptions } from "esbuild";
- import type Type from "../Interface/Build.js";
+ import type Interface from "../Interface/Build.js";
- export const { resolve } = await import("path");
- 
diff --git a/Source/Function/Exec.ts b/Source/Function/Exec.ts
index 8f53f41..966d954 100644
--- a/Source/Function/Exec.ts
+++ b/Source/Function/Exec.ts
- 	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Type>
+ 	...[
+ 		Command,
+ 		Echo = async (Return) => console.log(Return),
+ 	]: Parameters<Interface>
- 			stdout?.on("data", (Data) => Echo(Data));
- 			stderr?.on("data", (Data) => Echo(Data));
+ 			stdout?.on("data", async (Data) => await Echo(Data.trim()));
+ 			stderr?.on("data", async (Data) => await Echo(Data.trim(), true));
- }) satisfies Type as Type;
+ }) satisfies Interface as Interface;
- import type Type from "../Interface/Exec.js";
+ import type Interface from "../Interface/Exec.js";
diff --git a/Source/Function/File.ts b/Source/Function/File.ts
index 212ba4a..2b578fa 100644
--- a/Source/Function/File.ts
+++ b/Source/Function/File.ts
- export default (async (...[Path]: Parameters<Type>) => {
+ export default (async (...[Path]: Parameters<Interface>) => {
- 		const { options } = (
+ 		const { options: Option } = (
- 					await import("./JSON.js")
+ 					await import("../Function/JSON.js")
- 					"../Notation/TypeScript.json",
- 					(
- 						await import("path")
- 					).dirname(
+ 					"../../tsconfig.json",
+ 					(await import("path")).dirname(
- 				options,
- 				(await import("typescript")).default.createCompilerHost(
- 					options,
- 				),
+ 				Option,
+ 				(await import("typescript")).default.createCompilerHost(Option),
- 		await (await import("fs/promises")).writeFile(
+ 		await (
+ 			await import("fs/promises")
+ 		).writeFile(
- 				options,
+ 				Option,
- 			(
- 				await import("url")
- 			)
+ 			(await import("url"))
- }) satisfies Type as Type;
+ }) satisfies Interface as Interface;
- import type Type from "../Interface/File.js";
+ import type Interface from "../Interface/File.js";
diff --git a/Source/Function/JSON.ts b/Source/Function/JSON.ts
index 9f75935..b44f0ac 100644
--- a/Source/Function/JSON.ts
+++ b/Source/Function/JSON.ts
- export default (async (...[File, From]: Parameters<Type>) =>
+ export default (async (...[File, From]: Parameters<Interface>) =>
- 	)) satisfies Type as Type;
+ 	)) satisfies Interface as Interface;
- import type Type from "../Interface/JSON.js";
+ import type Interface from "../Interface/JSON.js";
diff --git a/Source/Function/Merge.ts b/Source/Function/Merge.ts
index 8586054..adc696d 100644
--- a/Source/Function/Merge.ts
+++ b/Source/Function/Merge.ts
- export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
+ export default (await import("deepmerge-ts")).deepmergeCustom({
- }) satisfies Type<Generic> as Type<Generic>;
- 
- import type Type from "../Interface/Merge.js";
- import type { Generic } from "../Interface/Merge.js";
+ });
diff --git a/Source/Interface/Build.ts b/Source/Interface/Build.ts
index 01dce34..e32d153 100644
--- a/Source/Interface/Build.ts
+++ b/Source/Interface/Build.ts
- export default interface Type {
+ export default interface Interface {
+ 			Watch?: boolean;
diff --git a/Source/Interface/Exec.ts b/Source/Interface/Exec.ts
index ff2ec1b..a8de39c 100644
--- a/Source/Interface/Exec.ts
+++ b/Source/Interface/Exec.ts
- export default interface Type {
+ export default interface Interface {
- 		Echo?: false | ((Return: any) => void),
+ 		Echo?: false | ((Return: any, _Error?: boolean) => Promise<void>),
diff --git a/Source/Interface/File.ts b/Source/Interface/File.ts
index 607aee2..0de0809 100644
--- a/Source/Interface/File.ts
+++ b/Source/Interface/File.ts
- export default interface Type {
+ export default interface Interface {
diff --git a/Source/Interface/JSON.ts b/Source/Interface/JSON.ts
index 9447d0c..3b5f8df 100644
--- a/Source/Interface/JSON.ts
+++ b/Source/Interface/JSON.ts
- export default interface Type {
+ export default interface Interface {
diff --git a/Source/Interface/Merge.ts b/Source/Interface/Merge.ts
deleted file mode 100644
index 5e66d23..0000000
--- a/Source/Interface/Merge.ts
+++ /dev/null
- /**
-  * @module Merge
-  *
-  * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeMergeFunctionsURIs.
-  *
-  * @template PMF - A type parameter representing Partial<DeepMergeMergeFunctionsURIs>.
-  *
-  */
- export default interface Type<
- 	PMF extends Partial<DeepMergeMergeFunctionsURIs>,
- > {
- 	/**
- 	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
- 	 *
- 	 * @param ...Objects - An arbitrary number of objects to be merged.
- 	 *
- 	 */
- 	<Ts extends readonly unknown[]>(
- 		...Objects: Ts
- 	): DeepMergeHKT<
- 		Ts,
- 		GetDeepMergeMergeFunctionsURIs<PMF>,
- 		DeepMergeBuiltInMetaData
- 	>;
- }
- 
- export interface Generic {
- 	DeepMergeArraysURI: DeepMergeLeafURI;
- }
- 
- import type {
- 	DeepMergeBuiltInMetaData,
- 	DeepMergeHKT,
- 	DeepMergeLeafURI,
- 	DeepMergeMergeFunctionsURIs,
- 	GetDeepMergeMergeFunctionsURIs,
- } from "deepmerge-ts";
diff --git a/Source/Notation/TypeScript.json b/Source/Notation/TypeScript.json
deleted file mode 100644
index 80ad3c6..0000000
--- a/Source/Notation/TypeScript.json
+++ /dev/null
- {
- 	"$schema": "https://json.schemastore.org/tsconfig",
- 	"compilerOptions": {
- 		"allowArbitraryExtensions": true,
- 		"allowImportingTsExtensions": true,
- 		"allowJs": true,
- 		"allowSyntheticDefaultImports": true,
- 		"allowUmdGlobalAccess": false,
- 		"allowUnreachableCode": false,
- 		"allowUnusedLabels": false,
- 		"alwaysStrict": true,
- 		"assumeChangesOnlyAffectDirectDependencies": true,
- 		"baseUrl": "./",
- 		"checkJs": true,
- 		"declaration": true,
- 		"disableReferencedProjectLoad": false,
- 		"emitDeclarationOnly": true,
- 		"esModuleInterop": true,
- 		"exactOptionalPropertyTypes": true,
- 		"forceConsistentCasingInFileNames": true,
- 		"isolatedModules": true,
- 		"jsx": "preserve",
- 		"lib": ["ESNext"],
- 		"module": "ESNext",
- 		"moduleResolution": "Bundler",
- 		"noFallthroughCasesInSwitch": true,
- 		"noImplicitOverride": true,
- 		"noImplicitReturns": true,
- 		"noPropertyAccessFromIndexSignature": true,
- 		"noUncheckedIndexedAccess": true,
- 		"noUnusedLocals": true,
- 		"noUnusedParameters": true,
- 		"resolveJsonModule": true,
- 		"skipLibCheck": true,
- 		"strict": true,
- 		"strictBindCallApply": true,
- 		"strictFunctionTypes": true,
- 		"strictNullChecks": true,
- 		"target": "ESNext",
- 		"types": ["node", "@types/node"],
- 		"verbatimModuleSyntax": true,
- 		"noImplicitThis": true,
- 		"paths": {
- 			"@Asset/*": ["Source/Asset/*"],
- 			"@Class/*": ["Source/Class/*"],
- 			"@Component/*": ["Source/Component/*"],
- 			"@Context/*": ["Source/Context/*"],
- 			"@Element/*": ["Source/Element/*"],
- 			"@Function/*": ["Source/Function/*"],
- 			"@Interface/*": ["Source/Interface/*"],
- 			"@Layout/*": ["Source/Layout/*"],
- 			"@Library/*": ["Source/Library/*"],
- 			"@Notation/*": ["Source/Notation/*"],
- 			"@Option/*": ["Source/Option/*"],
- 			"@Page/*": ["Source/pages/*"],
- 			"@Script/*": ["Source/Script/*"],
- 			"@Stylesheet/*": ["Source/Stylesheet/*"],
- 			"@Type/*": ["Source/Type/*"],
- 			"@Variable/*": ["Source/Variable/*"]
- 		}
- 	},
- 	"ts-node": {
- 		"esm": true
- 	}
- }
diff --git a/Source/Variable/ESBuild.ts b/Source/Variable/ESBuild.ts
index c09869e..ee02b93 100644
--- a/Source/Variable/ESBuild.ts
+++ b/Source/Variable/ESBuild.ts
+ 	logLevel: "debug",
+ 	tsconfig: "tsconfig.json",
- 	logLevel: "debug",
- 							? await (await import("fs/promises")).rm(outdir, {
+ 							? await (
+ 									await import("fs/promises")
+ 								).rm(outdir, {
- 		(await import("esbuild-plugin-copy")).copy({
- 			resolveFrom: "out",
- 			assets: [
- 				{
- 					from: "./Source/Notation/TypeScript.json",
- 					to: "./Notation/",
- 				},
- 			],
- 		}),
diff --git a/tsconfig.json b/tsconfig.json
index 12e0400..d03c6ae 100644
--- a/tsconfig.json
+++ b/tsconfig.json
+ 	"$schema": "https://json.schemastore.org/tsconfig",
- 		"outDir": "Target"
+ 		"allowArbitraryExtensions": true,
+ 		"allowImportingTsExtensions": true,
+ 		"allowJs": true,
+ 		"allowSyntheticDefaultImports": true,
+ 		"allowUmdGlobalAccess": false,
+ 		"allowUnreachableCode": false,
+ 		"allowUnusedLabels": false,
+ 		"alwaysStrict": true,
+ 		"assumeChangesOnlyAffectDirectDependencies": true,
+ 		"baseUrl": "./",
+ 		"checkJs": true,
+ 		"declaration": true,
+ 		"disableReferencedProjectLoad": false,
+ 		"emitDeclarationOnly": true,
+ 		"esModuleInterop": true,
+ 		"exactOptionalPropertyTypes": true,
+ 		"forceConsistentCasingInFileNames": true,
+ 		"isolatedModules": true,
+ 		"jsx": "preserve",
+ 		"lib": ["ESNext"],
+ 		"module": "ESNext",
+ 		"moduleResolution": "Bundler",
+ 		"noFallthroughCasesInSwitch": true,
+ 		"noImplicitOverride": true,
+ 		"noImplicitReturns": true,
+ 		"noImplicitThis": true,
+ 		"noPropertyAccessFromIndexSignature": true,
+ 		"noUncheckedIndexedAccess": true,
+ 		"noUnusedLocals": true,
+ 		"noUnusedParameters": true,
+ 		"outDir": "Target",
+ 		"paths": {
+ 			"@Asset/*": ["Source/Asset/*"],
+ 			"@Class/*": ["Source/Class/*"],
+ 			"@Component/*": ["Source/Component/*"],
+ 			"@Context/*": ["Source/Context/*"],
+ 			"@Element/*": ["Source/Element/*"],
+ 			"@Function/*": ["Source/Function/*"],
+ 			"@Interface/*": ["Source/Interface/*"],
+ 			"@Layout/*": ["Source/Layout/*"],
+ 			"@Library/*": ["Source/Library/*"],
+ 			"@Notation/*": ["Source/Notation/*"],
+ 			"@Option/*": ["Source/Option/*"],
+ 			"@Page/*": ["Source/pages/*"],
+ 			"@Script/*": ["Source/Script/*"],
+ 			"@Stylesheet/*": ["Source/Stylesheet/*"],
+ 			"@Target/*": ["Source/Target/*"],
+ 			"@Test/*": ["Source/Test/*"],
+ 			"@Type/*": ["Source/Type/*"],
+ 			"@Variable/*": ["Source/Variable/*"]
- 	"extends": "./Source/Notation/TypeScript",
- 	"include": ["Source"]
+ 		"resolveJsonModule": true,
+ 		"skipLibCheck": true,
+ 		"strict": true,
+ 		"strictBindCallApply": true,
+ 		"strictFunctionTypes": true,
+ 		"strictNullChecks": true,
+ 		"target": "ESNext",
+ 		"types": ["node", "@types/node"],
+ 		"verbatimModuleSyntax": true
+ 	},
+ 	"include": ["Source"],
+ 	"ts-node": {
+ 		"esm": true
+ 	}

