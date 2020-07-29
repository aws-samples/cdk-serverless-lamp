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
[DatabaseProps](#cdk-serverless-lamp-databaseprops)|*No description*
[ServerlessApiProps](#cdk-serverless-lamp-serverlessapiprops)|Construct properties for `ServerlessApi`.
[ServerlessLaravelProps](#cdk-serverless-lamp-serverlesslaravelprops)|Construct properties for `ServerlessLaravel`.



## class DatabaseCluster 🔹 <a id="cdk-serverless-lamp-databasecluster"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new DatabaseCluster(scope: Construct, id: string, props: DatabaseProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[DatabaseProps](#cdk-serverless-lamp-databaseprops)</code>)  *No description*
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  The VPC for the DatabaseCluster. 
  * **engine** (<code>[IClusterEngine](#aws-cdk-aws-rds-iclusterengine)</code>)  database cluster engine. __*Default*__: AURORA_MYSQL
  * **instanceType** (<code>[InstanceType](#aws-cdk-aws-ec2-instancetype)</code>)  instance type of the cluster. __*Default*__: t3.medium (or, more precisely, db.t3.medium)
  * **masterUserName** (<code>string</code>)  master username. __*Default*__: admin
  * **rdsProxy** (<code>boolean</code>)  enable the Amazon RDS proxy. __*Default*__: true




## class ServerlessApi 🔹 <a id="cdk-serverless-lamp-serverlessapi"></a>

Use `ServerlessApi` to create the serverless API resource.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new ServerlessApi(scope: Construct, id: string, props: ServerlessApiProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ServerlessApiProps](#cdk-serverless-lamp-serverlessapiprops)</code>)  *No description*
  * **brefLayerVersion** (<code>string</code>)  AWS Lambda layer version from the Bref runtime. 
  * **handler** (<code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code>)  custom lambda function for the API. __*Default*__: A Lambda function with Lavavel and Bref support will be created
  * **lambdaCodePath** (<code>string</code>)  custom lambda code asset path. __*Default*__: DEFAULT_LAMBDA_ASSET_PATH
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  The VPC for this stack. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**handler**🔹 | <code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code> | <span></span>
**vpc**🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | <span></span>



## class ServerlessLaravel 🔹 <a id="cdk-serverless-lamp-serverlesslaravel"></a>

Use `ServerlessLaravel` to create the serverless Laravel resource.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [ServerlessApi](#cdk-serverless-lamp-serverlessapi)

### Initializer




```ts
new ServerlessLaravel(scope: Construct, id: string, props: ServerlessLaravelProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ServerlessLaravelProps](#cdk-serverless-lamp-serverlesslaravelprops)</code>)  *No description*
  * **brefLayerVersion** (<code>string</code>)  AWS Lambda layer version from the Bref runtime. 
  * **handler** (<code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code>)  custom lambda function for the API. __*Default*__: A Lambda function with Lavavel and Bref support will be created
  * **lambdaCodePath** (<code>string</code>)  custom lambda code asset path. __*Default*__: DEFAULT_LAMBDA_ASSET_PATH
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  The VPC for this stack. __*Optional*__
  * **laravelPath** (<code>string</code>)  path to your local laravel directory with bref. 




## struct DatabaseProps 🔹 <a id="cdk-serverless-lamp-databaseprops"></a>






Name | Type | Description 
-----|------|-------------
**vpc**🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | The VPC for the DatabaseCluster.
**engine**?🔹 | <code>[IClusterEngine](#aws-cdk-aws-rds-iclusterengine)</code> | database cluster engine.<br/>__*Default*__: AURORA_MYSQL
**instanceType**?🔹 | <code>[InstanceType](#aws-cdk-aws-ec2-instancetype)</code> | instance type of the cluster.<br/>__*Default*__: t3.medium (or, more precisely, db.t3.medium)
**masterUserName**?🔹 | <code>string</code> | master username.<br/>__*Default*__: admin
**rdsProxy**?🔹 | <code>boolean</code> | enable the Amazon RDS proxy.<br/>__*Default*__: true



## struct ServerlessApiProps 🔹 <a id="cdk-serverless-lamp-serverlessapiprops"></a>


Construct properties for `ServerlessApi`.



Name | Type | Description 
-----|------|-------------
**brefLayerVersion**🔹 | <code>string</code> | AWS Lambda layer version from the Bref runtime.
**handler**?🔹 | <code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code> | custom lambda function for the API.<br/>__*Default*__: A Lambda function with Lavavel and Bref support will be created
**lambdaCodePath**?🔹 | <code>string</code> | custom lambda code asset path.<br/>__*Default*__: DEFAULT_LAMBDA_ASSET_PATH
**vpc**?🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | The VPC for this stack.<br/>__*Optional*__



## struct ServerlessLaravelProps 🔹 <a id="cdk-serverless-lamp-serverlesslaravelprops"></a>


Construct properties for `ServerlessLaravel`.



Name | Type | Description 
-----|------|-------------
**brefLayerVersion**🔹 | <code>string</code> | AWS Lambda layer version from the Bref runtime.
**laravelPath**🔹 | <code>string</code> | path to your local laravel directory with bref.
**handler**?🔹 | <code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code> | custom lambda function for the API.<br/>__*Default*__: A Lambda function with Lavavel and Bref support will be created
**lambdaCodePath**?🔹 | <code>string</code> | custom lambda code asset path.<br/>__*Default*__: DEFAULT_LAMBDA_ASSET_PATH
**vpc**?🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | The VPC for this stack.<br/>__*Optional*__



