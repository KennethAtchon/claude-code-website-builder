"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const activities = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      email: "sarah.j@company.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b607?w=32&h=32&fit=crop&crop=face",
      initials: "SJ",
    },
    action: "Created new report",
    target: "Q4 Sales Analysis",
    time: "2 minutes ago",
    type: "create",
  },
  {
    id: 2,
    user: {
      name: "Mike Chen",
      email: "mike.c@company.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      initials: "MC",
    },
    action: "Updated dashboard",
    target: "Analytics Overview",
    time: "15 minutes ago",
    type: "update",
  },
  {
    id: 3,
    user: {
      name: "Emily Rodriguez",
      email: "emily.r@company.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      initials: "ER",
    },
    action: "Exported data",
    target: "User Metrics CSV",
    time: "1 hour ago",
    type: "export",
  },
  {
    id: 4,
    user: {
      name: "David Kim",
      email: "david.k@company.com",
      avatar: null,
      initials: "DK",
    },
    action: "Configured alert",
    target: "Revenue Threshold",
    time: "3 hours ago",
    type: "config",
  },
  {
    id: 5,
    user: {
      name: "Lisa Zhang",
      email: "lisa.z@company.com",
      avatar: null,
      initials: "LZ",
    },
    action: "Shared dashboard",
    target: "Team Performance",
    time: "5 hours ago",
    type: "share",
  },
];

const getTypeBadge = (type: string) => {
  const variants = {
    create: "bg-green-100 text-green-800",
    update: "bg-blue-100 text-blue-800",
    export: "bg-purple-100 text-purple-800",
    config: "bg-orange-100 text-orange-800",
    share: "bg-pink-100 text-pink-800",
  };
  return variants[type as keyof typeof variants] || "bg-gray-100 text-gray-800";
};

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="bg-white border-light-3 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-lg font-semibold text-dark-3">Recent Activity</CardTitle>
            <CardDescription className="text-dark-1">
              Latest user actions and system updates
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" className="h-8">
            <ExternalLink className="h-3 w-3 mr-1" />
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                className="flex items-center gap-4 p-3 rounded-lg bg-light-1 hover:bg-light-2 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={activity.user.avatar || undefined} />
                  <AvatarFallback className="bg-primary text-white text-sm">
                    {activity.user.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium text-dark-3 truncate">
                      {activity.user.name}
                    </p>
                    <Badge variant="outline" className={`text-xs px-2 py-0 ${getTypeBadge(activity.type)}`}>
                      {activity.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-dark-1">
                    {activity.action}{" "}
                    <span className="font-medium text-dark-2">{activity.target}</span>
                  </p>
                  <p className="text-xs text-dark-1 mt-1">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}