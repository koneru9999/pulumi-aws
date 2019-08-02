// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a Load Balancer Listener Rule resource.
 * 
 * > **Note:** `aws_alb_listener_rule` is known as `aws_lb_listener_rule`. The functionality is identical.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const pool = new aws.cognito.UserPool("pool", {});
 * const client = new aws.cognito.UserPoolClient("client", {});
 * const domain = new aws.cognito.UserPoolDomain("domain", {});
 * const frontEndLoadBalancer = new aws.lb.LoadBalancer("front_end", {});
 * const frontEndListener = new aws.lb.Listener("front_end", {});
 * const admin = new aws.lb.ListenerRule("admin", {
 *     actions: [
 *         {
 *             authenticateOidc: {
 *                 authorizationEndpoint: "https://example.com/authorization_endpoint",
 *                 clientId: "client_id",
 *                 clientSecret: "client_secret",
 *                 issuer: "https://example.com",
 *                 tokenEndpoint: "https://example.com/token_endpoint",
 *                 userInfoEndpoint: "https://example.com/user_info_endpoint",
 *             },
 *             type: "authenticate-oidc",
 *         },
 *         {
 *             targetGroupArn: aws_lb_target_group_static.arn,
 *             type: "forward",
 *         },
 *     ],
 *     listenerArn: frontEndListener.arn,
 * });
 * const healthCheck = new aws.lb.ListenerRule("health_check", {
 *     actions: [{
 *         fixedResponse: {
 *             contentType: "text/plain",
 *             messageBody: "HEALTHY",
 *             statusCode: "200",
 *         },
 *         type: "fixed-response",
 *     }],
 *     conditions: [{
 *         field: "path-pattern",
 *         values: "/health",
 *     }],
 *     listenerArn: frontEndListener.arn,
 * });
 * const hostBasedRouting = new aws.lb.ListenerRule("host_based_routing", {
 *     actions: [{
 *         targetGroupArn: aws_lb_target_group_static.arn,
 *         type: "forward",
 *     }],
 *     conditions: [{
 *         field: "host-header",
 *         values: "my-service.*.mydomain.io",
 *     }],
 *     listenerArn: frontEndListener.arn,
 *     priority: 99,
 * });
 * const redirectHttpToHttps = new aws.lb.ListenerRule("redirect_http_to_https", {
 *     actions: [{
 *         redirect: {
 *             port: "443",
 *             protocol: "HTTPS",
 *             statusCode: "HTTP_301",
 *         },
 *         type: "redirect",
 *     }],
 *     conditions: [{
 *         field: "host-header",
 *         values: "my-service.*.mydomain.io",
 *     }],
 *     listenerArn: frontEndListener.arn,
 * });
 * const static = new aws.lb.ListenerRule("static", {
 *     actions: [{
 *         targetGroupArn: aws_lb_target_group_static.arn,
 *         type: "forward",
 *     }],
 *     conditions: [{
 *         field: "path-pattern",
 *         values: "/static/*",
 *     }],
 *     listenerArn: frontEndListener.arn,
 *     priority: 100,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/lb_listener_rule_legacy.html.markdown.
 */
export class ListenerRule extends pulumi.CustomResource {
    /**
     * Get an existing ListenerRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ListenerRuleState, opts?: pulumi.CustomResourceOptions): ListenerRule {
        return new ListenerRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:elasticloadbalancingv2/listenerRule:ListenerRule';

    /**
     * Returns true if the given object is an instance of ListenerRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ListenerRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ListenerRule.__pulumiType;
    }

    /**
     * An Action block. Action blocks are documented below.
     */
    public readonly actions!: pulumi.Output<{ authenticateCognito?: { authenticationRequestExtraParams?: {[key: string]: any}, onUnauthenticatedRequest: string, scope: string, sessionCookieName: string, sessionTimeout: number, userPoolArn: string, userPoolClientId: string, userPoolDomain: string }, authenticateOidc?: { authenticationRequestExtraParams?: {[key: string]: any}, authorizationEndpoint: string, clientId: string, clientSecret: string, issuer: string, onUnauthenticatedRequest: string, scope: string, sessionCookieName: string, sessionTimeout: number, tokenEndpoint: string, userInfoEndpoint: string }, fixedResponse?: { contentType: string, messageBody?: string, statusCode: string }, order: number, redirect?: { host?: string, path?: string, port?: string, protocol?: string, query?: string, statusCode: string }, targetGroupArn?: string, type: string }[]>;
    /**
     * The ARN of the rule (matches `id`)
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * A Condition block. Condition blocks are documented below.
     */
    public readonly conditions!: pulumi.Output<{ field?: string, values?: string }[]>;
    /**
     * The ARN of the listener to which to attach the rule.
     */
    public readonly listenerArn!: pulumi.Output<string>;
    /**
     * The priority for the rule between `1` and `50000`. Leaving it unset will automatically set the rule with next available priority after currently existing highest rule. A listener can't have multiple rules with the same priority.
     */
    public readonly priority!: pulumi.Output<number>;

    /**
     * Create a ListenerRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ListenerRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ListenerRuleArgs | ListenerRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ListenerRuleState | undefined;
            inputs["actions"] = state ? state.actions : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["conditions"] = state ? state.conditions : undefined;
            inputs["listenerArn"] = state ? state.listenerArn : undefined;
            inputs["priority"] = state ? state.priority : undefined;
        } else {
            const args = argsOrState as ListenerRuleArgs | undefined;
            if (!args || args.actions === undefined) {
                throw new Error("Missing required property 'actions'");
            }
            if (!args || args.conditions === undefined) {
                throw new Error("Missing required property 'conditions'");
            }
            if (!args || args.listenerArn === undefined) {
                throw new Error("Missing required property 'listenerArn'");
            }
            inputs["actions"] = args ? args.actions : undefined;
            inputs["conditions"] = args ? args.conditions : undefined;
            inputs["listenerArn"] = args ? args.listenerArn : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ListenerRule.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ListenerRule resources.
 */
export interface ListenerRuleState {
    /**
     * An Action block. Action blocks are documented below.
     */
    readonly actions?: pulumi.Input<pulumi.Input<{ authenticateCognito?: pulumi.Input<{ authenticationRequestExtraParams?: pulumi.Input<{[key: string]: any}>, onUnauthenticatedRequest?: pulumi.Input<string>, scope?: pulumi.Input<string>, sessionCookieName?: pulumi.Input<string>, sessionTimeout?: pulumi.Input<number>, userPoolArn: pulumi.Input<string>, userPoolClientId: pulumi.Input<string>, userPoolDomain: pulumi.Input<string> }>, authenticateOidc?: pulumi.Input<{ authenticationRequestExtraParams?: pulumi.Input<{[key: string]: any}>, authorizationEndpoint: pulumi.Input<string>, clientId: pulumi.Input<string>, clientSecret: pulumi.Input<string>, issuer: pulumi.Input<string>, onUnauthenticatedRequest?: pulumi.Input<string>, scope?: pulumi.Input<string>, sessionCookieName?: pulumi.Input<string>, sessionTimeout?: pulumi.Input<number>, tokenEndpoint: pulumi.Input<string>, userInfoEndpoint: pulumi.Input<string> }>, fixedResponse?: pulumi.Input<{ contentType: pulumi.Input<string>, messageBody?: pulumi.Input<string>, statusCode?: pulumi.Input<string> }>, order?: pulumi.Input<number>, redirect?: pulumi.Input<{ host?: pulumi.Input<string>, path?: pulumi.Input<string>, port?: pulumi.Input<string>, protocol?: pulumi.Input<string>, query?: pulumi.Input<string>, statusCode: pulumi.Input<string> }>, targetGroupArn?: pulumi.Input<string>, type: pulumi.Input<string> }>[]>;
    /**
     * The ARN of the rule (matches `id`)
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * A Condition block. Condition blocks are documented below.
     */
    readonly conditions?: pulumi.Input<pulumi.Input<{ field?: pulumi.Input<string>, values?: pulumi.Input<string> }>[]>;
    /**
     * The ARN of the listener to which to attach the rule.
     */
    readonly listenerArn?: pulumi.Input<string>;
    /**
     * The priority for the rule between `1` and `50000`. Leaving it unset will automatically set the rule with next available priority after currently existing highest rule. A listener can't have multiple rules with the same priority.
     */
    readonly priority?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ListenerRule resource.
 */
export interface ListenerRuleArgs {
    /**
     * An Action block. Action blocks are documented below.
     */
    readonly actions: pulumi.Input<pulumi.Input<{ authenticateCognito?: pulumi.Input<{ authenticationRequestExtraParams?: pulumi.Input<{[key: string]: any}>, onUnauthenticatedRequest?: pulumi.Input<string>, scope?: pulumi.Input<string>, sessionCookieName?: pulumi.Input<string>, sessionTimeout?: pulumi.Input<number>, userPoolArn: pulumi.Input<string>, userPoolClientId: pulumi.Input<string>, userPoolDomain: pulumi.Input<string> }>, authenticateOidc?: pulumi.Input<{ authenticationRequestExtraParams?: pulumi.Input<{[key: string]: any}>, authorizationEndpoint: pulumi.Input<string>, clientId: pulumi.Input<string>, clientSecret: pulumi.Input<string>, issuer: pulumi.Input<string>, onUnauthenticatedRequest?: pulumi.Input<string>, scope?: pulumi.Input<string>, sessionCookieName?: pulumi.Input<string>, sessionTimeout?: pulumi.Input<number>, tokenEndpoint: pulumi.Input<string>, userInfoEndpoint: pulumi.Input<string> }>, fixedResponse?: pulumi.Input<{ contentType: pulumi.Input<string>, messageBody?: pulumi.Input<string>, statusCode?: pulumi.Input<string> }>, order?: pulumi.Input<number>, redirect?: pulumi.Input<{ host?: pulumi.Input<string>, path?: pulumi.Input<string>, port?: pulumi.Input<string>, protocol?: pulumi.Input<string>, query?: pulumi.Input<string>, statusCode: pulumi.Input<string> }>, targetGroupArn?: pulumi.Input<string>, type: pulumi.Input<string> }>[]>;
    /**
     * A Condition block. Condition blocks are documented below.
     */
    readonly conditions: pulumi.Input<pulumi.Input<{ field?: pulumi.Input<string>, values?: pulumi.Input<string> }>[]>;
    /**
     * The ARN of the listener to which to attach the rule.
     */
    readonly listenerArn: pulumi.Input<string>;
    /**
     * The priority for the rule between `1` and `50000`. Leaving it unset will automatically set the rule with next available priority after currently existing highest rule. A listener can't have multiple rules with the same priority.
     */
    readonly priority?: pulumi.Input<number>;
}
