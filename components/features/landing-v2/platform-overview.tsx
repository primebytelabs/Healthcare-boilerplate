
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, User, LayoutDashboard, BarChart3 } from "lucide-react";

const tabs = [
  { id: "doctor", label: "Doctor Portal", icon: Stethoscope },
  { id: "patient", label: "Patient App", icon: User },
  { id: "admin", label: "Admin Console", icon: LayoutDashboard },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
];

function DoctorPortalMockup() {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden h-full flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-slate-800/60 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-lg bg-blue-500 flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">V</span>
          </div>
          <span className="text-slate-300 text-xs font-semibold">Doctor Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[9px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2.5 py-0.5">
            Online
          </div>
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold">
            SC
          </div>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-36 bg-slate-800 p-3 flex flex-col gap-1">
          {["Overview", "My Patients", "Schedule", "Consults", "Prescriptions", "Lab Orders", "Messages"].map(
            (item, i) => (
              <div
                key={item}
                className={`px-2.5 py-1.5 rounded-lg text-[10px] ${
                  i === 0
                    ? "bg-blue-600 text-white font-medium"
                    : "text-slate-400"
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>
        {/* Main */}
        <div className="flex-1 bg-slate-900 p-4 overflow-hidden">
          <p className="text-slate-200 text-xs font-bold mb-1">Today's Overview</p>
          <p className="text-slate-500 text-[9px] mb-3">Tuesday, March 11 · 9 consultations pending</p>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { v: "9", l: "Pending", c: "text-amber-400" },
              { v: "24", l: "Completed", c: "text-emerald-400" },
              { v: "3", l: "Urgent", c: "text-red-400" },
            ].map((s) => (
              <div key={s.l} className="bg-slate-800 rounded-xl p-2.5">
                <p className={`text-base font-bold ${s.c}`}>{s.v}</p>
                <p className="text-[8px] text-slate-500">{s.l}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-800 rounded-xl p-3">
            <p className="text-slate-300 text-[10px] font-semibold mb-2">Next Appointments</p>
            {[
              { t: "10:00", n: "Robert Kim", d: "Hypertension Follow-up" },
              { t: "10:45", n: "Lisa Park", d: "Annual Checkup" },
              { t: "11:30", n: "David Chen", d: "Diabetes Management" },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-2 py-1.5 border-b border-slate-700/50 last:border-0">
                <span className="text-[8px] text-slate-500 w-8">{a.t}</span>
                <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-[7px] text-blue-400 font-bold flex-shrink-0">
                  {a.n.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] text-slate-300 font-medium truncate">{a.n}</p>
                  <p className="text-[8px] text-slate-500 truncate">{a.d}</p>
                </div>
                <div className="text-[8px] text-blue-400 bg-blue-400/10 rounded-full px-1.5 py-0.5">Join</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PatientAppMockup() {
  return (
    <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col border border-slate-200">
      <div className="bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/70 text-[9px] font-medium">GOOD MORNING</p>
            <p className="text-white text-sm font-bold">Sarah Mitchell</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">SM</span>
          </div>
        </div>
        <div className="bg-white/15 rounded-xl p-3">
          <p className="text-white/70 text-[8px] mb-1">Next Appointment</p>
          <p className="text-white text-[11px] font-semibold">Dr. Sarah Chen — Cardiology</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-white/70 text-[8px]">Tomorrow · 10:30 AM</span>
            <span className="bg-emerald-400 text-white text-[7px] px-1.5 py-0.5 rounded-full font-medium">
              Confirmed
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-slate-50 p-4 overflow-hidden">
        <p className="text-slate-700 text-[10px] font-bold mb-2">Quick Actions</p>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { label: "Book Appointment", c: "bg-blue-50 text-blue-700" },
            { label: "Video Consult", c: "bg-cyan-50 text-cyan-700" },
            { label: "My Records", c: "bg-emerald-50 text-emerald-700" },
            { label: "Lab Results", c: "bg-violet-50 text-violet-700" },
          ].map((a) => (
            <div key={a.label} className={`rounded-xl p-2.5 text-[9px] font-semibold ${a.c} cursor-pointer`}>
              {a.label}
            </div>
          ))}
        </div>
        <p className="text-slate-700 text-[10px] font-bold mb-2">Recent Activity</p>
        <div className="bg-white rounded-xl p-3 space-y-2">
          {[
            { e: "Lab results ready", t: "2 hours ago", c: "bg-emerald-400" },
            { e: "Prescription renewed", t: "Yesterday", c: "bg-blue-400" },
            { e: "Appointment confirmed", t: "2 days ago", c: "bg-cyan-400" },
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${a.c} flex-shrink-0`} />
              <p className="text-[9px] text-slate-600 flex-1">{a.e}</p>
              <p className="text-[8px] text-slate-400">{a.t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdminConsoleMockup() {
  return (
    <div className="bg-slate-50 rounded-xl overflow-hidden h-full flex flex-col border border-slate-200">
      <div className="bg-white px-5 py-3 border-b border-slate-100 flex items-center justify-between">
        <p className="text-slate-800 text-xs font-bold">Admin Console</p>
        <div className="flex items-center gap-1.5">
          <div className="text-[9px] text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5">
            Multi-Location
          </div>
          <div className="text-[9px] text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">
            Live
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-hidden">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { v: "1,248", l: "Total Patients", d: "↑ 12%", c: "text-blue-600" },
            { v: "$48K", l: "Revenue Today", d: "↑ 8%", c: "text-emerald-600" },
            { v: "94%", l: "Bed Occupancy", d: "↓ 2%", c: "text-amber-600" },
            { v: "32", l: "Active Doctors", d: "→ Stable", c: "text-slate-600" },
          ].map((s) => (
            <div key={s.l} className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
              <p className={`text-base font-bold ${s.c}`}>{s.v}</p>
              <p className="text-[8px] text-slate-400">{s.l}</p>
              <p className="text-[8px] text-slate-500 mt-0.5 font-medium">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 mb-2">
          <p className="text-slate-700 text-[10px] font-bold mb-2">Department Performance</p>
          {[
            { name: "Cardiology", val: 92 },
            { name: "Orthopedics", val: 78 },
            { name: "Neurology", val: 85 },
            { name: "Pediatrics", val: 96 },
          ].map((d) => (
            <div key={d.name} className="mb-1.5">
              <div className="flex justify-between mb-0.5">
                <span className="text-[8px] text-slate-500">{d.name}</span>
                <span className="text-[8px] text-slate-700 font-medium">{d.val}%</span>
              </div>
              <div className="h-1 bg-slate-100 rounded-full">
                <div
                  className="h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  style={{ width: `${d.val}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  const bars = [42, 65, 53, 78, 62, 91, 74, 88, 70, 95, 82, 100];
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden h-full flex flex-col">
      <div className="px-5 py-3 border-b border-slate-700 flex items-center justify-between">
        <p className="text-slate-200 text-xs font-bold">Healthcare Analytics</p>
        <div className="flex items-center gap-1.5">
          <div className="text-[9px] text-slate-400 bg-slate-800 rounded px-2 py-0.5">2025</div>
          <div className="text-[9px] text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded px-2 py-0.5">
            Live
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { v: "14.2K", l: "Appointments", c: "text-blue-400" },
            { v: "$2.1M", l: "Revenue", c: "text-emerald-400" },
            { v: "98.1%", l: "Satisfaction", c: "text-cyan-400" },
          ].map((s) => (
            <div key={s.l} className="bg-slate-800 rounded-xl p-2.5">
              <p className={`text-sm font-bold ${s.c}`}>{s.v}</p>
              <p className="text-[8px] text-slate-500">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-slate-800 rounded-xl p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-slate-300 text-[10px] font-semibold">Monthly Appointments</p>
            <p className="text-emerald-400 text-[8px] font-medium">↑ 23% YoY</p>
          </div>
          <div className="flex items-end gap-1" style={{ height: "56px" }}>
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background:
                    i === 11
                      ? "linear-gradient(to top, #1d4ed8, #38bdf8)"
                      : "rgba(59,130,246,0.3)",
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {months.map((m, i) => (
              <span key={i} className="text-[6px] text-slate-600 flex-1 text-center">
                {m}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Doctor Utilization", val: 87, color: "from-blue-500 to-cyan-500" },
            { label: "Patient Retention", val: 94, color: "from-emerald-500 to-teal-500" },
          ].map((m) => (
            <div key={m.label} className="bg-slate-800 rounded-xl p-2.5">
              <p className="text-slate-400 text-[8px] mb-1">{m.label}</p>
              <p className="text-white text-sm font-bold mb-1">{m.val}%</p>
              <div className="h-1 bg-slate-700 rounded-full">
                <div
                  className={`h-1 rounded-full bg-gradient-to-r ${m.color}`}
                  style={{ width: `${m.val}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mockups: Record<string, React.ReactNode> = {
  doctor: <DoctorPortalMockup />,
  patient: <PatientAppMockup />,
  admin: <AdminConsoleMockup />,
  analytics: <AnalyticsMockup />,
};

export function PlatformOverview() {
  const [active, setActive] = React.useState("doctor");

  return (
    <section className="py-32 bg-slate-50 landing-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-slate-200 border border-slate-300 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Platform Preview
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            One platform.{" "}
            <span className="text-gradient-blue">Every perspective.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Purpose-built experiences for every stakeholder — doctors, patients, hospital
            administrators, and business leaders.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === tab.id
                    ? "bg-blue-700 text-white shadow-lg shadow-blue-700/20"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mockup panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            style={{ height: "400px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                {mockups[active]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
