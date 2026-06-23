
"use client";

import * as React from "react";
import { motion } from "framer-motion";

const logos = [
  "Apollo Hospitals",
  "Mayo Clinic",
  "Cleveland Clinic",
  "Johns Hopkins",
  "Kaiser Permanente",
  "Mount Sinai",
  "Stanford Health",
  "Cedars-Sinai",
  "Mass General",
  "NYU Langone",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-10">
      <span className="text-slate-400 font-semibold text-sm tracking-wide whitespace-nowrap hover:text-slate-600 transition-colors cursor-default">
        {name}
      </span>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest"
        >
          Trusted by world-class healthcare organizations
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...logos, ...logos].map((name, i) => (
            <LogoItem key={i} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
