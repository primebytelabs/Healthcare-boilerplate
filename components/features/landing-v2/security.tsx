
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Lock, Shield, Server, Fingerprint, ClipboardList, HardDrive, CheckCircle2 } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "AES-256 encryption for all data in transit and at rest. Your patient data is unreadable to anyone without authorization.",
  },
  {
    icon: Shield,
    title: "HIPAA & GDPR Compliant",
    description: "Full compliance with HIPAA, GDPR, and regional healthcare regulations. Business Associate Agreements (BAA) available.",
  },
  {
    icon: Fingerprint,
    title: "Role-Based Access Control",
    description: "Granular permissions at every level. Doctors see patient records. Billing sees financials. Zero data leakage.",
  },
  {
    icon: ClipboardList,
    title: "Immutable Audit Logs",
    description: "Every action is logged, timestamped, and tamper-proof. Full compliance reporting at the click of a button.",
  },
  {
    icon: Server,
    title: "Multi-Region Infrastructure",
    description: "Auto-failover across geographically distributed data centers. 99.99% uptime SLA with disaster recovery.",
  },
  {
    icon: HardDrive,
    title: "Continuous Backups",
    description: "Point-in-time recovery with daily backups retained for 7 years. Your data is never lost.",
  },
];

const certBadges = [
  { label: "HIPAA", sub: "Compliant" },
  { label: "SOC 2", sub: "Type II" },
  { label: "ISO 27001", sub: "Certified" },
  { label: "GDPR", sub: "Ready" },
];

export function Security() {
  return (
    <section className="py-32 bg-slate-50 landing-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                Security First
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Security isn&apos;t a feature.{" "}
              <span className="text-gradient-blue">It&apos;s our foundation.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              Healthcare data is among the most sensitive in the world. We treat security
              as a first-class engineering discipline — not an afterthought.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {securityFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <f.icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{f.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Central shield visual */}
            <div className="relative flex items-center justify-center">
              {/* Glow rings */}
              <div className="absolute w-80 h-80 rounded-full border border-emerald-100 opacity-60" />
              <div className="absolute w-60 h-60 rounded-full border border-emerald-200 opacity-60" />
              <div className="absolute w-40 h-40 rounded-full border border-emerald-300 opacity-60" />

              {/* Center shield */}
              <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-500/25">
                <Shield className="w-14 h-14 text-white" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>

              {/* Floating orbit cards */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-4 right-8 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 w-36"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Lock className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-[10px] font-bold text-slate-700">AES-256</span>
                </div>
                <p className="text-[9px] text-slate-400">All data encrypted</p>
                <div className="mt-1.5 h-1 bg-blue-100 rounded-full">
                  <div className="h-1 bg-blue-500 rounded-full w-full" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-4 left-8 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 w-40"
              >
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[10px] font-bold text-slate-700">HIPAA Compliant</span>
                </div>
                <p className="text-[9px] text-slate-400">Full audit trail active</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[8px] text-emerald-600 font-medium">Monitoring live</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-4 left-6 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 w-36"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Server className="w-3.5 h-3.5 text-violet-600" />
                  <span className="text-[10px] font-bold text-slate-700">Uptime SLA</span>
                </div>
                <p className="text-[18px] font-extrabold text-slate-900">99.99%</p>
                <p className="text-[8px] text-slate-400">Multi-region active</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-4 right-6 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 w-32"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Fingerprint className="w-3.5 h-3.5 text-cyan-600" />
                  <span className="text-[10px] font-bold text-slate-700">Access Control</span>
                </div>
                <p className="text-[9px] text-slate-400">Zero-trust policy</p>
              </motion.div>
            </div>

            {/* Compliance badges */}
            <div className="flex justify-center gap-3 mt-8 flex-wrap">
              {certBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm"
                >
                  <span className="text-xs font-extrabold text-slate-900">{b.label}</span>
                  <span className="text-[9px] text-slate-400 mt-0.5">{b.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
