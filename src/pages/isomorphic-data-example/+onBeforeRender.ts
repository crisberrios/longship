import { DataLoader, TDataLoader } from "../../dataLoading/dataLoader";
import store from "../../store/index.store";
import { hydrateStore } from "../../store/store";
import { VikeContext } from "../../types";
import { IsomorphicExampleData } from "./+data";

export { onBeforeRender };

function isDataLoader<T>(value: TDataLoader<T> | T): value is TDataLoader<T> {
	return value instanceof DataLoader;
}

async function onBeforeRender(pageContext: VikeContext<IsomorphicExampleData>) {
	const { data } = pageContext;
	store.isInitialized.value = true;
	isDataLoader(data.catFacts) &&
		data.catFacts.data().then((catFact) => {
			store.catFacts.fact.value = catFact.fact;
		});
	isDataLoader(data.catName) &&
		data.catName.data().then((catName) => {
			store.catFacts.catName.value = catName;
		});

	!isDataLoader(data.catFacts) && hydrateStore(store.catFacts, data.catFacts);
	!isDataLoader(data.catName) && (store.catFacts.catName.value = data.catName);

	return {
		pageContext: {
			initialStore: store,
		},
	};
}
