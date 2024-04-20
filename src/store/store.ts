import { Signal, signal } from "@preact/signals";

function createStore(initialState: { fact: string }): {
	store: { fact$: Signal };
	hydrateStore: (state: { fact: string }) => void;
} {
	const fact$ = signal(initialState.fact);
	const store = {
		fact$,
	};
	const hydrateStore = (state: { fact: string }) => {
		fact$.value = state.fact;
	};
	return { store, hydrateStore };
}

const { store, hydrateStore } = createStore({ fact: "" });

export { createStore, store, hydrateStore };
