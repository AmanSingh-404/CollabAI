"use client";

const features = [
  {
    title: "CRDT-Powered Sync",
    desc: "Concurrent edits from any number of users converge correctly — no merge conflicts, no overwritten work.",
    tag: "Yjs · WebSockets",
    icon: "⚡",
  },
  {
    title: "Contextual AI Actions",
    desc: "Select any text to summon AI — summarize, rewrite, translate, or expand content instantly.",
    tag: "Claude · GPT",
    icon: "✦",
  },
  {
    title: "Workspace Q&A",
    desc: "Ask anything and get answers grounded in your documents with inline citations.",
    tag: "RAG · Vector DB",
    icon: "◎",
  },
  {
    title: "Mentions & Comments",
    desc: "Collaborate with inline discussions and @mentions directly on text.",
    tag: "Threaded",
    icon: "@",
  },
  {
    title: "Live Presence",
    desc: "See who’s editing in real time with cursors and awareness indicators.",
    tag: "Realtime",
    icon: "👁",
  },
  {
    title: "Granular Permissions",
    desc: "Control access at workspace, doc, or section level with roles.",
    tag: "RBAC · SSO",
    icon: "🔒",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 lg:px-12 py-24 max-w-7xl mx-auto">
      
      {/* Heading */}
      <div className="mb-16">
        <p className="text-[11px] uppercase tracking-widest text-[#d4732a] mb-4">
          Core capabilities
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f5f2eb] max-w-xl">
          Everything your team needs to <span className="italic text-[#d4732a]">create together</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 rounded-2xl overflow-hidden border border-white/10">
        
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-[#161513] p-8 hover:bg-[#1c1a17] transition"
          >
            {/* Icon */}
            <div className="w-11 h-11 flex items-center justify-center rounded-lg mb-6 text-xl border border-white/10 bg-white/5">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="font-serif text-lg font-semibold text-white mb-2">
              {item.title}
            </h3>

            {/* Desc */}
            <p className="text-sm text-[#8a8778] leading-relaxed mb-4">
              {item.desc}
            </p>

            {/* Tag */}
            <span className="text-[10px] uppercase tracking-wider text-white/30 border border-white/10 px-3 py-1 rounded-full">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}