// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to get information about a DB Cluster Snapshot for use when provisioning DB clusters.
 * 
 * > **NOTE:** This data source does not apply to snapshots created on DB Instances. 
 * See the [`aws_db_snapshot` data source](https://www.terraform.io/docs/providers/aws/d/db_snapshot.html) for DB Instance snapshots.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const developmentFinalSnapshot = pulumi.output(aws.rds.getClusterSnapshot({
 *     dbClusterIdentifier: "development_cluster",
 *     mostRecent: true,
 * }));
 * // Use the last snapshot of the dev database before it was destroyed to create
 * // a new dev database.
 * const auroraCluster = new aws.rds.Cluster("aurora", {
 *     clusterIdentifier: "development_cluster",
 *     dbSubnetGroupName: "my_db_subnet_group",
 *     snapshotIdentifier: developmentFinalSnapshot.id,
 * });
 * const auroraClusterInstance = new aws.rds.ClusterInstance("aurora", {
 *     clusterIdentifier: auroraCluster.id,
 *     dbSubnetGroupName: "my_db_subnet_group",
 *     instanceClass: "db.t2.small",
 * });
 * ```
 */
export function getClusterSnapshot(args?: GetClusterSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterSnapshotResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:rds/getClusterSnapshot:getClusterSnapshot", {
        "dbClusterIdentifier": args.dbClusterIdentifier,
        "dbClusterSnapshotIdentifier": args.dbClusterSnapshotIdentifier,
        "includePublic": args.includePublic,
        "includeShared": args.includeShared,
        "mostRecent": args.mostRecent,
        "snapshotType": args.snapshotType,
    }, opts);
}

/**
 * A collection of arguments for invoking getClusterSnapshot.
 */
export interface GetClusterSnapshotArgs {
    /**
     * Returns the list of snapshots created by the specific db_cluster
     */
    readonly dbClusterIdentifier?: string;
    /**
     * Returns information on a specific snapshot_id.
     */
    readonly dbClusterSnapshotIdentifier?: string;
    /**
     * Set this value to true to include manual DB Cluster Snapshots that are public and can be
     * copied or restored by any AWS account, otherwise set this value to false. The default is `false`.
     */
    readonly includePublic?: boolean;
    /**
     * Set this value to true to include shared manual DB Cluster Snapshots from other
     * AWS accounts that this AWS account has been given permission to copy or restore, otherwise set this value to false.
     * The default is `false`.
     */
    readonly includeShared?: boolean;
    /**
     * If more than one result is returned, use the most recent Snapshot.
     */
    readonly mostRecent?: boolean;
    /**
     * The type of snapshots to be returned. If you don't specify a SnapshotType
     * value, then both automated and manual DB cluster snapshots are returned. Shared and public DB Cluster Snapshots are not
     * included in the returned results by default. Possible values are, `automated`, `manual`, `shared` and `public`.
     */
    readonly snapshotType?: string;
}

/**
 * A collection of values returned by getClusterSnapshot.
 */
export interface GetClusterSnapshotResult {
    /**
     * Specifies the allocated storage size in gigabytes (GB).
     */
    readonly allocatedStorage: number;
    /**
     * List of EC2 Availability Zones that instances in the DB cluster snapshot can be restored in.
     */
    readonly availabilityZones: string[];
    /**
     * The Amazon Resource Name (ARN) for the DB Cluster Snapshot.
     */
    readonly dbClusterSnapshotArn: string;
    /**
     * Specifies the name of the database engine.
     */
    readonly engine: string;
    /**
     * Version of the database engine for this DB cluster snapshot.
     */
    readonly engineVersion: string;
    /**
     * If storage_encrypted is true, the AWS KMS key identifier for the encrypted DB cluster snapshot.
     */
    readonly kmsKeyId: string;
    /**
     * License model information for the restored DB cluster.
     */
    readonly licenseModel: string;
    /**
     * Port that the DB cluster was listening on at the time of the snapshot.
     */
    readonly port: number;
    /**
     * Time when the snapshot was taken, in Universal Coordinated Time (UTC).
     */
    readonly snapshotCreateTime: string;
    readonly sourceDbClusterSnapshotArn: string;
    /**
     * The status of this DB Cluster Snapshot.
     */
    readonly status: string;
    /**
     * Specifies whether the DB cluster snapshot is encrypted.
     */
    readonly storageEncrypted: boolean;
    /**
     * The VPC ID associated with the DB cluster snapshot.
     */
    readonly vpcId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
