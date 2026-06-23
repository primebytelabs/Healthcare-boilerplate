
import Link from "next/link";
import { CheckCircleIcon } from "./icons";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground mb-8">
              <span className="flex h-2 w-2 rounded-full bg-success" />
              Trusted by 50+ healthcare providers
            </div>
            <h1 className="font-display text-display-lg md:text-display-xl font-bold tracking-tight text-foreground">
              Healthcare operations,{" "}
              <span className="text-gradient">beautifully simplified</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vitalis brings clarity to your clinical workflow. Manage patients, appointments, and medical records in one place — with the elegance of modern software and the reliability healthcare demands.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary-dark transition-all active:scale-[0.98]"
              >
                Start Free Trial
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-border px-6 text-base font-medium text-foreground hover:bg-muted transition-all"
              >
                View Features
              </Link>
            </div>
            <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-success" />
                No credit card
              </span>
              <span className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-success" />
                HIPAA compliant
              </span>
              <span className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-success" />
                14-day free trial
              </span>
            </div>
          </div>
        </div>
      </section>
    )
}
