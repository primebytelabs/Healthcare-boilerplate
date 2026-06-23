
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export function StatCard({ stat }: any) {
  return (
    <motion.div variants={item}>
      <Card className="relative overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
              <stat.icon className="h-5 w-5" />
            </div>
            <span
              className={cn(
                "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-tiny font-medium",
                stat.trend === "up"
                  ? "bg-success/10 text-success"
                  : "bg-destructive/10 text-destructive"
              )}
            >
              {stat.trend === "up" ? (
                <ArrowUp className="h-3 w-3" />
              ) : (
                <ArrowDown className="h-3 w-3" />
              )}
              {stat.change}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">{stat.title}</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">{stat.value}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
