import { getAppointment } from "@/appwrite/actions/appointment.action";
import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Link from "next/link";

import * as Sentry from "@sentry/nextjs";
import { getUser } from "@/appwrite/actions/patient.action";

export const dynamic = "force-dynamic";

export default async function Success({ params: { userId }, searchParams }: SearchParamProps) {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);
  const user = await getUser(userId);

  const doctor = Doctors.find(doc => doc.name === appointment.primaryPhysician);

  Sentry.metrics.set("user_view_appointment_success", user.name);

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10 mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <h1 className="text-heading-md font-semibold text-foreground mb-2">
            Appointment Request Submitted
          </h1>
          <p className="text-muted-foreground mb-8">
            We&apos;ll be in touch shortly to confirm your appointment.
          </p>

          <div className="rounded-lg bg-muted p-4 mb-8 text-left space-y-3">
            <p className="text-sm font-medium text-foreground">Appointment Details</p>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary text-xs font-medium">
                {doctor?.name.split(" ").map(n => n[0]).join("")}
              </div>
              <span className="text-foreground">Dr. {doctor?.name}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="text-muted-foreground">
                {formatDateTime(appointment.schedule).dateTime}
              </span>
            </div>
          </div>

          <Link
            href={`/patients/${userId}/new-appointment`}
            className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground hover:bg-muted transition-all w-full"
          >
            Book Another Appointment
          </Link>
        </div>

        <div className="mt-8">
          <Link href="/" className="font-display text-lg font-bold text-primary">
            Vitalis
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vitalis Health Platform
          </p>
        </div>
      </div>
    </div>
  );
}
