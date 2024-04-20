import { PageContext } from "vike/types";

export { data };

export type SuspenseExampleData =
	| { fact: string }
	| (() => PromiseLike<{ fact: string }>);

async function data(pageContext: PageContext): Promise<SuspenseExampleData> {
	const catFactPromise = fetch("https://catfact.ninja/fact")
		.then((res: Response) => sleep(1000, res))
		.then((res: Response) => res.json());

	if (pageContext.isClientSideNavigation) {
		return () => catFactPromise;
	}

	return catFactPromise;
}

function sleep(ms: number, res: Response) {
	return new Promise<Response>((resolve) => setTimeout(() => resolve(res), ms));
}
