import { Signal, signal } from "@preact/signals";

function createStore<T extends { [k: string]: CanSerialize }>(
	initialState: T,
): Signalize<T> {
	const store = {} as { [key: string]: unknown }; // Change the type of store
	for (const key in initialState) {
		const stateValue = initialState[key];
		if (isSerializableObject(stateValue)) {
			store[key as string] = createStore(stateValue);
		} else {
			store[`${key}$`] = signal(initialState[key]);
		}
	}
	return store as Signalize<T>;
}

const store = createStore({
	fact: "",
	inner: { counter: 0, catNames: ["A", "B"] },
});

export { createStore, store, hydrateStore };

type Primitive = string | number | boolean | null;
type CanSerialize = Primitive | Primitive[] | SerializableObject;
type SerializableObject = { [k: string]: CanSerialize };

type Signalize<T extends SerializableObject> = {
	[P in keyof T as `${P & string}${T[P] extends SerializableObject
		? ``
		: `$`}`]: T[P] extends Primitive | Primitive[]
		? Signal<T[P]>
		: T[P] extends SerializableObject
			? Signalize<T[P]>
			: never;
};

function hydrateStore<T extends SerializableObject>(
	store: Signalize<T>,
	state: T,
) {
	for (const key in state) {
		const stateValue = state[key];
		if (isSerializableObject(stateValue)) {
			const storeValue = (store as Record<string, SerializableObject>)[
				key
			] as Signalize<T[Extract<keyof T, string>] & SerializableObject>; // Add type assertion to ensure correct type
			hydrateStore(storeValue, stateValue);
		} else {
			(store as Record<string, SerializableObject>)[`${key}$`].value =
				state[key];
		}
	}
}

function isSerializableObject(
	value: unknown | Signal<unknown>,
): value is SerializableObject {
	return (
		(value as Signal).brand === undefined &&
		typeof value === "object" &&
		value !== null &&
		!Array.isArray(value)
	);
}
