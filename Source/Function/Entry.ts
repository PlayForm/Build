import type { BuildOptions } from "esbuild";

/**
 * @module Entry
 *
 */
export default (Current: BuildOptions, From: string[]) => {
	let _Filtered = [];

	if (Current.entryPoints) {
		const Original = Current.entryPoints;

		if (
			Array.isArray(Original) &&
			(Original.length === 0 || typeof Original[0] === "string")
		) {
			// @ts-expect-error
			_Filtered = Original.filter((Entry) => !Exclude(Entry, From));
		} else if (
			Array.isArray(Original) &&
			Original.length > 0 &&
			typeof Original[0] === "object" &&
			Original[0] !== null &&
			"in" in Original[0]
		) {
			// @ts-expect-error
			_Filtered = Original.filter((Entry) => !Exclude(Entry.in, From));
		} else if (
			!Array.isArray(Original) &&
			typeof Original === "object" &&
			Original !== null
		) {
			const Record = Original;

			const Filtered = {};

			for (const Key in Record) {
				if (Object.prototype.hasOwnProperty.call(Record, Key)) {
					const Input = Record[Key];

					if (Input !== undefined) {
						if (!Exclude(Input, From)) {
							// @ts-expect-error
							Filtered[Key] = Input;
						}
					}
				}
			}

			// @ts-expect-error
			_Filtered = Filtered;
		} else if (Array.isArray(Original) && Original.length === 0) {
			_Filtered = [];
		} else {
			_Filtered = Original;
		}
	} else {
		_Filtered = [];
	}

	return _Filtered;
};

export const { default: Exclude } = await import("./Exclude.js");
