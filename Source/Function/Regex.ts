/**
 * @module Regex
 *
 * Converts a basic glob pattern to a regular expression.
 * Handles '*' (match anything except separator) and '**' (match anything including separators).
 * Escapes other regex special characters.
 * @param Glob The glob pattern string.
 * @returns A RegExp object.
 */
export default (Glob: string): RegExp => {
	let Expression = Glob.replace(/[.+^${}()|[\]\\]/g, "\\$&")
		.replace(/\*\*/g, ".*")
		.replace(/\*/g, `[^${posix.sep}]+`);

	if (!Glob.startsWith("**") && !Glob.startsWith("*")) {
		Expression = `(?:^|\\${posix.sep})${Expression}`;
	}
	if (!Glob.endsWith("**") && !Glob.endsWith("*")) {
		Expression = `${Expression}(?:\\${posix.sep}|$)`;
	} else if (
		!Glob.includes("*") &&
		!Glob.includes("/") &&
		Glob.startsWith(".")
	) {
		Expression = `${Expression}$`;
	} else if (!Glob.includes("*") && !Glob.includes("/")) {
		Expression = `(?:^|\\${posix.sep})${Expression}(?:\\${posix.sep}|$)`;
	}

	try {
		return new RegExp(Expression);
	} catch (_Error) {
		console.error(
			`[Exclude] Invalid regex generated from glob "${Glob}": ${Expression}`,
			_Error,
		);

		return new RegExp("$.");
	}
};

export const { posix } = await import("../Variable/ESBuild.js");
