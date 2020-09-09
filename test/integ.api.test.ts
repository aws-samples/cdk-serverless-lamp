import { ServerlessLaravel, DatabaseCluster } from '../src';
import { SynthUtils } from '@aws-cdk/assert';
import { App, Stack, CfnOutput } from '@aws-cdk/core';
import { Vpc, InstanceType } from '@aws-cdk/aws-ec2';
import * as path from 'path';

test('snapshot validation', () => {
  const app = new App();

  const env = {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  };

  const stack = new Stack(app, 'testing-stack', { env });

  const vpc = new Vpc(stack, 'Vpc', { maxAzs: 3, natGateways: 1});

  // the DatabaseCluster sharing the same vpc with the ServerlessLaravel
  const db = new DatabaseCluster(stack, 'DatabaseCluster', {
    vpc,
    instanceType: new InstanceType('t3.small'),
    rdsProxy: true,
    instanceCapacity: 1,
  })

  // the ServerlessLaravel
  new ServerlessLaravel(stack, 'ServerlessLaravel', {
    brefLayerVersion: 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-74-fpm:11',
    laravelPath: path.join(__dirname, '../codebase'),
    vpc,
    databaseConfig: {
      writerEndpoint: db.rdsProxy!.endpoint,
    },
  });

  new CfnOutput(stack, 'RDSProxyEndpoint', { value: db.rdsProxy!.endpoint })
  new CfnOutput(stack, 'DBMasterUser', { value: db.masterUser })
  new CfnOutput(stack, 'DBMasterPasswordSecret', { value: db.masterPassword.secretArn })
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});







