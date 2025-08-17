"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Upload, Save, Camera } from "lucide-react";

export function UserSettings() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-white border-light-3 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-dark-3">Profile Information</CardTitle>
            <CardDescription className="text-dark-1">
              Update your account details and profile information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" />
                  <AvatarFallback className="bg-primary text-white text-lg">JD</AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-dark-3">John Doe</h3>
                <p className="text-sm text-dark-1">Administrator</p>
                <Badge variant="outline" className="text-xs">
                  Premium Account
                </Badge>
              </div>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-dark-2">First Name</Label>
                <Input id="firstName" defaultValue="John" className="bg-light-1 border-light-3" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-dark-2">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" className="bg-light-1 border-light-3" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-dark-2">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@company.com" className="bg-light-1 border-light-3" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-dark-2">Phone Number</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" className="bg-light-1 border-light-3" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-dark-2">Company</Label>
                <Input id="company" defaultValue="DataFlow Analytics" className="bg-light-1 border-light-3" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="text-dark-2">Role</Label>
                <Select defaultValue="admin">
                  <SelectTrigger className="bg-light-1 border-light-3">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="analyst">Analyst</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-dark-2">Bio</Label>
              <Textarea 
                id="bio" 
                placeholder="Tell us a little about yourself..."
                className="bg-light-1 border-light-3 resize-none"
                rows={3}
              />
            </div>
            
            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
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
            <CardTitle className="text-lg font-semibold text-dark-3">Preferences</CardTitle>
            <CardDescription className="text-dark-1">
              Customize your dashboard experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-dark-2">Email notifications</Label>
                  <p className="text-sm text-dark-1">Receive email updates about your account</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-dark-2">Dashboard tooltips</Label>
                  <p className="text-sm text-dark-1">Show helpful tooltips when hovering over elements</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-dark-2">Auto-refresh data</Label>
                  <p className="text-sm text-dark-1">Automatically refresh dashboard data every 5 minutes</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-dark-2">Dark mode</Label>
                  <p className="text-sm text-dark-1">Use dark theme for the dashboard</p>
                </div>
                <Switch />
              </div>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-dark-2">Timezone</Label>
                <Select defaultValue="utc-5">
                  <SelectTrigger className="bg-light-1 border-light-3">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                    <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
                    <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
                    <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-dark-2">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger className="bg-light-1 border-light-3">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}