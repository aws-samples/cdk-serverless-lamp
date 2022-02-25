import * as path from 'path';
import {
  App, Stack,
  aws_ec2 as ec2,
} from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ServerlessApi, DatabaseCluster } from '../src';

test('create the ServerlessAPI', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  new ServerlessApi(stack, 'testing', {
    brefLayerVersion: 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-74-fpm:11',
    lambdaCodePath: path.join(__dirname, '../codebase'),
  });

  Template.fromStack(stack).hasResource('AWS::ApiGatewayV2::Api', {});
  Template.fromStack(stack).hasResource('AWS::Lambda::Function', {});
});


test('create rdsProxy if props.rdsProxy is undefined', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');
  const vpc = new ec2.Vpc(stack, 'Vpc');

  new DatabaseCluster(stack, 'DBCluster', {
    vpc,
  });
  Template.fromStack(stack).hasResource('AWS::RDS::DBProxy', {});
});

test('create rdsProxy if props.rdsProxy is true', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');
  const vpc = new ec2.Vpc(stack, 'Vpc');

  new DatabaseCluster(stack, 'DBCluster', {
    vpc,
    rdsProxy: true,
  });
  Template.fromStack(stack).hasResource('AWS::RDS::DBProxy', {});
});

test('do not create rdsProxy if props.rdsProxy is false', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');
  const vpc = new ec2.Vpc(stack, 'Vpc');

  new DatabaseCluster(stack, 'DBCluster', {
    vpc,
    rdsProxy: false,
  });
  Template.fromStack(stack).resourceCountIs('AWS::RDS::DBProxy', 0);
});


