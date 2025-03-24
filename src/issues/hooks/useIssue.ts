import { useQuery } from "@tanstack/react-query";
import { getIssue, getIssueComments } from "../actions";

export const useIssue = (issueNumber: number) => {
  //recuperamos el issue
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60,
  });

  //recuperamos los comments del issue en paralelo
  /* const commentsQuery = useQuery({
    queryKey: ["issues", issueNumber, "comments"],
    queryFn: () => getIssueComments(issueNumber),
    staleTime: 1000 * 60,
  }); */


  // recuperamos los comments del issue solo si el issueQuery.data es true
  const commentsQuery = useQuery({
    queryKey: ["issues", issueQuery.data?.number, "comments"],
    queryFn: () => getIssueComments(issueQuery.data!.number),
    staleTime: 1000 * 60,
    enabled: !!issueQuery.data, //solo se ejecuta si issueQuery.data es true
  });

  return { issueQuery, commentsQuery };
};
