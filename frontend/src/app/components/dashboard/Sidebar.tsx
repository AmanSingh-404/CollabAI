"use client";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Top */}
      <div className="sb-top">
        <a className="sb-logo" href="/">
          Collab<em>AI</em> Docs
        </a>

        <div className="sb-ws">
          <div className="sb-ws-av">N</div>
          <span className="sb-ws-name">Nexus Workspace</span>
          <span className="sb-ws-chevron">⌄</span>
        </div>
      </div>

      {/* Scroll */}
      <div className="sb-scroll">

        <div className="sb-section">Main</div>

        <a className="nav-item active">
          <span className="nav-icon">⊞</span> Dashboard
        </a>

        <a className="nav-item">
          <span className="nav-icon">◈</span> All Documents
          <span className="nav-badge">24</span>
        </a>

        <a className="nav-item">
          <span className="nav-icon">★</span> Starred
        </a>

        <a className="nav-item">
          <span className="nav-icon">⏱</span> Recent
        </a>

        <div className="sb-section">Workspace</div>

        <a className="nav-item">
          <span className="nav-icon">@</span> Mentions
          <span className="nav-badge">5</span>
        </a>

        <a className="nav-item">
          <span className="nav-icon">✎</span> Comments
          <span className="nav-badge blue">12</span>
        </a>

        <a className="nav-item">
          <span className="nav-icon">✦</span> AI Assistant
        </a>

        <a className="nav-item">
          <span className="nav-icon">↗</span> Shared with me
        </a>

      </div>

      {/* Bottom */}
      <div className="sb-bottom">
        <div className="sb-user">
          <div className="sb-av">AS</div>
          <div>
            <div className="sb-name">Aman Singh</div>
            <div className="sb-role">Admin · Free plan</div>
          </div>
          <span className="sb-settings">⋯</span>
        </div>
      </div>
    </aside>
  );
}