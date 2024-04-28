export class DataLoader<T> {
	data: () => Promise<T>;
	__brand = "DataLoader" as const;

	constructor(dataPromise: Promise<T>) {
		this.data = () => dataPromise;
	}
}

export type TDataLoader<T> = InstanceType<typeof DataLoader<T>>;
