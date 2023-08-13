# [TSBundle] 🌀

Builds all your TypeScript files into JavaScript.

## Installation

Add configuration and setup scripts:

```sh
npm install -D -E @nikolarhristov/tsbundle
```

## Usage

`package.json`

```json
{
	"name": "my-awesome-package",
	"scripts": {
		"prepublishOnly": "TSBundle 'Source/**/*.ts'"
	},
	"dependencies": {
		"@nikolarhristov/tsbundle": "0.1.5"
	}
}
```

#### or with a custom esbuild config file:

```json
{
	"scripts": {
		"prepublishOnly": "TSBundle 'Source/**/*.ts' -es esbuild.ts"
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

[TSBundle]: https://npmjs.org/@nikolarhristov/tsbundle
[esbuild]: https://npmjs.org/esbuild
