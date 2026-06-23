
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

export function RecentActivity({ activities }: any) {
  return (
    <motion.div variants={item}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Activity</CardTitle>
          <Button variant="ghost" size="sm">View All</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity: any, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <div className="relative flex h-2 w-2 mt-2 shrink-0">
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full",
                      activity.type === "patient" && "bg-primary",
                      activity.type === "appointment" && "bg-success",
                      activity.type === "lab" && "bg-info",
                      activity.type === "cancel" && "bg-destructive",
                      activity.type === "prescription" && "bg-warning"
                    )}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.detail}</p>
                </div>
                <span className="text-tiny text-muted-foreground shrink-0">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
