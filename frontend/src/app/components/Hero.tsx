"use client";

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[88px] relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px] lg:bg-[size:80px_80px]" />

      {/* LEFT */}
      <div className="px-6 sm:px-10 lg:px-12 py-16 lg:py-20 flex flex-col justify-center relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#d4732a] mb-6 sm:mb-8">
          <div className="w-[6px] h-[6px] rounded-full bg-[#d4732a] animate-pulse" />
          Now in public beta — free for teams
        </div>

        {/* Heading */}
        <h1 className="font-serif font-black tracking-tight text-[#f5f2eb] mb-6 leading-[1.05]
          text-[40px] sm:text-[56px] lg:text-[72px]">
          
          Think <br />
          together. <br />
          <span className="italic text-[#d4732a]">Write</span> <br />
          <span className="stroke-text">smarter.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[#8a8778] text-[14px] sm:text-[16px] lg:text-[17px] max-w-[440px] leading-relaxed mb-8 sm:mb-10">
          A collaborative workspace where real-time editing meets AI — CRDT-powered sync, contextual AI actions, and answers drawn from your own documents.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="px-6 sm:px-8 py-3 rounded-full bg-[#f5f2eb] text-black text-sm font-medium hover:-translate-y-[2px] transition">
            Get started free →
          </button>

          <button className="px-6 sm:px-7 py-3 rounded-full border border-white/20 text-[#8a8778] text-sm hover:text-white hover:border-white/40 transition">
            ▶ See how it works
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 sm:gap-10 mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10">
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold">∞</div>
            <div className="text-xs text-[#8a8778]">Concurrent editors</div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold">0ms</div>
            <div className="text-xs text-[#8a8778]">Conflict resolution</div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold">100%</div>
            <div className="text-xs text-[#8a8778]">Your data, cited</div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="px-6 sm:px-10 lg:px-12 pb-16 lg:py-20 flex items-center relative z-10">
        
        <div className="w-full bg-[#161513] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
          
          {/* Top bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#1a1816]">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-white/30">Product Roadmap Q3</span>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-6">
            <h3 className="font-serif text-base sm:text-lg font-bold text-white/90 mb-4">
              Q3 Product Roadmap
            </h3>

            <p className="text-[11px] sm:text-xs text-white/50 leading-relaxed mb-3">
              Our primary goal is to ship the AI-powered onboarding and improve new user activation by 30%.
            </p>

            <p className="text-[11px] sm:text-xs text-white/50 leading-relaxed mb-3">
              The collaborative editing engine uses a CRDT-based approach ensuring conflict-free updates.
            </p>

            <div className="mt-4 text-[10px] sm:text-[11px] text-blue-300 border border-blue-400/30 inline-flex px-3 py-1 rounded-full">
              AI: Summarize · Rewrite · Extract
            </div>

            <div className="mt-3 text-[9px] sm:text-[10px] text-white/30">
              ● CRDT sync active · 3 users editing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}