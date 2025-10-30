import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import Scene3D from './3d/Scene3D';

interface LandingProps {
  onEnter: () => void;
}

const Landing = ({ onEnter }: LandingProps) => {
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio('/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

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
        audioRef.current.play().catch(err => {
          console.log('Audio playback failed:', err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicEnabled]);

  const handleEnterUniverse = () => {
    setIsEntering(true);
    setTimeout(() => {
      onEnter();
    }, 1500);
  };

  const toggleMusic = () => {
    setMusicEnabled(!musicEnabled);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* 3D Background Scene */}
        <div className="absolute inset-0">
          <Scene3D />
        </div>
        
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
          
          {/* Music Toggle */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
            onClick={toggleMusic}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 md:p-3 rounded-full glass hover:glow-primary transition-all duration-300"
          >
            {musicEnabled ? <Volume2 className="w-5 h-5 md:w-6 md:h-6" /> : <VolumeX className="w-5 h-5 md:w-6 md:h-6" />}
          </motion.button>
          
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6 mb-12"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-orbitron font-black text-neon">
              RABEEL.WORLD
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-inter text-muted-foreground max-w-2xl px-4">
              Welcome to the digital universe of AI innovation, engineering excellence, 
              and futuristic vision
            </p>
          </motion.div>
          
          {/* Code Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mb-12 space-y-2 font-mono text-xs sm:text-sm text-accent px-4"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2, duration: 2 }}
              className="overflow-hidden whitespace-nowrap"
            >
              {'> Initializing AI consciousness...'}
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 3, duration: 2 }}
              className="overflow-hidden whitespace-nowrap"
            >
              {'> Loading neural networks...'}
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 4, duration: 2 }}
              className="overflow-hidden whitespace-nowrap"
            >
              {'> Quantum computing protocols active...'}
            </motion.div>
          </motion.div>
          
          {/* Enter Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5, duration: 0.8 }}
          >
            <Button
              onClick={handleEnterUniverse}
              disabled={isEntering}
              size="lg"
              className={`
                font-orbitron font-bold text-sm sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-full
                bg-background border-2 border-foreground/20 text-foreground
                hover:bg-foreground/5 hover:border-foreground/40 transition-all duration-300
                ${isEntering ? 'opacity-50' : ''}
              `}
            >
              {isEntering ? 'ENTERING UNIVERSE...' : 'ENTER MY UNIVERSE'}
            </Button>
          </motion.div>
          
          {/* Holographic Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground font-inter">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span>AI Systems Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span>Quantum Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <span>Neural Networks Active</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Transition Effect */}
        {isEntering && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 100, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full"
            style={{ 
              left: '50%', 
              top: '50%', 
              transform: 'translate(-50%, -50%)',
              width: '10px',
              height: '10px'
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Landing;