import { APIGatewayEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import { paths } from "../../types/apiClient";

export const handler: Handler = async (
  event: APIGatewayEvent,
): Promise<APIGatewayProxyResult> => {
  const request = parseRequest(event);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from the back!!!",
      request: request,
    }),
  };
};

const parseRequest = (
  event: APIGatewayEvent,
): paths["/test"]["get"]["parameters"] => {
  try {
    const query = event.queryStringParameters;
    const n = Number(query?.n);
    return {
      query: {
        n: n,
      },
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error("n must be a number");
    } else {
      throw new Error("Unknown error");
    }
  }
};
