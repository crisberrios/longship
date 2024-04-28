import React from "react";
import store, { TInitialData } from "../../store/index.store";
import { usePageContext } from "vike-react/usePageContext";
import { hydrateStore } from "../../store/store";
import { PageContextClient } from "vike/types";

export default Page;

function Page() {
	const pageContext = usePageContext() as PageContextClient & {
		initialStore: TInitialData;
	};

	if (pageContext.isHydration && store.isInitialized.value === false) {
		hydrateStore(store, pageContext.initialStore);
	}

	return store.catFacts.fact.value !== "" ? (
		<>
			<h1>Isomorphic data fetch</h1>
			<p>
				This page highlights the use of isomorphic, async data fetch. Data will
				be pre-fetched and pre-rendered on initial load, but clientside
				navigation will load the data in an async fashion
			</p>
			<h2>Cat Fact</h2>
			<p>{store.catFacts.fact.value}</p>
			<h2>Random Cat Name</h2>
			<p>{store.catFacts.catName.value}</p>
		</>
	) : (
		<div>Loading...</div>
	);
}
