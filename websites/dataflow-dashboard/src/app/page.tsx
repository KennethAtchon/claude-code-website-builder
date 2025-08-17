"use client";

import { DashboardHeader } from "@/components/dashboard-header";
import { MetricsGrid } from "@/components/metrics-grid";
import { RevenueChart } from "@/components/revenue-chart";
import { RecentActivity } from "@/components/recent-activity";
import { QuickActions } from "@/components/quick-actions";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-light-1">
      <DashboardHeader />
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-dark-3">Dashboard Overview</h1>
            <p className="text-dark-1">Monitor your key performance metrics and business insights</p>
          </div>
          
          <MetricsGrid />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart />
            <RecentActivity />
          </div>
          
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
