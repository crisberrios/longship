import { initialCatFacts } from "./catFacts.initial";
import { createStore } from "./store";

const initialData = { catFacts: initialCatFacts };

export type TInitialData = typeof initialData;

export default createStore(initialData);
