"use client";

export default function Topbar() {
  return (
    <div className="topbar">

      {/* Search */}
      <div className="tb-search">
        <span className="tb-search-icon">⌕</span>
        <input placeholder="Search documents, people, AI…" />
        <span className="tb-search-kbd">⌘K</span>
      </div>

      {/* Right */}
      <div className="tb-right">

        <div className="tb-icon-btn">
          🔔
          <div className="tb-notif-dot"></div>
        </div>

        <div className="tb-icon-btn">?</div>

        <button className="tb-new-doc">
          + New doc
        </button>

      </div>
    </div>
  );
}