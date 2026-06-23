"use client";

import * as React from "react";
import { cn, getInitials } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  status?: "online" | "offline" | "busy" | "away";
  fallback?: string;
}

const sizeMap = {
  sm: "h-6 w-6 text-tiny",
  md: "h-8 w-8 text-xs",
  lg: "h-10 w-10 text-sm",
  xl: "h-14 w-14 text-base",
  "2xl": "h-20 w-20 text-heading-sm",
};

const statusSizeMap = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5",
  xl: "h-3 w-3",
  "2xl": "h-3.5 w-3.5",
};

const statusColorMap = {
  online: "bg-success",
  offline: "bg-muted-foreground",
  busy: "bg-destructive",
  away: "bg-warning",
};

function Avatar({
  className,
  src,
  alt = "",
  name,
  size = "md",
  status,
  fallback,
  ...props
}: AvatarProps) {
  const [error, setError] = React.useState(false);

  const initials = name ? getInitials(name) : fallback || "?";

  return (
    <div className={cn("relative inline-flex shrink-0", className)} {...props}>
      {src && !error ? (
        <img
          src={src}
          alt={alt || name || "Avatar"}
          className={cn(
            "rounded-full object-cover",
            sizeMap[size]
          )}
          onError={() => setError(true)}
        />
      ) : (
        <div
          className={cn(
            "flex items-center justify-center rounded-full bg-muted font-medium text-muted-foreground",
            sizeMap[size]
          )}
          aria-label={alt || name || "Avatar"}
        >
          {initials}
        </div>
      )}
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-background",
            statusSizeMap[size],
            statusColorMap[status]
          )}
        />
      )}
    </div>
  );
}

function AvatarGroup({
  children,
  limit = 4,
  size = "md",
  className,
}: {
  children: React.ReactNode;
  limit?: number;
  size?: AvatarProps["size"];
  className?: string;
}) {
  const childrenArray = React.Children.toArray(children);
  const visible = childrenArray.slice(0, limit);
  const remaining = childrenArray.length - limit;

  return (
    <div className={cn("flex -space-x-2", className)}>
      {visible.map((child, i) => (
        <div key={i} className="ring-2 ring-background rounded-full">
          {child}
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            "flex items-center justify-center rounded-full ring-2 ring-background bg-muted text-tiny font-medium text-muted-foreground",
            sizeMap[size]
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
}

export { Avatar, AvatarGroup };
