"use client"
import { TimestampCard } from "./timestamp";
import { RegionsCard } from "./region";
import { ServicesCard } from "./services";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <div className=" flex justify-between items-start mb-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-[300px] px-4 py-2 pl-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-[0.7rem] h-4 w-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <Button variant="default" size="sm" className="text-white font-medium w-[100px]">Scan Now</Button>
      </div>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <TimestampCard />
        <RegionsCard />
        <ServicesCard />
      </div>
    </div>
  );
}
