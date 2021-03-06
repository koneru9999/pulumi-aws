// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.DynamoDB.Outputs
{

    [OutputType]
    public sealed class TableAttribute
    {
        /// <summary>
        /// The name of the index
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Attribute type, which must be a scalar type: `S`, `N`, or `B` for (S)tring, (N)umber or (B)inary data
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private TableAttribute(
            string name,

            string type)
        {
            Name = name;
            Type = type;
        }
    }
}
