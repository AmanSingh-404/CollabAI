"use client";

export default function CTASection() {
  return (
    <section className="relative px-6 lg:px-12 py-28 text-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(42,125,212,0.12),transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Label */}
        <p className="text-[11px] uppercase tracking-widest text-[#d4732a] mb-4">
          Get started today
        </p>

        {/* Heading */}
        <h2 className="font-serif text-4xl sm:text-6xl font-black text-[#f5f2eb] leading-tight mb-6">
          Your team’s ideas <br />
          deserve better than <span className="italic text-[#d4732a]">tabs.</span>
        </h2>

        {/* Subtext */}
        <p className="text-[#8a8778] text-[16px] leading-relaxed mb-10">
          Real-time collaboration that actually works. AI that understands your workspace.  
          Start free — no credit card required.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          <button className="px-8 py-4 rounded-full bg-[#f5f2eb] text-black text-sm font-medium hover:-translate-y-1 transition">
            Start writing for free →
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 text-[#8a8778] text-sm hover:text-white hover:border-white/40 transition">
            Schedule a demo
          </button>
        </div>
      </div>
    </section>
  );
}