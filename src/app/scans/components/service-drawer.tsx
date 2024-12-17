import Link from 'next/link'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Server, Database, HardDrive, Cloud, Shield, Network, FunctionSquare, Container, Key, Mail, Search, Workflow, Cpu, BrainCircuit } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface ServiceDrawerProps {
  isOpen: boolean
  onClose: () => void
  region: string | null
  timestamp: string
}

const services = [
  { name: 'EC2', icon: Server, instanceCount: 45, complianceScore: 92 },
  { name: 'RDS', icon: Database, instanceCount: 12, complianceScore: 88 },
  { name: 'S3', icon: HardDrive, bucketCount: 30, complianceScore: 95 },
  { name: 'Lambda', icon: Cloud, functionCount: 60, complianceScore: 90 },
  { name: 'IAM', icon: Shield, userCount: 50, complianceScore: 85 },
  { name: 'VPC', icon: Network, vpcCount: 5, complianceScore: 98 },
  { name: 'ECS', icon: Container, taskCount: 20, complianceScore: 87 },
  { name: 'CloudFront', icon: Cloud, distributionCount: 10, complianceScore: 93 },
  { name: 'WAF', icon: Shield, ruleCount: 15, complianceScore: 89 },
  { name: 'KMS', icon: Key, keyCount: 25, complianceScore: 94 },
  { name: 'SES', icon: Mail, emailCount: 1000, complianceScore: 91 },
  { name: 'CloudSearch', icon: Search, domainCount: 3, complianceScore: 90 },
  { name: 'StepFunctions', icon: Workflow, workflowCount: 8, complianceScore: 92 },
  { name: 'EKS', icon: Cpu, clusterCount: 4, complianceScore: 88 },
  { name: 'SageMaker', icon: BrainCircuit, modelCount: 6, complianceScore: 95 },
]


export function ServiceDrawer({ isOpen, onClose, region, timestamp }: ServiceDrawerProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='text-sm font-medium'>Services in {region}</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-70px)] ">
          <div className="grid grid-cols-1 gap-2">
            {services.map((service) => (
              <Button
                key={service.name}
                variant="outline"
                className="h-auto p-4 justify-start"
                asChild
              >
                <Link href={`/scans/service/${service.name.toLowerCase()}?region=${region}&timestamp=${timestamp}`}>
                  <service.icon className="mr-2 h-4 w-4" />
                  <div className="text-left flex justify-between items-center w-full">
                    <div className="font-medium text-xs">{service.name}</div>
                    <div className="text-sm">
                    <Badge
                      variant="secondary"
                      className={`mt-1 border-border  bg-transparent`}
                    >
                      {service.instanceCount ? `Instances: ${service.instanceCount}` : ''}
                      {service.bucketCount ? `Buckets: ${service.bucketCount}` : ''}
                      {service.functionCount ? `Functions: ${service.functionCount}` : ''}
                      {service.userCount ? `Users: ${service.userCount}` : ''}
                      {service.vpcCount ? `VPCs: ${service.vpcCount}` : ''}
                      {service.taskCount ? `Tasks: ${service.taskCount}` : ''}
                      {service.distributionCount ? `Distributions: ${service.distributionCount}` : ''}
                      {service.ruleCount ? `Rules: ${service.ruleCount}` : ''}
                      {service.keyCount ? `Keys: ${service.keyCount}` : ''}
                      {service.emailCount ? `Emails: ${service.emailCount}` : ''}
                      {service.domainCount ? `Domains: ${service.domainCount}` : ''}
                      {service.workflowCount ? `Workflows: ${service.workflowCount}` : ''}
                      {service.clusterCount ? `Clusters: ${service.clusterCount}` : ''}
                      {service.modelCount ? `Models: ${service.modelCount}` : ''}
                    </Badge>
                    </div>
                   
                  </div>
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
