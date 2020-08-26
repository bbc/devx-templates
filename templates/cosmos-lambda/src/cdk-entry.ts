#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import LambdaStack from "./infrastructure/lambda-stack";

const app = new cdk.App();

new LambdaStack(app, {
  env: {
    account: "997052946310",
    region: "eu-west-1",
  },
  stackName: "DevxTemplateStackTest",
});

new LambdaStack(app, {
  env: {
    account: "561847100151",
    region: "eu-west-1",
  },
  stackName: "DevxTemplateStackLive",
});
