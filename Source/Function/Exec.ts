/**
 * @module Exec
 *
 */
export default (async (
	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Type>
) => {
	try {
		const { stdout } = (await import("child_process")).exec(Command);

		if (typeof Echo === "function") {
			stdout?.on("data", (Data) => Echo(Data));
		}
	} catch (_Error) {
		console.log(_Error);
	}
}) satisfies Type as Type;

import type Type from "../Interface/Exec.js";
