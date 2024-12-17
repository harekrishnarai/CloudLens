import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'

interface TimestampSelectorProps {
  timestamps: string[]
  onSelect: (timestamp: string) => void
}

export function TimestampSelector({ timestamps, onSelect }: TimestampSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTimestamps = timestamps.filter((timestamp) =>
    timestamp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-xs">
      <Select onValueChange={onSelect} defaultValue={timestamps[0]}>
        <SelectTrigger id="timestamp" className="outline-none focus:ring-0">
          <SelectValue placeholder="Select a timestamp" />
        </SelectTrigger>
        <SelectContent className="flex flex-col gap-2 p-1">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 bg-transparent border-border border rounded-md mt-1 mb-2 outline-none"
          />
          {filteredTimestamps.map((timestamp) => (
            <SelectItem key={timestamp} value={timestamp}>
              {timestamp}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

