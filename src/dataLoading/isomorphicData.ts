import { VikeContext } from "../types";
import { TDataLoader } from "./dataLoader";

export type TIsomorphicData<T extends {}> =
	| TDataLoader<T>
	| (T & { isLoader?: boolean });

export const isomorphicData: <T>(
	loader: () => TDataLoader<T>,
) => (pageContext: VikeContext) => Promise<TDataLoader<T> | T> = (loader) => {
	return async (pageContext: VikeContext) => {
		if (pageContext.isClientSideNavigation) {
			return loader();
		}
		const result = await loader().data();
		return result;
	};
};
