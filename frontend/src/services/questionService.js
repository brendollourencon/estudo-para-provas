import { useApi } from "./useApi";

const prefix = "/question";
export const useCreate = (data) => {
  return useApi(prefix, "POST", {}, data);
};

export const useUpdate = (data) => {
  return useApi(prefix, "PUT", {}, data);
};

export const useGetById = (id) => {
  return useApi(prefix + "/" + id, "GET", {}, {});
};

export const useGetAll = (idModule) => {
  return useApi(prefix, "GET", {}, { idModule });
};
