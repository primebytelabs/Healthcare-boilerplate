"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent } from "./card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: string;
  trend?: "up" | "down" | "neutral";
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  className?: string;
}

const variantStyles = {
  primary: { bg: "bg-primary-light", text: "text-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary" },
  success: { bg: "bg-success/10", text: "text-success" },
  warning: { bg: "bg-warning/10", text: "text-warning" },
  danger: { bg: "bg-destructive/10", text: "text-destructive" },
  info: { bg: "bg-info/10", text: "text-info" },
};

function StatCard({ title, value, icon, change, trend, variant = "primary", className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className={cn("relative overflow-hidden", className)}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            {icon && (
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg",
                  variantStyles[variant].bg,
                  variantStyles[variant].text
                )}
              >
                {icon}
              </div>
            )}
            {change && (
              <span
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-tiny font-medium",
                  trend === "up"
                    ? "bg-success/10 text-success"
                    : trend === "down"
                    ? "bg-destructive/10 text-destructive"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {trend === "up" ? (
                  <ArrowUp className="h-3 w-3" />
                ) : trend === "down" ? (
                  <ArrowDown className="h-3 w-3" />
                ) : null}
                {change}
              </span>
            )}
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">{title}</p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-1 text-3xl font-semibold text-foreground tabular-nums"
            >
              {value}
            </motion.p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { StatCard };
