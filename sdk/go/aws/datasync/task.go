// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package datasync

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages an AWS DataSync Task, which represents a configuration for synchronization. Starting an execution of these DataSync Tasks (actually synchronizing files) is performed outside of this resource.
//
// ## Example Usage
//
//
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/datasync"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		example, err := datasync.NewTask(ctx, "example", &datasync.TaskArgs{
// 			DestinationLocationArn: pulumi.String(aws_datasync_location_s3.Destination.Arn),
// 			Options: &datasync.TaskOptionsArgs{
// 				BytesPerSecond: pulumi.Int(-1),
// 			},
// 			SourceLocationArn: pulumi.String(aws_datasync_location_nfs.Source.Arn),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type Task struct {
	pulumi.CustomResourceState

	// Amazon Resource Name (ARN) of the DataSync Task.
	Arn pulumi.StringOutput `pulumi:"arn"`
	// Amazon Resource Name (ARN) of the CloudWatch Log Group that is used to monitor and log events in the sync task.
	CloudwatchLogGroupArn pulumi.StringPtrOutput `pulumi:"cloudwatchLogGroupArn"`
	// Amazon Resource Name (ARN) of destination DataSync Location.
	DestinationLocationArn pulumi.StringOutput `pulumi:"destinationLocationArn"`
	// Name of the DataSync Task.
	Name pulumi.StringOutput `pulumi:"name"`
	// Configuration block containing option that controls the default behavior when you start an execution of this DataSync Task. For each individual task execution, you can override these options by specifying an overriding configuration in those executions.
	Options TaskOptionsPtrOutput `pulumi:"options"`
	// Amazon Resource Name (ARN) of source DataSync Location.
	SourceLocationArn pulumi.StringOutput `pulumi:"sourceLocationArn"`
	// Key-value pairs of resource tags to assign to the DataSync Task.
	Tags pulumi.MapOutput `pulumi:"tags"`
}

// NewTask registers a new resource with the given unique name, arguments, and options.
func NewTask(ctx *pulumi.Context,
	name string, args *TaskArgs, opts ...pulumi.ResourceOption) (*Task, error) {
	if args == nil || args.DestinationLocationArn == nil {
		return nil, errors.New("missing required argument 'DestinationLocationArn'")
	}
	if args == nil || args.SourceLocationArn == nil {
		return nil, errors.New("missing required argument 'SourceLocationArn'")
	}
	if args == nil {
		args = &TaskArgs{}
	}
	var resource Task
	err := ctx.RegisterResource("aws:datasync/task:Task", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetTask gets an existing Task resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTask(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *TaskState, opts ...pulumi.ResourceOption) (*Task, error) {
	var resource Task
	err := ctx.ReadResource("aws:datasync/task:Task", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Task resources.
type taskState struct {
	// Amazon Resource Name (ARN) of the DataSync Task.
	Arn *string `pulumi:"arn"`
	// Amazon Resource Name (ARN) of the CloudWatch Log Group that is used to monitor and log events in the sync task.
	CloudwatchLogGroupArn *string `pulumi:"cloudwatchLogGroupArn"`
	// Amazon Resource Name (ARN) of destination DataSync Location.
	DestinationLocationArn *string `pulumi:"destinationLocationArn"`
	// Name of the DataSync Task.
	Name *string `pulumi:"name"`
	// Configuration block containing option that controls the default behavior when you start an execution of this DataSync Task. For each individual task execution, you can override these options by specifying an overriding configuration in those executions.
	Options *TaskOptions `pulumi:"options"`
	// Amazon Resource Name (ARN) of source DataSync Location.
	SourceLocationArn *string `pulumi:"sourceLocationArn"`
	// Key-value pairs of resource tags to assign to the DataSync Task.
	Tags map[string]interface{} `pulumi:"tags"`
}

type TaskState struct {
	// Amazon Resource Name (ARN) of the DataSync Task.
	Arn pulumi.StringPtrInput
	// Amazon Resource Name (ARN) of the CloudWatch Log Group that is used to monitor and log events in the sync task.
	CloudwatchLogGroupArn pulumi.StringPtrInput
	// Amazon Resource Name (ARN) of destination DataSync Location.
	DestinationLocationArn pulumi.StringPtrInput
	// Name of the DataSync Task.
	Name pulumi.StringPtrInput
	// Configuration block containing option that controls the default behavior when you start an execution of this DataSync Task. For each individual task execution, you can override these options by specifying an overriding configuration in those executions.
	Options TaskOptionsPtrInput
	// Amazon Resource Name (ARN) of source DataSync Location.
	SourceLocationArn pulumi.StringPtrInput
	// Key-value pairs of resource tags to assign to the DataSync Task.
	Tags pulumi.MapInput
}

func (TaskState) ElementType() reflect.Type {
	return reflect.TypeOf((*taskState)(nil)).Elem()
}

type taskArgs struct {
	// Amazon Resource Name (ARN) of the CloudWatch Log Group that is used to monitor and log events in the sync task.
	CloudwatchLogGroupArn *string `pulumi:"cloudwatchLogGroupArn"`
	// Amazon Resource Name (ARN) of destination DataSync Location.
	DestinationLocationArn string `pulumi:"destinationLocationArn"`
	// Name of the DataSync Task.
	Name *string `pulumi:"name"`
	// Configuration block containing option that controls the default behavior when you start an execution of this DataSync Task. For each individual task execution, you can override these options by specifying an overriding configuration in those executions.
	Options *TaskOptions `pulumi:"options"`
	// Amazon Resource Name (ARN) of source DataSync Location.
	SourceLocationArn string `pulumi:"sourceLocationArn"`
	// Key-value pairs of resource tags to assign to the DataSync Task.
	Tags map[string]interface{} `pulumi:"tags"`
}

// The set of arguments for constructing a Task resource.
type TaskArgs struct {
	// Amazon Resource Name (ARN) of the CloudWatch Log Group that is used to monitor and log events in the sync task.
	CloudwatchLogGroupArn pulumi.StringPtrInput
	// Amazon Resource Name (ARN) of destination DataSync Location.
	DestinationLocationArn pulumi.StringInput
	// Name of the DataSync Task.
	Name pulumi.StringPtrInput
	// Configuration block containing option that controls the default behavior when you start an execution of this DataSync Task. For each individual task execution, you can override these options by specifying an overriding configuration in those executions.
	Options TaskOptionsPtrInput
	// Amazon Resource Name (ARN) of source DataSync Location.
	SourceLocationArn pulumi.StringInput
	// Key-value pairs of resource tags to assign to the DataSync Task.
	Tags pulumi.MapInput
}

func (TaskArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*taskArgs)(nil)).Elem()
}
