// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ecs.Inputs
{

    public sealed class TaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The access point ID to use. If an access point is specified, the root directory value will be relative to the directory set for the access point. If specified, transit encryption must be enabled in the EFSVolumeConfiguration.
        /// </summary>
        [Input("accessPointId")]
        public Input<string>? AccessPointId { get; set; }

        /// <summary>
        /// Whether or not to use the Amazon ECS task IAM role defined in a task definition when mounting the Amazon EFS file system. If enabled, transit encryption must be enabled in the EFSVolumeConfiguration. Valid values: `ENABLED`, `DISABLED`. If this parameter is omitted, the default value of `DISABLED` is used.
        /// </summary>
        [Input("iam")]
        public Input<string>? Iam { get; set; }

        public TaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigArgs()
        {
        }
    }
}
