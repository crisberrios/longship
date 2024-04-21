export default Page;
import { store } from "../../store/store";

function Page() {
	return store.fact$.value !== "" ? (
		<>
			<h1>Isomorphic data fetch</h1>
			<p>
				This page highlights the use of isomorphic, async data fetch. Data will
				be pre-fetched and pre-rendered on initial load, but clientside
				navigation will load the data in an async fashion
			</p>
			<h2>Cat Fact</h2>
			<p>{store.fact$}</p>
		</>
	) : (
		<div>Loading...</div>
	);
}