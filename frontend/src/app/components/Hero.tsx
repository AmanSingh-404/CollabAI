"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./AnimationUtils";

const statItems = [
  { value: "∞", label: "Concurrent editors" },
  { value: "0ms", label: "Conflict resolution" },
  { value: "100%", label: "Your data, cited" },
];

const floatVariant = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[80px] relative overflow-hidden bg-[#0e0d0b]">

      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:60px_60px] lg:bg-[size:80px_80px]" />

      {/* Radial glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,115,42,0.1),transparent_65%)] pointer-events-none" />
      {/* Radial glow left */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[500px] bg-[radial-gradient(ellipse_at_left,rgba(42,125,212,0.07),transparent_70%)] pointer-events-none" />

      {/* LEFT */}
      <motion.div
        variants={staggerContainer(0.1, 0.15)}
        initial="hidden"
        animate="visible"
        className="px-6 sm:px-10 lg:px-16 py-16 lg:py-24 flex flex-col justify-center relative z-10"
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-2.5 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#d4732a] mb-7 sm:mb-8"
        >
          <span className="w-[7px] h-[7px] rounded-full bg-[#d4732a] animate-pulse shadow-[0_0_8px_rgba(212,115,42,0.6)]" />
          Now in public beta — free for teams
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={staggerContainer(0.08, 0)}
          className="font-serif font-black tracking-tight text-[#f5f2eb] mb-6 leading-[1.04]
            text-[44px] sm:text-[58px] lg:text-[74px]"
        >
          {["Think", "together.", "Write", "smarter."].map((word, i) => (
            <motion.span
              key={i}
              variants={fadeUp}
              className={`block ${
                word === "Write"
                  ? "italic text-[#d4732a]"
                  : word === "smarter."
                  ? "stroke-text"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="text-[#8a8778] text-[14px] sm:text-[16px] lg:text-[17px] max-w-[440px] leading-relaxed mb-8 sm:mb-10"
        >
          A collaborative workspace where real-time editing meets AI — CRDT-powered sync,
          contextual AI actions, and answers drawn from your own documents.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.04, y: -2, boxShadow: "0 8px 28px rgba(245,242,235,0.22)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="px-7 sm:px-8 py-3.5 rounded-full bg-[#f5f2eb] text-black text-sm font-medium transition-shadow"
          >
            Get started free →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="px-6 sm:px-7 py-3.5 rounded-full border border-white/20 text-[#8a8778] text-sm transition-all"
          >
            ▶ See how it works
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer(0.1, 0.3)}
          className="flex flex-wrap gap-6 sm:gap-10 mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10"
        >
          {statItems.map(({ value, label }) => (
            <motion.div key={label} variants={fadeUp}>
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#f5f2eb]">{value}</div>
              <div className="text-xs text-[#8a8778] mt-0.5">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT — Floating Mockup */}
      <div className="px-6 sm:px-10 lg:px-12 pb-16 lg:py-24 flex items-center relative z-10">
        <motion.div
          variants={floatVariant}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full bg-[#161513]/90 border border-white/10 rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.55)] overflow-hidden backdrop-blur-sm"
          >
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#1a1816]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              <span className="ml-2 text-xs text-white/30 font-mono">Product Roadmap Q3</span>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-7">
              <h3 className="font-serif text-base sm:text-lg font-bold text-white/90 mb-4">
                Q3 Product Roadmap
              </h3>

              <p className="text-[11px] sm:text-xs text-white/50 leading-relaxed mb-3">
                Our primary goal is to ship the AI-powered onboarding and improve new user
                activation by 30%.
              </p>

              <p className="text-[11px] sm:text-xs text-white/50 leading-relaxed mb-4">
                The collaborative editing engine uses a CRDT-based approach ensuring
                conflict-free updates.
              </p>

              {/* Live presence bar */}
              <div className="flex items-center gap-2 mb-4">
                {["#F5C4B3", "#9FE1CB", "#B3C4F5"].map((color, i) => (
                  <div
                    key={i}
                    style={{ background: color }}
                    className="w-6 h-6 rounded-full border-2 border-[#161513] -ml-1 first:ml-0 text-[8px] flex items-center justify-center text-black font-bold"
                  >
                    {["S","K","J"][i]}
                  </div>
                ))}
                <span className="text-[10px] text-white/30 ml-1">3 editing now</span>
              </div>

              <div className="text-[10px] sm:text-[11px] text-blue-300 border border-blue-400/30 inline-flex px-3 py-1.5 rounded-full bg-blue-500/5">
                AI: Summarize · Rewrite · Extract
              </div>

              <div className="mt-3 text-[9px] sm:text-[10px] text-white/25 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                CRDT sync active · conflict-free
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}