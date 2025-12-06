import { useState } from 'react';
import { motion } from 'framer-motion';
import LuxuryLanding from '@/components/LuxuryLanding';
import LuxuryNavbar from '@/components/LuxuryNavbar';
import LuxuryHero from '@/components/LuxuryHero';
import LuxuryAbout from '@/components/LuxuryAbout';
import LuxuryProjects from '@/components/LuxuryProjects';
import LuxurySkills from '@/components/LuxurySkills';
import LuxuryContact from '@/components/LuxuryContact';
import MagneticCursor from '@/components/MagneticCursor';

const Index = () => {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return <LuxuryLanding onEnter={() => setShowLanding(false)} />;
  }

  return (
    <motion.div 
      className="min-h-screen bg-background relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <MagneticCursor />
      <LuxuryNavbar />
      
      <main>
        <LuxuryHero />
        <LuxuryAbout />
        <LuxuryProjects />
        <LuxurySkills />
        <LuxuryContact />
      </main>
    </motion.div>
  );
};

export default Index;
