export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/functions/")) {
			// TODO: Add your custom /functions/* logic here.
			console.log(request);
			console.log(env);
			return new Response("Ok");
		}

		// Otherwise, serve the static assets.
		// Without this, the Worker will error and no assets will be served.
		return env.ASSETS.fetch(request);
	},
};
