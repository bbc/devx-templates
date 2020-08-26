# Cosmos Lambda template

This folder is a project template for an AWS Lambda, written in Typescript

## Prerequisites

Node v12
YARN

## Initial Setup

1. Clone this repository and copy this folder into a new project
1. Modify the following files to reflect the correct **stack name** and **AWS account number**
   * `stackDeployConfig.json`
   * `src/cdk-entry.js`
   * `src/infrastructure/lambda-stack.ts`
1. Run `yarn install`
1. Authenticate the command line with the test AWS account
1. Run `yarn stack:deploy:test`
1. Authenticate the command line with the live AWS account
1. Run `yarn stack:deploy:live`
1. Go into the AWS console for both live and test functions and create an alias called `test` and one called `live` against the appropriate function
1. Create a new Lambda Function via the Cosmos web interface within your Cosmos project
1. Click on the created function, then for each environment, click on the "Function" button to register your function with that environment
1. Run `yarn lambda:publish` to create a new version in Cosmos
1. Run `yarn lambda:deploy:test` to deploy that version to test and/or `yarn lambda:deploy:live` to deploy that version to live

Your project is now bootstrapped. Going forward; any changes made to the infrastructure will need you to run the `yarn stack:deploy:*` commands against each environment. To deploy new versions of the application you simply need to perform the last two steps again.

## Usage Guide

- `yarn install`: Installs required dependencies
- `yarn stack:deploy:test` and `yarn stack:deploy:live`: This will synthesize the AWS CloudFormation templates from the CDK and deploy them to each environment. Note: Your command line will need to be authenticated against the appropriate AWS account.
- `yarn test`: Runs unit tests against the Lambda code
- `yarn lint`: Runs linting tests against the Lambda code
- `yarn build`: Runs Typescript compiler
- `yarn bundle`: This will bundle and minify the Lambda code, ready for distribution
- `yarn lambda:publish`: This command will publish the bundled Lambda code to a new Lambda version, in Cosmos
- `yarn lambda:deploy:test` and `yarn lambda:deploy:live`: This command will deploy the latest Cosmos Lambda version to either the test or live environment
