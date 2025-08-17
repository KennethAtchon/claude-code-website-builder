"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Community</h1>
        <p className="text-muted-foreground">
          Join our vibrant community of developers, share knowledge, and collaborate on exciting projects.
        </p>
      </div>
      <Footer />
    </div>
  );
}