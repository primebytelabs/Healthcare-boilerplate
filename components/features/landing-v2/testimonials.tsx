
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Vitalis has transformed how we run our hospital network. The AI assistant cut our documentation time by 40%, and the analytics give us insights we never had before. I can't imagine going back.",
    name: "Dr. Sarah Chen",
    title: "Chief Medical Officer",
    org: "Unity Health Network",
    avatar: "SC",
    gradient: "from-blue-500 to-cyan-500",
    rating: 5,
    tag: "Hospital Administrator",
  },
  {
    quote:
      "We evaluated six platforms before choosing Vitalis. Nothing else came close on UX. Our doctors adopted it in days, not months. Appointment no-shows dropped 28% in the first quarter.",
    name: "Mark Johnson",
    title: "COO",
    org: "Crestview Medical Group",
    avatar: "MJ",
    gradient: "from-violet-500 to-indigo-500",
    rating: 5,
    tag: "Healthcare Operations",
  },
  {
    quote:
      "As a patient, I can finally see all my records, talk to my doctor over video, and get my prescriptions refilled without playing phone tag. It's what healthcare should have been all along.",
    name: "Emily Rodriguez",
    title: "Patient",
    org: "Vitalis User since 2024",
    avatar: "ER",
    gradient: "from-emerald-500 to-teal-500",
    rating: 5,
    tag: "Patient",
  },
  {
    quote:
      "The remote monitoring integration is a game-changer for our cardiology department. We catch deterioration earlier, intervene faster, and our readmission rates have fallen 22%.",
    name: "Dr. James Park",
    title: "Head of Cardiology",
    org: "Pacific Heart Institute",
    avatar: "JP",
    gradient: "from-red-500 to-rose-500",
    rating: 5,
    tag: "Clinical Specialist",
  },
  {
    quote:
      "Our billing team processes twice the claims with half the errors. The automation handles insurance verification, claims, and follow-ups automatically. ROI in 6 weeks.",
    name: "Lisa Thompson",
    title: "Revenue Cycle Director",
    org: "Northbrook Health System",
    avatar: "LT",
    gradient: "from-amber-500 to-orange-500",
    rating: 5,
    tag: "Finance & Billing",
  },
  {
    quote:
      "We run 14 clinics across 3 states on Vitalis. The multi-location dashboard gives me a single view of everything. Staffing, revenue, quality metrics — all in one place. Incredible.",
    name: "Dr. Aisha Patel",
    title: "Medical Director",
    org: "ClearPath Clinics",
    avatar: "AP",
    gradient: "from-cyan-500 to-blue-500",
    rating: 5,
    tag: "Multi-site Network",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function Testimonials() {
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
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-4 py-1.5 mb-6">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-amber-700">4.9 / 5 average rating</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Loved by{" "}
            <span className="text-gradient-blue">healthcare leaders</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            From solo practitioners to enterprise health systems — here's what the people
            using Vitalis every day have to say.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col"
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${t.gradient} rounded-full`}
              />

              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-6 h-6 text-slate-200" />
              </div>

              {/* Tag */}
              <span className="inline-flex items-center text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-100 rounded-full px-2.5 py-0.5 mb-4 self-start">
                {t.tag}
              </span>

              {/* Quote */}
              <p className="text-sm text-slate-600 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{t.name}</p>
                    <p className="text-[10px] text-slate-400">
                      {t.title} · {t.org}
                    </p>
                  </div>
                </div>
                <StarRating count={t.rating} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
