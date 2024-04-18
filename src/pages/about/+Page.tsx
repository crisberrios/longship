export default Page;

import { PageContext } from "vike/types";
import { usePageContext } from "../../renderer/usePageContext";
import "./code.css";

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

type WithData<T, R> = T & { data: R };
