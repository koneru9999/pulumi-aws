// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CodeStarNotifications.Inputs
{

    public sealed class NotificationRuleTargetGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ARN of notification rule target. For example, a SNS Topic ARN.
        /// </summary>
        [Input("address", required: true)]
        public Input<string> Address { get; set; } = null!;

        /// <summary>
        /// The status of the notification rule. Possible values are `ENABLED` and `DISABLED`, default is `ENABLED`.
        /// </summary>
        [Input("status")]
        public Input<string>? Status { get; set; }

        /// <summary>
        /// The type of the notification target. Default value is `SNS`.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public NotificationRuleTargetGetArgs()
        {
        }
    }
}