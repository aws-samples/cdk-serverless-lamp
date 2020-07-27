import { ServerlessApi } from '../';
import { App, Stack } from '@aws-cdk/core';
import '@aws-cdk/assert/jest';

test('create the ServerlessAPI', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  new ServerlessApi(stack, 'testing', {
    brefLayerVersion: 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-74-fpm:11',
  });

  expect(stack).toHaveResource('AWS::ApiGatewayV2::Api');
  expect(stack).toHaveResource('AWS::Lambda::Function');
});



