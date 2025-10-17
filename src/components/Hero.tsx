import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Instagram, MessageCircle } from 'lucide-react';
import rabeelProfile from '@/assets/rabeel-profile.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 code-rain opacity-30"></div>
      
      {/* Particle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 max-w-6xl">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Profile Image with Glow */}
          <motion.div 
            className="relative mx-auto w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden glow-primary"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img 
              src={rabeelProfile} 
              alt="Rabeel Ashraf" 
              className="w-full h-full object-cover rounded-full"
            />
            {/* Rotating Ring */}
            <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-spin" 
                 style={{ animationDuration: '8s' }}></div>
          </motion.div>
          
          {/* Dynamic Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-orbitron font-bold text-neon">
              Rabeel Ashraf
            </h1>
            
            {/* Animated Role Titles */}
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl font-inter text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.span
                key="title"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block"
              >
                AI Specialist | Engineer | Founder | Visionary
              </motion.span>
            </motion.div>
          </motion.div>
          
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full"
          >
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
            <span className="text-sm font-medium">United Arab Emirates</span>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg"
              className="font-orbitron font-bold bg-gradient-to-r from-primary to-secondary hover:glow-primary transition-all duration-300 group"
              onClick={() => {
                const url = 'https://wa.me/971501359046?text=Hi%20Rabeel,%20I%20would%20like%20to%20hire%20you%20for%20a%20project';
                const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
                if (newWindow) newWindow.opener = null;
              }}
            >
              <MessageCircle className="mr-2 group-hover:animate-bounce" />
              Hire Me
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="font-orbitron border-primary/50 hover:bg-primary/10 hover:glow-primary transition-all duration-300"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Portfolio
            </Button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/Rabeel-Ashraf', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/rabeel-ashraf-721105204', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:mrperfect6ft@gmail.com', label: 'Email' },
              { icon: Instagram, href: '#', label: 'Instagram' }
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:glow-primary transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <Icon className="w-6 h-6 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-muted-foreground font-inter">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-8 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;