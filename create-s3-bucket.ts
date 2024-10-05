import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// Create a S3 Bucket
const bucket = new aws.s3.Bucket("antarctica-bucket", {
    acl: "private",
    bucket: "antarctica-bucket-iac-task"
})

// Export the bucket name and ARN
export const bucketName = bucket.id;
export const bucketArn = bucket.arn;