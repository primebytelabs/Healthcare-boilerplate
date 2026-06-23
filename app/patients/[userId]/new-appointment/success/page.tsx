import Link from "next/link";

export default function AppointmentSuccess({ params }: { params: { userId: string } }) {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Appointment Request Submitted
          </h1>
          <p className="text-muted-foreground mb-8">
            We&apos;ll be in touch shortly to confirm your appointment.
          </p>

          <Link
            href={`/patients/${params.userId}/new-appointment`}
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
