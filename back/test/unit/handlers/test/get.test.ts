import { expect, test } from "vitest";
import { handler } from "../../../../src/handlers/test/get";
import { emptyEvent, mockCallback, mockContext } from "../../util";

test("200", async () => {
  const result = await handler(
    { queryStringParameters: { n: "123" } },
    mockContext,
    mockCallback,
  );
  expect(result.statusCode).eq(200);
});

test("nが指定されていないと400", async () => {
  const result = await handler(emptyEvent, mockContext, mockCallback);
  expect(result.statusCode).eq(400);
});

test("nがnumber出ないとき400", async () => {
  const result = await handler(
    { qyery: { n: "aaaa" } },
    mockContext,
    mockCallback,
  );
  expect(result.statusCode).eq(400);
});
