"use client";

import { useState } from "react";
import { TimestampSelector } from "./components/timestamp";
import { RegionCard } from "./components/region-card";
import { ServiceDrawer } from "./components/service-drawer";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbLink, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";

// Mock data for timestamps and regions
const timestamps = [
  "2023-06-01 00:00:00",
  "2023-06-02 00:00:00",
  "2023-06-03 00:00:00",
  "2023-06-04 00:00:00",
  "2023-06-05 00:00:00",
  "2023-06-06 00:00:00",
  "2023-06-07 00:00:00",
  "2023-06-08 00:00:00",
  "2023-06-09 00:00:00",
  "2023-06-10 00:00:00",
  "2023-06-11 00:00:00",
  "2023-06-12 00:00:00",
];

const regions = [
  { name: "us-east-1", resourceCount: 120, complianceScore: 92 },
  { name: "us-west-2", resourceCount: 85, complianceScore: 88 },
  { name: "eu-west-1", resourceCount: 95, complianceScore: 90 },
  { name: "eu-central-1", resourceCount: 70, complianceScore: 95 },
  { name: "ap-southeast-1", resourceCount: 60, complianceScore: 87 },
  { name: "ap-northeast-1", resourceCount: 75, complianceScore: 93 },
  { name: "sa-east-1", resourceCount: 40, complianceScore: 91 },
  { name: "ca-central-1", resourceCount: 55, complianceScore: 89 },
  { name: "ap-south-1", resourceCount: 65, complianceScore: 86 },
  { name: "ap-southeast-2", resourceCount: 50, complianceScore: 94 },
  { name: "eu-west-2", resourceCount: 45, complianceScore: 92 },
  { name: "eu-west-3", resourceCount: 35, complianceScore: 96 },
  { name: "eu-north-1", resourceCount: 30, complianceScore: 97 },
  { name: "ap-east-1", resourceCount: 25, complianceScore: 95 },
];

export default function DashboardPage() {
  const [selectedTimestamp, setSelectedTimestamp] = useState(timestamps[0]);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <div className="space-y-3 w-full">
      <div className="flex justify-between items-center px-3 py-2 border-b border-border">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Scans</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Button
          variant="default"
          size="sm"
          className="text-white font-medium w-[100px]"
        >
          Scan Now
        </Button>
      </div>
      <div className="flex justify-between items-center px-3">
          <p className="text-sm text-white font-medium">Regions</p>
          <TimestampSelector
            timestamps={timestamps}
            onSelect={setSelectedTimestamp}
          />
      </div>
      <div className="grid grid-cols-1 px-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {regions.map((region) => (
          <RegionCard
            key={region.name}
            region={region}
            onClick={() => setSelectedRegion(region.name)}
          />
        ))}
      </div>
      <ServiceDrawer
        isOpen={!!selectedRegion}
        onClose={() => setSelectedRegion(null)}
        region={selectedRegion}
        timestamp={selectedTimestamp}
      />
    </div>
  );
}
