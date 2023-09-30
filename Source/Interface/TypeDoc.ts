/**
 * @module TypeDoc
 * @group TypeDoc
 *
 */
export default interface Type {
	load: (Application: Application) => void;
}

import type { Application } from "typedoc";
