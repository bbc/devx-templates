import * as lambda from "./lambda";

describe("Lambda", () => {
  it("should run without crashing", () => {
    lambda.handler();
  });
});
