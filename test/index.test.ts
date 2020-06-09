import { ServerlessApi } from '../lib/index';
import { App, Stack } from '@aws-cdk/core';
import '@aws-cdk/assert/jest';

test('create the HTTP API', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  new ServerlessApi(stack, 'testing');

  expect(stack).toHaveResource('AWS::ApiGatewayV2::Api', {
    ProtocolType: 'HTTP',
  });
});



