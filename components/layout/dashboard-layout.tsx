"use client";

import * as React from "react";
import { Sidebar } from "./sidebar";
import { TopNav } from "./topnav";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

function DashboardLayout({ children, title, className }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col lg:pl-[72px] xl:pl-[280px] transition-all duration-300">
        <TopNav title={title} notificationCount={3} />
        <main className={cn("flex-1 overflow-y-auto p-6", className)}>
          {children}
        </main>
      </div>
    </div>
  );
}

export { DashboardLayout };
