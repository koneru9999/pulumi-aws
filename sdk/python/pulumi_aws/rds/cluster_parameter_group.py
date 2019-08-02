# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class ClusterParameterGroup(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN of the db cluster parameter group.
    """
    description: pulumi.Output[str]
    """
    The description of the DB cluster parameter group. Defaults to "Managed by Pulumi".
    """
    family: pulumi.Output[str]
    """
    The family of the DB cluster parameter group.
    """
    name: pulumi.Output[str]
    """
    The name of the DB parameter.
    """
    name_prefix: pulumi.Output[str]
    """
    Creates a unique name beginning with the specified prefix. Conflicts with `name`.
    """
    parameters: pulumi.Output[list]
    """
    A list of DB parameters to apply. Note that parameters may differ from a family to an other. Full list of all parameters can be discovered via [`aws rds describe-db-cluster-parameters`](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-cluster-parameters.html) after initial creation of the group.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, description=None, family=None, name=None, name_prefix=None, parameters=None, tags=None, __name__=None, __opts__=None):
        """
        Provides an RDS DB cluster parameter group resource. Documentation of the available parameters for various Aurora engines can be found at:
        
        * [Aurora MySQL Parameters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Reference.html)
        * [Aurora PostgreSQL Parameters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraPostgreSQL.Reference.html)
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: The description of the DB cluster parameter group. Defaults to "Managed by Pulumi".
        :param pulumi.Input[str] family: The family of the DB cluster parameter group.
        :param pulumi.Input[str] name: The name of the DB parameter.
        :param pulumi.Input[str] name_prefix: Creates a unique name beginning with the specified prefix. Conflicts with `name`.
        :param pulumi.Input[list] parameters: A list of DB parameters to apply. Note that parameters may differ from a family to an other. Full list of all parameters can be discovered via [`aws rds describe-db-cluster-parameters`](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-cluster-parameters.html) after initial creation of the group.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/rds_cluster_parameter_group.html.markdown.
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

        if description is None:
            description = 'Managed by Pulumi'
        __props__['description'] = description

        if family is None:
            raise TypeError("Missing required property 'family'")
        __props__['family'] = family

        __props__['name'] = name

        __props__['name_prefix'] = name_prefix

        __props__['parameters'] = parameters

        __props__['tags'] = tags

        __props__['arn'] = None

        super(ClusterParameterGroup, __self__).__init__(
            'aws:rds/clusterParameterGroup:ClusterParameterGroup',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

