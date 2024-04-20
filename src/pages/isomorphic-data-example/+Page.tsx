export default Page;
import { fact$ } from "../../store/store";

function Page() {
  return fact$.value !== "" ? (
    <>
      <h1>About</h1>
      <p>Demo using Vike.</p>
      <p>
        <span>Cat Fact:</span> <span>{fact$}</span>
        <span style={{ fontWeight: "bold" }}>This data comes from an API</span>
      </p>
    </>
  ) : (
    <div>Loading...</div>
  );
}
