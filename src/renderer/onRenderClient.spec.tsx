// onRenderClient.spec.tsx
import { render } from "@testing-library/preact";
import onRenderClient from "./+onRenderClient";
import { PageContextClient, Url } from "vike/types";
import { VikeContext } from "../types";
describe("onRenderClient", () => {
	it("renders without crashing", () => {
		const samplePageContext: VikeContext = {
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
			data: undefined,
			isBackwardNavigation: false,
			urlOriginal: "/some/url",
			urlParsed: { pathname: "/some/url", search: {}, hash: "" } as Url,
			urlPathname: "/some/url",
			initialStore: {},
			isClientSideNavigation: false,
		};

		render(onRenderClient(samplePageContext));
		// Add more assertions here based on your component's behavior
	});
});
