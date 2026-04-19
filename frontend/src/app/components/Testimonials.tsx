"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "./AnimationUtils";

const testimonials = [
  {
    text: "We ran a 6-person doc sprint across three time zones. Not a single conflict. The CRDT sync is genuinely magical.",
    name: "Aisha Rahman",
    role: "Head of Product, Stripe",
    avatar: "AR",
    color: "bg-blue-200 text-blue-900",
    accentGlow: "rgba(59,130,246,0.1)",
    stars: 5,
  },
  {
    text: "The 'answer from workspace' feature cut our internal search time by 70%. It knows our docs better than we do.",
    name: "Diego Morales",
    role: "CTO, Loom",
    avatar: "DM",
    color: "bg-green-200 text-green-900",
    accentGlow: "rgba(34,197,94,0.1)",
    stars: 5,
  },
  {
    text: "Finally, a Notion alternative that doesn't make me choose between real-time collaboration and AI.",
    name: "Julia Park",
    role: "Engineering Manager, Linear",
    avatar: "JP",
    color: "bg-purple-200 text-purple-900",
    accentGlow: "rgba(168,85,247,0.1)",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 lg:px-12 py-28 max-w-7xl mx-auto">

      {/* Heading */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mb-16 sm:mb-20"
      >
        <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-widest text-[#d4732a] mb-4">
          What teams say
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-serif text-3xl sm:text-5xl font-bold text-[#f5f2eb] max-w-xl leading-tight"
        >
          Loved by teams who{" "}
          <span className="italic text-[#d4732a]">move fast</span>
        </motion.h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            whileHover={{
              y: -6,
              boxShadow: `0 20px 48px ${t.accentGlow}`,
            }}
            transition={{ duration: 0.22 }}
            className="relative bg-[#161513] border border-white/10 rounded-2xl p-7 flex flex-col group overflow-hidden"
          >
            {/* Hover background glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at top left, ${t.accentGlow}, transparent 65%)`,
              }}
            />

            {/* Stars */}
            <div className="relative flex gap-0.5 mb-4">
              {Array.from({ length: t.stars }).map((_, si) => (
                <span key={si} className="text-[#d4732a] text-sm">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="relative text-[#cfcfcf] text-[15px] leading-relaxed mb-7 flex-1">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="relative flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${t.color}`}
              >
                {t.avatar}
              </div>
              <div>
                <p className="text-sm text-white font-semibold">{t.name}</p>
                <p className="text-xs text-[#8a8778] mt-0.5">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Social proof bar */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-30"
      >
        {["Stripe", "Linear", "Loom", "Vercel", "Notion"].map((brand) => (
          <span key={brand} className="text-[#f5f2eb] font-semibold text-sm tracking-wide uppercase">
            {brand}
          </span>
        ))}
      </motion.div>
    </section>
  );
}