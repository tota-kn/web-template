import type { paths } from "~/types/apiClient";

type fetchOptions = {
  method: "get" | "post" | "put" | "delete";
  headers?: Record<string, string>;
  query?: Record<string, number | string | boolean>;
  body?: Record<string, unknown>;
};

class ApiClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetch<Response, Error>(path: string, options: fetchOptions) {
    const { data, error, status } = await useFetch(`${this.baseUrl}/${path}`, options);
    return {
      data: data.value as Response,
      error: error.value as Error,
      status: status.value as string,
    };
  }

  async testGet(request: paths["/api/test"]["get"]["parameters"]) {
    return await this.fetch<paths["/api/test"]["get"]["responses"]["200"]["content"]["application/json"], Error>("test", {
      method: "get",
      query: request.query,
    });
  }
}

export const apiClient = new ApiClient("http://localhost:3000/api");
