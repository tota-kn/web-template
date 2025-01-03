import { z } from "zod";
import { ApiRequest } from "../../types/lambda";

const schema = z.object({
  n: z.number(),
});

export class TestGetRequest {
  readonly query: { n: number };

  constructor(request: ApiRequest) {
    const query = { n: Number(request.query.n) };
    this.query = schema.parse(query);
  }
}
