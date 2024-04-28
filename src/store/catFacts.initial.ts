import { createStore } from "./store";

const initialCatFacts = {
	fact: "",
	length: 0,
};

export type CatFact = {
	fact: string;
	length: number;
};

export { initialCatFacts };
