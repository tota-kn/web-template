import type { paths } from "~/types/apiClient";

type IRequest = {
  query?: Record<string, string | number>;
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
};

type IResponse = Record<string, unknown> | never;

export class ApiClient<Request extends IRequest, Response extends IResponse> {
  baseUrl: string;
  data: Ref<Response | undefined>;
  error: Ref<Error | undefined>;
  status: Ref<"idle" | "pending" | "error" | "success">;

  private constructor() {
    this.baseUrl = "http://localhost:3000";
    this.data = ref(undefined);
    this.error = ref(undefined);
    this.status = ref("idle");
  }

  async fetch(path: string, method: "get" | "post", request: Request, clear: boolean = false): Promise<void> {
    if (clear) {
      this.data.value = undefined;
      this.error.value = undefined;
    }

    try {
      this.status.value = "pending";
      this.data.value = await $fetch<Response>(`${this.baseUrl}/${path}`, {
        method: method,
        ...request,
      });
      this.error.value = undefined;
      this.status.value = "success";
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        this.error.value = error;
      }
      this.data.value = undefined;
      this.status.value = "error";
    }
  }

  static useTestGet() {
    return new ApiClient<
      paths["/api/test"]["get"]["parameters"],
      paths["/api/test"]["get"]["responses"]["200"]["content"]["application/json"]
    >();
  }
}
