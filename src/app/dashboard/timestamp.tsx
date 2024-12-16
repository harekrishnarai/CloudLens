import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

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
    // Convert timestamp to URL-friendly format
    const formattedTimestamp = timestamp.replace(/\s/g, '_')
    router.push(`/dashboard/scan/${formattedTimestamp}`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Timestamps</CardTitle>
      </CardHeader>
      <CardContent className="">
        <ul className="space-y-2">
          {recentTimestamps.map((item) => (
            <li 
              key={item.id} 
              className="flex justify-start items-center"
              onClick={() => handleTimestampClick(item.timestamp)}
            >
              <span className="text-sm bg-secondary-background hover:bg-border/50 w-full rounded-md px-2 py-2 cursor-pointer">
                {item.timestamp}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

