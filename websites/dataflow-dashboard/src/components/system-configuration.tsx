"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Database, 
  Wifi, 
  Shield, 
  Server, 
  Save, 
  RefreshCw, 
  AlertTriangle,
  CheckCircle 
} from "lucide-react";

const integrations = [
  {
    name: "Google Analytics",
    status: "connected",
    description: "Track website analytics and user behavior",
    icon: "🔍",
  },
  {
    name: "Salesforce CRM",
    status: "connected",
    description: "Import sales data and customer information",
    icon: "⚡",
  },
  {
    name: "Slack Notifications",
    status: "disconnected",
    description: "Send alerts and notifications to Slack channels",
    icon: "💬",
  },
  {
    name: "AWS S3 Storage",
    status: "connected",
    description: "Store and backup report files and data exports",
    icon: "☁️",
  },
];

export function SystemConfiguration() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-white border-light-3 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-dark-3">System Status</CardTitle>
            <CardDescription className="text-dark-1">
              Monitor system health and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Server className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-dark-3">System Status</p>
                  <p className="text-xs text-green-600">Online</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Database className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-dark-3">Database</p>
                  <p className="text-xs text-blue-600">99.9% Uptime</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Wifi className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-dark-3">API Status</p>
                  <p className="text-xs text-orange-600">Slow Response</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Shield className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-dark-3">Security</p>
                  <p className="text-xs text-purple-600">Protected</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-white border-light-3 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-dark-3">System Configuration</CardTitle>
            <CardDescription className="text-dark-1">
              Configure system-wide settings and integrations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="general" className="space-y-4">
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
                <TabsTrigger value="backup">Backup</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="systemName" className="text-dark-2">System Name</Label>
                      <Input id="systemName" defaultValue="DataFlow Dashboard" className="bg-light-1 border-light-3" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="adminEmail" className="text-dark-2">Admin Email</Label>
                      <Input id="adminEmail" type="email" defaultValue="admin@dataflow.com" className="bg-light-1 border-light-3" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-dark-2">Maintenance Mode</Label>
                        <p className="text-sm text-dark-1">Enable maintenance mode to restrict access</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-dark-2">Debug Mode</Label>
                        <p className="text-sm text-dark-1">Enable detailed logging for troubleshooting</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-dark-2">Auto Updates</Label>
                        <p className="text-sm text-dark-1">Automatically install system updates</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="integrations" className="space-y-4">
                <div className="space-y-4">
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={integration.name}
                      className="flex items-center justify-between p-4 border border-light-3 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{integration.icon}</div>
                        <div>
                          <h4 className="font-medium text-dark-3">{integration.name}</h4>
                          <p className="text-sm text-dark-1">{integration.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={integration.status === "connected" ? "default" : "outline"}
                          className={integration.status === "connected" ? "bg-green-100 text-green-800" : ""}
                        >
                          {integration.status === "connected" ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <AlertTriangle className="h-3 w-3 mr-1" />
                          )}
                          {integration.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          {integration.status === "connected" ? "Configure" : "Connect"}
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="backup" className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-5 w-5 text-blue-600" />
                      <h4 className="font-medium text-blue-900">Backup Status</h4>
                    </div>
                    <p className="text-sm text-blue-800">Last backup: January 15, 2024 at 3:00 AM</p>
                    <p className="text-sm text-blue-800">Next scheduled backup: January 16, 2024 at 3:00 AM</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-dark-2">Backup Frequency</Label>
                      <Select defaultValue="daily">
                        <SelectTrigger className="bg-light-1 border-light-3">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-dark-2">Retention Period</Label>
                      <Select defaultValue="30days">
                        <SelectTrigger className="bg-light-1 border-light-3">
                          <SelectValue placeholder="Select retention" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7days">7 days</SelectItem>
                          <SelectItem value="30days">30 days</SelectItem>
                          <SelectItem value="90days">90 days</SelectItem>
                          <SelectItem value="1year">1 year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Run Backup Now
                    </Button>
                    <Button variant="outline">
                      Restore from Backup
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="advanced" className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <h4 className="font-medium text-red-900">Danger Zone</h4>
                    </div>
                    <p className="text-sm text-red-800 mb-3">
                      These actions cannot be undone. Please proceed with caution.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="destructive" size="sm">
                        Reset System
                      </Button>
                      <Button variant="destructive" size="sm">
                        Clear All Data
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <Separator className="my-6" />
            
            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                <Save className="h-4 w-4 mr-2" />
                Apply Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}