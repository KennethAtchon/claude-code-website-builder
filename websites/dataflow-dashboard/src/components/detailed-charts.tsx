"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const revenueData = [
  { date: "2024-01-01", value: 45000 },
  { date: "2024-01-15", value: 52000 },
  { date: "2024-02-01", value: 48000 },
  { date: "2024-02-15", value: 61000 },
  { date: "2024-03-01", value: 55000 },
  { date: "2024-03-15", value: 67000 },
  { date: "2024-04-01", value: 71000 },
  { date: "2024-04-15", value: 69000 },
];

const trafficData = [
  { source: "Organic Search", value: 45, color: "bg-blue-500" },
  { source: "Direct", value: 25, color: "bg-green-500" },
  { source: "Social Media", value: 15, color: "bg-purple-500" },
  { source: "Email", value: 10, color: "bg-orange-500" },
  { source: "Referral", value: 5, color: "bg-pink-500" },
];

const userEngagement = [
  { metric: "New Users", value: 1247, change: "+12%" },
  { metric: "Returning Users", value: 3521, change: "+8%" },
  { metric: "Sessions per User", value: 2.4, change: "+15%" },
  { metric: "Pages per Session", value: 4.7, change: "+3%" },
];

export function DetailedCharts() {
  const maxRevenue = Math.max(...revenueData.map(d => d.value));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="bg-white border-light-3 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-dark-3">Detailed Analytics</CardTitle>
          <CardDescription className="text-dark-1">
            In-depth analysis with multiple visualization types
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="revenue" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="revenue">Revenue Trends</TabsTrigger>
              <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
              <TabsTrigger value="engagement">User Engagement</TabsTrigger>
            </TabsList>
            
            <TabsContent value="revenue" className="space-y-4">
              <div className="h-64 flex items-end justify-between gap-2 p-4 bg-light-1 rounded-lg">
                {revenueData.map((data, index) => (
                  <motion.div
                    key={data.date}
                    className="flex flex-col items-center flex-1"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                  >
                    <div className="w-full relative">
                      <motion.div
                        className="w-full bg-gradient-to-t from-primary to-primary-dark rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: `${(data.value / maxRevenue) * 180}px` }}
                        transition={{ duration: 0.8, delay: 0.1 * index }}
                      />
                    </div>
                    <span className="text-xs text-dark-1 mt-2 transform -rotate-45 origin-left">
                      {new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-dark-1">
                <span>Revenue growth over time</span>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  +23% increase
                </Badge>
              </div>
            </TabsContent>
            
            <TabsContent value="traffic" className="space-y-4">
              <div className="space-y-3">
                {trafficData.map((source, index) => (
                  <motion.div
                    key={source.source}
                    className="flex items-center justify-between p-3 bg-light-1 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${source.color}`} />
                      <span className="text-sm font-medium text-dark-2">{source.source}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-dark-1">{source.value}%</span>
                      <div className="w-24 h-2 bg-light-3 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${source.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${source.value}%` }}
                          transition={{ duration: 0.8, delay: 0.2 * index }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="engagement" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {userEngagement.map((metric, index) => (
                  <motion.div
                    key={metric.metric}
                    className="p-4 bg-light-1 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-dark-2">{metric.metric}</h4>
                      <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                        {metric.change}
                      </Badge>
                    </div>
                    <p className="text-xl font-bold text-dark-3">{metric.value}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
}