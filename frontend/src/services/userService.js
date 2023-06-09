import { useApi } from "./useApi";

const prefix = "/user";
export const useRegister = (prefix, data) => {
  return useApi(prefix, "POST", {}, data);
};
