import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="foot-logo">Collab<em>AI</em> Docs</div>
      <div className="foot-links">
        <a href="#">Product</a>
        <a href="#">Docs</a>
        <a href="#">Blog</a>
        <a href="#">GitHub</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
      <div className="foot-copy">© 2025 CollabAI Docs</div>
    </footer>
  );
}