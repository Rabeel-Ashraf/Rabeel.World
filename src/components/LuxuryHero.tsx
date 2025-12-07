import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

const LuxuryHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!nameRef.current) return;

    // Animate letters on load
    const letters = nameRef.current.querySelectorAll('.letter');
    gsap.fromTo(letters,
      { 
        opacity: 0, 
        y: 100,
        rotateX: -90,
      },
      { 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: 'power4.out',
        delay: 0.5,
      }
    );
  }, []);

  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const name = "rabeel";
  const surname = "ashraf";

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle gradient background - monochrome */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, hsl(0 0% 20% / 0.3), transparent 60%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
      }} />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-eyebrow">
            ai specialist · engineer · founder
          </span>
        </motion.div>

        {/* Name - Ultra bold display */}
        <h1 
          ref={nameRef}
          className="text-display text-foreground mb-2 overflow-hidden perspective-1000"
          style={{
            transform: `translate3d(${mousePosition.x * -10}px, ${mousePosition.y * -10}px, 0)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div className="flex justify-center flex-wrap">
            {name.split('').map((letter, i) => (
              <span 
                key={`first-${i}`} 
                className="letter inline-block"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {letter}
              </span>
            ))}
          </div>
        </h1>

        <h1 
          className="text-display text-foreground mb-12 overflow-hidden"
          style={{
            transform: `translate3d(${mousePosition.x * -5}px, ${mousePosition.y * -5}px, 0)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {surname.split('').map((letter, i) => (
              <span 
                key={`last-${i}`} 
                className="inline-block text-shimmer"
              >
                {letter}
              </span>
            ))}
          </motion.div>
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-body text-muted-foreground max-w-xl mx-auto mb-12"
        >
          crafting intelligent systems that push the boundaries of what's possible.
          <br />
          <span className="text-foreground">dubai, uae</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={scrollToContent}
            className="btn-luxury magnetic"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-magnetic
          >
            <span>explore my work</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors magnetic"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <span className="text-eyebrow">scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-border/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-border/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-border/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-border/30" />
    </section>
  );
};

export default LuxuryHero;