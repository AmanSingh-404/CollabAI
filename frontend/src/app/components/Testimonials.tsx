"use client";

const testimonials = [
  {
    text: "We ran a 6-person doc sprint across three time zones. Not a single conflict. The CRDT sync is genuinely magical.",
    name: "Aisha Rahman",
    role: "Head of Product, Stripe",
    avatar: "AR",
    color: "bg-blue-200 text-blue-900",
  },
  {
    text: "The 'answer from workspace' feature cut our internal search time by 70%. It knows our docs better than we do.",
    name: "Diego Morales",
    role: "CTO, Loom",
    avatar: "DM",
    color: "bg-green-200 text-green-900",
  },
  {
    text: "Finally, a Notion alternative that doesn't make me choose between real-time collaboration and AI.",
    name: "Julia Park",
    role: "Engineering Manager, Linear",
    avatar: "JP",
    color: "bg-purple-200 text-purple-900",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 lg:px-12 py-24 max-w-7xl mx-auto">
      
      {/* Heading */}
      <div className="mb-16">
        <p className="text-[11px] uppercase tracking-widest text-[#d4732a] mb-4">
          What teams say
        </p>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f5f2eb] max-w-xl">
          Loved by teams who <span className="italic text-[#d4732a]">move fast</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#161513] border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition"
          >
            {/* Stars */}
            <div className="text-[#d4732a] mb-4">★★★★★</div>

            {/* Text */}
            <p className="text-[#cfcfcf] italic leading-relaxed mb-6">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${t.color}`}>
                {t.avatar}
              </div>

              <div>
                <p className="text-sm text-white font-medium">{t.name}</p>
                <p className="text-xs text-[#8a8778]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}