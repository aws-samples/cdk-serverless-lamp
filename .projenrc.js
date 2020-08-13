const {
  JsiiProject,
  Semver
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.58.0';
const CONSTRUCTS_VERSION = '3.0.4'
const PROJECT_NAME = 'cdk-serverless-lamp';
const PROJECT_DESCRIPTION = 'A JSII construct lib to build AWS Serverless LAMP with AWS CDK';

const project = new JsiiProject({
  name: PROJECT_NAME,
  jsiiVersion: Semver.caret('1.5.0'),
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/pahud/cdk-serverless-lamp.git',
  authorName: 'Pahud Hsieh',
  authorEmail: 'hunhsieh@amazon.com',
  stability: 'experimental',
  devDependencies: {
    '@aws-cdk/assert': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@types/jest': Semver.caret('25.2.3'),
    '@types/node': Semver.caret('14.0.11'),
    'ts-jest': Semver.caret('25.3.1'),
    'jest': Semver.caret('25.5.0'),
    'dot-prop': Semver.caret('5.1.1'),
  },
  peerDependencyOptions: {
    pinnedDevDependency: false,
  },
  peerDependencies: {
    constructs: Semver.caret(CONSTRUCTS_VERSION),
    '@aws-cdk/core': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-apigateway': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-apigatewayv2': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ec2': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-iam': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-secretsmanager': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-rds': Semver.caret(AWS_CDK_LATEST_RELEASE),
  },
  dependencies: {
    constructs: Semver.caret(CONSTRUCTS_VERSION),
    '@aws-cdk/core': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-apigateway': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-apigatewayv2': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ec2': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-iam': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-secretsmanager': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-rds': Semver.caret(AWS_CDK_LATEST_RELEASE),
  },
  python: {
    distName: 'cdk-serverless-lamp',
    module: 'cdk_serverless_lamp'
  }
});

project.addFields({
  'keywords': [
    'aws',
    'serverless',
    'lamp',
  ]
});

project.addFields({
  'awscdkio': {
    'twitter': '@pahudnet',
    'announce': false,
  }
});


const common_exclude = ['cdk.out', 'cdk.context.json', 'docker-compose.yml', 'images', 'yarn-error.log']
project.npmignore.exclude(...common_exclude, '/codebase');
project.gitignore.exclude(...common_exclude);

project.synth();
