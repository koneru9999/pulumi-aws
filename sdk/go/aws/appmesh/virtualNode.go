// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package appmesh

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Provides an AWS App Mesh virtual node resource.
//
// ## Breaking Changes
//
// Because of backward incompatible API changes (read [here](https://github.com/awslabs/aws-app-mesh-examples/issues/92)), `appmesh.VirtualNode` resource definitions created with provider versions earlier than v2.3.0 will need to be modified:
//
// * Rename the `serviceName` attribute of the `dns` object to `hostname`.
//
// * Replace the `backends` attribute of the `spec` object with one or more `backend` configuration blocks,
// setting `virtualServiceName` to the name of the service.
//
// The state associated with existing resources will automatically be migrated.
//
// ## Example Usage
//
// ### Basic
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appmesh"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		serviceb1, err := appmesh.NewVirtualNode(ctx, "serviceb1", &appmesh.VirtualNodeArgs{
// 			MeshName: pulumi.String(aws_appmesh_mesh.Simple.Id),
// 			Spec: &appmesh.VirtualNodeSpecArgs{
// 				Backend: []map[string]interface{}{
// 					map[string]interface{}{
// 						"virtualService": map[string]interface{}{
// 							"virtualServiceName": "servicea.simpleapp.local",
// 						},
// 					},
// 				},
// 				Listener: &appmesh.VirtualNodeSpecListenerArgs{
// 					PortMapping: &appmesh.VirtualNodeSpecListenerPortMappingArgs{
// 						Port:     pulumi.Int(8080),
// 						Protocol: pulumi.String("http"),
// 					},
// 				},
// 				ServiceDiscovery: &appmesh.VirtualNodeSpecServiceDiscoveryArgs{
// 					Dns: &appmesh.VirtualNodeSpecServiceDiscoveryDnsArgs{
// 						Hostname: pulumi.String("serviceb.simpleapp.local"),
// 					},
// 				},
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ### AWS Cloud Map Service Discovery
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appmesh"
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/servicediscovery"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		example, err := servicediscovery.NewHttpNamespace(ctx, "example", nil)
// 		if err != nil {
// 			return err
// 		}
// 		serviceb1, err := appmesh.NewVirtualNode(ctx, "serviceb1", &appmesh.VirtualNodeArgs{
// 			MeshName: pulumi.String(aws_appmesh_mesh.Simple.Id),
// 			Spec: &appmesh.VirtualNodeSpecArgs{
// 				Backend: []map[string]interface{}{
// 					map[string]interface{}{
// 						"virtualService": map[string]interface{}{
// 							"virtualServiceName": "servicea.simpleapp.local",
// 						},
// 					},
// 				},
// 				Listener: &appmesh.VirtualNodeSpecListenerArgs{
// 					PortMapping: &appmesh.VirtualNodeSpecListenerPortMappingArgs{
// 						Port:     pulumi.Int(8080),
// 						Protocol: pulumi.String("http"),
// 					},
// 				},
// 				ServiceDiscovery: &appmesh.VirtualNodeSpecServiceDiscoveryArgs{
// 					AwsCloudMap: &appmesh.VirtualNodeSpecServiceDiscoveryAwsCloudMapArgs{
// 						Attributes: map[string]interface{}{
// 							"stack": "blue",
// 						},
// 						NamespaceName: example.Name,
// 						ServiceName:   pulumi.String("serviceb1"),
// 					},
// 				},
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ### Listener Health Check
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appmesh"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		serviceb1, err := appmesh.NewVirtualNode(ctx, "serviceb1", &appmesh.VirtualNodeArgs{
// 			MeshName: pulumi.String(aws_appmesh_mesh.Simple.Id),
// 			Spec: &appmesh.VirtualNodeSpecArgs{
// 				Backend: []map[string]interface{}{
// 					map[string]interface{}{
// 						"virtualService": map[string]interface{}{
// 							"virtualServiceName": "servicea.simpleapp.local",
// 						},
// 					},
// 				},
// 				Listener: &appmesh.VirtualNodeSpecListenerArgs{
// 					HealthCheck: &appmesh.VirtualNodeSpecListenerHealthCheckArgs{
// 						HealthyThreshold:   pulumi.Int(2),
// 						IntervalMillis:     pulumi.Int(5000),
// 						Path:               pulumi.String("/ping"),
// 						Protocol:           pulumi.String("http"),
// 						TimeoutMillis:      pulumi.Int(2000),
// 						UnhealthyThreshold: pulumi.Int(2),
// 					},
// 					PortMapping: &appmesh.VirtualNodeSpecListenerPortMappingArgs{
// 						Port:     pulumi.Int(8080),
// 						Protocol: pulumi.String("http"),
// 					},
// 				},
// 				ServiceDiscovery: &appmesh.VirtualNodeSpecServiceDiscoveryArgs{
// 					Dns: &appmesh.VirtualNodeSpecServiceDiscoveryDnsArgs{
// 						Hostname: pulumi.String("serviceb.simpleapp.local"),
// 					},
// 				},
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ### Logging
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appmesh"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		serviceb1, err := appmesh.NewVirtualNode(ctx, "serviceb1", &appmesh.VirtualNodeArgs{
// 			MeshName: pulumi.String(aws_appmesh_mesh.Simple.Id),
// 			Spec: &appmesh.VirtualNodeSpecArgs{
// 				Backend: []map[string]interface{}{
// 					map[string]interface{}{
// 						"virtualService": map[string]interface{}{
// 							"virtualServiceName": "servicea.simpleapp.local",
// 						},
// 					},
// 				},
// 				Listener: &appmesh.VirtualNodeSpecListenerArgs{
// 					PortMapping: &appmesh.VirtualNodeSpecListenerPortMappingArgs{
// 						Port:     pulumi.Int(8080),
// 						Protocol: pulumi.String("http"),
// 					},
// 				},
// 				Logging: &appmesh.VirtualNodeSpecLoggingArgs{
// 					AccessLog: &appmesh.VirtualNodeSpecLoggingAccessLogArgs{
// 						File: &appmesh.VirtualNodeSpecLoggingAccessLogFileArgs{
// 							Path: pulumi.String("/dev/stdout"),
// 						},
// 					},
// 				},
// 				ServiceDiscovery: &appmesh.VirtualNodeSpecServiceDiscoveryArgs{
// 					Dns: &appmesh.VirtualNodeSpecServiceDiscoveryDnsArgs{
// 						Hostname: pulumi.String("serviceb.simpleapp.local"),
// 					},
// 				},
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type VirtualNode struct {
	pulumi.CustomResourceState

	// The ARN of the virtual node.
	Arn pulumi.StringOutput `pulumi:"arn"`
	// The creation date of the virtual node.
	CreatedDate pulumi.StringOutput `pulumi:"createdDate"`
	// The last update date of the virtual node.
	LastUpdatedDate pulumi.StringOutput `pulumi:"lastUpdatedDate"`
	// The name of the service mesh in which to create the virtual node.
	MeshName pulumi.StringOutput `pulumi:"meshName"`
	// The name to use for the virtual node.
	Name pulumi.StringOutput `pulumi:"name"`
	// The virtual node specification to apply.
	Spec VirtualNodeSpecOutput `pulumi:"spec"`
	// A map of tags to assign to the resource.
	Tags pulumi.MapOutput `pulumi:"tags"`
}

// NewVirtualNode registers a new resource with the given unique name, arguments, and options.
func NewVirtualNode(ctx *pulumi.Context,
	name string, args *VirtualNodeArgs, opts ...pulumi.ResourceOption) (*VirtualNode, error) {
	if args == nil || args.MeshName == nil {
		return nil, errors.New("missing required argument 'MeshName'")
	}
	if args == nil || args.Spec == nil {
		return nil, errors.New("missing required argument 'Spec'")
	}
	if args == nil {
		args = &VirtualNodeArgs{}
	}
	var resource VirtualNode
	err := ctx.RegisterResource("aws:appmesh/virtualNode:VirtualNode", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVirtualNode gets an existing VirtualNode resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualNode(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VirtualNodeState, opts ...pulumi.ResourceOption) (*VirtualNode, error) {
	var resource VirtualNode
	err := ctx.ReadResource("aws:appmesh/virtualNode:VirtualNode", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualNode resources.
type virtualNodeState struct {
	// The ARN of the virtual node.
	Arn *string `pulumi:"arn"`
	// The creation date of the virtual node.
	CreatedDate *string `pulumi:"createdDate"`
	// The last update date of the virtual node.
	LastUpdatedDate *string `pulumi:"lastUpdatedDate"`
	// The name of the service mesh in which to create the virtual node.
	MeshName *string `pulumi:"meshName"`
	// The name to use for the virtual node.
	Name *string `pulumi:"name"`
	// The virtual node specification to apply.
	Spec *VirtualNodeSpec `pulumi:"spec"`
	// A map of tags to assign to the resource.
	Tags map[string]interface{} `pulumi:"tags"`
}

type VirtualNodeState struct {
	// The ARN of the virtual node.
	Arn pulumi.StringPtrInput
	// The creation date of the virtual node.
	CreatedDate pulumi.StringPtrInput
	// The last update date of the virtual node.
	LastUpdatedDate pulumi.StringPtrInput
	// The name of the service mesh in which to create the virtual node.
	MeshName pulumi.StringPtrInput
	// The name to use for the virtual node.
	Name pulumi.StringPtrInput
	// The virtual node specification to apply.
	Spec VirtualNodeSpecPtrInput
	// A map of tags to assign to the resource.
	Tags pulumi.MapInput
}

func (VirtualNodeState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualNodeState)(nil)).Elem()
}

type virtualNodeArgs struct {
	// The name of the service mesh in which to create the virtual node.
	MeshName string `pulumi:"meshName"`
	// The name to use for the virtual node.
	Name *string `pulumi:"name"`
	// The virtual node specification to apply.
	Spec VirtualNodeSpec `pulumi:"spec"`
	// A map of tags to assign to the resource.
	Tags map[string]interface{} `pulumi:"tags"`
}

// The set of arguments for constructing a VirtualNode resource.
type VirtualNodeArgs struct {
	// The name of the service mesh in which to create the virtual node.
	MeshName pulumi.StringInput
	// The name to use for the virtual node.
	Name pulumi.StringPtrInput
	// The virtual node specification to apply.
	Spec VirtualNodeSpecInput
	// A map of tags to assign to the resource.
	Tags pulumi.MapInput
}

func (VirtualNodeArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualNodeArgs)(nil)).Elem()
}
