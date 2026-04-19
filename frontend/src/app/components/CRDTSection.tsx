"use client";

export default function CRDTSection() {
  return (
    <section id="how" className="px-6 lg:px-12 py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT CONTENT */}
      <div>
        <p className="text-[11px] uppercase tracking-widest text-[#d4732a] mb-4">
          Under the hood
        </p>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f5f2eb] mb-6 leading-tight">
          Edits that <span className="italic text-[#d4732a]">never</span> conflict
        </h2>

        <p className="text-[#8a8778] text-[15px] leading-relaxed mb-4">
          Our CRDT engine allows multiple users to edit the same document simultaneously — even offline — while always converging to the same final state.
        </p>

        <p className="text-[#8a8778] text-[14px] leading-relaxed">
          No locks. No overwrites. No “someone else is editing.” Just real collaboration that works.
        </p>
      </div>

      {/* RIGHT VISUAL */}
      <div className="bg-[#161513] border border-white/10 rounded-2xl p-6 sm:p-8">
        
        <p className="text-[10px] uppercase tracking-wider text-white/20 mb-6">
          Live merge simulation
        </p>

        {/* User 1 */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-7 h-7 rounded-full bg-[#F5C4B3] text-[#712B13] text-[10px] flex items-center justify-center font-bold">
            SR
          </div>
          <div className="flex-1 text-[12px] text-white/60 bg-white/5 border border-white/10 rounded-md px-3 py-2">
            …improve user activation by <span className="text-green-300">at least </span>30% this quarter…
          </div>
        </div>

        {/* User 2 */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-7 h-7 rounded-full bg-[#9FE1CB] text-[#085041] text-[10px] flex items-center justify-center font-bold">
            KL
          </div>
          <div className="flex-1 text-[12px] text-white/60 bg-white/5 border border-white/10 rounded-md px-3 py-2">
            …improve user activation by 30% <span className="line-through text-red-300">this quarter</span>
            <span className="text-green-300"> in Q3 2025</span>…
          </div>
        </div>

        {/* Arrow */}
        <div className="text-center text-white/20 text-xl my-2">↓</div>

        {/* Merged */}
        <div className="bg-blue-500/10 border border-blue-400/30 rounded-md px-4 py-3 text-[13px] text-white/80">
          <p className="text-[10px] uppercase text-blue-300 mb-1">
            ✓ Merged — conflict free
          </p>
          …improve user activation by <span className="text-blue-300 font-semibold">at least</span> 30% 
          <span className="text-blue-300 font-semibold"> in Q3 2025</span>…
        </div>

        <p className="text-[10px] text-white/20 mt-4">
          Both edits applied correctly · No data lost · Converged instantly
        </p>
      </div>
    </section>
  );
}