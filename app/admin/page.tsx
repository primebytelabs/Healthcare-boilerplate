import Link from "next/link";
import { Calendar, Clock, XCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  let appointmentsData = { scheduledCount: 0, pendingCount: 0, cancelledCount: 0, documents: [] };
  
  try {
    const { getRecentAppointments } = await import("@/appwrite/actions/appointment.action");
    appointmentsData = await getRecentAppointments();
  } catch (e) {
    console.warn("Appwrite not configured, showing empty state");
  }

  const appointments = appointmentsData;

  const stats = [
    {
      title: "Scheduled",
      value: appointments.scheduledCount,
      icon: Calendar,
      color: "text-success bg-success/10",
    },
    {
      title: "Pending",
      value: appointments.pendingCount,
      icon: Clock,
      color: "text-warning bg-warning/10",
    },
    {
      title: "Cancelled",
      value: appointments.cancelledCount,
      icon: XCircle,
      color: "text-destructive bg-destructive/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-heading-lg font-semibold text-foreground">Admin Dashboard</h1>
            <p className="mt-1 text-muted-foreground">
              Manage appointments and oversee practice operations
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Back to Home
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <p className="text-3xl font-semibold text-foreground tabular-nums">{stat.value}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.title} Appointments</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border p-4">
            <h2 className="text-heading-sm font-semibold text-foreground">All Appointments</h2>
          </div>
          {appointments.documents.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Patient</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Doctor</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.documents.map((apt: any, i: number) => (
                    <tr key={apt.$id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-3 text-sm text-foreground">{apt.patient?.name || "Unknown"}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">Dr. {apt.primaryPhysician}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">
                        {new Date(apt.schedule).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            apt.status === "scheduled"
                              ? "bg-success/10 text-success"
                              : apt.status === "pending"
                              ? "bg-warning/10 text-warning"
                              : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                          {apt.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="inline-flex gap-1">
                          <Link
                            href="#"
                            className="rounded-md px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
                          >
                            Schedule
                          </Link>
                          <Link
                            href="#"
                            className="rounded-md px-3 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/10 transition-colors"
                          >
                            Cancel
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Calendar className="h-12 w-12 text-muted-foreground/40 mb-4" />
              <p className="text-lg font-medium text-foreground">No appointments yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                When patients book appointments, they will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
