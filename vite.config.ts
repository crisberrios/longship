import vike from "vike/plugin";
import react from "@vitejs/plugin-react-swc";
import compression from "vite-plugin-compression2";

const config = {
	plugins: [
		vike({
			disableAutoFullBuild: true,
			prerender: true,
		}),
		compression({ algorithm: "brotliCompress" }),
		react(),
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
