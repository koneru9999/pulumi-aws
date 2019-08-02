# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class RouteTable(pulumi.CustomResource):
    owner_id: pulumi.Output[str]
    """
    The ID of the AWS account that owns the route table
    """
    propagating_vgws: pulumi.Output[list]
    """
    A list of virtual gateways for propagation.
    """
    routes: pulumi.Output[list]
    """
    A list of route objects. Their keys are documented below. This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    vpc_id: pulumi.Output[str]
    """
    The VPC ID.
    """
    def __init__(__self__, resource_name, opts=None, propagating_vgws=None, routes=None, tags=None, vpc_id=None, __name__=None, __opts__=None):
        """
        Provides a resource to create a VPC routing table.
        
        > **NOTE on Route Tables and Routes:** This provider currently
        provides both a standalone Route resource and a Route Table resource with routes
        defined in-line. At this time you cannot use a Route Table with in-line routes
        in conjunction with any Route resources. Doing so will cause
        a conflict of rule settings and will overwrite rules.
        
        > **NOTE on `gateway_id` and `nat_gateway_id`:** The AWS API is very forgiving with these two
        attributes and the `aws_route_table` resource can be created with a NAT ID specified as a Gateway ID attribute.
        This _will_ lead to a permanent diff between your configuration and statefile, as the API returns the correct
        parameters in the returned route table. If you're experiencing constant diffs in your `aws_route_table` resources,
        the first thing to check is whether or not you're specifying a NAT ID instead of a Gateway ID, or vice-versa.
        
        > **NOTE on `propagating_vgws` and the `aws_vpn_gateway_route_propagation` resource:**
        If the `propagating_vgws` argument is present, it's not supported to _also_
        define route propagations using `aws_vpn_gateway_route_propagation`, since
        this resource will delete any propagating gateways not explicitly listed in
        `propagating_vgws`. Omit this argument when defining route propagation using
        the separate resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] propagating_vgws: A list of virtual gateways for propagation.
        :param pulumi.Input[list] routes: A list of route objects. Their keys are documented below. This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] vpc_id: The VPC ID.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/route_table.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['propagating_vgws'] = propagating_vgws

        __props__['routes'] = routes

        __props__['tags'] = tags

        if vpc_id is None:
            raise TypeError("Missing required property 'vpc_id'")
        __props__['vpc_id'] = vpc_id

        __props__['owner_id'] = None

        super(RouteTable, __self__).__init__(
            'aws:ec2/routeTable:RouteTable',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

