import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "DataFlow Dashboard - Analytics & Business Intelligence",
  description: "A comprehensive analytics dashboard for tracking key performance metrics, managing data visualization, and monitoring business insights in real-time",
  openGraph: {
    title: "DataFlow Dashboard - Analytics & Business Intelligence",
    description: "A comprehensive analytics dashboard for tracking key performance metrics, managing data visualization, and monitoring business insights in real-time",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <DashboardSidebar />
            <main className="flex-1 overflow-hidden">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
