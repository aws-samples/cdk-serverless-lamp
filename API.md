# API Reference

**Classes**

Name|Description
----|-----------
[DatabaseCluster](#cdk-serverless-lamp-databasecluster)|*No description*
[ServerlessApi](#cdk-serverless-lamp-serverlessapi)|Use `ServerlessApi` to create the serverless API resource.
[ServerlessLaravel](#cdk-serverless-lamp-serverlesslaravel)|Use `ServerlessLaravel` to create the serverless Laravel resource.


**Structs**

Name|Description
----|-----------
[DatabaseConfig](#cdk-serverless-lamp-databaseconfig)|*No description*
[DatabaseProps](#cdk-serverless-lamp-databaseprops)|*No description*
[ServerlessApiProps](#cdk-serverless-lamp-serverlessapiprops)|Construct properties for `ServerlessApi`.
[ServerlessLaravelProps](#cdk-serverless-lamp-serverlesslaravelprops)|Construct properties for `ServerlessLaravel`.



## class DatabaseCluster  <a id="cdk-serverless-lamp-databasecluster"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new DatabaseCluster(scope: Construct, id: string, props: DatabaseProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[DatabaseProps](#cdk-serverless-lamp-databaseprops)</code>)  *No description*
  * **vpc** (<code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code>)  The VPC for the DatabaseCluster. 
  * **engine** (<code>[aws_rds.IClusterEngine](#aws-cdk-lib-aws-rds-iclusterengine)</code>)  database cluster engine. __*Default*__: AURORA_MYSQL
  * **instanceCapacity** (<code>number</code>)  How many replicas/instances to create. __*Default*__: 1
  * **instanceType** (<code>[aws_ec2.InstanceType](#aws-cdk-lib-aws-ec2-instancetype)</code>)  instance type of the cluster. __*Default*__: t3.medium (or, more precisely, db.t3.medium)
  * **masterUserName** (<code>string</code>)  master username. __*Default*__: admin
  * **rdsProxy** (<code>boolean</code>)  enable the Amazon RDS proxy. __*Default*__: true
  * **rdsProxyOptions** (<code>[aws_rds.DatabaseProxyOptions](#aws-cdk-lib-aws-rds-databaseproxyoptions)</code>)  RDS Proxy Options. __*Optional*__
  * **vpcSubnets** (<code>[aws_ec2.SubnetSelection](#aws-cdk-lib-aws-ec2-subnetselection)</code>)  List of subnets to use when creating subnet group. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**masterPassword** | <code>[aws_secretsmanager.ISecret](#aws-cdk-lib-aws-secretsmanager-isecret)</code> | <span></span>
**masterUser** | <code>string</code> | <span></span>
**rdsProxy**? | <code>[aws_rds.DatabaseProxy](#aws-cdk-lib-aws-rds-databaseproxy)</code> | __*Optional*__



## class ServerlessApi  <a id="cdk-serverless-lamp-serverlessapi"></a>

Use `ServerlessApi` to create the serverless API resource.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new ServerlessApi(scope: Construct, id: string, props: ServerlessApiProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ServerlessApiProps](#cdk-serverless-lamp-serverlessapiprops)</code>)  *No description*
  * **brefLayerVersion** (<code>string</code>)  AWS Lambda layer version from the Bref runtime. 
  * **databaseConfig** (<code>[DatabaseConfig](#cdk-serverless-lamp-databaseconfig)</code>)  Database configurations. __*Optional*__
  * **handler** (<code>[aws_lambda.IFunction](#aws-cdk-lib-aws-lambda-ifunction)</code>)  custom lambda function for the API. __*Default*__: A Lambda function with Lavavel and Bref support will be created
  * **lambdaCodePath** (<code>string</code>)  custom lambda code asset path. __*Default*__: DEFAULT_LAMBDA_ASSET_PATH
  * **rdsProxy** (<code>[aws_rds.IDatabaseProxy](#aws-cdk-lib-aws-rds-idatabaseproxy)</code>)  RDS Proxy for the Lambda function. __*Default*__: no db proxy
  * **vpc** (<code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code>)  The VPC for this stack. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**handler** | <code>[aws_lambda.IFunction](#aws-cdk-lib-aws-lambda-ifunction)</code> | <span></span>
**vpc**? | <code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code> | __*Optional*__



## class ServerlessLaravel  <a id="cdk-serverless-lamp-serverlesslaravel"></a>

Use `ServerlessLaravel` to create the serverless Laravel resource.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new ServerlessLaravel(scope: Construct, id: string, props: ServerlessLaravelProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ServerlessLaravelProps](#cdk-serverless-lamp-serverlesslaravelprops)</code>)  *No description*
  * **brefLayerVersion** (<code>string</code>)  AWS Lambda layer version from the Bref runtime. 
  * **databaseConfig** (<code>[DatabaseConfig](#cdk-serverless-lamp-databaseconfig)</code>)  Database configurations. __*Optional*__
  * **handler** (<code>[aws_lambda.IFunction](#aws-cdk-lib-aws-lambda-ifunction)</code>)  custom lambda function for the API. __*Default*__: A Lambda function with Lavavel and Bref support will be created
  * **lambdaCodePath** (<code>string</code>)  custom lambda code asset path. __*Default*__: DEFAULT_LAMBDA_ASSET_PATH
  * **rdsProxy** (<code>[aws_rds.IDatabaseProxy](#aws-cdk-lib-aws-rds-idatabaseproxy)</code>)  RDS Proxy for the Lambda function. __*Default*__: no db proxy
  * **vpc** (<code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code>)  The VPC for this stack. __*Optional*__
  * **laravelPath** (<code>string</code>)  path to your local laravel directory with bref. 




## struct DatabaseConfig  <a id="cdk-serverless-lamp-databaseconfig"></a>






Name | Type | Description 
-----|------|-------------
**writerEndpoint** | <code>string</code> | The DB writer endpoint.
**masterUserName**? | <code>string</code> | The DB master username.<br/>__*Optional*__
**masterUserPasswordSecret**? | <code>[aws_secretsmanager.ISecret](#aws-cdk-lib-aws-secretsmanager-isecret)</code> | The DB master password secret.<br/>__*Optional*__
**readerEndpoint**? | <code>string</code> | The DB reader endpoint.<br/>__*Optional*__



## struct DatabaseProps  <a id="cdk-serverless-lamp-databaseprops"></a>






Name | Type | Description 
-----|------|-------------
**vpc** | <code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code> | The VPC for the DatabaseCluster.
**engine**? | <code>[aws_rds.IClusterEngine](#aws-cdk-lib-aws-rds-iclusterengine)</code> | database cluster engine.<br/>__*Default*__: AURORA_MYSQL
**instanceCapacity**? | <code>number</code> | How many replicas/instances to create.<br/>__*Default*__: 1
**instanceType**? | <code>[aws_ec2.InstanceType](#aws-cdk-lib-aws-ec2-instancetype)</code> | instance type of the cluster.<br/>__*Default*__: t3.medium (or, more precisely, db.t3.medium)
**masterUserName**? | <code>string</code> | master username.<br/>__*Default*__: admin
**rdsProxy**? | <code>boolean</code> | enable the Amazon RDS proxy.<br/>__*Default*__: true
**rdsProxyOptions**? | <code>[aws_rds.DatabaseProxyOptions](#aws-cdk-lib-aws-rds-databaseproxyoptions)</code> | RDS Proxy Options.<br/>__*Optional*__
**vpcSubnets**? | <code>[aws_ec2.SubnetSelection](#aws-cdk-lib-aws-ec2-subnetselection)</code> | List of subnets to use when creating subnet group.<br/>__*Optional*__



## struct ServerlessApiProps  <a id="cdk-serverless-lamp-serverlessapiprops"></a>


Construct properties for `ServerlessApi`.



Name | Type | Description 
-----|------|-------------
**brefLayerVersion** | <code>string</code> | AWS Lambda layer version from the Bref runtime.
**databaseConfig**? | <code>[DatabaseConfig](#cdk-serverless-lamp-databaseconfig)</code> | Database configurations.<br/>__*Optional*__
**handler**? | <code>[aws_lambda.IFunction](#aws-cdk-lib-aws-lambda-ifunction)</code> | custom lambda function for the API.<br/>__*Default*__: A Lambda function with Lavavel and Bref support will be created
**lambdaCodePath**? | <code>string</code> | custom lambda code asset path.<br/>__*Default*__: DEFAULT_LAMBDA_ASSET_PATH
**rdsProxy**? | <code>[aws_rds.IDatabaseProxy](#aws-cdk-lib-aws-rds-idatabaseproxy)</code> | RDS Proxy for the Lambda function.<br/>__*Default*__: no db proxy
**vpc**? | <code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code> | The VPC for this stack.<br/>__*Optional*__



## struct ServerlessLaravelProps  <a id="cdk-serverless-lamp-serverlesslaravelprops"></a>


Construct properties for `ServerlessLaravel`.



Name | Type | Description 
-----|------|-------------
**brefLayerVersion** | <code>string</code> | AWS Lambda layer version from the Bref runtime.
**laravelPath** | <code>string</code> | path to your local laravel directory with bref.
**databaseConfig**? | <code>[DatabaseConfig](#cdk-serverless-lamp-databaseconfig)</code> | Database configurations.<br/>__*Optional*__
**handler**? | <code>[aws_lambda.IFunction](#aws-cdk-lib-aws-lambda-ifunction)</code> | custom lambda function for the API.<br/>__*Default*__: A Lambda function with Lavavel and Bref support will be created
**lambdaCodePath**? | <code>string</code> | custom lambda code asset path.<br/>__*Default*__: DEFAULT_LAMBDA_ASSET_PATH
**rdsProxy**? | <code>[aws_rds.IDatabaseProxy](#aws-cdk-lib-aws-rds-idatabaseproxy)</code> | RDS Proxy for the Lambda function.<br/>__*Default*__: no db proxy
**vpc**? | <code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code> | The VPC for this stack.<br/>__*Optional*__



