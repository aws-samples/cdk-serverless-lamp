import { ServerlessLaravel } from '../';
import { App, Stack } from '@aws-cdk/core';
import * as path from 'path';

const mockApp = new App();
const stack = new Stack(mockApp, 'testing-stack');

new ServerlessLaravel(stack, 'testing', {
  brefLayerVersion: 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-74-fpm:11',
  laravelPath: path.join(__dirname, '../../composer/laravel58-bref'),
});





