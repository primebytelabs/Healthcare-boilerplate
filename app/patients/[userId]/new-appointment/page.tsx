import { getPatient } from "@/appwrite/actions/patient.action";
import { SearchParamProps } from "@/types";
import * as Sentry from "@sentry/nextjs";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function NewAppointment({ params: { userId } }: SearchParamProps) {
  const patient = await getPatient(userId);

  Sentry.metrics.set("user_view_new_appointment", patient.name);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="font-display text-xl font-bold text-primary">
            Vitalis
          </Link>
        </div>
        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <div className="mb-8">
            <h1 className="text-heading-lg font-semibold text-foreground">New Appointment</h1>
            <p className="mt-1 text-muted-foreground">
              Schedule a new appointment for {patient.name}
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Doctor</label>
              <select className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all">
                <option>Select a doctor</option>
                <option>Dr. John Green</option>
                <option>Dr. Leila Cameron</option>
                <option>Dr. David Livingston</option>
                <option>Dr. Evan Peter</option>
                <option>Dr. Jane Powell</option>
                <option>Dr. Alex Ramirez</option>
                <option>Dr. Jasmine Lee</option>
                <option>Dr. Alyana Cruz</option>
                <option>Dr. Hardik Sharma</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Date & Time</label>
              <input
                type="datetime-local"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Reason for Appointment</label>
              <textarea
                placeholder="What brings you in today?"
                rows={3}
                className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Additional Notes</label>
              <textarea
                placeholder="Any additional information?"
                rows={3}
                className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary-dark transition-all active:scale-[0.98]"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
