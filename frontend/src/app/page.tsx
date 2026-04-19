import AISection from "./components/AISection";
import CRDTSection from "./components/CRDTSection";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function ComponentName() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <CRDTSection/>
      <AISection/>
    </div>
  );
}