import { useState } from 'react';
import Landing from '@/components/Landing';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const Index = () => {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return <Landing onEnter={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
