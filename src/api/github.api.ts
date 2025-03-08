import axios from "axios";

export const guithubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    // TODO
  },
});
