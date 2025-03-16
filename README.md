# CloudLens

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
