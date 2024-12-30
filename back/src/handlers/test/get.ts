import { APIGatewayEvent, APIGatewayProxyResult, Handler } from "aws-lambda";

export const handler: Handler = async (
  event: APIGatewayEvent,
): Promise<APIGatewayProxyResult> => {
  console.log("Hello from the back!!!", JSON.stringify(event));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from the back!!",
    }),
  };
};
