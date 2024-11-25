# Deploying React.js Project to AWS Amplify

After every commit to the repository, this project is automatically deployed to AWS Amplify. Below are the steps to connect your GitHub project to AWS Amplify and set up continuous deployment.

## Prerequisites

Before starting, ensure you have:

1. An **AWS account**. If you don't have one, sign up [here](https://aws.amazon.com/).
2. A **GitHub repository** with your project.

## Steps to Connect GitHub to AWS Amplify

1. **Log in to AWS Console**:
    - Navigate to the [AWS Management Console](https://aws.amazon.com/console/).
    - Search for **Amplify** in the AWS services search bar and open **AWS Amplify**.

2. **Create a New Amplify App**:
    - Click **Deploy App**

3. **Connect Your GitHub Repository**:
    - In the **Repository service provider** step, select **GitHub**.
    - Click **Next** to authenticate with your GitHub account.
    - Authorize AWS Amplify to access your GitHub repositories.

4. **Choose Your Repository and Branch**:
    - Select the repository you want to connect.
    - Choose the branch (e.g., `main`) that should trigger deployments.

5. **App settings**:
    - Give your app a name
    - Amplify will automatically detect your project settings (like `React`). Review the default build settings or customize if needed. The default build settings for React projects are:
      ```yaml
      version: 1
      frontend:
        phases:
          preBuild:
            commands:
              - npm install
          build:
            commands:
              - npm run build
        artifacts:
          baseDirectory: build
          files:
            - '**/*'
        cache:
          paths:
            - node_modules/**/*
      ```
      - More details in [AWS Amplify Building Settings](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html)

6. **Deploy Your App**:
    - Click **Save and deploy**.
    - AWS Amplify will clone the repository and build and deploy the project.

7. **Verify Deployment**:
    - After the deployment, Amplify will provide a URL where your app is hosted. Click the URL to view your app.

8. **Automatic Deployments**:
    - Any future commits to the connected branch will trigger an automatic build and deployment on AWS Amplify.

---

## Additional Notes

- If your app requires environment variables, set them in the **Environment Variables** section of AWS Amplify.

For more details, check out the [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html). 

