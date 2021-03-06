// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Dlm.Outputs
{

    [OutputType]
    public sealed class LifecyclePolicyPolicyDetailsScheduleCreateRule
    {
        /// <summary>
        /// How often this lifecycle policy should be evaluated. `1`, `2`,`3`,`4`,`6`,`8`,`12` or `24` are valid values.
        /// </summary>
        public readonly int Interval;
        /// <summary>
        /// The unit for how often the lifecycle policy should be evaluated. `HOURS` is currently the only allowed value and also the default value.
        /// </summary>
        public readonly string? IntervalUnit;
        /// <summary>
        /// A list of times in 24 hour clock format that sets when the lifecycle policy should be evaluated. Max of 1.
        /// </summary>
        public readonly string? Times;

        [OutputConstructor]
        private LifecyclePolicyPolicyDetailsScheduleCreateRule(
            int interval,

            string? intervalUnit,

            string? times)
        {
            Interval = interval;
            IntervalUnit = intervalUnit;
            Times = times;
        }
    }
}
