# [TypeScriptESBuild] 🌀

Builds all your TypeScript files into JavaScript.

## Installation

Add configuration and setup scripts:

```sh
npm install -D -E typescript-esbuild
```

## Usage

`package.json`

```json
{
	"name": "package",
	"scripts": {
		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
	},
	"devDependencies": {
		"typescript-esbuild": "0.2.4"
	}
}
```

### ESBuild Configuration

Or with a custom esbuild config file:

```json
{
	"scripts": {
		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es ESBuild.ts"
	}
}
```

### TypeScript Configuration

See an example of a configuration file in
[Configuration.ts](Source/Object/Configuration.ts)

`tsconfig.json`

```json
{
	"compilerOptions": {
		"outDir": "Target"
	},
	"extends": "typescript-esbuild/Target/Notation/TypeScript",
	"include": ["Source"]
}
```

[TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
[esbuild]: https://npmjs.org/esbuild
