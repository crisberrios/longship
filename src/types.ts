import { JSX } from "preact/jsx-runtime";
import { TInitialData } from "./store/index.store";

export interface VikeContext<TData = undefined> {
	config: { title?: string; description?: string };
	data: TData;
	Page: () => JSX.Element;
	title?: string;
	description?: string;
	isClientSideNavigation: boolean;
	isHydration: boolean;
	initialStore: Partial<TInitialData>;
}
