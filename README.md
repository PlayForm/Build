# [TypeScript Build] 🧑🏻‍💻

This utility deletes all deployments older than 7 days in your Cloudflare Pages account.

## Installation

Add configuration and setup scripts:

```sh
npm install -D -E javascriptbuild
```

## Usage

`package.json`

```json
{
	"name": "my-awesome-package",
	"scripts": {
		"prepublishOnly": "JavaScriptBuild 'Source/**/*.ts'"
	},
	"dependencies": {
		"javascriptbuild": "0.1.2"
	}
}
```

#### or with a custom esbuild config file:

```json
{
	"scripts": {
		"prepublishOnly": "JavaScriptBuild 'Source/**/*.ts' -es esbuild.ts"
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

[TypeScript Build]: https://npmjs.org/javascriptbuild
[esbuild]: https://npmjs.org/esbuild
