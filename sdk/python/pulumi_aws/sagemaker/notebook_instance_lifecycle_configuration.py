# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class NotebookInstanceLifecycleConfiguration(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) assigned by AWS to this lifecycle configuration.
    """
    name: pulumi.Output[str]
    """
    The name of the lifecycle configuration (must be unique). If omitted, this provider will assign a random, unique name.
    """
    on_create: pulumi.Output[str]
    """
    A shell script (base64-encoded) that runs only once when the SageMaker Notebook Instance is created.
    """
    on_start: pulumi.Output[str]
    """
    A shell script (base64-encoded) that runs every time the SageMaker Notebook Instance is started including the time it's created.
    """
    def __init__(__self__, resource_name, opts=None, name=None, on_create=None, on_start=None, __name__=None, __opts__=None):
        """
        Provides a lifecycle configuration for SageMaker Notebook Instances.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: The name of the lifecycle configuration (must be unique). If omitted, this provider will assign a random, unique name.
        :param pulumi.Input[str] on_create: A shell script (base64-encoded) that runs only once when the SageMaker Notebook Instance is created.
        :param pulumi.Input[str] on_start: A shell script (base64-encoded) that runs every time the SageMaker Notebook Instance is started including the time it's created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/sagemaker_notebook_instance_lifecycle_configuration.html.markdown.
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

        __props__['on_create'] = on_create

        __props__['on_start'] = on_start

        __props__['arn'] = None

        super(NotebookInstanceLifecycleConfiguration, __self__).__init__(
            'aws:sagemaker/notebookInstanceLifecycleConfiguration:NotebookInstanceLifecycleConfiguration',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

