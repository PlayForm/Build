interface Environment {
	ASSETS: Fetcher;
}

export default <ExportedHandler<Environment>>{
	fetch: async (request: Request, env: Environment) => {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/functions/")) {
			return new Response(url.pathname);
		}

		return env.ASSETS.fetch(request);
	},
};

import type {
	ExportedHandler,
	Fetcher,
	Request,
} from "@cloudflare/workers-types";
