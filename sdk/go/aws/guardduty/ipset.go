// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package guardduty

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Provides a resource to manage a GuardDuty IPSet.
//
// > **Note:** Currently in GuardDuty, users from member accounts cannot upload and further manage IPSets. IPSets that are uploaded by the master account are imposed on GuardDuty functionality in its member accounts. See the [GuardDuty API Documentation](https://docs.aws.amazon.com/guardduty/latest/ug/create-ip-set.html)
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"fmt"
//
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/guardduty"
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		master, err := guardduty.NewDetector(ctx, "master", &guardduty.DetectorArgs{
// 			Enable: pulumi.Bool(true),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		bucket, err := s3.NewBucket(ctx, "bucket", &s3.BucketArgs{
// 			Acl: pulumi.String("private"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		myIPSetBucketObject, err := s3.NewBucketObject(ctx, "myIPSetBucketObject", &s3.BucketObjectArgs{
// 			Acl:     pulumi.String("public-read"),
// 			Bucket:  bucket.ID(),
// 			Content: pulumi.String(fmt.Sprintf("%v%v", "10.0.0.0/8\n", "\n")),
// 			Key:     pulumi.String("MyIPSet"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = guardduty.NewIPSet(ctx, "myIPSetIPSet", &guardduty.IPSetArgs{
// 			Activate:   pulumi.Bool(true),
// 			DetectorId: master.ID(),
// 			Format:     pulumi.String("TXT"),
// 			Location: pulumi.All(myIPSetBucketObject.Bucket, myIPSetBucketObject.Key).ApplyT(func(_args []interface{}) (string, error) {
// 				bucket := _args[0].(string)
// 				key := _args[1].(string)
// 				return fmt.Sprintf("%v%v%v%v", "https://s3.amazonaws.com/", bucket, "/", key), nil
// 			}).(pulumi.StringOutput),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type IPSet struct {
	pulumi.CustomResourceState

	// Specifies whether GuardDuty is to start using the uploaded IPSet.
	Activate pulumi.BoolOutput `pulumi:"activate"`
	// Amazon Resource Name (ARN) of the GuardDuty IPSet.
	Arn pulumi.StringOutput `pulumi:"arn"`
	// The detector ID of the GuardDuty.
	DetectorId pulumi.StringOutput `pulumi:"detectorId"`
	// The format of the file that contains the IPSet. Valid values: `TXT` | `STIX` | `OTX_CSV` | `ALIEN_VAULT` | `PROOF_POINT` | `FIRE_EYE`
	Format pulumi.StringOutput `pulumi:"format"`
	// The URI of the file that contains the IPSet.
	Location pulumi.StringOutput `pulumi:"location"`
	// The friendly name to identify the IPSet.
	Name pulumi.StringOutput `pulumi:"name"`
	// Key-value map of resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
}

// NewIPSet registers a new resource with the given unique name, arguments, and options.
func NewIPSet(ctx *pulumi.Context,
	name string, args *IPSetArgs, opts ...pulumi.ResourceOption) (*IPSet, error) {
	if args == nil || args.Activate == nil {
		return nil, errors.New("missing required argument 'Activate'")
	}
	if args == nil || args.DetectorId == nil {
		return nil, errors.New("missing required argument 'DetectorId'")
	}
	if args == nil || args.Format == nil {
		return nil, errors.New("missing required argument 'Format'")
	}
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil {
		args = &IPSetArgs{}
	}
	var resource IPSet
	err := ctx.RegisterResource("aws:guardduty/iPSet:IPSet", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetIPSet gets an existing IPSet resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetIPSet(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *IPSetState, opts ...pulumi.ResourceOption) (*IPSet, error) {
	var resource IPSet
	err := ctx.ReadResource("aws:guardduty/iPSet:IPSet", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering IPSet resources.
type ipsetState struct {
	// Specifies whether GuardDuty is to start using the uploaded IPSet.
	Activate *bool `pulumi:"activate"`
	// Amazon Resource Name (ARN) of the GuardDuty IPSet.
	Arn *string `pulumi:"arn"`
	// The detector ID of the GuardDuty.
	DetectorId *string `pulumi:"detectorId"`
	// The format of the file that contains the IPSet. Valid values: `TXT` | `STIX` | `OTX_CSV` | `ALIEN_VAULT` | `PROOF_POINT` | `FIRE_EYE`
	Format *string `pulumi:"format"`
	// The URI of the file that contains the IPSet.
	Location *string `pulumi:"location"`
	// The friendly name to identify the IPSet.
	Name *string `pulumi:"name"`
	// Key-value map of resource tags.
	Tags map[string]string `pulumi:"tags"`
}

type IPSetState struct {
	// Specifies whether GuardDuty is to start using the uploaded IPSet.
	Activate pulumi.BoolPtrInput
	// Amazon Resource Name (ARN) of the GuardDuty IPSet.
	Arn pulumi.StringPtrInput
	// The detector ID of the GuardDuty.
	DetectorId pulumi.StringPtrInput
	// The format of the file that contains the IPSet. Valid values: `TXT` | `STIX` | `OTX_CSV` | `ALIEN_VAULT` | `PROOF_POINT` | `FIRE_EYE`
	Format pulumi.StringPtrInput
	// The URI of the file that contains the IPSet.
	Location pulumi.StringPtrInput
	// The friendly name to identify the IPSet.
	Name pulumi.StringPtrInput
	// Key-value map of resource tags.
	Tags pulumi.StringMapInput
}

func (IPSetState) ElementType() reflect.Type {
	return reflect.TypeOf((*ipsetState)(nil)).Elem()
}

type ipsetArgs struct {
	// Specifies whether GuardDuty is to start using the uploaded IPSet.
	Activate bool `pulumi:"activate"`
	// The detector ID of the GuardDuty.
	DetectorId string `pulumi:"detectorId"`
	// The format of the file that contains the IPSet. Valid values: `TXT` | `STIX` | `OTX_CSV` | `ALIEN_VAULT` | `PROOF_POINT` | `FIRE_EYE`
	Format string `pulumi:"format"`
	// The URI of the file that contains the IPSet.
	Location string `pulumi:"location"`
	// The friendly name to identify the IPSet.
	Name *string `pulumi:"name"`
	// Key-value map of resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a IPSet resource.
type IPSetArgs struct {
	// Specifies whether GuardDuty is to start using the uploaded IPSet.
	Activate pulumi.BoolInput
	// The detector ID of the GuardDuty.
	DetectorId pulumi.StringInput
	// The format of the file that contains the IPSet. Valid values: `TXT` | `STIX` | `OTX_CSV` | `ALIEN_VAULT` | `PROOF_POINT` | `FIRE_EYE`
	Format pulumi.StringInput
	// The URI of the file that contains the IPSet.
	Location pulumi.StringInput
	// The friendly name to identify the IPSet.
	Name pulumi.StringPtrInput
	// Key-value map of resource tags.
	Tags pulumi.StringMapInput
}

func (IPSetArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ipsetArgs)(nil)).Elem()
}
