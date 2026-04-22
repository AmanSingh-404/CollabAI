"use client";
import "@/app/dashboard/dashboard.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="shell">
      {children}
    </div>
  );
}