import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as s3 from "@aws-cdk/aws-s3";

export default class LambdaStack extends cdk.Stack {
  public constructor(scope: cdk.Construct, props: cdk.StackProps) {
    super(scope, "LambdaStackId", props);

    const codeBucket = new s3.Bucket(this, "CodeBucket", {
      bucketName: "code-bucket",
    });

    new lambda.Function(this, "LambdaFunction", {
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromBucket(codeBucket, "lambda.js"),
    });
  }
}
