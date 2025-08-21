"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Users, 
  DollarSign, 
  ShoppingCart,
  Eye,
  Clock
} from "lucide-react";

const analyticsData = [
  {
    title: "Page Views",
    value: "124,892",
    change: "+18.2%",
    trend: "up",
    icon: Eye,
    description: "Total page views this month",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Session Duration",
    value: "4m 32s",
    change: "+12.5%",
    trend: "up",
    icon: Clock,
    description: "Average session duration",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Bounce Rate",
    value: "32.4%",
    change: "-8.1%",
    trend: "up",
    icon: Activity,
    description: "Visitors leaving after one page",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Conversion Rate",
    value: "3.87%",
    change: "+5.2%",
    trend: "up",
    icon: ShoppingCart,
    description: "Visitors who convert",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Revenue per User",
    value: "$47.23",
    change: "+15.8%",
    trend: "up",
    icon: DollarSign,
    description: "Average revenue per user",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Active Sessions",
    value: "1,847",
    change: "-3.2%",
    trend: "down",
    icon: Users,
    description: "Currently active users",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
];

export function AnalyticsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {analyticsData.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-white border-light-3 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </div>
              <Badge 
                variant={metric.trend === "up" ? "default" : "destructive"} 
                className="text-xs"
              >
                {metric.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {metric.change}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-dark-3">{metric.value}</h3>
                <p className="text-sm font-medium text-dark-2">{metric.title}</p>
                <p className="text-xs text-dark-1">{metric.description}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}