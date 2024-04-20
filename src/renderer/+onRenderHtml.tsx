// https://vike.dev/onRenderHtml
export default onRenderHtml;

import renderToString from "preact-render-to-string";
import { PageShell } from "./PageShell";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import logoUrl from "./logo.svg";
import { getPageTitle } from "./getPageTitle";
import { getPageDescription } from "./getPageDescription";
import { VikeContext } from "../types";

async function onRenderHtml(pageContext: VikeContext) {
	const { Page } = pageContext;
	const pageHtml = renderToString(
		<PageShell pageContext={pageContext}>
			<Page />
		</PageShell>,
	);

	// See https://vike.dev/head
	const title = getPageTitle(pageContext);
	const desc = getPageDescription(pageContext);
	const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        ${dangerouslySkipEscape(pageHtml)}
      </body>
    </html>`;

	return {
		documentHtml,
		pageContext: {
			// We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
		},
	};
}
