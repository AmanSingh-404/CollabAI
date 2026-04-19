import AISection from "./components/AISection";
import CRDTSection from "./components/CRDTSection";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";

export default function ComponentName() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <CRDTSection/>
      <AISection/>
      <Pricing/>
      {/* previous sections */}
      <Testimonials />
      <CTASection/>
    </div>
  );
}