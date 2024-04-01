# 🌀 [TypeScriptESBuild]

Build all your TypeScript files into JavaScript.

## Installation

Add configuration and setup scripts:

```sh
npm install -D -E @playform/build
```

## Usage

Through a command line run:

```sh
npx @playform/build 'Source/**/*.ts'
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
	"extends": "@playform/build/Target/Notation/TypeScript",
	"include": ["Source"]
}
```

[ESBuild]: https://npmjs.org/esbuild
[TypeDoc]: https://npmjs.org/typedoc
[TypeScriptESBuild]: https://npmjs.org/@playform/build
