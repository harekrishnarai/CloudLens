import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const recentRegions = [
  { id: 1, name: "us-east-1", status: "Active" },
  { id: 2, name: "eu-west-2", status: "Active" },
  { id: 3, name: "ap-southeast-1", status: "Maintenance" },
  { id: 4, name: "us-west-1", status: "Active" },
  { id: 5, name: "eu-central-1", status: "Active" },
  { id: 6, name: "ap-northeast-1", status: "Active" },
  { id: 7, name: "sa-east-1", status: "Maintenance" },
  { id: 8, name: "ca-central-1", status: "Active" },
  { id: 9, name: "ap-south-1", status: "Active" },
  { id: 10, name: "eu-west-1", status: "Active" },
  { id: 11, name: "ap-east-1", status: "Maintenance" },
  { id: 12, name: "af-south-1", status: "Active" },
  { id: 13, name: "eu-south-1", status: "Active" },
]

export function RegionsCard() {
  return (
    <Card className="min-h-[calc(100vh-90px)]">
      <CardHeader>
        <CardTitle className="text-sm">Regions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {recentRegions.map((region) => (
            <li key={region.id} className="flex justify-between items-center">
              <span className="text-sm bg-secondary-background hover:bg-secondary/50 w-full rounded-md p-2">
                {region.name}
                <Badge variant="outline" className={`float-right ${region.status === 'Active' ? 'text-green-500' : 'text-yellow-500'}`}>
                  {region.status}
                </Badge>
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

