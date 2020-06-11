// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package sns

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Use this data source to get the ARN of a topic in AWS Simple Notification
// Service (SNS). By using this data source, you can reference SNS topics
// without having to hard code the ARNs as input.
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
// 		example, err := sns.LookupTopic(ctx, &sns.LookupTopicArgs{
// 			Name: "an_example_topic",
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
func LookupTopic(ctx *pulumi.Context, args *LookupTopicArgs, opts ...pulumi.InvokeOption) (*LookupTopicResult, error) {
	var rv LookupTopicResult
	err := ctx.Invoke("aws:sns/getTopic:getTopic", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getTopic.
type LookupTopicArgs struct {
	// The friendly name of the topic to match.
	Name string `pulumi:"name"`
}

// A collection of values returned by getTopic.
type LookupTopicResult struct {
	// Set to the ARN of the found topic, suitable for referencing in other resources that support SNS topics.
	Arn string `pulumi:"arn"`
	// The provider-assigned unique ID for this managed resource.
	Id   string `pulumi:"id"`
	Name string `pulumi:"name"`
}
