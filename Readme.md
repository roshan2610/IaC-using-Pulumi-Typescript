# AWS Infrastructure with Pulumi and TypeScript

This project provisions AWS infrastructure using Pulumi and TypeScript. The infrastructure includes various AWS services such as EC2, S3, IAM, and RDS.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Pulumi**
   - Follow the [Pulumi installation instructions](https://www.pulumi.com/docs/get-started/install/).

2. **AWS CLI**
   - Install the AWS CLI by following the [AWS CLI installation guide](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).

3. **Node.js**
   - Download and install Node.js from the [official Node.js website](https://nodejs.org/).

## Create a New Pulumi Project

To create a new Pulumi project using TypeScript, run the following command:

```bash
pulumi new typescript -y
```
## Project Files

1. ### `package.json`
- Contains:
  - Name of the project
  - Main file (i.e., `index.ts`)
  - All dependencies related to Node.js, TypeScript, AWS, and Pulumi

2. ### `Pulumi.yaml`
- Stores the metadata of the project, including configurations related to Node.js and TypeScript.

3. ### `index.ts`
- The main entry point of the project.

## File Structure

In the `index.ts` file, we have paths to specific files related to the tasks:

1. ### `instanceType-list.ts`
- This file contains the required instance types for your infrastructure. 
- You can easily use these instance types by importing the necessary variables into your other TypeScript files.

2. ### `ami-for-ec2.ts`
- This file stores the required Amazon Machine Image (AMI) for creating an EC2 instance. 
- You can reference this AMI in your EC2 configuration to ensure you’re using the correct image.

3. ### `security-groups.ts`
- This file defines the security groups utilized for creating EC2 instances and RDS. 
- These security groups specify the rules and permissions needed for secure access to your resources.

4. ### `ec2-instance.ts`
- This file creates an EC2 instance of type `t3a.micro`, leveraging specified parameters such as the security group and AMI.
- The instance type is imported from the `instanceType-list.ts` file, ensuring consistency and ease of management across your infrastructure.

5. ### `create-s3-bucket.ts`
- This file creates an S3 bucket named `antarctica-bucket`.
- The bucket serves as a storage solution for your data, enabling easy access and management of files within your AWS infrastructure.

6. ### `create-iam-user.ts`
- This file creates an IAM user with specified access policies.
- The user is granted permissions to access EC2 and S3 services, enabling secure and controlled interaction with these resources within your AWS infrastructure.

7. ### `create-rds-instance.ts`
- This file creates an RDS instance using various parameters, including the database name, password, security group, storage, and engine type.
- The RDS instance type is imported from the `instanceType-list.ts` file, ensuring consistency across your infrastructure configuration.

## Common Commands

Here are some common Pulumi commands used in the process:

- **See or preview the updates of the stack:**
  ```bash
  pulumi preview
  ```
- **Create or update the resources in the stack:**
  ```bash
  pulumi up
  ```
- **Destroy all existing resources in the stack:**
  ```bash
  pulumi destroy
  ```