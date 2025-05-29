import vike from "vike/plugin";
import react from "@vitejs/plugin-react-swc";
import compression from "vite-plugin-compression2";
import { preserveShebangs } from "rollup-plugin-preserve-shebangs";

const config = {
	plugins: [
		vike(),
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
		preserveShebangs(),
	],
};

export default config;
