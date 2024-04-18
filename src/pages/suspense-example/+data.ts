export { data };

async function data() {
  await sleep(2000);
  const catFact = await (await fetch("https://catfact.ninja/fact")).json();
  return catFact;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
