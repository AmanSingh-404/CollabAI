// components/auth/AuthLayout.tsx
"use client";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-[#0e0d0b] text-[#f5f2eb] overflow-hidden">
      
      {/* LEFT PANEL */}
      <div className="hidden lg:flex flex-col justify-between p-10 bg-[#161513] border-r border-white/10 relative">
        
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10">
          <h1 className="font-serif text-lg font-bold">
            Collab<span className="text-[#d4732a]">AI</span> Docs
          </h1>
        </div>

        <div className="relative z-10">
          <h2 className="font-serif text-4xl font-black leading-tight mb-4">
            Where teams <br />
            <span className="italic text-[#d4732a]">think</span> and <br />
            write together.
          </h2>

          <p className="text-sm text-[#7a7870] mb-6 max-w-sm">
            Real-time collaboration powered by CRDT sync and contextual AI.
          </p>

          {/* Preview Card Mockup */}
          <div className="bg-[#0e0d0b] border border-white/10 rounded-xl shadow-2xl max-w-md overflow-hidden font-sans">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#12110f]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f87171]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#facc15]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80]"></div>
                </div>
                <span className="text-xs text-[#7a7870] font-medium ml-2">Q3 Product Roadmap</span>
              </div>
              <div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full bg-[#fca5a5] border-2 border-[#12110f] flex items-center justify-center text-[8px] text-black font-bold z-10">SR</div>
                <div className="w-6 h-6 rounded-full bg-[#86efac] border-2 border-[#12110f] flex items-center justify-center text-[8px] text-black font-bold z-0">KL</div>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-5 flex flex-col gap-4">
              <h3 className="font-serif text-lg font-bold text-white mb-1">Q3 Product Roadmap</h3>
              
              {/* Skeleton lines */}
              <div className="flex flex-col gap-2.5">
                <div className="h-2 bg-white/10 rounded w-full"></div>
                <div className="h-2 bg-[#d4732a]/40 rounded w-[85%]"></div>
                <div className="h-2 bg-white/10 rounded w-[60%] relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3 bg-[#d4732a] shadow-[0_0_8px_#d4732a]"></div>
                </div>
                <div className="h-2 bg-white/10 rounded w-[75%]"></div>
                <div className="h-2 bg-white/10 rounded w-full"></div>
              </div>

              {/* Blue Highlight Line */}
              <div className="mt-2 bg-[#1e293b]/50 border border-blue-500/20 rounded-lg p-2.5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span className="text-xs text-blue-400 font-medium select-none truncate">AI: Summarizing selected section...</span>
              </div>

              {/* Footer status */}
              <div className="mt-1 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e]"></div>
                <span className="text-[10px] text-[#7a7870]">CRDT sync active · 2 users editing · Saved</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex gap-3 text-xs text-[#7a7870] font-medium pt-8">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#0e0d0b]/80 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <span>CRDT Sync</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#0e0d0b]/80 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4732a]"></div>
            <span>AI Actions</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#0e0d0b]/80 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span>Workspace Q&A</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex items-center justify-center px-6 py-10 overflow-y-auto relative">
        {children}
      </div>
    </div>
  );
}