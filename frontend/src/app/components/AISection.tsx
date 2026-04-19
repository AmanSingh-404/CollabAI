"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from "./AnimationUtils";

const aiFeatures = [
  "Summarize any document or section",
  "Rewrite content for clarity or tone",
  "Answer questions with citations",
  "Extract action items automatically",
  "Translate while preserving formatting",
];

export default function AISection() {
  return (
    <section className="px-6 lg:px-12 py-28 bg-gradient-to-br from-[#0d1a2e] via-[#0e101a] to-[#0e0d0b] border-y border-white/8 relative overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[radial-gradient(ellipse,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[radial-gradient(ellipse,rgba(212,115,42,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Chat UI */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative group"
        >
          {/* Outer glow border */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/25 via-transparent to-blue-400/10 pointer-events-none" />

          <div className="bg-[#0d1622]/90 border border-blue-400/15 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(59,130,246,0.1)] backdrop-blur-sm">

            {/* Header */}
            <div className="flex items-center gap-2.5 px-5 py-4 border-b border-blue-400/15 bg-blue-500/5">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
              <span className="text-sm text-blue-300 font-medium">
                AI Assistant — Q3 Roadmap
              </span>
              <span className="ml-auto text-[10px] text-blue-400/50 font-mono">RAG · Active</span>
            </div>

            {/* Messages */}
            <div className="p-5 flex flex-col gap-4 text-sm">

              {/* User message */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                viewport={viewportOnce}
                className="self-end bg-white/8 text-white/60 px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%]"
              >
                What are the infra goals this quarter and who owns them?
              </motion.div>

              {/* AI response */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                viewport={viewportOnce}
                className="bg-blue-500/10 text-blue-100/90 px-4 py-3 rounded-2xl rounded-tl-sm border border-blue-400/15"
              >
                The Q3 infra goals include provisioning EU-West and AP-Southeast regions, and
                migrating batch jobs to serverless to save costs.{" "}
                <span className="ml-1 text-[10px] bg-blue-400/20 border border-blue-400/30 px-1.5 py-0.5 rounded-md font-mono">
                  Roadmap §Infra
                </span>
              </motion.div>

              {/* User message */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={viewportOnce}
                className="self-end bg-white/8 text-white/60 px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%]"
              >
                Summarize strategy in 2 lines
              </motion.div>

              {/* AI response */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55, duration: 0.45 }}
                viewport={viewportOnce}
                className="bg-blue-500/10 text-blue-100/90 px-4 py-3 rounded-2xl rounded-tl-sm border border-blue-400/15"
              >
                Q3 focuses on AI onboarding to boost activation by 30% and reducing costs via
                serverless migration, with rollout planned over 8 weeks.{" "}
                <span className="ml-1 text-[10px] bg-blue-400/20 border border-blue-400/30 px-1.5 py-0.5 rounded-md font-mono">
                  Roadmap §Strategy
                </span>
              </motion.div>

              {/* Input bar */}
              <div className="mt-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <span className="text-white/20 text-xs flex-1">Ask anything about your workspace…</span>
                <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center">
                  <span className="text-blue-300 text-[10px]">↑</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-widest text-blue-400 mb-4">
            AI layer
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-5xl font-bold text-[#f5f2eb] mb-6 leading-tight"
          >
            Your workspace is the{" "}
            <span className="italic text-[#d4732a]">context</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[#8a8778] text-[15px] leading-relaxed mb-8">
            The AI understands your documents, not just generic knowledge. Ask questions, get answers
            with citations, and take actions instantly.
          </motion.p>

          {/* Features List */}
          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            className="flex flex-col gap-3"
          >
            {aiFeatures.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-3 text-sm text-[#8a8778] group"
              >
                <span className="w-5 h-5 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-green-400/20 transition-colors">
                  <span className="text-green-400 text-[10px] font-bold">✓</span>
                </span>
                <span className="group-hover:text-[#cfcfcf] transition-colors duration-200">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}