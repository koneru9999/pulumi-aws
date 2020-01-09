// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package workspaces

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to get information about a WorkSpaces Bundle.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/workspaces_bundle.html.markdown.
func LookupBundle(ctx *pulumi.Context, args *GetBundleArgs) (*GetBundleResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["bundleId"] = args.BundleId
	}
	outputs, err := ctx.Invoke("aws:workspaces/getBundle:getBundle", inputs)
	if err != nil {
		return nil, err
	}
	return &GetBundleResult{
		BundleId: outputs["bundleId"],
		ComputeTypes: outputs["computeTypes"],
		Description: outputs["description"],
		Name: outputs["name"],
		Owner: outputs["owner"],
		RootStorages: outputs["rootStorages"],
		UserStorages: outputs["userStorages"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getBundle.
type GetBundleArgs struct {
	// The ID of the bundle.
	BundleId interface{}
}

// A collection of values returned by getBundle.
type GetBundleResult struct {
	BundleId interface{}
	// The compute type. See supported fields below.
	ComputeTypes interface{}
	// The description of the bundle.
	Description interface{}
	// The name of the compute type.
	Name interface{}
	// The owner of the bundle.
	Owner interface{}
	// The root volume. See supported fields below.
	RootStorages interface{}
	// The user storage. See supported fields below.
	UserStorages interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
