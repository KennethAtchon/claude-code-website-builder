"use client";

import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Articles</h1>
        <p className="text-muted-foreground">
          Browse our comprehensive collection of technology articles, tutorials, and insights.
        </p>
      </div>
      <Footer />
    </div>
  );
}