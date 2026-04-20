import AISection from "./components/AISection";
import CRDTSection from "./components/CRDTSection";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/footer";

export default function ComponentName() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-item"><span>✦</span> CRDT Conflict-Free Sync</div>
          <div className="marquee-item"><span>✦</span> Real-Time Collaboration</div>
          <div className="marquee-item"><span>✦</span> AI Contextual Actions</div>
          <div className="marquee-item"><span>✦</span> Workspace-Wide Citations</div>
          <div className="marquee-item"><span>✦</span> Inline Comments & Mentions</div>
          <div className="marquee-item"><span>✦</span> Summarize · Rewrite · Query</div>
          <div className="marquee-item"><span>✦</span> CRDT Conflict-Free Sync</div>
          <div className="marquee-item"><span>✦</span> Real-Time Collaboration</div>
          <div className="marquee-item"><span>✦</span> AI Contextual Actions</div>
          <div className="marquee-item"><span>✦</span> Workspace-Wide Citations</div>
          <div className="marquee-item"><span>✦</span> Inline Comments & Mentions</div>
          <div className="marquee-item"><span>✦</span> Summarize · Rewrite · Query</div>
        </div>
      </div>
      <Features/>
      <CRDTSection/>
      <AISection/>
      <Pricing/>
      {/* previous sections */}
      <Testimonials />
      <CTASection/>
      <Footer/>
    </div>
  );
}