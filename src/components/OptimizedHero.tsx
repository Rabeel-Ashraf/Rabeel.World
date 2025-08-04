import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Instagram, 
  MapPin, 
  ArrowDown,
  MessageCircle 
} from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Preload critical image
import rabeelProfile from '@/assets/rabeel-profile.jpg';

const OptimizedHero = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const roles = ["AI Specialist", "Mechanical Engineer", "Founder"];
  const [currentRole, setCurrentRole] = useState(0);

  // Optimized role cycling
  const cycleRole = useCallback(() => {
    setCurrentRole((prev) => (prev + 1) % roles.length);
  }, [roles.length]);

  const handleHireMe = () => {
    window.open('https://wa.me/+971528493175', '_blank', 'noopener,noreferrer');
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section 
      ref={elementRef}
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden"
      id="hero"
    >
      {/* Performance-optimized background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        {/* Optimized profile image with lazy loading behavior */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isIntersecting ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-8 relative inline-block"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
            {/* Performance ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin" 
                 style={{ animationDuration: '8s' }} />
            <div className="absolute inset-1 rounded-full bg-background" />
            
            {/* Optimized image */}
            <img
              src={rabeelProfile}
              alt="Rabeel Ashraf - AI Specialist"
              className="absolute inset-2 w-full h-full object-cover rounded-full"
              loading="eager"
              decoding="async"
              width="128"
              height="128"
            />
            
            {/* Efficient glow effect */}
            <div className="absolute inset-0 rounded-full glow-primary opacity-50" />
          </div>
        </motion.div>

        {/* Name with reduced animation complexity */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black mb-4 text-neon"
        >
          Rabeel Ashraf
        </motion.h1>

        {/* Role with optimized cycling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <motion.h2
            key={currentRole}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-3xl lg:text-4xl font-inter font-light text-primary mb-4"
            onAnimationComplete={() => {
              setTimeout(cycleRole, 2000);
            }}
          >
            {roles[currentRole]}
          </motion.h2>
        </motion.div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <Badge variant="outline" className="px-4 py-2 text-sm border-accent/50 text-accent">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="relative">
              UAE
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
            </span>
          </Badge>
        </motion.div>

        {/* CTA Buttons - Reduced complexity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            onClick={handleHireMe}
            size="lg"
            className="group px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:glow-primary transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Hire Me
          </Button>
          
          <Button
            onClick={scrollToProjects}
            variant="outline"
            size="lg"
            className="px-8 py-3 border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            View Portfolio
          </Button>
        </motion.div>

        {/* Social links - Simplified animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/Rabeel-Ashraf", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "mailto:rabeelashraf21@gmail.com", label: "Email" },
            { icon: Instagram, href: "#", label: "Instagram" }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-3 rounded-full glass hover:glow-primary transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon className="w-6 h-6 group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <span className="text-sm font-inter">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OptimizedHero;