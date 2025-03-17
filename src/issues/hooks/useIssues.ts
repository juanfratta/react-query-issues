import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/get-issues";

export const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: getIssues,
  });
  //
  return { issuesQuery };
};
