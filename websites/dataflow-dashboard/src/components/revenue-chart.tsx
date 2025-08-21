"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const chartData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 48000 },
  { month: "Apr", revenue: 61000 },
  { month: "May", revenue: 55000 },
  { month: "Jun", revenue: 67000 },
  { month: "Jul", revenue: 71000 },
  { month: "Aug", revenue: 69000 },
  { month: "Sep", revenue: 75000 },
  { month: "Oct", revenue: 82000 },
  { month: "Nov", revenue: 78000 },
  { month: "Dec", revenue: 85000 },
];

export function RevenueChart() {
  const maxRevenue = Math.max(...chartData.map(d => d.revenue));

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card className="bg-white border-light-3 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-lg font-semibold text-dark-3">Revenue Trends</CardTitle>
            <CardDescription className="text-dark-1">
              Monthly revenue over the last 12 months
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8">
              <Download className="h-3 w-3 mr-1" />
              Export
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Export CSV</DropdownMenuItem>
                <DropdownMenuItem>Export PDF</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-end justify-between gap-2">
            {chartData.map((data, index) => (
              <div
                key={data.month}
                className="flex flex-col items-center flex-1 h-full"
              >
                <div className="w-full h-full flex flex-col justify-end">
                  <motion.div
                    className="w-full bg-primary rounded-t-sm"
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.revenue / maxRevenue) * 200}px` }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                  />
                </div>
                <span className="text-xs text-dark-1 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-dark-1">
            <span>$0</span>
            <span>${(maxRevenue / 1000).toFixed(0)}K</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}