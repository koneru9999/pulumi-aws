// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.servicediscovery.HttpNamespace("example", {
 *     description: "example",
 *     name: "development",
 * });
 * ```
 */
export class HttpNamespace extends pulumi.CustomResource {
    /**
     * Get an existing HttpNamespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HttpNamespaceState, opts?: pulumi.CustomResourceOptions): HttpNamespace {
        return new HttpNamespace(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ARN that Amazon Route 53 assigns to the namespace when you create it.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The description that you specify for the namespace when you create it.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * The name of the http namespace.
     */
    public readonly name: pulumi.Output<string>;

    /**
     * Create a HttpNamespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: HttpNamespaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HttpNamespaceArgs | HttpNamespaceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: HttpNamespaceState = argsOrState as HttpNamespaceState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as HttpNamespaceArgs | undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:servicediscovery/httpNamespace:HttpNamespace", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering HttpNamespace resources.
 */
export interface HttpNamespaceState {
    /**
     * The ARN that Amazon Route 53 assigns to the namespace when you create it.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The description that you specify for the namespace when you create it.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the http namespace.
     */
    readonly name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HttpNamespace resource.
 */
export interface HttpNamespaceArgs {
    /**
     * The description that you specify for the namespace when you create it.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the http namespace.
     */
    readonly name?: pulumi.Input<string>;
}

/**
 * The live HttpNamespace resource.
 */
export interface HttpNamespaceResult {
    /**
     * The ARN that Amazon Route 53 assigns to the namespace when you create it.
     */
    readonly arn: string;
    /**
     * The description that you specify for the namespace when you create it.
     */
    readonly description?: string;
    /**
     * The name of the http namespace.
     */
    readonly name: string;
}