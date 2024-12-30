import { APIGatewayEvent, Handler } from 'aws-lambda';

export const handler: Handler = async (event: APIGatewayEvent) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from the back!!!',
            event,
        }),
    };
}