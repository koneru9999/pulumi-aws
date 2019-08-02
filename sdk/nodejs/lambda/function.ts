// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {ARN} from "../index";

/**
 * Provides a Lambda Function resource. Lambda allows you to trigger execution of code in response to events in AWS. The Lambda Function itself includes source code and runtime configuration.
 * 
 * For information about Lambda and how to use it, see [What is AWS Lambda?][1]
 * 
 * ## Example Usage
 * 
 * ### Basic Example
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const iamForLambda = new aws.iam.Role("iam_for_lambda", {
 *     assumeRolePolicy: `{
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Action": "sts:AssumeRole",
 *       "Principal": {
 *         "Service": "lambda.amazonaws.com"
 *       },
 *       "Effect": "Allow",
 *       "Sid": ""
 *     }
 *   ]
 * }
 * `,
 * });
 * const testLambda = new aws.lambda.Function("test_lambda", {
 *     environment: {
 *         variables: {
 *             foo: "bar",
 *         },
 *     },
 *     code: new pulumi.asset.FileArchive("lambda_function_payload.zip"),
 *     handler: "exports.test",
 *     role: iamForLambda.arn,
 *     runtime: "nodejs8.10",
 * });
 * ```
 * 
 * ### Lambda Layers
 * 
 * > **NOTE:** The `aws_lambda_layer_version` attribute values for `arn` and `layer_arn` were swapped in version 2.0.0 of the this provider AWS Provider. For version 1.x, use `layer_arn` references. For version 2.x, use `arn` references.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const exampleLayerVersion = new aws.lambda.LayerVersion("example", {});
 * const exampleFunction = new aws.lambda.Function("example", {
 *     // ... other configuration ...
 *     layers: [exampleLayerVersion.arn],
 * });
 * ```
 * 
 * ## Specifying the Deployment Package
 * 
 * AWS Lambda expects source code to be provided as a deployment package whose structure varies depending on which `runtime` is in use.
 * See [Runtimes][6] for the valid values of `runtime`. The expected structure of the deployment package can be found in
 * [the AWS Lambda documentation for each runtime][8].
 * 
 * Once you have created your deployment package you can specify it either directly as a local file (using the `filename` argument) or
 * indirectly via Amazon S3 (using the `s3_bucket`, `s3_key` and `s3_object_version` arguments). When providing the deployment
 * package via S3 it may be useful to use the `aws_s3_bucket_object` resource to upload it.
 * 
 * For larger deployment packages it is recommended by Amazon to upload via S3, since the S3 API has better support for uploading
 * large files efficiently.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/lambda_function.html.markdown.
 */
export class Function extends pulumi.CustomResource {
    /**
     * Get an existing Function resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FunctionState, opts?: pulumi.CustomResourceOptions): Function {
        return new Function(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:lambda/function:Function';

    /**
     * Returns true if the given object is an instance of Function.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Function {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Function.__pulumiType;
    }

    /**
     * The Amazon Resource Name (ARN) identifying your Lambda Function.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Nested block to configure the function's *dead letter queue*. See details below.
     */
    public readonly deadLetterConfig!: pulumi.Output<{ targetArn: string } | undefined>;
    /**
     * Description of what your Lambda Function does.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The Lambda environment's configuration settings. Fields documented below.
     */
    public readonly environment!: pulumi.Output<{ variables?: {[key: string]: string} } | undefined>;
    /**
     * The path to the function's deployment package within the local filesystem. If defined, The `s3_`-prefixed options cannot be used.
     */
    public readonly code!: pulumi.Output<pulumi.asset.Archive | undefined>;
    /**
     * A unique name for your Lambda Function.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The function [entrypoint][3] in your code.
     */
    public readonly handler!: pulumi.Output<string>;
    /**
     * The ARN to be used for invoking Lambda Function from API Gateway - to be used in [`aws_api_gateway_integration`](https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html)'s `uri`
     */
    public /*out*/ readonly invokeArn!: pulumi.Output<string>;
    /**
     * The ARN for the KMS encryption key.
     */
    public readonly kmsKeyArn!: pulumi.Output<string | undefined>;
    /**
     * The date this resource was last modified.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers][10]
     */
    public readonly layers!: pulumi.Output<string[] | undefined>;
    /**
     * Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits][5]
     */
    public readonly memorySize!: pulumi.Output<number | undefined>;
    /**
     * Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.
     */
    public readonly publish!: pulumi.Output<boolean | undefined>;
    /**
     * The Amazon Resource Name (ARN) identifying your Lambda Function Version
     * (if versioning is enabled via `publish = true`).
     */
    public /*out*/ readonly qualifiedArn!: pulumi.Output<string>;
    /**
     * The amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency][9]
     */
    public readonly reservedConcurrentExecutions!: pulumi.Output<number | undefined>;
    /**
     * IAM role attached to the Lambda Function. This governs both who / what can invoke your Lambda Function, as well as what resources our Lambda Function has access to. See [Lambda Permission Model][4] for more details.
     */
    public readonly role!: pulumi.Output<ARN>;
    /**
     * See [Runtimes][6] for valid values.
     */
    public readonly runtime!: pulumi.Output<string>;
    /**
     * The S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function.
     */
    public readonly s3Bucket!: pulumi.Output<string | undefined>;
    /**
     * The S3 key of an object containing the function's deployment package. Conflicts with `filename`.
     */
    public readonly s3Key!: pulumi.Output<string | undefined>;
    /**
     * The object version containing the function's deployment package. Conflicts with `filename`.
     */
    public readonly s3ObjectVersion!: pulumi.Output<string | undefined>;
    /**
     * Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`. The usual way to set this is `filebase64sha256("file.zip")` (this provider 0.11.12 and later) or `base64sha256(file("file.zip"))` (this provider 0.11.11 and earlier), where "file.zip" is the local filename of the lambda function source archive.
     */
    public readonly sourceCodeHash!: pulumi.Output<string>;
    /**
     * The size in bytes of the function .zip file.
     */
    public /*out*/ readonly sourceCodeSize!: pulumi.Output<number>;
    /**
     * A mapping of tags to assign to the object.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits][5]
     */
    public readonly timeout!: pulumi.Output<number | undefined>;
    public readonly tracingConfig!: pulumi.Output<{ mode: string }>;
    /**
     * Latest published version of your Lambda Function.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;
    /**
     * Provide this to allow your function to access your VPC. Fields documented below. See [Lambda in VPC][7]
     */
    public readonly vpcConfig!: pulumi.Output<{ securityGroupIds: string[], subnetIds: string[], vpcId: string } | undefined>;

    /**
     * Create a Function resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FunctionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FunctionArgs | FunctionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FunctionState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["deadLetterConfig"] = state ? state.deadLetterConfig : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["environment"] = state ? state.environment : undefined;
            inputs["code"] = state ? state.code : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["handler"] = state ? state.handler : undefined;
            inputs["invokeArn"] = state ? state.invokeArn : undefined;
            inputs["kmsKeyArn"] = state ? state.kmsKeyArn : undefined;
            inputs["lastModified"] = state ? state.lastModified : undefined;
            inputs["layers"] = state ? state.layers : undefined;
            inputs["memorySize"] = state ? state.memorySize : undefined;
            inputs["publish"] = state ? state.publish : undefined;
            inputs["qualifiedArn"] = state ? state.qualifiedArn : undefined;
            inputs["reservedConcurrentExecutions"] = state ? state.reservedConcurrentExecutions : undefined;
            inputs["role"] = state ? state.role : undefined;
            inputs["runtime"] = state ? state.runtime : undefined;
            inputs["s3Bucket"] = state ? state.s3Bucket : undefined;
            inputs["s3Key"] = state ? state.s3Key : undefined;
            inputs["s3ObjectVersion"] = state ? state.s3ObjectVersion : undefined;
            inputs["sourceCodeHash"] = state ? state.sourceCodeHash : undefined;
            inputs["sourceCodeSize"] = state ? state.sourceCodeSize : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["timeout"] = state ? state.timeout : undefined;
            inputs["tracingConfig"] = state ? state.tracingConfig : undefined;
            inputs["version"] = state ? state.version : undefined;
            inputs["vpcConfig"] = state ? state.vpcConfig : undefined;
        } else {
            const args = argsOrState as FunctionArgs | undefined;
            if (!args || args.handler === undefined) {
                throw new Error("Missing required property 'handler'");
            }
            if (!args || args.role === undefined) {
                throw new Error("Missing required property 'role'");
            }
            if (!args || args.runtime === undefined) {
                throw new Error("Missing required property 'runtime'");
            }
            inputs["deadLetterConfig"] = args ? args.deadLetterConfig : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["environment"] = args ? args.environment : undefined;
            inputs["code"] = args ? args.code : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["handler"] = args ? args.handler : undefined;
            inputs["kmsKeyArn"] = args ? args.kmsKeyArn : undefined;
            inputs["layers"] = args ? args.layers : undefined;
            inputs["memorySize"] = args ? args.memorySize : undefined;
            inputs["publish"] = args ? args.publish : undefined;
            inputs["reservedConcurrentExecutions"] = args ? args.reservedConcurrentExecutions : undefined;
            inputs["role"] = args ? args.role : undefined;
            inputs["runtime"] = args ? args.runtime : undefined;
            inputs["s3Bucket"] = args ? args.s3Bucket : undefined;
            inputs["s3Key"] = args ? args.s3Key : undefined;
            inputs["s3ObjectVersion"] = args ? args.s3ObjectVersion : undefined;
            inputs["sourceCodeHash"] = args ? args.sourceCodeHash : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["timeout"] = args ? args.timeout : undefined;
            inputs["tracingConfig"] = args ? args.tracingConfig : undefined;
            inputs["vpcConfig"] = args ? args.vpcConfig : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["invokeArn"] = undefined /*out*/;
            inputs["lastModified"] = undefined /*out*/;
            inputs["qualifiedArn"] = undefined /*out*/;
            inputs["sourceCodeSize"] = undefined /*out*/;
            inputs["version"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Function.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Function resources.
 */
export interface FunctionState {
    /**
     * The Amazon Resource Name (ARN) identifying your Lambda Function.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Nested block to configure the function's *dead letter queue*. See details below.
     */
    readonly deadLetterConfig?: pulumi.Input<{ targetArn: pulumi.Input<string> }>;
    /**
     * Description of what your Lambda Function does.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The Lambda environment's configuration settings. Fields documented below.
     */
    readonly environment?: pulumi.Input<{ variables?: pulumi.Input<{[key: string]: pulumi.Input<string>}> }>;
    /**
     * The path to the function's deployment package within the local filesystem. If defined, The `s3_`-prefixed options cannot be used.
     */
    readonly code?: pulumi.Input<pulumi.asset.Archive>;
    /**
     * A unique name for your Lambda Function.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The function [entrypoint][3] in your code.
     */
    readonly handler?: pulumi.Input<string>;
    /**
     * The ARN to be used for invoking Lambda Function from API Gateway - to be used in [`aws_api_gateway_integration`](https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html)'s `uri`
     */
    readonly invokeArn?: pulumi.Input<string>;
    /**
     * The ARN for the KMS encryption key.
     */
    readonly kmsKeyArn?: pulumi.Input<string>;
    /**
     * The date this resource was last modified.
     */
    readonly lastModified?: pulumi.Input<string>;
    /**
     * List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers][10]
     */
    readonly layers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits][5]
     */
    readonly memorySize?: pulumi.Input<number>;
    /**
     * Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.
     */
    readonly publish?: pulumi.Input<boolean>;
    /**
     * The Amazon Resource Name (ARN) identifying your Lambda Function Version
     * (if versioning is enabled via `publish = true`).
     */
    readonly qualifiedArn?: pulumi.Input<string>;
    /**
     * The amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency][9]
     */
    readonly reservedConcurrentExecutions?: pulumi.Input<number>;
    /**
     * IAM role attached to the Lambda Function. This governs both who / what can invoke your Lambda Function, as well as what resources our Lambda Function has access to. See [Lambda Permission Model][4] for more details.
     */
    readonly role?: pulumi.Input<ARN>;
    /**
     * See [Runtimes][6] for valid values.
     */
    readonly runtime?: pulumi.Input<string>;
    /**
     * The S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function.
     */
    readonly s3Bucket?: pulumi.Input<string>;
    /**
     * The S3 key of an object containing the function's deployment package. Conflicts with `filename`.
     */
    readonly s3Key?: pulumi.Input<string>;
    /**
     * The object version containing the function's deployment package. Conflicts with `filename`.
     */
    readonly s3ObjectVersion?: pulumi.Input<string>;
    /**
     * Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`. The usual way to set this is `filebase64sha256("file.zip")` (this provider 0.11.12 and later) or `base64sha256(file("file.zip"))` (this provider 0.11.11 and earlier), where "file.zip" is the local filename of the lambda function source archive.
     */
    readonly sourceCodeHash?: pulumi.Input<string>;
    /**
     * The size in bytes of the function .zip file.
     */
    readonly sourceCodeSize?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the object.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits][5]
     */
    readonly timeout?: pulumi.Input<number>;
    readonly tracingConfig?: pulumi.Input<{ mode: pulumi.Input<string> }>;
    /**
     * Latest published version of your Lambda Function.
     */
    readonly version?: pulumi.Input<string>;
    /**
     * Provide this to allow your function to access your VPC. Fields documented below. See [Lambda in VPC][7]
     */
    readonly vpcConfig?: pulumi.Input<{ securityGroupIds: pulumi.Input<pulumi.Input<string>[]>, subnetIds: pulumi.Input<pulumi.Input<string>[]>, vpcId?: pulumi.Input<string> }>;
}

/**
 * The set of arguments for constructing a Function resource.
 */
export interface FunctionArgs {
    /**
     * Nested block to configure the function's *dead letter queue*. See details below.
     */
    readonly deadLetterConfig?: pulumi.Input<{ targetArn: pulumi.Input<string> }>;
    /**
     * Description of what your Lambda Function does.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The Lambda environment's configuration settings. Fields documented below.
     */
    readonly environment?: pulumi.Input<{ variables?: pulumi.Input<{[key: string]: pulumi.Input<string>}> }>;
    /**
     * The path to the function's deployment package within the local filesystem. If defined, The `s3_`-prefixed options cannot be used.
     */
    readonly code?: pulumi.Input<pulumi.asset.Archive>;
    /**
     * A unique name for your Lambda Function.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The function [entrypoint][3] in your code.
     */
    readonly handler: pulumi.Input<string>;
    /**
     * The ARN for the KMS encryption key.
     */
    readonly kmsKeyArn?: pulumi.Input<string>;
    /**
     * List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers][10]
     */
    readonly layers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits][5]
     */
    readonly memorySize?: pulumi.Input<number>;
    /**
     * Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.
     */
    readonly publish?: pulumi.Input<boolean>;
    /**
     * The amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency][9]
     */
    readonly reservedConcurrentExecutions?: pulumi.Input<number>;
    /**
     * IAM role attached to the Lambda Function. This governs both who / what can invoke your Lambda Function, as well as what resources our Lambda Function has access to. See [Lambda Permission Model][4] for more details.
     */
    readonly role: pulumi.Input<ARN>;
    /**
     * See [Runtimes][6] for valid values.
     */
    readonly runtime: pulumi.Input<string>;
    /**
     * The S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function.
     */
    readonly s3Bucket?: pulumi.Input<string>;
    /**
     * The S3 key of an object containing the function's deployment package. Conflicts with `filename`.
     */
    readonly s3Key?: pulumi.Input<string>;
    /**
     * The object version containing the function's deployment package. Conflicts with `filename`.
     */
    readonly s3ObjectVersion?: pulumi.Input<string>;
    /**
     * Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`. The usual way to set this is `filebase64sha256("file.zip")` (this provider 0.11.12 and later) or `base64sha256(file("file.zip"))` (this provider 0.11.11 and earlier), where "file.zip" is the local filename of the lambda function source archive.
     */
    readonly sourceCodeHash?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the object.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits][5]
     */
    readonly timeout?: pulumi.Input<number>;
    readonly tracingConfig?: pulumi.Input<{ mode: pulumi.Input<string> }>;
    /**
     * Provide this to allow your function to access your VPC. Fields documented below. See [Lambda in VPC][7]
     */
    readonly vpcConfig?: pulumi.Input<{ securityGroupIds: pulumi.Input<pulumi.Input<string>[]>, subnetIds: pulumi.Input<pulumi.Input<string>[]>, vpcId?: pulumi.Input<string> }>;
}
