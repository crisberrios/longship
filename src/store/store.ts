import { Signal, signal } from "@preact/signals";

export { createStore, hydrateStore };
export type SignalTypes = Primitive | Primitive[] | unknown[];

type Primitive = string | number | boolean | null;
type IsObject = Record<string, unknown>;
export type TrustedObject = Record<string, unknown>;
type Signalize<T extends IsObject> = {
	[P in keyof T]: T[P] extends SignalTypes
		? Signal<T[P]>
		: T[P] extends IsObject | TrustedObject
			? Signalize<T[P]>
			: never;
};

function createStore<T extends IsObject>(initialState: T): Signalize<T> {
	const store = {} as IsObject;
	for (const key in initialState) {
		const stateValue = initialState[key];
		if (isSerializableObject(stateValue)) {
			store[key as string] = createStore(stateValue);
		} else {
			store[key] = signal(initialState[key]);
		}
	}
	return store as Signalize<T>;
}

function hydrateStore<T extends TrustedObject>(store: Signalize<T>, state: T) {
	for (const key in state) {
		const stateValue = state[key];
		if (isSerializableObject(stateValue)) {
			const storeValue = store[key] as Signalize<
				T[Extract<keyof T, string>] & IsObject
			>;
			hydrateStore(storeValue, stateValue);
		} else {
			if (store[key]?.value === undefined) {
				continue;
			}
			store[key].value = state[key];
		}
	}
}

function isSerializableObject(
	value: unknown | Signal<unknown>,
): value is IsObject {
	return (
		(value as Signal).brand === undefined &&
		typeof value === "object" &&
		value !== null &&
		!Array.isArray(value)
	);
}
