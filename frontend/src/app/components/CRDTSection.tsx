"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from "./AnimationUtils";

export default function CRDTSection() {
  return (
    <section
      id="how"
      className="relative px-6 lg:px-12 py-28 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,115,42,0.05),transparent_65%)]" />

      {/* LEFT CONTENT */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-widest text-[#d4732a] mb-4">
          Under the hood
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-serif text-3xl sm:text-5xl font-bold text-[#f5f2eb] mb-6 leading-tight"
        >
          Edits that{" "}
          <span className="italic text-[#d4732a]">never</span> conflict
        </motion.h2>

        <motion.p variants={fadeUp} className="text-[#8a8778] text-[15px] leading-relaxed mb-4">
          Our CRDT engine allows multiple users to edit the same document simultaneously — even
          offline — while always converging to the same final state.
        </motion.p>

        <motion.p variants={fadeUp} className="text-[#8a8778] text-[14px] leading-relaxed">
          No locks. No overwrites. No "someone else is editing." Just real collaboration that
          works.
        </motion.p>

        {/* Tech pills */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-8">
          {["Yjs CRDTs", "WebSockets", "Offline-first", "Auto-merge"].map((pill) => (
            <span
              key={pill}
              className="text-[11px] text-[#8a8778] border border-white/10 px-3 py-1 rounded-full hover:border-white/25 hover:text-white/70 transition-all duration-200"
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT VISUAL */}
      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative"
      >
        {/* Outer glow ring */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#d4732a]/20 via-transparent to-blue-500/10 pointer-events-none" />

        <div className="bg-[#161513] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(212,115,42,0.08),transparent_70%)] pointer-events-none" />

          <p className="text-[10px] uppercase tracking-wider text-white/25 mb-6 font-mono">
            Live merge simulation
          </p>

          {/* User 1 */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={viewportOnce}
            className="flex items-start gap-3 mb-4"
          >
            <div className="w-7 h-7 rounded-full bg-[#F5C4B3] text-[#712B13] text-[10px] flex items-center justify-center font-bold flex-shrink-0">
              SR
            </div>
            <div className="flex-1 text-[12px] text-white/60 bg-white/5 border border-white/10 rounded-lg px-3 py-2 leading-relaxed">
              …improve user activation by{" "}
              <span className="text-green-300">at least </span>30% this quarter…
            </div>
          </motion.div>

          {/* User 2 */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, duration: 0.4 }}
            viewport={viewportOnce}
            className="flex items-start gap-3 mb-4"
          >
            <div className="w-7 h-7 rounded-full bg-[#9FE1CB] text-[#085041] text-[10px] flex items-center justify-center font-bold flex-shrink-0">
              KL
            </div>
            <div className="flex-1 text-[12px] text-white/60 bg-white/5 border border-white/10 rounded-lg px-3 py-2 leading-relaxed">
              …improve user activation by 30%{" "}
              <span className="line-through text-red-300/70">this quarter</span>{" "}
              <span className="text-green-300">in Q3 2025</span>…
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            viewport={viewportOnce}
            className="text-center text-white/20 text-lg my-3"
          >
            ↓
          </motion.div>

          {/* Merged */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.45 }}
            viewport={viewportOnce}
            className="bg-blue-500/8 border border-blue-400/25 rounded-xl px-4 py-3 text-[13px] text-white/80 shadow-[inset_0_1px_0_rgba(96,165,250,0.1)]"
          >
            <p className="text-[10px] uppercase text-blue-300/80 mb-1.5 tracking-wider font-medium">
              ✓ Merged — conflict free
            </p>
            …improve user activation by{" "}
            <span className="text-blue-300 font-semibold">at least</span> 30%{" "}
            <span className="text-blue-300 font-semibold">in Q3 2025</span>…
          </motion.div>

          <p className="text-[10px] text-white/20 mt-4 font-mono">
            Both edits applied · No data lost · Converged instantly
          </p>
        </div>
      </motion.div>
    </section>
  );
}