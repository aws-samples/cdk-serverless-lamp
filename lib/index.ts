
import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';

export interface ServerlessApiProps {
  readonly handler?: lambda.IFunction;
}

enum BREF_LAYER_VERSION {
  PHP_74_FPM = 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-74-fpm:10',
}

export class ServerlessApi extends cdk.Construct {
  readonly handler: lambda.IFunction

  constructor(scope: cdk.Construct, id: string, props?: ServerlessApiProps) {
    super(scope, id);

    const vendorLayer = new lambda.LayerVersion(this, 'vendorLayer', {
      code: lambda.Code.fromAsset(path.join(__dirname, '../composer')),
    })

    this.handler = props?.handler ?? new lambda.Function(this, 'handler', {
      runtime: lambda.Runtime.PROVIDED,
      handler: 'index.php',
      layers: [
        lambda.LayerVersion.fromLayerVersionArn(this, 'BrefPHPLayer', BREF_LAYER_VERSION.PHP_74_FPM),
        vendorLayer,
      ],
      code: lambda.Code.fromAsset(path.join(__dirname,  './php')),
      environment: {
        BREF_AUTOLOAD_PATH: '/opt/vendor/autoload.php',
      },
    });

    new apigateway.LambdaRestApi(this, 'apiservice', {
      handler: this.handler,
    });

  }
}
