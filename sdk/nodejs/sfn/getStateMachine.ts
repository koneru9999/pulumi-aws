// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to get the ARN of a State Machine in AWS Step
 * Function (SFN). By using this data source, you can reference a
 * state machine without having to hard code the ARNs as input.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = pulumi.output(aws.sfn.getStateMachine({
 *     name: "an_example_sfn_name",
 * }, { async: true }));
 * ```
 */
export function getStateMachine(args: GetStateMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetStateMachineResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:sfn/getStateMachine:getStateMachine", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getStateMachine.
 */
export interface GetStateMachineArgs {
    /**
     * The friendly name of the state machine to match.
     */
    readonly name: string;
}

/**
 * A collection of values returned by getStateMachine.
 */
export interface GetStateMachineResult {
    /**
     * Set to the arn of the state function.
     */
    readonly arn: string;
    /**
     * The date the state machine was created.
     */
    readonly creationDate: string;
    /**
     * Set to the state machine definition.
     */
    readonly definition: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    /**
     * Set to the roleArn used by the state function.
     */
    readonly roleArn: string;
    /**
     * Set to the current status of the state machine.
     */
    readonly status: string;
}
