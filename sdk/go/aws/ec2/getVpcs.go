// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ec2

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// This resource can be useful for getting back a list of VPC Ids for a region.
//
// The following example retrieves a list of VPC Ids with a custom tag of `service` set to a value of "production".
//
// ## Example Usage
//
//
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		fooVpcs, err := ec2.LookupVpcs(ctx, &ec2.LookupVpcsArgs{
// 			Tags: map[string]interface{}{
// 				"service": "production",
// 			},
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		ctx.Export("foo", fooVpcs.Ids)
// 		return nil
// 	})
// }
// ```
func GetVpcs(ctx *pulumi.Context, args *GetVpcsArgs, opts ...pulumi.InvokeOption) (*GetVpcsResult, error) {
	var rv GetVpcsResult
	err := ctx.Invoke("aws:ec2/getVpcs:getVpcs", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getVpcs.
type GetVpcsArgs struct {
	// Custom filter block as described below.
	Filters []GetVpcsFilter `pulumi:"filters"`
	// A map of tags, each pair of which must exactly match
	// a pair on the desired vpcs.
	Tags map[string]interface{} `pulumi:"tags"`
}

// A collection of values returned by getVpcs.
type GetVpcsResult struct {
	Filters []GetVpcsFilter `pulumi:"filters"`
	// The provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	// A list of all the VPC Ids found. This data source will fail if none are found.
	Ids  []string               `pulumi:"ids"`
	Tags map[string]interface{} `pulumi:"tags"`
}
