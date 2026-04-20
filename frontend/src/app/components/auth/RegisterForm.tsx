// components/auth/RegisterForm.tsx
"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [pw, setPw] = useState("");

  const strength = pw.length > 10 ? "strong" : pw.length > 6 ? "medium" : "weak";

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-2">
        Create your account
      </h2>

      <p className="text-sm text-[#7a7870] mb-6">
        Already have one? Sign in →
      </p>

      {/* Inputs */}
      <div className="space-y-4">
        
        <div className="grid grid-cols-2 gap-3">
          <input placeholder="First name" className="p-3 bg-[#161513] border border-white/10 rounded" />
          <input placeholder="Last name" className="p-3 bg-[#161513] border border-white/10 rounded" />
        </div>

        <input placeholder="Email" className="p-3 bg-[#161513] border border-white/10 rounded" />

        <input placeholder="Workspace" className="p-3 bg-[#161513] border border-white/10 rounded" />

        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
            className="p-3 bg-[#161513] border border-white/10 rounded w-full"
          />

          {/* Strength */}
          <div className="flex gap-1 mt-2">
            <div className={`h-1 flex-1 ${strength !== "weak" ? "bg-green-500" : "bg-white/10"}`} />
            <div className={`h-1 flex-1 ${strength === "strong" ? "bg-green-500" : "bg-white/10"}`} />
          </div>
        </div>

        <button className="w-full py-3 rounded-full bg-[#f5f2eb] text-black">
          Create account →
        </button>
      </div>
    </div>
  );
}