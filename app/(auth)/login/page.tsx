"use client";

import * as React from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";

export default function LoginPage() {
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
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back</h1>
        <p className="mt-1.5 text-sm text-slate-500">
          Sign in to your Vitalis account to continue
        </p>
      </div>

      {/* SSO Options */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {["Google", "Microsoft"].map((provider) => (
          <button
            key={provider}
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-150"
          >
            <span className="text-base">{provider === "Google" ? "G" : "M"}</span>
            {provider}
          </button>
        ))}
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs text-slate-400 font-medium">or sign in with email</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email address
          </label>
          <input
            type="email"
            placeholder="doctor@hospital.com"
            required
            className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <Link href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              placeholder="Enter your password"
              required
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
        </div>

        <div className="flex items-center gap-2">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="remember" className="text-sm text-slate-600">
            Remember me for 30 days
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
              Sign In
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-blue-700 hover:text-blue-800">
          Create one free
        </Link>
      </p>

      {/* Role quick access */}
      <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
        <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
          Quick access (demo)
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { role: "Doctor", email: "doctor@vitalis.ai" },
            { role: "Admin", email: "admin@vitalis.ai" },
            { role: "Patient", email: "patient@vitalis.ai" },
          ].map((d) => (
            <button
              key={d.role}
              type="button"
              className="text-xs py-1.5 px-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:border-blue-200 hover:text-blue-700 hover:bg-blue-50 transition-all font-medium"
            >
              {d.role}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
