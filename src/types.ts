import { JSX } from "preact/jsx-runtime";

export interface VikeContext<TData = undefined> {
	config: { title?: string; description?: string };
	data: TData;
	Page: () => JSX.Element;
	title?: string;
	description?: string;
	isClientSideNavigation: boolean;
	isHydration: boolean;
	initialStore: { fact: string };
}
