"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp, TrendingDown, Users, Calendar,
  DollarSign, Activity, ChevronDown,
} from "lucide-react";

/* ─── data ─── */
const appointmentData = [
  { month: "Jan", scheduled: 320, completed: 290, cancelled: 30 },
  { month: "Feb", scheduled: 380, completed: 340, cancelled: 40 },
  { month: "Mar", scheduled: 410, completed: 375, cancelled: 35 },
  { month: "Apr", scheduled: 360, completed: 330, cancelled: 30 },
  { month: "May", scheduled: 450, completed: 415, cancelled: 35 },
  { month: "Jun", scheduled: 520, completed: 480, cancelled: 40 },
  { month: "Jul", scheduled: 490, completed: 455, cancelled: 35 },
  { month: "Aug", scheduled: 560, completed: 520, cancelled: 40 },
  { month: "Sep", scheduled: 610, completed: 570, cancelled: 40 },
  { month: "Oct", scheduled: 640, completed: 600, cancelled: 40 },
  { month: "Nov", scheduled: 590, completed: 550, cancelled: 40 },
  { month: "Dec", scheduled: 680, completed: 640, cancelled: 40 },
];

const revenueData = [
  { month: "Jan", revenue: 48000, target: 50000 },
  { month: "Feb", revenue: 57000, target: 52000 },
  { month: "Mar", revenue: 61000, target: 55000 },
  { month: "Apr", revenue: 55000, target: 57000 },
  { month: "May", revenue: 67000, target: 60000 },
  { month: "Jun", revenue: 78000, target: 65000 },
  { month: "Jul", revenue: 72000, target: 68000 },
  { month: "Aug", revenue: 81000, target: 72000 },
  { month: "Sep", revenue: 87000, target: 75000 },
  { month: "Oct", revenue: 93000, target: 80000 },
  { month: "Nov", revenue: 88000, target: 82000 },
  { month: "Dec", revenue: 102000, target: 90000 },
];

const departmentData = [
  { name: "Cardiology", patients: 245, revenue: 98000, satisfaction: 96 },
  { name: "Neurology", patients: 182, revenue: 76000, satisfaction: 94 },
  { name: "Pediatrics", patients: 310, revenue: 62000, satisfaction: 98 },
  { name: "Orthopedics", patients: 198, revenue: 84000, satisfaction: 92 },
  { name: "Dermatology", patients: 156, revenue: 58000, satisfaction: 95 },
  { name: "Oncology", patients: 134, revenue: 112000, satisfaction: 93 },
];

const demographicsData = [
  { name: "18–30", value: 22, color: "#3b82f6" },
  { name: "31–45", value: 31, color: "#06b6d4" },
  { name: "46–60", value: 28, color: "#10b981" },
  { name: "61–75", value: 14, color: "#f59e0b" },
  { name: "75+", value: 5, color: "#8b5cf6" },
];

const weeklyPatients = [
  { day: "Mon", new: 42, returning: 98 },
  { day: "Tue", new: 58, returning: 112 },
  { day: "Wed", new: 51, returning: 105 },
  { day: "Thu", new: 67, returning: 118 },
  { day: "Fri", new: 73, returning: 124 },
  { day: "Sat", new: 35, returning: 62 },
  { day: "Sun", new: 18, returning: 34 },
];

const tooltipStyle = {
  backgroundColor: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  fontSize: "12px",
  padding: "8px 14px",
};

/* ─── stat card ─── */
function StatCard({
  title, value, change, positive, icon: Icon, color,
}: {
  title: string; value: string; change: string; positive: boolean;
  icon: React.ElementType; color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card>
        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <span
              className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
                positive
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {positive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {change}
            </span>
          </div>
          <p className="text-2xl font-extrabold text-foreground">{value}</p>
          <p className="text-xs text-muted-foreground mt-1">{title}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ─── page ─── */
export default function AnalyticsPage() {
  const [period, setPeriod] = React.useState("This Year");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-heading-lg font-semibold text-foreground">Analytics</h2>
          <p className="mt-1 text-muted-foreground text-sm">
            Practice performance, revenue, and patient insights
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-xl text-sm font-medium text-foreground hover:bg-muted/50 transition-colors shadow-sm">
          {period}
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Appointments" value="6,842" change="+18.4%" positive icon={Calendar} color="bg-blue-50 text-blue-600" />
        <StatCard title="Active Patients" value="1,284" change="+8.2%" positive icon={Users} color="bg-cyan-50 text-cyan-600" />
        <StatCard title="Total Revenue" value="$889K" change="+24.1%" positive icon={DollarSign} color="bg-emerald-50 text-emerald-600" />
        <StatCard title="Avg. Satisfaction" value="95.4%" change="-0.3%" positive={false} icon={Activity} color="bg-violet-50 text-violet-600" />
      </div>

      {/* Main charts row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Appointments area chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Appointment Trends</CardTitle>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                  Scheduled
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  Completed
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                  Cancelled
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={appointmentData}>
                <defs>
                  <linearGradient id="colorScheduled" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="scheduled" stroke="#3b82f6" strokeWidth={2} fill="url(#colorScheduled)" dot={false} />
                <Area type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} fill="url(#colorCompleted)" dot={false} />
                <Area type="monotone" dataKey="cancelled" stroke="#f87171" strokeWidth={2} fill="none" dot={false} strokeDasharray="4 4" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Demographics pie */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Age Groups</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={demographicsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {demographicsData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`, "Share"]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-1 gap-1.5 mt-2">
              {demographicsData.map((d) => (
                <div key={d.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                    <span className="text-muted-foreground">{d.name}</span>
                  </div>
                  <span className="font-semibold text-foreground">{d.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue + Weekly patients */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue line chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Revenue vs Target</CardTitle>
              <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">
                ↑ 24.1% YoY
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2.5} dot={false} strokeLinecap="round" />
                <Line type="monotone" dataKey="target" stroke="#cbd5e1" strokeWidth={2} dot={false} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly patient bar chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Weekly Patients</CardTitle>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                  New
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                  Returning
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={weeklyPatients} barSize={10} barCategoryGap="35%">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="new" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="returning" fill="#22d3ee" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Department performance table */}
      <Card>
        <CardHeader>
          <CardTitle>Department Performance</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  {["Department", "Patients", "Revenue", "Satisfaction", "Performance"].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {departmentData.map((dept, i) => (
                  <motion.tr
                    key={dept.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-foreground">{dept.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{dept.patients.toLocaleString()}</td>
                    <td className="px-6 py-4 text-muted-foreground">${dept.revenue.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        dept.satisfaction >= 96
                          ? "bg-emerald-50 text-emerald-700"
                          : dept.satisfaction >= 94
                          ? "bg-blue-50 text-blue-700"
                          : "bg-amber-50 text-amber-700"
                      }`}>
                        {dept.satisfaction}%
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 bg-muted rounded-full max-w-[120px]">
                          <div
                            className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                            style={{ width: `${(dept.patients / 310) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground w-8">
                          {Math.round((dept.patients / 310) * 100)}%
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
