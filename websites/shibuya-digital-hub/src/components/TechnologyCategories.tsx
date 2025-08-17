"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Brain, 
  Code2, 
  Smartphone, 
  Gamepad2, 
  Cpu, 
  Cloud, 
  Shield, 
  Database,
  Palette,
  Zap,
  Blocks,
  TrendingUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TechCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  articleCount: number;
  trending: boolean;
  gradient: string;
  description: string;
}

const techCategories: TechCategory[] = [
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    icon: Brain,
    articleCount: 342,
    trending: true,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Machine learning, LLMs, and AI tools'
  },
  {
    id: 'webdev',
    name: 'Web Development',
    icon: Code2,
    articleCount: 1289,
    trending: true,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Frontend, backend, and full-stack development'
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    icon: Smartphone,
    articleCount: 567,
    trending: false,
    gradient: 'from-green-500 to-emerald-500',
    description: 'iOS, Android, and cross-platform apps'
  },
  {
    id: 'gaming',
    name: 'Game Development',
    icon: Gamepad2,
    articleCount: 234,
    trending: false,
    gradient: 'from-red-500 to-orange-500',
    description: 'Game engines, graphics, and gameplay'
  },
  {
    id: 'hardware',
    name: 'Hardware & Systems',
    icon: Cpu,
    articleCount: 189,
    trending: false,
    gradient: 'from-gray-500 to-slate-500',
    description: 'CPUs, GPUs, and system architecture'
  },
  {
    id: 'cloud',
    name: 'Cloud Computing',
    icon: Cloud,
    articleCount: 445,
    trending: true,
    gradient: 'from-sky-500 to-blue-500',
    description: 'AWS, Azure, serverless, and DevOps'
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    icon: Shield,
    articleCount: 278,
    trending: true,
    gradient: 'from-yellow-500 to-amber-500',
    description: 'Security practices and threat analysis'
  },
  {
    id: 'data',
    name: 'Data Science',
    icon: Database,
    articleCount: 356,
    trending: false,
    gradient: 'from-indigo-500 to-purple-500',
    description: 'Analytics, databases, and big data'
  },
  {
    id: 'design',
    name: 'UI/UX Design',
    icon: Palette,
    articleCount: 167,
    trending: false,
    gradient: 'from-pink-500 to-rose-500',
    description: 'Design systems and user experience'
  },
  {
    id: 'devtools',
    name: 'Developer Tools',
    icon: Zap,
    articleCount: 289,
    trending: true,
    gradient: 'from-violet-500 to-purple-500',
    description: 'IDEs, frameworks, and productivity tools'
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    icon: Blocks,
    articleCount: 123,
    trending: false,
    gradient: 'from-emerald-500 to-teal-500',
    description: 'Crypto, DeFi, and decentralized apps'
  },
  {
    id: 'iot',
    name: 'IoT & Embedded',
    icon: Cpu,
    articleCount: 98,
    trending: false,
    gradient: 'from-orange-500 to-red-500',
    description: 'Internet of Things and embedded systems'
  },
];

export default function TechnologyCategories() {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Technology Categories</h2>
        <Link href="/categories" className="text-sm text-primary hover:underline">
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={`/category/${category.id}`}>
              <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">
                          {category.articleCount} articles
                        </span>
                        {category.trending && (
                          <Badge variant="secondary" className="h-4 text-xs">
                            <TrendingUp className="h-2 w-2 mr-1" />
                            Hot
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}