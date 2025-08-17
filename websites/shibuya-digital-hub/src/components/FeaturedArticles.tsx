"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, User, Eye, MessageCircle, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  views: string;
  comments: number;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js 14",
    excerpt: "Learn the latest patterns and best practices for creating performant, maintainable React applications using Next.js 14's app directory and server components.",
    author: "Sarah Chen",
    date: "2h ago",
    readTime: "8 min",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    views: "12.4k",
    comments: 89,
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered Code Generation: Claude vs GPT-4 Comparison",
    excerpt: "An in-depth analysis of AI coding assistants and their impact on developer productivity in 2024.",
    author: "Michael Rodriguez",
    date: "4h ago",
    readTime: "12 min",
    category: "AI",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    views: "8.7k",
    comments: 156,
  },
  {
    id: 3,
    title: "Flutter 3.19: What's New for Mobile Developers",
    excerpt: "Explore the latest features, performance improvements, and tools in Flutter's newest release.",
    author: "Emma Watson",
    date: "6h ago",
    readTime: "6 min",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    views: "5.2k",
    comments: 73,
  },
  {
    id: 4,
    title: "Cybersecurity Trends: Protecting Your Applications in 2024",
    excerpt: "Essential security practices and emerging threats every developer should know about.",
    author: "David Kim",
    date: "8h ago",
    readTime: "10 min",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    views: "9.1k",
    comments: 124,
  },
  {
    id: 5,
    title: "The Rise of Edge Computing: Serverless at the Edge",
    excerpt: "How edge computing is revolutionizing web performance and user experience globally.",
    author: "Lisa Park",
    date: "10h ago",
    readTime: "7 min",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    views: "6.8k",
    comments: 95,
  },
  {
    id: 6,
    title: "Gaming Performance: RTX 4090 vs RTX 4080 Benchmark",
    excerpt: "Detailed performance analysis across 30+ games at 4K resolution with ray tracing enabled.",
    author: "Alex Thompson",
    date: "12h ago",
    readTime: "15 min",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    views: "15.3k",
    comments: 267,
  },
];

export default function FeaturedArticles() {
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <section className="py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Featured Article - Large */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <Link href={`/article/${featuredArticle.id}`}>
                <div className="relative h-64 lg:h-80">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-3 left-3" variant="secondary">
                    {featuredArticle.category}
                  </Badge>
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {featuredArticle.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {featuredArticle.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {featuredArticle.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {featuredArticle.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </motion.div>
        )}

        {/* Regular Articles Grid */}
        <div className="space-y-4">
          {regularArticles.slice(0, 5).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
                <Link href={`/article/${article.id}`}>
                  <div className="flex gap-3 p-3">
                    <div className="relative w-20 h-16 flex-shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover rounded group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <span>{article.author}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {article.views}
                          </div>
                          <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}