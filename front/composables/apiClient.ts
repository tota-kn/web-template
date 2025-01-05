import type { paths } from "~/types/apiClient";

type IRequest = {
  query?: Record<string, string | number>;
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
};

export class ApiClient<Request extends IRequest, Response> {
  baseUrl: string;

  private constructor() {
    this.baseUrl = "http://localhost:3000/api";
  }

  fetch = (path: string, method: string, request: Request) => {
    return useFetch<Response>(
      `${this.baseUrl}/${path}`, {
        ...request,
        method: method,
      },
    );
  };

  static useTestGet() {
    const r = useFetch<paths["/api/test"]["get"]["responses"]["200"]["content"]["application/json"], Error>(
      "/api/test",
      {
        method: "GET",
        query: { n: 1 },
      },
    );
    console.log(r.data.value?.message);

    const client = new ApiClient<
      paths["/api/test"]["get"]["parameters"],
      paths["/api/test"]["get"]["responses"]["200"]["content"]["application/json"]
    >();
    const rr = client.fetch("/test", "GET", { query: { n: 1 } });
    console.log(rr.data.value);
  }
}
