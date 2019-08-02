// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an network ACL resource. You might set up network ACLs with rules similar
 * to your security groups in order to add an additional layer of security to your VPC.
 * 
 * > **NOTE on Network ACLs and Network ACL Rules:** This provider currently
 * provides both a standalone Network ACL Rule resource and a Network ACL resource with rules
 * defined in-line. At this time you cannot use a Network ACL with in-line rules
 * in conjunction with any Network ACL Rule resources. Doing so will cause
 * a conflict of rule settings and will overwrite rules.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const main = new aws.ec2.NetworkAcl("main", {
 *     egress: [{
 *         action: "allow",
 *         cidrBlock: "10.3.0.0/18",
 *         fromPort: 443,
 *         protocol: "tcp",
 *         ruleNo: 200,
 *         toPort: 443,
 *     }],
 *     ingress: [{
 *         action: "allow",
 *         cidrBlock: "10.3.0.0/18",
 *         fromPort: 80,
 *         protocol: "tcp",
 *         ruleNo: 100,
 *         toPort: 80,
 *     }],
 *     tags: {
 *         Name: "main",
 *     },
 *     vpcId: aws_vpc_main.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/network_acl.html.markdown.
 */
export class NetworkAcl extends pulumi.CustomResource {
    /**
     * Get an existing NetworkAcl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkAclState, opts?: pulumi.CustomResourceOptions): NetworkAcl {
        return new NetworkAcl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ec2/networkAcl:NetworkAcl';

    /**
     * Returns true if the given object is an instance of NetworkAcl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkAcl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkAcl.__pulumiType;
    }

    /**
     * Specifies an egress rule. Parameters defined below.
     * This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
     */
    public readonly egress!: pulumi.Output<{ action: string, cidrBlock?: string, fromPort: number, icmpCode?: number, icmpType?: number, ipv6CidrBlock?: string, protocol: string, ruleNo: number, toPort: number }[]>;
    /**
     * Specifies an ingress rule. Parameters defined below.
     * This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
     */
    public readonly ingress!: pulumi.Output<{ action: string, cidrBlock?: string, fromPort: number, icmpCode?: number, icmpType?: number, ipv6CidrBlock?: string, protocol: string, ruleNo: number, toPort: number }[]>;
    /**
     * The ID of the AWS account that owns the network ACL.
     */
    public /*out*/ readonly ownerId!: pulumi.Output<string>;
    /**
     * A list of Subnet IDs to apply the ACL to
     */
    public readonly subnetIds!: pulumi.Output<string[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The ID of the associated VPC.
     */
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a NetworkAcl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkAclArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkAclArgs | NetworkAclState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as NetworkAclState | undefined;
            inputs["egress"] = state ? state.egress : undefined;
            inputs["ingress"] = state ? state.ingress : undefined;
            inputs["ownerId"] = state ? state.ownerId : undefined;
            inputs["subnetIds"] = state ? state.subnetIds : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as NetworkAclArgs | undefined;
            if (!args || args.vpcId === undefined) {
                throw new Error("Missing required property 'vpcId'");
            }
            inputs["egress"] = args ? args.egress : undefined;
            inputs["ingress"] = args ? args.ingress : undefined;
            inputs["subnetIds"] = args ? args.subnetIds : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpcId"] = args ? args.vpcId : undefined;
            inputs["ownerId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(NetworkAcl.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NetworkAcl resources.
 */
export interface NetworkAclState {
    /**
     * Specifies an egress rule. Parameters defined below.
     * This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
     */
    readonly egress?: pulumi.Input<pulumi.Input<{ action: pulumi.Input<string>, cidrBlock?: pulumi.Input<string>, fromPort: pulumi.Input<number>, icmpCode?: pulumi.Input<number>, icmpType?: pulumi.Input<number>, ipv6CidrBlock?: pulumi.Input<string>, protocol: pulumi.Input<string>, ruleNo: pulumi.Input<number>, toPort: pulumi.Input<number> }>[]>;
    /**
     * Specifies an ingress rule. Parameters defined below.
     * This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
     */
    readonly ingress?: pulumi.Input<pulumi.Input<{ action: pulumi.Input<string>, cidrBlock?: pulumi.Input<string>, fromPort: pulumi.Input<number>, icmpCode?: pulumi.Input<number>, icmpType?: pulumi.Input<number>, ipv6CidrBlock?: pulumi.Input<string>, protocol: pulumi.Input<string>, ruleNo: pulumi.Input<number>, toPort: pulumi.Input<number> }>[]>;
    /**
     * The ID of the AWS account that owns the network ACL.
     */
    readonly ownerId?: pulumi.Input<string>;
    /**
     * A list of Subnet IDs to apply the ACL to
     */
    readonly subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The ID of the associated VPC.
     */
    readonly vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkAcl resource.
 */
export interface NetworkAclArgs {
    /**
     * Specifies an egress rule. Parameters defined below.
     * This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
     */
    readonly egress?: pulumi.Input<pulumi.Input<{ action: pulumi.Input<string>, cidrBlock?: pulumi.Input<string>, fromPort: pulumi.Input<number>, icmpCode?: pulumi.Input<number>, icmpType?: pulumi.Input<number>, ipv6CidrBlock?: pulumi.Input<string>, protocol: pulumi.Input<string>, ruleNo: pulumi.Input<number>, toPort: pulumi.Input<number> }>[]>;
    /**
     * Specifies an ingress rule. Parameters defined below.
     * This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
     */
    readonly ingress?: pulumi.Input<pulumi.Input<{ action: pulumi.Input<string>, cidrBlock?: pulumi.Input<string>, fromPort: pulumi.Input<number>, icmpCode?: pulumi.Input<number>, icmpType?: pulumi.Input<number>, ipv6CidrBlock?: pulumi.Input<string>, protocol: pulumi.Input<string>, ruleNo: pulumi.Input<number>, toPort: pulumi.Input<number> }>[]>;
    /**
     * A list of Subnet IDs to apply the ACL to
     */
    readonly subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The ID of the associated VPC.
     */
    readonly vpcId: pulumi.Input<string>;
}
