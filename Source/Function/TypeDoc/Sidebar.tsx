/**
 * @module TypeDoc
 *
 */
export default ((...[Context, Property]: Parameters<Type>) => (
	<>
		{Context.sidebarLinks()}
		{Context.navigation(Property)}
	</>
)) satisfies Type as Type;

import { JSX } from "typedoc";

import type Type from "../../Interface/TypeDoc/Sidebar";
