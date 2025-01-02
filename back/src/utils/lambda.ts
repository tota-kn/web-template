import { APIGatewayProxyResult } from "aws-lambda";
import { StatusError } from "./error";

export const buildResult = (
  status: number,
  body: Record<string, unknown>,
  headers?: Record<string, string>,
): APIGatewayProxyResult => {
  return {
    headers: {
      "Access-Control-Allow-Origin": `'${process.env.FRONTEND_URL}'`,
      "Access-Control-Allow-Headers": "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
      "Access-Control-Allow-Methods": "'OPTIONS,POST,GET,PuT,DELETE'",
      ...headers,
    },
    statusCode: status,
    body: JSON.stringify(body),
  };
};

export const buildErrorResult = (error: unknown): APIGatewayProxyResult => {
  if (error instanceof StatusError) {
    return buildResult(error.status, { message: error.message });
  } else if (error instanceof Error) {
    return buildResult(500, { message: error.message });
  } else {
    return buildResult(500, { message: "Unknown error" });
  }
};
