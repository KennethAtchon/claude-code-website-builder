"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  UserPlus, 
  Settings, 
  Download, 
  Upload, 
  BarChart3,
  Calendar,
  Mail
} from "lucide-react";

const actions = [
  {
    title: "Create Report",
    description: "Generate a new analytics report",
    icon: FileText,
    href: "/reports/new",
    color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  },
  {
    title: "Add User",
    description: "Invite new team member",
    icon: UserPlus,
    href: "/users/invite",
    color: "bg-green-50 text-green-600 hover:bg-green-100",
  },
  {
    title: "Export Data",
    description: "Download dashboard data",
    icon: Download,
    href: "/export",
    color: "bg-purple-50 text-purple-600 hover:bg-purple-100",
  },
  {
    title: "Upload Dataset",
    description: "Import new data source",
    icon: Upload,
    href: "/upload",
    color: "bg-orange-50 text-orange-600 hover:bg-orange-100",
  },
  {
    title: "Analytics",
    description: "View detailed analytics",
    icon: BarChart3,
    href: "/analytics",
    color: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100",
  },
  {
    title: "Schedule Meeting",
    description: "Book team discussion",
    icon: Calendar,
    href: "/calendar",
    color: "bg-pink-50 text-pink-600 hover:bg-pink-100",
  },
  {
    title: "Send Report",
    description: "Email report to stakeholders",
    icon: Mail,
    href: "/send-report",
    color: "bg-yellow-50 text-yellow-600 hover:bg-yellow-100",
  },
  {
    title: "System Settings",
    description: "Configure dashboard settings",
    icon: Settings,
    href: "/settings",
    color: "bg-gray-50 text-gray-600 hover:bg-gray-100",
  },
];

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <Card className="bg-white border-light-3 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-dark-3">Quick Actions</CardTitle>
          <CardDescription className="text-dark-1">
            Frequently used actions and shortcuts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {actions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Button
                  variant="ghost"
                  className="h-auto p-4 flex flex-col items-center text-center space-y-2 w-full hover:bg-light-2"
                  asChild
                >
                  <a href={action.href}>
                    <div className={`p-3 rounded-lg ${action.color} transition-colors`}>
                      <action.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-dark-3 text-sm">{action.title}</h3>
                      <p className="text-xs text-dark-1 mt-1">{action.description}</p>
                    </div>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}