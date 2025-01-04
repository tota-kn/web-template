import type { paths } from "~/types/apiClient";

// type FetchOptions = {
//   method: "GET" | "POST" | "PUT" | "DELETE";
//   headers?: Record<string, string>;
//   query?: Record<string, number | string | boolean>;
//   body?: Record<string, unknown>;
// };

export class ApiClient {
  baseUrl: string;
  data: Ref<paths["/api/test"]["get"]["responses"]["200"]["content"]["application/json"] | null>;
  status: Ref<string>;
  error: Ref<Error | null>;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.data = ref(null);
    this.status = ref("yet");
    this.error = ref(null);
  }

  testGet(request: paths["/api/test"]["get"]["parameters"]) {
    return useFetch<paths["/api/test"]["get"]["responses"]["200"]["content"]["application/json"], Error>(
      `${this.baseUrl}/test`,
      {
        method: "GET",
        query: request.query,
      },
    );
  }
}
