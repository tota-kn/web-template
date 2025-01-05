import type { paths } from "~/types/apiClient";

type IRequest = {
  query?: Record<string, string | number>;
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
};

const baseUrl = "http://localhost:3000/api";
const fetch = <Request extends IRequest, Response>(path: string, method: string, request: Request) => {
  return useFetch<Response>(
    `${baseUrl}/${path}`, {
      ...request,
      method: method,
    },
  );
};

export const fetchTestGet = (request: paths["/api/test"]["get"]["parameters"]) => {
  return fetch<
    paths["/api/test"]["get"]["parameters"],
    paths["/api/test"]["get"]["responses"]["200"]["content"]["application/json"]
  >("test", "GET", request);
};
