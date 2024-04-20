import { JSX } from "preact/jsx-runtime";

export type WithData<T, R> = T & { data: R };

export interface VikeContext {
	config: { title?: string; description?: string };
	data?: { [key: string]: unknown; title?: string; description?: string };
	Page: () => JSX.Element;
	title?: string;
	description?: string;
	isClientSideNavigation: boolean;
}
