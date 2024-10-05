import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

//Get the latest AMI
const ec2InstanceAMI = aws.ec2.getAmi({
    mostRecent: true,
    owners: ["amazon"],
    filters: [
        {
            name: "name",
            values: ["amzn2-ami-hvm-*-x86_64-gp2"],
        },
        {
            name: "root-device-type",
            values: ["ebs"],
        },
        {
            name: "virtualization-type",
            values: ["hvm"],
        }
    ]
})

export const amiName = ec2InstanceAMI;