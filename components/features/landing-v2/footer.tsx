
"use client";

import * as React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Github, Youtube } from "lucide-react";

const footerNav = {
  Solutions: [
    "AI Assistant",
    "Online Consultations",
    "Appointment Booking",
    "Medical Records",
    "E-Prescriptions",
    "Remote Monitoring",
    "Lab Tests",
    "Hospital Management",
  ],
  Company: [
    "About Us",
    "Careers",
    "Press",
    "Blog",
    "Partners",
    "Contact Us",
  ],
  Resources: [
    "Documentation",
    "API Reference",
    "Status Page",
    "Help Center",
    "Community",
    "Changelog",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "HIPAA Compliance",
    "BAA Agreement",
    "Cookie Policy",
    "Security",
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Vitalis</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              The next-generation AI healthcare platform for hospitals, clinics, and
              the patients they serve.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                Stay updated
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-xl px-4 py-2.5 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors flex-shrink-0">
                  Join
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Vitalis Technologies, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Cookies
            </Link>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-500">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
