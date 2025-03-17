import { guithubApi } from "../../api/github.api";
import { sleep } from "../../helpers";
import { GithubIssue } from "../interfaces";

export const getIssues = async () => {
    await sleep(1500);
    
      const { data } = await guithubApi.get<GithubIssue[]>("/issues");
    
      return data;
};