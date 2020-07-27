# API Reference

**Classes**

Name|Description
----|-----------
[ServerlessApi](#cdk-serverless-lamp-serverlessapi)|Use `ServerlessApi` to create the serverless API resource.
[ServerlessLaravel](#cdk-serverless-lamp-serverlesslaravel)|Use `ServerlessLaravel` to create the serverless Laravel resource.


**Structs**

Name|Description
----|-----------
[ServerlessApiProps](#cdk-serverless-lamp-serverlessapiprops)|Construct properties for `ServerlessApi`.
[ServerlessLaravelProps](#cdk-serverless-lamp-serverlesslaravelprops)|Construct properties for `ServerlessLaravel`.



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



### Properties


Name | Type | Description 
-----|------|-------------
**handler**🔹 | <code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code> | <span></span>



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
  * **laravelPath** (<code>string</code>)  path to your local laravel directory with bref. 




## struct ServerlessApiProps 🔹 <a id="cdk-serverless-lamp-serverlessapiprops"></a>


Construct properties for `ServerlessApi`.



Name | Type | Description 
-----|------|-------------
**brefLayerVersion**🔹 | <code>string</code> | AWS Lambda layer version from the Bref runtime.
**handler**?🔹 | <code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code> | custom lambda function for the API.<br/>__*Default*__: A Lambda function with Lavavel and Bref support will be created
**lambdaCodePath**?🔹 | <code>string</code> | custom lambda code asset path.<br/>__*Default*__: DEFAULT_LAMBDA_ASSET_PATH



## struct ServerlessLaravelProps 🔹 <a id="cdk-serverless-lamp-serverlesslaravelprops"></a>


Construct properties for `ServerlessLaravel`.



Name | Type | Description 
-----|------|-------------
**brefLayerVersion**🔹 | <code>string</code> | AWS Lambda layer version from the Bref runtime.
**laravelPath**🔹 | <code>string</code> | path to your local laravel directory with bref.
**handler**?🔹 | <code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code> | custom lambda function for the API.<br/>__*Default*__: A Lambda function with Lavavel and Bref support will be created
**lambdaCodePath**?🔹 | <code>string</code> | custom lambda code asset path.<br/>__*Default*__: DEFAULT_LAMBDA_ASSET_PATH



