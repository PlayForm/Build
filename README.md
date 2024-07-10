# 🌀 [Build] —

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

```sh
Usage: Build [options] <File...>

🌀 Build —

Arguments:
  File                      📂 File —

Options:
  -V, --version             output the version number
  -ES, --ESBuild <File>     👷🏻‍♀️ ESBuild —
  -TS, --TypeScript <File>  👨🏻‍💻 TypeScript — (default: "tsconfig.json")
  -h, --help                display help for command
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

### JSConfig Configuration (optional)

`jsconfig.json`

```json
{
	"compilerOptions": {
		"outDir": "Target"
	},
	"extends": "@playform/build/jsconfig",
	"include": ["Source"]
}
```

[ESBuild]: HTTPS://NPMJS.Org/esbuild
[TypeDoc]: HTTPS://NPMJS.Org/typedoc
[Build]: HTTPS://NPMJS.Org/@playform/build
