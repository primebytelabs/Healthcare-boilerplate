
"use client";

import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

export function RecentAppointments({ appointments }: any) {
  return (
    <motion.div variants={item}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Today&apos;s Schedule</CardTitle>
          <Button variant="ghost" size="sm" 
          rightIcon={<MoreHorizontal className="h-4 w-4" />}
          >
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {appointments.map((apt: any) => (
              <div
                key={apt.id}
                className="flex items-center gap-4 rounded-lg p-3 hover:bg-muted transition-colors"
              >
                <Avatar 
                name={apt.patient} 
                size="md" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{apt.patient}</p>
                  <p className="text-xs text-muted-foreground">{apt.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{apt.time}</p>
                  <p className="text-xs text-muted-foreground">{apt.doctor}</p>
                </div>
                <Badge
                  variant={
                    apt.status === "confirmed"
                      ? "success"
                      : apt.status === "pending"
                      ? "warning"
                      : "danger"
                  }
                  size="sm"
                  dot
                >
                  {apt.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
