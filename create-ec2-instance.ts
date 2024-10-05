import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

import {ec2instanceSGId} from "./security-groups";
import {ec2InstanceType} from "./instanceTypes-list";
import {amiName} from "./ami-for-ec2";

//Create an EC2 instance of class t3a.micro
const ec2Instance = new aws.ec2.Instance("antarctica-ec2-deployment", {
    instanceType: ec2InstanceType,
    ami: amiName.then(amiName => amiName.id),
    vpcSecurityGroupIds: [ec2instanceSGId],
    tags: {
        Name: "antarctica-ec2-deployment",
    }
});
