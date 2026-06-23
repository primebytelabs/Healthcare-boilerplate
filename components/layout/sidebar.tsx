"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Stethoscope,
  Activity,
  Settings,
  ChevronLeft,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: number;
}

const defaultNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
  { label: "Appointments", href: "/appointments", icon: <Calendar className="h-5 w-5" />, badge: 3 },
  { label: "Patients", href: "/patients", icon: <Users className="h-5 w-5" /> },
  { label: "Doctors", href: "/doctors", icon: <Stethoscope className="h-5 w-5" /> },
  { label: "Analytics", href: "/analytics", icon: <Activity className="h-5 w-5" /> },
  { label: "Settings", href: "/settings", icon: <Settings className="h-5 w-5" /> },
];

interface SidebarProps {
  navItems?: NavItem[];
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  onLogout?: () => void;
}

function Sidebar({ navItems = defaultNavItems, userName = "Dr. Sarah Chen", userRole = "Administrator", userAvatar, onLogout }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-40 flex items-center justify-center h-10 w-10 rounded-lg border border-border bg-card shadow-sm lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-sidebar-border bg-card transition-all duration-300",
          collapsed ? "w-[72px]" : "w-[280px]",
          "hidden lg:flex"
        )}
      >
        <SidebarContent
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          navItems={navItems}
          pathname={pathname}
          userName={userName}
          userRole={userRole}
          userAvatar={userAvatar}
          onLogout={onLogout}
        />
      </aside>

      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: mobileOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-sidebar-border bg-card lg:hidden",
          "w-[280px]"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <span className="font-display text-lg font-bold text-primary">Vitalis</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-1 rounded-md hover:bg-muted"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <SidebarContent
          collapsed={false}
          setCollapsed={() => {}}
          navItems={navItems}
          pathname={pathname}
          userName={userName}
          userRole={userRole}
          userAvatar={userAvatar}
          onLogout={onLogout}
          mobile
        />
      </motion.aside>
    </>
  );
}

function SidebarContent({
  collapsed,
  setCollapsed,
  navItems,
  pathname,
  userName,
  userRole,
  userAvatar,
  onLogout,
  mobile,
}: {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  navItems: NavItem[];
  pathname: string;
  userName: string;
  userRole: string;
  userAvatar?: string;
  onLogout?: () => void;
  mobile?: boolean;
}) {
  return (
    <>
      <div className={cn("flex items-center border-b border-sidebar-border shrink-0", collapsed ? "justify-center p-4" : "px-6 py-5")}>
        {!collapsed && (
          <span className="font-display text-xl font-bold text-primary">Vitalis</span>
        )}
        {collapsed && (
          <span className="font-display text-lg font-bold text-primary">V</span>
        )}
        {!mobile && (
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              "p-1.5 rounded-lg text-sidebar-muted hover:text-sidebar-foreground hover:bg-muted transition-colors",
              collapsed ? "ml-0" : "ml-auto"
            )}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center rounded-lg text-sm font-medium transition-all duration-150",
                collapsed
                  ? "justify-center h-11 w-11 mx-auto"
                  : "px-3 py-2.5 gap-3",
                isActive
                  ? "bg-primary-light text-primary"
                  : "text-sidebar-muted hover:text-sidebar-foreground hover:bg-muted"
              )}
            >
              {isActive && !collapsed && (
                <motion.div
                  layoutId="sidebar-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              {item.icon}
              {!collapsed && (
                <>
                  <span className="flex-1">{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-tiny font-medium text-primary-foreground">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
              {collapsed && item.badge !== undefined && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className={cn("border-t border-sidebar-border shrink-0", collapsed ? "p-3" : "p-4")}>
        {collapsed ? (
          <div className="flex flex-col items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
              {userName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium shrink-0">
              {userName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{userName}</p>
              <p className="text-xs text-muted-foreground">{userRole}</p>
            </div>
            <button
              type="button"
              onClick={onLogout}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
              aria-label="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export { Sidebar };
export type { NavItem };
