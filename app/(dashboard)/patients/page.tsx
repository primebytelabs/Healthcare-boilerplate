"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/input";
import {
  Plus, MoreHorizontal, Users, UserCheck, UserX,
  TrendingUp, Filter, Download,
} from "lucide-react";

const patients = [
  { id: 1, name: "Emily Johnson", age: 34, gender: "Female", phone: "+1 (555) 123-4567", email: "emily@example.com", lastVisit: "Jun 15, 2025", doctor: "Dr. Sarah Chen", condition: "Hypertension", status: "active" as const },
  { id: 2, name: "Michael Brown", age: 45, gender: "Male", phone: "+1 (555) 234-5678", email: "mbrown@example.com", lastVisit: "Jun 12, 2025", doctor: "Dr. Sarah Chen", condition: "Diabetes Type 2", status: "active" as const },
  { id: 3, name: "Sophia Martinez", age: 28, gender: "Female", phone: "+1 (555) 345-6789", email: "sophia@example.com", lastVisit: "Jun 10, 2025", doctor: "Dr. James Wilson", condition: "Anxiety Disorder", status: "inactive" as const },
  { id: 4, name: "William Davis", age: 67, gender: "Male", phone: "+1 (555) 456-7890", email: "wdavis@example.com", lastVisit: "Jun 8, 2025", doctor: "Dr. Sarah Chen", condition: "Heart Failure", status: "active" as const },
  { id: 5, name: "Olivia Garcia", age: 52, gender: "Female", phone: "+1 (555) 567-8901", email: "ogarcia@example.com", lastVisit: "Jun 5, 2025", doctor: "Dr. Emily Lee", condition: "Arthritis", status: "active" as const },
  { id: 6, name: "James Wilson", age: 41, gender: "Male", phone: "+1 (555) 678-9012", email: "jwilson@example.com", lastVisit: "May 30, 2025", doctor: "Dr. Michael Torres", condition: "Back Pain", status: "active" as const },
  { id: 7, name: "Ava Thompson", age: 23, gender: "Female", phone: "+1 (555) 789-0123", email: "ava@example.com", lastVisit: "May 28, 2025", doctor: "Dr. Emily Lee", condition: "Asthma", status: "inactive" as const },
  { id: 8, name: "Noah Anderson", age: 58, gender: "Male", phone: "+1 (555) 890-1234", email: "noah@example.com", lastVisit: "May 22, 2025", doctor: "Dr. Lisa Park", condition: "Psoriasis", status: "active" as const },
];

const stats = [
  { label: "Total Patients", value: "1,284", change: "+8.2%", positive: true, icon: Users, color: "bg-blue-50 text-blue-600" },
  { label: "Active", value: "1,102", change: "+5.1%", positive: true, icon: UserCheck, color: "bg-emerald-50 text-emerald-600" },
  { label: "Inactive", value: "182", change: "-2.4%", positive: false, icon: UserX, color: "bg-amber-50 text-amber-600" },
  { label: "New This Month", value: "64", change: "+12.5%", positive: true, icon: TrendingUp, color: "bg-violet-50 text-violet-600" },
];

export default function PatientsPage() {
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("all");

  const filtered = patients.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.condition.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || p.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-heading-lg font-semibold text-foreground">Patients</h2>
          <p className="mt-1 text-muted-foreground text-sm">Manage and monitor your patient roster</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" leftIcon={<Download className="h-4 w-4" />}>
            Export
          </Button>
          <Button size="sm" leftIcon={<Plus className="h-4 w-4" />}>
            Add Patient
          </Button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
          >
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.color}`}>
                    <s.icon className="w-4 h-4" />
                  </div>
                  <span className={`text-xs font-semibold ${s.positive ? "text-emerald-600" : "text-red-500"}`}>
                    {s.change}
                  </span>
                </div>
                <p className="text-xl font-extrabold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <SearchInput
          placeholder="Search by name or condition..."
          className="max-w-sm"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
        <div className="flex items-center gap-2">
          {["all", "active", "inactive"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-1.5 ml-auto text-xs font-medium text-muted-foreground hover:text-foreground">
          <Filter className="w-3.5 h-3.5" /> More filters
        </button>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b border-border bg-muted/40 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <div className="col-span-3">Patient</div>
            <div className="col-span-2">Contact</div>
            <div className="col-span-2">Condition</div>
            <div className="col-span-2">Doctor</div>
            <div className="col-span-2">Last Visit</div>
            <div className="col-span-1">Status</div>
          </div>

          <div className="divide-y divide-border">
            {filtered.map((patient, i) => (
              <motion.div
                key={patient.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4 items-center hover:bg-muted/30 transition-colors cursor-pointer"
              >
                {/* Name */}
                <div className="col-span-3 flex items-center gap-3">
                  <Avatar name={patient.name} size="md" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{patient.name}</p>
                    <p className="text-xs text-muted-foreground">{patient.age} yrs · {patient.gender}</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="col-span-2 hidden md:block">
                  <p className="text-xs text-foreground">{patient.phone}</p>
                  <p className="text-xs text-muted-foreground truncate">{patient.email}</p>
                </div>

                {/* Condition */}
                <div className="col-span-2 hidden md:block">
                  <span className="text-xs text-foreground font-medium">{patient.condition}</span>
                </div>

                {/* Doctor */}
                <div className="col-span-2 hidden md:block">
                  <span className="text-xs text-muted-foreground">{patient.doctor}</span>
                </div>

                {/* Last visit */}
                <div className="col-span-2 hidden md:block">
                  <span className="text-xs text-muted-foreground">{patient.lastVisit}</span>
                </div>

                {/* Status + actions */}
                <div className="col-span-1 flex items-center justify-between md:justify-start gap-2">
                  <Badge
                    variant={patient.status === "active" ? "success" : "default"}
                    size="sm"
                    dot
                  >
                    {patient.status}
                  </Badge>
                  <button className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Users className="w-8 h-8 mx-auto mb-3 opacity-40" />
              <p className="text-sm font-medium">No patients found</p>
              <p className="text-xs mt-1">Try adjusting your search or filters</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
