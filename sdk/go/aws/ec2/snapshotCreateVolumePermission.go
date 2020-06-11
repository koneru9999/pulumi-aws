// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ec2

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Adds permission to create volumes off of a given EBS Snapshot.
//
// ## Example Usage
//
//
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/ebs"
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/ec2"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		example, err := ebs.NewVolume(ctx, "example", &ebs.VolumeArgs{
// 			AvailabilityZone: pulumi.String("us-west-2a"),
// 			Size:             pulumi.Int(40),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleSnapshot, err := ebs.NewSnapshot(ctx, "exampleSnapshot", &ebs.SnapshotArgs{
// 			VolumeId: example.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		examplePerm, err := ec2.NewSnapshotCreateVolumePermission(ctx, "examplePerm", &ec2.SnapshotCreateVolumePermissionArgs{
// 			AccountId:  pulumi.String("12345678"),
// 			SnapshotId: exampleSnapshot.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type SnapshotCreateVolumePermission struct {
	pulumi.CustomResourceState

	// An AWS Account ID to add create volume permissions
	AccountId pulumi.StringOutput `pulumi:"accountId"`
	// A snapshot ID
	SnapshotId pulumi.StringOutput `pulumi:"snapshotId"`
}

// NewSnapshotCreateVolumePermission registers a new resource with the given unique name, arguments, and options.
func NewSnapshotCreateVolumePermission(ctx *pulumi.Context,
	name string, args *SnapshotCreateVolumePermissionArgs, opts ...pulumi.ResourceOption) (*SnapshotCreateVolumePermission, error) {
	if args == nil || args.AccountId == nil {
		return nil, errors.New("missing required argument 'AccountId'")
	}
	if args == nil || args.SnapshotId == nil {
		return nil, errors.New("missing required argument 'SnapshotId'")
	}
	if args == nil {
		args = &SnapshotCreateVolumePermissionArgs{}
	}
	var resource SnapshotCreateVolumePermission
	err := ctx.RegisterResource("aws:ec2/snapshotCreateVolumePermission:SnapshotCreateVolumePermission", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSnapshotCreateVolumePermission gets an existing SnapshotCreateVolumePermission resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSnapshotCreateVolumePermission(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SnapshotCreateVolumePermissionState, opts ...pulumi.ResourceOption) (*SnapshotCreateVolumePermission, error) {
	var resource SnapshotCreateVolumePermission
	err := ctx.ReadResource("aws:ec2/snapshotCreateVolumePermission:SnapshotCreateVolumePermission", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SnapshotCreateVolumePermission resources.
type snapshotCreateVolumePermissionState struct {
	// An AWS Account ID to add create volume permissions
	AccountId *string `pulumi:"accountId"`
	// A snapshot ID
	SnapshotId *string `pulumi:"snapshotId"`
}

type SnapshotCreateVolumePermissionState struct {
	// An AWS Account ID to add create volume permissions
	AccountId pulumi.StringPtrInput
	// A snapshot ID
	SnapshotId pulumi.StringPtrInput
}

func (SnapshotCreateVolumePermissionState) ElementType() reflect.Type {
	return reflect.TypeOf((*snapshotCreateVolumePermissionState)(nil)).Elem()
}

type snapshotCreateVolumePermissionArgs struct {
	// An AWS Account ID to add create volume permissions
	AccountId string `pulumi:"accountId"`
	// A snapshot ID
	SnapshotId string `pulumi:"snapshotId"`
}

// The set of arguments for constructing a SnapshotCreateVolumePermission resource.
type SnapshotCreateVolumePermissionArgs struct {
	// An AWS Account ID to add create volume permissions
	AccountId pulumi.StringInput
	// A snapshot ID
	SnapshotId pulumi.StringInput
}

func (SnapshotCreateVolumePermissionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*snapshotCreateVolumePermissionArgs)(nil)).Elem()
}
