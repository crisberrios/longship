import { DataLoader } from "../../dataLoading/dataLoader";
import { TIsomorphicData } from "../../dataLoading/isomorphicData";
import { store } from "../../store/store";
import { VikeContext } from "../../types";
import { ICatFacts } from "./+data";

export { onBeforeRender };
function onBeforeRender(pageContext: VikeContext<TIsomorphicData<ICatFacts>>) {
	const { data } = pageContext;
	if (data instanceof DataLoader) {
		data.data().then((catFact: ICatFacts) => {
			store.fact$.value = catFact.fact;
		});
	} else {
		store.fact$.value = data.fact;
	}
	return {
		pageContext: {
			initialStore: { fact: store.fact$.value },
		},
	};
}
