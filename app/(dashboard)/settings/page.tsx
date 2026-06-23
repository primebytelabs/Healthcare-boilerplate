"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User, Bell, Shield, Palette, CreditCard, Key,
  Eye, EyeOff, Moon, Sun, Monitor, Save, CheckCircle2,
} from "lucide-react";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "api", label: "API Keys", icon: Key },
];

/* ─── toggle ─── */
function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
        checked ? "bg-blue-600" : "bg-slate-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

/* ─── profile tab ─── */
function ProfileTab() {
  const [saved, setSaved] = React.useState(false);
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="space-y-6">
      {/* Avatar */}
      <Card>
        <CardHeader><CardTitle>Profile Photo</CardTitle></CardHeader>
        <CardContent className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shrink-0">
            SC
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Dr. Sarah Chen</p>
            <p className="text-xs text-muted-foreground mb-3">Cardiologist · Vitalis Platform</p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Upload Photo
              </button>
              <button className="px-3 py-1.5 text-xs font-medium border border-border text-muted-foreground rounded-lg hover:bg-muted/50 transition-colors">
                Remove
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info form */}
      <Card>
        <CardHeader><CardTitle>Personal Information</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "First Name", value: "Sarah", placeholder: "First name" },
              { label: "Last Name", value: "Chen", placeholder: "Last name" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-sm font-medium text-foreground mb-1.5">{f.label}</label>
                <input defaultValue={f.value} className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all" />
              </div>
            ))}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
            <input defaultValue="sarah.chen@vitalis.ai" type="email" className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
              <input defaultValue="+1 (555) 234-5678" type="tel" className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Specialty</label>
              <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all">
                {["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "General Medicine"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Bio</label>
            <textarea
              rows={3}
              defaultValue="Board-certified cardiologist with 12+ years of experience. Specialized in interventional cardiology and heart failure management."
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Hospital / Clinic</label>
            <input defaultValue="Unity Health Network — San Francisco" className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all" />
          </div>
          <button onClick={save} className="flex items-center gap-2 px-5 py-2 bg-blue-700 text-white text-sm font-semibold rounded-xl hover:bg-blue-800 transition-colors shadow-lg shadow-blue-700/15">
            {saved ? <CheckCircle2 className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            {saved ? "Saved!" : "Save Changes"}
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

/* ─── notifications tab ─── */
function NotificationsTab() {
  const [prefs, setPrefs] = React.useState({
    emailAppt: true, emailRecords: true, emailMarketing: false,
    smsAppt: true, smsUrgent: true, smsReminders: false,
    pushAll: true, pushUrgent: true, pushChat: false,
  });
  const toggle = (k: keyof typeof prefs) => setPrefs((p) => ({ ...p, [k]: !p[k] }));

  const groups = [
    {
      title: "Email Notifications", icon: "📧",
      items: [
        { key: "emailAppt" as const, label: "Appointment updates", desc: "When appointments are booked, changed, or cancelled" },
        { key: "emailRecords" as const, label: "Lab results & records", desc: "When new lab results or documents are available" },
        { key: "emailMarketing" as const, label: "Platform updates", desc: "News, tips, and product announcements" },
      ],
    },
    {
      title: "SMS Notifications", icon: "💬",
      items: [
        { key: "smsAppt" as const, label: "Appointment reminders", desc: "24h and 1h before scheduled appointments" },
        { key: "smsUrgent" as const, label: "Urgent alerts", desc: "Critical patient events and emergencies" },
        { key: "smsReminders" as const, label: "Follow-up reminders", desc: "Post-appointment care reminders" },
      ],
    },
    {
      title: "Push Notifications", icon: "🔔",
      items: [
        { key: "pushAll" as const, label: "All notifications", desc: "Enable push notifications on this device" },
        { key: "pushUrgent" as const, label: "Urgent only", desc: "Only show critical, time-sensitive alerts" },
        { key: "pushChat" as const, label: "In-app messages", desc: "Messages from patients and colleagues" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {groups.map((g) => (
        <Card key={g.title}>
          <CardHeader>
            <CardTitle>
              <span className="mr-2">{g.icon}</span>
              {g.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="divide-y divide-border">
            {g.items.map((item) => (
              <div key={item.key} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
                <Toggle checked={prefs[item.key]} onChange={() => toggle(item.key)} />
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

/* ─── security tab ─── */
function SecurityTab() {
  const [showCurrent, setShowCurrent] = React.useState(false);
  const [showNew, setShowNew] = React.useState(false);
  const [twoFA, setTwoFA] = React.useState(true);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Change Password</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Current Password</label>
            <div className="relative">
              <input type={showCurrent ? "text" : "password"} placeholder="Enter current password" className="w-full h-10 px-3 pr-10 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all" />
              <button type="button" onClick={() => setShowCurrent(!showCurrent)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">New Password</label>
            <div className="relative">
              <input type={showNew ? "text" : "password"} placeholder="Enter new password" className="w-full h-10 px-3 pr-10 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all" />
              <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Confirm New Password</label>
            <input type="password" placeholder="Confirm new password" className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all" />
          </div>
          <button className="px-5 py-2 bg-blue-700 text-white text-sm font-semibold rounded-xl hover:bg-blue-800 transition-colors">
            Update Password
          </button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Two-Factor Authentication</CardTitle></CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-foreground">Authenticator App</p>
              <p className="text-xs text-muted-foreground mt-0.5">Use Google Authenticator or similar</p>
            </div>
            <Toggle checked={twoFA} onChange={setTwoFA} />
          </div>
          {twoFA && (
            <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-xs text-emerald-700">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Two-factor authentication is active. Your account is secured.
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Active Sessions</CardTitle></CardHeader>
        <CardContent className="divide-y divide-border">
          {[
            { device: "MacBook Pro · Chrome", location: "San Francisco, CA", time: "Active now", current: true },
            { device: "iPhone 15 · Safari", location: "San Francisco, CA", time: "2 hours ago", current: false },
            { device: "iPad · Chrome", location: "Oakland, CA", time: "Yesterday", current: false },
          ].map((s) => (
            <div key={s.device} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  {s.device}
                  {s.current && <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2 py-0.5 font-semibold">Current</span>}
                </p>
                <p className="text-xs text-muted-foreground">{s.location} · {s.time}</p>
              </div>
              {!s.current && (
                <button className="text-xs text-red-500 hover:text-red-700 font-medium">Revoke</button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

/* ─── appearance tab ─── */
function AppearanceTab() {
  const [theme, setTheme] = React.useState("system");
  const [density, setDensity] = React.useState("default");
  const [accent, setAccent] = React.useState("blue");

  const accents = [
    { id: "blue", color: "bg-blue-600", label: "Blue" },
    { id: "cyan", color: "bg-cyan-500", label: "Cyan" },
    { id: "emerald", color: "bg-emerald-500", label: "Emerald" },
    { id: "violet", color: "bg-violet-600", label: "Violet" },
    { id: "orange", color: "bg-orange-500", label: "Orange" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Theme</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "light", icon: Sun, label: "Light" },
              { id: "dark", icon: Moon, label: "Dark" },
              { id: "system", icon: Monitor, label: "System" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                  theme === t.id
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-border text-muted-foreground hover:border-foreground/20"
                }`}
              >
                <t.icon className="w-5 h-5" />
                <span className="text-xs font-semibold">{t.label}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Density</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {["Compact", "Default", "Comfortable"].map((d) => (
              <button
                key={d}
                onClick={() => setDensity(d.toLowerCase())}
                className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${
                  density === d.toLowerCase()
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-border text-muted-foreground hover:border-foreground/20"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Accent Color</CardTitle></CardHeader>
        <CardContent>
          <div className="flex gap-3 flex-wrap">
            {accents.map((a) => (
              <button
                key={a.id}
                onClick={() => setAccent(a.id)}
                className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all ${
                  accent === a.id ? "border-slate-400" : "border-transparent"
                }`}
              >
                <span className={`w-8 h-8 rounded-full ${a.color} shadow-sm`} />
                <span className="text-[10px] text-muted-foreground">{a.label}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ─── billing tab ─── */
function BillingTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Current Plan</CardTitle></CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Pro Plan
                </span>
              </div>
              <p className="text-2xl font-extrabold text-slate-900">$149 <span className="text-sm font-normal text-slate-500">/ month</span></p>
              <p className="text-xs text-slate-500 mt-1">Billed annually · Renews Jan 1, 2026</p>
            </div>
            <button className="px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors">
              Upgrade
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { label: "Doctors", value: "12 / 25" },
              { label: "Patients", value: "1,284" },
              { label: "Storage", value: "48 GB" },
            ].map((s) => (
              <div key={s.label} className="p-3 bg-muted/40 rounded-xl">
                <p className="text-sm font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Payment Method</CardTitle></CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 p-4 border border-border rounded-xl mb-3">
            <div className="w-10 h-7 bg-slate-900 rounded flex items-center justify-center text-white text-[10px] font-bold">VISA</div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Visa ending in 4242</p>
              <p className="text-xs text-muted-foreground">Expires 12/2027</p>
            </div>
            <span className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5 font-medium">Default</span>
          </div>
          <button className="text-sm text-blue-700 font-semibold hover:underline">+ Add payment method</button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Billing History</CardTitle></CardHeader>
        <CardContent className="divide-y divide-border">
          {[
            { date: "Dec 1, 2025", amount: "$149.00", status: "Paid", invoice: "INV-2025-012" },
            { date: "Nov 1, 2025", amount: "$149.00", status: "Paid", invoice: "INV-2025-011" },
            { date: "Oct 1, 2025", amount: "$149.00", status: "Paid", invoice: "INV-2025-010" },
          ].map((i) => (
            <div key={i.invoice} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm font-medium text-foreground">{i.invoice}</p>
                <p className="text-xs text-muted-foreground">{i.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-foreground">{i.amount}</span>
                <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5 font-medium">{i.status}</span>
                <button className="text-xs text-blue-700 hover:underline font-medium">Download</button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

/* ─── api tab ─── */
function ApiTab() {
  const [revealed, setRevealed] = React.useState<string | null>(null);
  const keys = [
    { name: "Production API Key", key: "vit_live_sk_••••••••••••••••3f9a", created: "Jan 15, 2025", lastUsed: "2 min ago" },
    { name: "Development API Key", key: "vit_test_sk_••••••••••••••••8b2c", created: "Mar 3, 2025", lastUsed: "1 hour ago" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>API Keys</CardTitle>
            <button className="px-4 py-2 text-sm font-semibold bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors">
              Generate New Key
            </button>
          </div>
        </CardHeader>
        <CardContent className="divide-y divide-border">
          {keys.map((k) => (
            <div key={k.name} className="py-4 first:pt-0 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-semibold text-foreground">{k.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Created {k.created} · Last used {k.lastUsed}</p>
                </div>
                <button className="text-xs text-red-500 hover:text-red-700 font-medium">Revoke</button>
              </div>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-xs bg-muted px-3 py-2 rounded-lg font-mono text-muted-foreground border border-border">
                  {revealed === k.name ? "vit_live_sk_abc123def456ghi789" : k.key}
                </code>
                <button
                  onClick={() => setRevealed(revealed === k.name ? null : k.name)}
                  className="p-2 rounded-lg border border-border hover:bg-muted/50 text-muted-foreground transition-colors"
                >
                  {revealed === k.name ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Webhooks</CardTitle></CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border border-border rounded-xl mb-3">
            <div>
              <p className="text-sm font-medium text-foreground">https://your-app.com/webhooks/vitalis</p>
              <p className="text-xs text-muted-foreground mt-0.5">Listening to: appointment.created, patient.updated</p>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <button className="text-sm text-blue-700 font-semibold hover:underline">+ Add endpoint</button>
        </CardContent>
      </Card>
    </div>
  );
}

/* ─── page ─── */
const tabContent: Record<string, React.ReactNode> = {
  profile: <ProfileTab />,
  notifications: <NotificationsTab />,
  security: <SecurityTab />,
  appearance: <AppearanceTab />,
  billing: <BillingTab />,
  api: <ApiTab />,
};

export default function SettingsPage() {
  const [active, setActive] = React.useState("profile");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-heading-lg font-semibold text-foreground">Settings</h2>
        <p className="mt-1 text-muted-foreground text-sm">
          Manage your account, preferences, and integrations
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar tabs */}
        <div className="w-full lg:w-52 shrink-0">
          <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all w-full text-left ${
                  active === tab.id
                    ? "bg-blue-50 text-blue-700 border border-blue-100"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <tab.icon className="w-4 h-4 shrink-0" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1 min-w-0"
        >
          {tabContent[active]}
        </motion.div>
      </div>
    </div>
  );
}
