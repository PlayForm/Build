interface Environment {
	ASSETS: Fetcher;
}

export default <ExportedHandler<Environment>>{
	fetch: async (request: Request, env: Environment) => {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/functions/")) {
			return await env.ASSETS.fetch(request);

			// console.log(
			// 	readFile(url.pathname, {
			// 		encoding: "utf-8",
			// 	})
			// );

			return new Response(url.pathname, {
				headers: { "Content-Type": "text/html" },
			});
		}

		return env.ASSETS.fetch(request);
	},
};
