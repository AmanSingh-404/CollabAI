"use client";

import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import Sidebar from "@/app/components/dashboard/Sidebar";
import Topbar from "@/app/components/dashboard/Topbar";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      
      <Sidebar />

      <div className="main">
        <Topbar />

        <div className="content">
          <div className="main-col">
            <h1>Dashboard UI Coming...</h1>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}