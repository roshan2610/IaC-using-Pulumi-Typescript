1. To create a project using Pulumi:<br>
    i. Install Pulumi<br>
    ii. Install aws cli<br>
    iii Install Node.js<br>
<br>
2. To create a new Pulumi project using TypeScript, run the following command:<br>
    pulumi new typescript -y<br>
<br>
3. It will create a folder in the present directory, that contains following files:<br>
    i. package.json: This file contains <br>
        &nbsp;&nbsp;&nbsp;a. Name of the project<br>
        &nbsp;&nbsp;&nbsp;b. Main file i.e index.ts<br>
        &nbsp;&nbsp;&nbsp;c. All the dependencies related to the node, typescript, AWS and Pulumi<br>
    ii. Pulumi.yaml: Stores the metadata of the project. This file contains information about configurations related to Node.Js and TypeScript.<br>
    iii. index.ts: This is the main entrypoint of the project.<br>
<br>
4. In index.ts file we have paths to specific files related to the tasks.<br>
    i. instanceType-list: We have created a file which contains required instance types, contains variable those could be used by importing this file.<br>
    ii. ami-for-ec2: Stores required ami to create EC2 instance.<br>
    iii. security-groups: In file contains security groups which are used while creating EC2 instance and RDS.<br>
    iv. ec2-instance.ts: In this file, we create an EC2 instance of type t3a.micro using specified parameters such as security group, AMI, etc.<br>
    v. create-s3-bucket.tst: This file creates a s3 bucket named antarctica-bucket.<br>
    vi. create-iam-user.ts: In this file we are creating a IAM User.<br>
    vii. create-rds-instance.ts: Here, we create a RDS instance using various parameters, such as database name, password, security group, storage, and engine.<br>
    <br>
5. Some common commands used in the process:<br>
    i. See or preview the updates of stack:<br>
        &nbsp;&nbsp;&nbsp;pulumi preview<br>
    ii. Create or update the resources in the stack:<br>
        &nbsp;&nbsp;&nbsp;pulumi up<br>
    iii. Destroy all existing resources in the stack:<br>
        &nbsp;&nbsp;&nbsp;pulumi destroy<br>