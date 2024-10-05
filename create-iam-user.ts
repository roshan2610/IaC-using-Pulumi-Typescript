import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

import {ec2Policy, s3Policy} from "./iam-policies";

//Create an IAM user
const user = new aws.iam.User("antarctica-iac-user", {
    name: "antarctica-iac-user",
});

export const userName = user.name;

// Attach EC2 Policy to User
const userEc2PolicyAttachment = new aws.iam.PolicyAttachment("antarctica-ec2-policy-attachment", {
    users: [user.name],
    policyArn: ec2Policy.arn,
});

// Attach S3 Policy to User
const userS3PolicyAttachment = new aws.iam.PolicyAttachment("antarctica-s3-policy-attachment", {
    users: [user.name],
    policyArn: s3Policy.arn,
});