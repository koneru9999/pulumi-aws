// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Outputs
{

    [OutputType]
    public sealed class ProviderAssumeRole
    {
        public readonly string? ExternalId;
        public readonly string? Policy;
        public readonly string? RoleArn;
        public readonly string? SessionName;

        [OutputConstructor]
        private ProviderAssumeRole(
            string? externalId,

            string? policy,

            string? roleArn,

            string? sessionName)
        {
            ExternalId = externalId;
            Policy = policy;
            RoleArn = roleArn;
            SessionName = sessionName;
        }
    }
}
