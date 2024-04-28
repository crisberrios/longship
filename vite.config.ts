import vike from "vike/plugin";
import react from "@vitejs/plugin-react";

const config = {
	plugins: [
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
						target: "node18",
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
