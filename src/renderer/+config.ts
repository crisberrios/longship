import type { Config } from "vike/types";

// https://vike.dev/config
export default {
  // https://vike.dev/clientRouting
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
  },
  hydrationCanBeAborted: true,
  passToClient: ["renderSource", "title", "description"],
} satisfies Config;
