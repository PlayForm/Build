/**
 * @module TypeDoc
 *
 */
export default ((...[Context, Template, Property]: Parameters<Type>) => (
	<html class="default" lang={Context.options.getValue("htmlLang")}>
		<head>
			<meta charSet="utf-8" />

			{Context.hook("head.begin")}

			<meta http-equiv="x-ua-compatible" content="IE=edge" />

			<title>
				{Property.model.isProject()
					? Name(Property.model)
					: `${Name(Property.model)} | ${Name(Property.project)}`}
			</title>

			<meta
				name="description"
				content={`Documentation for ${Property.project.name}`}
			/>

			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>

			<link
				rel="stylesheet"
				href={Context.relativeURL("assets/style.css", true)}
			/>

			<link
				rel="stylesheet"
				href={Context.relativeURL("assets/highlight.css", true)}
			/>

			{Context.options.getValue("customCss") && (
				<link
					rel="stylesheet"
					href={Context.relativeURL("assets/custom.css", true)}
				/>
			)}

			<script defer src={Context.relativeURL("assets/main.js", true)} />

			<script
				async
				src={Context.relativeURL("assets/search.js", true)}
				id="tsd-search-script"
			/>

			<script
				async
				src={Context.relativeURL("assets/navigation.js", true)}
				id="tsd-nav-script"
			/>

			{Context.hook("head.end")}
		</head>
		<body>
			{Context.hook("body.begin")}

			<script>
				<Raw html='document.documentElement.dataset.theme = localStorage.getItem("tsd-theme") || "os"' />
			</script>

			{Context.toolbar(Property)}

			<div class="container-main container">
				<div class="col-content">
					{Context.hook("content.begin")}

					{Context.header(Property)}

					{Template(Property)}

					{Context.hook("content.end")}
				</div>
				<div class="col-sidebar">
					<div class="page-menu">
						{Context.hook("pageSidebar.begin")}

						{Context.pageSidebar(Property)}

						{Context.hook("pageSidebar.end")}
					</div>
					<div class="site-menu">
						{Context.hook("sidebar.begin")}

						{Context.sidebar(Property)}

						{Context.hook("sidebar.end")}
					</div>
				</div>
			</div>

			{Context.footer()}

			<div class="overlay" />

			{Context.analytics()}

			{Context.iconsCache()}

			{Context.hook("body.end")}
		</body>
	</html>
)) satisfies Type as Type;

import type Type from "../../Interface/TypeDoc/Layout.js";

import { JSX } from "typedoc";

export const { default: Name } = await import("./Name.js");

export const { default: Raw } = await import("./Raw.js");
