// components/auth/LoginForm.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.includes("@")) return "Invalid email";
    if (!pw) return "Password required";
    return "";
  };

  const handleLogin = () => {
    const err = validate();
    if (err) return setError(err);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Logged in!");
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-2">Welcome back</h2>
      <p className="text-sm text-[#7a7870] mb-6">
        New here? <Link href="/register" className="text-[#d4732a] hover:underline">Create account →</Link>
      </p>

      {/* OAuth */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button className="p-3 border border-white/10 rounded bg-[#161513] hover:bg-[#1e1c19]">
          Google
        </button>
        <button className="p-3 border border-white/10 rounded bg-[#161513] hover:bg-[#1e1c19]">
          GitHub
        </button>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full p-3 rounded bg-[#161513] border border-white/10 focus:border-[#d4732a]"
        />

        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Password"
          className="w-full p-3 rounded bg-[#161513] border border-white/10"
        />

        {error && <p className="text-red-400 text-xs">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-full bg-[#f5f2eb] text-black font-medium hover:-translate-y-1 transition"
        >
          {loading ? "Signing in..." : "Sign in →"}
        </button>
      </div>
    </div>
  );
}