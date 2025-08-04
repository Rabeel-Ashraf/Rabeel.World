import { useState } from 'react';
import Landing from '@/components/Landing';
import Navbar from '@/components/Navbar';
import OptimizedHero from '@/components/OptimizedHero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return <Landing onEnter={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <OptimizedHero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
