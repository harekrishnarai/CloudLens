import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Server,
  Database,
  HardDrive,
  Network,
  Container,
  Cloud,
  Shield,
  Key,
  Mail,
  Search,
  Workflow,
  Cpu,
  BrainCircuit,
  FunctionSquare,
  Globe,
} from "lucide-react";

const serviceRegions = {
  EC2: ["us-east-1", "eu-west-2", "ap-southeast-1", "us-west-2"],
  S3: ["us-east-1", "eu-west-2", "ap-south-1", "eu-central-1"],
  Lambda: ["us-east-1", "ap-southeast-1", "eu-west-1"],
  RDS: ["us-east-1", "eu-west-2", "ap-south-1"],
  VPC: ["us-east-1", "eu-central-1", "ap-northeast-1"],
  ECS: ["us-east-1", "eu-west-1", "ap-southeast-2"],
  CloudFront: ["us-east-1", "eu-west-2", "ap-south-1"],
  WAF: ["us-east-1", "eu-central-1", "ap-southeast-1"],
  KMS: ["us-east-1", "eu-west-2", "ap-northeast-1"],
  SES: ["us-east-1", "eu-west-1", "ap-southeast-2"],
  CloudSearch: ["us-east-1", "eu-central-1", "ap-south-1"],
  StepFunctions: ["us-east-1", "eu-west-2", "ap-southeast-1"],
  EKS: ["us-east-1", "eu-west-1", "ap-northeast-1"],
  SageMaker: ["us-east-1", "eu-central-1", "ap-southeast-2"],
  SSM: ["us-east-1", "eu-west-2", "ap-south-1"],
};

const serviceIcons = {
  EC2: Server,
  S3: Database,
  Lambda: FunctionSquare, 
  RDS: HardDrive,
  VPC: Network,
  ECS: Container,
  CloudFront: Cloud,
  WAF: Shield,
  KMS: Key,
  SES: Mail,
  CloudSearch: Search,
  StepFunctions: Workflow,
  EKS: Cpu,
  SageMaker: BrainCircuit,
  SSM: BrainCircuit,
  Route53: Globe,
  DynamoDB: Database,  
};

const recentServices = Object.entries(serviceRegions).map(([name, regions], index) => ({
  id: index + 1,
  name,
  regions,
  icon: serviceIcons[name as keyof typeof serviceIcons],
}));

const iamUserData = {
  IAMUsers: [
    {
      UserName: "Gaurav_Test",
      CreateDate: "2024-12-01T10:25:29+00:00",
      PasswordLastUsed: "2024-12-01T10:26:36+00:00",
      AccessKeysCount: 1,
      AccessKeysDetails: [
        {
          AccessKeyId: "AKIA2XDAU35ZXUKZEYM3",
          CreateDate: "2024-12-01T10:30:32+00:00",
          Status: "Active",
        },
      ],
      MFAEnabled: false,
      MFADevices: [],
    },
    // ... other users
  ],
};

export function ServicesCard() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleServiceClick = () => {
    setIsSheetOpen(true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Recent Services</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {recentServices.map((service) => (
            <li
              key={service.id}
              className="flex justify-between items-center bg-secondary-background hover:bg-secondary/80 px-2 py-1 rounded-md"
              onClick={handleServiceClick}
            >
              <div className="flex items-center gap-2">
                {service.icon && <service.icon className="h-4 w-4 text-muted-foreground" />}
                <span className="text-xs font-medium">{service.name}</span>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span className="text-sm text-muted-foreground bg-border hover:bg-secondary/80 px-2 py-1 rounded-md">
                      {service.regions.length}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex flex-col gap-1">
                      {service.regions.map((region) => (
                        <Badge variant="outline" className="text-xs">{region}</Badge>
                      ))}
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </CardContent>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>IAM Users</SheetTitle>
          </SheetHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>UserName</TableHead>
                <TableHead>CreateDate</TableHead>
                <TableHead>PasswordLastUsed</TableHead>
                <TableHead>AccessKeysCount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {iamUserData.IAMUsers.map((user) => (
                <TableRow key={user.UserName}>
                  <TableCell>{user.UserName}</TableCell>
                  <TableCell>{user.CreateDate}</TableCell>
                  <TableCell>{user.PasswordLastUsed}</TableCell>
                  <TableCell>{user.AccessKeysCount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </SheetContent>
      </Sheet>
    </Card>
  );
}

