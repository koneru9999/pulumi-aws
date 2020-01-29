// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package waf

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// `waf.RateBasedRule` Retrieves a WAF Rate Based Rule Resource Id.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/waf_rate_based_rule.html.markdown.
func LookupRateBasedRule(ctx *pulumi.Context, args *LookupRateBasedRuleArgs, opts ...pulumi.InvokeOption) (*LookupRateBasedRuleResult, error) {
	var rv LookupRateBasedRuleResult
	err := ctx.Invoke("aws:waf/getRateBasedRule:getRateBasedRule", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getRateBasedRule.
type LookupRateBasedRuleArgs struct {
	// The name of the WAF rate based rule.
	Name string `pulumi:"name"`
}


// A collection of values returned by getRateBasedRule.
type LookupRateBasedRuleResult struct {
	// id is the provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	Name string `pulumi:"name"`
}

