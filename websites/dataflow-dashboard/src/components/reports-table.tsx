"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Download, Edit, Trash2, Eye } from "lucide-react";

const reportsData = [
  {
    id: 1,
    name: "Q4 Sales Performance",
    type: "Sales Report",
    creator: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b607?w=32&h=32&fit=crop&crop=face",
      initials: "SJ",
    },
    status: "completed",
    created: "2024-01-15",
    downloads: 142,
    size: "2.4 MB",
  },
  {
    id: 2,
    name: "User Engagement Analytics",
    type: "Analytics Report",
    creator: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      initials: "MC",
    },
    status: "processing",
    created: "2024-01-14",
    downloads: 89,
    size: "1.8 MB",
  },
  {
    id: 3,
    name: "Revenue Trends 2024",
    type: "Financial Report",
    creator: {
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      initials: "ER",
    },
    status: "completed",
    created: "2024-01-13",
    downloads: 267,
    size: "3.1 MB",
  },
  {
    id: 4,
    name: "Customer Satisfaction Survey",
    type: "Survey Report",
    creator: {
      name: "David Kim",
      avatar: null,
      initials: "DK",
    },
    status: "draft",
    created: "2024-01-12",
    downloads: 0,
    size: "0.8 MB",
  },
  {
    id: 5,
    name: "Marketing Campaign ROI",
    type: "Marketing Report",
    creator: {
      name: "Lisa Zhang",
      avatar: null,
      initials: "LZ",
    },
    status: "completed",
    created: "2024-01-11",
    downloads: 156,
    size: "2.9 MB",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
    case "processing":
      return <Badge className="bg-blue-100 text-blue-800">Processing</Badge>;
    case "draft":
      return <Badge className="bg-gray-100 text-gray-800">Draft</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export function ReportsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-white border-light-3 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-dark-3">Reports Library</CardTitle>
          <CardDescription className="text-dark-1">
            Manage and download your analytics reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-light-3">
                <TableHead className="text-dark-2">Report Name</TableHead>
                <TableHead className="text-dark-2">Type</TableHead>
                <TableHead className="text-dark-2">Creator</TableHead>
                <TableHead className="text-dark-2">Status</TableHead>
                <TableHead className="text-dark-2">Created</TableHead>
                <TableHead className="text-dark-2">Downloads</TableHead>
                <TableHead className="text-dark-2">Size</TableHead>
                <TableHead className="text-right text-dark-2">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportsData.map((report, index) => (
                <motion.tr
                  key={report.id}
                  className="border-light-3 hover:bg-light-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <TableCell className="font-medium text-dark-3">
                    {report.name}
                  </TableCell>
                  <TableCell className="text-dark-1">
                    <Badge variant="outline" className="text-xs">
                      {report.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={report.creator.avatar || undefined} />
                        <AvatarFallback className="bg-primary text-white text-xs">
                          {report.creator.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-dark-2">{report.creator.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(report.status)}
                  </TableCell>
                  <TableCell className="text-dark-1">
                    {new Date(report.created).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-dark-1">
                    {report.downloads}
                  </TableCell>
                  <TableCell className="text-dark-1">
                    {report.size}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
}