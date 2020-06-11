// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.GlobalAccelerator.Inputs
{

    public sealed class EndpointGroupEndpointConfigurationGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address allocation ID.
        /// </summary>
        [Input("endpointId")]
        public Input<string>? EndpointId { get; set; }

        /// <summary>
        /// The weight associated with the endpoint. When you add weights to endpoints, you configure AWS Global Accelerator to route traffic based on proportions that you specify.
        /// </summary>
        [Input("weight")]
        public Input<int>? Weight { get; set; }

        public EndpointGroupEndpointConfigurationGetArgs()
        {
        }
    }
}
