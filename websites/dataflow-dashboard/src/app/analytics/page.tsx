"use client";

import { DashboardHeader } from "@/components/dashboard-header";
import { AnalyticsOverview } from "@/components/analytics-overview";
import { PerformanceMetrics } from "@/components/performance-metrics";
import { DetailedCharts } from "@/components/detailed-charts";
import { DataFilters } from "@/components/data-filters";
import type { Metadata } from "next";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col h-screen bg-light-1">
      <DashboardHeader />
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-dark-3">Analytics Dashboard</h1>
              <p className="text-dark-1">Comprehensive analytics view with advanced insights</p>
            </div>
            <DataFilters />
          </div>
          
          <AnalyticsOverview />
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <DetailedCharts />
            </div>
            <div>
              <PerformanceMetrics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}