import { DataLoader } from "../../dataLoading/dataLoader";
import { TIsomorphicData } from "../../dataLoading/isomorphicData";
import { fact$ } from "../../store/store";
import { VikeContext } from "../../types";
import { ICatFacts } from "./+data";

export { onBeforeRender };
function onBeforeRender(pageContext: VikeContext<TIsomorphicData<ICatFacts>>) {
  const { data } = pageContext;
  if (data instanceof DataLoader) {
    data.data().then((catFact: ICatFacts) => {
      fact$.value = catFact.fact;
    });
  } else {
    fact$.value = data.fact;
  }
}
