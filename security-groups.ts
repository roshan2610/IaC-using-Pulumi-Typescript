import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

//Create a security group for the instance
const ec2SecurityGroup = new aws.ec2.SecurityGroup("ec2.sec-group", {
    ingress: [{
        fromPort: 22,
        toPort: 22, 
        protocol: "tcp",
        cidrBlocks: ["0.0.0.0/0"],
    },
    {
            fromPort: 80,
            toPort: 80,
            protocol: "tcp",
            cidrBlocks: ["0.0.0.0/0"],
        },
]
})

//Create security group for RDS
const rdsSecurityGroup = new aws.ec2.SecurityGroup("rds-sec-group", {
    ingress: [{
        fromPort: 3306,
        toPort: 3306,
        protocol: "tcp",
        cidrBlocks: ["0.0.0.0/0"],
    }],
});

export const ec2instanceSGId = ec2SecurityGroup.id;
export const rdsInstanceSGId = rdsSecurityGroup.id;