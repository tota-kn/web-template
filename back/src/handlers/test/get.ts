import { APIGatewayEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import { TestGetRequest } from "../../model/request/testGet";
import { ApiRequest } from "../../types/lambda";
import { executeLambda } from "../../utils/lambda";

export const handler: Handler = async (
  event: APIGatewayEvent,
): Promise<APIGatewayProxyResult> => {
  return await executeLambda(event, execute);
};

const execute = async (request: ApiRequest) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const parsedRequest = new TestGetRequest(request);
  return {
    message: "Hello from the back!!!",
    request: parsedRequest,
    env: process.env.FRONT_BASE_URL,
  };
};
