// https://vike.dev/onRenderClient
export default onRenderClient;

import { hydrate, render } from "preact";
import { PageShell } from "./PageShell";
import { OnRenderClientAsync } from "vike/types";
import { getPageTitle } from "./getPageTitle";
import { getPageDescription } from "./getPageDescription";
import { VikeContext } from "../types";
import { hydrateStore } from "../store/store";

async function onRenderClient(
	pageContext: VikeContext,
): ReturnType<OnRenderClientAsync> {
	const { Page } = pageContext;
	if (pageContext.isHydration) {
		hydrateStore(pageContext.initialStore);
	}
	const page = (
		<PageShell pageContext={pageContext}>
			<Page />
		</PageShell>
	);
	const container = document.querySelector("body") as HTMLBodyElement;

	if (pageContext.isHydration) {
		hydrate(page, container);
	} else {
		render(page, container);
	}
	document.title = getPageTitle(pageContext);
	document
		.querySelector("meta[name=description]")
		?.setAttribute("content", getPageDescription(pageContext));
}
