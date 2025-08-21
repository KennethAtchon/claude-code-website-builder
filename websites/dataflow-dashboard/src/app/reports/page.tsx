"use client";

import { DashboardHeader } from "@/components/dashboard-header";
import { ReportsTable } from "@/components/reports-table";
import { ReportTemplates } from "@/components/report-templates";
import { ReportsStats } from "@/components/reports-stats";
import { Button } from "@/components/ui/button";
import { Plus, Upload, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ReportsPage() {
  return (
    <div className="flex flex-col h-screen bg-light-1">
      <DashboardHeader />
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-dark-3">Reports Management</h1>
              <p className="text-dark-1">Create, manage, and export your analytics reports</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Import
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary-dark text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Report
              </Button>
            </div>
          </div>
          
          <ReportsStats />
          
          <Tabs defaultValue="reports" className="space-y-4">
            <TabsList>
              <TabsTrigger value="reports">All Reports</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            </TabsList>
            
            <TabsContent value="reports" className="space-y-4">
              <ReportsTable />
            </TabsContent>
            
            <TabsContent value="templates" className="space-y-4">
              <ReportTemplates />
            </TabsContent>
            
            <TabsContent value="scheduled" className="space-y-4">
              <div className="text-center py-12">
                <p className="text-dark-1">Scheduled reports feature coming soon</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}