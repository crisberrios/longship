export { data };

async function data() {
  const catFact = await (await fetch("https://catfact.ninja/fact")).json();
  return catFact;
}
