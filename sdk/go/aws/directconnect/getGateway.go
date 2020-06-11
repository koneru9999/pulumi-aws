// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package directconnect

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Retrieve information about a Direct Connect Gateway.
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
// 		example, err := directconnect.LookupGateway(ctx, &directconnect.LookupGatewayArgs{
// 			Name: "example",
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
func LookupGateway(ctx *pulumi.Context, args *LookupGatewayArgs, opts ...pulumi.InvokeOption) (*LookupGatewayResult, error) {
	var rv LookupGatewayResult
	err := ctx.Invoke("aws:directconnect/getGateway:getGateway", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getGateway.
type LookupGatewayArgs struct {
	// The name of the gateway to retrieve.
	Name string `pulumi:"name"`
}

// A collection of values returned by getGateway.
type LookupGatewayResult struct {
	// The ASN on the Amazon side of the connection.
	AmazonSideAsn string `pulumi:"amazonSideAsn"`
	// The provider-assigned unique ID for this managed resource.
	Id   string `pulumi:"id"`
	Name string `pulumi:"name"`
	// AWS Account ID of the gateway.
	OwnerAccountId string `pulumi:"ownerAccountId"`
}
