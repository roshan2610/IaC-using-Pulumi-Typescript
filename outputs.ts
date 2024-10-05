import { instancePublicIp } from "./create-ec2-instance"; 
import { bucketArn } from "./create-s3-bucket"; 
import { rdsInstanceArn, rdsEndpoint } from "./create-rds-instance"; 

// Export the outputs
export const ec2InstancePublicIp = instancePublicIp;
export const s3BucketArn = bucketArn;
export const rdsInstanceArnOutput = rdsInstanceArn;
export const rdsEndpointOutput = rdsEndpoint;

// Log the outputs to the console
ec2InstancePublicIp.apply(ip => console.log("EC2 Instance Public IP:", ip));
s3BucketArn.apply(arn => console.log("S3 Bucket ARN:", arn));
rdsEndpointOutput.apply(endpoint => console.log("RDS Endpoint:", endpoint));