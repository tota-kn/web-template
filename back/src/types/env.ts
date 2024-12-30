declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        Stage?: "local" | "dev" | "prod";
      }
    }
  }
}
