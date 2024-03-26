# 🌀 [TypeScriptESBuild]

Build all your TypeScript files into JavaScript.

## Installation

Add configuration and setup scripts:

```sh
npm install -D -E typescript-esbuild
```

## Usage

Through a command line run:

```sh
npx typescript-esbuild 'Source/**/*.ts'
```

or in a `package.json` file:

```json
{
	"scripts": {
		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
	}
}
```

### ESBuild Configuration

Or with a custom ESBuild config file:

`package.json`

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

[ESBuild]: https://NPMJS.Org/esbuild
[TypeDoc]: https://NPMJS.Org/typedoc
[TypeScriptESBuild]: https://NPMJS.Org/typescript-esbuild
