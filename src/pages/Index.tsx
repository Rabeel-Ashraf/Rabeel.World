import { useState } from 'react';
import Landing from '@/components/Landing';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const Index = () => {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return <Landing onEnter={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Placeholder sections for future content */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-orbitron font-bold text-neon mb-4">About Section</h2>
          <p className="text-muted-foreground">Coming soon with 3D timeline...</p>
        </div>
      </section>
      
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-orbitron font-bold text-neon mb-4">Projects Section</h2>
          <p className="text-muted-foreground">3D project cards coming soon...</p>
        </div>
      </section>
      
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-orbitron font-bold text-neon mb-4">Skills Section</h2>
          <p className="text-muted-foreground">Animated skill orbs coming soon...</p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-orbitron font-bold text-neon mb-4">Contact Section</h2>
          <p className="text-muted-foreground">Neon contact form coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
