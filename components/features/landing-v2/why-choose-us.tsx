
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  ShieldCheck,
  Cloud,
  Zap,
  Scaling,
  Smartphone,
  Clock,
  Lock,
} from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Clinical AI trained on millions of records delivers diagnosis support, anomaly detection, and smart scheduling.",
    accent: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-Ready by Design",
    description:
      "Built from the ground up to meet HIPAA, GDPR, and NABH standards. Compliance is embedded, not bolted on.",
    accent: "from-emerald-500 to-emerald-700",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "99.99% uptime SLA backed by multi-region cloud deployment on enterprise-grade infrastructure.",
    accent: "from-cyan-500 to-cyan-700",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Zap,
    title: "Blazingly Fast",
    description:
      "Sub-100ms response times globally. Your team never waits. Your patients never wait.",
    accent: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Scaling,
    title: "Infinitely Scalable",
    description:
      "From a 3-doctor clinic to a 100-hospital network — the platform scales instantly with zero downtime.",
    accent: "from-violet-500 to-violet-700",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Smartphone,
    title: "Every Device",
    description:
      "Native iOS, Android, and web apps with a consistent experience across all screen sizes and contexts.",
    accent: "from-slate-500 to-slate-700",
    bg: "bg-slate-100",
    iconColor: "text-slate-600",
  },
  {
    icon: Clock,
    title: "Real-Time Everything",
    description:
      "Live updates for appointments, vitals, lab results, and alerts — no refresh required.",
    accent: "from-teal-500 to-teal-700",
    bg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: Lock,
    title: "Zero-Trust Security",
    description:
      "End-to-end encryption, MFA, SSO, and continuous access auditing protect every interaction.",
    accent: "from-red-500 to-red-700",
    bg: "bg-red-50",
    iconColor: "text-red-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-gradient-to-b from-blue-50/60 to-white landing-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Why Vitalis
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            The platform modern{" "}
            <span className="text-gradient-blue">healthcare deserves</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            We've rethought every layer — from infrastructure to UX — so your team spends
            less time on software and more time on care.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:border-slate-200 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${r.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div
                className={`w-11 h-11 rounded-xl ${r.bg} flex items-center justify-center mb-4`}
              >
                <r.icon className={`w-5 h-5 ${r.iconColor}`} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">{r.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
