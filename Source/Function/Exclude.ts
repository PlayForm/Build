/**
 * @module Exclude
 *
 * Checks if a given path matches any of the patterns in the 'From' array.
 * Handles simple string inclusion, basic globs (*, **), and path normalization.
 *
 * @param Path The file path to check.
 *
 * @param From An array of strings/patterns to exclude against.
 *
 * @returns True if the Path matches any pattern in From, false otherwise.
 *
 */
export default (Path: string, From: string[]): boolean => {
	if (!Path) {
		return false;
	}

	const Normalized = Path.split(sep).join(posix.sep);

	return From.some((Pattern: string) => {
		if (!Pattern) {
			return false;
		}

		const _Pattern = Pattern.split(sep).join(posix.sep);

		if (!_Pattern.includes("*") && !_Pattern.startsWith(".")) {
			if (
				Normalized.includes(`${posix.sep}${_Pattern}${posix.sep}`) ||
				Normalized.startsWith(`${_Pattern}${posix.sep}`) ||
				Normalized.endsWith(`${posix.sep}${_Pattern}`) ||
				Normalized === _Pattern
			) {
				return true;
			}
		}

		if (
			_Pattern.startsWith(".") &&
			!_Pattern.includes("*") &&
			!_Pattern.includes("/")
		) {
			if (Normalized.endsWith(_Pattern)) {
				return true;
			}
		}

		if (_Pattern.includes("*")) {
			if (_Regex(_Pattern).test(Normalized)) {
				return true;
			}
		}

		if (Normalized.includes(_Pattern)) {
			console.warn(
				`[Exclude] Simple includes match (fallback): "${Normalized}" includes "${_Pattern}"`,
			);

			return true;
		}

		return false;
	});
};

export const { posix, sep } = await import("../Variable/ESBuild.js");

export const { default: _Regex } = await import("./Regex.js");
