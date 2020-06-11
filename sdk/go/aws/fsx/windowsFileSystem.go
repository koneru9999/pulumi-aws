// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package fsx

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a FSx Windows File System. See the [FSx Windows Guide](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html) for more information.
//
// > **NOTE:** Either the `activeDirectoryId` argument or `selfManagedActiveDirectory` configuration block must be specified.
//
// ## Example Usage
//
// ### Using AWS Directory Service
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/fsx"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		example, err := fsx.NewWindowsFileSystem(ctx, "example", &fsx.WindowsFileSystemArgs{
// 			ActiveDirectoryId:  pulumi.String(aws_directory_service_directory.Example.Id),
// 			KmsKeyId:           pulumi.String(aws_kms_key.Example.Arn),
// 			StorageCapacity:    pulumi.Int(300),
// 			SubnetIds:          pulumi.String(aws_subnet.Example.Id),
// 			ThroughputCapacity: pulumi.Int(1024),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ### Using a Self-Managed Microsoft Active Directory
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/fsx"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		example, err := fsx.NewWindowsFileSystem(ctx, "example", &fsx.WindowsFileSystemArgs{
// 			KmsKeyId: pulumi.String(aws_kms_key.Example.Arn),
// 			SelfManagedActiveDirectory: &fsx.WindowsFileSystemSelfManagedActiveDirectoryArgs{
// 				DnsIps: pulumi.StringArray{
// 					pulumi.String("10.0.0.111"),
// 					pulumi.String("10.0.0.222"),
// 				},
// 				DomainName: pulumi.String("corp.example.com"),
// 				Password:   pulumi.String("avoid-plaintext-passwords"),
// 				Username:   pulumi.String("Admin"),
// 			},
// 			StorageCapacity:    pulumi.Int(300),
// 			SubnetIds:          pulumi.String(aws_subnet.Example.Id),
// 			ThroughputCapacity: pulumi.Int(1024),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type WindowsFileSystem struct {
	pulumi.CustomResourceState

	// The ID for an existing Microsoft Active Directory instance that the file system should join when it's created. Cannot be specified with `selfManagedActiveDirectory`.
	ActiveDirectoryId pulumi.StringPtrOutput `pulumi:"activeDirectoryId"`
	// Amazon Resource Name of the file system.
	Arn pulumi.StringOutput `pulumi:"arn"`
	// The number of days to retain automatic backups. Minimum of `0` and maximum of `35`. Defaults to `7`. Set to `0` to disable.
	AutomaticBackupRetentionDays pulumi.IntPtrOutput `pulumi:"automaticBackupRetentionDays"`
	// A boolean flag indicating whether tags on the file system should be copied to backups. Defaults to `false`.
	CopyTagsToBackups pulumi.BoolPtrOutput `pulumi:"copyTagsToBackups"`
	// The preferred time (in `HH:MM` format) to take daily automatic backups, in the UTC time zone.
	DailyAutomaticBackupStartTime pulumi.StringOutput `pulumi:"dailyAutomaticBackupStartTime"`
	// DNS name for the file system, e.g. `fs-12345678.corp.example.com` (domain name matching the Active Directory domain name)
	DnsName pulumi.StringOutput `pulumi:"dnsName"`
	// ARN for the KMS Key to encrypt the file system at rest. Defaults to an AWS managed KMS Key.
	KmsKeyId pulumi.StringOutput `pulumi:"kmsKeyId"`
	// Set of Elastic Network Interface identifiers from which the file system is accessible.
	NetworkInterfaceIds pulumi.StringArrayOutput `pulumi:"networkInterfaceIds"`
	// AWS account identifier that created the file system.
	OwnerId pulumi.StringOutput `pulumi:"ownerId"`
	// A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
	SecurityGroupIds pulumi.StringArrayOutput `pulumi:"securityGroupIds"`
	// Configuration block that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. Cannot be specified with `activeDirectoryId`. Detailed below.
	SelfManagedActiveDirectory WindowsFileSystemSelfManagedActiveDirectoryPtrOutput `pulumi:"selfManagedActiveDirectory"`
	// When enabled, will skip the default final backup taken when the file system is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
	SkipFinalBackup pulumi.BoolPtrOutput `pulumi:"skipFinalBackup"`
	// Storage capacity (GiB) of the file system. Minimum of 32 and maximum of 65536.
	StorageCapacity pulumi.IntOutput `pulumi:"storageCapacity"`
	// A list of IDs for the subnets that the file system will be accessible from. File systems support only one subnet. The file server is also launched in that subnet's Availability Zone.
	SubnetIds pulumi.StringOutput `pulumi:"subnetIds"`
	// A map of tags to assign to the file system.
	Tags pulumi.MapOutput `pulumi:"tags"`
	// Throughput (megabytes per second) of the file system in power of 2 increments. Minimum of `8` and maximum of `2048`.
	ThroughputCapacity pulumi.IntOutput `pulumi:"throughputCapacity"`
	// Identifier of the Virtual Private Cloud for the file system.
	VpcId pulumi.StringOutput `pulumi:"vpcId"`
	// The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
	WeeklyMaintenanceStartTime pulumi.StringOutput `pulumi:"weeklyMaintenanceStartTime"`
}

// NewWindowsFileSystem registers a new resource with the given unique name, arguments, and options.
func NewWindowsFileSystem(ctx *pulumi.Context,
	name string, args *WindowsFileSystemArgs, opts ...pulumi.ResourceOption) (*WindowsFileSystem, error) {
	if args == nil || args.StorageCapacity == nil {
		return nil, errors.New("missing required argument 'StorageCapacity'")
	}
	if args == nil || args.SubnetIds == nil {
		return nil, errors.New("missing required argument 'SubnetIds'")
	}
	if args == nil || args.ThroughputCapacity == nil {
		return nil, errors.New("missing required argument 'ThroughputCapacity'")
	}
	if args == nil {
		args = &WindowsFileSystemArgs{}
	}
	var resource WindowsFileSystem
	err := ctx.RegisterResource("aws:fsx/windowsFileSystem:WindowsFileSystem", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWindowsFileSystem gets an existing WindowsFileSystem resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWindowsFileSystem(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WindowsFileSystemState, opts ...pulumi.ResourceOption) (*WindowsFileSystem, error) {
	var resource WindowsFileSystem
	err := ctx.ReadResource("aws:fsx/windowsFileSystem:WindowsFileSystem", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering WindowsFileSystem resources.
type windowsFileSystemState struct {
	// The ID for an existing Microsoft Active Directory instance that the file system should join when it's created. Cannot be specified with `selfManagedActiveDirectory`.
	ActiveDirectoryId *string `pulumi:"activeDirectoryId"`
	// Amazon Resource Name of the file system.
	Arn *string `pulumi:"arn"`
	// The number of days to retain automatic backups. Minimum of `0` and maximum of `35`. Defaults to `7`. Set to `0` to disable.
	AutomaticBackupRetentionDays *int `pulumi:"automaticBackupRetentionDays"`
	// A boolean flag indicating whether tags on the file system should be copied to backups. Defaults to `false`.
	CopyTagsToBackups *bool `pulumi:"copyTagsToBackups"`
	// The preferred time (in `HH:MM` format) to take daily automatic backups, in the UTC time zone.
	DailyAutomaticBackupStartTime *string `pulumi:"dailyAutomaticBackupStartTime"`
	// DNS name for the file system, e.g. `fs-12345678.corp.example.com` (domain name matching the Active Directory domain name)
	DnsName *string `pulumi:"dnsName"`
	// ARN for the KMS Key to encrypt the file system at rest. Defaults to an AWS managed KMS Key.
	KmsKeyId *string `pulumi:"kmsKeyId"`
	// Set of Elastic Network Interface identifiers from which the file system is accessible.
	NetworkInterfaceIds []string `pulumi:"networkInterfaceIds"`
	// AWS account identifier that created the file system.
	OwnerId *string `pulumi:"ownerId"`
	// A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
	SecurityGroupIds []string `pulumi:"securityGroupIds"`
	// Configuration block that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. Cannot be specified with `activeDirectoryId`. Detailed below.
	SelfManagedActiveDirectory *WindowsFileSystemSelfManagedActiveDirectory `pulumi:"selfManagedActiveDirectory"`
	// When enabled, will skip the default final backup taken when the file system is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
	SkipFinalBackup *bool `pulumi:"skipFinalBackup"`
	// Storage capacity (GiB) of the file system. Minimum of 32 and maximum of 65536.
	StorageCapacity *int `pulumi:"storageCapacity"`
	// A list of IDs for the subnets that the file system will be accessible from. File systems support only one subnet. The file server is also launched in that subnet's Availability Zone.
	SubnetIds *string `pulumi:"subnetIds"`
	// A map of tags to assign to the file system.
	Tags map[string]interface{} `pulumi:"tags"`
	// Throughput (megabytes per second) of the file system in power of 2 increments. Minimum of `8` and maximum of `2048`.
	ThroughputCapacity *int `pulumi:"throughputCapacity"`
	// Identifier of the Virtual Private Cloud for the file system.
	VpcId *string `pulumi:"vpcId"`
	// The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
	WeeklyMaintenanceStartTime *string `pulumi:"weeklyMaintenanceStartTime"`
}

type WindowsFileSystemState struct {
	// The ID for an existing Microsoft Active Directory instance that the file system should join when it's created. Cannot be specified with `selfManagedActiveDirectory`.
	ActiveDirectoryId pulumi.StringPtrInput
	// Amazon Resource Name of the file system.
	Arn pulumi.StringPtrInput
	// The number of days to retain automatic backups. Minimum of `0` and maximum of `35`. Defaults to `7`. Set to `0` to disable.
	AutomaticBackupRetentionDays pulumi.IntPtrInput
	// A boolean flag indicating whether tags on the file system should be copied to backups. Defaults to `false`.
	CopyTagsToBackups pulumi.BoolPtrInput
	// The preferred time (in `HH:MM` format) to take daily automatic backups, in the UTC time zone.
	DailyAutomaticBackupStartTime pulumi.StringPtrInput
	// DNS name for the file system, e.g. `fs-12345678.corp.example.com` (domain name matching the Active Directory domain name)
	DnsName pulumi.StringPtrInput
	// ARN for the KMS Key to encrypt the file system at rest. Defaults to an AWS managed KMS Key.
	KmsKeyId pulumi.StringPtrInput
	// Set of Elastic Network Interface identifiers from which the file system is accessible.
	NetworkInterfaceIds pulumi.StringArrayInput
	// AWS account identifier that created the file system.
	OwnerId pulumi.StringPtrInput
	// A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
	SecurityGroupIds pulumi.StringArrayInput
	// Configuration block that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. Cannot be specified with `activeDirectoryId`. Detailed below.
	SelfManagedActiveDirectory WindowsFileSystemSelfManagedActiveDirectoryPtrInput
	// When enabled, will skip the default final backup taken when the file system is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
	SkipFinalBackup pulumi.BoolPtrInput
	// Storage capacity (GiB) of the file system. Minimum of 32 and maximum of 65536.
	StorageCapacity pulumi.IntPtrInput
	// A list of IDs for the subnets that the file system will be accessible from. File systems support only one subnet. The file server is also launched in that subnet's Availability Zone.
	SubnetIds pulumi.StringPtrInput
	// A map of tags to assign to the file system.
	Tags pulumi.MapInput
	// Throughput (megabytes per second) of the file system in power of 2 increments. Minimum of `8` and maximum of `2048`.
	ThroughputCapacity pulumi.IntPtrInput
	// Identifier of the Virtual Private Cloud for the file system.
	VpcId pulumi.StringPtrInput
	// The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
	WeeklyMaintenanceStartTime pulumi.StringPtrInput
}

func (WindowsFileSystemState) ElementType() reflect.Type {
	return reflect.TypeOf((*windowsFileSystemState)(nil)).Elem()
}

type windowsFileSystemArgs struct {
	// The ID for an existing Microsoft Active Directory instance that the file system should join when it's created. Cannot be specified with `selfManagedActiveDirectory`.
	ActiveDirectoryId *string `pulumi:"activeDirectoryId"`
	// The number of days to retain automatic backups. Minimum of `0` and maximum of `35`. Defaults to `7`. Set to `0` to disable.
	AutomaticBackupRetentionDays *int `pulumi:"automaticBackupRetentionDays"`
	// A boolean flag indicating whether tags on the file system should be copied to backups. Defaults to `false`.
	CopyTagsToBackups *bool `pulumi:"copyTagsToBackups"`
	// The preferred time (in `HH:MM` format) to take daily automatic backups, in the UTC time zone.
	DailyAutomaticBackupStartTime *string `pulumi:"dailyAutomaticBackupStartTime"`
	// ARN for the KMS Key to encrypt the file system at rest. Defaults to an AWS managed KMS Key.
	KmsKeyId *string `pulumi:"kmsKeyId"`
	// A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
	SecurityGroupIds []string `pulumi:"securityGroupIds"`
	// Configuration block that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. Cannot be specified with `activeDirectoryId`. Detailed below.
	SelfManagedActiveDirectory *WindowsFileSystemSelfManagedActiveDirectory `pulumi:"selfManagedActiveDirectory"`
	// When enabled, will skip the default final backup taken when the file system is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
	SkipFinalBackup *bool `pulumi:"skipFinalBackup"`
	// Storage capacity (GiB) of the file system. Minimum of 32 and maximum of 65536.
	StorageCapacity int `pulumi:"storageCapacity"`
	// A list of IDs for the subnets that the file system will be accessible from. File systems support only one subnet. The file server is also launched in that subnet's Availability Zone.
	SubnetIds string `pulumi:"subnetIds"`
	// A map of tags to assign to the file system.
	Tags map[string]interface{} `pulumi:"tags"`
	// Throughput (megabytes per second) of the file system in power of 2 increments. Minimum of `8` and maximum of `2048`.
	ThroughputCapacity int `pulumi:"throughputCapacity"`
	// The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
	WeeklyMaintenanceStartTime *string `pulumi:"weeklyMaintenanceStartTime"`
}

// The set of arguments for constructing a WindowsFileSystem resource.
type WindowsFileSystemArgs struct {
	// The ID for an existing Microsoft Active Directory instance that the file system should join when it's created. Cannot be specified with `selfManagedActiveDirectory`.
	ActiveDirectoryId pulumi.StringPtrInput
	// The number of days to retain automatic backups. Minimum of `0` and maximum of `35`. Defaults to `7`. Set to `0` to disable.
	AutomaticBackupRetentionDays pulumi.IntPtrInput
	// A boolean flag indicating whether tags on the file system should be copied to backups. Defaults to `false`.
	CopyTagsToBackups pulumi.BoolPtrInput
	// The preferred time (in `HH:MM` format) to take daily automatic backups, in the UTC time zone.
	DailyAutomaticBackupStartTime pulumi.StringPtrInput
	// ARN for the KMS Key to encrypt the file system at rest. Defaults to an AWS managed KMS Key.
	KmsKeyId pulumi.StringPtrInput
	// A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
	SecurityGroupIds pulumi.StringArrayInput
	// Configuration block that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. Cannot be specified with `activeDirectoryId`. Detailed below.
	SelfManagedActiveDirectory WindowsFileSystemSelfManagedActiveDirectoryPtrInput
	// When enabled, will skip the default final backup taken when the file system is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
	SkipFinalBackup pulumi.BoolPtrInput
	// Storage capacity (GiB) of the file system. Minimum of 32 and maximum of 65536.
	StorageCapacity pulumi.IntInput
	// A list of IDs for the subnets that the file system will be accessible from. File systems support only one subnet. The file server is also launched in that subnet's Availability Zone.
	SubnetIds pulumi.StringInput
	// A map of tags to assign to the file system.
	Tags pulumi.MapInput
	// Throughput (megabytes per second) of the file system in power of 2 increments. Minimum of `8` and maximum of `2048`.
	ThroughputCapacity pulumi.IntInput
	// The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
	WeeklyMaintenanceStartTime pulumi.StringPtrInput
}

func (WindowsFileSystemArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*windowsFileSystemArgs)(nil)).Elem()
}
