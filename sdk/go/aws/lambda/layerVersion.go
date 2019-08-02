// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package lambda

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Lambda Layer Version resource. Lambda Layers allow you to reuse shared bits of code across multiple lambda functions.
// 
// For information about Lambda Layers and how to use them, see [AWS Lambda Layers][1]
// 
// ## Specifying the Deployment Package
// 
// AWS Lambda Layers expect source code to be provided as a deployment package whose structure varies depending on which `compatible_runtimes` this layer specifies.
// See [Runtimes][2] for the valid values of `compatible_runtimes`.
// 
// Once you have created your deployment package you can specify it either directly as a local file (using the `filename` argument) or
// indirectly via Amazon S3 (using the `s3_bucket`, `s3_key` and `s3_object_version` arguments). When providing the deployment
// package via S3 it may be useful to use the `aws_s3_bucket_object` resource to upload it.
// 
// For larger deployment packages it is recommended by Amazon to upload via S3, since the S3 API has better support for uploading
// large files efficiently.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/lambda_layer_version.html.markdown.
type LayerVersion struct {
	s *pulumi.ResourceState
}

// NewLayerVersion registers a new resource with the given unique name, arguments, and options.
func NewLayerVersion(ctx *pulumi.Context,
	name string, args *LayerVersionArgs, opts ...pulumi.ResourceOpt) (*LayerVersion, error) {
	if args == nil || args.LayerName == nil {
		return nil, errors.New("missing required argument 'LayerName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["compatibleRuntimes"] = nil
		inputs["description"] = nil
		inputs["code"] = nil
		inputs["layerName"] = nil
		inputs["licenseInfo"] = nil
		inputs["s3Bucket"] = nil
		inputs["s3Key"] = nil
		inputs["s3ObjectVersion"] = nil
		inputs["sourceCodeHash"] = nil
	} else {
		inputs["compatibleRuntimes"] = args.CompatibleRuntimes
		inputs["description"] = args.Description
		inputs["code"] = args.Code
		inputs["layerName"] = args.LayerName
		inputs["licenseInfo"] = args.LicenseInfo
		inputs["s3Bucket"] = args.S3Bucket
		inputs["s3Key"] = args.S3Key
		inputs["s3ObjectVersion"] = args.S3ObjectVersion
		inputs["sourceCodeHash"] = args.SourceCodeHash
	}
	inputs["arn"] = nil
	inputs["createdDate"] = nil
	inputs["layerArn"] = nil
	inputs["sourceCodeSize"] = nil
	inputs["version"] = nil
	s, err := ctx.RegisterResource("aws:lambda/layerVersion:LayerVersion", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &LayerVersion{s: s}, nil
}

// GetLayerVersion gets an existing LayerVersion resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLayerVersion(ctx *pulumi.Context,
	name string, id pulumi.ID, state *LayerVersionState, opts ...pulumi.ResourceOpt) (*LayerVersion, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["arn"] = state.Arn
		inputs["compatibleRuntimes"] = state.CompatibleRuntimes
		inputs["createdDate"] = state.CreatedDate
		inputs["description"] = state.Description
		inputs["code"] = state.Code
		inputs["layerArn"] = state.LayerArn
		inputs["layerName"] = state.LayerName
		inputs["licenseInfo"] = state.LicenseInfo
		inputs["s3Bucket"] = state.S3Bucket
		inputs["s3Key"] = state.S3Key
		inputs["s3ObjectVersion"] = state.S3ObjectVersion
		inputs["sourceCodeHash"] = state.SourceCodeHash
		inputs["sourceCodeSize"] = state.SourceCodeSize
		inputs["version"] = state.Version
	}
	s, err := ctx.ReadResource("aws:lambda/layerVersion:LayerVersion", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &LayerVersion{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *LayerVersion) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *LayerVersion) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The Amazon Resource Name (ARN) of the Lambda Layer with version.
func (r *LayerVersion) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// A list of [Runtimes][2] this layer is compatible with. Up to 5 runtimes can be specified.
func (r *LayerVersion) CompatibleRuntimes() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["compatibleRuntimes"])
}

// The date this resource was created.
func (r *LayerVersion) CreatedDate() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["createdDate"])
}

// Description of what your Lambda Layer does.
func (r *LayerVersion) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// The path to the function's deployment package within the local filesystem. If defined, The `s3_`-prefixed options cannot be used.
func (r *LayerVersion) Code() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["code"])
}

// The Amazon Resource Name (ARN) of the Lambda Layer without version.
func (r *LayerVersion) LayerArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["layerArn"])
}

// A unique name for your Lambda Layer
func (r *LayerVersion) LayerName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["layerName"])
}

// License info for your Lambda Layer. See [License Info][3].
func (r *LayerVersion) LicenseInfo() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["licenseInfo"])
}

// The S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function.
func (r *LayerVersion) S3Bucket() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["s3Bucket"])
}

// The S3 key of an object containing the function's deployment package. Conflicts with `filename`.
func (r *LayerVersion) S3Key() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["s3Key"])
}

// The object version containing the function's deployment package. Conflicts with `filename`.
func (r *LayerVersion) S3ObjectVersion() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["s3ObjectVersion"])
}

// Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`. The usual way to set this is `${filebase64sha256("file.zip")}` (this provider 0.11.12 or later) or `${base64sha256(file("file.zip"))}` (this provider 0.11.11 and earlier), where "file.zip" is the local filename of the lambda layer source archive.
func (r *LayerVersion) SourceCodeHash() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sourceCodeHash"])
}

// The size in bytes of the function .zip file.
func (r *LayerVersion) SourceCodeSize() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["sourceCodeSize"])
}

// This Lamba Layer version.
func (r *LayerVersion) Version() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["version"])
}

// Input properties used for looking up and filtering LayerVersion resources.
type LayerVersionState struct {
	// The Amazon Resource Name (ARN) of the Lambda Layer with version.
	Arn interface{}
	// A list of [Runtimes][2] this layer is compatible with. Up to 5 runtimes can be specified.
	CompatibleRuntimes interface{}
	// The date this resource was created.
	CreatedDate interface{}
	// Description of what your Lambda Layer does.
	Description interface{}
	// The path to the function's deployment package within the local filesystem. If defined, The `s3_`-prefixed options cannot be used.
	Code interface{}
	// The Amazon Resource Name (ARN) of the Lambda Layer without version.
	LayerArn interface{}
	// A unique name for your Lambda Layer
	LayerName interface{}
	// License info for your Lambda Layer. See [License Info][3].
	LicenseInfo interface{}
	// The S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function.
	S3Bucket interface{}
	// The S3 key of an object containing the function's deployment package. Conflicts with `filename`.
	S3Key interface{}
	// The object version containing the function's deployment package. Conflicts with `filename`.
	S3ObjectVersion interface{}
	// Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`. The usual way to set this is `${filebase64sha256("file.zip")}` (this provider 0.11.12 or later) or `${base64sha256(file("file.zip"))}` (this provider 0.11.11 and earlier), where "file.zip" is the local filename of the lambda layer source archive.
	SourceCodeHash interface{}
	// The size in bytes of the function .zip file.
	SourceCodeSize interface{}
	// This Lamba Layer version.
	Version interface{}
}

// The set of arguments for constructing a LayerVersion resource.
type LayerVersionArgs struct {
	// A list of [Runtimes][2] this layer is compatible with. Up to 5 runtimes can be specified.
	CompatibleRuntimes interface{}
	// Description of what your Lambda Layer does.
	Description interface{}
	// The path to the function's deployment package within the local filesystem. If defined, The `s3_`-prefixed options cannot be used.
	Code interface{}
	// A unique name for your Lambda Layer
	LayerName interface{}
	// License info for your Lambda Layer. See [License Info][3].
	LicenseInfo interface{}
	// The S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function.
	S3Bucket interface{}
	// The S3 key of an object containing the function's deployment package. Conflicts with `filename`.
	S3Key interface{}
	// The object version containing the function's deployment package. Conflicts with `filename`.
	S3ObjectVersion interface{}
	// Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`. The usual way to set this is `${filebase64sha256("file.zip")}` (this provider 0.11.12 or later) or `${base64sha256(file("file.zip"))}` (this provider 0.11.11 and earlier), where "file.zip" is the local filename of the lambda layer source archive.
	SourceCodeHash interface{}
}
