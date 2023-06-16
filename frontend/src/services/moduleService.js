import { useApi } from "./useApi";

const prefix = "/module";
export const useGetAll = () => {
  return useApi(prefix, "GET", {}, {});
};

export const useRegister = (data) => {
  return useApi(prefix, "POST", {}, data);
};

export const useGetById = (id) => {
  return useApi(prefix + "/" + id, "GET", {}, {});
};
