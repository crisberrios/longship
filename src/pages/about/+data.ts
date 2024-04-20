export { data };

async function data() {
	const catFact = await fetch("https://catfact.ninja/fact").then((res) =>
		res.json(),
	);
	return catFact;
}
