import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as path from "path";
import * as s3 from "@aws-cdk/aws-s3";

export default class LambdaStack extends cdk.Stack {
  public constructor(scope: cdk.Construct, props: cdk.StackProps) {
    super(scope, "DevxTemplateStack", props);

    new s3.Bucket(this, "CodeBucket", {
      bucketName: "devx-template-lambda-code-bucket",
    });

    new lambda.Function(this, "LambdaFunction", {
      handler: "dist/bundle/lambda.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset(
        path.join(__dirname, "..", "..", "dist", "bundle")
      ),
    });
  }
}
