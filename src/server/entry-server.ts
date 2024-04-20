#!/usr/bin/env node

import { createServer } from "node:http";
import { join } from "pathe";
import {
	createApp,
	createRouter,
	eventHandler,
	fromNodeMiddleware,
	setResponseHeaders,
	setResponseStatus,
	toNodeListener,
} from "h3";
import { renderPage } from "vike/server";
import sirv from "sirv";

const isProduction = process.env.NODE_ENV === "production"; //Note that there's no "NODE_ENV" or others by default, also it can run somewhere else like bun or cloudflare
const root = import.meta.dirname;
const clientPath = join(root, "../client");

startServer();

async function startServer() {
	const app = createApp();
	if (isProduction) {
		app.use(
			fromNodeMiddleware(
				sirv(clientPath, {
					gzip: true,
				}),
			),
		);
	} else {
		// Instantiate Vite's development server and integrate its middleware to our server.
		// ⚠️ We should instantiate it *only* in development. (It isn't needed in production
		// and would unnecessarily bloat our server in production.)
		const vite = await import("vite");
		const viteDevMiddleware = (
			await vite.createServer({
				root: join(root, "../../"),
				server: { middlewareMode: true },
			})
		).middlewares;
		app.use(fromNodeMiddleware(viteDevMiddleware));
	}

	const router = createRouter();

	router.use(
		"/**",
		eventHandler(async (event) => {
			const pageContextInit = {
				urlOriginal: event.node.req.originalUrl || event.node.req.url!,
			};
			const pageContext = await renderPage(pageContextInit);
			const response = pageContext.httpResponse;

			setResponseStatus(event, response?.statusCode);
			setResponseHeaders(event, Object.fromEntries(response?.headers ?? []));

			return response?.getBody();
		}),
	);

	app.use(router);

	const server = createServer(toNodeListener(app)).listen(
		process.env.PORT || 3000,
	);

	server.on("listening", () => {
		console.log(
			`Server listening on http://localhost:${process.env.PORT || 3000}`,
		);
	});
}
