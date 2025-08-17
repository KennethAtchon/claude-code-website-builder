"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Heart, Share2, TrendingUp, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ActivityItem {
  id: number;
  type: 'comment' | 'like' | 'post' | 'trending';
  user: {
    name: string;
    avatar: string;
    handle: string;
  };
  content: string;
  timestamp: string;
  metadata?: {
    likes?: number;
    replies?: number;
    topic?: string;
  };
}

const initialActivity: ActivityItem[] = [
  {
    id: 1,
    type: 'post',
    user: { name: 'Alex Chen', avatar: '/avatars/alex.jpg', handle: '@alexchen' },
    content: 'Just released a new TypeScript utility library for form validation! 🚀',
    timestamp: '2m ago',
    metadata: { likes: 24, replies: 8, topic: 'TypeScript' }
  },
  {
    id: 2,
    type: 'comment',
    user: { name: 'Sarah Kim', avatar: '/avatars/sarah.jpg', handle: '@sarahdev' },
    content: 'Great insights on React Server Components! The performance improvements are incredible.',
    timestamp: '5m ago',
    metadata: { likes: 12, topic: 'React' }
  },
  {
    id: 3,
    type: 'trending',
    user: { name: 'System', avatar: '/avatars/system.jpg', handle: '@system' },
    content: '#WebGL is trending with 156 new posts today',
    timestamp: '8m ago',
    metadata: { topic: 'WebGL' }
  },
  {
    id: 4,
    type: 'like',
    user: { name: 'Mike Rodriguez', avatar: '/avatars/mike.jpg', handle: '@mikecodes' },
    content: 'Loved the article "Building Scalable APIs with FastAPI"',
    timestamp: '12m ago',
    metadata: { likes: 7, topic: 'FastAPI' }
  },
  {
    id: 5,
    type: 'post',
    user: { name: 'Emma Wilson', avatar: '/avatars/emma.jpg', handle: '@emmawilson' },
    content: 'Anyone else excited about the new CSS container queries? Game changer for responsive design!',
    timestamp: '15m ago',
    metadata: { likes: 31, replies: 15, topic: 'CSS' }
  },
];

export default function LiveActivityFeed() {
  const [activities, setActivities] = useState<ActivityItem[]>(initialActivity);

  // Simulate real-time activity
  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity: ActivityItem = {
        id: Date.now(),
        type: Math.random() > 0.5 ? 'comment' : 'post',
        user: {
          name: 'New User',
          avatar: '/avatars/default.jpg',
          handle: '@newuser'
        },
        content: 'New activity just happened! This is a simulated update.',
        timestamp: 'just now',
        metadata: { likes: Math.floor(Math.random() * 50), replies: Math.floor(Math.random() * 20) }
      };

      setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
    }, 15000); // Add new activity every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'comment': return <MessageCircle className="h-3 w-3" />;
      case 'like': return <Heart className="h-3 w-3" />;
      case 'trending': return <TrendingUp className="h-3 w-3" />;
      default: return <User className="h-3 w-3" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'comment': return 'text-blue-500';
      case 'like': return 'text-red-500';
      case 'trending': return 'text-green-500';
      default: return 'text-primary';
    }
  };

  return (
    <Card className="h-fit">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Live Activity
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="max-h-96 overflow-y-auto space-y-3">
        <AnimatePresence>
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex gap-3 p-2 hover:bg-accent/30 rounded transition-colors cursor-pointer"
            >
              <div className="relative">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.user.avatar} />
                  <AvatarFallback className="text-xs">
                    {activity.user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-background flex items-center justify-center ${getActivityColor(activity.type)}`}>
                  {getActivityIcon(activity.type)}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-xs truncate">{activity.user.name}</span>
                  <span className="text-xs text-muted-foreground">{activity.user.handle}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                </div>
                
                <p className="text-xs text-foreground mb-2 line-clamp-2">
                  {activity.content}
                </p>
                
                <div className="flex items-center gap-3">
                  {activity.metadata?.topic && (
                    <Badge variant="outline" className="text-xs h-5">
                      {activity.metadata.topic}
                    </Badge>
                  )}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    {activity.metadata?.likes && (
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {activity.metadata.likes}
                      </div>
                    )}
                    {activity.metadata?.replies && (
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {activity.metadata.replies}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}