# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class GetCanonicalUserIdResult:
    """
    A collection of values returned by getCanonicalUserId.
    """
    def __init__(__self__, display_name=None, id=None):
        if display_name and not isinstance(display_name, str):
            raise TypeError("Expected argument 'display_name' to be a str")
        __self__.display_name = display_name
        """
        The human-friendly name linked to the canonical user ID. The bucket owner's display name. **NOTE:** [This value](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTServiceGET.html) is only included in the response in the US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), EU (Ireland), and South America (São Paulo) regions.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_canonical_user_id(opts=None):
    """
    The Canonical User ID data source allows access to the [canonical user ID](http://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html)
    for the effective account in which this provider is working.  

    > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/canonical_user_id.html.markdown.
    """
    __args__ = dict()

    __ret__ = await pulumi.runtime.invoke('aws:index/getCanonicalUserId:getCanonicalUserId', __args__, opts=opts)

    return GetCanonicalUserIdResult(
        display_name=__ret__.get('displayName'),
        id=__ret__.get('id'))
