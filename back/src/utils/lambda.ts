import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { ZodError } from "zod";
import { ApiRequest } from "../types/lambda";
import { StatusError } from "./error";
import { logger } from "./log";

const buildResult = (
  status: number,
  body: Record<string, unknown>,
  headers?: Record<string, string>,
): APIGatewayProxyResult => {
  return {
    headers: {
      "Access-Control-Allow-Origin": `'${process.env.FRONTEND_URL}'`,
      "Access-Control-Allow-Headers":
        "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
      "Access-Control-Allow-Methods": "'OPTIONS,POST,GET,PuT,DELETE'",
      ...headers,
    },
    statusCode: status,
    body: JSON.stringify(body),
  };
};

const buildErrorResult = (error: unknown): APIGatewayProxyResult => {
  if (error instanceof StatusError) {
    logger.error(error.message, error);
    return buildResult(error.status, { message: error.message });
  } else if (error instanceof ZodError) {
    return buildResult(400, { message: error.flatten().fieldErrors });
  } else if (error instanceof Error) {
    logger.error(error.message, error);
    return buildResult(500, { message: error.message });
  } else {
    return buildResult(500, { message: "Unknown error" });
  }
};

const extractRequest = (event: APIGatewayEvent): ApiRequest => {
  return {
    path: event.pathParameters || {},
    query: event.queryStringParameters || {},
    header: event.headers || {},
    body: JSON.parse(event.body || "{}"),
  };
};

export const executeLambda = async (
  event: APIGatewayEvent,
  fucntion: (request: ApiRequest) => Record<string, unknown>,
): Promise<APIGatewayProxyResult> => {
  try {
    const request = extractRequest(event);
    const result = fucntion(request);
    return buildResult(200, result);
  } catch (e: unknown) {
    return buildErrorResult(e);
  }
};
