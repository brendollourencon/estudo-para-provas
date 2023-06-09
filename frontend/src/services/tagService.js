import { useApi } from "./useApi";

const prefix = "/tag";
export const useRegister = (prefix, data) => {
  return useApi(prefix, "POST", {}, data);
};
