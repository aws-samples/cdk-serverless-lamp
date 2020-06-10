
import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';


enum BREF_LAYER_VERSION {
  PHP_73_FPM = 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-73-fpm:24',
  PHP_74_FPM = 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-74-fpm:10',
  PHP_73 = 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-73:24',
  PHP_74 = 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-74:10',
}


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
}


export class ServerlessApi extends cdk.Construct {
  readonly handler: lambda.IFunction

  constructor(scope: cdk.Construct, id: string, props?: ServerlessApiProps) {
    super(scope, id);

    const DEFAULT_LAMBDA_ASSET_PATH = path.join(__dirname, '../composer/laravel58-bref')

    this.handler = props?.handler ?? new lambda.Function(this, 'handler', {
      runtime: lambda.Runtime.PROVIDED,
      handler: 'public/index.php',
      layers: [
        lambda.LayerVersion.fromLayerVersionArn(this, 'BrefPHPLayer', BREF_LAYER_VERSION.PHP_74_FPM),
      ],
      code: lambda.Code.fromAsset(props?.lambdaCodePath ?? DEFAULT_LAMBDA_ASSET_PATH),
      environment: {
        APP_STORAGE: '/tmp',
      },
      timeout: cdk.Duration.seconds(120),
    });

    new apigateway.LambdaRestApi(this, 'apiservice', {
      handler: this.handler,
    });

  }
}
