# CloudLens

![Leonardo_Phoenix_09_Create_a_symbolic_logo_for_a_tool_called_C_0](https://github.com/user-attachments/assets/bdf09993-c5d0-4000-af3d-8e945134ef18)


## Project Description

CloudLens is an advanced cloud workload discovery and visibility tool designed for Red Teamers, penetration testers, and security professionals. It streamlines the process of identifying active cloud services across multiple regions in AWS, addressing the common challenge of cloud asset visibility. With minimal permissions (read-only AWS keys), CloudLens scans cloud environments, aggregates workload data, and presents a structured, region-wise overview in a user-friendly dashboard. This enhances situational awareness for offensive security teams, enabling them to map cloud attack surfaces efficiently.

## Features

- Discover active cloud services across multiple AWS regions
- Aggregate workload data from various cloud services
- Present a structured, region-wise overview of cloud assets
- User-friendly dashboard for easy navigation and analysis
- Minimal permissions required (read-only AWS keys)
- Enhance situational awareness for offensive security teams

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/harekrishnarai/CloudLens.git
   cd CloudLens
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your AWS credentials:
   - Ensure you have read-only AWS keys with the necessary permissions.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

6. Use the dashboard to navigate and analyze the discovered cloud services.

## Requirements

- Node.js
- npm
- Read-only AWS keys with the following permissions:
  - `ec2:DescribeInstances`
  - `s3:ListBucket`
  - `iam:ListUsers`
  - `cloudtrail:DescribeTrails`
  - `rds:DescribeDBInstances`
  - `lambda:ListFunctions`
  - `kms:ListKeys`
  - `config:DescribeConfigRules`
  - `guardduty:ListDetectors`

## Contributing

We welcome contributions to CloudLens! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your forked repository.
5. Open a pull request to the main repository.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
