import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as path from "path";

export default class LambdaStack extends cdk.Stack {
  public constructor(scope: cdk.Construct, props: cdk.StackProps) {
    super(scope, "LambdaStackId", props);

    new lambda.Function(this, "LambdaFunction", {
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset(
        path.join(__dirname, "..", "..", "dist", "lambda")
      ),
    });
  }
}
