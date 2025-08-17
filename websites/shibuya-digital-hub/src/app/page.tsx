"use client";

import Header from "@/components/Header";
import NewsTicker from "@/components/NewsTicker";
import FeaturedArticles from "@/components/FeaturedArticles";
import TechnologyCategories from "@/components/TechnologyCategories";
import LiveActivityFeed from "@/components/LiveActivityFeed";
import {
  TrendingToolsWidget,
  CodeSnippetsWidget,
  CommunityStatsWidget,
  QuickLinksWidget,
  EventCalendarWidget,
} from "@/components/SidebarWidgets";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NewsTicker />
      
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Main Content Area - 8 columns */}
          <main className="lg:col-span-8 space-y-6">
            <FeaturedArticles />
            <TechnologyCategories />
            <LiveActivityFeed />
          </main>
          
          {/* Right Sidebar - 4 columns */}
          <aside className="lg:col-span-4 space-y-4">
            <TrendingToolsWidget />
            <CodeSnippetsWidget />
            <CommunityStatsWidget />
            <QuickLinksWidget />
            <EventCalendarWidget />
          </aside>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
