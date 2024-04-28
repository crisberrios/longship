import { initialCatFacts } from "./catFacts.initial";
import { createStore } from "./store";

const initialData = { catFacts: initialCatFacts, isInitialized: false };

export type TInitialData = typeof initialData;

export default createStore(initialData);
