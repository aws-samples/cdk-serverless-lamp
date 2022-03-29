const { awscdk, DevEnvironmentDockerImage, Gitpod } = require('projen');

const PROJECT_NAME = 'cdk-serverless-lamp';
const PROJECT_DESCRIPTION = 'A JSII construct lib to build AWS Serverless LAMP with AWS CDK';

const project = new awscdk.AwsCdkConstructLibrary({
  authorName: 'Pahud Hsieh',
  authorEmail: 'hunhsieh@amazon.com',
  name: PROJECT_NAME,
  cdkVersion: '2.18.0',
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/aws-samples/cdk-serverless-lamp.git',
  defaultReleaseBranch: 'main',
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  deps: [
    '@aws-cdk/aws-apigatewayv2-integrations-alpha',
    '@aws-cdk/aws-apigatewayv2-alpha',
  ],
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['pahud'],
  },
  keywords: [
    'aws',
    'serverless',
    'lamp',
  ],
  catalog: {
    twitter: 'pahudnet',
    announce: false,
  },
  python: {
    distName: 'cdk-serverless-lamp',
    module: 'cdk_serverless_lamp',
  },
});

project.package.addField('resolutions', {
  'pac-resolver': '^5.0.0',
  'set-value': '^4.0.1',
  'ansi-regex': '^5.0.1',
});

const gitpodPrebuild = project.addTask('gitpod:prebuild', {
  description: 'Prebuild setup for Gitpod',
});
// install and compile only, do not test or package.
gitpodPrebuild.exec('yarn install --frozen-lockfile --check-files');
gitpodPrebuild.exec('npx projen compile');

let gitpod = new Gitpod(project, {
  dockerImage: DevEnvironmentDockerImage.fromImage('public.ecr.aws/pahudnet/gitpod-workspace:latest'),
  prebuilds: {
    addCheck: true,
    addBadge: true,
    addLabel: true,
    branches: true,
    pullRequests: true,
    pullRequestsFromForks: true,
  },
});

gitpod.addCustomTask({
  init: 'yarn gitpod:prebuild',
  // always upgrade after init
  command: 'npx projen upgrade',
});

gitpod.addVscodeExtensions(
  'dbaeumer.vscode-eslint',
  'ms-azuretools.vscode-docker',
  'AmazonWebServices.aws-toolkit-vscode',
);

const common_exclude = ['cdk.out', 'cdk.context.json', 'docker-compose.yml', 'images', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude, '/codebase');
project.gitignore.exclude(...common_exclude);

project.synth();
