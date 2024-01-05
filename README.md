# [TypeScriptESBuild] 🌀

Builds all your TypeScript files into JavaScript and generates documentation for
it using [TypeDoc][typedoc].

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
		"typescript-esbuild": "0.3.5"
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

See an example of a configuration file in
[ESBuild.ts](Source/Variable/ESBuild.ts)

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

[esbuild]: https://npmjs.org/esbuild
[typedoc]: https://npmjs.org/typedoc
[TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
