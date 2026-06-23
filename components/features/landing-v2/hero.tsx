
"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Zap } from "lucide-react";

function DashboardMockup() {
  return (
    <div className="relative w-full">
      {/* Glow */}
      <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-3xl blur-3xl" />

      {/* Main card */}
      <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.18)] border border-slate-200/80 bg-white">
        {/* Browser chrome */}
        <div className="bg-slate-100/80 px-4 py-2.5 flex items-center gap-3 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 border border-slate-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            app.vitalis.health/dashboard
          </div>
          <div className="flex gap-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-4 h-4 rounded bg-slate-200" />
            ))}
          </div>
        </div>

        <div className="flex" style={{ height: "360px" }}>
          {/* Sidebar */}
          <div className="w-44 bg-slate-900 p-3 flex flex-col gap-1 shrink-0">
            <div className="flex items-center gap-2 px-2 py-2.5 mb-1">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] font-bold">V</span>
              </div>
              <span className="text-white text-sm font-semibold">Vitalis</span>
            </div>

            <div className="text-[9px] font-semibold text-slate-500 px-2 py-1 uppercase tracking-wider">
              Main
            </div>
            {[
              { label: "Dashboard", active: true },
              { label: "Appointments" },
              { label: "Patients" },
              { label: "Records" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] cursor-pointer ${
                  item.active
                    ? "bg-blue-600 text-white font-medium"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    item.active ? "bg-white" : "bg-slate-600"
                  }`}
                />
                {item.label}
              </div>
            ))}

            <div className="text-[9px] font-semibold text-slate-500 px-2 py-1 mt-2 uppercase tracking-wider">
              Clinical
            </div>
            {["Lab Tests", "Prescriptions", "Billing"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] text-slate-400 cursor-pointer"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                {item}
              </div>
            ))}

            <div className="mt-auto px-2.5 py-1.5 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                <span className="text-white text-[8px] font-bold">SC</span>
              </div>
              <div>
                <div className="text-[9px] text-white font-medium">Dr. Chen</div>
                <div className="text-[8px] text-slate-400">Cardiologist</div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 bg-slate-50 p-4 overflow-hidden flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-bold text-slate-800">Good morning, Dr. Chen ✨</p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Monday, March 10, 2025 · 12 appointments today
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">AI</span>
                </div>
                <div className="text-[9px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                  5 insights
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "12", label: "Today's Appts", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-100" },
                { value: "248", label: "Active Patients", color: "text-cyan-700", bg: "bg-cyan-50", border: "border-cyan-100" },
                { value: "94%", label: "Satisfaction", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-100" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`bg-white rounded-xl p-3 shadow-sm border ${stat.border}`}
                >
                  <p className={`text-lg font-extrabold ${stat.color}`}>{stat.value}</p>
                  <p className="text-[9px] text-slate-400 mt-0.5">{stat.label}</p>
                  <div className={`w-full h-0.5 ${stat.bg} rounded-full mt-1.5`} />
                </div>
              ))}
            </div>

            {/* Appointments list */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex-1">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-bold text-slate-700">Upcoming Appointments</p>
                <span className="text-[8px] text-blue-600 font-medium cursor-pointer">View all</span>
              </div>
              {[
                { time: "09:00", name: "Sarah Mitchell", type: "Consultation", status: "confirmed", dot: "bg-emerald-400" },
                { time: "10:30", name: "James Davidson", type: "Follow-up", status: "pending", dot: "bg-amber-400" },
                { time: "11:15", name: "Emma Wilson", type: "Blood Work", status: "confirmed", dot: "bg-emerald-400" },
              ].map((appt, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 py-1.5 border-b border-slate-50 last:border-0"
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${appt.dot} shrink-0`} />
                  <span className="text-[8px] text-slate-400 w-7 shrink-0">{appt.time}</span>
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-[7px] font-bold text-blue-700 shrink-0">
                    {appt.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-semibold text-slate-700 truncate">{appt.name}</p>
                  </div>
                  <span
                    className={`text-[7px] px-1.5 py-0.5 rounded-full shrink-0 ${
                      appt.status === "confirmed"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {appt.type}
                  </span>
                </div>
              ))}
            </div>

            {/* Mini bar chart */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-bold text-slate-700">Weekly Activity</p>
                <span className="text-[8px] text-emerald-600 font-medium">↑ 12% this week</span>
              </div>
              <div className="flex items-end gap-1" style={{ height: "28px" }}>
                {[45, 68, 55, 82, 70, 93, 78].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 5
                          ? "linear-gradient(to top, #1d4ed8, #3b82f6)"
                          : "#DBEAFE",
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <span key={i} className="text-[7px] text-slate-300 flex-1 text-center">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating card — top right */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute -top-5 -right-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-3.5 w-48 hidden lg:block"
      >
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shrink-0">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">2.4M</p>
            <p className="text-[9px] text-slate-400">Total Patients</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[72, 85, 63, 90, 78].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h * 0.22}px`,
                background: `hsl(${152 + i * 5}, 76%, ${40 + i * 5}%)`,
              }}
            />
          ))}
        </div>
        <p className="text-[8px] text-emerald-600 font-medium mt-1.5">↑ 18% from last month</p>
      </motion.div>

      {/* Floating card — bottom left */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-3.5 w-44 hidden lg:block"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="relative">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">AI Analysis</p>
            <p className="text-[9px] text-emerald-600 font-medium">Active</p>
          </div>
        </div>
        <div className="space-y-1">
          {["Pattern Detected", "Risk Level: Low", "99.9% Accurate"].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
              <p className="text-[8px] text-slate-500">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-blue-50 to-transparent rounded-full opacity-80 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-cyan-50 to-transparent rounded-full opacity-70 translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-xs font-semibold text-blue-700 tracking-wide">
                Now available · AI-Powered Healthcare Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
              The Future of{" "}
              <span className="text-gradient-blue">Intelligent</span>
              <br />
              Healthcare.
            </h1>

            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
              Vitalis combines AI, telemedicine, and digital health records into one
              seamless platform. Built for hospitals, clinics, and the patients they
              serve — at any scale.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-blue-700/25 hover:shadow-blue-700/35 hover:-translate-y-px text-sm"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold rounded-xl transition-all duration-200 text-sm hover:bg-slate-50 group">
                <span className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Play className="w-3 h-3 text-blue-700 ml-0.5" />
                </span>
                Watch Platform Tour
              </button>
            </div>

            {/* Social proof stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "500+", label: "Hospitals" },
                { value: "2M+", label: "Patients" },
                { value: "99.9%", label: "Uptime" },
                { value: "4.9★", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
