// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2
{
    /// <summary>
    /// Provides a resource to create a new launch configuration, used for autoscaling groups.
    /// 
    /// ## Block devices
    /// 
    /// Each of the `*_block_device` attributes controls a portion of the AWS
    /// Launch Configuration's "Block Device Mapping". It's a good idea to familiarize yourself with [AWS's Block Device
    /// Mapping docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html)
    /// to understand the implications of using these attributes.
    /// 
    /// The `root_block_device` mapping supports the following:
    /// 
    /// * `volume_type` - (Optional) The type of volume. Can be `"standard"`, `"gp2"`,
    ///   or `"io1"`. (Default: `"standard"`).
    /// * `volume_size` - (Optional) The size of the volume in gigabytes.
    /// * `iops` - (Optional) The amount of provisioned
    ///   [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html).
    ///   This must be set with a `volume_type` of `"io1"`.
    /// * `delete_on_termination` - (Optional) Whether the volume should be destroyed
    ///   on instance termination (Default: `true`).
    /// * `encrypted` - (Optional) Whether the volume should be encrypted or not. (Default: `false`).
    /// 
    /// Modifying any of the `root_block_device` settings requires resource
    /// replacement.
    /// 
    /// Each `ebs_block_device` supports the following:
    /// 
    /// * `device_name` - (Required) The name of the device to mount.
    /// * `snapshot_id` - (Optional) The Snapshot ID to mount.
    /// * `volume_type` - (Optional) The type of volume. Can be `"standard"`, `"gp2"`,
    ///   or `"io1"`. (Default: `"standard"`).
    /// * `volume_size` - (Optional) The size of the volume in gigabytes.
    /// * `iops` - (Optional) The amount of provisioned
    ///   [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html).
    ///   This must be set with a `volume_type` of `"io1"`.
    /// * `delete_on_termination` - (Optional) Whether the volume should be destroyed
    ///   on instance termination (Default: `true`).
    /// * `encrypted` - (Optional) Whether the volume should be encrypted or not. Do not use this option if you are using `snapshot_id` as the encrypted flag will be determined by the snapshot. (Default: `false`).
    /// 
    /// Modifying any `ebs_block_device` currently requires resource replacement.
    /// 
    /// Each `ephemeral_block_device` supports the following:
    /// 
    /// * `device_name` - The name of the block device to mount on the instance.
    /// * `virtual_name` - The [Instance Store Device
    ///   Name](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#InstanceStoreDeviceNames)
    ///   (e.g. `"ephemeral0"`)
    /// 
    /// Each AWS Instance type has a different set of Instance Store block devices
    /// available for attachment. AWS [publishes a
    /// list](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#StorageOnInstanceTypes)
    /// of which ephemeral devices are available on each type. The devices are always
    /// identified by the `virtual_name` in the format `"ephemeral{0..N}"`.
    /// 
    /// &gt; **NOTE:** Changes to `*_block_device` configuration of _existing_ resources
    /// cannot currently be detected by this provider. After updating to block device
    /// configuration, resource recreation can be manually triggered by using the
    /// [`taint` command](https://www.terraform.io/docs/commands/taint.html).
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/launch_configuration.html.markdown.
    /// </summary>
    public partial class LaunchConfiguration : Pulumi.CustomResource
    {
        /// <summary>
        /// The Amazon Resource Name of the launch configuration.
        /// </summary>
        [Output("arn")]
        public Output<string> Arn { get; private set; } = null!;

        /// <summary>
        /// Associate a public ip address with an instance in a VPC.
        /// </summary>
        [Output("associatePublicIpAddress")]
        public Output<bool?> AssociatePublicIpAddress { get; private set; } = null!;

        /// <summary>
        /// Additional EBS block devices to attach to the
        /// instance.  See Block Devices below for details.
        /// </summary>
        [Output("ebsBlockDevices")]
        public Output<ImmutableArray<Outputs.LaunchConfigurationEbsBlockDevices>> EbsBlockDevices { get; private set; } = null!;

        /// <summary>
        /// If true, the launched EC2 instance will be EBS-optimized.
        /// </summary>
        [Output("ebsOptimized")]
        public Output<bool> EbsOptimized { get; private set; } = null!;

        /// <summary>
        /// Enables/disables detailed monitoring. This is enabled by default.
        /// </summary>
        [Output("enableMonitoring")]
        public Output<bool?> EnableMonitoring { get; private set; } = null!;

        /// <summary>
        /// Customize Ephemeral (also known as
        /// "Instance Store") volumes on the instance. See Block Devices below for details.
        /// </summary>
        [Output("ephemeralBlockDevices")]
        public Output<ImmutableArray<Outputs.LaunchConfigurationEphemeralBlockDevices>> EphemeralBlockDevices { get; private set; } = null!;

        /// <summary>
        /// The name attribute of the IAM instance profile to associate
        /// with launched instances.
        /// </summary>
        [Output("iamInstanceProfile")]
        public Output<string?> IamInstanceProfile { get; private set; } = null!;

        /// <summary>
        /// The EC2 image ID to launch.
        /// </summary>
        [Output("imageId")]
        public Output<string> ImageId { get; private set; } = null!;

        /// <summary>
        /// The size of instance to launch.
        /// </summary>
        [Output("instanceType")]
        public Output<string> InstanceType { get; private set; } = null!;

        /// <summary>
        /// The key name that should be used for the instance.
        /// </summary>
        [Output("keyName")]
        public Output<string> KeyName { get; private set; } = null!;

        /// <summary>
        /// The name of the launch configuration. If you leave
        /// this blank, this provider will auto-generate a unique name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Creates a unique name beginning with the specified
        /// prefix. Conflicts with `name`.
        /// </summary>
        [Output("namePrefix")]
        public Output<string?> NamePrefix { get; private set; } = null!;

        /// <summary>
        /// The tenancy of the instance. Valid values are
        /// `"default"` or `"dedicated"`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html)
        /// for more details
        /// </summary>
        [Output("placementTenancy")]
        public Output<string?> PlacementTenancy { get; private set; } = null!;

        /// <summary>
        /// Customize details about the root block
        /// device of the instance. See Block Devices below for details.
        /// </summary>
        [Output("rootBlockDevice")]
        public Output<Outputs.LaunchConfigurationRootBlockDevice> RootBlockDevice { get; private set; } = null!;

        /// <summary>
        /// A list of associated security group IDS.
        /// </summary>
        [Output("securityGroups")]
        public Output<ImmutableArray<string>> SecurityGroups { get; private set; } = null!;

        /// <summary>
        /// The maximum price to use for reserving spot instances.
        /// </summary>
        [Output("spotPrice")]
        public Output<string?> SpotPrice { get; private set; } = null!;

        /// <summary>
        /// The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead.
        /// </summary>
        [Output("userData")]
        public Output<string?> UserData { get; private set; } = null!;

        /// <summary>
        /// Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption.
        /// </summary>
        [Output("userDataBase64")]
        public Output<string?> UserDataBase64 { get; private set; } = null!;

        /// <summary>
        /// The ID of a ClassicLink-enabled VPC. Only applies to EC2-Classic instances. (eg. `vpc-2730681a`)
        /// </summary>
        [Output("vpcClassicLinkId")]
        public Output<string?> VpcClassicLinkId { get; private set; } = null!;

        /// <summary>
        /// The IDs of one or more security groups for the specified ClassicLink-enabled VPC (eg. `sg-46ae3d11`).
        /// </summary>
        [Output("vpcClassicLinkSecurityGroups")]
        public Output<ImmutableArray<string>> VpcClassicLinkSecurityGroups { get; private set; } = null!;


        /// <summary>
        /// Create a LaunchConfiguration resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public LaunchConfiguration(string name, LaunchConfigurationArgs args, CustomResourceOptions? options = null)
            : base("aws:ec2/launchConfiguration:LaunchConfiguration", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private LaunchConfiguration(string name, Input<string> id, LaunchConfigurationState? state = null, CustomResourceOptions? options = null)
            : base("aws:ec2/launchConfiguration:LaunchConfiguration", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing LaunchConfiguration resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static LaunchConfiguration Get(string name, Input<string> id, LaunchConfigurationState? state = null, CustomResourceOptions? options = null)
        {
            return new LaunchConfiguration(name, id, state, options);
        }
    }

    public sealed class LaunchConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Associate a public ip address with an instance in a VPC.
        /// </summary>
        [Input("associatePublicIpAddress")]
        public Input<bool>? AssociatePublicIpAddress { get; set; }

        [Input("ebsBlockDevices")]
        private InputList<Inputs.LaunchConfigurationEbsBlockDevicesArgs>? _ebsBlockDevices;

        /// <summary>
        /// Additional EBS block devices to attach to the
        /// instance.  See Block Devices below for details.
        /// </summary>
        public InputList<Inputs.LaunchConfigurationEbsBlockDevicesArgs> EbsBlockDevices
        {
            get => _ebsBlockDevices ?? (_ebsBlockDevices = new InputList<Inputs.LaunchConfigurationEbsBlockDevicesArgs>());
            set => _ebsBlockDevices = value;
        }

        /// <summary>
        /// If true, the launched EC2 instance will be EBS-optimized.
        /// </summary>
        [Input("ebsOptimized")]
        public Input<bool>? EbsOptimized { get; set; }

        /// <summary>
        /// Enables/disables detailed monitoring. This is enabled by default.
        /// </summary>
        [Input("enableMonitoring")]
        public Input<bool>? EnableMonitoring { get; set; }

        [Input("ephemeralBlockDevices")]
        private InputList<Inputs.LaunchConfigurationEphemeralBlockDevicesArgs>? _ephemeralBlockDevices;

        /// <summary>
        /// Customize Ephemeral (also known as
        /// "Instance Store") volumes on the instance. See Block Devices below for details.
        /// </summary>
        public InputList<Inputs.LaunchConfigurationEphemeralBlockDevicesArgs> EphemeralBlockDevices
        {
            get => _ephemeralBlockDevices ?? (_ephemeralBlockDevices = new InputList<Inputs.LaunchConfigurationEphemeralBlockDevicesArgs>());
            set => _ephemeralBlockDevices = value;
        }

        /// <summary>
        /// The name attribute of the IAM instance profile to associate
        /// with launched instances.
        /// </summary>
        [Input("iamInstanceProfile")]
        public Input<string>? IamInstanceProfile { get; set; }

        /// <summary>
        /// The EC2 image ID to launch.
        /// </summary>
        [Input("imageId", required: true)]
        public Input<string> ImageId { get; set; } = null!;

        /// <summary>
        /// The size of instance to launch.
        /// </summary>
        [Input("instanceType", required: true)]
        public Input<string> InstanceType { get; set; } = null!;

        /// <summary>
        /// The key name that should be used for the instance.
        /// </summary>
        [Input("keyName")]
        public Input<string>? KeyName { get; set; }

        /// <summary>
        /// The name of the launch configuration. If you leave
        /// this blank, this provider will auto-generate a unique name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Creates a unique name beginning with the specified
        /// prefix. Conflicts with `name`.
        /// </summary>
        [Input("namePrefix")]
        public Input<string>? NamePrefix { get; set; }

        /// <summary>
        /// The tenancy of the instance. Valid values are
        /// `"default"` or `"dedicated"`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html)
        /// for more details
        /// </summary>
        [Input("placementTenancy")]
        public Input<string>? PlacementTenancy { get; set; }

        /// <summary>
        /// Customize details about the root block
        /// device of the instance. See Block Devices below for details.
        /// </summary>
        [Input("rootBlockDevice")]
        public Input<Inputs.LaunchConfigurationRootBlockDeviceArgs>? RootBlockDevice { get; set; }

        [Input("securityGroups")]
        private InputList<string>? _securityGroups;

        /// <summary>
        /// A list of associated security group IDS.
        /// </summary>
        public InputList<string> SecurityGroups
        {
            get => _securityGroups ?? (_securityGroups = new InputList<string>());
            set => _securityGroups = value;
        }

        /// <summary>
        /// The maximum price to use for reserving spot instances.
        /// </summary>
        [Input("spotPrice")]
        public Input<string>? SpotPrice { get; set; }

        /// <summary>
        /// The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead.
        /// </summary>
        [Input("userData")]
        public Input<string>? UserData { get; set; }

        /// <summary>
        /// Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption.
        /// </summary>
        [Input("userDataBase64")]
        public Input<string>? UserDataBase64 { get; set; }

        /// <summary>
        /// The ID of a ClassicLink-enabled VPC. Only applies to EC2-Classic instances. (eg. `vpc-2730681a`)
        /// </summary>
        [Input("vpcClassicLinkId")]
        public Input<string>? VpcClassicLinkId { get; set; }

        [Input("vpcClassicLinkSecurityGroups")]
        private InputList<string>? _vpcClassicLinkSecurityGroups;

        /// <summary>
        /// The IDs of one or more security groups for the specified ClassicLink-enabled VPC (eg. `sg-46ae3d11`).
        /// </summary>
        public InputList<string> VpcClassicLinkSecurityGroups
        {
            get => _vpcClassicLinkSecurityGroups ?? (_vpcClassicLinkSecurityGroups = new InputList<string>());
            set => _vpcClassicLinkSecurityGroups = value;
        }

        public LaunchConfigurationArgs()
        {
        }
    }

    public sealed class LaunchConfigurationState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Amazon Resource Name of the launch configuration.
        /// </summary>
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        /// <summary>
        /// Associate a public ip address with an instance in a VPC.
        /// </summary>
        [Input("associatePublicIpAddress")]
        public Input<bool>? AssociatePublicIpAddress { get; set; }

        [Input("ebsBlockDevices")]
        private InputList<Inputs.LaunchConfigurationEbsBlockDevicesGetArgs>? _ebsBlockDevices;

        /// <summary>
        /// Additional EBS block devices to attach to the
        /// instance.  See Block Devices below for details.
        /// </summary>
        public InputList<Inputs.LaunchConfigurationEbsBlockDevicesGetArgs> EbsBlockDevices
        {
            get => _ebsBlockDevices ?? (_ebsBlockDevices = new InputList<Inputs.LaunchConfigurationEbsBlockDevicesGetArgs>());
            set => _ebsBlockDevices = value;
        }

        /// <summary>
        /// If true, the launched EC2 instance will be EBS-optimized.
        /// </summary>
        [Input("ebsOptimized")]
        public Input<bool>? EbsOptimized { get; set; }

        /// <summary>
        /// Enables/disables detailed monitoring. This is enabled by default.
        /// </summary>
        [Input("enableMonitoring")]
        public Input<bool>? EnableMonitoring { get; set; }

        [Input("ephemeralBlockDevices")]
        private InputList<Inputs.LaunchConfigurationEphemeralBlockDevicesGetArgs>? _ephemeralBlockDevices;

        /// <summary>
        /// Customize Ephemeral (also known as
        /// "Instance Store") volumes on the instance. See Block Devices below for details.
        /// </summary>
        public InputList<Inputs.LaunchConfigurationEphemeralBlockDevicesGetArgs> EphemeralBlockDevices
        {
            get => _ephemeralBlockDevices ?? (_ephemeralBlockDevices = new InputList<Inputs.LaunchConfigurationEphemeralBlockDevicesGetArgs>());
            set => _ephemeralBlockDevices = value;
        }

        /// <summary>
        /// The name attribute of the IAM instance profile to associate
        /// with launched instances.
        /// </summary>
        [Input("iamInstanceProfile")]
        public Input<string>? IamInstanceProfile { get; set; }

        /// <summary>
        /// The EC2 image ID to launch.
        /// </summary>
        [Input("imageId")]
        public Input<string>? ImageId { get; set; }

        /// <summary>
        /// The size of instance to launch.
        /// </summary>
        [Input("instanceType")]
        public Input<string>? InstanceType { get; set; }

        /// <summary>
        /// The key name that should be used for the instance.
        /// </summary>
        [Input("keyName")]
        public Input<string>? KeyName { get; set; }

        /// <summary>
        /// The name of the launch configuration. If you leave
        /// this blank, this provider will auto-generate a unique name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Creates a unique name beginning with the specified
        /// prefix. Conflicts with `name`.
        /// </summary>
        [Input("namePrefix")]
        public Input<string>? NamePrefix { get; set; }

        /// <summary>
        /// The tenancy of the instance. Valid values are
        /// `"default"` or `"dedicated"`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html)
        /// for more details
        /// </summary>
        [Input("placementTenancy")]
        public Input<string>? PlacementTenancy { get; set; }

        /// <summary>
        /// Customize details about the root block
        /// device of the instance. See Block Devices below for details.
        /// </summary>
        [Input("rootBlockDevice")]
        public Input<Inputs.LaunchConfigurationRootBlockDeviceGetArgs>? RootBlockDevice { get; set; }

        [Input("securityGroups")]
        private InputList<string>? _securityGroups;

        /// <summary>
        /// A list of associated security group IDS.
        /// </summary>
        public InputList<string> SecurityGroups
        {
            get => _securityGroups ?? (_securityGroups = new InputList<string>());
            set => _securityGroups = value;
        }

        /// <summary>
        /// The maximum price to use for reserving spot instances.
        /// </summary>
        [Input("spotPrice")]
        public Input<string>? SpotPrice { get; set; }

        /// <summary>
        /// The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead.
        /// </summary>
        [Input("userData")]
        public Input<string>? UserData { get; set; }

        /// <summary>
        /// Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption.
        /// </summary>
        [Input("userDataBase64")]
        public Input<string>? UserDataBase64 { get; set; }

        /// <summary>
        /// The ID of a ClassicLink-enabled VPC. Only applies to EC2-Classic instances. (eg. `vpc-2730681a`)
        /// </summary>
        [Input("vpcClassicLinkId")]
        public Input<string>? VpcClassicLinkId { get; set; }

        [Input("vpcClassicLinkSecurityGroups")]
        private InputList<string>? _vpcClassicLinkSecurityGroups;

        /// <summary>
        /// The IDs of one or more security groups for the specified ClassicLink-enabled VPC (eg. `sg-46ae3d11`).
        /// </summary>
        public InputList<string> VpcClassicLinkSecurityGroups
        {
            get => _vpcClassicLinkSecurityGroups ?? (_vpcClassicLinkSecurityGroups = new InputList<string>());
            set => _vpcClassicLinkSecurityGroups = value;
        }

        public LaunchConfigurationState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class LaunchConfigurationEbsBlockDevicesArgs : Pulumi.ResourceArgs
    {
        [Input("deleteOnTermination")]
        public Input<bool>? DeleteOnTermination { get; set; }

        [Input("deviceName", required: true)]
        public Input<string> DeviceName { get; set; } = null!;

        [Input("encrypted")]
        public Input<bool>? Encrypted { get; set; }

        [Input("iops")]
        public Input<int>? Iops { get; set; }

        [Input("noDevice")]
        public Input<bool>? NoDevice { get; set; }

        [Input("snapshotId")]
        public Input<string>? SnapshotId { get; set; }

        [Input("volumeSize")]
        public Input<int>? VolumeSize { get; set; }

        [Input("volumeType")]
        public Input<string>? VolumeType { get; set; }

        public LaunchConfigurationEbsBlockDevicesArgs()
        {
        }
    }

    public sealed class LaunchConfigurationEbsBlockDevicesGetArgs : Pulumi.ResourceArgs
    {
        [Input("deleteOnTermination")]
        public Input<bool>? DeleteOnTermination { get; set; }

        [Input("deviceName", required: true)]
        public Input<string> DeviceName { get; set; } = null!;

        [Input("encrypted")]
        public Input<bool>? Encrypted { get; set; }

        [Input("iops")]
        public Input<int>? Iops { get; set; }

        [Input("noDevice")]
        public Input<bool>? NoDevice { get; set; }

        [Input("snapshotId")]
        public Input<string>? SnapshotId { get; set; }

        [Input("volumeSize")]
        public Input<int>? VolumeSize { get; set; }

        [Input("volumeType")]
        public Input<string>? VolumeType { get; set; }

        public LaunchConfigurationEbsBlockDevicesGetArgs()
        {
        }
    }

    public sealed class LaunchConfigurationEphemeralBlockDevicesArgs : Pulumi.ResourceArgs
    {
        [Input("deviceName", required: true)]
        public Input<string> DeviceName { get; set; } = null!;

        [Input("virtualName", required: true)]
        public Input<string> VirtualName { get; set; } = null!;

        public LaunchConfigurationEphemeralBlockDevicesArgs()
        {
        }
    }

    public sealed class LaunchConfigurationEphemeralBlockDevicesGetArgs : Pulumi.ResourceArgs
    {
        [Input("deviceName", required: true)]
        public Input<string> DeviceName { get; set; } = null!;

        [Input("virtualName", required: true)]
        public Input<string> VirtualName { get; set; } = null!;

        public LaunchConfigurationEphemeralBlockDevicesGetArgs()
        {
        }
    }

    public sealed class LaunchConfigurationRootBlockDeviceArgs : Pulumi.ResourceArgs
    {
        [Input("deleteOnTermination")]
        public Input<bool>? DeleteOnTermination { get; set; }

        [Input("encrypted")]
        public Input<bool>? Encrypted { get; set; }

        [Input("iops")]
        public Input<int>? Iops { get; set; }

        [Input("volumeSize")]
        public Input<int>? VolumeSize { get; set; }

        [Input("volumeType")]
        public Input<string>? VolumeType { get; set; }

        public LaunchConfigurationRootBlockDeviceArgs()
        {
        }
    }

    public sealed class LaunchConfigurationRootBlockDeviceGetArgs : Pulumi.ResourceArgs
    {
        [Input("deleteOnTermination")]
        public Input<bool>? DeleteOnTermination { get; set; }

        [Input("encrypted")]
        public Input<bool>? Encrypted { get; set; }

        [Input("iops")]
        public Input<int>? Iops { get; set; }

        [Input("volumeSize")]
        public Input<int>? VolumeSize { get; set; }

        [Input("volumeType")]
        public Input<string>? VolumeType { get; set; }

        public LaunchConfigurationRootBlockDeviceGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class LaunchConfigurationEbsBlockDevices
    {
        public readonly bool? DeleteOnTermination;
        public readonly string DeviceName;
        public readonly bool Encrypted;
        public readonly int Iops;
        public readonly bool? NoDevice;
        public readonly string SnapshotId;
        public readonly int VolumeSize;
        public readonly string VolumeType;

        [OutputConstructor]
        private LaunchConfigurationEbsBlockDevices(
            bool? deleteOnTermination,
            string deviceName,
            bool encrypted,
            int iops,
            bool? noDevice,
            string snapshotId,
            int volumeSize,
            string volumeType)
        {
            DeleteOnTermination = deleteOnTermination;
            DeviceName = deviceName;
            Encrypted = encrypted;
            Iops = iops;
            NoDevice = noDevice;
            SnapshotId = snapshotId;
            VolumeSize = volumeSize;
            VolumeType = volumeType;
        }
    }

    [OutputType]
    public sealed class LaunchConfigurationEphemeralBlockDevices
    {
        public readonly string DeviceName;
        public readonly string VirtualName;

        [OutputConstructor]
        private LaunchConfigurationEphemeralBlockDevices(
            string deviceName,
            string virtualName)
        {
            DeviceName = deviceName;
            VirtualName = virtualName;
        }
    }

    [OutputType]
    public sealed class LaunchConfigurationRootBlockDevice
    {
        public readonly bool? DeleteOnTermination;
        public readonly bool Encrypted;
        public readonly int Iops;
        public readonly int VolumeSize;
        public readonly string VolumeType;

        [OutputConstructor]
        private LaunchConfigurationRootBlockDevice(
            bool? deleteOnTermination,
            bool encrypted,
            int iops,
            int volumeSize,
            string volumeType)
        {
            DeleteOnTermination = deleteOnTermination;
            Encrypted = encrypted;
            Iops = iops;
            VolumeSize = volumeSize;
            VolumeType = volumeType;
        }
    }
    }
}
