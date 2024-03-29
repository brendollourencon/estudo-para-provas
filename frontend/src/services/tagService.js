import { useApi } from "./useApi";

const prefix = "/tag";
export const useCreate = (data) => {
  return useApi(prefix, "POST", {}, data);
};

export const useUpdate = (data) => {
  return useApi(prefix, "PUT", {}, data);
};

export const useGetAll = () => {
  return useApi(prefix, "GET", {}, {});
};

export const useGetById = (id) => {
  return useApi(prefix + "/" + id, "GET", {}, {});
};

export const useDelete = (id) => {
  return useApi(prefix + "/" + id, "DELETE", {}, {});
};