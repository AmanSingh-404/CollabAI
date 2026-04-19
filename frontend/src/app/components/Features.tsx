"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "./AnimationUtils";

const features = [
  {
    title: "CRDT-Powered Sync",
    desc: "Concurrent edits from any number of users converge correctly — no merge conflicts, no overwritten work.",
    tag: "Yjs · WebSockets",
    icon: "⚡",
    glow: "rgba(250,204,21,0.12)",
  },
  {
    title: "Contextual AI Actions",
    desc: "Select any text to summon AI — summarize, rewrite, translate, or expand content instantly.",
    tag: "Claude · GPT",
    icon: "✦",
    glow: "rgba(168,85,247,0.12)",
  },
  {
    title: "Workspace Q&A",
    desc: "Ask anything and get answers grounded in your documents with inline citations.",
    tag: "RAG · Vector DB",
    icon: "◎",
    glow: "rgba(59,130,246,0.12)",
  },
  {
    title: "Mentions & Comments",
    desc: "Collaborate with inline discussions and @mentions directly on text.",
    tag: "Threaded",
    icon: "@",
    glow: "rgba(34,197,94,0.12)",
  },
  {
    title: "Live Presence",
    desc: "See who's editing in real time with cursors and awareness indicators.",
    tag: "Realtime",
    icon: "👁",
    glow: "rgba(251,146,60,0.12)",
  },
  {
    title: "Granular Permissions",
    desc: "Control access at workspace, doc, or section level with roles.",
    tag: "RBAC · SSO",
    icon: "🔒",
    glow: "rgba(239,68,68,0.10)",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 lg:px-12 py-28 max-w-7xl mx-auto">

      {/* Heading */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mb-16 sm:mb-20"
      >
        <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-widest text-[#d4732a] mb-4">
          Core capabilities
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-serif text-3xl sm:text-5xl font-bold text-[#f5f2eb] max-w-xl leading-tight"
        >
          Everything your team needs to{" "}
          <span className="italic text-[#d4732a]">create together</span>
        </motion.h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/8 rounded-2xl overflow-hidden border border-white/10"
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            whileHover={{
              scale: 1.025,
              zIndex: 10,
              boxShadow: `0 8px 40px ${item.glow}`,
            }}
            transition={{ duration: 0.2 }}
            className="relative bg-[#161513] p-8 hover:bg-[#1b1916] transition-colors duration-300 group cursor-default"
          >
            {/* Hover glow overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm"
              style={{
                background: `radial-gradient(ellipse at top left, ${item.glow}, transparent 70%)`,
              }}
            />

            {/* Icon */}
            <div className="relative w-11 h-11 flex items-center justify-center rounded-xl mb-6 text-xl border border-white/10 bg-white/5 group-hover:border-white/20 transition-colors duration-300">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="relative font-serif text-lg font-semibold text-white mb-2 group-hover:text-[#f5f2eb] transition-colors">
              {item.title}
            </h3>

            {/* Desc */}
            <p className="relative text-sm text-[#8a8778] leading-relaxed mb-5">
              {item.desc}
            </p>

            {/* Tag */}
            <span className="relative text-[10px] uppercase tracking-wider text-white/30 border border-white/10 px-3 py-1 rounded-full group-hover:text-white/50 group-hover:border-white/20 transition-all duration-300">
              {item.tag}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}