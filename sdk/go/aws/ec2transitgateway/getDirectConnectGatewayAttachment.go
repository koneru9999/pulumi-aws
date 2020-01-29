// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package ec2transitgateway

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Get information on an EC2 Transit Gateway's attachment to a Direct Connect Gateway.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/ec2_transit_gateway_dx_gateway_attachment.html.markdown.
func GetDirectConnectGatewayAttachment(ctx *pulumi.Context, args *GetDirectConnectGatewayAttachmentArgs, opts ...pulumi.InvokeOption) (*GetDirectConnectGatewayAttachmentResult, error) {
	var rv GetDirectConnectGatewayAttachmentResult
	err := ctx.Invoke("aws:ec2transitgateway/getDirectConnectGatewayAttachment:getDirectConnectGatewayAttachment", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getDirectConnectGatewayAttachment.
type GetDirectConnectGatewayAttachmentArgs struct {
	// Identifier of the Direct Connect Gateway.
	DxGatewayId string `pulumi:"dxGatewayId"`
	Tags map[string]interface{} `pulumi:"tags"`
	// Identifier of the EC2 Transit Gateway.
	TransitGatewayId string `pulumi:"transitGatewayId"`
}


// A collection of values returned by getDirectConnectGatewayAttachment.
type GetDirectConnectGatewayAttachmentResult struct {
	DxGatewayId string `pulumi:"dxGatewayId"`
	// id is the provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	// Key-value tags for the EC2 Transit Gateway Attachment
	Tags map[string]interface{} `pulumi:"tags"`
	TransitGatewayId string `pulumi:"transitGatewayId"`
}

