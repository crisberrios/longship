import { DataLoader } from "../../dataLoading/dataLoader";
import { TIsomorphicData } from "../../dataLoading/isomorphicData";
import store from "../../store/index.store";
import { hydrateStore } from "../../store/store";
import { VikeContext } from "../../types";
import { ICatFacts } from "./+data";

export { onBeforeRender };

function onBeforeRender(pageContext: VikeContext<TIsomorphicData<ICatFacts>>) {
	if (pageContext.isHydration) {
		hydrateStore(store, pageContext.initialStore);
		return;
	}
	const { data } = pageContext;
	if (data instanceof DataLoader) {
		data.data().then((catFact: ICatFacts) => {
			store.catFacts.fact.value = catFact.fact;
		});
	} else {
		store.catFacts.fact.value = data.fact;
	}
	return {
		pageContext: {
			initialStore: store,
		},
	};
}
