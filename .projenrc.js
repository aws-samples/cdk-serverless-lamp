const { AwsCdkConstructLibrary } = require('projen');
const { Automation } = require('projen-automate-it');

const AWS_CDK_LATEST_RELEASE = '1.73.0';
const PROJECT_NAME = 'cdk-serverless-lamp';
const PROJECT_DESCRIPTION = 'A JSII construct lib to build AWS Serverless LAMP with AWS CDK';
const AUTOMATION_TOKEN = 'PROJEN_GITHUB_TOKEN';

const project = new AwsCdkConstructLibrary({
  authorName: 'Pahud Hsieh',
  authorEmail: 'hunhsieh@amazon.com',
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/aws-samples/cdk-serverless-lamp.git',
  dependabot: false,
  defaultReleaseBranch: 'main',
  devDeps: ['projen-automate-it'],
  keywords: [
    'aws',
    'serverless',
    'lamp',
  ],
  catalog: {
    twitter: 'pahudnet',
    announce: false,
  },
  cdkVersion: AWS_CDK_LATEST_RELEASE,
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-apigateway',
    '@aws-cdk/aws-apigatewayv2',
    '@aws-cdk/aws-apigatewayv2-integrations',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-secretsmanager',
    '@aws-cdk/aws-rds',
  ],
  python: {
    distName: 'cdk-serverless-lamp',
    module: 'cdk_serverless_lamp',
  },
});

const automation = new Automation(project, {
  automationToken: AUTOMATION_TOKEN,
});

automation.projenYarnUpgrade();

const common_exclude = ['cdk.out', 'cdk.context.json', 'docker-compose.yml', 'images', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude, '/codebase');
project.gitignore.exclude(...common_exclude);

project.synth();
