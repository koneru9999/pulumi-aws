// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iot.Outputs
{

    [OutputType]
    public sealed class TopicRuleErrorActionDynamodb
    {
        /// <summary>
        /// The hash key name.
        /// </summary>
        public readonly string HashKeyField;
        /// <summary>
        /// The hash key type. Valid values are "STRING" or "NUMBER".
        /// </summary>
        public readonly string? HashKeyType;
        /// <summary>
        /// The hash key value.
        /// </summary>
        public readonly string HashKeyValue;
        /// <summary>
        /// The operation. Valid values are "INSERT", "UPDATE", or "DELETE".
        /// </summary>
        public readonly string? Operation;
        /// <summary>
        /// The action payload.
        /// </summary>
        public readonly string? PayloadField;
        /// <summary>
        /// The range key name.
        /// </summary>
        public readonly string? RangeKeyField;
        /// <summary>
        /// The range key type. Valid values are "STRING" or "NUMBER".
        /// </summary>
        public readonly string? RangeKeyType;
        /// <summary>
        /// The range key value.
        /// </summary>
        public readonly string? RangeKeyValue;
        /// <summary>
        /// The ARN of the IAM role that grants access to the DynamoDB table.
        /// </summary>
        public readonly string RoleArn;
        /// <summary>
        /// The name of the DynamoDB table.
        /// </summary>
        public readonly string TableName;

        [OutputConstructor]
        private TopicRuleErrorActionDynamodb(
            string hashKeyField,

            string? hashKeyType,

            string hashKeyValue,

            string? operation,

            string? payloadField,

            string? rangeKeyField,

            string? rangeKeyType,

            string? rangeKeyValue,

            string roleArn,

            string tableName)
        {
            HashKeyField = hashKeyField;
            HashKeyType = hashKeyType;
            HashKeyValue = hashKeyValue;
            Operation = operation;
            PayloadField = payloadField;
            RangeKeyField = rangeKeyField;
            RangeKeyType = rangeKeyType;
            RangeKeyValue = rangeKeyValue;
            RoleArn = roleArn;
            TableName = tableName;
        }
    }
}
