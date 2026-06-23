"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Star, Calendar, Users, Phone, Mail, MoreHorizontal, Stethoscope } from "lucide-react";

const doctors = [
  {
    id: 1, name: "Sarah Chen", specialty: "Cardiology", patients: 245, rating: 4.9,
    availability: "Available" as const, phone: "+1 (555) 001-0001", email: "s.chen@vitalis.ai",
    appointments: 12, experience: "12 yrs", image: null,
    tags: ["Interventional", "Heart Failure"],
  },
  {
    id: 2, name: "James Wilson", specialty: "Neurology", patients: 182, rating: 4.8,
    availability: "Busy" as const, phone: "+1 (555) 001-0002", email: "j.wilson@vitalis.ai",
    appointments: 8, experience: "9 yrs", image: null,
    tags: ["Epilepsy", "Stroke"],
  },
  {
    id: 3, name: "Emily Lee", specialty: "Pediatrics", patients: 310, rating: 4.9,
    availability: "Available" as const, phone: "+1 (555) 001-0003", email: "e.lee@vitalis.ai",
    appointments: 15, experience: "7 yrs", image: null,
    tags: ["Neonatology", "Vaccines"],
  },
  {
    id: 4, name: "Michael Torres", specialty: "Orthopedics", patients: 198, rating: 4.7,
    availability: "Available" as const, phone: "+1 (555) 001-0004", email: "m.torres@vitalis.ai",
    appointments: 10, experience: "15 yrs", image: null,
    tags: ["Sports Medicine", "Joint Replace"],
  },
  {
    id: 5, name: "Lisa Park", specialty: "Dermatology", patients: 156, rating: 4.8,
    availability: "Away" as const, phone: "+1 (555) 001-0005", email: "l.park@vitalis.ai",
    appointments: 0, experience: "6 yrs", image: null,
    tags: ["Cosmetic", "Skin Cancer"],
  },
  {
    id: 6, name: "David Kumar", specialty: "Oncology", patients: 134, rating: 4.9,
    availability: "Busy" as const, phone: "+1 (555) 001-0006", email: "d.kumar@vitalis.ai",
    appointments: 6, experience: "18 yrs", image: null,
    tags: ["Breast Cancer", "Immunotherapy"],
  },
];

const availabilityConfig = {
  Available: { variant: "success" as const, dot: "bg-emerald-400" },
  Busy: { variant: "warning" as const, dot: "bg-amber-400" },
  Away: { variant: "default" as const, dot: "bg-slate-400" },
};

const stats = [
  { label: "Total Doctors", value: "32", sub: "Across all departments", color: "from-blue-500 to-blue-700" },
  { label: "Available Now", value: "18", sub: "Ready to consult", color: "from-emerald-500 to-emerald-700" },
  { label: "Avg. Rating", value: "4.8★", sub: "Patient satisfaction", color: "from-amber-500 to-orange-600" },
  { label: "Today's Appointments", value: "147", sub: "Scheduled for today", color: "from-violet-500 to-violet-700" },
];

export default function DoctorsPage() {
  const [view, setView] = React.useState<"grid" | "list">("grid");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-heading-lg font-semibold text-foreground">Doctors</h2>
          <p className="mt-1 text-muted-foreground text-sm">Manage your medical staff and availability</p>
        </div>
        <Button size="sm" leftIcon={<Plus className="h-4 w-4" />}>
          Add Doctor
        </Button>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <Card>
              <CardContent className="p-5">
                <p className="text-2xl font-extrabold text-foreground">{s.value}</p>
                <p className="text-xs font-semibold text-foreground mt-0.5">{s.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View toggle */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{doctors.length} doctors</p>
        <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-xl">
          {(["grid", "list"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                view === v ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Grid view */}
      {view === "grid" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Card hoverable className="h-full">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar name={doctor.name} size="lg" status={
                        doctor.availability === "Available" ? "online" :
                        doctor.availability === "Busy" ? "busy" : "offline"
                      } />
                      <div>
                        <p className="text-sm font-bold text-foreground">Dr. {doctor.name}</p>
                        <p className="text-xs text-muted-foreground">{doctor.specialty}</p>
                        <p className="text-xs text-muted-foreground">{doctor.experience} experience</p>
                      </div>
                    </div>
                    <button className="p-1 text-muted-foreground hover:text-foreground">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {doctor.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded-full border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-y border-border">
                    <div className="text-center">
                      <p className="text-sm font-bold text-foreground">{doctor.patients}</p>
                      <p className="text-[10px] text-muted-foreground">Patients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold text-foreground">{doctor.appointments}</p>
                      <p className="text-[10px] text-muted-foreground">Today</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-0.5">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <p className="text-sm font-bold text-foreground">{doctor.rating}</p>
                      </div>
                      <p className="text-[10px] text-muted-foreground">Rating</p>
                    </div>
                  </div>

                  {/* Status + actions */}
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={availabilityConfig[doctor.availability].variant}
                      size="sm"
                      dot
                    >
                      {doctor.availability}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 rounded-lg text-muted-foreground hover:text-blue-600 hover:bg-blue-50 transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg text-muted-foreground hover:text-blue-600 hover:bg-blue-50 transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg text-muted-foreground hover:text-blue-600 hover:bg-blue-50 transition-colors">
                        <Calendar className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* List view */}
      {view === "list" && (
        <Card>
          <CardContent className="p-0">
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b border-border bg-muted/40 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <div className="col-span-3">Doctor</div>
              <div className="col-span-2">Specialty</div>
              <div className="col-span-2">Patients</div>
              <div className="col-span-2">Rating</div>
              <div className="col-span-2">Today</div>
              <div className="col-span-1">Status</div>
            </div>
            <div className="divide-y divide-border">
              {doctors.map((doctor, i) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4 items-center hover:bg-muted/30 transition-colors"
                >
                  <div className="col-span-3 flex items-center gap-3">
                    <Avatar name={doctor.name} size="md" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Dr. {doctor.name}</p>
                      <p className="text-xs text-muted-foreground">{doctor.experience}</p>
                    </div>
                  </div>
                  <div className="col-span-2 hidden md:block text-sm text-muted-foreground">{doctor.specialty}</div>
                  <div className="col-span-2 hidden md:block text-sm text-foreground">{doctor.patients}</div>
                  <div className="col-span-2 hidden md:flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-foreground">{doctor.rating}</span>
                  </div>
                  <div className="col-span-2 hidden md:block text-sm text-muted-foreground">
                    {doctor.appointments} appts
                  </div>
                  <div className="col-span-1">
                    <Badge variant={availabilityConfig[doctor.availability].variant} size="sm" dot>
                      {doctor.availability}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
