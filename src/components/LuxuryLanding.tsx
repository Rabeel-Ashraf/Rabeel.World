import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import gsap from 'gsap';

interface LuxuryLandingProps {
  onEnter: () => void;
}

const LuxuryLanding = ({ onEnter }: LuxuryLandingProps) => {
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    audioRef.current = new Audio('/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (musicEnabled) {
        audioRef.current.play().catch(console.log);
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicEnabled]);

  // Simulate loading
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsEntering(true);
    
    // Animate out
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut',
        onComplete: onEnter,
      });
    } else {
      setTimeout(onEnter, 1000);
    }
  };

  const name = "rabeel ashraf";

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Subtle gradient - monochrome */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/5 via-transparent to-muted/5" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />

        {/* Music toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() => setMusicEnabled(!musicEnabled)}
          className="absolute top-6 right-6 p-3 rounded-full border border-border hover:border-foreground/30 transition-colors magnetic"
        >
          {musicEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </motion.button>

        {/* Main content */}
        <div className="text-center px-6">
          {/* Name reveal */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-display text-foreground tracking-tighter"
            >
              {name.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  className={letter === ' ' ? 'inline-block w-4 md:w-8' : 'inline-block'}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-eyebrow mb-16"
          >
            ai specialist · engineer · founder
          </motion.p>

          {/* Enter button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: loadProgress >= 100 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={handleEnter}
              disabled={isEntering || loadProgress < 100}
              className="group relative px-12 py-5 text-sm tracking-[0.3em] lowercase border border-foreground/15 hover:border-foreground/30 transition-all duration-500 overflow-hidden magnetic"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background fill on hover */}
              <motion.div
                className="absolute inset-0 bg-foreground"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
              />
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
                {isEntering ? 'entering...' : 'enter'}
              </span>
            </motion.button>
          </motion.div>

          {/* Loading indicator */}
          {loadProgress < 100 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8"
            >
              <div className="w-48 h-px bg-border mx-auto overflow-hidden">
                <motion.div
                  className="h-full bg-foreground"
                  style={{ width: `${Math.min(loadProgress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-eyebrow mt-4">
                loading {Math.min(Math.round(loadProgress), 100)}%
              </p>
            </motion.div>
          )}
        </div>

        {/* Corner accents */}
        <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-border/20" />
        <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-border/20" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-l border-b border-border/20" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-border/20" />

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-eyebrow opacity-50">
            dubai, uae · {new Date().getFullYear()}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LuxuryLanding;