# Build scripts and configuration

## Installation

Add configuration and setup scripts:

```sh
npm install -D -E typescriptbuild
```

## Usage

`package.json`

```json
{
	"name": "my-awesome-package",
	"scripts": {
		"prepublishOnly": "TypeScriptBuild 'Source/**/*.ts'"
	},
	"dependencies": {
		"typescriptbuild": "0.1.2"
	}
}
```

#### or with a custom esbuild config file:

```json
{
	"scripts": {
		"prepublishOnly": "TypeScriptBuild 'Source/**/*.ts' -es esbuild.ts"
	}
}
```

#### See an example of a config file in [esbuild.ts](Source/Configuration/esbuild.ts)

`tsconfig.json`

```json
{
	"compilerOptions": {
		"outDir": "Target"
	},
	"extends": "./Source/Configuration/TypeScript",
	"include": ["Source"]
}
```

The script will now automatically compile your build files with [esbuild] and
add TypeScript types.

[typescriptbuild]: https://npmjs.org/typescriptbuild
[esbuild]: https://npmjs.org/esbuild
