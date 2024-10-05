import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

import {rdsInstanceSGId} from "./security-groups";
import { rdsInstanceType } from "./instanceTypes-list";

// Create an RDS instance
const rdsInstance = new aws.rds.Instance("antarctica-rds-deployment", {
    allocatedStorage: 20,
    engine: "mysql",
    engineVersion: "8.0",
    instanceClass: rdsInstanceType,
    dbName: "mydb",
    username: "demoUser",
    password: pulumi.secret("password123"),
    skipFinalSnapshot: true,
    vpcSecurityGroupIds: [rdsInstanceSGId],
});

export const rdsInstanceArn = rdsInstance.arn;
export const rdsEndpoint = rdsInstance.endpoint;