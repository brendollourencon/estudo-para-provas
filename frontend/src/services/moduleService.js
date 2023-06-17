import { useApi } from "./useApi";

const prefix = "/module";
export const useGetAll = () => {
  return useApi(prefix, "GET", {}, {});
};

export const useCreate = (data) => {
  return useApi(prefix, "POST", {}, data);
};

export const useUpdate = (data) => {
  return useApi(prefix, "PUT", {}, data);
};

export const useGetById = (id) => {
  return useApi(prefix + "/" + id, "GET", {}, {});
};
