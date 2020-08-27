const {
  ConstructLibraryAws,
} = require('projen');

const LAST_AWSCDK_VERSION = '1.61.0';

const project = new ConstructLibraryAws({
  "authorName": "Pahud Hsieh",
  "authorEmail": "hunhsieh@amazon.com",
  "name": "cdk-serverless-lamp",
  "description": "A JSII construct lib to build AWS Serverless LAMP with AWS CDK",
  "repository": "https://github.com/aws-samples/cdk-serverless-lamp.git",
  keywords: [
    'aws',
    'serverless',
    'lamp'
  ],

  catalog: {
    twitter: 'pahudnet',
    announce: false
  },

  // creates PRs for projen upgrades
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  cdkVersion: LAST_AWSCDK_VERSION,
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-apigateway',
    '@aws-cdk/aws-apigatewayv2',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-secretsmanager',
    '@aws-cdk/aws-rds',
  ],

  python: {
    distName: 'cdk-serverless-lamp',
    module: 'cdk_serverless_lamp'
  }
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'docker-compose.yml', 'images', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude, '/codebase');
project.gitignore.exclude(...common_exclude);

project.synth();
