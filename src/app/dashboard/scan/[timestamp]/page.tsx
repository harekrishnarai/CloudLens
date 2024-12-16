"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useParams } from "next/navigation"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useState } from "react"

// Import service icons and data from services.tsx
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
} from "lucide-react"

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
}

const regions = [
  { id: 1, name: "us-east-1", status: "Active", services: 12 },
  { id: 2, name: "us-east-2", status: "Active", services: 10 },
  { id: 3, name: "us-west-1", status: "Active", services: 10 },
  { id: 4, name: "us-west-2", status: "Active", services: 11 },
  { id: 5, name: "ca-central-1", status: "Active", services: 9 },
  { id: 6, name: "eu-west-1", status: "Active", services: 11 },
  { id: 7, name: "eu-west-2", status: "Active", services: 8 },
  { id: 8, name: "eu-west-3", status: "Active", services: 8 },
  { id: 9, name: "eu-central-1", status: "Active", services: 9 },
  { id: 10, name: "eu-north-1", status: "Active", services: 7 },
  { id: 11, name: "ap-northeast-1", status: "Active", services: 10 },
  { id: 12, name: "ap-northeast-2", status: "Active", services: 9 },
  { id: 13, name: "ap-northeast-3", status: "Maintenance", services: 6 },
  { id: 14, name: "ap-southeast-1", status: "Active", services: 9 },
  { id: 15, name: "ap-southeast-2", status: "Active", services: 9 },
  { id: 16, name: "ap-south-1", status: "Active", services: 8 },
  { id: 17, name: "sa-east-1", status: "Maintenance", services: 7 },
  { id: 18, name: "af-south-1", status: "Active", services: 6 },
  { id: 19, name: "me-south-1", status: "Active", services: 7 },
  { id: 20, name: "me-central-1", status: "Active", services: 6 }
]

export default function ScanPage() {
  const params = useParams()
  const timestamp = (params.timestamp as string).replace(/_/g, ' ')
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  // Get services for the selected region
  const getRegionServices = (regionName: string) => {
    return Object.entries(serviceIcons).map(([name, Icon]) => ({
      name,
      icon: Icon,
      status: Math.random() > 0.8 ? "Warning" : "Healthy", // Simulated status
      lastScanned: new Date().toISOString(),
      resourceCount: Math.floor(Math.random() * 100),
    }))
  }

  const handleRegionClick = (regionName: string) => {
    setSelectedRegion(regionName)
    setIsSheetOpen(true)
  }

  return (
    <div className="container mx-auto p-4">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>Scan Results</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>{timestamp}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regions.map((region) => (
          <Card 
            key={region.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleRegionClick(region.name)}
          >
            <CardHeader>
              <CardTitle className="text-sm flex justify-between items-center">
                {region.name}
                <Badge 
                  variant="outline" 
                  className={region.status === 'Active' ? 'text-green-500' : 'text-yellow-500'}
                >
                  {region.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Services Scanned: {region.services}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Services in {selectedRegion}</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            {selectedRegion && getRegionServices(selectedRegion).map((service) => (
              <div key={service.name} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <service.icon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h4 className="text-sm font-medium">{service.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      Last scanned: {new Date(service.lastScanned).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={service.status === 'Healthy' ? 'text-green-500' : 'text-yellow-500'}>
                    {service.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {service.resourceCount} resources
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
} 