import { ServerlessApi } from '../';
import { App, Stack } from '@aws-cdk/core';

const mockApp = new App();
const stack = new Stack(mockApp, 'testing-stack');

new ServerlessApi(stack, 'testing', {
  brefLayerVersion: 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-74-fpm:11',
});





