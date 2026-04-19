"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center px-6 lg:px-12 py-5 border-b border-white/10 backdrop-blur-md bg-[#0e0d0b]/70">
      
      {/* Logo */}
      <div className="font-serif text-[18px] font-bold text-[#f5f2eb]">
        Collab<span className="text-[#d4732a]">AI</span> Docs
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-8 ml-12 text-[13px] text-[#8a8778]">
        <li><Link href="#features" className="hover:text-white">Features</Link></li>
        <li><Link href="#how" className="hover:text-white">How it works</Link></li>
        <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
        <li><Link href="#">Changelog</Link></li>
      </ul>

      {/* Desktop Right */}
      <div className="hidden lg:flex ml-auto items-center gap-4">
        <Link href="#" className="text-[13px] text-[#8a8778] hover:text-white">
          Sign in
        </Link>
        <button className="px-5 py-2 rounded-full bg-[#f5f2eb] text-black text-[13px] font-medium hover:bg-[#ede9e0] transition">
          Start for free →
        </button>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="ml-auto lg:hidden flex flex-col gap-1"
      >
        <span className="w-5 h-[2px] bg-white"></span>
        <span className="w-5 h-[2px] bg-white"></span>
        <span className="w-5 h-[2px] bg-white"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#0e0d0b] border-b border-white/10 flex flex-col px-6 py-6 gap-6 lg:hidden">
          
          <Link href="#features" onClick={() => setOpen(false)}>Features</Link>
          <Link href="#how" onClick={() => setOpen(false)}>How it works</Link>
          <Link href="#pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="#" onClick={() => setOpen(false)}>Changelog</Link>

          <div className="border-t border-white/10 pt-4 flex flex-col gap-4">
            <Link href="#" onClick={() => setOpen(false)}>
              Sign in
            </Link>
            <button className="px-5 py-3 rounded-full bg-[#f5f2eb] text-black text-sm font-medium">
              Start for free →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}