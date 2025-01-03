import { expect, test } from "vitest";
import { handler } from "../../../../src/handlers/test/get";
import { emptyEvent, mockCallback, mockContext } from "../../util";

test("GET /test Success", async () => {
  const result = await handler(
    { queryStringParameters: { n: 123 } },
    mockContext,
    mockCallback,
  );
  expect(result.statusCode).eq(200);
});

test("GET /test validationError", async () => {
  const result = await handler(emptyEvent, mockContext, mockCallback);
  expect(result.statusCode).eq(400);
});
