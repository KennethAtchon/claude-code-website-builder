"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, Calendar, TrendingUp } from "lucide-react";

const statsData = [
  {
    title: "Total Reports",
    value: "147",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    change: "+12",
    changeText: "this month",
  },
  {
    title: "Downloads",
    value: "2,841",
    icon: Download,
    color: "text-green-600",
    bgColor: "bg-green-50",
    change: "+18%",
    changeText: "vs last month",
  },
  {
    title: "Scheduled",
    value: "23",
    icon: Calendar,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    change: "+5",
    changeText: "active schedules",
  },
  {
    title: "Performance",
    value: "94.2%",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    change: "+2.1%",
    changeText: "success rate",
  },
];

export function ReportsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-white border-light-3 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
                <div className="text-right">
                  <p className="text-xs text-green-600 font-medium">{stat.change}</p>
                  <p className="text-xs text-dark-1">{stat.changeText}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-3 mb-1">{stat.value}</h3>
                <p className="text-sm text-dark-1">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}