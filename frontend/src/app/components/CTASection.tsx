"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "./AnimationUtils";

export default function CTASection() {
  return (
    <section className="relative px-6 lg:px-12 py-32 sm:py-40 text-center overflow-hidden border-t border-white/8">

      {/* Multi-layer background glows */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(42,125,212,0.12),transparent_65%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_80%_20%,rgba(212,115,42,0.08),transparent_55%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_20%_80%,rgba(168,85,247,0.06),transparent_55%)]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-60" />

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-3xl mx-auto"
      >

        {/* Label */}
        <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-widest text-[#d4732a] mb-5">
          Get started today
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[#f5f2eb] leading-[1.02] mb-7"
        >
          Your team's ideas <br />
          deserve better than{" "}
          <span className="italic text-[#d4732a]">tabs.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p variants={fadeUp} className="text-[#8a8778] text-[16px] leading-relaxed mb-12 max-w-xl mx-auto">
          Real-time collaboration that actually works. AI that understands your workspace.
          Start free — no credit card required.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 12px 40px rgba(245,242,235,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="px-8 py-4 rounded-full bg-[#f5f2eb] text-black text-sm font-semibold transition-shadow"
          >
            Start writing for free →
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.03,
              borderColor: "rgba(255,255,255,0.4)",
              color: "#fff",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="px-8 py-4 rounded-full border border-white/20 text-[#8a8778] text-sm font-medium transition-all"
          >
            Schedule a demo
          </motion.button>
        </motion.div>

        {/* Trust note */}
        <motion.p variants={fadeUp} className="mt-8 text-[#8a8778] text-xs">
          Trusted by teams at Stripe, Linear, Loom, and 3,000+ others.
        </motion.p>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}