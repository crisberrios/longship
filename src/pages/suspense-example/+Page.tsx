export default Page;
import { usePageContext } from "../../renderer/usePageContext";
import { SuspenseExampleData } from "./+data";
import { fact$ } from "../../store/store";
import { VikeContext, WithData } from "../../types";

function Page() {
	const { data } = usePageContext() as WithData<
		VikeContext,
		SuspenseExampleData
	>;
	if (typeof data === "function") {
		data().then((d) => (fact$.value = d.fact));
	} else fact$.value = data.fact as string;

	return fact$.value !== "" ? (
		<>
			<h1>About</h1>
			<p>Demo using Vike.</p>
			<p>
				{fact$}
				<span style={{ fontWeight: "bold" }}>This data comes from an API</span>
			</p>
		</>
	) : (
		<div>Loading...</div>
	);
}
