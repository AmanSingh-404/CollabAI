"use client";

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
    <section id="pricing" className="px-6 lg:px-12 py-24 bg-[#0c0b09] border-t border-white/10">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <p className="text-[11px] uppercase tracking-widest text-[#d4732a] mb-4">
          Pricing
        </p>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f5f2eb] mb-3">
          Simple, honest <span className="italic text-[#d4732a]">pricing</span>
        </h2>

        <p className="text-[#8a8778] text-[15px] mb-12">
          No hidden AI credits. No seat limits. One price per workspace.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border transition ${
                plan.featured
                  ? "bg-[#f5f2eb] text-black border-[#f5f2eb] shadow-2xl scale-[1.03]"
                  : "bg-[#161513] text-white border-white/10 hover:-translate-y-1"
              }`}
            >
              
              {/* Label */}
              <p className={`text-xs uppercase tracking-wider mb-3 ${
                plan.featured ? "text-[#d4732a]" : "text-[#8a8778]"
              }`}>
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-2">
                <span className="font-serif text-4xl font-bold">
                  {plan.price}
                </span>
              </div>

              <p className="text-sm mb-6 opacity-70">{plan.period}</p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-6 text-sm">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className={`font-bold ${
                      plan.featured ? "text-[#d4732a]" : "text-green-400"
                    }`}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-full text-sm font-medium transition ${
                  plan.featured
                    ? "bg-black text-white hover:bg-[#1a1916]"
                    : "border border-white/20 text-white hover:border-white/40"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}