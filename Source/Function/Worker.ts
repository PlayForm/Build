interface Environment {
	ASSETS: Fetcher;
}

export default <ExportedHandler<Environment>>{
	fetch: async (request: Request, env: Environment) => {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/functions/")) {
			const File = await import(url.pathname);
			console.log(File);
			return new Response(url.pathname);
		}

		return env.ASSETS.fetch(request);
	},
};
