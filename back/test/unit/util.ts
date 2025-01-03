import { Callback, Context } from "aws-lambda";

export const emptyEvent = {
  body: null,
  headers: {},
  pathParameters: {},
  queryStringParameters: {},
};
export const mockContext: Context = {
  callbackWaitsForEmptyEventLoop: false,
  functionName: "testFunction",
  functionVersion: "1",
  invokedFunctionArn:
    "arn:aws:lambda:us-west-2:123456789012:function:testFunction",
  memoryLimitInMB: "128",
  awsRequestId: "testRequestId",
  logGroupName: "/aws/lambda/testFunction",
  logStreamName: "2021/10/10/[$LATEST]abcdefghijk",
  getRemainingTimeInMillis: () => 1000,
  done: () => {},
  fail: () => {},
  succeed: () => {},
};

export const mockCallback: Callback<unknown> = (error, result) => {
  if (error) {
    throw error;
  }
  return result;
};
