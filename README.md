
[![NPM version](https://badge.fury.io/js/cdk-serverless-lamp.svg)](https://badge.fury.io/js/cdk-serverless-lamp)
[![PyPI version](https://badge.fury.io/py/cdk-serverless-lamp.svg)](https://badge.fury.io/py/cdk-serverless-lamp)
![Release](https://github.com/pahud/cdk-serverless-lamp/workflows/Release/badge.svg)

# Welcome to cdk-serverless-lamp

`cdk-serverless-lamp` is a JSII construct library for AWS CDK that allows you to deploy the [New Serverless LAMP Stack](https://aws.amazon.com/tw/blogs/compute/introducing-the-new-serverless-lamp-stack/) running PHP Laravel Apps by specifying the local `laravel` directory.

By deploying this stack, it creates the following resources for you:

1. Amazon API Gateway HTTP API
2. AWS Lambda custom runtime with [Bref runtime](https://bref.sh/docs/runtimes/) support
3. Amazon Aurora for MySQL database cluster with RDS proxy enabled

## Usage

Building your serverless Laravel with `ServerlessLaravel` construct:

```ts
import { ServerlessLaravel } from 'cdk-serverless-lamp';
import { App, Stack } from '@aws-cdk/core';
import * as path from 'path';

const app = new App();
const stack = new Stack(app, 'ServerlessLaraval');

// the DatabaseCluster sharing the same vpc with the ServerlessLaravel
const db = new DatabaseCluster(stack, 'DatabaseCluster', {
  vpc,
  instanceType: new InstanceType('t3.small'),
  rdsProxy: true,
})

// the ServerlessLaravel
new ServerlessLaravel(stack, 'ServerlessLaravel', {
  brefLayerVersion: 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-74-fpm:11',
  laravelPath: path.join(__dirname, '../../composer/laravel58-bref'),
  vpc,
  databaseConfig: {
    writerEndpoint: db.rdsProxy!.endpoint,
  },
});
```

On deploy complete, the API Gateway URL will be returned in the Output. Click the URL and you will see the Laravel landing page:

![laravel-welcome](./images/laravel.png)


## Prepare the Laravel and bref

```bash
$ git clone https://github.com/pahud/cdk-serverless-lamp.git
$ cd cdk-serverless-lamp
$ mkdir composer && cd composer
# create a laravel project
$ docker run --rm -ti \
  --volume $PWD:/app \
  composer create-project laravel/laravel laravel58-bref --prefer-dist
# enter this project
$ cd laravel58-bref
# install bref in the vendor
$ docker run --rm -ti \
  --volume $PWD:/app \
  composer require bref/bref
```


## Configure Laravel with Bref for Lambda

According to the Bref [document](https://bref.sh/docs/frameworks/laravel.html), we need configure the environment before it can be deployed on Lambda:

edit the `.env` file
```
VIEW_COMPILED_PATH=/tmp/storage/framework/views

# We cannot store sessions to disk: if you don't need sessions (e.g. API) then use `array`
# If you write a website, use `cookie` or store sessions in database.
SESSION_DRIVER=cookie

# Logging to stderr allows the logs to end up in Cloudwatch
LOG_CHANNEL=stderr
```

edit the `app/Providers/AppServiceProvider.php`

```php
    public function boot()
    {
        // Make sure the directory for compiled views exist
        if (! is_dir(config('view.compiled'))) {
            mkdir(config('view.compiled'), 0755, true);
        }
    }
```

edit `bootstrap/app.php`

```php

$app = new Illuminate\Foundation\Application(
    $_ENV['APP_BASE_PATH'] ?? dirname(__DIR__)
);

// add the following statement
// we will configure APP_STORAGE = '/tmp' in Lambda env var
$app->useStoragePath($_ENV['APP_STORAGE'] ?? $app->storagePath());
```
_(credit to [@azole](https://medium.com/@azole/deploy-serverless-laravel-by-bref-6f28b1e0d53a))_


## Amazon RDS Cluster and Proxy

Use `DatabaseCluster` construct to create your database clusters. Optionally specify `singleInstanceOnly: true` if you prefer single DB instance rather than a cluster which consists of one writer and at least one read replica.

By default, **Amazon Aurora** DB cluster with MySQL engine version `2.08` will be created and you have one `writer` and one `replica`, however, if you opt in `singleInstanceOnly`, **Amazon RDS for MySQL** with single instance will be created instead.

`Amaozn RDS proxy` will be created in either option above.


```ts
const db = new DatabaseCluster(stack, 'DatabaseCluster', {
  vpc,
  instanceType: new InstanceType('t3.small'),
  rdsProxy: true,
  singleInstanceOnly: false,
})
```
