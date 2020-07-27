
import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigatewayv2';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';

export interface ServerlessApiProps {
  /**
   * custom lambda function for the API
   * 
   * @default - A Lambda function with Lavavel and Bref support will be created
   */
  readonly handler?: lambda.IFunction;

  /**
   * custom lambda code asset path
   * 
   * @default - DEFAULT_LAMBDA_ASSET_PATH
   */
  readonly lambdaCodePath?: string;

  /**
   * AWS Lambda layer version from the Bref runtime.
   * e.g. arn:aws:lambda:us-west-1:209497400698:layer:php-74-fpm:12
   * check the latest runtime verion arn at https://bref.sh/docs/runtimes/
   */
  readonly brefLayerVersion: string

}

export class ServerlessApi extends cdk.Construct {
  readonly handler: lambda.IFunction

  constructor(scope: cdk.Construct, id: string, props: ServerlessApiProps) {
    super(scope, id);

    const DEFAULT_LAMBDA_ASSET_PATH = path.join(__dirname, '../composer/laravel58-bref')

    this.handler = props.handler ?? new lambda.Function(this, 'handler', {
      runtime: lambda.Runtime.PROVIDED,
      handler: 'public/index.php',
      layers: [
        lambda.LayerVersion.fromLayerVersionArn(this, 'BrefPHPLayer', props.brefLayerVersion),
      ],
      code: lambda.Code.fromAsset(props?.lambdaCodePath ?? DEFAULT_LAMBDA_ASSET_PATH),
      environment: {
        APP_STORAGE: '/tmp',
      },
      timeout: cdk.Duration.seconds(120),
    });

    const endpoint = new apigateway.HttpApi(this, 'apiservice', {
      defaultIntegration: new apigateway.LambdaProxyIntegration({
        handler: this.handler,
      }),
    });
    new cdk.CfnOutput(this, 'EndpointURL', { value: endpoint.url! })
  }
}
