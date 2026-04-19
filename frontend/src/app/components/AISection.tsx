"use client";

export default function AISection() {
  return (
    <section className="px-6 lg:px-12 py-24 bg-gradient-to-br from-[#0d1a2e] to-[#0e0d0b] border-y border-white/10">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Chat UI */}
        <div className="bg-[#0d1622] border border-blue-400/20 rounded-2xl overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center gap-2 px-5 py-4 border-b border-blue-400/20 bg-blue-500/5">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm text-blue-300 font-medium">
              AI Assistant — Q3 Roadmap
            </span>
          </div>

          {/* Messages */}
          <div className="p-5 flex flex-col gap-4 text-sm">
            
            {/* User */}
            <div className="self-end bg-white/5 text-white/60 px-4 py-2 rounded-lg max-w-[85%]">
              What are the infra goals this quarter and who owns them?
            </div>

            {/* AI */}
            <div className="bg-blue-500/10 text-blue-100 px-4 py-3 rounded-lg">
              The Q3 infra goals include provisioning EU-West and AP-Southeast regions, and migrating batch jobs to serverless to save costs.
              <span className="ml-1 text-[10px] bg-blue-400/20 px-1 rounded">Roadmap §Infra</span>
            </div>

            {/* User */}
            <div className="self-end bg-white/5 text-white/60 px-4 py-2 rounded-lg max-w-[85%]">
              Summarize strategy in 2 lines
            </div>

            {/* AI */}
            <div className="bg-blue-500/10 text-blue-100 px-4 py-3 rounded-lg">
              Q3 focuses on AI onboarding to boost activation by 30% and reducing costs via serverless migration, with rollout planned over 8 weeks.
              <span className="ml-1 text-[10px] bg-blue-400/20 px-1 rounded">Roadmap §Strategy</span>
            </div>

          </div>
        </div>

        {/* RIGHT: Content */}
        <div>
          <p className="text-[11px] uppercase tracking-widest text-blue-400 mb-4">
            AI layer
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f5f2eb] mb-6 leading-tight">
            Your workspace is the <span className="italic text-[#d4732a]">context</span>
          </h2>

          <p className="text-[#8a8778] text-[15px] leading-relaxed mb-6">
            The AI understands your documents, not just generic knowledge. Ask questions, get answers with citations, and take actions instantly.
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-4 text-sm text-[#8a8778]">
            
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Summarize any document or section
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Rewrite content for clarity or tone
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Answer questions with citations
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Extract action items automatically
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Translate while preserving formatting
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}