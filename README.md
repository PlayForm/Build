# Build scripts and configuration

## Installation

Add configuration and setup scripts:

```sh
npm install -D -E baxast
```

## Usage

`package.json`

```json
{
	"name": "my-awesome-package",
	"scripts": {
		"prepublishOnly": "baxast 'Source/**/*.ts'"
	},
	"dependencies": {
		"baxast": "latest"
	}
}
```

or with a custom esbuild config file:

```json
{
	"scripts": {
		"prepublishOnly": "baxast 'Source/**/*.ts' -es esbuild.ts"
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

[baxast]: https://npmjs.org/baxast
[esbuild]: https://npmjs.org/esbuild
