"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "./AnimationUtils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "Forever, no card required",
    features: [
      "Up to 3 collaborators",
      "10 documents",
      "Real-time sync",
      "Basic AI (50/mo)",
      "Comments & mentions",
    ],
    cta: "Get started →",
    featured: false,
  },
  {
    name: "Pro",
    price: "$18",
    period: "/month per workspace",
    badge: "Most popular",
    features: [
      "Unlimited collaborators",
      "Unlimited documents",
      "Full AI suite",
      "Workspace Q&A + citations",
      "Version history (90 days)",
      "Priority support",
    ],
    cta: "Start free trial →",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Billed annually",
    features: [
      "Everything in Pro",
      "SSO / SAML",
      "Custom AI model",
      "Private cloud / on-prem",
      "SLA + dedicated support",
      "Audit logs",
    ],
    cta: "Talk to sales →",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 lg:px-12 py-28 bg-[#0c0b09] border-t border-white/8 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-[radial-gradient(ellipse,rgba(212,115,42,0.07),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14 sm:mb-16"
        >
          <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-widest text-[#d4732a] mb-4">
            Pricing
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-5xl font-bold text-[#f5f2eb] mb-4">
            Simple, honest <span className="italic text-[#d4732a]">pricing</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#8a8778] text-[15px] max-w-md mx-auto">
            No hidden AI credits. No seat limits. One price per workspace.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={
                plan.featured
                  ? { y: -4, boxShadow: "0 24px 64px rgba(245,242,235,0.12)" }
                  : { y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.4)" }
              }
              transition={{ duration: 0.2 }}
              className={`relative rounded-2xl p-8 border transition-shadow ${
                plan.featured
                  ? "bg-[#f5f2eb] text-black border-[#f5f2eb] shadow-[0_16px_48px_rgba(245,242,235,0.15)] md:scale-[1.03] md:-translate-y-1"
                  : "bg-[#161513] text-white border-white/10"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#d4732a] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Label */}
              <p
                className={`text-xs uppercase tracking-wider mb-3 font-semibold ${
                  plan.featured ? "text-[#d4732a]" : "text-[#8a8778]"
                }`}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-1">
                <span className="font-serif text-4xl font-black">{plan.price}</span>
              </div>
              <p className={`text-sm mb-7 ${plan.featured ? "opacity-60" : "opacity-50"}`}>
                {plan.period}
              </p>

              {/* Divider */}
              <div className={`w-full h-px mb-7 ${plan.featured ? "bg-black/10" : "bg-white/8"}`} />

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 text-sm">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 font-bold flex-shrink-0 ${
                        plan.featured ? "text-[#d4732a]" : "text-green-400"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={plan.featured ? "text-black/75" : "text-white/70"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className={`w-full py-3 rounded-full text-sm font-semibold transition-all ${
                  plan.featured
                    ? "bg-black text-white hover:bg-[#1a1916]"
                    : "border border-white/15 text-white hover:border-white/35 hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-[#8a8778] text-xs mt-10"
        >
          All plans include 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}