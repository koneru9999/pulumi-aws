// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package sns

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides an SNS topic resource
// 
// ## Message Delivery Status Arguments
// 
// The `<endpoint>_success_feedback_role_arn` and `<endpoint>_failure_feedback_role_arn` arguments are used to give Amazon SNS write access to use CloudWatch Logs on your behalf. The `<endpoint>_success_feedback_sample_rate` argument is for specifying the sample rate percentage (0-100) of successfully delivered messages. After you configure the  `<endpoint>_failure_feedback_role_arn` argument, then all failed message deliveries generate CloudWatch Logs.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/sns_topic.html.markdown.
type Topic struct {
	s *pulumi.ResourceState
}

// NewTopic registers a new resource with the given unique name, arguments, and options.
func NewTopic(ctx *pulumi.Context,
	name string, args *TopicArgs, opts ...pulumi.ResourceOpt) (*Topic, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["applicationFailureFeedbackRoleArn"] = nil
		inputs["applicationSuccessFeedbackRoleArn"] = nil
		inputs["applicationSuccessFeedbackSampleRate"] = nil
		inputs["deliveryPolicy"] = nil
		inputs["displayName"] = nil
		inputs["httpFailureFeedbackRoleArn"] = nil
		inputs["httpSuccessFeedbackRoleArn"] = nil
		inputs["httpSuccessFeedbackSampleRate"] = nil
		inputs["kmsMasterKeyId"] = nil
		inputs["lambdaFailureFeedbackRoleArn"] = nil
		inputs["lambdaSuccessFeedbackRoleArn"] = nil
		inputs["lambdaSuccessFeedbackSampleRate"] = nil
		inputs["name"] = nil
		inputs["namePrefix"] = nil
		inputs["policy"] = nil
		inputs["sqsFailureFeedbackRoleArn"] = nil
		inputs["sqsSuccessFeedbackRoleArn"] = nil
		inputs["sqsSuccessFeedbackSampleRate"] = nil
		inputs["tags"] = nil
	} else {
		inputs["applicationFailureFeedbackRoleArn"] = args.ApplicationFailureFeedbackRoleArn
		inputs["applicationSuccessFeedbackRoleArn"] = args.ApplicationSuccessFeedbackRoleArn
		inputs["applicationSuccessFeedbackSampleRate"] = args.ApplicationSuccessFeedbackSampleRate
		inputs["deliveryPolicy"] = args.DeliveryPolicy
		inputs["displayName"] = args.DisplayName
		inputs["httpFailureFeedbackRoleArn"] = args.HttpFailureFeedbackRoleArn
		inputs["httpSuccessFeedbackRoleArn"] = args.HttpSuccessFeedbackRoleArn
		inputs["httpSuccessFeedbackSampleRate"] = args.HttpSuccessFeedbackSampleRate
		inputs["kmsMasterKeyId"] = args.KmsMasterKeyId
		inputs["lambdaFailureFeedbackRoleArn"] = args.LambdaFailureFeedbackRoleArn
		inputs["lambdaSuccessFeedbackRoleArn"] = args.LambdaSuccessFeedbackRoleArn
		inputs["lambdaSuccessFeedbackSampleRate"] = args.LambdaSuccessFeedbackSampleRate
		inputs["name"] = args.Name
		inputs["namePrefix"] = args.NamePrefix
		inputs["policy"] = args.Policy
		inputs["sqsFailureFeedbackRoleArn"] = args.SqsFailureFeedbackRoleArn
		inputs["sqsSuccessFeedbackRoleArn"] = args.SqsSuccessFeedbackRoleArn
		inputs["sqsSuccessFeedbackSampleRate"] = args.SqsSuccessFeedbackSampleRate
		inputs["tags"] = args.Tags
	}
	inputs["arn"] = nil
	s, err := ctx.RegisterResource("aws:sns/topic:Topic", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Topic{s: s}, nil
}

// GetTopic gets an existing Topic resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTopic(ctx *pulumi.Context,
	name string, id pulumi.ID, state *TopicState, opts ...pulumi.ResourceOpt) (*Topic, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["applicationFailureFeedbackRoleArn"] = state.ApplicationFailureFeedbackRoleArn
		inputs["applicationSuccessFeedbackRoleArn"] = state.ApplicationSuccessFeedbackRoleArn
		inputs["applicationSuccessFeedbackSampleRate"] = state.ApplicationSuccessFeedbackSampleRate
		inputs["arn"] = state.Arn
		inputs["deliveryPolicy"] = state.DeliveryPolicy
		inputs["displayName"] = state.DisplayName
		inputs["httpFailureFeedbackRoleArn"] = state.HttpFailureFeedbackRoleArn
		inputs["httpSuccessFeedbackRoleArn"] = state.HttpSuccessFeedbackRoleArn
		inputs["httpSuccessFeedbackSampleRate"] = state.HttpSuccessFeedbackSampleRate
		inputs["kmsMasterKeyId"] = state.KmsMasterKeyId
		inputs["lambdaFailureFeedbackRoleArn"] = state.LambdaFailureFeedbackRoleArn
		inputs["lambdaSuccessFeedbackRoleArn"] = state.LambdaSuccessFeedbackRoleArn
		inputs["lambdaSuccessFeedbackSampleRate"] = state.LambdaSuccessFeedbackSampleRate
		inputs["name"] = state.Name
		inputs["namePrefix"] = state.NamePrefix
		inputs["policy"] = state.Policy
		inputs["sqsFailureFeedbackRoleArn"] = state.SqsFailureFeedbackRoleArn
		inputs["sqsSuccessFeedbackRoleArn"] = state.SqsSuccessFeedbackRoleArn
		inputs["sqsSuccessFeedbackSampleRate"] = state.SqsSuccessFeedbackSampleRate
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("aws:sns/topic:Topic", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Topic{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Topic) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Topic) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// IAM role for failure feedback
func (r *Topic) ApplicationFailureFeedbackRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["applicationFailureFeedbackRoleArn"])
}

// The IAM role permitted to receive success feedback for this topic
func (r *Topic) ApplicationSuccessFeedbackRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["applicationSuccessFeedbackRoleArn"])
}

// Percentage of success to sample
func (r *Topic) ApplicationSuccessFeedbackSampleRate() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["applicationSuccessFeedbackSampleRate"])
}

// The ARN of the SNS topic, as a more obvious property (clone of id)
func (r *Topic) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// The SNS delivery policy. More on [AWS documentation](https://docs.aws.amazon.com/sns/latest/dg/DeliveryPolicies.html)
func (r *Topic) DeliveryPolicy() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["deliveryPolicy"])
}

// The display name for the SNS topic
func (r *Topic) DisplayName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["displayName"])
}

// IAM role for failure feedback
func (r *Topic) HttpFailureFeedbackRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["httpFailureFeedbackRoleArn"])
}

// The IAM role permitted to receive success feedback for this topic
func (r *Topic) HttpSuccessFeedbackRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["httpSuccessFeedbackRoleArn"])
}

// Percentage of success to sample
func (r *Topic) HttpSuccessFeedbackSampleRate() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["httpSuccessFeedbackSampleRate"])
}

// The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms)
func (r *Topic) KmsMasterKeyId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["kmsMasterKeyId"])
}

// IAM role for failure feedback
func (r *Topic) LambdaFailureFeedbackRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["lambdaFailureFeedbackRoleArn"])
}

// The IAM role permitted to receive success feedback for this topic
func (r *Topic) LambdaSuccessFeedbackRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["lambdaSuccessFeedbackRoleArn"])
}

// Percentage of success to sample
func (r *Topic) LambdaSuccessFeedbackSampleRate() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["lambdaSuccessFeedbackSampleRate"])
}

// The friendly name for the SNS topic. By default generated by this provider.
func (r *Topic) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The friendly name for the SNS topic. Conflicts with `name`.
func (r *Topic) NamePrefix() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["namePrefix"])
}

// The fully-formed AWS policy as JSON.
func (r *Topic) Policy() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["policy"])
}

// IAM role for failure feedback
func (r *Topic) SqsFailureFeedbackRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sqsFailureFeedbackRoleArn"])
}

// The IAM role permitted to receive success feedback for this topic
func (r *Topic) SqsSuccessFeedbackRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sqsSuccessFeedbackRoleArn"])
}

// Percentage of success to sample
func (r *Topic) SqsSuccessFeedbackSampleRate() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["sqsSuccessFeedbackSampleRate"])
}

// Key-value mapping of resource tags
func (r *Topic) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Topic resources.
type TopicState struct {
	// IAM role for failure feedback
	ApplicationFailureFeedbackRoleArn interface{}
	// The IAM role permitted to receive success feedback for this topic
	ApplicationSuccessFeedbackRoleArn interface{}
	// Percentage of success to sample
	ApplicationSuccessFeedbackSampleRate interface{}
	// The ARN of the SNS topic, as a more obvious property (clone of id)
	Arn interface{}
	// The SNS delivery policy. More on [AWS documentation](https://docs.aws.amazon.com/sns/latest/dg/DeliveryPolicies.html)
	DeliveryPolicy interface{}
	// The display name for the SNS topic
	DisplayName interface{}
	// IAM role for failure feedback
	HttpFailureFeedbackRoleArn interface{}
	// The IAM role permitted to receive success feedback for this topic
	HttpSuccessFeedbackRoleArn interface{}
	// Percentage of success to sample
	HttpSuccessFeedbackSampleRate interface{}
	// The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms)
	KmsMasterKeyId interface{}
	// IAM role for failure feedback
	LambdaFailureFeedbackRoleArn interface{}
	// The IAM role permitted to receive success feedback for this topic
	LambdaSuccessFeedbackRoleArn interface{}
	// Percentage of success to sample
	LambdaSuccessFeedbackSampleRate interface{}
	// The friendly name for the SNS topic. By default generated by this provider.
	Name interface{}
	// The friendly name for the SNS topic. Conflicts with `name`.
	NamePrefix interface{}
	// The fully-formed AWS policy as JSON.
	Policy interface{}
	// IAM role for failure feedback
	SqsFailureFeedbackRoleArn interface{}
	// The IAM role permitted to receive success feedback for this topic
	SqsSuccessFeedbackRoleArn interface{}
	// Percentage of success to sample
	SqsSuccessFeedbackSampleRate interface{}
	// Key-value mapping of resource tags
	Tags interface{}
}

// The set of arguments for constructing a Topic resource.
type TopicArgs struct {
	// IAM role for failure feedback
	ApplicationFailureFeedbackRoleArn interface{}
	// The IAM role permitted to receive success feedback for this topic
	ApplicationSuccessFeedbackRoleArn interface{}
	// Percentage of success to sample
	ApplicationSuccessFeedbackSampleRate interface{}
	// The SNS delivery policy. More on [AWS documentation](https://docs.aws.amazon.com/sns/latest/dg/DeliveryPolicies.html)
	DeliveryPolicy interface{}
	// The display name for the SNS topic
	DisplayName interface{}
	// IAM role for failure feedback
	HttpFailureFeedbackRoleArn interface{}
	// The IAM role permitted to receive success feedback for this topic
	HttpSuccessFeedbackRoleArn interface{}
	// Percentage of success to sample
	HttpSuccessFeedbackSampleRate interface{}
	// The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms)
	KmsMasterKeyId interface{}
	// IAM role for failure feedback
	LambdaFailureFeedbackRoleArn interface{}
	// The IAM role permitted to receive success feedback for this topic
	LambdaSuccessFeedbackRoleArn interface{}
	// Percentage of success to sample
	LambdaSuccessFeedbackSampleRate interface{}
	// The friendly name for the SNS topic. By default generated by this provider.
	Name interface{}
	// The friendly name for the SNS topic. Conflicts with `name`.
	NamePrefix interface{}
	// The fully-formed AWS policy as JSON.
	Policy interface{}
	// IAM role for failure feedback
	SqsFailureFeedbackRoleArn interface{}
	// The IAM role permitted to receive success feedback for this topic
	SqsSuccessFeedbackRoleArn interface{}
	// Percentage of success to sample
	SqsSuccessFeedbackSampleRate interface{}
	// Key-value mapping of resource tags
	Tags interface{}
}
