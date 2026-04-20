import Link from "next/link";
import AuthLayout from "@/app/components/auth/AuthLayout";
import LoginForm from "@/app/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md animate-[fadeUp_0.6s_ease]">
        
        {/* Tabs */}
        <div className="flex bg-[#161513] border border-white/10 rounded-lg p-1 mb-6">
          <Link
            href="/login"
            className="flex-1 py-2 text-center text-sm rounded bg-[#f5f2eb] text-black shadow block"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="flex-1 py-2 text-center text-sm rounded text-[#7a7870] hover:bg-white/5 transition-colors block"
          >
            Create account
          </Link>
        </div>

        <LoginForm />
      </div>
    </AuthLayout>
  );
}
