
import Link from "next/link";

export function CTA() {
    return (
        <section className="py-24 bg-muted/50 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-display text-heading-xl font-bold text-foreground mb-4">
            Ready to transform your practice?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Join thousands of healthcare providers who have simplified their operations with Vitalis.
          </p>
          <Link
            href="/register"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary-dark transition-all active:scale-[0.98]"
          >
            Get Started Free
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    )
}
