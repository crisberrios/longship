import vike from "vike/plugin";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression2";

const config = {
	plugins: [
		compression({ algorithm: "brotliCompress" }),
		react(),
		vike({
			disableAutoFullBuild: true,
		}),
		{
			name: "server:entry",
			config(_: unknown, env: { isSsrBuild: boolean }) {
				if (!env.isSsrBuild) return;
				return {
					build: {
						rollupOptions: {
							input: {
								"entry-server": "./src/server/entry-server.ts",
							},
						},
					},
				};
			},
		},
	],
};

export default config;
