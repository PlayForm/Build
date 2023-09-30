interface Environment {
	ASSETS: Fetcher;
}

export default <ExportedHandler<Environment>>{
	fetch: async (request: Request, env: Environment) => {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/functions/")) {
			// const File = await import(url.pathname);
			console.log(process.cwd());

			console.log((await import("fs/promises")).readFile(url.pathname));

			return new Response(url.pathname);
		}

		return env.ASSETS.fetch(request);
	},
};
