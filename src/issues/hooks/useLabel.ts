import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";
import { GithubLabel } from "../interfaces";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hour duration for cache
      placeholderData: [ // info estática hasta que se realiza la petición http
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "Component: Component API",
        color: "ffffff",
        default: false,
      } satisfies GithubLabel,
      {
        id: 69105383,
        node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        name: "Browser: IE",
        color: "c7def8",
        default: false,
      } satisfies GithubLabel,
    ], 
    /* initialData: [ // funciona similar al placeholderData si no tenemos staleTime, sino la data se va a considerar como fresca hasta que pase ese tiempo 
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "Component: Component API",
        color: "ffffff",
        default: false,
      } satisfies GithubLabel,
      {
        id: 69105383,
        node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        name: "Browser: IE",
        color: "c7def8",
        default: false,
      } satisfies GithubLabel,
    ], */
  });
  return { labelsQuery };
};
