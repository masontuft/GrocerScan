import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Hero from '@/sections/Hero';
import ProblemStats from '@/sections/ProblemStats';
import HowItWorks from '@/sections/HowItWorks';
import Features from '@/sections/Features';
import Roadmap from '@/sections/Roadmap';
import CTA from '@/sections/CTA';

function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Nav />
      <main>
        <Hero />
        <ProblemStats />
        <HowItWorks />
        <Features />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
