"use client";

import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Instrument+Sans:wght@300;400;500&display=swap');
      `}} />

      {/* NAV */}
      <nav>
        <Link href="/" className="nav-logo">Collab<em>AI</em> Docs</Link>
      </nav>

      {/* Floating lost cursors */}
      <div className="cursor-float cursor-a cf-orange">
        <div className="cf-line"></div>
        <div className="cf-label">Sara R.</div>
      </div>
      <div className="cursor-float cursor-b cf-teal">
        <div className="cf-line"></div>
        <div className="cf-label">Kai L.</div>
      </div>
      <div className="cursor-float cursor-c cf-blue">
        <div className="cf-line"></div>
        <div className="cf-label">Maya P.</div>
      </div>

      <main className="page">
        {/* Big 404 */}
        <div className="error-num">404</div>

        {/* Broken document card */}
        <div className="broken-doc">
          <div className="doc-card">
            <div className="doc-bar">
              <div className="db-dot db-r"></div>
              <div className="db-dot db-y"></div>
              <div className="db-dot db-g"></div>
              <span className="db-title">untitled_document_∅</span>
              <div className="db-warn">
                <span className="db-warn-icon">⚠</span>
                SYNC FAILED · DOCUMENT MISSING
              </div>
            </div>

            <div className="doc-body">
              <div className="doc-broken-title">
                [Page you were looking for]
              </div>

              <div className="broken-lines">
                <div className="b-line w90"></div>
                <div className="b-line w70"></div>
                <div className="b-line w85 missing"></div>
                <div className="b-line w50"></div>
                <div className="b-line w85"></div>
                <div className="b-line w60 missing"></div>
                <div className="b-line w90"></div>
                <div className="b-line w70"></div>
              </div>

              <div className="doc-ai-strip">
                <div className="ai-strip-dot"></div>
                <div>
                  <strong>AI:</strong> I searched the entire workspace and couldn't find this document. It may have been deleted, moved, or the link might be wrong. Want me to <strong>search for something similar?</strong>
                </div>
              </div>
            </div>

            <div className="doc-status">
              <div className="status-err">
                <div className="status-err-dot"></div>
                CRDT sync error — document not found
              </div>
              <span>·</span>
              <span>0 collaborators</span>
              <span>·</span>
              <span>Last seen: never</span>
            </div>
          </div>
        </div>

        {/* Error text */}
        <div className="error-content">
          <div className="error-code-badge">
            <div className="ecb-dot"></div>
            Error 404 · Not found
          </div>
          <h1 className="error-title">This document got<br/><em>lost in the merge.</em></h1>
          <p className="error-desc">The page you're looking for doesn't exist, was deleted, or the link is broken. Even our CRDT engine couldn't recover it.</p>

          <div className="error-actions">
            <Link href="/" className="btn-home">← Back to home</Link>
            <button className="btn-back" onClick={() => window.history.back()}>Go back</button>
          </div>
        </div>

        <div className="content-sep"></div>

        {/* Quick links */}
        <div className="quick-links">
          <Link href="/auth" className="ql-item">
            <div className="ql-icon">◈</div>
            <div className="ql-label">Dashboard</div>
          </Link>
          <Link href="/auth" className="ql-item">
            <div className="ql-icon">✦</div>
            <div className="ql-label">AI Assistant</div>
          </Link>
          <Link href="/auth" className="ql-item">
            <div className="ql-icon">@</div>
            <div className="ql-label">Mentions</div>
          </Link>
          <Link href="/" className="ql-item">
            <div className="ql-icon">?</div>
            <div className="ql-label">Help center</div>
          </Link>
          <Link href="/" className="ql-item">
            <div className="ql-icon">↗</div>
            <div className="ql-label">Status page</div>
          </Link>
        </div>

      </main>
    </div>
  );
}
