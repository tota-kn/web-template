import { APIGatewayEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import { paths } from "../../types/apiClient";
import { ApiRequest } from "../../types/lambda";
import { ValidationError } from "../../utils/error";
import { executeLambda } from "../../utils/lambda";

export const handler: Handler = async (
  event: APIGatewayEvent,
): Promise<APIGatewayProxyResult> => {
  return await executeLambda(event, execute);
};

const execute = (request: ApiRequest) => {
  const parsedRequest = parseRequest(request);
  return {
    message: "Hello from the back!!!",
    request: parsedRequest,
    env: process.env.FRONT_BASE_URL,
  };
};

const parseRequest = (
  request: ApiRequest,
): paths["/api/test"]["get"]["parameters"] => {
  const n = Number(request.query?.n);
  if (isNaN(n)) {
    throw new ValidationError("n must be a number");
  }

  return {
    query: {
      n: n,
    },
  };
};
