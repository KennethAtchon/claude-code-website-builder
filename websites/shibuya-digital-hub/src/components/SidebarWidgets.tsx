"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Star, 
  TrendingUp, 
  Copy, 
  Users, 
  MessageSquare, 
  BookOpen, 
  Calendar,
  ExternalLink,
  Github,
  Download,
  Hash,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Trending Tools Widget
const trendingTools = [
  { name: "Vite 5.0", rating: 4.9, trend: "+12%", category: "Build Tool" },
  { name: "Tailwind CSS", rating: 4.8, trend: "+8%", category: "CSS" },
  { name: "Prisma", rating: 4.7, trend: "+15%", category: "Database" },
  { name: "Supabase", rating: 4.6, trend: "+22%", category: "Backend" },
  { name: "Framer Motion", rating: 4.8, trend: "+5%", category: "Animation" },
];

// Code Snippets
const codeSnippets = [
  {
    id: 1,
    title: "React Hook for Local Storage",
    language: "TypeScript",
    code: `const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  
  const setStoredValue = (value: T) => {
    setValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  
  return [value, setStoredValue];
};`,
  },
  {
    id: 2,
    title: "CSS Container Query",
    language: "CSS",
    code: `.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}`,
  },
];

// Community Stats
const communityStats = [
  { label: "Active Users", value: "24.7k", change: "+12%" },
  { label: "Daily Posts", value: "1.2k", change: "+8%" },
  { label: "Total Articles", value: "156k", change: "+5%" },
  { label: "Code Snippets", value: "8.9k", change: "+15%" },
];

// Quick Links
const quickLinks = [
  { label: "Documentation", icon: BookOpen, href: "/docs" },
  { label: "API Reference", icon: Hash, href: "/api" },
  { label: "GitHub Repos", icon: Github, href: "/github" },
  { label: "Downloads", icon: Download, href: "/downloads" },
  { label: "Community Discord", icon: MessageSquare, href: "/discord" },
  { label: "Newsletter", icon: ExternalLink, href: "/newsletter" },
];

// Events
const upcomingEvents = [
  { date: "18", month: "Aug", title: "React Summit 2024", type: "Conference" },
  { date: "22", month: "Aug", title: "Next.js Workshop", type: "Workshop" },
  { date: "25", month: "Aug", title: "AI & Web Dev Meetup", type: "Meetup" },
  { date: "30", month: "Aug", title: "TypeScript Deep Dive", type: "Webinar" },
];

export function TrendingToolsWidget() {
  return (
    <Card className="h-fit">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          Trending Tools
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {trendingTools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between group cursor-pointer hover:bg-accent/50 p-2 rounded transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{tool.name}</span>
                <Badge variant="outline" className="text-xs">
                  {tool.category}
                </Badge>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-muted-foreground">{tool.rating}</span>
                </div>
                <span className="text-xs text-green-600 font-medium">{tool.trend}</span>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}

export function CodeSnippetsWidget() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[currentSnippet].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="h-fit">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center justify-between">
          <span>Code Snippets</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-6 w-6 p-0"
          >
            <Copy className="h-3 w-3" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{codeSnippets[currentSnippet].title}</span>
            <Badge variant="secondary" className="text-xs">
              {codeSnippets[currentSnippet].language}
            </Badge>
          </div>
          <div className="bg-dark-3 text-light-1 p-3 rounded text-xs font-mono overflow-x-auto">
            <pre className="whitespace-pre-wrap">{codeSnippets[currentSnippet].code}</pre>
          </div>
          {copied && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-xs text-green-600 text-center"
            >
              Copied to clipboard!
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function CommunityStatsWidget() {
  return (
    <Card className="h-fit">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          Community Stats
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-2 bg-accent/30 rounded"
            >
              <div className="text-lg font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
              <div className="text-xs text-green-600 font-medium">{stat.change}</div>
            </motion.div>
          ))}
        </div>
        <Separator className="my-3" />
        <Link href="/community">
          <Button variant="outline" size="sm" className="w-full">
            Join Community
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export function QuickLinksWidget() {
  return (
    <Card className="h-fit">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm">Quick Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={link.href}>
                <Button variant="ghost" className="w-full justify-start h-8 px-2 text-xs">
                  <link.icon className="h-3 w-3 mr-2" />
                  {link.label}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function EventCalendarWidget() {
  return (
    <Card className="h-fit">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={`${event.date}-${event.month}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 group cursor-pointer hover:bg-accent/50 p-2 rounded transition-colors"
            >
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{event.date}</div>
                <div className="text-xs text-muted-foreground uppercase">{event.month}</div>
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">{event.title}</div>
                <Badge variant="outline" className="text-xs mt-1">
                  {event.type}
                </Badge>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
        <Separator className="my-3" />
        <Link href="/events">
          <Button variant="outline" size="sm" className="w-full">
            View All Events
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}