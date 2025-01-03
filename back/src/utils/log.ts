import * as winston from "winston";

class Logger {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: process.env.LOGGER_LEVEL || "info",
      format: winston.format.combine(
        winston.format.errors({ stack: true }), // エラースタックを表示
        winston.format.timestamp({ format: "YYYY-MM-DDTHH:mm:ss" }), // タイムスタンプフォーマット
        winston.format.printf(({ level, message, timestamp, stack }) => {
          return `[${level}]：${timestamp} ${message}${stack ? `\n${stack}` : ''}`; // フォーマット
        }),
      ),
      defaultMeta: {},
      transports: new winston.transports.Console(),
    });

    this.logger.debug(`Logger level: ${process.env.LOGGER_LEVEL}`);
  }

  public debug(message: string): void {
    this.logger.debug(message);
  }
  public info(message: string): void {
    this.logger.info(message);
  }
  public warn(message: string): void {
    this.logger.warn(message);
  }
  public error(message: string, error?: Error): void {
    this.logger.error(message, error);
  }
}

export const logger = new Logger();
