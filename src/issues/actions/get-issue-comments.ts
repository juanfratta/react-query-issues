import { guithubApi } from "../../api/github.api";
import { sleep } from "../../helpers";
import { GithubIssue } from "../interfaces";

export const getIssueComments = async (
  issueNumber: number
): Promise<GithubIssue[]> => {
  await sleep(1500);

  const { data } = await guithubApi.get<GithubIssue[]>(
    `/issues/${issueNumber}/comments`
  );

  console.log(data);
  return data;
};
