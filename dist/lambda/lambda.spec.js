import * as lambda from "./lambda";
describe("Lambda", function () {
  it("should run without crashing", function () {
    lambda.handler();
  });
});
