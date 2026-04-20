// app/auth/page.tsx
"use client";

import { useState } from "react";
import AuthLayout from "@/app/components/auth/AuthLayout";
import LoginForm from "@/app/components/auth/LoginForm";
import RegisterForm from "@/app/components/auth/RegisterForm";

export default function AuthPage() {
  const [tab, setTab] = useState<"login" | "register">("login");

  return (
    <AuthLayout>
      <div className="w-full max-w-md animate-[fadeUp_0.6s_ease]">
        
        {/* Tabs */}
        <div className="flex bg-[#161513] border border-white/10 rounded-lg p-1 mb-6">
          <button
            onClick={() => setTab("login")}
            className={`flex-1 py-2 text-sm rounded ${
              tab === "login"
                ? "bg-[#f5f2eb] text-black shadow"
                : "text-[#7a7870]"
            }`}
          >
            Sign in
          </button>
          <button
            onClick={() => setTab("register")}
            className={`flex-1 py-2 text-sm rounded ${
              tab === "register"
                ? "bg-[#f5f2eb] text-black shadow"
                : "text-[#7a7870]"
            }`}
          >
            Create account
          </button>
        </div>

        {tab === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </AuthLayout>
  );
}