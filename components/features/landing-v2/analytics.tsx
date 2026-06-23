
"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { TrendingUp, Users, CalendarCheck, Star } from "lucide-react";

const appointmentsData = [
  { month: "Jan", appointments: 3200, revenue: 48000 },
  { month: "Feb", appointments: 3800, revenue: 57000 },
  { month: "Mar", appointments: 4100, revenue: 61000 },
  { month: "Apr", appointments: 3700, revenue: 55000 },
  { month: "May", appointments: 4500, revenue: 67000 },
  { month: "Jun", appointments: 5200, revenue: 78000 },
  { month: "Jul", appointments: 4800, revenue: 72000 },
  { month: "Aug", appointments: 5400, revenue: 81000 },
  { month: "Sep", appointments: 5800, revenue: 87000 },
  { month: "Oct", appointments: 6200, revenue: 93000 },
  { month: "Nov", appointments: 5900, revenue: 88000 },
  { month: "Dec", appointments: 6800, revenue: 102000 },
];

const patientData = [
  { month: "Jan", patients: 1200 },
  { month: "Feb", patients: 1500 },
  { month: "Mar", patients: 1400 },
  { month: "Apr", patients: 1800 },
  { month: "May", patients: 2000 },
  { month: "Jun", patients: 2400 },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const customTooltipStyle = {
  backgroundColor: "#0f172a",
  border: "none",
  borderRadius: "12px",
  color: "#fff",
  fontSize: "12px",
  padding: "8px 14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
};

export function Analytics() {
  return (
    <section className="py-32 bg-slate-900 landing-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Analytics
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Data-driven{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              healthcare decisions
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed">
            Real-time insights across every dimension of your practice — revenue, patient
            outcomes, and operational efficiency.
          </p>
        </motion.div>

        {/* Stat counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: CalendarCheck, label: "Appointments / Month", value: 14200, suffix: "", color: "text-blue-400" },
            { icon: Users, label: "Active Patients", value: 2400000, suffix: "+", color: "text-cyan-400" },
            { icon: TrendingUp, label: "Revenue Increase", value: 47, suffix: "%", color: "text-emerald-400" },
            { icon: Star, label: "Patient Satisfaction", value: 98, suffix: "%", color: "text-amber-400" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/8 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  {stat.label}
                </span>
              </div>
              <p className={`text-3xl font-extrabold ${stat.color}`}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
            </div>
          ))}
        </motion.div>

        {/* Main chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/5 border border-white/8 rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm font-bold text-white">Appointments & Revenue Overview</p>
              <p className="text-xs text-slate-400 mt-0.5">Annual performance across all facilities</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="text-[10px] text-slate-400">Appointments</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                <span className="text-[10px] text-slate-400">Revenue</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={appointmentsData}>
              <defs>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis
                dataKey="month"
                stroke="#475569"
                tick={{ fill: "#64748b", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                stroke="#475569"
                tick={{ fill: "#64748b", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip contentStyle={customTooltipStyle} />
              <Area
                type="monotone"
                dataKey="appointments"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#blueGrad)"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#06b6d4"
                strokeWidth={2}
                fill="url(#cyanGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Secondary charts */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 border border-white/8 rounded-2xl p-6"
          >
            <p className="text-sm font-bold text-white mb-1">Patient Growth</p>
            <p className="text-xs text-slate-400 mb-4">New registered patients, H1 2025</p>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={patientData}>
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={customTooltipStyle} />
                <Bar dataKey="patients" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 border border-white/8 rounded-2xl p-6"
          >
            <p className="text-sm font-bold text-white mb-1">Revenue Trend</p>
            <p className="text-xs text-slate-400 mb-4">Monthly revenue growth (USD)</p>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={appointmentsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={customTooltipStyle} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#06b6d4"
                  strokeWidth={2.5}
                  dot={false}
                  strokeLinecap="round"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
