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

          {/* Preview Card */}
          <div className="bg-black border border-white/10 rounded-xl p-5 shadow-2xl max-w-md">
            <p className="text-sm mb-2">Q3 Product Roadmap</p>
            <div className="h-2 bg-white/10 rounded mb-2"></div>
            <div className="h-2 bg-[#d4732a]/30 rounded w-3/4 mb-2"></div>
            <div className="h-2 bg-white/10 rounded w-2/3"></div>
          </div>
        </div>

        <div className="relative z-10 flex gap-3 text-xs text-[#7a7870]">
          <span>⚡ CRDT Sync</span>
          <span>✦ AI Actions</span>
          <span>◎ Workspace Q&A</span>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex items-center justify-center px-6 py-10 overflow-y-auto relative">
        {children}
      </div>
    </div>
  );
}