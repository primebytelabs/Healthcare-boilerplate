"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Clock, Activity } from "lucide-react";
import { StatCard } from "@/components/features/dashboard/stat-card";
import { RecentAppointments } from "@/components/features/dashboard/recent-appointments";
import { RecentActivity } from "@/components/features/dashboard/recent-activity";
import { QuickActions } from "@/components/features/dashboard/quick-actions";

const statCards = [
  {
    title: "Total Appointments",
    value: "1,284",
    change: "+12.5%",
    trend: "up",
    icon: Calendar,
    variant: "primary" as const,
  },
  {
    title: "Active Patients",
    value: "856",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    variant: "secondary" as const,
  },
  {
    title: "Avg. Wait Time",
    value: "14 min",
    change: "-3.1%",
    trend: "down",
    icon: Clock,
    variant: "success" as const,
  },
  {
    title: "Today's Visits",
    value: "42",
    change: "+5.7%",
    trend: "up",
    icon: Activity,
    variant: "info" as const,
  },
];

const upcomingAppointments = [
  {
    id: 1,
    patient: "Emily Johnson",
    time: "9:00 AM",
    type: "Annual Checkup",
    doctor: "Dr. Sarah Chen",
    status: "confirmed" as const,
    avatar: "EJ",
  },
  {
    id: 2,
    patient: "Michael Brown",
    time: "10:30 AM",
    type: "Follow-up",
    doctor: "Dr. Sarah Chen",
    status: "confirmed" as const,
    avatar: "MB",
  },
  {
    id: 3,
    patient: "Sophia Martinez",
    time: "11:00 AM",
    type: "Consultation",
    doctor: "Dr. James Wilson",
    status: "pending" as const,
    avatar: "SM",
  },
  {
    id: 4,
    patient: "William Davis",
    time: "1:30 PM",
    type: "Lab Results",
    doctor: "Dr. Sarah Chen",
    status: "confirmed" as const,
    avatar: "WD",
  },
  {
    id: 5,
    patient: "Olivia Garcia",
    time: "3:00 PM",
    type: "Vaccination",
    doctor: "Dr. Emily Lee",
    status: "cancelled" as const,
    avatar: "OG",
  },
];

const recentActivity = [
  { action: "New patient registered", detail: "James Wilson", time: "5 min ago", type: "patient" as const },
  { action: "Appointment scheduled", detail: "Sophia Martinez with Dr. Chen", time: "12 min ago", type: "appointment" as const },
  { action: "Lab results uploaded", detail: "Emily Johnson - Blood Work", time: "28 min ago", type: "lab" as const },
  { action: "Appointment cancelled", detail: "Oliver Taylor - 2:00 PM slot", time: "1 hour ago", type: "cancel" as const },
  { action: "Prescription renewed", detail: "Amanda Lee - Metformin", time: "2 hours ago", type: "prescription" as const },
];

export default function DashboardPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-heading-lg font-semibold text-foreground">Good morning, Dr. Chen</h2>
        <p className="mt-1 text-muted-foreground">
          Here&apos;s what&apos;s happening at your practice today.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {statCards.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-7">
        <div className="lg:col-span-4 space-y-6">
          <RecentAppointments appointments={upcomingAppointments} />
        </div>

        <div className="lg:col-span-3 space-y-6">
          <RecentActivity activities={recentActivity} />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
