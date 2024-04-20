// onRenderClient.spec.tsx
import { render } from "@testing-library/preact";
import onRenderClient from "./+onRenderClient";
import { PageContextClient, Url } from "vike/types";
describe("onRenderClient", () => {
	it("renders without crashing", () => {
		const samplePageContext: PageContextClient = {
			url: "/some/url",
			routeParams: {},
			isHydration: false,
			Page: () => <div>Sample Page</div>,
			pageExports: {},
			config: {},
			configEntries: {},
			exports: {},
			exportsAll: {},
			abortReason: null, // Add a value for abortReason
			data: {}, // Add a value for data
			isBackwardNavigation: false,
			urlOriginal: "/some/url",
			urlParsed: { pathname: "/some/url", search: {}, hash: "" } as Url,
			urlPathname: "/some/url",
		};

		render(onRenderClient(samplePageContext));
		// Add more assertions here based on your component's behavior
	});
});
