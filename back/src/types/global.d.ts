declare namespace NodeJS {
  interface ProcessEnv {
    Stage?: "local" | "dev" | "prod";
    FRONT_BASE_URL: string; 
  }
}
  
