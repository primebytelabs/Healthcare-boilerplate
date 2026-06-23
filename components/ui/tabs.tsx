"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TabsProps {
  tabs: { id: string; label: string; icon?: React.ReactNode; count?: number }[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: "underline" | "pills" | "segmented";
}

function Tabs({ tabs, activeTab, onChange, className, variant = "underline" }: TabsProps) {
  return (
    <div
      className={cn(
        "flex",
        variant === "segmented" && "rounded-lg bg-muted p-1",
        variant === "underline" && "border-b border-border",
        className
      )}
      role="tablist"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            "relative flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors",
            variant === "underline" &&
              "px-4 py-3 text-muted-foreground hover:text-foreground",
            variant === "pills" &&
              "rounded-lg px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted",
            variant === "segmented" &&
              "flex-1 rounded-md px-4 py-2 text-center text-muted-foreground transition-all",
            activeTab === variant && variant === "segmented" && "bg-background text-foreground shadow-sm",
            activeTab === tab.id && variant !== "segmented" && "text-foreground"
          )}
        >
          {tab.icon}
          {tab.label}
          {tab.count !== undefined && (
            <span
              className={cn(
                "flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-tiny font-medium",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {tab.count}
            </span>
          )}
          {activeTab === tab.id && variant === "underline" && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

export { Tabs };
