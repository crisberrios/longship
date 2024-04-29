export default Page;

import { PageContext } from "vike/types";

import "./code.css";
import { usePageContext } from "vike-react/usePageContext";

function Page() {
	const { data, isClientSideNavigation } = usePageContext() as WithData<
		PageContext,
		{ fact: string }
	>;

	return (
		<>
			<h1>About</h1>
			<p>Demo using Vike.</p>
			<p>{isClientSideNavigation ? `Client` : `Server`} navigation</p>
			<p>
				{data.fact}{" "}
				<span style={{ fontWeight: "bold" }}>This data comes from an API</span>
			</p>
		</>
	);
}

type WithData<T, R> = T & { data: R };
