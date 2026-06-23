
"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react";

const highlights = [
  "No credit card required",
  "Full platform access",
  "Dedicated onboarding",
  "Cancel anytime",
];

export function FinalCTA() {
  return (
    <section id="demo" className="py-32 bg-slate-50 landing-section">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900" />

          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Glow orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative px-10 py-20 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
              </span>
              <span className="text-xs font-semibold text-blue-100 tracking-wide">
                Now accepting new customers
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
              Transform Healthcare with{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Intelligent Technology.
              </span>
            </h2>

            <p className="text-lg text-blue-100/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Join 500+ healthcare organizations using Vitalis to deliver faster, smarter, and
              more compassionate care — at any scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-800 font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-xl text-sm hover:-translate-y-px"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-200 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Contact Sales
              </Link>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-sm text-blue-100/80">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
