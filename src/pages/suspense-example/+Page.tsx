export default Wrapper;

import { PageContext } from "vike/types";
import { usePageContext } from "../../renderer/usePageContext";
import { Suspense } from "preact/compat";

function Page() {
  const { renderSource, data } = usePageContext() as WithData<
    PageContext,
    { fact: string }
  >;

  return (
    <>
      <h1>About</h1>
      <p>Demo using Vike.</p>
      <p>
        Render Source: {renderSource ?? "client"}{" "}
        <span style={{ fontWeight: "bold" }}>
          This data comes from entry-server.ts {">"} pageContextInit
        </span>
      </p>
      <p>
        {data.fact}{" "}
        <span style={{ fontWeight: "bold" }}>This data comes from an API</span>
      </p>
    </>
  );
}

function Wrapper() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Page />
    </Suspense>
  );
}

type WithData<T, R> = T & { data: R };
