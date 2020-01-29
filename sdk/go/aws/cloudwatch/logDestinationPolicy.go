// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package cloudwatch

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a CloudWatch Logs destination policy resource.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cloudwatch_log_destination_policy.html.markdown.
type LogDestinationPolicy struct {
	pulumi.CustomResourceState

	// The policy document. This is a JSON formatted string.
	AccessPolicy pulumi.StringOutput `pulumi:"accessPolicy"`
	// A name for the subscription filter
	DestinationName pulumi.StringOutput `pulumi:"destinationName"`
}

// NewLogDestinationPolicy registers a new resource with the given unique name, arguments, and options.
func NewLogDestinationPolicy(ctx *pulumi.Context,
	name string, args *LogDestinationPolicyArgs, opts ...pulumi.ResourceOption) (*LogDestinationPolicy, error) {
	if args == nil || args.AccessPolicy == nil {
		return nil, errors.New("missing required argument 'AccessPolicy'")
	}
	if args == nil || args.DestinationName == nil {
		return nil, errors.New("missing required argument 'DestinationName'")
	}
	if args == nil {
		args = &LogDestinationPolicyArgs{}
	}
	var resource LogDestinationPolicy
	err := ctx.RegisterResource("aws:cloudwatch/logDestinationPolicy:LogDestinationPolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetLogDestinationPolicy gets an existing LogDestinationPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLogDestinationPolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *LogDestinationPolicyState, opts ...pulumi.ResourceOption) (*LogDestinationPolicy, error) {
	var resource LogDestinationPolicy
	err := ctx.ReadResource("aws:cloudwatch/logDestinationPolicy:LogDestinationPolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering LogDestinationPolicy resources.
type logDestinationPolicyState struct {
	// The policy document. This is a JSON formatted string.
	AccessPolicy *string `pulumi:"accessPolicy"`
	// A name for the subscription filter
	DestinationName *string `pulumi:"destinationName"`
}

type LogDestinationPolicyState struct {
	// The policy document. This is a JSON formatted string.
	AccessPolicy pulumi.StringPtrInput
	// A name for the subscription filter
	DestinationName pulumi.StringPtrInput
}

func (LogDestinationPolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*logDestinationPolicyState)(nil)).Elem()
}

type logDestinationPolicyArgs struct {
	// The policy document. This is a JSON formatted string.
	AccessPolicy string `pulumi:"accessPolicy"`
	// A name for the subscription filter
	DestinationName string `pulumi:"destinationName"`
}

// The set of arguments for constructing a LogDestinationPolicy resource.
type LogDestinationPolicyArgs struct {
	// The policy document. This is a JSON formatted string.
	AccessPolicy pulumi.StringInput
	// A name for the subscription filter
	DestinationName pulumi.StringInput
}

func (LogDestinationPolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*logDestinationPolicyArgs)(nil)).Elem()
}

