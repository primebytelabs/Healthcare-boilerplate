"use client";

import * as React from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Loader2, Building2, Stethoscope, User, ShieldCheck } from "lucide-react";

const roles = [
  { id: "doctor", label: "Doctor", icon: Stethoscope, description: "Clinical workflows" },
  { id: "patient", label: "Patient", icon: User, description: "Personal health" },
  { id: "admin", label: "Admin", icon: ShieldCheck, description: "Hospital ops" },
  { id: "hospital", label: "Hospital", icon: Building2, description: "Enterprise" },
];

export default function RegisterPage() {
  const [role, setRole] = React.useState("doctor");
  const [showPwd, setShowPwd] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Create your account</h1>
        <p className="mt-1.5 text-sm text-slate-500">
          14-day free trial. No credit card required.
        </p>
      </div>

      {/* Role selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2.5">I am a</label>
        <div className="grid grid-cols-4 gap-2">
          {roles.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRole(r.id)}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center transition-all duration-150 ${
                role === r.id
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
              }`}
            >
              <r.icon className="w-4 h-4" />
              <span className="text-[10px] font-semibold">{r.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">First name</label>
            <input
              placeholder="John"
              required
              className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Last name</label>
            <input
              placeholder="Doe"
              required
              className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email address</label>
          <input
            type="email"
            placeholder="john@hospital.com"
            required
            className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        {(role === "doctor" || role === "admin" || role === "hospital") && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              {role === "hospital" ? "Hospital / Organization name" : "Clinic / Hospital"}
            </label>
            <input
              placeholder={role === "hospital" ? "Metro Health System" : "City General Hospital"}
              className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone number</label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              placeholder="Create a strong password"
              required
              minLength={8}
              className="w-full h-11 px-4 pr-11 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-1.5">Must be at least 8 characters</p>
        </div>

        <div className="flex items-start gap-2.5">
          <input
            id="terms"
            type="checkbox"
            required
            className="w-4 h-4 mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 flex-shrink-0"
          />
          <label htmlFor="terms" className="text-sm text-slate-600 leading-snug">
            I agree to Vitalis&apos;s{" "}
            <Link href="#" className="text-blue-700 hover:underline font-medium">Terms of Service</Link>
            {" "}and{" "}
            <Link href="#" className="text-blue-700 hover:underline font-medium">Privacy Policy</Link>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-11 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-150 text-sm shadow-lg shadow-blue-700/20"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Create Account
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-blue-700 hover:text-blue-800">
          Sign in
        </Link>
      </p>
    </div>
  );
}
