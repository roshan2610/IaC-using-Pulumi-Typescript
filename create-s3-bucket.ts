import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// Create a S3 Bucket
const bucket = new aws.s3.Bucket("antarctica-bucket", {
    acl: "private",
    bucket: "antarctica-bucket"
})