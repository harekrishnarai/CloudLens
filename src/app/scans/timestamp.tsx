import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb"

const recentTimestamps = [
  { id: 1, timestamp: "2023-04-15 08:00:00" },
  { id: 2, timestamp: "2023-04-15 08:15:23" },
  { id: 3, timestamp: "2023-04-15 08:30:45" },
  { id: 4, timestamp: "2023-04-15 08:45:12" },
  { id: 5, timestamp: "2023-04-15 09:00:00" },
  { id: 6, timestamp: "2023-04-15 09:15:33" },
  { id: 7, timestamp: "2023-04-15 09:30:17" },
  { id: 8, timestamp: "2023-04-15 09:45:55" },
  { id: 9, timestamp: "2023-04-15 10:00:00" },
  { id: 10, timestamp: "2023-04-15 10:15:42" },
  { id: 11, timestamp: "2023-04-15 10:30:28" },
  { id: 12, timestamp: "2023-04-15 10:45:15" },
  { id: 13, timestamp: "2023-04-15 11:00:00" },
  { id: 14, timestamp: "2023-04-15 11:15:37" },
]

export function TimestampCard() {
  const router = useRouter()

  const handleTimestampClick = (timestamp: string) => {
    const formattedTimestamp = timestamp.replace(/\s/g, '_')
    router.push(`/scans/scan/${formattedTimestamp}`)
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentTimestamps.map((item) => (
          <Card 
            key={item.id} 
            className="hover:shadow-lg hover:bg-secondary/50 transition-shadow cursor-pointer"
            onClick={() => handleTimestampClick(item.timestamp)}
          >
            <CardHeader>
              <CardTitle className="text-sm">{item.timestamp}</CardTitle>
            </CardHeader>
          
          </Card>
        ))}
      </div>
    </div>
  )
}

