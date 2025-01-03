export type ApiRequest = {
  query: Record<string, string | undefined>;
  header: Record<string, string | undefined>;
  path: Record<string, string | undefined>;
  body: Record<string, unknown | undefined>;
};
