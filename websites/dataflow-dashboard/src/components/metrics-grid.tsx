"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Target, ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    title: "Total Revenue",
    value: "$127.5K",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Active Users",
    value: "2,847",
    change: "+12.3%",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-2.1%",
    trend: "down",
    icon: Target,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Growth Rate",
    value: "15.8%",
    change: "+5.4%",
    trend: "up",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-white border-light-3 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <metric.icon className={`h-5 w-5 ${metric.color}`} />
                </div>
                <div className="flex items-center gap-1 text-sm">
                  {metric.trend === "up" ? (
                    <ArrowUpIcon className="h-3 w-3 text-green-600" />
                  ) : (
                    <ArrowDownIcon className="h-3 w-3 text-red-600" />
                  )}
                  <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark-3 mb-1">{metric.value}</h3>
                <p className="text-sm text-dark-1">{metric.title}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}