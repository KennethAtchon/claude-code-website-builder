"use client";

import {
  BarChart3,
  FileText,
  Home,
  Settings,
  Users,
  TrendingUp,
  Activity,
  Database,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const quickStats = [
  {
    title: "Active Users",
    value: "2,847",
    icon: Users,
    trend: "+12%",
  },
  {
    title: "Revenue",
    value: "$127.5K",
    icon: TrendingUp,
    trend: "+8.2%",
  },
  {
    title: "Activity",
    value: "1,293",
    icon: Activity,
    trend: "+15%",
  },
];

export function DashboardSidebar() {
  return (
    <Sidebar className="border-r bg-light-1">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <Database className="h-4 w-4" />
          </div>
          <div>
            <h1 className="font-semibold text-dark-3">DataFlow</h1>
            <p className="text-xs text-dark-1">Dashboard</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-dark-2">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 text-dark-2 hover:text-primary hover:bg-light-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-dark-2">Quick Stats</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3 p-2">
              {quickStats.map((stat) => (
                <div key={stat.title} className="rounded-lg bg-white p-3 shadow-sm border border-light-3">
                  <div className="flex items-center justify-between mb-1">
                    <stat.icon className="h-4 w-4 text-dark-1" />
                    <Badge variant="outline" className="text-xs text-primary border-primary">
                      {stat.trend}
                    </Badge>
                  </div>
                  <div className="text-lg font-semibold text-dark-3">{stat.value}</div>
                  <div className="text-xs text-dark-1">{stat.title}</div>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" />
            <AvatarFallback className="bg-primary text-white text-xs">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-dark-3 truncate">John Doe</p>
            <p className="text-xs text-dark-1 truncate">Admin</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}