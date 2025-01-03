import { APIGatewayEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import { TestGetRequest } from "../../model/request/testGet";
import { ApiRequest } from "../../types/lambda";
import { executeLambda } from "../../utils/lambda";

export const handler: Handler = async (
  event: APIGatewayEvent,
): Promise<APIGatewayProxyResult> => {
  return await executeLambda(event, execute);
};

const execute = (request: ApiRequest) => {
  const parsedRequest = new TestGetRequest(request);
  return {
    message: "Hello from the back!!!",
    request: parsedRequest,
    env: process.env.FRONT_BASE_URL,
  };
};
