export default Page;
import { store } from "../../store/store";

function Page() {
	return store.fact$.value !== "" ? (
		<>
			<h1>About</h1>
			<p>Demo using Vike.</p>
			<p>
				<span>Cat Fact:</span> <span>{store.fact$}</span>
				<span style={{ fontWeight: "bold" }}>This data comes from an API</span>
			</p>
		</>
	) : (
		<div>Loading...</div>
	);
}
