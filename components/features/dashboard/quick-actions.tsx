
"use client";

import { motion } from "framer-motion";
import { Activity, Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

export function QuickActions() {
  return (
    <motion.div variants={item}>
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-20 flex-col gap-1">
            <Calendar className="h-5 w-5" />
            <span className="text-xs">New Appointment</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-1">
            <Users className="h-5 w-5" />
            <span className="text-xs">Register Patient</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-1">
            <Activity className="h-5 w-5" />
            <span className="text-xs">View Reports</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-1">
            <Clock className="h-5 w-5" />
            <span className="text-xs">Check Schedule</span>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
