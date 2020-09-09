import { ServerlessApi, DatabaseCluster } from '../';
import { App, Stack } from '@aws-cdk/core';
import * as path from 'path';
import '@aws-cdk/assert/jest';
import { Vpc } from '@aws-cdk/aws-ec2';

test('create the ServerlessAPI', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  new ServerlessApi(stack, 'testing', {
    brefLayerVersion: 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-74-fpm:11',
    lambdaCodePath: path.join(__dirname, '../codebase'),
  });

  expect(stack).toHaveResource('AWS::ApiGatewayV2::Api');
  expect(stack).toHaveResource('AWS::Lambda::Function');
});


test('create rdsProxy if props.rdsProxy is undefined', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');
  const vpc = new Vpc(stack, 'Vpc')

  new DatabaseCluster(stack, 'DBCluster', {
    vpc,
  })
  expect(stack).toHaveResource('AWS::RDS::DBProxy');
});

test('create rdsProxy if props.rdsProxy is true', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');
  const vpc = new Vpc(stack, 'Vpc')

  new DatabaseCluster(stack, 'DBCluster', {
    vpc,
    rdsProxy: true,
  })
  expect(stack).toHaveResource('AWS::RDS::DBProxy');
});

test('do not create rdsProxy if props.rdsProxy is false', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');
  const vpc = new Vpc(stack, 'Vpc')

  new DatabaseCluster(stack, 'DBCluster', {
    vpc,
    rdsProxy: false,
  })
  expect(stack).not.toHaveResource('AWS::RDS::DBProxy');
});



