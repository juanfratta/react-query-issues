import { sleep } from "../../helpers";
import { guithubApi } from "../../api/github.api";
import { GithubLabel } from "../interfaces";

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(1500);

  const { data } = await guithubApi.get<GithubLabel[]>("/labels");

  return data;
};
