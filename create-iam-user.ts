import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

//Create an IAM user
const user = new aws.iam.User("antarctica-iac-user", {
    name: "antarctica-iac-user",
});