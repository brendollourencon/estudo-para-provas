import { useApi } from "./useApi";

const prefix = "/auth";
export const useLogin = (data) => {
  return useApi(prefix + '/login', "POST", {}, data);
};
