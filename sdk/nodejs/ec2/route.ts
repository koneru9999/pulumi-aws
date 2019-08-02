// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a resource to create a routing table entry (a route) in a VPC routing table.
 * 
 * > **NOTE on Route Tables and Routes:** This provider currently
 * provides both a standalone Route resource and a Route Table resource with routes
 * defined in-line. At this time you cannot use a Route Table with in-line routes
 * in conjunction with any Route resources. Doing so will cause
 * a conflict of rule settings and will overwrite rules.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/route.html.markdown.
 */
export class Route extends pulumi.CustomResource {
    /**
     * Get an existing Route resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouteState, opts?: pulumi.CustomResourceOptions): Route {
        return new Route(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ec2/route:Route';

    /**
     * Returns true if the given object is an instance of Route.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Route {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Route.__pulumiType;
    }

    /**
     * The destination CIDR block.
     */
    public readonly destinationCidrBlock!: pulumi.Output<string | undefined>;
    /**
     * The destination IPv6 CIDR block.
     */
    public readonly destinationIpv6CidrBlock!: pulumi.Output<string | undefined>;
    public /*out*/ readonly destinationPrefixListId!: pulumi.Output<string>;
    /**
     * Identifier of a VPC Egress Only Internet Gateway.
     */
    public readonly egressOnlyGatewayId!: pulumi.Output<string>;
    /**
     * Identifier of a VPC internet gateway or a virtual private gateway.
     */
    public readonly gatewayId!: pulumi.Output<string>;
    /**
     * Identifier of an EC2 instance.
     */
    public readonly instanceId!: pulumi.Output<string>;
    public /*out*/ readonly instanceOwnerId!: pulumi.Output<string>;
    /**
     * Identifier of a VPC NAT gateway.
     */
    public readonly natGatewayId!: pulumi.Output<string>;
    /**
     * Identifier of an EC2 network interface.
     */
    public readonly networkInterfaceId!: pulumi.Output<string>;
    public /*out*/ readonly origin!: pulumi.Output<string>;
    /**
     * The ID of the routing table.
     */
    public readonly routeTableId!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Identifier of an EC2 Transit Gateway.
     */
    public readonly transitGatewayId!: pulumi.Output<string | undefined>;
    /**
     * Identifier of a VPC peering connection.
     */
    public readonly vpcPeeringConnectionId!: pulumi.Output<string | undefined>;

    /**
     * Create a Route resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouteArgs | RouteState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as RouteState | undefined;
            inputs["destinationCidrBlock"] = state ? state.destinationCidrBlock : undefined;
            inputs["destinationIpv6CidrBlock"] = state ? state.destinationIpv6CidrBlock : undefined;
            inputs["destinationPrefixListId"] = state ? state.destinationPrefixListId : undefined;
            inputs["egressOnlyGatewayId"] = state ? state.egressOnlyGatewayId : undefined;
            inputs["gatewayId"] = state ? state.gatewayId : undefined;
            inputs["instanceId"] = state ? state.instanceId : undefined;
            inputs["instanceOwnerId"] = state ? state.instanceOwnerId : undefined;
            inputs["natGatewayId"] = state ? state.natGatewayId : undefined;
            inputs["networkInterfaceId"] = state ? state.networkInterfaceId : undefined;
            inputs["origin"] = state ? state.origin : undefined;
            inputs["routeTableId"] = state ? state.routeTableId : undefined;
            inputs["state"] = state ? state.state : undefined;
            inputs["transitGatewayId"] = state ? state.transitGatewayId : undefined;
            inputs["vpcPeeringConnectionId"] = state ? state.vpcPeeringConnectionId : undefined;
        } else {
            const args = argsOrState as RouteArgs | undefined;
            if (!args || args.routeTableId === undefined) {
                throw new Error("Missing required property 'routeTableId'");
            }
            inputs["destinationCidrBlock"] = args ? args.destinationCidrBlock : undefined;
            inputs["destinationIpv6CidrBlock"] = args ? args.destinationIpv6CidrBlock : undefined;
            inputs["egressOnlyGatewayId"] = args ? args.egressOnlyGatewayId : undefined;
            inputs["gatewayId"] = args ? args.gatewayId : undefined;
            inputs["instanceId"] = args ? args.instanceId : undefined;
            inputs["natGatewayId"] = args ? args.natGatewayId : undefined;
            inputs["networkInterfaceId"] = args ? args.networkInterfaceId : undefined;
            inputs["routeTableId"] = args ? args.routeTableId : undefined;
            inputs["transitGatewayId"] = args ? args.transitGatewayId : undefined;
            inputs["vpcPeeringConnectionId"] = args ? args.vpcPeeringConnectionId : undefined;
            inputs["destinationPrefixListId"] = undefined /*out*/;
            inputs["instanceOwnerId"] = undefined /*out*/;
            inputs["origin"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Route.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Route resources.
 */
export interface RouteState {
    /**
     * The destination CIDR block.
     */
    readonly destinationCidrBlock?: pulumi.Input<string>;
    /**
     * The destination IPv6 CIDR block.
     */
    readonly destinationIpv6CidrBlock?: pulumi.Input<string>;
    readonly destinationPrefixListId?: pulumi.Input<string>;
    /**
     * Identifier of a VPC Egress Only Internet Gateway.
     */
    readonly egressOnlyGatewayId?: pulumi.Input<string>;
    /**
     * Identifier of a VPC internet gateway or a virtual private gateway.
     */
    readonly gatewayId?: pulumi.Input<string>;
    /**
     * Identifier of an EC2 instance.
     */
    readonly instanceId?: pulumi.Input<string>;
    readonly instanceOwnerId?: pulumi.Input<string>;
    /**
     * Identifier of a VPC NAT gateway.
     */
    readonly natGatewayId?: pulumi.Input<string>;
    /**
     * Identifier of an EC2 network interface.
     */
    readonly networkInterfaceId?: pulumi.Input<string>;
    readonly origin?: pulumi.Input<string>;
    /**
     * The ID of the routing table.
     */
    readonly routeTableId?: pulumi.Input<string>;
    readonly state?: pulumi.Input<string>;
    /**
     * Identifier of an EC2 Transit Gateway.
     */
    readonly transitGatewayId?: pulumi.Input<string>;
    /**
     * Identifier of a VPC peering connection.
     */
    readonly vpcPeeringConnectionId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Route resource.
 */
export interface RouteArgs {
    /**
     * The destination CIDR block.
     */
    readonly destinationCidrBlock?: pulumi.Input<string>;
    /**
     * The destination IPv6 CIDR block.
     */
    readonly destinationIpv6CidrBlock?: pulumi.Input<string>;
    /**
     * Identifier of a VPC Egress Only Internet Gateway.
     */
    readonly egressOnlyGatewayId?: pulumi.Input<string>;
    /**
     * Identifier of a VPC internet gateway or a virtual private gateway.
     */
    readonly gatewayId?: pulumi.Input<string>;
    /**
     * Identifier of an EC2 instance.
     */
    readonly instanceId?: pulumi.Input<string>;
    /**
     * Identifier of a VPC NAT gateway.
     */
    readonly natGatewayId?: pulumi.Input<string>;
    /**
     * Identifier of an EC2 network interface.
     */
    readonly networkInterfaceId?: pulumi.Input<string>;
    /**
     * The ID of the routing table.
     */
    readonly routeTableId: pulumi.Input<string>;
    /**
     * Identifier of an EC2 Transit Gateway.
     */
    readonly transitGatewayId?: pulumi.Input<string>;
    /**
     * Identifier of a VPC peering connection.
     */
    readonly vpcPeeringConnectionId?: pulumi.Input<string>;
}
