import { LoggerLevel } from "./log";

declare namespace NodeJS {
  interface ProcessEnv {
    readonly STAGE?: "local" | "dev" | "prod";
    readonly FRONT_BASE_URL: string;
    readonly LOGGER_LEVEL: LoggerLevel;
  }
}
