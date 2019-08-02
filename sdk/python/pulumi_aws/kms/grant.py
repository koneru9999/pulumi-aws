# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Grant(pulumi.CustomResource):
    constraints: pulumi.Output[list]
    """
    A structure that you can use to allow certain operations in the grant only when the desired encryption context is present. For more information about encryption context, see [Encryption Context](http://docs.aws.amazon.com/kms/latest/developerguide/encryption-context.html).
    """
    grant_creation_tokens: pulumi.Output[list]
    """
    A list of grant tokens to be used when creating the grant. See [Grant Tokens](http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token) for more information about grant tokens.
    * `retire_on_delete` -(Defaults to false, Forces new resources) If set to false (the default) the grants will be revoked upon deletion, and if set to true the grants will try to be retired upon deletion. Note that retiring grants requires special permissions, hence why we default to revoking grants.
    See [RetireGrant](https://docs.aws.amazon.com/kms/latest/APIReference/API_RetireGrant.html) for more information.
    """
    grant_id: pulumi.Output[str]
    """
    The unique identifier for the grant.
    """
    grant_token: pulumi.Output[str]
    """
    The grant token for the created grant. For more information, see [Grant Tokens](http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token).
    """
    grantee_principal: pulumi.Output[str]
    """
    The principal that is given permission to perform the operations that the grant permits in ARN format. Note that due to eventual consistency issues around IAM principals, the state may not always be refreshed to reflect what is true in AWS.
    """
    key_id: pulumi.Output[str]
    """
    The unique identifier for the customer master key (CMK) that the grant applies to. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. To specify a CMK in a different AWS account, you must use the key ARN.
    """
    name: pulumi.Output[str]
    """
    A friendly name for identifying the grant.
    """
    operations: pulumi.Output[list]
    """
    A list of operations that the grant permits. The permitted values are: `Decrypt, Encrypt, GenerateDataKey, GenerateDataKeyWithoutPlaintext, ReEncryptFrom, ReEncryptTo, CreateGrant, RetireGrant, DescribeKey`
    """
    retire_on_delete: pulumi.Output[bool]
    retiring_principal: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, constraints=None, grant_creation_tokens=None, grantee_principal=None, key_id=None, name=None, operations=None, retire_on_delete=None, retiring_principal=None, __name__=None, __opts__=None):
        """
        Provides a resource-based access control mechanism for a KMS customer master key.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] constraints: A structure that you can use to allow certain operations in the grant only when the desired encryption context is present. For more information about encryption context, see [Encryption Context](http://docs.aws.amazon.com/kms/latest/developerguide/encryption-context.html).
        :param pulumi.Input[list] grant_creation_tokens: A list of grant tokens to be used when creating the grant. See [Grant Tokens](http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token) for more information about grant tokens.
               * `retire_on_delete` -(Defaults to false, Forces new resources) If set to false (the default) the grants will be revoked upon deletion, and if set to true the grants will try to be retired upon deletion. Note that retiring grants requires special permissions, hence why we default to revoking grants.
               See [RetireGrant](https://docs.aws.amazon.com/kms/latest/APIReference/API_RetireGrant.html) for more information.
        :param pulumi.Input[str] grantee_principal: The principal that is given permission to perform the operations that the grant permits in ARN format. Note that due to eventual consistency issues around IAM principals, the state may not always be refreshed to reflect what is true in AWS.
        :param pulumi.Input[str] key_id: The unique identifier for the customer master key (CMK) that the grant applies to. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. To specify a CMK in a different AWS account, you must use the key ARN.
        :param pulumi.Input[str] name: A friendly name for identifying the grant.
        :param pulumi.Input[list] operations: A list of operations that the grant permits. The permitted values are: `Decrypt, Encrypt, GenerateDataKey, GenerateDataKeyWithoutPlaintext, ReEncryptFrom, ReEncryptTo, CreateGrant, RetireGrant, DescribeKey`

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/kms_grant.html.markdown.
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

        __props__['constraints'] = constraints

        __props__['grant_creation_tokens'] = grant_creation_tokens

        if grantee_principal is None:
            raise TypeError("Missing required property 'grantee_principal'")
        __props__['grantee_principal'] = grantee_principal

        if key_id is None:
            raise TypeError("Missing required property 'key_id'")
        __props__['key_id'] = key_id

        __props__['name'] = name

        if operations is None:
            raise TypeError("Missing required property 'operations'")
        __props__['operations'] = operations

        __props__['retire_on_delete'] = retire_on_delete

        __props__['retiring_principal'] = retiring_principal

        __props__['grant_id'] = None
        __props__['grant_token'] = None

        super(Grant, __self__).__init__(
            'aws:kms/grant:Grant',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

