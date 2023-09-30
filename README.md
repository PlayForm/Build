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
		"typescript-esbuild": "0.2.5"
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

See an example of a configuration file in [ESBuild.ts](Source/Object/ESBuild.ts)

### TypeScript Configuration

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
