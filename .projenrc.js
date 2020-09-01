const {
  ConstructLibraryAws,
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.61.1';
const PROJEN_PINNED_VERSION = '0.3.50';
const PROJECT_NAME = 'cdk-serverless-lamp';
const PROJECT_DESCRIPTION = 'A JSII construct lib to build AWS Serverless LAMP with AWS CDK';

const project = new ConstructLibraryAws({
  authorName: "Pahud Hsieh",
  authorEmail: "hunhsieh@amazon.com",
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repository: "https://github.com/aws-samples/cdk-serverless-lamp.git",
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

  cdkVersion: AWS_CDK_LATEST_RELEASE,
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

if (PROJEN_PINNED_VERSION) {
  project.devDependencies.projen = PROJEN_PINNED_VERSION;
}

const common_exclude = ['cdk.out', 'cdk.context.json', 'docker-compose.yml', 'images', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude, '/codebase');
project.gitignore.exclude(...common_exclude);

project.synth();
