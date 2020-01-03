// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Represents a successful verification of an SES domain identity.
 * 
 * Most commonly, this resource is used together with `aws.route53.Record` and
 * `aws.ses.DomainIdentity` to request an SES domain identity,
 * deploy the required DNS verification records, and wait for verification to complete.
 * 
 * > **WARNING:** This resource implements a part of the verification workflow. It does not represent a real-world entity in AWS, therefore changing or deleting this resource on its own has no immediate effect.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.ses.DomainIdentity("example", {
 *     domain: "example.com",
 * });
 * const exampleAmazonsesVerificationRecord = new aws.route53.Record("exampleAmazonsesVerificationRecord", {
 *     name: pulumi.interpolate`_amazonses.${example.id}`,
 *     records: [example.verificationToken],
 *     ttl: 600,
 *     type: "TXT",
 *     zoneId: aws_route53_zone_example.zoneId,
 * });
 * const exampleVerification = new aws.ses.DomainIdentityVerification("exampleVerification", {
 *     domain: example.id,
 * }, {dependsOn: [exampleAmazonsesVerificationRecord]});
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ses_domain_identity_verification.html.markdown.
 */
export class DomainIdentityVerification extends pulumi.CustomResource {
    /**
     * Get an existing DomainIdentityVerification resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DomainIdentityVerificationState, opts?: pulumi.CustomResourceOptions): DomainIdentityVerification {
        return new DomainIdentityVerification(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ses/domainIdentityVerification:DomainIdentityVerification';

    /**
     * Returns true if the given object is an instance of DomainIdentityVerification.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DomainIdentityVerification {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DomainIdentityVerification.__pulumiType;
    }

    /**
     * The ARN of the domain identity.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The domain name of the SES domain identity to verify.
     */
    public readonly domain!: pulumi.Output<string>;

    /**
     * Create a DomainIdentityVerification resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainIdentityVerificationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DomainIdentityVerificationArgs | DomainIdentityVerificationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DomainIdentityVerificationState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["domain"] = state ? state.domain : undefined;
        } else {
            const args = argsOrState as DomainIdentityVerificationArgs | undefined;
            if (!args || args.domain === undefined) {
                throw new Error("Missing required property 'domain'");
            }
            inputs["domain"] = args ? args.domain : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(DomainIdentityVerification.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DomainIdentityVerification resources.
 */
export interface DomainIdentityVerificationState {
    /**
     * The ARN of the domain identity.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The domain name of the SES domain identity to verify.
     */
    readonly domain?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DomainIdentityVerification resource.
 */
export interface DomainIdentityVerificationArgs {
    /**
     * The domain name of the SES domain identity to verify.
     */
    readonly domain: pulumi.Input<string>;
}
