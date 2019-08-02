// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ebs

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a resource to manage whether default EBS encryption is enabled for your AWS account in the current AWS region. To manage the default KMS key for the region, see the [`aws_ebs_default_kms_key` resource](https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key.html).
// 
// > **NOTE:** Removing this resource disables default EBS encryption.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ebs_encryption_by_default.html.markdown.
type EncryptionByDefault struct {
	s *pulumi.ResourceState
}

// NewEncryptionByDefault registers a new resource with the given unique name, arguments, and options.
func NewEncryptionByDefault(ctx *pulumi.Context,
	name string, args *EncryptionByDefaultArgs, opts ...pulumi.ResourceOpt) (*EncryptionByDefault, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["enabled"] = nil
	} else {
		inputs["enabled"] = args.Enabled
	}
	s, err := ctx.RegisterResource("aws:ebs/encryptionByDefault:EncryptionByDefault", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EncryptionByDefault{s: s}, nil
}

// GetEncryptionByDefault gets an existing EncryptionByDefault resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEncryptionByDefault(ctx *pulumi.Context,
	name string, id pulumi.ID, state *EncryptionByDefaultState, opts ...pulumi.ResourceOpt) (*EncryptionByDefault, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["enabled"] = state.Enabled
	}
	s, err := ctx.ReadResource("aws:ebs/encryptionByDefault:EncryptionByDefault", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EncryptionByDefault{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *EncryptionByDefault) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *EncryptionByDefault) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Whether or not default EBS encryption is enabled. Valid values are `true` or `false`. Defaults to `true`.
func (r *EncryptionByDefault) Enabled() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["enabled"])
}

// Input properties used for looking up and filtering EncryptionByDefault resources.
type EncryptionByDefaultState struct {
	// Whether or not default EBS encryption is enabled. Valid values are `true` or `false`. Defaults to `true`.
	Enabled interface{}
}

// The set of arguments for constructing a EncryptionByDefault resource.
type EncryptionByDefaultArgs struct {
	// Whether or not default EBS encryption is enabled. Valid values are `true` or `false`. Defaults to `true`.
	Enabled interface{}
}
