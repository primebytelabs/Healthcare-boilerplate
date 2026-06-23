"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Bell, Search, Command } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

interface TopNavProps {
  title?: string;
  onSearchClick?: () => void;
  notificationCount?: number;
  className?: string;
}

function TopNav({ title, onSearchClick, notificationCount = 0, className }: TopNavProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/80 backdrop-blur-xl px-6",
        className
      )}
    >
      <div className="flex-1">
        {title && (
          <h1 className="text-heading-sm font-semibold text-foreground">{title}</h1>
        )}
      </div>

      <button
        type="button"
        onClick={onSearchClick}
        className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground hover:border-foreground/20 transition-colors w-64"
      >
        <Search className="h-4 w-4 shrink-0" />
        <span>Search patients, appointments...</span>
        <span className="ml-auto flex items-center gap-1 text-tiny text-muted-foreground/60">
          <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-tiny">
            <Command className="h-3 w-3 inline" />
          </kbd>
          <span>K</span>
        </span>
      </button>

      <button
        type="button"
        className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />
        {notificationCount > 0 && (
          <span className="absolute top-1.5 right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
            {notificationCount > 9 ? "9+" : notificationCount}
          </span>
        )}
      </button>

      <Avatar
        name="Dr. Sarah Chen"
        size="md"
        status="online"
        className="cursor-pointer"
      />
    </header>
  );
}

export { TopNav };
