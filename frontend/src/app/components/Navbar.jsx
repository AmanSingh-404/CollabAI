"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Changelog", href: "#" },
];

const menuItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
  }),
  exit: { opacity: 0, x: -8, transition: { duration: 0.2 } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -8, scaleY: 0.96, originY: 0 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -6,
    scaleY: 0.97,
    transition: { duration: 0.22, ease: "easeIn" },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center px-6 lg:px-12 py-4 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 backdrop-blur-xl bg-[#0e0d0b]/90 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
          : "border-b border-white/5 backdrop-blur-md bg-[#0e0d0b]/70"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="font-serif text-[18px] font-bold text-[#f5f2eb] select-none"
        >
          Collab<span className="text-[#d4732a]">AI</span>
        </motion.div>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-8 ml-12 text-[13px] text-[#8a8778]">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="relative py-1 hover:text-white transition-colors duration-200 group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#d4732a] group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Right */}
      <div className="hidden lg:flex ml-auto items-center gap-4">
        <Link
          href="#"
          className="text-[13px] text-[#8a8778] hover:text-white transition-colors duration-200"
        >
          Sign in
        </Link>
        <motion.button
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="px-5 py-2 rounded-full bg-[#f5f2eb] text-black text-[13px] font-medium hover:bg-white transition-colors duration-200 shadow-[0_2px_12px_rgba(245,242,235,0.18)]"
        >
          Start for free →
        </motion.button>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="ml-auto lg:hidden flex flex-col gap-[5px] p-1.5 rounded-md hover:bg-white/5 transition"
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
          transition={{ duration: 0.22 }}
          className="block w-5 h-[2px] bg-[#f5f2eb] rounded-full origin-center"
        />
        <motion.span
          animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
          transition={{ duration: 0.18 }}
          className="block w-5 h-[2px] bg-[#f5f2eb] rounded-full"
        />
        <motion.span
          animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
          transition={{ duration: 0.22 }}
          className="block w-5 h-[2px] bg-[#f5f2eb] rounded-full origin-center"
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 w-full bg-[#0e0d0b]/98 backdrop-blur-xl border-b border-white/10 flex flex-col px-6 py-6 gap-1 lg:hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.div key={label} custom={i} variants={menuItemVariants} initial="hidden" animate="visible" exit="exit">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[15px] text-[#8a8778] hover:text-white transition-colors border-b border-white/5"
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              custom={navLinks.length}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="pt-4 flex flex-col gap-3 mt-2"
            >
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="text-[14px] text-[#8a8778] hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-3 rounded-full bg-[#f5f2eb] text-black text-sm font-medium hover:bg-white transition-colors w-full"
              >
                Start for free →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}