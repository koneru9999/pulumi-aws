# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetVpcDhcpOptionsResult(object):
    """
    A collection of values returned by getVpcDhcpOptions.
    """
    def __init__(__self__, dhcp_options_id=None, domain_name=None, domain_name_servers=None, netbios_name_servers=None, netbios_node_type=None, ntp_servers=None, tags=None, id=None):
        if dhcp_options_id and not isinstance(dhcp_options_id, basestring):
            raise TypeError('Expected argument dhcp_options_id to be a basestring')
        __self__.dhcp_options_id = dhcp_options_id
        """
        EC2 DHCP Options ID
        """
        if domain_name and not isinstance(domain_name, basestring):
            raise TypeError('Expected argument domain_name to be a basestring')
        __self__.domain_name = domain_name
        """
        The suffix domain name to used when resolving non Fully Qualified Domain Names. e.g. the `search` value in the `/etc/resolv.conf` file.
        """
        if domain_name_servers and not isinstance(domain_name_servers, list):
            raise TypeError('Expected argument domain_name_servers to be a list')
        __self__.domain_name_servers = domain_name_servers
        """
        List of name servers.
        """
        if netbios_name_servers and not isinstance(netbios_name_servers, list):
            raise TypeError('Expected argument netbios_name_servers to be a list')
        __self__.netbios_name_servers = netbios_name_servers
        """
        List of NETBIOS name servers.
        """
        if netbios_node_type and not isinstance(netbios_node_type, basestring):
            raise TypeError('Expected argument netbios_node_type to be a basestring')
        __self__.netbios_node_type = netbios_node_type
        """
        The NetBIOS node type (1, 2, 4, or 8). For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
        """
        if ntp_servers and not isinstance(ntp_servers, list):
            raise TypeError('Expected argument ntp_servers to be a list')
        __self__.ntp_servers = ntp_servers
        """
        List of NTP servers.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError('Expected argument tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags assigned to the resource.
        """
        if id and not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_vpc_dhcp_options(dhcp_options_id=None, filters=None, tags=None):
    """
    Retrieve information about an EC2 DHCP Options configuration.
    """
    __args__ = dict()

    __args__['dhcpOptionsId'] = dhcp_options_id
    __args__['filters'] = filters
    __args__['tags'] = tags
    __ret__ = pulumi.runtime.invoke('aws:ec2/getVpcDhcpOptions:getVpcDhcpOptions', __args__)

    return GetVpcDhcpOptionsResult(
        dhcp_options_id=__ret__.get('dhcpOptionsId'),
        domain_name=__ret__.get('domainName'),
        domain_name_servers=__ret__.get('domainNameServers'),
        netbios_name_servers=__ret__.get('netbiosNameServers'),
        netbios_node_type=__ret__.get('netbiosNodeType'),
        ntp_servers=__ret__.get('ntpServers'),
        tags=__ret__.get('tags'),
        id=__ret__.get('id'))