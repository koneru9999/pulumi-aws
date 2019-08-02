// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {RecordType} from "./recordType";

/**
 * Provides a Route53 record resource.
 * 
 * ## Example Usage
 * 
 * ### Simple routing policy
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const www = new aws.route53.Record("www", {
 *     records: [aws_eip_lb.publicIp],
 *     ttl: 300,
 *     type: "A",
 *     zoneId: aws_route53_zone_primary.zoneId,
 * });
 * ```
 * 
 * ### Weighted routing policy
 * Other routing policies are configured similarly. See [AWS Route53 Developer Guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html) for details.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const www_dev = new aws.route53.Record("www-dev", {
 *     records: ["dev.example.com"],
 *     setIdentifier: "dev",
 *     ttl: 5,
 *     type: "CNAME",
 *     weightedRoutingPolicies: [{
 *         weight: 10,
 *     }],
 *     zoneId: aws_route53_zone_primary.zoneId,
 * });
 * const www_live = new aws.route53.Record("www-live", {
 *     records: ["live.example.com"],
 *     setIdentifier: "live",
 *     ttl: 5,
 *     type: "CNAME",
 *     weightedRoutingPolicies: [{
 *         weight: 90,
 *     }],
 *     zoneId: aws_route53_zone_primary.zoneId,
 * });
 * ```
 * 
 * ### Alias record
 * See [related part of AWS Route53 Developer Guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html)
 * to understand differences between alias and non-alias records.
 * 
 * TTL for all alias records is [60 seconds](https://aws.amazon.com/route53/faqs/#dns_failover_do_i_need_to_adjust),
 * you cannot change this, therefore `ttl` has to be omitted in alias records.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const main = new aws.elb.LoadBalancer("main", {
 *     availabilityZones: ["us-east-1c"],
 *     listeners: [{
 *         instancePort: 80,
 *         instanceProtocol: "http",
 *         lbPort: 80,
 *         lbProtocol: "http",
 *     }],
 * });
 * const www = new aws.route53.Record("www", {
 *     aliases: [{
 *         evaluateTargetHealth: true,
 *         name: main.dnsName,
 *         zoneId: main.zoneId,
 *     }],
 *     type: "A",
 *     zoneId: aws_route53_zone_primary.zoneId,
 * });
 * ```
 * 
 * ### NS and SOA Record Management
 * 
 * When creating Route 53 zones, the `NS` and `SOA` records for the zone are automatically created. Enabling the `allow_overwrite` argument will allow managing these records in a single deployment without the requirement for `import`.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const exampleZone = new aws.route53.Zone("example", {});
 * const exampleRecord = new aws.route53.Record("example", {
 *     allowOverwrite: true,
 *     records: [
 *         exampleZone.nameServers[0],
 *         exampleZone.nameServers[1],
 *         exampleZone.nameServers[2],
 *         exampleZone.nameServers[3],
 *     ],
 *     ttl: 30,
 *     type: "NS",
 *     zoneId: exampleZone.zoneId,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/route53_record.html.markdown.
 */
export class Record extends pulumi.CustomResource {
    /**
     * Get an existing Record resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RecordState, opts?: pulumi.CustomResourceOptions): Record {
        return new Record(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:route53/record:Record';

    /**
     * Returns true if the given object is an instance of Record.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Record {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Record.__pulumiType;
    }

    /**
     * An alias block. Conflicts with `ttl` & `records`.
     * Alias record documented below.
     */
    public readonly aliases!: pulumi.Output<{ evaluateTargetHealth: boolean, name: string, zoneId: string }[] | undefined>;
    /**
     * Allow creation of this record to overwrite an existing record, if any. This does not affect the ability to update the record using this provider and does not prevent other resources within this provider or manual Route 53 changes outside this provider from overwriting this record. `false` by default. This configuration is not recommended for most environments.
     */
    public readonly allowOverwrite!: pulumi.Output<boolean>;
    /**
     * A block indicating the routing behavior when associated health check fails. Conflicts with any other routing policy. Documented below.
     */
    public readonly failoverRoutingPolicies!: pulumi.Output<{ type: string }[] | undefined>;
    /**
     * [FQDN](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) built using the zone domain and `name`.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * A block indicating a routing policy based on the geolocation of the requestor. Conflicts with any other routing policy. Documented below.
     */
    public readonly geolocationRoutingPolicies!: pulumi.Output<{ continent?: string, country?: string, subdivision?: string }[] | undefined>;
    /**
     * The health check the record should be associated with.
     */
    public readonly healthCheckId!: pulumi.Output<string | undefined>;
    /**
     * A block indicating a routing policy based on the latency between the requestor and an AWS region. Conflicts with any other routing policy. Documented below.
     */
    public readonly latencyRoutingPolicies!: pulumi.Output<{ region: string }[] | undefined>;
    /**
     * Set to `true` to indicate a multivalue answer routing policy. Conflicts with any other routing policy.
     */
    public readonly multivalueAnswerRoutingPolicy!: pulumi.Output<boolean | undefined>;
    /**
     * DNS domain name for a CloudFront distribution, S3 bucket, ELB, or another resource record set in this hosted zone.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A string list of records. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add `\"\"` inside the configuration string (e.g. `"first255characters\"\"morecharacters"`).
     */
    public readonly records!: pulumi.Output<string[] | undefined>;
    /**
     * Unique identifier to differentiate records with routing policies from one another. Required if using `failover`, `geolocation`, `latency`, or `weighted` routing policies documented below.
     */
    public readonly setIdentifier!: pulumi.Output<string | undefined>;
    /**
     * The TTL of the record.
     */
    public readonly ttl!: pulumi.Output<number | undefined>;
    /**
     * `PRIMARY` or `SECONDARY`. A `PRIMARY` record will be served if its healthcheck is passing, otherwise the `SECONDARY` will be served. See http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring-options.html#dns-failover-failover-rrsets
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * A block indicating a weighted routing policy. Conflicts with any other routing policy. Documented below.
     */
    public readonly weightedRoutingPolicies!: pulumi.Output<{ weight: number }[] | undefined>;
    /**
     * Hosted zone ID for a CloudFront distribution, S3 bucket, ELB, or Route 53 hosted zone. See [`resource_elb.zone_id`](https://www.terraform.io/docs/providers/aws/r/elb.html#zone_id) for example.
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a Record resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RecordArgs | RecordState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as RecordState | undefined;
            inputs["aliases"] = state ? state.aliases : undefined;
            inputs["allowOverwrite"] = state ? state.allowOverwrite : undefined;
            inputs["failoverRoutingPolicies"] = state ? state.failoverRoutingPolicies : undefined;
            inputs["fqdn"] = state ? state.fqdn : undefined;
            inputs["geolocationRoutingPolicies"] = state ? state.geolocationRoutingPolicies : undefined;
            inputs["healthCheckId"] = state ? state.healthCheckId : undefined;
            inputs["latencyRoutingPolicies"] = state ? state.latencyRoutingPolicies : undefined;
            inputs["multivalueAnswerRoutingPolicy"] = state ? state.multivalueAnswerRoutingPolicy : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["records"] = state ? state.records : undefined;
            inputs["setIdentifier"] = state ? state.setIdentifier : undefined;
            inputs["ttl"] = state ? state.ttl : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["weightedRoutingPolicies"] = state ? state.weightedRoutingPolicies : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as RecordArgs | undefined;
            if (!args || args.type === undefined) {
                throw new Error("Missing required property 'type'");
            }
            if (!args || args.zoneId === undefined) {
                throw new Error("Missing required property 'zoneId'");
            }
            inputs["aliases"] = args ? args.aliases : undefined;
            inputs["allowOverwrite"] = args ? args.allowOverwrite : undefined;
            inputs["failoverRoutingPolicies"] = args ? args.failoverRoutingPolicies : undefined;
            inputs["geolocationRoutingPolicies"] = args ? args.geolocationRoutingPolicies : undefined;
            inputs["healthCheckId"] = args ? args.healthCheckId : undefined;
            inputs["latencyRoutingPolicies"] = args ? args.latencyRoutingPolicies : undefined;
            inputs["multivalueAnswerRoutingPolicy"] = args ? args.multivalueAnswerRoutingPolicy : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["records"] = args ? args.records : undefined;
            inputs["setIdentifier"] = args ? args.setIdentifier : undefined;
            inputs["ttl"] = args ? args.ttl : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["weightedRoutingPolicies"] = args ? args.weightedRoutingPolicies : undefined;
            inputs["zoneId"] = args ? args.zoneId : undefined;
            inputs["fqdn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Record.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Record resources.
 */
export interface RecordState {
    /**
     * An alias block. Conflicts with `ttl` & `records`.
     * Alias record documented below.
     */
    readonly aliases?: pulumi.Input<pulumi.Input<{ evaluateTargetHealth: pulumi.Input<boolean>, name: pulumi.Input<string>, zoneId: pulumi.Input<string> }>[]>;
    /**
     * Allow creation of this record to overwrite an existing record, if any. This does not affect the ability to update the record using this provider and does not prevent other resources within this provider or manual Route 53 changes outside this provider from overwriting this record. `false` by default. This configuration is not recommended for most environments.
     */
    readonly allowOverwrite?: pulumi.Input<boolean>;
    /**
     * A block indicating the routing behavior when associated health check fails. Conflicts with any other routing policy. Documented below.
     */
    readonly failoverRoutingPolicies?: pulumi.Input<pulumi.Input<{ type: pulumi.Input<string> }>[]>;
    /**
     * [FQDN](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) built using the zone domain and `name`.
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * A block indicating a routing policy based on the geolocation of the requestor. Conflicts with any other routing policy. Documented below.
     */
    readonly geolocationRoutingPolicies?: pulumi.Input<pulumi.Input<{ continent?: pulumi.Input<string>, country?: pulumi.Input<string>, subdivision?: pulumi.Input<string> }>[]>;
    /**
     * The health check the record should be associated with.
     */
    readonly healthCheckId?: pulumi.Input<string>;
    /**
     * A block indicating a routing policy based on the latency between the requestor and an AWS region. Conflicts with any other routing policy. Documented below.
     */
    readonly latencyRoutingPolicies?: pulumi.Input<pulumi.Input<{ region: pulumi.Input<string> }>[]>;
    /**
     * Set to `true` to indicate a multivalue answer routing policy. Conflicts with any other routing policy.
     */
    readonly multivalueAnswerRoutingPolicy?: pulumi.Input<boolean>;
    /**
     * DNS domain name for a CloudFront distribution, S3 bucket, ELB, or another resource record set in this hosted zone.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A string list of records. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add `\"\"` inside the configuration string (e.g. `"first255characters\"\"morecharacters"`).
     */
    readonly records?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Unique identifier to differentiate records with routing policies from one another. Required if using `failover`, `geolocation`, `latency`, or `weighted` routing policies documented below.
     */
    readonly setIdentifier?: pulumi.Input<string>;
    /**
     * The TTL of the record.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * `PRIMARY` or `SECONDARY`. A `PRIMARY` record will be served if its healthcheck is passing, otherwise the `SECONDARY` will be served. See http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring-options.html#dns-failover-failover-rrsets
     */
    readonly type?: pulumi.Input<string | RecordType>;
    /**
     * A block indicating a weighted routing policy. Conflicts with any other routing policy. Documented below.
     */
    readonly weightedRoutingPolicies?: pulumi.Input<pulumi.Input<{ weight: pulumi.Input<number> }>[]>;
    /**
     * Hosted zone ID for a CloudFront distribution, S3 bucket, ELB, or Route 53 hosted zone. See [`resource_elb.zone_id`](https://www.terraform.io/docs/providers/aws/r/elb.html#zone_id) for example.
     */
    readonly zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Record resource.
 */
export interface RecordArgs {
    /**
     * An alias block. Conflicts with `ttl` & `records`.
     * Alias record documented below.
     */
    readonly aliases?: pulumi.Input<pulumi.Input<{ evaluateTargetHealth: pulumi.Input<boolean>, name: pulumi.Input<string>, zoneId: pulumi.Input<string> }>[]>;
    /**
     * Allow creation of this record to overwrite an existing record, if any. This does not affect the ability to update the record using this provider and does not prevent other resources within this provider or manual Route 53 changes outside this provider from overwriting this record. `false` by default. This configuration is not recommended for most environments.
     */
    readonly allowOverwrite?: pulumi.Input<boolean>;
    /**
     * A block indicating the routing behavior when associated health check fails. Conflicts with any other routing policy. Documented below.
     */
    readonly failoverRoutingPolicies?: pulumi.Input<pulumi.Input<{ type: pulumi.Input<string> }>[]>;
    /**
     * A block indicating a routing policy based on the geolocation of the requestor. Conflicts with any other routing policy. Documented below.
     */
    readonly geolocationRoutingPolicies?: pulumi.Input<pulumi.Input<{ continent?: pulumi.Input<string>, country?: pulumi.Input<string>, subdivision?: pulumi.Input<string> }>[]>;
    /**
     * The health check the record should be associated with.
     */
    readonly healthCheckId?: pulumi.Input<string>;
    /**
     * A block indicating a routing policy based on the latency between the requestor and an AWS region. Conflicts with any other routing policy. Documented below.
     */
    readonly latencyRoutingPolicies?: pulumi.Input<pulumi.Input<{ region: pulumi.Input<string> }>[]>;
    /**
     * Set to `true` to indicate a multivalue answer routing policy. Conflicts with any other routing policy.
     */
    readonly multivalueAnswerRoutingPolicy?: pulumi.Input<boolean>;
    /**
     * DNS domain name for a CloudFront distribution, S3 bucket, ELB, or another resource record set in this hosted zone.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A string list of records. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add `\"\"` inside the configuration string (e.g. `"first255characters\"\"morecharacters"`).
     */
    readonly records?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Unique identifier to differentiate records with routing policies from one another. Required if using `failover`, `geolocation`, `latency`, or `weighted` routing policies documented below.
     */
    readonly setIdentifier?: pulumi.Input<string>;
    /**
     * The TTL of the record.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * `PRIMARY` or `SECONDARY`. A `PRIMARY` record will be served if its healthcheck is passing, otherwise the `SECONDARY` will be served. See http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring-options.html#dns-failover-failover-rrsets
     */
    readonly type: pulumi.Input<string | RecordType>;
    /**
     * A block indicating a weighted routing policy. Conflicts with any other routing policy. Documented below.
     */
    readonly weightedRoutingPolicies?: pulumi.Input<pulumi.Input<{ weight: pulumi.Input<number> }>[]>;
    /**
     * Hosted zone ID for a CloudFront distribution, S3 bucket, ELB, or Route 53 hosted zone. See [`resource_elb.zone_id`](https://www.terraform.io/docs/providers/aws/r/elb.html#zone_id) for example.
     */
    readonly zoneId: pulumi.Input<string>;
}
