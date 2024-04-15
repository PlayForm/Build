# 🌀 [Build.]

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
		"prepublishOnly": "Build 'Source/**/*.ts'"
	}
}
```

### ESBuild Configuration

Or with a custom ESBuild config file:

`package.json`

```json
{
	"scripts": {
		"prepublishOnly": "Build 'Source/**/*.ts' --ESBuild ESBuild.ts"
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
	"extends": "@playform/build/tsconfig",
	"include": ["Source"]
}
```

[ESBuild]: HTTPS://npmjs.org/esbuild
[TypeDoc]: HTTPS://npmjs.org/typedoc
[Build.]: HTTPS://npmjs.org/@playform/build
