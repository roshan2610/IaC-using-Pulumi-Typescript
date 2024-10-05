import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

//EC2 instance type
const ec2InstanceClass = "t3a.micro";

//RDS instance type
const rdsInstanceClass = "db.t4g.micro";

//Exporting variables so that they could be useful further
export const rdsInstanceType = rdsInstanceClass;
export const ec2InstanceType = ec2InstanceClass;