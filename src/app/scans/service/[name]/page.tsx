"use client";

import { useSearchParams } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { use } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Mock data for EC2 instances
const ec2Data = [
  {
    id: "i-1234567890abcdef0",
    type: "t2.micro",
    state: "running",
    publicIp: "203.0.113.0",
    privateIp: "172.31.16.1",
    complianceStatus: "Compliant",
  },
  {
    id: "i-234567890abcdef01",
    type: "t2.small",
    state: "stopped",
    publicIp: "203.0.113.1",
    privateIp: "172.31.16.2",
    complianceStatus: "Non-Compliant",
  },
  {
    id: "i-34567890abcdef012",
    type: "t2.medium",
    state: "running",
    publicIp: "203.0.113.2",
    privateIp: "172.31.16.3",
    complianceStatus: "Compliant",
  },
  {
    id: "i-4567890abcdef0123",
    type: "t2.large",
    state: "running",
    publicIp: "203.0.113.3",
    privateIp: "172.31.16.4",
    complianceStatus: "Compliant",
  },
  {
    id: "i-567890abcdef01234",
    type: "t3.micro",
    state: "stopped",
    publicIp: "203.0.113.4",
    privateIp: "172.31.16.5",
    complianceStatus: "Non-Compliant",
  },
];

export default function ServicePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = use(params);
  const searchParams = useSearchParams();
  const region = searchParams.get("region");
  const timestamp = searchParams.get("timestamp");

  return (
    <div className="space-y-4 w-full">
      <Breadcrumb className="px-3 py-3 border-b border-border ">
        <BreadcrumbItem>
          <BreadcrumbLink href="/scans">Scans</BreadcrumbLink>/
          <BreadcrumbPage className="text-sm font-medium text-foreground "> {name} Instances </BreadcrumbPage>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="text-sm flex justify-start gap-2 items-center px-3">
    
        <div className="flex justify-start gap-2 items-center">
          <Badge variant="outline" className="text-xs px-2 py-1">
            Region: {region}
          </Badge>
          <Badge variant="outline" className="text-xs px-2 py-1">
            Timestamp: {timestamp}
          </Badge>
        </div>
      </div>

      <div>
        <Table>
          <TableHeader className="bg-secondary-background mt-8">
            <TableRow>
              <TableHead className="px-3">Instance ID</TableHead>
              <TableHead className="px-3">Type</TableHead>
              <TableHead className="px-3">State</TableHead>
              <TableHead className="px-3">Public IP</TableHead>
              <TableHead className="px-3">Private IP</TableHead>
              <TableHead className="px-3">Compliance Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ec2Data.map((instance) => (
              <TableRow key={instance.id}>
                <TableCell className="px-3">{instance.id}</TableCell>
                <TableCell className="px-3">{instance.type}</TableCell>
                <TableCell className="px-3">{instance.state}</TableCell>
                <TableCell className="px-3">{instance.publicIp}</TableCell>
                <TableCell className="px-3">{instance.privateIp}</TableCell>
                <TableCell className="px-3">
                  {instance.complianceStatus}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
