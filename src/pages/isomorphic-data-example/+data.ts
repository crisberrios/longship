import { DataLoader } from "../../dataLoading/dataLoader";
import { CatFact } from "../../store/catFacts.initial";
import { VikeContext } from "../../types";

export interface IsomorphicExampleData {
	catFacts: DataLoader<CatFact> | CatFact;
	catName: DataLoader<string> | string;
}

async function data(pageContext: VikeContext): Promise<IsomorphicExampleData> {
	let baseUrl = "";

	if (!pageContext.isClientSideNavigation) {
		baseUrl = "http://localhost:3000";
	}

	const catFactPromise = fetch("https://catfact.ninja/fact").then(
		(res: Response) => res.json(),
	);

	const catNamePromise = fetch(`${baseUrl}/api/cat-name`).then(
		(res: Response) => res.text(),
	);

	return {
		catFacts: pageContext.isClientSideNavigation
			? new DataLoader(catFactPromise)
			: await catFactPromise,
		catName: pageContext.isClientSideNavigation
			? new DataLoader(catNamePromise)
			: await catNamePromise,
	};
}

export { data };
