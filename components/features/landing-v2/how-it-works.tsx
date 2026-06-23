
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, Video, Pill, HeartPulse } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Register & Onboard",
    description:
      "Create your profile in under 2 minutes. Import existing medical records, add your insurance, and set care preferences.",
    detail: "HIPAA-compliant onboarding",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    line: "bg-gradient-to-b from-blue-200 to-cyan-200",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Book Appointment",
    description:
      "Choose from thousands of specialists. Filter by location, availability, language, and insurance. Instant confirmation.",
    detail: "Real-time availability",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    line: "bg-gradient-to-b from-cyan-200 to-violet-200",
  },
  {
    number: "03",
    icon: Video,
    title: "Consult Your Doctor",
    description:
      "Meet via HD video or in-person. Your AI assistant prepares your history. Your doctor has full context from the start.",
    detail: "AI-prepared briefings",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    line: "bg-gradient-to-b from-violet-200 to-emerald-200",
  },
  {
    number: "04",
    icon: Pill,
    title: "Receive Treatment",
    description:
      "Get digital prescriptions, lab orders, and care plans — all sent instantly to your preferred pharmacy and providers.",
    detail: "Instant delivery to pharmacies",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    line: "bg-gradient-to-b from-emerald-200 to-blue-200",
  },
  {
    number: "05",
    icon: HeartPulse,
    title: "Continuous Follow-up",
    description:
      "AI monitors your progress, sends check-ins, flags anomalies, and keeps your care team proactively informed.",
    detail: "24/7 AI health monitoring",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    line: "",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-white landing-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              How It Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Care that flows{" "}
            <span className="text-gradient-blue">effortlessly</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            From first visit to continuous follow-up, every step is designed to be
            simple, smart, and seamlessly connected.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex gap-8 pb-12 last:pb-0"
            >
              {/* Line */}
              {i < steps.length - 1 && (
                <div
                  className={`absolute left-[23px] top-12 w-0.5 h-[calc(100%-32px)] ${step.line}`}
                />
              )}

              {/* Icon column */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className={`w-12 h-12 rounded-2xl ${step.bg} ${step.border} border flex items-center justify-center shadow-sm`}
                >
                  <step.icon className={`w-5 h-5 ${step.color}`} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-slate-300 tracking-wider">
                    STEP {step.number}
                  </span>
                  <span
                    className={`text-[10px] font-semibold ${step.color} ${step.bg} ${step.border} border rounded-full px-2.5 py-0.5`}
                  >
                    {step.detail}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
