# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class ProductSubscription(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN of a resource that represents your subscription to the product that generates the findings that you want to import into Security Hub.
    """
    product_arn: pulumi.Output[str]
    """
    The ARN of the product that generates findings that you want to import into Security Hub - see below.
    """
    def __init__(__self__, __name__, __opts__=None, product_arn=None):
        """
        Subscribes to a Security Hub product.
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[str] product_arn: The ARN of the product that generates findings that you want to import into Security Hub - see below.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not product_arn:
            raise TypeError('Missing required property product_arn')
        __props__['product_arn'] = product_arn

        __props__['arn'] = None

        super(ProductSubscription, __self__).__init__(
            'aws:securityhub/productSubscription:ProductSubscription',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
