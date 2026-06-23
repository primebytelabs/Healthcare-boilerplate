"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Tabs } from "@/components/ui/tabs";
import { Plus } from "lucide-react";

const appointments = [
  { id: 1, patient: "Emily Johnson", doctor: "Dr. Sarah Chen", date: "Today", time: "9:00 AM", type: "Annual Checkup", status: "confirmed" as const },
  { id: 2, patient: "Michael Brown", doctor: "Dr. Sarah Chen", date: "Today", time: "10:30 AM", type: "Follow-up", status: "confirmed" as const },
  { id: 3, patient: "Sophia Martinez", doctor: "Dr. James Wilson", date: "Today", time: "11:00 AM", type: "Consultation", status: "pending" as const },
  { id: 4, patient: "William Davis", doctor: "Dr. Sarah Chen", date: "Tomorrow", time: "1:30 PM", type: "Lab Results", status: "confirmed" as const },
  { id: 5, patient: "Olivia Garcia", doctor: "Dr. Emily Lee", date: "Tomorrow", time: "3:00 PM", type: "Vaccination", status: "cancelled" as const },
];

export default function AppointmentsPage() {
  const [tab, setTab] = React.useState("upcoming");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-heading-lg font-semibold text-foreground">Appointments</h2>
          <p className="mt-1 text-muted-foreground">Schedule and manage appointments</p>
        </div>
        <Button leftIcon={<Plus className="h-4 w-4" />}>
          New Appointment
        </Button>
      </div>

      <Tabs
        tabs={[
          { id: "upcoming", label: "Upcoming", count: 4 },
          { id: "past", label: "Past" },
          { id: "cancelled", label: "Cancelled", count: 1 },
        ]}
        activeTab={tab}
        onChange={setTab}
      />

      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {appointments
              .filter((a) => tab === "upcoming" ? a.status !== "cancelled" : tab === "cancelled" ? a.status === "cancelled" : true)
              .map((apt) => (
                <div
                  key={apt.id}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-muted/50 transition-colors"
                >
                  <Avatar name={apt.patient} size="md" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{apt.patient}</p>
                    <p className="text-xs text-muted-foreground">{apt.type}</p>
                  </div>
                  <div className="hidden sm:block text-right">
                    <p className="text-sm text-foreground">{apt.time}</p>
                    <p className="text-xs text-muted-foreground">{apt.date}</p>
                  </div>
                  <div className="hidden md:block text-sm text-muted-foreground">
                    {apt.doctor}
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
                  <Button variant="ghost" size="sm">
                    Reschedule
                  </Button>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
