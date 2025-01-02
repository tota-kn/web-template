import { APIGatewayEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import { paths } from "../../types/apiClient";
import { ValidationError } from "../../utils/error";
import { buildErrorResult, buildResult } from "../../utils/lambda";

export const handler: Handler = async (
  event: APIGatewayEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    const request = parseRequest(event);
    return buildResult(200, {
      message: "Hello from the back!!!",
      request: request,
    env: process.env.FRONT_BASE_URL ?? "none",
  });
  } catch (e: unknown) {
    return buildErrorResult(e);
  }
};

const parseRequest = (
  event: APIGatewayEvent,
): paths["/api/test"]["get"]["parameters"] => {
  const query = event.queryStringParameters;
  const n = Number(query?.n);
  if (isNaN(n)) {
    throw new ValidationError("n must be a number");
  }

  return {
    query: {
      n: n,
    },
  };
};
