// `usePageContext` allows us to access `pageContext` in any React component.
// More infos: https://vike.dev/pageContext-anywhere

import { ComponentChildren, createContext } from "preact";
import { useContext } from "preact/hooks";
import { VikeContext } from "../types";

export { PageContextProvider };
export { usePageContext };

const Context = createContext<VikeContext>(undefined as unknown as VikeContext);

const PageContextProvider = function ({
	pageContext,
	children,
}: {
	pageContext: VikeContext;
	children: ComponentChildren | null;
}) {
	return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

function usePageContext() {
	const pageContext = useContext(Context);
	return pageContext;
}
