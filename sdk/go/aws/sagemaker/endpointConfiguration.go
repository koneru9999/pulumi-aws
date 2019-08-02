// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package sagemaker

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a SageMaker endpoint configuration resource.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/sagemaker_endpoint_configuration.html.markdown.
type EndpointConfiguration struct {
	s *pulumi.ResourceState
}

// NewEndpointConfiguration registers a new resource with the given unique name, arguments, and options.
func NewEndpointConfiguration(ctx *pulumi.Context,
	name string, args *EndpointConfigurationArgs, opts ...pulumi.ResourceOpt) (*EndpointConfiguration, error) {
	if args == nil || args.ProductionVariants == nil {
		return nil, errors.New("missing required argument 'ProductionVariants'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["kmsKeyArn"] = nil
		inputs["name"] = nil
		inputs["productionVariants"] = nil
		inputs["tags"] = nil
	} else {
		inputs["kmsKeyArn"] = args.KmsKeyArn
		inputs["name"] = args.Name
		inputs["productionVariants"] = args.ProductionVariants
		inputs["tags"] = args.Tags
	}
	inputs["arn"] = nil
	s, err := ctx.RegisterResource("aws:sagemaker/endpointConfiguration:EndpointConfiguration", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EndpointConfiguration{s: s}, nil
}

// GetEndpointConfiguration gets an existing EndpointConfiguration resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEndpointConfiguration(ctx *pulumi.Context,
	name string, id pulumi.ID, state *EndpointConfigurationState, opts ...pulumi.ResourceOpt) (*EndpointConfiguration, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["arn"] = state.Arn
		inputs["kmsKeyArn"] = state.KmsKeyArn
		inputs["name"] = state.Name
		inputs["productionVariants"] = state.ProductionVariants
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("aws:sagemaker/endpointConfiguration:EndpointConfiguration", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EndpointConfiguration{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *EndpointConfiguration) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *EndpointConfiguration) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The Amazon Resource Name (ARN) assigned by AWS to this endpoint configuration.
func (r *EndpointConfiguration) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
func (r *EndpointConfiguration) KmsKeyArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["kmsKeyArn"])
}

// The name of the endpoint configuration. If omitted, this provider will assign a random, unique name.
func (r *EndpointConfiguration) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Fields are documented below.
func (r *EndpointConfiguration) ProductionVariants() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["productionVariants"])
}

// A mapping of tags to assign to the resource.
func (r *EndpointConfiguration) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering EndpointConfiguration resources.
type EndpointConfigurationState struct {
	// The Amazon Resource Name (ARN) assigned by AWS to this endpoint configuration.
	Arn interface{}
	// Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
	KmsKeyArn interface{}
	// The name of the endpoint configuration. If omitted, this provider will assign a random, unique name.
	Name interface{}
	// Fields are documented below.
	ProductionVariants interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a EndpointConfiguration resource.
type EndpointConfigurationArgs struct {
	// Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
	KmsKeyArn interface{}
	// The name of the endpoint configuration. If omitted, this provider will assign a random, unique name.
	Name interface{}
	// Fields are documented below.
	ProductionVariants interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
