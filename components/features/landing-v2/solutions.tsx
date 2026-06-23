
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Video,
  CalendarCheck,
  FileText,
  LineChart,
  Pill,
  Activity,
  FlaskConical,
  Package,
  Building2,
  Stethoscope,
  Globe,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "AI Healthcare Assistant",
    description:
      "Intelligent clinical decision support, symptom analysis, and patient triage powered by advanced large language models.",
    tag: "AI-Powered",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    glow: "group-hover:shadow-blue-100",
  },
  {
    icon: Video,
    title: "Online Consultations",
    description:
      "HD video consultations, secure messaging, and real-time health monitoring with your care team.",
    tag: "Telemedicine",
    tagColor: "bg-cyan-50 text-cyan-700 border-cyan-100",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    glow: "group-hover:shadow-cyan-100",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description:
      "Intelligent scheduling with automated reminders, waitlist management, and conflict detection.",
    tag: "Scheduling",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    glow: "group-hover:shadow-violet-100",
  },
  {
    icon: FileText,
    title: "Digital Medical Records",
    description:
      "Unified, structured health records with full history, documents, imaging, and clinical notes.",
    tag: "EHR / EMR",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    glow: "group-hover:shadow-emerald-100",
  },
  {
    icon: LineChart,
    title: "AI Health Reports",
    description:
      "AI-generated comprehensive health reports with trend analysis, risk scoring, and actionable recommendations.",
    tag: "Analytics",
    tagColor: "bg-orange-50 text-orange-700 border-orange-100",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    glow: "group-hover:shadow-orange-100",
  },
  {
    icon: Pill,
    title: "E-Prescriptions",
    description:
      "Digital prescriptions with drug interaction checks, pharmacy routing, and refill automation.",
    tag: "Rx Management",
    tagColor: "bg-pink-50 text-pink-700 border-pink-100",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    glow: "group-hover:shadow-pink-100",
  },
  {
    icon: Activity,
    title: "Remote Monitoring",
    description:
      "IoT device integration for continuous vital signs monitoring with real-time alerts and dashboards.",
    tag: "RPM",
    tagColor: "bg-red-50 text-red-700 border-red-100",
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    glow: "group-hover:shadow-red-100",
  },
  {
    icon: FlaskConical,
    title: "Lab Test Booking",
    description:
      "Home sample collection, lab network integration, and instant digital result delivery.",
    tag: "Diagnostics",
    tagColor: "bg-teal-50 text-teal-700 border-teal-100",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    glow: "group-hover:shadow-teal-100",
  },
  {
    icon: Package,
    title: "Pharmacy Integration",
    description:
      "Seamless pharmacy network for prescription fulfillment, inventory management, and home delivery.",
    tag: "Pharmacy",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    glow: "group-hover:shadow-indigo-100",
  },
  {
    icon: Building2,
    title: "Hospital Management",
    description:
      "End-to-end hospital operations: OPD, IPD, OT scheduling, bed management, and billing.",
    tag: "Enterprise",
    tagColor: "bg-slate-100 text-slate-700 border-slate-200",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    glow: "group-hover:shadow-slate-100",
  },
  {
    icon: Stethoscope,
    title: "Clinic Management",
    description:
      "A complete practice management suite — scheduling, records, billing, and staff management.",
    tag: "Clinics",
    tagColor: "bg-lime-50 text-lime-700 border-lime-100",
    iconBg: "bg-lime-50",
    iconColor: "text-lime-600",
    glow: "group-hover:shadow-lime-100",
  },
  {
    icon: Globe,
    title: "Enterprise Solutions",
    description:
      "Multi-location networks, custom integrations, dedicated SLAs, and white-label options.",
    tag: "Scale",
    tagColor: "bg-amber-50 text-amber-700 border-amber-100",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    glow: "group-hover:shadow-amber-100",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function Solutions() {
  return (
    <section id="solutions" className="py-32 bg-white landing-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              Complete Platform
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything healthcare{" "}
            <span className="text-gradient-blue">in one place</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            From AI-powered diagnostics to pharmacy integration — Vitalis covers every
            touchpoint of the modern healthcare journey.
          </p>
        </motion.div>

        {/* Solutions grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {solutions.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative bg-white border border-slate-100 rounded-2xl p-6 cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 ${s.glow}`}
            >
              <div
                className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center mb-4`}
              >
                <s.icon className={`w-5 h-5 ${s.iconColor}`} />
              </div>
              <div
                className={`inline-flex items-center text-[10px] font-semibold uppercase tracking-wider border rounded-full px-2.5 py-0.5 mb-3 ${s.tagColor}`}
              >
                {s.tag}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{s.description}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Learn more <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
