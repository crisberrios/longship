import { isomorphicData } from "../../dataLoading/isomorphicData";
import { DataLoader } from "../../dataLoading/dataLoader";

export interface ICatFacts {
  fact: string;
  length: number;
}

function load(): DataLoader<ICatFacts> {
  const catFactPromise = fetch("https://catfact.ninja/fact")
    .then((res: Response) => sleep(1000, res))
    .then((res: Response) => res.json());

  return new DataLoader(catFactPromise);
}

function sleep(ms: number, res: Response) {
  return new Promise<Response>((resolve) => setTimeout(() => resolve(res), ms));
}

const data = isomorphicData(load);

export { data };
