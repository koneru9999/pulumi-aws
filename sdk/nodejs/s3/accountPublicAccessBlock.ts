// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages S3 account-level Public Access Block configuration. For more information about these settings, see the [AWS S3 Block Public Access documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html).
 * 
 * > **NOTE:** Each AWS account may only have one S3 Public Access Block configuration. Multiple configurations of the resource against the same AWS account will cause a perpetual difference.
 * 
 * > Advanced usage: To use a custom API endpoint for this Terraform resource, use the [`s3control` endpoint provider configuration](https://www.terraform.io/docs/providers/aws/index.html#s3control), not the `s3` endpoint provider configuration.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.s3.AccountPublicAccessBlock("example", {
 *     blockPublicAcls: true,
 *     blockPublicPolicy: true,
 * });
 * ```
 */
export class AccountPublicAccessBlock extends pulumi.CustomResource {
    /**
     * Get an existing AccountPublicAccessBlock resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccountPublicAccessBlockState, opts?: pulumi.CustomResourceOptions): AccountPublicAccessBlock {
        return new AccountPublicAccessBlock(name, <any>state, { ...opts, id: id });
    }

    /**
     * AWS account ID to configure. Defaults to automatically determined account ID of the Terraform AWS provider.
     */
    public readonly accountId: pulumi.Output<string>;
    /**
     * Whether Amazon S3 should block public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:
     * * PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.
     * * PUT Object calls will fail if the request includes an object ACL.
     */
    public readonly blockPublicAcls: pulumi.Output<boolean | undefined>;
    /**
     * Whether Amazon S3 should block public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing bucket policies. When set to `true` causes Amazon S3 to:
     * * Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
     */
    public readonly blockPublicPolicy: pulumi.Output<boolean | undefined>;
    /**
     * Whether Amazon S3 should ignore public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:
     * * Ignore all public ACLs on buckets in this account and any objects that they contain.
     */
    public readonly ignorePublicAcls: pulumi.Output<boolean | undefined>;
    /**
     * Whether Amazon S3 should restrict public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:
     * * Only the bucket owner and AWS Services can access buckets with public policies.
     */
    public readonly restrictPublicBuckets: pulumi.Output<boolean | undefined>;

    /**
     * Create a AccountPublicAccessBlock resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AccountPublicAccessBlockArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccountPublicAccessBlockArgs | AccountPublicAccessBlockState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: AccountPublicAccessBlockState = argsOrState as AccountPublicAccessBlockState | undefined;
            inputs["accountId"] = state ? state.accountId : undefined;
            inputs["blockPublicAcls"] = state ? state.blockPublicAcls : undefined;
            inputs["blockPublicPolicy"] = state ? state.blockPublicPolicy : undefined;
            inputs["ignorePublicAcls"] = state ? state.ignorePublicAcls : undefined;
            inputs["restrictPublicBuckets"] = state ? state.restrictPublicBuckets : undefined;
        } else {
            const args = argsOrState as AccountPublicAccessBlockArgs | undefined;
            inputs["accountId"] = args ? args.accountId : undefined;
            inputs["blockPublicAcls"] = args ? args.blockPublicAcls : undefined;
            inputs["blockPublicPolicy"] = args ? args.blockPublicPolicy : undefined;
            inputs["ignorePublicAcls"] = args ? args.ignorePublicAcls : undefined;
            inputs["restrictPublicBuckets"] = args ? args.restrictPublicBuckets : undefined;
        }
        super("aws:s3/accountPublicAccessBlock:AccountPublicAccessBlock", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AccountPublicAccessBlock resources.
 */
export interface AccountPublicAccessBlockState {
    /**
     * AWS account ID to configure. Defaults to automatically determined account ID of the Terraform AWS provider.
     */
    readonly accountId?: pulumi.Input<string>;
    /**
     * Whether Amazon S3 should block public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:
     * * PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.
     * * PUT Object calls will fail if the request includes an object ACL.
     */
    readonly blockPublicAcls?: pulumi.Input<boolean>;
    /**
     * Whether Amazon S3 should block public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing bucket policies. When set to `true` causes Amazon S3 to:
     * * Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
     */
    readonly blockPublicPolicy?: pulumi.Input<boolean>;
    /**
     * Whether Amazon S3 should ignore public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:
     * * Ignore all public ACLs on buckets in this account and any objects that they contain.
     */
    readonly ignorePublicAcls?: pulumi.Input<boolean>;
    /**
     * Whether Amazon S3 should restrict public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:
     * * Only the bucket owner and AWS Services can access buckets with public policies.
     */
    readonly restrictPublicBuckets?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a AccountPublicAccessBlock resource.
 */
export interface AccountPublicAccessBlockArgs {
    /**
     * AWS account ID to configure. Defaults to automatically determined account ID of the Terraform AWS provider.
     */
    readonly accountId?: pulumi.Input<string>;
    /**
     * Whether Amazon S3 should block public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:
     * * PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.
     * * PUT Object calls will fail if the request includes an object ACL.
     */
    readonly blockPublicAcls?: pulumi.Input<boolean>;
    /**
     * Whether Amazon S3 should block public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing bucket policies. When set to `true` causes Amazon S3 to:
     * * Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
     */
    readonly blockPublicPolicy?: pulumi.Input<boolean>;
    /**
     * Whether Amazon S3 should ignore public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:
     * * Ignore all public ACLs on buckets in this account and any objects that they contain.
     */
    readonly ignorePublicAcls?: pulumi.Input<boolean>;
    /**
     * Whether Amazon S3 should restrict public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:
     * * Only the bucket owner and AWS Services can access buckets with public policies.
     */
    readonly restrictPublicBuckets?: pulumi.Input<boolean>;
}

/**
 * The live AccountPublicAccessBlock resource.
 */
export interface AccountPublicAccessBlockResult {
    /**
     * AWS account ID to configure. Defaults to automatically determined account ID of the Terraform AWS provider.
     */
    readonly accountId: string;
    /**
     * Whether Amazon S3 should block public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:
     * * PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.
     * * PUT Object calls will fail if the request includes an object ACL.
     */
    readonly blockPublicAcls?: boolean;
    /**
     * Whether Amazon S3 should block public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing bucket policies. When set to `true` causes Amazon S3 to:
     * * Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
     */
    readonly blockPublicPolicy?: boolean;
    /**
     * Whether Amazon S3 should ignore public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:
     * * Ignore all public ACLs on buckets in this account and any objects that they contain.
     */
    readonly ignorePublicAcls?: boolean;
    /**
     * Whether Amazon S3 should restrict public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:
     * * Only the bucket owner and AWS Services can access buckets with public policies.
     */
    readonly restrictPublicBuckets?: boolean;
}