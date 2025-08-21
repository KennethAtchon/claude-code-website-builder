"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShoppingCart,
  FileText,
  Calendar
} from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Sales Performance Dashboard",
    description: "Comprehensive sales metrics with revenue trends and conversion rates",
    category: "Sales",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
    features: ["Revenue tracking", "Conversion analysis", "Sales forecasting"],
    usage: 45,
    lastUpdated: "2024-01-15",
  },
  {
    id: 2,
    name: "User Analytics Report",
    description: "Detailed user behavior analysis with engagement metrics",
    category: "Analytics",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    features: ["User journey", "Engagement metrics", "Retention analysis"],
    usage: 32,
    lastUpdated: "2024-01-14",
  },
  {
    id: 3,
    name: "Marketing Campaign ROI",
    description: "Track marketing campaign performance and return on investment",
    category: "Marketing",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    features: ["Campaign tracking", "ROI calculation", "Channel analysis"],
    usage: 28,
    lastUpdated: "2024-01-13",
  },
  {
    id: 4,
    name: "E-commerce Analytics",
    description: "Complete e-commerce metrics including cart analysis and product performance",
    category: "E-commerce",
    icon: ShoppingCart,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    features: ["Product analysis", "Cart metrics", "Customer segmentation"],
    usage: 38,
    lastUpdated: "2024-01-12",
  },
  {
    id: 5,
    name: "Financial Summary",
    description: "Monthly and quarterly financial performance overview",
    category: "Finance",
    icon: BarChart3,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    features: ["P&L statements", "Cash flow", "Budget tracking"],
    usage: 22,
    lastUpdated: "2024-01-11",
  },
  {
    id: 6,
    name: "Executive Summary",
    description: "High-level overview for executive stakeholders",
    category: "Executive",
    icon: FileText,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    features: ["KPI overview", "Executive insights", "Strategic metrics"],
    usage: 15,
    lastUpdated: "2024-01-10",
  },
];

export function ReportTemplates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="bg-white border-light-3 shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${template.bgColor}`}>
                    <template.icon className={`h-6 w-6 ${template.color}`} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {template.category}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg font-semibold text-dark-3">
                    {template.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-dark-1">
                    {template.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-medium text-dark-2">Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {template.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-dark-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(template.lastUpdated).toLocaleDateString()}
                  </span>
                  <span>{template.usage} uses</span>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary-dark text-white">
                    Use Template
                  </Button>
                  <Button variant="outline" size="sm">
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}