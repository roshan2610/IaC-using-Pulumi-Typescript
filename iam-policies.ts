import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

//Create a policy to allow EC2 access
const ec2Policy = new aws.iam.Policy("antarctica-ec2-policy", {
    description: "A policy to allow EC2 access",
    policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
            {
                Effect: "Allow",
                Action: [
                    "ec2:DescribeInstances",
                    "ec2:RunInstances",
                    "ec2:TerminateInstances",
                ],
                Resource: "*",
            },
        ],
    }),
});

//Create a policy to allow s3 access
const s3Policy = new aws.iam.Policy("antarctica-s3-policy", {
    description: "A policy to allow S3 access",
    policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
            {
                Effect: "Allow",
                Action: [
                    "s3:ListBucket",
                    "s3:GetObject",
                    "s3:PutObject",
                ],
                Resource: [
                   "*",
                ],
            },
        ],
    }),
});

//Export the policies
export {ec2Policy, s3Policy};