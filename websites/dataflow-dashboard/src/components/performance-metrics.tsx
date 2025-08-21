"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Target, Award, ExternalLink } from "lucide-react";

const performanceData = [
  {
    title: "System Performance",
    score: 92,
    status: "Excellent",
    color: "text-green-600",
    bgColor: "bg-green-100",
    icon: Zap,
    details: [
      { label: "Response Time", value: "127ms", status: "good" },
      { label: "Uptime", value: "99.9%", status: "excellent" },
      { label: "Error Rate", value: "0.02%", status: "excellent" },
    ],
  },
  {
    title: "User Satisfaction",
    score: 88,
    status: "Very Good",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    icon: Award,
    details: [
      { label: "NPS Score", value: "72", status: "good" },
      { label: "CSAT", value: "4.6/5", status: "excellent" },
      { label: "Retention", value: "89%", status: "good" },
    ],
  },
  {
    title: "Business KPIs",
    score: 85,
    status: "Good",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    icon: Target,
    details: [
      { label: "Goal Completion", value: "85%", status: "good" },
      { label: "ROI", value: "312%", status: "excellent" },
      { label: "Growth Rate", value: "23%", status: "good" },
    ],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "excellent":
      return "text-green-600 bg-green-100";
    case "good":
      return "text-blue-600 bg-blue-100";
    case "average":
      return "text-orange-600 bg-orange-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

export function PerformanceMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="space-y-6"
    >
      {performanceData.map((metric, index) => (
        <Card key={metric.title} className="bg-white border-light-3 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold text-dark-3">
                    {metric.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-dark-1">
                    Current performance status
                  </CardDescription>
                </div>
              </div>
              <Badge variant="outline" className={getStatusColor(metric.status.toLowerCase())}>
                {metric.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-dark-2">Overall Score</span>
                <span className="text-lg font-bold text-dark-3">{metric.score}/100</span>
              </div>
              <Progress value={metric.score} className="h-2" />
            </div>
            
            <div className="space-y-3">
              {metric.details.map((detail, detailIndex) => (
                <motion.div
                  key={detail.label}
                  className="flex items-center justify-between py-2 border-b border-light-3 last:border-b-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * (index + detailIndex) }}
                >
                  <span className="text-xs text-dark-1">{detail.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-dark-3">{detail.value}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      detail.status === "excellent" ? "bg-green-500" :
                      detail.status === "good" ? "bg-blue-500" : "bg-orange-500"
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button variant="outline" size="sm" className="w-full text-xs">
              <ExternalLink className="h-3 w-3 mr-1" />
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
      
      <Card className="bg-gradient-to-br from-primary to-primary-dark text-white border-0">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">Performance Insights</h3>
              <p className="text-sm opacity-90">
                Your dashboard is performing 15% better than last month
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}