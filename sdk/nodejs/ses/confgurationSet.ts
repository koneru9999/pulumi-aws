// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * @deprecated aws.ses.ConfgurationSet has been deprecated in favor of aws.ses.ConfigurationSet
 */
export class ConfgurationSet extends pulumi.CustomResource {
    /**
     * Get an existing ConfgurationSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConfgurationSetState, opts?: pulumi.CustomResourceOptions): ConfgurationSet {
        pulumi.log.warn("ConfgurationSet is deprecated: aws.ses.ConfgurationSet has been deprecated in favor of aws.ses.ConfigurationSet")
        return new ConfgurationSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ses/confgurationSet:ConfgurationSet';

    /**
     * Returns true if the given object is an instance of ConfgurationSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfgurationSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfgurationSet.__pulumiType;
    }

    public readonly name!: pulumi.Output<string>;

    /**
     * Create a ConfgurationSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    /** @deprecated aws.ses.ConfgurationSet has been deprecated in favor of aws.ses.ConfigurationSet */
    constructor(name: string, args?: ConfgurationSetArgs, opts?: pulumi.CustomResourceOptions)
    /** @deprecated aws.ses.ConfgurationSet has been deprecated in favor of aws.ses.ConfigurationSet */
    constructor(name: string, argsOrState?: ConfgurationSetArgs | ConfgurationSetState, opts?: pulumi.CustomResourceOptions) {
        pulumi.log.warn("ConfgurationSet is deprecated: aws.ses.ConfgurationSet has been deprecated in favor of aws.ses.ConfigurationSet")
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ConfgurationSetState | undefined;
            inputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as ConfgurationSetArgs | undefined;
            inputs["name"] = args ? args.name : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ConfgurationSet.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ConfgurationSet resources.
 */
export interface ConfgurationSetState {
    readonly name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ConfgurationSet resource.
 */
export interface ConfgurationSetArgs {
    readonly name?: pulumi.Input<string>;
}
