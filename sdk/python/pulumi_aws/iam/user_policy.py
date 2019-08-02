# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class UserPolicy(pulumi.CustomResource):
    name: pulumi.Output[str]
    """
    The name of the policy. If omitted, this provider will assign a random, unique name.
    """
    name_prefix: pulumi.Output[str]
    """
    Creates a unique name beginning with the specified prefix. Conflicts with `name`.
    """
    policy: pulumi.Output[str]
    """
    The policy document. This is a JSON formatted string.
    """
    user: pulumi.Output[str]
    """
    IAM user to which to attach this policy.
    """
    def __init__(__self__, resource_name, opts=None, name=None, name_prefix=None, policy=None, user=None, __name__=None, __opts__=None):
        """
        Provides an IAM policy attached to a user.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: The name of the policy. If omitted, this provider will assign a random, unique name.
        :param pulumi.Input[str] name_prefix: Creates a unique name beginning with the specified prefix. Conflicts with `name`.
        :param pulumi.Input[str] policy: The policy document. This is a JSON formatted string.
        :param pulumi.Input[str] user: IAM user to which to attach this policy.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/iam_user_policy.html.markdown.
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

        __props__['name'] = name

        __props__['name_prefix'] = name_prefix

        if policy is None:
            raise TypeError("Missing required property 'policy'")
        __props__['policy'] = policy

        if user is None:
            raise TypeError("Missing required property 'user'")
        __props__['user'] = user

        super(UserPolicy, __self__).__init__(
            'aws:iam/userPolicy:UserPolicy',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

