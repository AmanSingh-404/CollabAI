"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center px-12 py-5 border-b border-white/10 backdrop-blur-md bg-[#0e0d0b]/70">
      
      {/* Logo */}
      <div className="font-serif text-[19px] font-bold tracking-tight text-[#f5f2eb]">
        Collab<span className="text-[#d4732a]">AI</span>
      </div>

      {/* Links */}
      <ul className="flex gap-8 ml-12 text-[13px] text-[#8a8778]">
        <li><Link href="#features" className="hover:text-[#f5f2eb]">Features</Link></li>
        <li><Link href="#how" className="hover:text-[#f5f2eb]">How it works</Link></li>
        <li><Link href="#pricing" className="hover:text-[#f5f2eb]">Pricing</Link></li>
        <li><Link href="#" className="hover:text-[#f5f2eb]">Changelog</Link></li>
      </ul>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-4">
        <Link href="#" className="text-[13px] text-[#8a8778] hover:text-[#f5f2eb]">
          Sign in
        </Link>

        <button className="px-5 py-2 rounded-full bg-[#f5f2eb] text-[#0e0d0b] text-[13px] font-medium hover:bg-[#ede9e0] transition">
          Start for free →
        </button>
      </div>
    </nav>
  );
}