/**
 * @module Exec
 *
 */
export default (async (
	...[Command, Echo = (Return) => console.log(Return)]: Parameters<Interface>
) => {
	try {
		const { stdout, stderr } = (await import("child_process")).exec(
			Command
		);

		if (typeof Echo === "function") {
			stdout?.on("data", (Data) => Echo(Data));
			stderr?.on("data", (Data) => Echo(Data));
		}
	} catch (_Error) {
		console.log(_Error);
	}
}) satisfies Interface as Interface;

import type Interface from "@Interface/Exec.js";
