import * as path from 'path';
import { Vpc, InstanceType } from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import { ServerlessLaravel, DatabaseCluster } from './index';

export class IntegTesting {
  readonly stack: cdk.Stack[];

  constructor() {
    const app = new cdk.App();
    const env = {
      region: process.env.CDK_DEFAULT_REGION,
      account: process.env.CDK_DEFAULT_ACCOUNT,
    };

    const stack = new cdk.Stack(app, 'testing-stack', { env });

    const vpc = new Vpc(stack, 'Vpc', { maxAzs: 3, natGateways: 1 });

    // the DatabaseCluster sharing the same vpc with the ServerlessLaravel
    const db = new DatabaseCluster(stack, 'DatabaseCluster', {
      vpc,
      instanceType: new InstanceType('t3.small'),
      rdsProxy: true,
      instanceCapacity: 1,
    });

    // the ServerlessLaravel
    new ServerlessLaravel(stack, 'ServerlessLaravel', {
      brefLayerVersion: 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-74-fpm:11',
      laravelPath: path.join(__dirname, '../codebase'),
      vpc,
      databaseConfig: {
        writerEndpoint: db.rdsProxy!.endpoint,
      },
    });

    new cdk.CfnOutput(stack, 'RDSProxyEndpoint', { value: db.rdsProxy!.endpoint });
    new cdk.CfnOutput(stack, 'DBMasterUser', { value: db.masterUser });
    new cdk.CfnOutput(stack, 'DBMasterPasswordSecret', { value: db.masterPassword.secretArn });

    this.stack = [stack];
  }
}

// run the integ testing
new IntegTesting();
