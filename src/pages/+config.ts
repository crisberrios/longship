export { config };

import type { Config } from "vike/types";
import { LayoutDefault } from "../layouts/LayoutDefault";
import { HeadDefault } from "../layouts/HeadDefault";
import vikeReact from "vike-react/config";

// Default configs (can be overridden by pages)
const config = {
	// <title>
	title: "My Vike + React App",
	Head: HeadDefault,
	// https://vike.dev/Layout
	Layout: LayoutDefault,
	// https://vike.dev/stream
	stream: true,
	// https://vike.dev/ssr - this line can be removed since `true` is the default
	ssr: true,
	// https://vike.dev/extends
	extends: vikeReact,
	clientRouting: true,
	// https://vike.dev/meta
	meta: {
		// Define new setting 'title' (+reading from +title.ts). It is exported as title in pageContext
		title: {
			env: { server: true, client: true },
		},
		// Define new setting 'description'
		description: {
			env: { server: true, client: true },
		},
		Page: {
			env: { server: true, client: true },
		},
		onBeforeRenderIsomorph: {
			env: { config: true },
			effect({ configDefinedAt, configValue }) {
				if (typeof configValue !== "boolean") {
					throw new Error(`${configDefinedAt} should be a boolean`);
				}
				if (configValue) {
					return {
						meta: {
							onBeforeRender: {
								// We override Vike's default behavior of always loading/executing onBeforeRender() on the server-side.
								// If we set onBeforeRenderIsomorph to true, then onBeforeRender() is loaded/executed in the browser as well, allowing us to fetch data direcly from the browser upon client-side navigation (without involving our Node.js/Edge server at all).
								env: { server: true, client: true },
							},
						},
					};
				}
			},
		},
		dataIsomorph: {
			env: { config: true },
			effect({ configDefinedAt, configValue }) {
				if (typeof configValue !== "boolean") {
					throw new Error(`${configDefinedAt} should be a boolean`);
				}
				if (configValue === true) {
					return {
						meta: {
							data: {
								env: { server: true, client: true },
							},
						},
					};
				}
			},
		},
	},
	hydrationCanBeAborted: true,
	passToClient: ["title", "description", "initialStore", "isHydration"],
} satisfies Config;
