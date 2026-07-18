## 0.3.3

### Fixed

- Fixed `TypeError: Cannot read properties of undefined (reading 'fileExists')`
  crash in `prepublishOnly` script caused by TypeScript 7.x incompatibility
- Replaced `ts-node` (`10.9.2`) with `tsx` (`^4.23.1`) — ts-node depends on
  `ts.sys` which was removed in TypeScript 7.x, while tsx bundles its own
  transpiler

### Changed

- Updated tsconfig.json for TypeScript 7.x compatibility:
    - Removed deprecated `baseUrl` option
    - Added `./` prefix to all path values (TS 7.x requires relative paths)
- Simplified `Source/Function/File.ts` — removed manual TypeScript compilation
  API calls (`convertCompilerOptionsFromJson`, `createProgram`,
  `createCompilerHost`, `transpile`) which were removed in TS 7.x. With tsx as
  the loader, `.ts` files are now imported directly without manual transpilation.

## 0.3.2

### Changed

- Updated version to 0.3.2
- Updated dependencies:
    - `@types/node` from 25.5.2 to 25.6.2
    - `tsc-alias` from 1.8.16 to 1.8.17
    - `typescript` from 6.0.2 to 6.0.3

### Added

- Added `Configuration/` to `.npmignore` to exclude from published package

## 0.3.1

### Changed

- Updated version to 0.3.1
- Updated dependencies:
    - `@types/node` from 25.2.3 to 25.5.2
    - `esbuild` from 0.27.3 to 0.28.0
    - `typescript` from 5.9.3 to 6.0.2

### Added

- Added `Documentation/` to `.npmignore` to exclude from published package
- Added `ignoreDeprecations` option to tsconfig.json
- Added `rootDir` option to tsconfig.json

## 0.3.0

### Added

- **Log level filtering**: Added `Level` environment variable to control
  TypeScript error output independently from `NODE_ENV`
- New `Level` variable using esbuild's
  [`LogLevel`](node_modules/.pnpm/esbuild@0.27.2/node_modules/esbuild/lib/main.d.ts)
  type (`'verbose' | 'debug' | 'info' | 'warning' | 'error' | 'silent'`)
- New shared [`Echo`](Source/Function/Echo.ts) function for filtering output
- New [`Level`](Source/Variable/Level.ts) variable for log level configuration
- New [`Echo`](Source/Interface/Echo.ts) interface for the Echo callback type

### Changed

- Update all [`@module`](Source) JSDoc annotations to use file path-based module
  names
- Refactored interface files to use TypeScript (.ts) files with proper type
  exports
- Updated [`Exec`](Source/Function/Exec.ts) and
  [`Build`](Source/Function/Build.ts) functions to use shared Echo function

### Fixed

- Fixed JSDoc example comment issues with glob patterns using HTML entity
  encoding

## 0.2.6

### Change

- Updated version to 0.2.6
- Updated dependencies:
    - `@types/node` from 24.0.8 to 25.0.3
    - `commander` from 14.0.0 to 14.0.2
    - `esbuild` from 0.25.5 to 0.27.2
    - `typescript` from 5.8.3 to 5.9.3

## 0.2.5

### Change

- Updated version to 0.2.5
- Updated dependencies:
    - `@types/node` from 22.15.14 to 24.0.8
    - `commander` from 13.1.0 to 14.0.0
    - `esbuild` from 0.25.4 to 0.25.5
- Enabled color output in ESBuild configuration

## 0.2.4

### Change

- Updated version to 0.2.4
- Updated contact information in package.json:
    - Changed email from "Source/Open@PlayForm.LTD" to
      "Source/Open@PlayForm.Cloud"
    - Updated URL from "HTTPS://PlayForm.LTD" to "HTTPS://PlayForm.Cloud"
- Updated dependencies:
    - `@types/node` from 22.14.0 to 22.15.14
    - `esbuild` from 0.25.2 to 0.25.4
    - `tsc-alias` from 1.8.13 to 1.8.16
- Improved path handling in ESBuild configuration:
    - Added proper path normalization using node:path's posix separator
    - Enhanced type safety for entry point filtering

### Add

- New entry point filtering system:
    - Added Entry.ts module for handling ESBuild entry point configuration
    - Added Exclude.ts with advanced pattern matching:
        - Supports simple string inclusion
        - Handles basic glob patterns (\* and \*\*)
        - Implements path normalization
    - Added Regex.ts for converting glob patterns to regular expressions
    - Improved exclusion logic for build entry points

## 0.2.3

### Change

- Updated version to 0.2.3
- Refactored configuration merging logic for ESBuild:
    - Added support for function-based configuration exports
    - Improved type safety with new `Build/Set` interface
    - Enhanced merge handling for entryPoints and plugins arrays
- Modified ESBuild configuration based on NODE_ENV:
    - Toggle minification based on environment
    - Adjust sourcemaps, legal comments, and debug statements
    - Configure asset naming and bundle settings
- Simplified deepmerge implementation using standard deepmerge-ts
- Improved type checking for tsconfig path validation
- Updated metafile analysis to use build results directly

### Remove

- Remove custom merge implementation (Merge/Into.ts)
- Remove obsolete Merge/Into interface

## 0.2.2

### Change

- Updated version to 0.2.2
- Updated dependencies:
    - `@types/node` from 22.10.5 to 22.14.0
    - `commander` from 13.0.0 to 13.1.0
    - `deepmerge-ts` from 7.1.3 to 7.1.5
    - `esbuild` from 0.24.2 to 0.25.2
    - `tsc-alias` from 1.8.10 to 1.8.13
    - `typescript` from 5.7.2 to 5.8.2
- Improved command-line interface descriptions and emoji formatting
- Migrated to Node.js core module imports using `node:` protocol
    - Updated imports in `Build.ts`, `File.ts`, and `JSON.ts`
    - Changed `import("path")` to `import("node:path")`
    - Changed `import("fs/promises")` to `import("node:fs/promises")`
    - Changed `import("url")` to `import("node:url")`
- Enhanced type safety in ESBuild configuration:
    - Added explicit `Plugin` type import from esbuild
    - Added type assertion for ESBuild plugin configuration

## 0.2.1

### Change

- Updated version to 0.2.1
- Updated @types/node from 22.10.1 to 22.10.5
- Updated commander from 12.1.0 to 13.0.0
- Updated esbuild from 0.24.0 to 0.24.2
- Updated fast-glob from 3.3.2 to 3.3.3
- Simplified command options naming

### Add

- Added DEPENDENTS.md
- Added .npmignore to exclude DEPENDENTS.md from published package

## 0.2.0

### Change

- Updated version to 0.2.0
- Updated `@types/node` from 22.9.0 to 22.10.1
- Updated `typescript` from 5.6.3 to 5.7.2
- Simplified code in `Source/Function/Build.ts` by removing Current variable
- Improved code formatting in `Source/Function/Exec.ts`

## 0.1.9

### Change

- Updated version to 0.1.9
- Updated email in package.json from "Source/Open@PlayForm.Cloud" to
  "Source/Open@PlayForm.Cloud"
- Updated URL in package.json from "HTTPS://PlayForm.Cloud" to
  "HTTPS://PlayForm.Cloud"
- Updated `@types/node` from version 22.7.7 to 22.9.0

## 0.1.8

### Change

- Updated dependencies.
- Migrated from `deepmerge-ts`'s `deepmergeCustom` to a custom merge function
  for more control.
- Improved the merging logic for `entryPoints` in the
  [ESBuild](https://esbuild.github.io/api/#plugins) configuration to prevent
  unwanted array flattening.

## 0.1.7

### Change

- Updated dependencies.
- Simplified documentation folder structure.

## 0.1.6

### Change

- Simplified build process to improve performance.
- Updated dependencies.

## 0.1.5

### Change

- Updated `@types/node` to version 22.5.4
- Improved build process to include CSS files.
- Enhanced file path handling in the build process using path module functions.
- Updated dependencies:
    - `esbuild`
    - `ts-node`

### Add

- Added the ability to exclude files/folders from the build process.
- Added `ignore` option to the Build interface.

## 0.1.4

### Change

- Updated `@types/node` to version 22.5.0
- Updated `esbuild` to version 0.23.1
- Updated `typescript` to version 5.5.4
- Reverted `ts-node` to version 10.9.2
- Improved file path handling in the build process.

### Add

- Added `experimentalDecorators` option to tsconfig.json

## 0.1.3

### Change

- Updated version to 0.1.3
- Updated dependencies:
    - `@types/node` from 20.14.12 to 22.0.2
- Minor code formatting changes

### Add

- Added `provenance: true` to publishConfig in package.json
- Added `access: public` to publishConfig in package.json

## 0.1.2

### Change

- Updated version to 0.1.2
- Updated dependencies:
    - `@types/node` to 20.14.12
    - `deepmerge-ts` to 7.1.0
    - `typescript` to "\*" (latest)
- Updated devDependencies:
    - `ts-node` to 11.0.0-beta.1
- Improved error handling in Exec function

### Add

- Added `provenance: true` to publishConfig in package.json

## 0.1.1

### Change

- Updated version to 0.1.1
- Updated "Run" script to include "--Watch" option instead of "-W"

## 0.1.0

### Change

- Updated version to 0.1.0
- Updated dependencies
- Modified `Build` function to support watch mode
- Updated `TypeScript` configuration
- Updated command-line interface with clearer descriptions.
- Expanded `README.md` with detailed usage instructions and examples.

### Add

- Added `Watch` option to `Build` command

### Removed

- Removed `peerDependencies`

## 0.0.11

### Change

- Updated `dependencies`

## 0.0.10

### Change

- Removed `Document` script
- Updated `dependencies`

## 0.0.9

### Change

- Updated version to 0.0.9
- Updated `package.json` metadata
- Updated dependencies
- Modified `package.json` structure

### Add

- Added `peerDependencies`
- Added `peerDependenciesMeta` for optional dependencies

## 0.0.8

### Change

- Updated version to 0.0.8
- Updated package description and keywords
- Updated homepage and repository URLs
- Updated repository and author information
- Updated dependencies
- Improved command-line interface descriptions.

## 0.0.7

### Change

- Updated version to 0.0.7
- Updated repository URLs to use HTTPS

## 0.0.6

### Change

- Updated version to 0.0.6
- Updated package description
- Updated author information
- Updated dependencies
- Removed `@playform/document` from devDependencies

## 0.0.5

### Change

- Updated version to 0.0.5
- Updated `package.json` scripts

### Add

- Added `@playform/document` as a peer dependency

## 0.0.4

### Change

- Updated version to 0.0.4 (corrected from 0.0.5 in the summary)
- Added "Document" script
- Updated `peerDependencies`
- Minor code formatting changes

## 0.0.3

### Change

- Updated version to 0.0.3
- Updated dependencies
- Modified Build function to incorporate `tsc-alias`.
- Set `logLevel` in ESBuild configuration to "debug" for enhanced debugging.

### Add

- Added `tsc-alias` to dependencies

## 0.0.2

### Change

- Major refactoring and restructuring of the project.
- Updated package name to `@playform/build`.
- Updated version to 0.0.2.
- Updated package description, keywords, and metadata.
- Updated dependencies.
- Modified source files structure and content.
- Changed main and types file paths.
- Updated scripts in package.json.
- Simplified configuration by integrating `TypeScript.json` settings into
  `tsconfig.json`.
- Removed `esbuild-plugin-copy`.

### Add

- Added new source files and interfaces.

### Removed

- Removed several old source files and configurations.
- Removed `TypeScriptESBuild.ts` and shifted core logic to `Build.ts`.

## 0.0.1

### Add

- Initial release
