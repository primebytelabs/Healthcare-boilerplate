import Link from "next/link";
import { Shield, Star } from "lucide-react";

const quotes = [
  {
    text: "Vitalis reduced our documentation time by 40% and transformed how our team delivers care.",
    author: "Dr. Sarah Chen",
    role: "Chief Medical Officer, Unity Health",
  },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Left panel — brand */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[560px] flex-col bg-slate-900 relative overflow-hidden flex-shrink-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.15) 1.5px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative flex flex-col h-full p-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Vitalis</span>
          </Link>

          {/* Center content */}
          <div className="flex-1 flex flex-col justify-center mt-20">
            <div className="mb-3">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                AI Healthcare Platform
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Healthcare technology
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                built for the future.
              </span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm mb-12">
              Manage patients, appointments, and clinical workflows with AI-powered
              intelligence — all in one place.
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-12">
              {[
                "AI-powered diagnosis support",
                "HIPAA-compliant infrastructure",
                "Real-time analytics dashboard",
                "Seamless EMR integrations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-emerald-400" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                &ldquo;{quotes[0].text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                  SC
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">{quotes[0].author}</p>
                  <p className="text-[10px] text-slate-400">{quotes[0].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center gap-2 mt-8">
            <Shield className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-xs text-slate-500">HIPAA Compliant · SOC 2 Type II · ISO 27001</span>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link href="/" className="flex items-center gap-2.5 lg:hidden mb-10">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Vitalis</span>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
