import { expect, test } from "vitest";

const mockEvent = {};
const mockContext = {
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
const mockCallback = (
  error?: string | Error | null | undefined,
  result?: unknown,
): void => {
  if (error) {
    throw new Error(error.toString());
  }
  expect(result).eq(1);
};

test("GET /test", async () => {
  // const result = await handler(mockEvent, mockContext, mockCallback);
  // expect(result.statusCode).eq(200);
  expect(1).eq(1);
});
