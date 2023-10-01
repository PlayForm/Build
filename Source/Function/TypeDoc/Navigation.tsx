export default ((...[Context, Property]: Parameters<Type>) => {
	const Navigation = Context.getNavigation();

	let Elements = 0;

	function Link(Element: NavigationElement, _Path: string[] = []) {
		if (Elements > MAX_EMBEDDED_NAV_SIZE) {
			return <></>;
		}

		if (Element.path) {
			++Elements;

			return (
				<li>
					<a
						href={Context.relativeURL(Element.path)}
						class={Class(
							{ current: Property.model.url === Element.path },
							Element.class
						)}>
						{Element.kind && Context.icons[Element.kind]()}
						{Element.text}
					</a>
				</li>
			);
		}

		if (Element.children) {
			++Elements;

			const __Path = [..._Path, Element.text];

			return (
				<details
					class={Class(
						{ "tsd-index-accordion": true },
						Element.class
					)}
					data-key={__Path.join("$")}>
					<summary class="tsd-accordion-summary">
						{Context.icons.chevronDown()}
						<span>{Element.text}</span>
					</summary>

					<div class="tsd-accordion-details">
						<ul class="tsd-nested-navigation">
							{Element.children.map((c) => Link(c, __Path))}
						</ul>
					</div>
				</details>
			);
		}

		return (
			<li>
				<span>{Element.text}</span>
			</li>
		);
	}

	const navEl = Navigation.map((el) => Link(el));

	return (
		<nav class="tsd-navigation">
			<a
				href={Context.urlTo(Property.project)}
				class={Class({
					current: Property.project === Property.model,
				})}>
				{Context.icons[ReflectionKind.Project]()}
				<span>{Name(Property.project)}</span>
			</a>
			<ul
				class="tsd-small-nested-navigation"
				id="tsd-nav-container"
				data-base={Context.relativeURL("./")}>
				{navEl}

				{Elements < MAX_EMBEDDED_NAV_SIZE || <li>Loading...</li>}
			</ul>
		</nav>
	);
}) satisfies Type as Type;

export const { default: Class } = await import("./Class.js");

export const { default: Name } = await import("./Name.js");

export const MAX_EMBEDDED_NAV_SIZE = 20;

import type Type from "../../Interface/TypeDoc/Navigation";

import { JSX, ReflectionKind } from "typedoc";

import type { NavigationElement } from "typedoc";
