/**
 * @module Exec
 * 
 */
export default (async (
	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Type>
) => {
	try {
		const Exec = (await import("child_process")).exec(Command);

		if (typeof Echo === "function") {
			Exec.stdout?.on("data", (Data) => Echo(Data));
		}
	} catch (_Error) {}
}) satisfies Type as Type;

import type Type from "../Interface/Exec.js";
