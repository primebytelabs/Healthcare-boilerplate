
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Video,
  ClipboardList,
  FlaskConical,
  Building2,
  CalendarCheck,
  BarChart3,
  Bell,
  MapPin,
  ShieldCheck,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Medical Assistant",
    description:
      "Context-aware clinical AI that assists with diagnostics, documentation, and treatment planning in real time.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Database,
    title: "Digital Health Records",
    description:
      "Structured, interoperable records with full audit trail, attachments, imaging, and lab results.",
    color: "text-slate-700",
    bg: "bg-slate-100",
  },
  {
    icon: Video,
    title: "Online Consultation",
    description:
      "HD video, async messaging, and screen sharing for seamless remote patient care.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: ClipboardList,
    title: "Prescription Management",
    description:
      "Digital Rx with drug interaction alerts, formulary checks, and direct pharmacy routing.",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    icon: FlaskConical,
    title: "Lab Integration",
    description:
      "Connect to 500+ lab networks. Auto-import results and trigger follow-up workflows.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Building2,
    title: "Hospital Management",
    description:
      "OPD, IPD, OT scheduling, bed management, and staff allocation — all in one view.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: CalendarCheck,
    title: "Smart Scheduling",
    description:
      "AI-optimized appointment scheduling with conflict detection, waitlists, and automated reminders.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Revenue cycle analytics, patient flow, and clinical KPIs with executive-level dashboards.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Contextual alerts via push, SMS, or email for appointments, results, and critical events.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: MapPin,
    title: "Multi-location",
    description:
      "Unified management across unlimited locations, departments, and care settings.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description:
      "Granular permissions for every role — doctor, nurse, admin, patient, and partner.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "HIPAA-ready infrastructure with end-to-end encryption, SSO, MFA, and full audit logs.",
    color: "text-slate-700",
    bg: "bg-slate-100",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export function FeaturesGrid() {
  return (
    <section className="py-32 bg-slate-900 landing-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Key Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              every workflow
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed">
            Powerful capabilities that let your team move faster, work smarter, and deliver
            better outcomes at every stage of care.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="group bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-white/15 transition-all duration-200"
            >
              <div
                className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4`}
              >
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{f.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
