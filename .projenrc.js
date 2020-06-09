const {
  JsiiProject,
  Semver
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.44.0';
const PROJECT_NAME = 'cdk-serverless-api';
const PROJECT_DESCRIPTION = 'A sample JSII construct lib for AWS CDK';

const project = new JsiiProject({
  name: PROJECT_NAME,
  jsiiVersion: Semver.caret('1.5.0'),
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/pahud/awscdk-jsii-template.git',
  authorName: 'Pahud Hsieh',
  authorEmail: 'hunhsieh@amazon.com',
  stability: 'experimental',
  devDependencies: {
    '@aws-cdk/assert': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@types/jest': Semver.caret('25.2.3'),
    '@types/node': Semver.caret('14.0.11'),
    'ts-jest': Semver.caret('25.3.1'),
    'jest': Semver.caret('25.5.0'),
  },
  peerDependencies: {
    constructs: Semver.caret('3.0.3'),
    '@aws-cdk/core': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-apigatewayv2': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda': Semver.caret(AWS_CDK_LATEST_RELEASE),
  },
  dependencies: {
    constructs: Semver.caret('3.0.3'),
    '@aws-cdk/core': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-apigatewayv2': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda': Semver.caret(AWS_CDK_LATEST_RELEASE),
  },
  python: {
    distName: 'cdk-serverless-api',
    module: 'cdk_serverless_api'
  }
});

project.addFields({
  'keywords': [
    'cdk',
    'aws',
  ]
});

project.synth();
