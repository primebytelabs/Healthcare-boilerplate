import { getUser } from "@/appwrite/actions/patient.action";
import { SearchParamProps } from "@/types";
import * as Sentry from "@sentry/nextjs";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Register({ params: { userId } }: SearchParamProps) {
  const user = await getUser(userId);

  Sentry.metrics.set("user_view_register", user.name);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="font-display text-xl font-bold text-primary">
            Vitalis
          </Link>
        </div>
        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <div className="mb-8">
            <h1 className="text-heading-lg font-semibold text-foreground">
              Welcome, {user.name}
            </h1>
            <p className="mt-1 text-muted-foreground">
              Let us know more about yourself to get started.
            </p>
          </div>

          <form className="space-y-8">
            <section className="space-y-6">
              <div className="border-b border-border pb-2">
                <h2 className="text-heading-sm font-semibold text-foreground">Personal Information</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                  <input
                    defaultValue={user.name}
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                  <input
                    defaultValue={user.email}
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Phone</label>
                  <input
                    defaultValue={user.phone}
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Date of Birth</label>
                  <input
                    type="date"
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Gender</label>
                  <select className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Occupation</label>
                  <input
                    placeholder="Software Engineer"
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Address</label>
                <input
                  placeholder="123 Main St, New York, NY"
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </section>

            <section className="space-y-6">
              <div className="border-b border-border pb-2">
                <h2 className="text-heading-sm font-semibold text-foreground">Medical Information</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Insurance Provider</label>
                  <input
                    placeholder="Blue Cross Blue Shield"
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Policy Number</label>
                  <input
                    placeholder="ABA-123456789"
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Allergies</label>
                  <textarea
                    placeholder="Peanuts, Penicillin, Pollen"
                    rows={3}
                    className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Current Medications</label>
                  <textarea
                    placeholder="Ibuprofen 200mg, Paracetamol 500mg"
                    rows={3}
                    className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="border-b border-border pb-2">
                <h2 className="text-heading-sm font-semibold text-foreground">Consent</h2>
              </div>

              {["I consent to treatment", "I consent to disclosure of medical information", "I acknowledge the privacy policy"].map((label) => (
                <label key={label} className="flex items-start gap-3">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary/30" />
                  <span className="text-sm text-foreground">{label}</span>
                </label>
              ))}
            </section>

            <button
              type="submit"
              className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary-dark transition-all active:scale-[0.98]"
            >
              Complete Registration
            </button>
          </form>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Vitalis Health Platform
        </p>
      </div>
    </div>
  );
}
