"use client";

import { DashboardHeader } from "@/components/dashboard-header";
import { UserSettings } from "@/components/user-settings";
import { SystemConfiguration } from "@/components/system-configuration";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Settings as SettingsIcon, Shield, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex flex-col h-screen bg-light-1">
      <DashboardHeader />
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-dark-3">Settings</h1>
            <p className="text-dark-1">Manage your account preferences and system configuration</p>
          </div>
          
          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="system" className="flex items-center gap-2">
                <SettingsIcon className="h-4 w-4" />
                System
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="space-y-4">
              <UserSettings />
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-4">
              <div className="text-center py-12">
                <p className="text-dark-1">Notification preferences coming soon</p>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-4">
              <div className="text-center py-12">
                <p className="text-dark-1">Security settings coming soon</p>
              </div>
            </TabsContent>
            
            <TabsContent value="system" className="space-y-4">
              <SystemConfiguration />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}